#!/usr/bin/env python3
"""
Controleert of de tweetaligheid (data-nl / data-en) op alle pagina's klopt.

lang.js zet bij het laden el.innerHTML = el.getAttribute('data-' + taal).
Online is dus het data-nl-attribuut wat je ziet, niet de zichtbare HTML-tekst
in de bron. Wijken die twee af, dan zie je lokaal iets anders dan online.

Controles per element met data-nl of data-en:
  1. beide attributen aanwezig en niet leeg
  2. zichtbare inhoud == data-nl (na normalisatie van witruimte/entities)

    python3 tools/check_lang_sync.py            # alle pagina's
    python3 tools/check_lang_sync.py pad.html   # alleen deze bestanden
    python3 tools/check_lang_sync.py --fix      # zichtbare tekst := data-nl

Exitcode 1 bij fouten (bruikbaar in CI).
Materiaaltabellen worden door materiaal.js gerenderd en vallen hier buiten.
"""
import glob
import html
import os
import re
import sys

from bs4 import BeautifulSoup

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def norm(s):
    s = html.unescape(s)
    s = re.sub(r'\s+', ' ', s).strip()
    # attribuutvolgorde/quotes binnen inline tags gelijktrekken
    s = re.sub(r'\s*/>', '>', s)
    return s


def inner(el):
    return ''.join(str(c) for c in el.contents)


def check_file(path, fix=False):
    src = open(path, encoding='utf-8').read()
    soup = BeautifulSoup(src, 'html.parser')
    errors = []
    changed = False
    for el in soup.find_all(lambda t: t.has_attr('data-nl') or t.has_attr('data-en')):
        if el.name == 'title' or el.name == 'meta':
            pass
        nl = el.get('data-nl')
        en = el.get('data-en')
        tag = f'<{el.name}>'
        if nl is None or en is None or not str(nl).strip() or not str(en).strip():
            errors.append(f'  ontbrekend attribuut {tag}: nl={bool(nl)} en={bool(en)} — "{(nl or en or "")[:60]}"')
            continue
        vis = inner(el)
        # inhoud opnieuw parsen zodat beide kanten dezelfde serialisatie krijgen
        nl_ser = inner(BeautifulSoup(nl, 'html.parser'))
        if norm(vis) != norm(nl_ser):
            errors.append(f'  mismatch {tag}:\n    zichtbaar: {norm(vis)[:110]}\n    data-nl:   {norm(nl_ser)[:110]}')
            if fix:
                el.clear()
                for c in list(BeautifulSoup(nl, 'html.parser').contents):
                    el.append(c)
                changed = True
    if fix and changed:
        open(path, 'w', encoding='utf-8').write(str(soup))
    return errors


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    fix = '--fix' in sys.argv
    os.chdir(ROOT)
    files = args or sorted(glob.glob('**/*.html', recursive=True))
    total = 0
    for f in files:
        errs = check_file(f, fix)
        if errs:
            print(f'{f}: {len(errs)} probleem/problemen')
            print('\n'.join(errs))
            total += len(errs)
    print(f'\n{len(files)} bestanden gecontroleerd — {total} probleem/problemen'
          + (' (gefixt)' if fix and total else ''))
    sys.exit(1 if total and not fix else 0)


if __name__ == '__main__':
    main()
