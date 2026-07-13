#!/usr/bin/env python3
"""
Werkt de pre-cache lijst in sw.js bij.

Draai dit na het toevoegen of hernoemen van een pagina of afbeelding.
Zonder dit staat een nieuwe pagina niet in de cache en werkt hij niet offline.

    python3 tools/update_sw_cache.py

Verhoogt NIET automatisch CACHE_VERSION — doe dat handmatig bij een release,
zodat gebruikers de nieuwe cache daadwerkelijk binnenhalen.
"""
import glob
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

ASSETS = [
    '/style.css', '/nav.js', '/search.js', '/lang.js', '/procedures.js',
    '/materiaal.js', '/verslag.js', '/fuse.min.js', '/site.webmanifest',
    '/favicon.ico', '/favicon-16.png', '/favicon-32.png', '/favicon-48.png',
    '/favicon-192.png', '/favicon-512.png', '/apple-touch-icon.png',
]

pages = sorted('/' + p.replace(os.sep, '/') for p in glob.glob('**/*.html', recursive=True))
images = sorted(
    '/' + p.replace(os.sep, '/')
    for p in glob.glob('image/**/*', recursive=True)
    if os.path.isfile(p)
)
missing = [a for a in ASSETS if not os.path.isfile(a.lstrip('/'))]
if missing:
    print('Waarschuwing — deze assets bestaan niet en worden overgeslagen:')
    for m in missing:
        print('   ', m)
assets = [a for a in ASSETS if a not in missing]

entries = ["  '/',"] + [f"  '{p}'," for p in pages + assets + images]
block = 'const CORE = [\n' + '\n'.join(entries) + '\n];'

sw = open('sw.js', encoding='utf-8').read()
new_sw, n = re.subn(r'const CORE = \[.*?\];', block, sw, flags=re.S)
if n != 1:
    sys.exit('FOUT: CORE-lijst niet gevonden in sw.js')

if new_sw == sw:
    print(f'sw.js was al up-to-date ({len(entries)} entries).')
else:
    open('sw.js', 'w', encoding='utf-8').write(new_sw)
    print(f'sw.js bijgewerkt: {len(pages)} pagina\'s, {len(assets)} assets, '
          f'{len(images)} afbeeldingen = {len(entries)} entries.')

version = re.search(r"CACHE_VERSION = '([^']+)'", new_sw)
if version:
    print(f"Huidige CACHE_VERSION: {version.group(1)} "
          f"— verhoog deze bij een release.")
