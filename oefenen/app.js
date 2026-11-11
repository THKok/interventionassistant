const QUESTIONS = window.__QUESTIONS || [];
const DIAGNOSES = window.__DIAGNOSES || [];
const ZOO_DEFS = "<radialGradient id=\"zbg\" cx=\"50%\" cy=\"42%\" r=\"65%\"><stop offset=\"0\" stop-color=\"#1b2d4f\"/><stop offset=\".7\" stop-color=\"#0a1428\"/><stop offset=\"1\" stop-color=\"#050a16\"/><\/radialGradient><filter id=\"zsoft\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\"><feGaussianBlur stdDeviation=\"2.2\"/><\/filter><filter id=\"zbone\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\"><feGaussianBlur stdDeviation=\".9\" result=\"b\"/><feMerge><feMergeNode in=\"b\"/><feMergeNode in=\"SourceGraphic\"/><\/feMerge><\/filter><filter id=\"zmetal\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\"><feGaussianBlur stdDeviation=\"1.6\" result=\"b\"/><feMerge><feMergeNode in=\"b\"/><feMergeNode in=\"SourceGraphic\"/><\/feMerge><\/filter><filter id=\"zglow\" x=\"-30%\" y=\"-30%\" width=\"160%\" height=\"160%\"><feGaussianBlur stdDeviation=\"3\" result=\"b\"/><feMerge><feMergeNode in=\"b\"/><feMergeNode in=\"SourceGraphic\"/><\/feMerge><\/filter><linearGradient id=\"zr-brons\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#e7a873\"/><stop offset=\".5\" stop-color=\"#a8642f\"/><stop offset=\"1\" stop-color=\"#e0a06a\"/><\/linearGradient><linearGradient id=\"zr-zilver\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#f4f7fb\"/><stop offset=\".5\" stop-color=\"#9aa6b5\"/><stop offset=\"1\" stop-color=\"#e9eef4\"/><\/linearGradient><linearGradient id=\"zr-goud\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#fff0a8\"/><stop offset=\".45\" stop-color=\"#d9a21b\"/><stop offset=\"1\" stop-color=\"#ffe27a\"/><\/linearGradient><clipPath id=\"zclip\"><circle cx=\"60\" cy=\"60\" r=\"54\"/><\/clipPath><g id=\"z-baret\" filter=\"url(#zmetal)\"><path d=\"M60 4 L92 15 L60 26 L28 15 Z\" fill=\"#fff\"/><path d=\"M42 20 L42 27 C48 31 72 31 78 27 L78 20\" fill=\"#fff\"/><path d=\"M92 15 L93 30\" stroke=\"#fff\" stroke-width=\"1.6\"/><circle cx=\"93\" cy=\"31.5\" r=\"2.4\" fill=\"#fff\"/><\/g><g id=\"z-kat-s\">\n   <g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\".2\">\n    <path d=\"M31 62 C30 50 33 42 36 34 C40 44 46 46 52 44 C57 42 63 42 68 44 C74 46 80 44 84 34 C87 42 90 50 89 62 C89 78 77 90 60 90 C43 90 31 78 31 62 Z\"/>\n    <path d=\"M44 86 C40 98 24 106 16 124 L104 124 C96 106 80 98 76 86 Z\"/>\n   <\/g>\n   <g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\".34\"><path d=\"M33 50 L35 16 L56 40 Z\"/><path d=\"M87 50 L85 16 L64 40 Z\"/><\/g>\n   <g stroke=\"#cfe0ff\" stroke-opacity=\".45\" stroke-width=\"1\" fill=\"none\" stroke-linejoin=\"round\"><path d=\"M34 48 L35.5 18 L54 39\"/><path d=\"M86 48 L84.5 18 L66 39\"/><\/g>\n  <\/g>\n  <g id=\"z-kat-b\">\n   <g stroke=\"#cfe0ff\" stroke-opacity=\".5\" stroke-width=\".8\" fill=\"none\" stroke-linecap=\"round\"><path d=\"M47 74 L16 69 M47 77 L17 80 M47 80 L20 89 M73 74 L104 69 M73 77 L103 80 M73 80 L100 89\"/><\/g>\n   <g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n    <path d=\"M42 54 C42 38 50 33 60 33 C70 33 78 38 78 54\" stroke-width=\"2.2\" fill=\"#eef5ff\" fill-opacity=\".1\"/>\n    <path d=\"M40 56 C34 60 33 68 37 72 C40 75 44 74 47 72\" stroke-width=\"2.6\"/>\n    <path d=\"M80 56 C86 60 87 68 83 72 C80 75 76 74 73 72\" stroke-width=\"2.6\"/>\n    <ellipse cx=\"49\" cy=\"59\" rx=\"9\" ry=\"8.5\" stroke-width=\"2\" fill=\"#050a16\" fill-opacity=\".6\"/>\n    <ellipse cx=\"71\" cy=\"59\" rx=\"9\" ry=\"8.5\" stroke-width=\"2\" fill=\"#050a16\" fill-opacity=\".6\"/>\n    <path d=\"M56.5 66 L63.5 66 L62 74 L58 74 Z\" stroke-width=\"1.6\" fill=\"#eef5ff\" fill-opacity=\".3\"/>\n    <path d=\"M57.5 72.5 L60 76 L62.5 72.5\" stroke-width=\"1.4\" fill=\"#050a16\"/>\n    <path d=\"M48 75 C50 82 54 85 60 85 C66 85 70 82 72 75\" stroke-width=\"2.3\"/>\n    <path d=\"M54.5 76 L53.5 83.5 L56 78.5 M65.5 76 L66.5 83.5 L64 78.5\" stroke-width=\"1.6\" fill=\"#eef5ff\"/>\n    <g fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\">\n     <rect x=\"55\" y=\"92\" width=\"10\" height=\"5\" rx=\"1.6\"/><rect x=\"54.5\" y=\"99.5\" width=\"11\" height=\"5.5\" rx=\"1.6\"/><rect x=\"54\" y=\"107.5\" width=\"12\" height=\"6\" rx=\"1.8\"/><rect x=\"53.5\" y=\"116\" width=\"13\" height=\"6.5\" rx=\"2\"/>\n    <\/g>\n    <path d=\"M30 117 C38 111 46 109 53 110 M90 117 C82 111 74 109 67 110\" stroke-width=\"2.4\"/>\n   <\/g>\n  <\/g><g id=\"z-uil-s\"><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\".2\">\n    <path d=\"M32 52 C32 38 36 30 38 18 L50 30 C56 27 64 27 70 30 L82 18 C84 30 88 38 88 52 C88 66 80 76 60 78 C40 76 32 66 32 52 Z\"/>\n    <path d=\"M38 70 C26 82 24 104 30 124 L90 124 C96 104 94 82 82 70 C74 78 46 78 38 70 Z\"/>\n   <\/g>\n   <g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\".3\"><path d=\"M40 34 C35 27 30 20 25 12 C34 17 42 23 49 30 Z\"/><path d=\"M80 34 C85 27 90 20 95 12 C86 17 78 23 71 30 Z\"/><\/g>\n   <g stroke=\"#cfe0ff\" stroke-opacity=\".38\" stroke-width=\".9\" fill=\"none\" stroke-linecap=\"round\"><path d=\"M41 31 C36 25 31 19 26 13 M44 30 C39 24 35 19 31 14 M47 29 C43 25 40 21 36 17\"/><path d=\"M79 31 C84 25 89 19 94 13 M76 30 C81 24 85 19 89 14 M73 29 C77 25 80 21 84 17\"/><\/g>\n   <\/g><g id=\"z-uil-b\"><g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n    <ellipse cx=\"60\" cy=\"47\" rx=\"21\" ry=\"16\" stroke-width=\"2.1\" fill=\"#eef5ff\" fill-opacity=\".1\"/>\n    <circle cx=\"48\" cy=\"52\" r=\"10.5\" stroke-width=\"3.6\" stroke-dasharray=\"3.4 2.1\" fill=\"#050a16\" fill-opacity=\".6\"/>\n    <circle cx=\"72\" cy=\"52\" r=\"10.5\" stroke-width=\"3.6\" stroke-dasharray=\"3.4 2.1\" fill=\"#050a16\" fill-opacity=\".6\"/>\n    <path d=\"M56 60 C56 58 64 58 64 60 L61.5 71 C61 73.5 59 73.5 58.5 71 Z\" stroke-width=\"1.6\" fill=\"#eef5ff\" fill-opacity=\".9\"/>\n    <g fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\">\n     <rect x=\"56.5\" y=\"78\" width=\"7\" height=\"4\" rx=\"1.4\"/><rect x=\"57.5\" y=\"83.5\" width=\"7\" height=\"4\" rx=\"1.4\"/><rect x=\"57\" y=\"89\" width=\"7\" height=\"4\" rx=\"1.4\"/>\n    <\/g>\n    <path d=\"M42 96 C48 108 54 112 60 112 C66 112 72 108 78 96\" stroke-width=\"2.4\"/>\n    <path d=\"M60 104 L60 124\" stroke-width=\"2.6\"/>\n    <path d=\"M36 82 C32 94 31 106 33 122 M41 84 C37 96 36 108 38 122\" stroke-width=\"2\"/>\n    <path d=\"M84 82 C88 94 89 106 87 122 M79 84 C83 96 84 108 82 122\" stroke-width=\"2\"/>\n   <\/g>\n  <\/g><g id=\"z-vis-s\"><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\".2\">\n    <path d=\"M14 62 C22 44 44 34 68 38 C80 40 88 46 94 54 L110 40 C107 50 106 56 106 62 C106 68 107 74 110 84 L94 70 C88 78 80 84 68 86 C44 90 22 80 14 62 Z\"/>\n    <path d=\"M48 38 C54 26 66 22 76 26 L72 42 Z\"/>\n    <path d=\"M56 84 C60 94 68 98 74 96 L70 82 Z\"/>\n   <\/g>\n   <\/g><g id=\"z-vis-b\"><g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n    <path d=\"M30 46 C38 52 40 66 32 78\" stroke-width=\"2.2\"/>\n    <path d=\"M18 60 C22 54 28 50 34 48\" stroke-width=\"1.8\"/>\n    <path d=\"M16 64 L28 67 L33 74\" stroke-width=\"2\"/>\n    <circle cx=\"25\" cy=\"56\" r=\"4.6\" stroke-width=\"1.8\" fill=\"#050a16\" fill-opacity=\".6\"/>\n    <path d=\"M36 62 L97 61\" stroke-width=\"3\"/>\n    <g stroke-width=\"1.5\">\n     <path d=\"M42 61 C43 54 44 50 46 46\"/><path d=\"M48 61 C49 53 51 47 53 42\"/><path d=\"M54 61 C55 52 57 46 60 40\"/><path d=\"M60 61 C61 52 63 46 66 41\"/><path d=\"M66 61 C67 53 69 48 72 44\"/><path d=\"M72 61 C73 55 75 51 78 48\"/><path d=\"M78 61 C79 56 81 53 84 51\"/><path d=\"M84 61 C85 58 87 56 89 55\"/>\n     <path d=\"M42 62 C43 70 44 75 46 79\"/><path d=\"M48 62 C49 71 51 77 53 81\"/><path d=\"M54 62 C55 72 57 78 60 82\"/><path d=\"M60 62 C61 71 63 77 66 80\"/><path d=\"M66 62 C67 70 69 75 72 78\"/><path d=\"M72 62 C73 68 75 72 78 74\"/><path d=\"M78 62 C79 66 81 69 84 70\"/><path d=\"M84 62 C85 64 87 66 89 66\"/>\n    <\/g>\n    <g stroke-width=\"1.2\" stroke-opacity=\".85\"><path d=\"M55 40 L52 31 M60 39 L59 28 M65 39 L66 28 M70 40 L72 31\"/><path d=\"M62 82 L62 91 M66 81 L68 91\"/>\n     <path d=\"M97 61 L108 44 M97 61 L106 52 M97 61 L105 61 M97 61 L106 70 M97 61 L108 79\"/><\/g>\n   <\/g>\n  <\/g><g id=\"z-kikker-s\"><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.2\"><path d=\"M60 26 C77 26 84 38 82 54 C81 70 75 84 60 88 C45 84 39 70 38 54 C36 38 43 26 60 26 Z\"/><\/g><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.26\"><circle cx=\"47\" cy=\"31\" r=\"8\"/><circle cx=\"73\" cy=\"31\" r=\"8\"/><\/g><g filter=\"url(#zsoft)\" fill=\"none\" stroke=\"#cfe0ff\" stroke-opacity=\"0.2\" stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M44 54 C34 56 28 64 24 74 M76 54 C86 56 92 64 96 74\"/><\/g><g filter=\"url(#zsoft)\" fill=\"none\" stroke=\"#cfe0ff\" stroke-opacity=\"0.2\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M54 90 C42 84 34 88 30 100 C38 106 46 106 52 104 M66 90 C78 84 86 88 90 100 C82 106 74 106 68 104\"/><\/g><\/g><g id=\"z-kikker-b\"><g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M43 38 C43 27 51 22 60 22 C69 22 77 27 77 38 C77 44 70 46 60 46 C50 46 43 44 43 38 Z\" stroke-width=\"2.1\" fill=\"#eef5ff\" fill-opacity=\"0.1\"/><ellipse cx=\"50.5\" cy=\"34\" rx=\"6.5\" ry=\"5.8\" stroke-width=\"2\" fill=\"#050a16\" fill-opacity=\"0.6\"/><ellipse cx=\"69.5\" cy=\"34\" rx=\"6.5\" ry=\"5.8\" stroke-width=\"2\" fill=\"#050a16\" fill-opacity=\"0.6\"/><rect x=\"58.0\" y=\"47.8\" width=\"3.9\" height=\"6\" rx=\"1.5\" transform=\"rotate(90.0 60.0 50.8)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"58.0\" y=\"53.2\" width=\"3.9\" height=\"6\" rx=\"1.5\" transform=\"rotate(90.0 60.0 56.2)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"58.0\" y=\"58.8\" width=\"3.9\" height=\"6\" rx=\"1.5\" transform=\"rotate(90.0 60.0 61.8)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"58.0\" y=\"64.2\" width=\"3.9\" height=\"6\" rx=\"1.5\" transform=\"rotate(90.0 60.0 67.2)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><path d=\"M57 51 L47 49 M57 56 L48 56 M57 62 L49 63\" stroke-width=\"1.8\"/><path d=\"M 63 51 L 73 49 M 63 56 L 72 56 M 63 62 L 71 63\" stroke-width=\"1.8\"/><path d=\"M58 71 L46 75 L55 93\" stroke-width=\"2.3\"/><path d=\"M 62 71 L 74 75 L 65 93\" stroke-width=\"2.3\"/><path d=\"M60 72 L60 92\" stroke-width=\"2.6\"/><path d=\"M50 51 L40 57 L31 68 M31 68 L27 74 M31 68 L30 75 M31 68 L34 74\" stroke-width=\"1.9\"/><path d=\"M 70 51 L 80 57 L 89 68 M 89 68 L 93 74 M 89 68 L 90 75 M 89 68 L 86 74\" stroke-width=\"1.9\"/><path d=\"M56 93 L40 86 L29 100 L43 105 M43 105 L52 102 M43 105 L52 107 M43 105 L49 111\" stroke-width=\"2\"/><path d=\"M 64 93 L 80 86 L 91 100 L 77 105 M 77 105 L 68 102 M 77 105 L 68 107 M 77 105 L 71 111\" stroke-width=\"2\"/><\/g><\/g><g id=\"z-muis-s\"><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.26\"><path d=\"M8 67 C14 60 22 56 31 54 C43 44 65 42 79 48 C89 53 93 63 90 73 C88 80 80 85 70 85 L37 85 C27 85 19 79 13 73 C10 71 7 69 8 67 Z\"/><\/g><g stroke=\"#cfe0ff\" stroke-opacity=\".35\" stroke-width=\"1\" fill=\"none\"><path d=\"M8 67 C14 60 22 56 31 54 C43 44 65 42 79 48 C89 53 93 63 90 73 C88 80 80 85 70 85 L37 85 C27 85 19 79 13 73 C10 71 7 69 8 67 Z\"/><circle cx=\"34\" cy=\"47\" r=\"9\"/><\/g><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.32\"><circle cx=\"34\" cy=\"47\" r=\"9\"/><\/g><g filter=\"url(#zsoft)\" fill=\"none\" stroke=\"#cfe0ff\" stroke-opacity=\"0.26\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M86 76 C100 80 110 92 104 102 C99 110 86 108 84 100\"/><\/g><g filter=\"url(#zsoft)\" fill=\"none\" stroke=\"#cfe0ff\" stroke-opacity=\"0.2\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M46 82 L42 94 M78 80 L74 94\"/><\/g><\/g><g id=\"z-muis-b\"><g stroke=\"#cfe0ff\" stroke-opacity=\".45\" stroke-width=\".7\" fill=\"none\" stroke-linecap=\"round\"><path d=\"M12 66 L2 60 M12 68 L1 68 M12 70 L3 76\"/><\/g><g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 67 C14 62 22 59 30 59 C37 59 41 63 41 67 C41 71 37 74 30 74 L15 71 C11 70 9 69 8 67 Z\" stroke-width=\"2\" fill=\"#eef5ff\" fill-opacity=\"0.14\"/><circle cx=\"29\" cy=\"64.5\" r=\"3.4\" stroke-width=\"1.6\" fill=\"#050a16\" fill-opacity=\"0.6\"/><path d=\"M9.5 68 C9 72 10.5 75 13 74.5 C13.5 72.5 13 70 12 68.5 Z\" fill=\"#eef5ff\" fill-opacity=\".92\" stroke-width=\"1.2\"/><path d=\"M13 72 L31 75\" stroke-width=\"1.8\"/><path d=\"M41 65 C52 55 70 53 82 60 C86 63 88 68 88 73\" stroke-width=\"3\" stroke-dasharray=\"3 1.4\"/><path d=\"M46 59.5 C45 66 46 72 48 78\" stroke-width=\"1.4\"/><path d=\"M50 58.5 C49 66 50 72 52 78\" stroke-width=\"1.4\"/><path d=\"M54 57.5 C53 66 54 72 56 78\" stroke-width=\"1.4\"/><path d=\"M58 56.5 C57 66 58 72 60 78\" stroke-width=\"1.4\"/><path d=\"M62 55.5 C61 66 62 72 64 78\" stroke-width=\"1.4\"/><path d=\"M66 54.5 C65 66 66 72 68 78\" stroke-width=\"1.4\"/><path d=\"M80 66 L88 74 L84 78\" stroke-width=\"2\"/><path d=\"M86 76 C100 80 110 92 104 102 C99 110 86 108 84 100\" stroke-width=\"2\" stroke-dasharray=\"2.2 1.6\"/><path d=\"M46 70 L48 80 L42 88 L37 89\" stroke-width=\"1.9\"/><path d=\"M84 72 L76 82 L82 89 L75 91\" stroke-width=\"2\"/><\/g><\/g><g id=\"z-olifant-s\"><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.2\"><path d=\"M60 20 C80 20 90 34 88 52 C87 64 80 70 72 74 L70 104 C70 112 65 117 60 117 C55 117 50 112 50 104 L48 74 C40 70 33 64 32 52 C30 34 40 20 60 20 Z\"/><\/g><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.24\"><path d=\"M36 36 C18 26 6 42 8 62 C10 82 24 90 38 74 Z\"/><path d=\"M84 36 C102 26 114 42 112 62 C110 82 96 90 82 74 Z\"/><\/g><\/g><g id=\"z-olifant-b\"><g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M41 50 C39 32 49 24 60 24 C71 24 81 32 79 50 C78 59 73 66 66 68 L54 68 C47 66 42 59 41 50 Z\" stroke-width=\"2.3\" fill=\"#eef5ff\" fill-opacity=\"0.12\"/><circle cx=\"45.5\" cy=\"52\" r=\"3.4\" stroke-width=\"1.8\" fill=\"#050a16\" fill-opacity=\"0.6\"/><circle cx=\"74.5\" cy=\"52\" r=\"3.4\" stroke-width=\"1.8\" fill=\"#050a16\" fill-opacity=\"0.6\"/><ellipse cx=\"60\" cy=\"45\" rx=\"5.5\" ry=\"4.2\" stroke-width=\"1.8\" fill=\"#050a16\" fill-opacity=\"0.6\"/><path d=\"M53 64 C50 80 45 90 36 97 C44 96 53 87 57 70 Z\" fill=\"#eef5ff\" fill-opacity=\".92\" stroke-width=\"1.2\"/><path d=\"M 67 64 C 70 80 75 90 84 97 C 76 96 67 87 63 70 Z\" fill=\"#eef5ff\" fill-opacity=\".92\" stroke-width=\"1.2\"/><path d=\"M52 70 C54 76 66 76 68 70\" stroke-width=\"2\"/><\/g><\/g><g id=\"z-vleermuis-s\"><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.27\"><path d=\"M56 56 L22 37 L11 60 C17 63 21 70 22 78 C28 74 34 77 38 85 C43 79 50 77 55 76 Z\"/><path d=\"M 64 56 L 98 37 L 109 60 C 103 63 99 70 98 78 C 92 74 86 77 82 85 C 77 79 70 77 65 76 Z\"/><\/g><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.24\"><ellipse cx=\"60\" cy=\"64\" rx=\"8\" ry=\"15\"/><circle cx=\"60\" cy=\"46\" r=\"8.5\"/><path d=\"M52 44 L51 30 L58 40 Z\"/><path d=\"M68 44 L69 30 L62 40 Z\"/><\/g><\/g><g id=\"z-vleermuis-b\"><g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><ellipse cx=\"60\" cy=\"47\" rx=\"5.6\" ry=\"6.6\" stroke-width=\"1.8\" fill=\"#eef5ff\" fill-opacity=\"0.12\"/><circle cx=\"57.4\" cy=\"46\" r=\"1.6\" stroke-width=\"1.1\" fill=\"#050a16\" fill-opacity=\"0.6\"/><circle cx=\"62.6\" cy=\"46\" r=\"1.6\" stroke-width=\"1.1\" fill=\"#050a16\" fill-opacity=\"0.6\"/><path d=\"M58 52.5 L58.3 55.5 M62 52.5 L61.7 55.5\" stroke-width=\"1.2\"/><path d=\"M60 55 L60 80\" stroke-width=\"2.2\"/><path d=\"M55 60 C57 62 63 62 65 60 M55 64 C57 66 63 66 65 64\" stroke-width=\"1.4\"/><path d=\"M56 57 L44 52 L24 40 M24 40 L21 35 M24 40 L17 39 M24 40 C18 46 14 52 12 59 M24 40 C23 52 22 66 22 77 M24 40 C29 56 33 70 37 83\" stroke-width=\"1.7\"/><path d=\"M 64 57 L 76 52 L 96 40 M 96 40 L 99 35 M 96 40 L 103 39 M 96 40 C 102 46 106 52 108 59 M 96 40 C 97 52 98 66 98 77 M 96 40 C 91 56 87 70 83 83\" stroke-width=\"1.7\"/><path d=\"M57 79 L52 90 L49 96 M52 90 L54 97\" stroke-width=\"1.6\"/><path d=\"M 63 79 L 68 90 L 71 96 M 68 90 L 66 97\" stroke-width=\"1.6\"/><\/g><\/g><g id=\"z-kameleon-s\"><g filter=\"url(#zsoft)\" fill=\"none\" stroke=\"#cfe0ff\" stroke-opacity=\"0.14\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 90 L112 85\"/><\/g><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.2\"><path d=\"M24 52 C26 40 36 34 48 36 C62 36 74 40 82 50 C86 58 82 66 74 68 L40 70 C30 70 24 62 24 52 Z\"/><path d=\"M18 52 L25 30 L42 40 Z\"/><\/g><g filter=\"url(#zsoft)\" fill=\"none\" stroke=\"#cfe0ff\" stroke-opacity=\"0.2\" stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M80 60 C94 62 100 74 96 84 C92 94 80 94 76 86 C72 78 80 72 86 76 C90 80 86 86 82 84\"/><\/g><g filter=\"url(#zsoft)\" fill=\"none\" stroke=\"#cfe0ff\" stroke-opacity=\"0.2\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M40 66 L34 86 M72 66 L76 86\"/><\/g><\/g><g id=\"z-kameleon-b\"><g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 54 C17 46 23 40 29 36 L41 40 C43 46 41 54 35 58 L21 60 C18 59 17 57 17 54 Z\" stroke-width=\"2\" fill=\"#eef5ff\" fill-opacity=\"0.1\"/><path d=\"M25 33 L36 29 L41 40\" stroke-width=\"1.8\"/><circle cx=\"31\" cy=\"47\" r=\"5.2\" stroke-width=\"2.2\" fill=\"#050a16\" fill-opacity=\"0.6\"/><path d=\"M19 59 L34 61\" stroke-width=\"1.8\"/><path d=\"M41 44 C54 40 70 42 80 52 C84 56 84 60 81 62\" stroke-width=\"2.6\"/><path d=\"M46 43.0 C46 50 47 56 49 62.0\" stroke-width=\"1.5\"/><path d=\"M51 43.0 C51 50 52 56 54 61.3\" stroke-width=\"1.5\"/><path d=\"M56 43.0 C56 50 57 56 59 60.6\" stroke-width=\"1.5\"/><path d=\"M61 42.8 C61 50 62 56 64 59.9\" stroke-width=\"1.5\"/><path d=\"M66 42.0 C66 50 67 56 69 59.1\" stroke-width=\"1.5\"/><path d=\"M71 41.2 C71 50 72 56 74 58.4\" stroke-width=\"1.5\"/><path d=\"M76 40.3 C76 50 77 56 79 57.7\" stroke-width=\"1.5\"/><path d=\"M80 60 C94 62 100 74 96 84 C92 94 80 94 76 86 C72 78 80 72 86 76 C90 80 86 86 82 84\" stroke-width=\"3\" stroke-dasharray=\"2.6 1.5\"/><path d=\"M42 58 L36 70 L34 84 M30 87 L34 84 L38 87\" stroke-width=\"2\"/><path d=\"M72 58 L77 70 L73 84 M69 87 L73 84 L77 87\" stroke-width=\"2\"/><\/g><\/g><g id=\"z-slang-s\"><g filter=\"url(#zsoft)\" fill=\"none\" stroke=\"#cfe0ff\" stroke-opacity=\"0.2\" stroke-width=\"13\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M26 34 C48 20 78 26 78 46 C78 64 42 58 42 78 C42 98 74 102 98 92\"/><\/g><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.24\"><ellipse cx=\"22\" cy=\"33\" rx=\"11\" ry=\"8\" transform=\"rotate(-25 22 33)\"/><\/g><\/g><g id=\"z-slang-b\"><g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M29.5 26.2 L33.8 35.6 M35.9 23.7 L39.1 33.6 M42.5 22.0 L44.4 32.3 M49.0 21.3 L49.6 31.6 M55.3 21.3 L54.5 31.7 M61.4 22.2 L59.1 32.3 M67.0 23.9 L63.2 33.6 M72.2 26.5 L66.6 35.3 M76.6 30.0 L69.3 37.4 M80.2 34.6 L71.2 39.8 M82.4 39.9 L72.4 42.6 M82.1 51.9 L72.4 48.2 M79.2 56.7 L71.4 49.8 M75.3 60.1 L69.5 51.5 M70.9 62.6 L66.4 53.1 M66.3 64.5 L62.6 54.8 M61.8 66.1 L58.2 56.4 M57.5 67.8 L53.6 58.1 M53.7 69.4 L49.0 60.2 M50.7 71.3 L44.5 62.9 M48.8 73.1 L40.6 66.7 M47.6 75.2 L37.8 71.8 M47.6 81.2 L37.7 84.1 M48.8 83.8 L40.1 89.5 M50.8 86.2 L43.9 93.9 M53.7 88.2 L48.6 97.3 M57.5 89.9 L54.0 99.7 M62.0 91.2 L60.0 101.3 M67.2 91.9 L66.3 102.2 M72.7 92.1 L72.9 102.5 M78.5 91.7 L79.7 102.0 M84.5 90.7 L86.6 100.9 M90.3 89.2 L93.4 99.2 \" stroke-width=\"1.3\"/><path d=\"M26 34 C48 20 78 26 78 46 C78 64 42 58 42 78 C42 98 74 102 98 92\" stroke-width=\"2.6\"/><path d=\"M12 36 C12 29 18 25 25 27 C30 29 31 33 29 37 C25 41 16 42 12 36 Z\" stroke-width=\"1.8\" fill=\"#eef5ff\" fill-opacity=\"0.14\"/><circle cx=\"21\" cy=\"31\" r=\"2.4\" stroke-width=\"1.2\" fill=\"#050a16\" fill-opacity=\"0.6\"/><path d=\"M12 38 L27 40\" stroke-width=\"1.6\"/><\/g><\/g><g id=\"z-giraffe-s\"><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.2\"><path d=\"M32 122 C38 92 50 62 56 42 L72 46 C68 66 62 94 62 122 Z\"/><path d=\"M56 40 C54 30 60 22 70 22 C80 22 92 28 97 36 C99 41 94 45 88 45 L66 47 C60 47 56 45 56 40 Z\"/><\/g><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.3\"><path d=\"M60 30 L50 22 L58 26 Z\"/><\/g><\/g><g id=\"z-giraffe-b\"><g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"41.1\" y=\"109.0\" width=\"12.7\" height=\"8\" rx=\"3.1\" transform=\"rotate(-77.9 47.5 113.0)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"44.1\" y=\"95.0\" width=\"12.7\" height=\"8\" rx=\"3.1\" transform=\"rotate(-77.9 50.5 99.0)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"47.1\" y=\"81.0\" width=\"12.7\" height=\"8\" rx=\"3.1\" transform=\"rotate(-77.9 53.5 85.0)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"50.1\" y=\"67.0\" width=\"12.7\" height=\"8\" rx=\"3.1\" transform=\"rotate(-77.9 56.5 71.0)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"53.1\" y=\"53.0\" width=\"12.7\" height=\"8\" rx=\"3.1\" transform=\"rotate(-77.9 59.5 57.0)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><path d=\"M57 40 C57 32 63 26 71 26 C79 26 89 30 94 36 C95 40 92 42 88 42 L70 44 C62 44 57 44 57 40 Z\" stroke-width=\"2.1\" fill=\"#eef5ff\" fill-opacity=\"0.1\"/><circle cx=\"67\" cy=\"33.5\" r=\"4\" stroke-width=\"1.8\" fill=\"#050a16\" fill-opacity=\"0.6\"/><path d=\"M64 27 L62 16 M71 26 L71 15\" stroke-width=\"2.4\"/><circle cx=\"62\" cy=\"15.5\" r=\"2.4\" fill=\"#eef5ff\" stroke=\"none\"/><circle cx=\"71\" cy=\"14.5\" r=\"2.4\" fill=\"#eef5ff\" stroke=\"none\"/><path d=\"M65 44 L90 42\" stroke-width=\"2\"/><\/g><\/g><g id=\"z-flamingo-s\"><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.24\"><ellipse cx=\"68\" cy=\"54\" rx=\"21\" ry=\"12.5\" transform=\"rotate(-12 68 54)\"/><circle cx=\"44\" cy=\"12\" r=\"6.5\"/><\/g><g filter=\"url(#zsoft)\" fill=\"none\" stroke=\"#cfe0ff\" stroke-opacity=\"0.24\" stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M52 50 C40 46 38 34 46 27 C54 20 54 12 46 10\"/><\/g><g filter=\"url(#zsoft)\" fill=\"none\" stroke=\"#cfe0ff\" stroke-opacity=\"0.22\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M70 64 L68 88 L68 114 M66 64 L76 80 L62 86\"/><\/g><g filter=\"url(#zsoft)\" fill=\"none\" stroke=\"#cfe0ff\" stroke-opacity=\"0.2\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M84 48 L100 46 L94 56 Z\"/><\/g><\/g><g id=\"z-flamingo-b\"><g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M52 50 C40 46 38 34 46 27 C54 20 54 12 46 10\" stroke-width=\"3\" stroke-dasharray=\"3 1.4\"/><ellipse cx=\"44\" cy=\"12\" rx=\"4.8\" ry=\"4.2\" stroke-width=\"1.6\" fill=\"#eef5ff\" fill-opacity=\"0.14\"/><circle cx=\"45.5\" cy=\"11\" r=\"1.6\" stroke-width=\"1\" fill=\"#050a16\" fill-opacity=\"0.6\"/><path d=\"M40 9 C32 9 27 14 28 21 C29 24 31 24 31.5 22 C31 17 34 14 40 14 Z\" fill=\"#eef5ff\" fill-opacity=\".92\" stroke-width=\"1.2\"/><path d=\"M52 51 C64 48 78 49 88 54\" stroke-width=\"2.4\"/><path d=\"M56 50.0 C55 55 56 59 58 62\" stroke-width=\"1.3\"/><path d=\"M61 49.8 C60 55 61 59 63 62\" stroke-width=\"1.3\"/><path d=\"M66 49.5 C65 55 66 59 68 62\" stroke-width=\"1.3\"/><path d=\"M71 49.2 C70 55 71 59 73 62\" stroke-width=\"1.3\"/><path d=\"M76 49.0 C75 55 76 59 78 62\" stroke-width=\"1.3\"/><path d=\"M54 60 C62 68 74 68 82 61\" stroke-width=\"2\"/><path d=\"M56 47 L76 44 L90 49\" stroke-width=\"2\"/><path d=\"M84 54 L88 60 L82 62\" stroke-width=\"1.8\"/><path d=\"M71 61 L68 88 L68 112 M68 112 L61 114 M68 112 L75 114\" stroke-width=\"1.9\"/><path d=\"M68 62 L76 79 L63 85\" stroke-width=\"1.8\"/><\/g><\/g><g id=\"z-zeepaardje-s\"><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.26\"><path d=\"M59.8 35.9 L61.6 37.4 L62.7 38.9 L63.3 40.4 L63.5 41.9 L63.4 43.5 L62.9 45.2 L62.1 47.0 L60.8 48.9 L59.1 50.7 L59.4 50.4 L56.8 53.9 L54.9 57.6 L53.8 61.6 L53.3 65.5 L53.6 69.5 L54.5 73.2 L56.1 76.8 L58.2 80.1 L61.0 83.0 L60.6 82.1 L62.1 84.7 L63.0 87.6 L63.4 90.5 L63.2 93.4 L62.5 96.0 L61.2 98.2 L59.4 100.0 L57.1 101.3 L54.0 101.9 L54.0 101.9 L51.5 101.6 L49.6 100.8 L48.2 99.6 L47.2 98.2 L46.8 96.5 L46.8 94.9 L47.4 93.4 L48.5 92.2 L50.3 91.4 L50.2 91.4 L51.6 91.3 L52.6 91.6 L53.3 92.2 L53.8 92.9 L54.0 93.8 L54.0 94.6 L53.6 95.3 L53.0 95.8 L52.0 96.0 L52.0 98.0 L53.9 97.7 L55.3 96.7 L56.1 95.3 L56.4 93.7 L56.1 92.1 L55.3 90.6 L53.9 89.3 L52.0 88.6 L49.8 88.6 L49.7 88.6 L46.9 89.8 L44.8 91.7 L43.7 94.1 L43.4 96.8 L43.9 99.5 L45.3 102.0 L47.5 104.1 L50.4 105.5 L54.0 106.1 L54.0 106.1 L58.3 105.7 L62.2 104.2 L65.3 101.8 L67.7 98.6 L69.3 94.9 L70.1 90.8 L70.1 86.5 L69.2 82.2 L67.4 77.9 L67.0 77.0 L65.6 75.0 L64.7 72.8 L64.2 70.7 L64.0 68.5 L64.3 66.5 L64.9 64.5 L65.8 62.7 L67.0 61.1 L68.6 59.6 L68.9 59.3 L71.3 55.7 L73.1 51.9 L74.3 48.0 L74.6 44.0 L74.2 40.1 L72.8 36.4 L70.7 33.1 L67.7 30.3 L64.2 28.1 Z\"/><path d=\"M53 22 C55 13 66 11 70 17 C72 24 68 31 62 33 C58 33 54 29 53 22 Z\"/><path d=\"M56 25 L35 28 L35 32 L56 31 Z\"/><\/g><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.22\"><path d=\"M70 58 L84 54 L84 70 L69 70 Z\"/><\/g><\/g><g id=\"z-zeepaardje-b\"><g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M59.8 35.9 L61.6 37.4 L62.7 38.9 L63.3 40.4 L63.5 41.9 L63.4 43.5 L62.9 45.2 L62.1 47.0 L60.8 48.9 L59.1 50.7 L59.4 50.4 L56.8 53.9 L54.9 57.6 L53.8 61.6 L53.3 65.5 L53.6 69.5 L54.5 73.2 L56.1 76.8 L58.2 80.1 L61.0 83.0 L60.6 82.1 L62.1 84.7 L63.0 87.6 L63.4 90.5 L63.2 93.4 L62.5 96.0 L61.2 98.2 L59.4 100.0 L57.1 101.3 L54.0 101.9 L54.0 101.9 L51.5 101.6 L49.6 100.8 L48.2 99.6 L47.2 98.2 L46.8 96.5 L46.8 94.9 L47.4 93.4 L48.5 92.2 L50.3 91.4 L50.2 91.4 L51.6 91.3 L52.6 91.6 L53.3 92.2 L53.8 92.9 L54.0 93.8 L54.0 94.6 L53.6 95.3 L53.0 95.8 L52.0 96.0 L52.0 98.0 L53.9 97.7 L55.3 96.7 L56.1 95.3 L56.4 93.7 L56.1 92.1 L55.3 90.6 L53.9 89.3 L52.0 88.6 L49.8 88.6 L49.7 88.6 L46.9 89.8 L44.8 91.7 L43.7 94.1 L43.4 96.8 L43.9 99.5 L45.3 102.0 L47.5 104.1 L50.4 105.5 L54.0 106.1 L54.0 106.1 L58.3 105.7 L62.2 104.2 L65.3 101.8 L67.7 98.6 L69.3 94.9 L70.1 90.8 L70.1 86.5 L69.2 82.2 L67.4 77.9 L67.0 77.0 L65.6 75.0 L64.7 72.8 L64.2 70.7 L64.0 68.5 L64.3 66.5 L64.9 64.5 L65.8 62.7 L67.0 61.1 L68.6 59.6 L68.9 59.3 L71.3 55.7 L73.1 51.9 L74.3 48.0 L74.6 44.0 L74.2 40.1 L72.8 36.4 L70.7 33.1 L67.7 30.3 L64.2 28.1 Z\" stroke-width=\"1.6\" fill=\"#eef5ff\" fill-opacity=\"0.1\"/><path d=\"M59.8 35.9 L64.2 28.1 M61.6 37.4 L67.7 30.3 M62.7 38.9 L70.7 33.1 M63.3 40.4 L72.8 36.4 M63.5 41.9 L74.2 40.1 M63.4 43.5 L74.6 44.0 M62.9 45.2 L74.3 48.0 M62.1 47.0 L73.1 51.9 M60.8 48.9 L71.3 55.7 M59.4 50.4 L68.6 59.6 M56.8 53.9 L67.0 61.1 M54.9 57.6 L65.8 62.7 M53.8 61.6 L64.9 64.5 M53.3 65.5 L64.3 66.5 M53.6 69.5 L64.0 68.5 M54.5 73.2 L64.2 70.7 M56.1 76.8 L64.7 72.8 M58.2 80.1 L65.6 75.0 M60.6 82.1 L67.4 77.9 M62.1 84.7 L69.2 82.2 M63.0 87.6 L70.1 86.5 M63.4 90.5 L70.1 90.8 M63.2 93.4 L69.3 94.9 M62.5 96.0 L67.7 98.6 M61.2 98.2 L65.3 101.8 M59.4 100.0 L62.2 104.2 M57.1 101.3 L58.3 105.7 M54.0 101.9 L54.0 106.1 M51.5 101.6 L50.4 105.5 M49.6 100.8 L47.5 104.1 M48.2 99.6 L45.3 102.0 M47.2 98.2 L43.9 99.5 M46.8 96.5 L43.4 96.8 M46.8 94.9 L43.7 94.1 M47.4 93.4 L44.8 91.7 M48.5 92.2 L46.9 89.8 M50.2 91.4 L49.8 88.6 M51.6 91.3 L52.0 88.6 M52.6 91.6 L53.9 89.3 M53.3 92.2 L55.3 90.6 M53.8 92.9 L56.1 92.1 M54.0 93.8 L56.4 93.7 M54.0 94.6 L56.1 95.3 M53.6 95.3 L55.3 96.7 M53.0 95.8 L53.9 97.7 \" stroke-width=\"1.5\"/><path d=\"M53 22 C55 13 66 11 70 17 C72 24 68 31 62 33 C58 33 54 29 53 22 Z\" stroke-width=\"1.8\" fill=\"#eef5ff\" fill-opacity=\"0.14\"/><circle cx=\"63\" cy=\"21.5\" r=\"3\" stroke-width=\"1.5\" fill=\"#050a16\" fill-opacity=\"0.6\"/><path d=\"M55 24 L37 27.5 M56 30 L37 31.5 M37 27.5 L35 29.5 L37 31.5\" stroke-width=\"1.6\"/><path d=\"M62 12.5 L61 7 M66 13 L68.5 8 M58.5 14.5 L55.5 10.5\" stroke-width=\"1.8\"/><path d=\"M72 58 L83 55 M72 62 L84 60 M72 66 L84 65\" stroke-width=\"1.1\"/><\/g><\/g><g id=\"z-haai-s\"><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.3\"><path d=\"M7 63 C18 53 38 47 58 47 L68 30 L76 47 C88 49 97 53 102 57 L111 41 L108 61 L111 80 L101 66 C91 72 76 76 60 76 L49 89 L45 76 C29 74 16 70 7 63 Z\"/><\/g><g stroke=\"#cfe0ff\" stroke-opacity=\".42\" stroke-width=\"1.1\" fill=\"none\" stroke-linejoin=\"round\"><path d=\"M7 63 C18 53 38 47 58 47 L68 30 L76 47 C88 49 97 53 102 57 L111 41 L108 61 L111 80 L101 66 C91 72 76 76 60 76 L49 89 L45 76 C29 74 16 70 7 63 Z\"/><\/g><\/g><g id=\"z-haai-b\"><g stroke=\"#cfe0ff\" stroke-opacity=\".4\" stroke-width=\"1\" fill=\"none\" stroke-linecap=\"round\"><path d=\"M33 56 C34 61 34 65 33 69 M37 55 C38 60 38 65 37 70 M41 55 C42 60 42 65 41 70\"/><\/g><g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"40.8\" y=\"56.5\" width=\"3.7\" height=\"6\" rx=\"1.4\" transform=\"rotate(0.0 42.6 59.5)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"46.1\" y=\"56.5\" width=\"3.7\" height=\"6\" rx=\"1.4\" transform=\"rotate(0.0 48.0 59.5)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"51.4\" y=\"56.5\" width=\"3.7\" height=\"6\" rx=\"1.4\" transform=\"rotate(0.0 53.2 59.5)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"56.7\" y=\"56.5\" width=\"3.7\" height=\"6\" rx=\"1.4\" transform=\"rotate(0.0 58.5 59.5)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"62.0\" y=\"56.5\" width=\"3.7\" height=\"6\" rx=\"1.4\" transform=\"rotate(0.0 63.9 59.5)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"67.3\" y=\"56.5\" width=\"3.7\" height=\"6\" rx=\"1.4\" transform=\"rotate(0.0 69.2 59.5)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"72.6\" y=\"56.5\" width=\"3.7\" height=\"6\" rx=\"1.4\" transform=\"rotate(0.0 74.4 59.5)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"77.9\" y=\"56.5\" width=\"3.7\" height=\"6\" rx=\"1.4\" transform=\"rotate(0.0 79.8 59.5)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"83.2\" y=\"56.5\" width=\"3.7\" height=\"6\" rx=\"1.4\" transform=\"rotate(0.0 85.0 59.5)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"88.3\" y=\"55.5\" width=\"4.0\" height=\"6\" rx=\"1.6\" transform=\"rotate(-19.7 90.3 58.5)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"93.6\" y=\"53.7\" width=\"4.0\" height=\"6\" rx=\"1.6\" transform=\"rotate(-19.7 95.7 56.7)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"98.9\" y=\"51.8\" width=\"4.0\" height=\"6\" rx=\"1.6\" transform=\"rotate(-19.7 100.9 54.8)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"104.2\" y=\"49.8\" width=\"4.0\" height=\"6\" rx=\"1.6\" transform=\"rotate(-19.7 106.2 52.8)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><path d=\"M10 59 C17 54 28 52 36 55\" stroke-width=\"1.6\"/><path d=\"M10 62 C18 66 28 66 34 63 M11 64 C19 70 28 71 34 67\" stroke-width=\"2.2\"/><path d=\"M12 64.6 L13.2 61.6 L14.4 64.6 M15 64.8 L16.2 61.8 L17.4 64.8 M18 64.9 L19.2 61.9 L20.4 64.9 M21 65.0 L22.2 62.0 L23.4 65.0 M24 65.2 L25.2 62.2 L26.4 65.2 M27 65.3 L28.2 62.4 L29.4 65.3 M30 65.5 L31.2 62.5 L32.4 65.5 \" fill=\"#eef5ff\" stroke-width=\".8\"/><circle cx=\"24\" cy=\"57\" r=\"2.4\" stroke-width=\"1.4\" fill=\"#050a16\" fill-opacity=\"0.6\"/><path d=\"M63 46 L68 33 M66 46 L71 36 M69 46 L73 39\" stroke-width=\"1.1\"/><path d=\"M46 75 L49 86 M49 75 L51 84\" stroke-width=\"1.1\"/><path d=\"M104 60 L109 46 M104 62 L109 77\" stroke-width=\"1.1\"/><\/g><\/g><g id=\"z-schildpad-s\"><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.24\"><path d=\"M60 10 C67 10 69 18 67 28 L53 28 C51 18 53 10 60 10 Z\"/><path d=\"M40 44 C26 36 16 38 12 46 C20 50 32 52 41 50 Z\"/><path d=\"M 80 44 C 94 36 104 38 108 46 C 100 50 88 52 79 50 Z\"/><path d=\"M42 88 C32 92 26 100 26 108 C34 106 42 100 46 94 Z\"/><path d=\"M 78 88 C 88 92 94 100 94 108 C 86 106 78 100 74 94 Z\"/><path d=\"M57 96 L60 108 L63 96 Z\"/><\/g><g filter=\"url(#zsoft)\" fill=\"#cfe0ff\" fill-opacity=\"0.2\"><ellipse cx=\"60\" cy=\"64\" rx=\"29\" ry=\"35\"/><\/g><\/g><g id=\"z-schildpad-b\"><g filter=\"url(#zbone)\" stroke=\"#eef5ff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><ellipse cx=\"60\" cy=\"64\" rx=\"28\" ry=\"34\" stroke-width=\"2.2\" fill=\"#eef5ff\" fill-opacity=\"0.1\"/><ellipse cx=\"60\" cy=\"64\" rx=\"23.5\" ry=\"29.5\" stroke-width=\"1.1\" fill=\"none\" fill-opacity=\"0\"/><path d=\"M60 40 Q67.6 36.5 69.2 33.0 M60 40 Q52.4 36.5 50.8 33.0 M60 47 Q71.7 42.9 77.4 38.7 M60 47 Q48.3 42.9 42.6 38.7 M60 54 Q74.7 50.8 83.4 47.5 M60 54 Q45.3 50.8 36.6 47.5 M60 61 Q76.3 59.6 86.6 58.3 M60 61 Q43.7 59.6 33.4 58.3 M60 68 Q76.3 68.9 86.6 69.7 M60 68 Q43.7 68.9 33.4 69.7 M60 75 Q74.7 77.8 83.4 80.5 M60 75 Q45.3 77.8 36.6 80.5 M60 82 Q71.7 85.6 77.4 89.3 M60 82 Q48.3 85.6 42.6 89.3 M60 89 Q67.6 92.0 69.2 95.0 M60 89 Q52.4 92.0 50.8 95.0 \" stroke-width=\"1.5\"/><rect x=\"56.8\" y=\"35.5\" width=\"6.4\" height=\"5\" rx=\"1.9\" transform=\"rotate(90.0 60.0 38.0)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"56.8\" y=\"43.5\" width=\"6.4\" height=\"5\" rx=\"1.9\" transform=\"rotate(90.0 60.0 46.0)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"56.8\" y=\"51.5\" width=\"6.4\" height=\"5\" rx=\"1.9\" transform=\"rotate(90.0 60.0 54.0)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"56.8\" y=\"59.5\" width=\"6.4\" height=\"5\" rx=\"1.9\" transform=\"rotate(90.0 60.0 62.0)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"56.8\" y=\"67.5\" width=\"6.4\" height=\"5\" rx=\"1.9\" transform=\"rotate(90.0 60.0 70.0)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"56.8\" y=\"75.5\" width=\"6.4\" height=\"5\" rx=\"1.9\" transform=\"rotate(90.0 60.0 78.0)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"56.8\" y=\"83.5\" width=\"6.4\" height=\"5\" rx=\"1.9\" transform=\"rotate(90.0 60.0 86.0)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><rect x=\"57.3\" y=\"91.0\" width=\"5.4\" height=\"5\" rx=\"1.9\" transform=\"rotate(90.0 60.0 93.5)\" fill=\"#eef5ff\" fill-opacity=\".85\" stroke=\"none\"/><path d=\"M55 25 C54 17 57 13 60 13 C63 13 66 17 65 25 C63 27 57 27 55 25 Z\" stroke-width=\"1.8\" fill=\"#eef5ff\" fill-opacity=\"0.14\"/><circle cx=\"57.4\" cy=\"19\" r=\"1.6\" stroke-width=\"1.1\" fill=\"#050a16\" fill-opacity=\"0.6\"/><circle cx=\"62.6\" cy=\"19\" r=\"1.6\" stroke-width=\"1.1\" fill=\"#050a16\" fill-opacity=\"0.6\"/><path d=\"M44 46 L30 42 L19 44 M19 44 L15 42 M19 44 L15 46\" stroke-width=\"1.9\"/><path d=\"M 76 46 L 90 42 L 101 44 M 101 44 L 105 42 M 101 44 L 105 46\" stroke-width=\"1.9\"/><path d=\"M45 88 L36 96 L30 104\" stroke-width=\"1.9\"/><path d=\"M 75 88 L 84 96 L 90 104\" stroke-width=\"1.9\"/><\/g><\/g>";
const LETTERS = "ABCDEFGHIJ";
const LS_KEY = "rad-oefententamen-v1" + (window.__iaUid ? "-" + window.__iaUid : "");
const SIZE_PRESETS = [10, 25, 50, 100];

/* ---------- taal (zelfde sleutel als interventionassistant.com) ---------- */
const T = {
  back_home: ["← Terug naar oefenen", "← Back to practice"],
  nav_practice: ["Oefenen", "Practice"], nav_progress: ["Voortgang", "Progress"],
  hero_sub: ["{n} vragen uit de radiologie-voortgangstoetsen 2013–2026 · direct uitleg · slim herhalen", "{n} questions from the Dutch radiology progress tests 2013–2026 · instant feedback · smart review"],
  level: ["Niveau", "Level"], streak: ["Dagenreeks", "Day streak"], today: ["Vandaag", "Today"],
  days: ["dagen", "days"], day: ["dag", "day"],
  start_title: ["Start een ronde", "Start a round"], start_sub: ["Kies onderwerp, toets en lengte", "Pick topic, exam and length"],
  topic: ["Onderwerp", "Topic"], exam: ["Toets", "Exam"], length: ["Aantal vragen", "Number of questions"],
  all_topics: ["Alle onderwerpen", "All topics"], all_exams: ["Alle toetsen", "All exams"], other: ["anders", "other"],
  images_only: ["Alleen vragen met beeld", "Image questions only"], extra_on: ["Eigen vragen o.b.v. recente Radiology Assistant-artikelen ({n})", "Own questions based on recent Radiology Assistant articles ({n})"], q_short: ["vragen", "questions"], img_short: ["alleen beeld", "images only"],
  in_sel_s: ["{u} nieuwe vragen in deze selectie · herhaalvragen worden meegemengd", "{u} new questions in this selection · review questions are mixed in"], in_sel_done_s: ["Alles al eens gemaakt 🎉 · je fouten en herhaalvragen gaan voor", "All answered once 🎉 · your mistakes and reviews come first"],
  today_t: ["Vandaag", "Today"], review_short: ["{n} vragen aan herhaling toe", "{n} questions due for review"], review_only: ["Alleen herhalen", "Review only"], go: ["Start", "Start"], settings_t: ["Instellingen", "Settings"], start_n: ["Start {n} vragen", "Start {n} questions"],
  in_sel: ["{n} vragen in selectie · {u} nog nooit gemaakt, die krijg je eerst, samen met vragen die aan herhaling toe zijn", "{n} questions in selection · {u} never answered, you get those first, together with questions due for review"],
  in_sel_done: ["{n} vragen in selectie · alles al eens gemaakt 🎉 nu gaan je fouten en minst geoefende vragen voor", "{n} questions in selection · all answered at least once 🎉 your mistakes and least practised questions now come first"],
  dx_title: ["Diagnose van de dag", "Diagnosis of the day"], dx_sub: ["Elke dag een andere diagnose uit de toetsvragen", "A different diagnosis from the exam questions every day"],
  dx_img: ["Karakteristiek beeld", "Characteristic imaging"], dx_dd: ["Differentiaaldiagnose", "Differential diagnosis"], dx_pearl: ["Onthoud", "Remember"],
  dx_practice: ["Oefen {n} vragen hierover", "Practise {n} related questions"], dx_prev: ["Vorige", "Previous"], dx_next: ["Volgende", "Next"], dx_today: ["Vandaag", "Today"], dx_nl_only: ["Tekst in het Nederlands", "Text in Dutch"],
  daily_title: ["Dagelijkse uitdaging", "Daily challenge"], daily_sub: ["Elke dag 10 vragen, voor iedereen dezelfde", "10 questions every day, the same for everyone"],
  daily_go: ["Doe de uitdaging", "Take the challenge"], daily_done: ["Vandaag gedaan: {c}/{t}", "Done today: {c}/{t}"], daily_again: ["Nog een keer", "Again"],
  review_title: ["Slim herhalen", "Smart review"], review_sub: ["Fouten komen terug na 1, 3, 7, 14 en 30 dagen, goede antwoorden na 7, 14 en 30 dagen. Ze zitten ook in je gewone rondes.", "Misses return after 1, 3, 7, 14 and 30 days, correct answers after 7, 14 and 30 days. They are also mixed into your regular rounds."], review_tag: ["Herhaling", "Review"],
  due_now: ["nu te herhalen", "due now"], in_queue: ["in herhaalschema", "in review schedule"], mastered: ["onder de knie", "mastered"],
  review_go: ["Herhaal {n} vragen", "Review {n} questions"], review_none: ["Niets te herhalen", "Nothing due"],
  goal_title: ["Dagdoel en VGT", "Daily goal and exam"], goal_sub: ["Houd het ritme vast tussen de toetsen door", "Keep the rhythm between exams"],
  goal: ["Dagdoel", "Daily goal"], next_vgt: ["Volgende VGT", "Next progress test"], days_left: ["nog {n} dagen", "{n} days to go"],
  goal_hint: ["Bij {n} vragen per dag zie je vóór de VGT de hele database {k}× terug.", "At {n} questions a day you will see the whole database {k}× before the test."],
  mastery: ["Beheersing per onderwerp", "Mastery per topic"], mastery_hint: ["Percentage van alle beschikbare vragen per onderwerp dat je juist hebt beantwoord. Per vraag telt je laatste poging; vragen die je nog niet hebt gemaakt tellen als niet juist.", "Percentage of all available questions per topic that you answered correctly. Your last attempt per question counts; questions you have not tried yet count as not correct."],
  activity: ["Activiteit", "Activity"], activity_hint: ["Beantwoorde vragen per dag, laatste 18 weken.", "Questions answered per day, last 18 weeks."],
  history: ["Eerdere rondes", "Previous rounds"], badges_title: ["Badges", "Badges"], about: ["Over deze vragen", "About these questions"],
  about_text: ["De vragen zijn na afloop door AIOS gereconstrueerd en kunnen afwijken van de echte toets. Open vragen zijn omgezet naar meerkeuze. Waar de sleutel is aangepast of de vraag is herschreven, staat dat bij de uitleg. Beelden zijn representatieve voorbeelden met bronvermelding. De vragen zelf zijn in het Nederlands.", "Questions were reconstructed by residents after each exam and may differ from the real test. Open questions were converted to multiple choice. Where the key was corrected or a question rewritten, this is noted in the explanation. Images are representative examples with attribution. The questions themselves are in Dutch."],
  storage: ["Je voortgang, XP en badges worden alleen in deze browser bewaard.", "Your progress, XP and badges are stored in this browser only."],
  reset: ["Voortgang wissen", "Reset progress"], reset_q: ["Alle voortgang, XP en badges wissen?", "Erase all progress, XP and badges?"], erase: ["Wissen", "Erase"], cancel: ["Annuleren", "Cancel"],
  prev: ["← Vorige", "← Previous"], stop: ["Stoppen", "Stop"], q_of: ["Vraag {i} van {n}", "Question {i} of {n}"], correct_n: ["{n} goed", "{n} correct"],
  combo: ["{n} op rij", "{n} in a row"], keys: ["Toets A–{L} of klik · ← vorige", "Press A–{L} or click · ← previous"],
  good: ["Goed", "Correct"], wrong_is: ["Fout, het is {L}", "Wrong, it is {L}"], next: ["Volgende →", "Next →"], to_result: ["Bekijk resultaat", "See result"],
  enter_next: ["Enter of → volgende", "Enter or → next"],
  fb_open: ["Meld een probleem met deze vraag", "Report a problem with this question"], fb_what: ["Wat klopt er niet?", "What is wrong?"],
  fb_ph: ["Beschrijf kort wat er mis is of beter kan (bijv. juiste antwoord + bron).", "Briefly describe what is wrong or could be better (e.g. correct answer + source)."],
  fb_send: ["Versturen", "Send"], fb_cancel: ["Annuleren", "Cancel"], fb_thanks: ["Bedankt! Je melding is doorgestuurd naar de beheerder.", "Thanks! Your report has been sent to the administrator."], fb_err: ["Versturen mislukt: ", "Sending failed: "],
  install: ["Zet de oefenapp op je beginscherm", "Add the practice app to your home screen"],
  install_ios: ["iPhone of iPad (Safari)", "iPhone or iPad (Safari)"],
  install_ios_steps: [["Open deze pagina in Safari.", "Tik op de deelknop (vierkant met pijl omhoog). Op iOS 26: tik eerst op ••• rechtsonder en dan op Deel.", "Scroll omlaag en kies Zet op beginscherm.", "Laat Open als webapp aan staan en tik op Voeg toe."], ["Open this page in Safari.", "Tap the share button (square with an up arrow). On iOS 26: first tap ••• at the bottom right, then Share.", "Scroll down and choose Add to Home Screen.", "Keep Open as Web App switched on and tap Add."]],
  install_android: ["Android (Chrome)", "Android (Chrome)"],
  install_android_steps: [["Open deze pagina in Chrome.", "Tik op ⋮ rechtsboven.", "Kies Toevoegen aan startscherm of App installeren en bevestig."], ["Open this page in Chrome.", "Tap ⋮ at the top right.", "Choose Add to Home screen or Install app and confirm."]],
  install_note: ["Daarna open je de oefenapp met één tik, schermvullend en zonder adresbalk. Log er de eerste keer één keer in; daarna blijf je ingelogd.", "After that the practice app opens with one tap, full screen without an address bar. Sign in once the first time; you will stay signed in."],
  install_banner: ["Tip: zet de oefenapp op je beginscherm, dan open je hem met één tik.", "Tip: add the practice app to your home screen to open it with one tap."], install_how: ["Zo werkt het", "How"], dismiss: ["Sluiten", "Dismiss"], read_more: ["Lees verder:", "Read more:"], why_t: ["Waarom de andere antwoorden niet kloppen", "Why the other answers are wrong"], your_pick: ["jouw keuze", "your pick"], earlier_wrong: ["eerder fout", "missed before"],
  show_answer: ["Toon antwoord", "Show answer"], knew: ["Wist ik", "Knew it"], didnt: ["Wist ik niet", "Didn't know"],
  round_done: ["Ronde klaar", "Round complete"], review_done: ["Herhaling klaar", "Review complete"], daily_done_t: ["Uitdaging klaar", "Challenge complete"],
  score: ["Score", "Score"], xp_earned: ["XP verdiend", "XP earned"], best_combo: ["Langste reeks", "Longest streak"],
  repeat_wrong: ["Herhaal deze {n} fouten", "Retry these {n} misses"], new_round: ["Nieuwe ronde ({n})", "New round ({n})"], home: ["Naar start", "Home"],
  wrong_list: ["Fout beantwoord", "Missed"], all_good: ["Alles goed!", "All correct!"], none_answered: ["Geen vragen beantwoord.", "No questions answered."],
  yours: ["jij", "you"], levelup: ["Niveau omhoog: {t}", "Level up: {t}"], new_badge: ["Nieuwe badge", "New badge"], goal_hit: ["Dagdoel gehaald! +50 XP", "Daily goal reached! +50 XP"],
  no_history: ["Nog geen rondes gespeeld.", "No rounds played yet."], round_kind: { exam: ["Ronde", "Round"], daily: ["Uitdaging", "Challenge"], wrong: ["Herhaling", "Review"] },
  answered_total: ["Beantwoord", "Answered"], accuracy: ["Goed", "Correct"],
  rank_of_bank: ["{p}% van de vragenbank goed", "{p}% of the question bank correct"], next_rank: ["Volgende: {r} · {need}", "Next: {r} · {need}"], top_rank: ["Hoogste niveau bereikt", "Highest level reached"],
  need_ok: ["nog {n} vragen goed", "{n} more correct"], need_topic: ["elk onderwerp ≥{p}% (laagste: {t} {q}%)", "every topic ≥{p}% (lowest: {t} {q}%)"], need_dur: ["nog {n} duurzaam beheerst", "{n} more retained"],
  rankup: ["Nieuw niveau: {r}", "New level: {r}"], rankup_sub: ["Je beheerst nu {p}% van de vragenbank.", "You now know {p}% of the question bank."],
  new_animal: ["Nieuw dier: {a}", "New animal: {a}"], new_animal_sub: ["Verdiend met {b}. Staat nu als je avatar.", "Earned with {b}. Now your avatar."], new_animal_sub2: ["Verdiend met {b}.", "Earned with {b}."],
  zoo: ["Röntgen-dierentuin", "X-ray zoo"], zoo_hint: ["Elk dier verdien je met een badge. Een nieuw dier wordt automatisch je avatar als het minstens zo zeldzaam is als je huidige. De rand toont je niveau.", "Each animal is earned with a badge. A new animal automatically becomes your avatar if it is at least as rare as your current one. The ring shows your level."],
  zoo_pick: ["Kies", "Pick"], zoo_on: ["Je avatar", "Your avatar"], zoo_start: ["Startdier", "Starter"], zoo_how: ["Verdien: {b}", "Earn: {b}"],
  ranks_title: ["Niveaus", "Levels"], ranks_req: ["{p}% goed", "{p}% correct"], ranks_topic: ["elk onderwerp ≥{p}%", "every topic ≥{p}%"], ranks_dur: ["{n} duurzaam beheerst", "{n} retained"],
  ranks_hint: ["Een vraag telt als goed als je laatste antwoord goed was. Duurzaam beheerst: minstens twee keer goed, met minstens 14 dagen tussen je eerste en laatste goede antwoord. Een bereikt niveau zakt niet terug.", "A question counts as correct if your last answer was right. Retained: correct at least twice, at least 14 days between your first and last correct answer. A level once reached is kept."],
  crit: ["Kritieke treffer ×{m}", "Critical hit ×{m}"], mult: ["×{m}", "×{m}"],
  m_title: ["Dagmissies", "Daily missions"], m_sub: ["Drie opdrachten per dag · haal ze alle drie voor het kistje", "Three tasks a day · complete all three for the chest"],
  m_answer: ["Beantwoord {n} vragen", "Answer {n} questions"], m_correct: ["{n} vragen goed", "{n} correct answers"], m_img: ["{n} beeldvragen goed", "{n} image questions correct"],
  m_fix: ["Herstel {n} eerdere fouten", "Fix {n} earlier mistakes"], m_topic: ["{n} vragen goed in {t}", "{n} correct in {t}"], m_combo: ["Haal {n} op rij goed", "Get {n} correct in a row"],
  m_fresh: ["Maak {n} nieuwe vragen", "Answer {n} new questions"], m_daily: ["Doe de dagelijkse uitdaging", "Complete the daily challenge"],
  m_done: ["Missie voltooid: {m} · +40 XP", "Mission complete: {m} · +40 XP"], chest_open: ["Open het kistje 🎁", "Open the chest 🎁"], chest_locked: ["Kistje: voltooi eerst alle missies", "Chest: complete all missions first"],
  chest_got: ["Kistje geopend: +{n} XP", "Chest opened: +{n} XP"], chest_jackpot: ["Jackpot! +{n} XP", "Jackpot! +{n} XP"],
  atlas: ["Atlas van de vragenbank", "Question bank atlas"], atlas_hint: ["Elk vakje is een vraag. Grijs: nog niet gemaakt · rood: laatste antwoord fout · lichtgroen: goed · donkergroen: duurzaam beheerst.", "Each square is a question. Grey: not answered · red: last answer wrong · light green: correct · dark green: retained."],
  atlas_topic: ["{s}/{n} gezien · {o} goed", "{s}/{n} seen · {o} correct"], atlas_exams: ["Per toets", "Per exam"], atlas_best: ["beste hele toets {p}%", "best full test {p}%"],
  full_exam: ["Speel de hele toets ({n} vragen)", "Play the full test ({n} questions)"], full_hint: ["Haal je in één keer minstens 90%, dan verdien je Toetskampioen.", "Score at least 90% in one go to earn Exam champion."]
};
// niveau = hoeveel van de vragenbank je beheerst (laatste antwoord goed); hogere niveaus vragen ook breedte en duurzaamheid
// [id, nl, en, % bank goed, min % per onderwerp, duurzaam beheerst, rand, pips]
const RANKS = [
  ["coas", "Coassistent", "Medical student", 0, 0, 0, "grijs", 0], ["anios", "ANIOS", "Junior doctor", 5, 0, 0, "grijs", 0],
  ["aios1", "AIOS 1", "Resident year 1", 10, 0, 0, "brons", 1], ["aios2", "AIOS 2", "Resident year 2", 20, 0, 0, "brons", 2],
  ["aios3", "AIOS 3", "Resident year 3", 30, 0, 0, "brons", 3], ["aios4", "AIOS 4", "Resident year 4", 40, 0, 0, "brons", 4],
  ["aios5", "AIOS 5", "Resident year 5", 50, 0, 0, "brons", 5], ["fellow", "Fellow", "Fellow", 60, 40, 0, "zilver", 0],
  ["rad", "Radioloog", "Radiologist", 75, 60, 0, "goud", 0], ["prof", "Professor", "Professor", 95, 90, 1000, "prof", 0]
];
const RARITY = { c: ["Gewoon", "Common", 0], r: ["Zeldzaam", "Rare", 1], e: ["Episch", "Epic", 2], l: ["Legendarisch", "Legendary", 3] };
// [id, nl, en, badge die het dier vrijspeelt (null = startdier), zeldzaamheid]
const ANIMALS = [
  ["kat", "Kat", "Cat", null, "c"], ["vis", "Vis", "Fish", "n100", "c"], ["kikker", "Kikker", "Frog", "d7", "c"], ["uil", "Uil", "Owl", "night", "c"],
  ["muis", "Muis", "Mouse", "c25", "r"], ["olifant", "Olifant", "Elephant", "n1000", "r"], ["vleermuis", "Vleermuis", "Bat", "img25", "r"],
  ["kameleon", "Kameleon", "Chameleon", "topicdone", "e"], ["slang", "Slang", "Snake", "daily30", "e"], ["giraffe", "Giraffe", "Giraffe", "allseen", "e"], ["flamingo", "Flamingo", "Flamingo", "imgrun", "e"],
  ["zeepaardje", "Zeepaardje", "Seahorse", "vgt90", "l"], ["haai", "Haai", "Shark", "c50", "l"], ["schildpad", "Schildpad", "Turtle", "d100", "l"]
];
const DURABLE_MS = 14 * 864e5;
const BADGES = [
  ["first", "🩺", ["Eerste vraag", "First question"], ["Je eerste vraag beantwoord", "Answered your first question"], s => s.answered >= 1, "c"],
  ["c10", "🔥", ["Tien op rij", "Ten in a row"], ["10 vragen achter elkaar goed", "10 correct in a row"], s => s.bestCombo >= 10, "c"],
  ["c25", "⚡", ["Onstuitbaar", "Unstoppable"], ["25 vragen achter elkaar goed", "25 correct in a row"], s => s.bestCombo >= 25, "r"],
  ["perfect", "💯", ["Foutloos", "Flawless"], ["Een ronde van minstens 10 vragen zonder fout", "A round of at least 10 with no misses"], s => s.perfect >= 1, "c"],
  ["n100", "📚", ["Honderd", "Hundred"], ["100 vragen beantwoord", "100 questions answered"], s => s.answered >= 100, "c"],
  ["n500", "🗂️", ["Vijfhonderd", "Five hundred"], ["500 vragen beantwoord", "500 questions answered"], s => s.answered >= 500, "c"],
  ["n1000", "🏛️", ["Duizendpoot", "Thousand"], ["1000 vragen beantwoord", "1000 questions answered"], s => s.answered >= 1000, "r"],
  ["d3", "📅", ["Op gang", "Warming up"], ["3 dagen op rij geoefend", "Practised 3 days in a row"], s => s.bestStreak >= 3, "c"],
  ["d7", "🗓️", ["Weekritme", "Weekly rhythm"], ["7 dagen op rij geoefend", "Practised 7 days in a row"], s => s.bestStreak >= 7, "c"],
  ["d30", "🏅", ["Maandritme", "Monthly rhythm"], ["30 dagen op rij geoefend", "Practised 30 days in a row"], s => s.bestStreak >= 30, "r"],
  ["goal5", "🎯", ["Doelgericht", "On target"], ["5 keer je dagdoel gehaald", "Hit your daily goal 5 times"], s => s.goalDays >= 5, "c"],
  ["daily5", "🧩", ["Uitdager", "Challenger"], ["5 dagelijkse uitdagingen gedaan", "Completed 5 daily challenges"], s => s.dailyDone >= 5, "c"],
  ["img25", "🩻", ["Beeldkijker", "Image reader"], ["25 beeldvragen goed", "25 image questions correct"], s => s.imgCorrect >= 25, "r"],
  ["fix25", "🔁", ["Herstel", "Comeback"], ["25 eerder foute vragen alsnog goed", "25 previously missed questions fixed"], s => s.fixed >= 25, "r"],
  ["all", "🧭", ["Veelzijdig", "All-rounder"], ["In elk onderwerp een vraag goed", "A correct answer in every topic"], s => s.topicsTotal > 0 && s.topicsCorrect >= s.topicsTotal, "c"],
  ["master", "🎓", ["Specialist", "Specialist"], ["80% beheersing in een onderwerp", "80% mastery in a topic"], s => s.bestMastery >= 80, "r"],
  ["night", "🦉", ["Nachtdienst", "Night shift"], ["Geoefend tussen 0 en 5 uur", "Practised between midnight and 5 am"], s => s.night, "c"],
  ["early", "🌅", ["Vroege vogel", "Early bird"], ["Geoefend vóór 7 uur 's ochtends", "Practised before 7 am"], s => s.early, "c"],
  ["c50", "🌊", ["Vijftig op rij", "Fifty in a row"], ["50 vragen achter elkaar goed", "50 correct in a row"], s => s.bestCombo >= 50, "l"],
  ["imgrun", "👁️", ["Röntgenblik", "X-ray vision"], ["25 beeldvragen achter elkaar goed", "25 image questions correct in a row"], s => s.imgRunBest >= 25, "e"],
  ["topicdone", "🏁", ["Uitgespeeld", "Completed"], ["Alle vragen van een onderwerp gezien en je laatste antwoord overal goed", "Every question of a topic seen and every last answer correct"], s => s.topicDone, "e"],
  ["allseen", "🗺️", ["Alles gezien", "Seen it all"], ["Elke vraag uit de bank minstens één keer gemaakt", "Answered every question in the bank at least once"], s => s.allSeen, "e"],
  ["daily30", "🧠", ["Foutloze maand", "Flawless month"], ["30 dagelijkse uitdagingen foutloos", "30 daily challenges without a miss"], s => s.dailyPerfect >= 30, "e"],
  ["vgt90", "🏆", ["Toetskampioen", "Exam champion"], ["Een volledige VGT in één keer met minstens 90% goed", "A full progress test in one go with at least 90% correct"], s => s.vgt90 > 0, "l"],
  ["d100", "💎", ["Honderd dagen", "Hundred days"], ["100 dagen op rij geoefend", "Practised 100 days in a row"], s => s.bestStreak >= 100, "l"]
];
const INTERVALS = [1, 3, 7, 14, 30];
const FLAG_LABEL = { corrected: ["Antwoord gecorrigeerd", "Answer corrected"], added: ["Antwoord aangevuld", "Answer added"], uncertain: ["Antwoord onzeker", "Answer uncertain"], rewritten: ["Vraag herschreven", "Question rewritten"] };
const FLAG_NOTE = { corrected: ["De antwoordsleutel uit de bron is aangepast; zie de toelichting.", "The source key was corrected; see the explanation."], added: ["De bron gaf geen antwoord; dit antwoord is aangevuld.", "The source gave no answer; this answer was added."], uncertain: ["Het antwoord uit de bron is omstreden.", "The source answer is disputed."], rewritten: ["De vraag is herschreven omdat de originele afbeelding of opties ontbraken.", "The question was rewritten because the original image or options were missing."] };
const TOPIC_COLOR = { Abdomen: "teal", Thorax: "blue", Neuro: "purple", "Hoofd-hals": "purple", MSK: "orange", Kinderradiologie: "green", Mammo: "red", Interventie: "blue", Nucleair: "teal", Cardiovasculair: "red", Fysica: "orange" };

let lang = "nl";
try { const l = localStorage.getItem("ia-lang"); if (l === "en" || l === "nl") lang = l; } catch (e) {}
function t(key, vars) {
  const v = typeof key === "string" ? T[key] : key;
  let s = Array.isArray(v) ? (lang === "en" ? v[1] : v[0]) : String(key);
  if (vars) for (const [k, x] of Object.entries(vars)) s = s.split("{" + k + "}").join(x);
  return s;
}
function setLang(l) { lang = l; try { localStorage.setItem("ia-lang", l); } catch (e) {} document.documentElement.lang = l; rerender(); }
function initTheme() { try { const s = localStorage.getItem("ia-theme"); if (s === "dark" || s === "light") document.documentElement.dataset.theme = s; } catch (e) {} }
function isDark() { const d = document.documentElement.dataset.theme; if (d) return d === "dark"; return !!(window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches); }
function toggleTheme() { const next = isDark() ? "light" : "dark"; document.documentElement.dataset.theme = next; try { localStorage.setItem("ia-theme", next); } catch (e) {} rerender(); }
initTheme();

/* ---------- opslag ---------- */
function blank() { return { wrong: {}, seen: {}, history: [], xp: 0, qs: {}, box: {}, days: {}, daily: {}, goal: 20, goalDays: {}, vgt: "", badges: {}, stats: { bestCombo: 0, perfect: 0, imgCorrect: 0, fixed: 0, night: false, early: false, imgRun: 0, imgRunBest: 0, vgt90: 0 }, rank: 0, avatar: "", missions: null, vgtBest: {} }; }
function loadProgress() {
  const p = blank();
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) { const o = JSON.parse(raw); Object.assign(p, o); p.stats = Object.assign(blank().stats, o.stats || {}); }
  } catch (e) {}
  return p;
}
function saveProgress() { progress._ts = Date.now(); try { localStorage.setItem(LS_KEY, JSON.stringify(progress)); } catch (e) {} if (window.__iaSync) window.__iaSync(progress); }
let progress = loadProgress();
window.__iaProgress = {
  get: () => progress,
  set: (p) => { const n = blank(); Object.assign(n, p); n.stats = Object.assign(blank().stats, p.stats || {}); progress = n; try { localStorage.setItem(LS_KEY, JSON.stringify(progress)); } catch (e) {} if (!session) rerender(); }
};
let examSize = 25;
try { const v = parseInt(localStorage.getItem("rad-oefententamen-size"), 10); if (v > 0) examSize = v; } catch (e) {}
function setExamSize(n) { examSize = Math.max(1, Math.min(500, Math.round(n) || 25)); try { localStorage.setItem("rad-oefententamen-size", String(examSize)); } catch (e) {} }
// eigen vragen (o.b.v. recente Radiology Assistant-artikelen) staan standaard uit
const ALLQ = QUESTIONS.slice(); window.__iaAllQ = ALLQ;
const isExtra = q => /eigen vragen/i.test(q.source || "");
let extraOn = false;
try { extraOn = localStorage.getItem("ia-extra-on") === "1"; } catch (e) {}
function applyExtra() { const keep = ALLQ.filter(q => extraOn || !isExtra(q)); QUESTIONS.length = 0; QUESTIONS.push(...keep); }
function setExtra(on) { extraOn = !!on; try { localStorage.setItem("ia-extra-on", extraOn ? "1" : "0"); } catch (e) {} applyExtra(); }
applyExtra();
const byId = Object.fromEntries(ALLQ.map(q => [q.id, q]));

/* ---------- datum ---------- */
function dayKey(d) { d = d || new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
function dayNum(k) { const [y, m, d] = (k || dayKey()).split("-").map(Number); return Math.round(Date.UTC(y, m - 1, d) / 864e5); }
function dayKeyFromNum(n) { const d = new Date(n * 864e5); return d.getUTCFullYear() + "-" + String(d.getUTCMonth() + 1).padStart(2, "0") + "-" + String(d.getUTCDate()).padStart(2, "0"); }
const TODAY = () => dayNum();
for (const id of Object.keys(progress.wrong)) { if (!byId[id]) delete progress.wrong[id]; else if (!progress.box[id]) progress.box[id] = { b: 0, due: TODAY() }; }
// goede antwoorden ook gespreid herhalen: eenmalig de eerder goed beantwoorde vragen inplannen (7 dagen na het laatste antwoord)
for (const [id, st] of Object.entries(progress.qs)) {
  if (!byId[id] || !st.last || st.mastered || progress.box[id]) continue;
  progress.box[id] = { b: 2, due: (st.t ? Math.floor((st.t - new Date(st.t).getTimezoneOffset() * 6e4) / 864e5) : TODAY()) + INTERVALS[2] };
}
for (const id of Object.keys(progress.box)) if (!byId[id]) delete progress.box[id];
if (ZOO_DEFS && !document.getElementById("zoo-defs")) document.body.insertAdjacentHTML("afterbegin", '<svg id="zoo-defs" width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' + ZOO_DEFS + "</defs></svg>");

/* ---------- helpers ---------- */
const app = document.getElementById("app");
function h(tag, attrs, ...kids) {
  const el = document.createElement(tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === "class") el.className = v;
    else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else if (k === "text") el.textContent = v;
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const kid of kids.flat(Infinity)) {
    if (kid == null || kid === false) continue;
    el.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  }
  return el;
}
function mount(...kids) { app.replaceChildren(...kids.flat(Infinity).filter(k => k != null && k !== false)); }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function seeded(str) { let s = 2166136261; for (const c of str) s = Math.imul(s ^ c.charCodeAt(0), 16777619); return () => { s = (s + 0x6D2B79F5) | 0; let x = s; x = Math.imul(x ^ (x >>> 15), x | 1); x ^= x + Math.imul(x ^ (x >>> 7), x | 61); return ((x ^ (x >>> 14)) >>> 0) / 4294967296; }; }
function uniq(key) { return [...new Set(QUESTIONS.map(q => q[key]).filter(Boolean))]; }
function sources() { const first = {}; QUESTIONS.forEach((q, i) => { if (!(q.source in first)) first[q.source] = i; }); return uniq("source").sort((a, b) => first[b] - first[a]); }
function topics() { return uniq("topic").sort((a, b) => a.localeCompare(b, "nl")); }
function imgSrc(name) { const k = name.replace(/\.[a-z]+$/i, "") + ".webp"; if (window.__iaImg && window.__iaImg[k]) return window.__iaImg[k]; if (window.__iaNeedImg) window.__iaNeedImg(k); return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"; }
function rpUrl(term) { return "https://radiopaedia.org/search?lang=us&q=" + encodeURIComponent(term) + "&scope=articles"; }
function linksFor(q) {
  const list = (q.links || []).filter(l => l && /^https?:\/\//.test(l.url));
  for (const term of q.rp || []) list.push({ label: term, url: rpUrl(term) });
  if (!list.length) { const term = q.topic || q.question.slice(0, 60); list.push({ label: term, url: rpUrl(term) }); }
  return list;
}
function short(text, n) { n = n || 110; return text.length > n ? text.slice(0, n - 1).trimEnd() + "…" : text; }
function hasImages(q) { return (q.images || []).length > 0; }
function qYear(q) { if (q.year) return q.year; const m = /(20\d\d)/.exec(q.source || ""); return m ? Number(m[1]) : 2020; }
function qWeight(q) { return 1 + Math.max(0, Math.min(1, (qYear(q) - 2013) / 12)); }
function weightedSample(list, k, rnd, wf) { rnd = rnd || Math.random; wf = wf || qWeight; return list.map(q => ({ q, key: Math.pow(rnd(), 1 / wf(q)) })).sort((a, b) => b.key - a.key).slice(0, k).map(x => x.q); }
function color(q) { return TOPIC_COLOR[q.topic] || "blue"; }
function figures(names, labels, credit) {
  if (!names || !names.length) return null;
  return h("div", { class: "figwrap" },
    h("div", { class: "figs" + (names.length === 1 ? " single" : "") },
      names.map((n, i) => h("figure", { class: "fig" },
        h("button", { type: "button", "aria-label": "Afbeelding vergroten", onclick: () => openLightbox(imgSrc(n)) },
          h("img", { src: imgSrc(n), "data-ia-img": n.replace(/\.[a-z]+$/i, "") + ".webp", alt: labels && labels[i] ? "Afbeelding " + labels[i] : "Afbeelding bij de vraag", loading: "lazy", decoding: "async" })),
        labels && labels[i] ? h("figcaption", { text: labels[i] }) : null))),
    credit ? (credit.url ? h("a", { class: "credit", href: credit.url, target: "_blank", rel: "noopener", text: credit.text }) : h("span", { class: "credit", text: credit.text })) : null);
}
let lightboxEl = null;
function closeLightbox() { if (lightboxEl) { lightboxEl.remove(); lightboxEl = null; } }
function openLightbox(src) {
  closeLightbox();
  lightboxEl = h("div", { class: "lightbox", role: "dialog", "aria-label": "Vergrote afbeelding", onclick: closeLightbox },
    h("img", { src, alt: "Vergrote afbeelding" }), h("button", { class: "close", type: "button", "aria-label": "Sluiten", onclick: closeLightbox }, "✕"));
  document.body.append(lightboxEl);
}
const toastQ = []; let toastBusy = false;
function toast(msg) { toastQ.push(msg); if (!toastBusy) nextToast(); }
function nextToast() { const msg = toastQ.shift(); if (!msg) { toastBusy = false; return; } toastBusy = true; const el = h("div", { class: "toast", role: "status", text: msg }); document.body.append(el); setTimeout(() => { el.remove(); setTimeout(nextToast, 150); }, 2400); }
function confetti() {
  const box = h("div", { class: "confetti", "aria-hidden": "true" });
  const cols = ["#1e6db5", "#138a8a", "#b53a2f", "#6040a0", "#b36000", "#1a7a3e", "#7de8e8"];
  for (let i = 0; i < 70; i++) box.append(h("i", { style: "left:" + (Math.random() * 100) + "%;background:" + cols[i % cols.length] + ";animation-duration:" + (1.6 + Math.random() * 1.6) + "s;animation-delay:" + (Math.random() * 0.4) + "s" }));
  document.body.append(box); setTimeout(() => box.remove(), 3800);
}

/* ---------- game-logica ---------- */
function isDurable(st) { return !!(st && st.last && st.ok >= 2 && st.f && st.t && st.t - st.f >= DURABLE_MS); }
function knowledge() {
  const tm = {}; let ok = 0, dur = 0, seen = 0;
  for (const q of QUESTIONS) {
    const r = tm[q.topic] || (tm[q.topic] = { total: 0, ok: 0, seen: 0, dur: 0 }); r.total++;
    const st = progress.qs[q.id];
    if (progress.seen[q.id]) { r.seen++; seen++; }
    if (st && st.last) { r.ok++; ok++; if (isDurable(st)) { dur++; r.dur++; } }
  }
  const N = QUESTIONS.length || 1; const vals = Object.values(tm);
  return { tm, ok, dur, seen, N, pct: 100 * ok / N, minTopic: vals.length ? Math.min(...vals.map(r => 100 * r.ok / r.total)) : 0 };
}
function rankMeets(r, k) { return k.pct >= r[3] && (!r[4] || k.minTopic >= r[4]) && (!r[5] || k.dur >= r[5]); }
function rankNeed(r, k) {
  const parts = [];
  if (k.pct < r[3]) parts.push(t("need_ok", { n: Math.ceil(r[3] * k.N / 100) - k.ok }));
  if (r[4] && k.minTopic < r[4]) { const low = Object.entries(k.tm).sort((a, b) => a[1].ok / a[1].total - b[1].ok / b[1].total)[0]; parts.push(t("need_topic", { p: r[4], t: low[0], q: Math.floor(100 * low[1].ok / low[1].total) })); }
  if (r[5] && k.dur < r[5]) parts.push(t("need_dur", { n: r[5] - k.dur }));
  return parts.join(" · ");
}
function rankInfo(k) {
  k = k || knowledge();
  let i = 0; for (let j = 1; j < RANKS.length; j++) { if (rankMeets(RANKS[j], k)) i = j; else break; }
  i = Math.max(i, progress.rank || 0);
  const cur = RANKS[i], nxt = RANKS[i + 1];
  const bar = nxt ? Math.max(0, Math.min(100, Math.round(100 * (k.pct - cur[3]) / (nxt[3] - cur[3])))) : 100;
  return { i, name: lang === "en" ? cur[2] : cur[1], next: nxt ? (lang === "en" ? nxt[2] : nxt[1]) : null, need: nxt ? rankNeed(nxt, k) : "", bar, k };
}
function rarityOf(a) { return RARITY[a[4]][2]; }
function ownedAnimals() { return ANIMALS.filter(a => !a[3] || progress.badges[a[3]]); }
function currentAnimal() {
  const own = ownedAnimals(); const pick = own.find(a => a[0] === progress.avatar);
  if (pick) return pick;
  return own.reduce((best, a) => rarityOf(a) >= rarityOf(best) ? a : best, own[0]);
}
function avatarSvg(id, ri, size, locked) {
  const r = RANKS[ri] || RANKS[0]; const ring = r[6]; const prof = ring === "prof" && !locked;
  const stroke = locked ? "#4a5568" : ring === "grijs" ? (ri ? "#a3afbf" : "#6b7a8f") : ring === "prof" ? "url(#zr-goud)" : "url(#zr-" + ring + ")";
  let pips = "";
  if (!locked) for (let p = 0; p < r[7]; p++) { const ang = (90 + (p - (r[7] - 1) / 2) * 14) * Math.PI / 180; pips += '<circle cx="' + (60 + 56.5 * Math.cos(ang)).toFixed(1) + '" cy="' + (60 + 56.5 * Math.sin(ang)).toFixed(1) + '" r="3.6" fill="#fff6e8" stroke="#7a4a1f" stroke-width="1.2"/>'; }
  const animal = ANIMALS.find(a => a[0] === id); const label = animal ? (lang === "en" ? animal[2] : animal[1]) + " · " + (lang === "en" ? r[2] : r[1]) : "";
  return '<svg viewBox="-4 -4 128 128" width="' + size + '" height="' + size + '" class="zav' + (prof ? " prof" : "") + (locked ? " locked" : "") + '" role="img" aria-label="' + (locked ? "?" : label) + '">' +
    (prof ? '<circle class="zglow" cx="60" cy="60" r="57" fill="none" stroke="#ffd65a" stroke-width="7" filter="url(#zglow)"/>' : "") +
    '<g clip-path="url(#zclip)"><rect width="120" height="120" fill="url(#zbg)"/><use href="#z-' + id + '-s"/>' + (locked ? "" : '<use href="#z-' + id + '-b"/>') + (prof ? '<use href="#z-baret"/>' : "") + "</g>" +
    '<circle cx="60" cy="60" r="56.5" fill="none" stroke="' + stroke + '" stroke-width="' + (ring === "grijs" || locked ? 3.5 : 5.5) + '"/>' + pips + "</svg>";
}
function avatarEl(size, id, ri, locked) {
  const el = h("span", { class: "zavw" });
  el.innerHTML = avatarSvg(id || currentAnimal()[0], ri == null ? rankInfo().i : ri, size, locked);
  return el;
}
function badgeName(id) { const b = BADGES.find(x => x[0] === id); return b ? t(b[2]) : id; }
// na nieuwe badges: dieren vrijspelen en eventueel als avatar zetten
function unlockAnimals(fresh) {
  const out = [];
  for (const b of fresh) {
    const a = ANIMALS.find(x => x[3] === b[0]); if (!a) continue;
    const cur = currentAnimal(); const auto = rarityOf(a) >= rarityOf(cur);
    if (auto) progress.avatar = a[0];
    out.push({ a, auto });
  }
  const lastAuto = out.map(x => x.auto).lastIndexOf(true); out.forEach((x, i) => { if (i !== lastAuto) x.auto = false; });
  return out;
}
function streakInfo() {
  const days = progress.days; const today = TODAY();
  let cur = 0, d = today;
  if (!days[dayKeyFromNum(d)]) d = today - 1;
  while (days[dayKeyFromNum(d)]) { cur++; d--; }
  let best = 0, run = 0, prev = null;
  for (const k of Object.keys(days).sort()) { const n = dayNum(k); run = prev !== null && n === prev + 1 ? run + 1 : 1; best = Math.max(best, run); prev = n; }
  return { cur, best: Math.max(best, cur) };
}
function todayCount() { return progress.days[dayKey()] || 0; }
function dueIds() { const now = TODAY(); return Object.entries(progress.box).filter(([id, b]) => byId[id] && b.due <= now).map(([id]) => id); }
function topicMastery() {
  const res = {};
  for (const q of QUESTIONS) { const r = res[q.topic] || (res[q.topic] = { total: 0, ok: 0 }); r.total++; const s = progress.qs[q.id]; if (s && s.last) r.ok++; }
  return res;
}
function gameStats() {
  const s = progress.stats; const st = streakInfo(); const tm = topicMastery(); const tk = Object.keys(tm);
  return {
    answered: Object.values(progress.qs).reduce((a, x) => a + x.n, 0), bestCombo: s.bestCombo, perfect: s.perfect, imgCorrect: s.imgCorrect, fixed: s.fixed, night: s.night, early: s.early,
    bestStreak: st.best, goalDays: Object.keys(progress.goalDays).length, dailyDone: Object.keys(progress.daily).length,
    topicsTotal: tk.length, topicsCorrect: tk.filter(k => tm[k].ok > 0).length,
    bestMastery: Math.max(0, ...tk.filter(k => tm[k].total >= 20).map(k => Math.round(100 * tm[k].ok / tm[k].total))),
    imgRunBest: s.imgRunBest || 0, vgt90: s.vgt90 || 0,
    topicDone: tk.some(k => tm[k].ok === tm[k].total && tm[k].total > 0),
    allSeen: QUESTIONS.length > 0 && QUESTIONS.every(q => progress.seen[q.id]),
    dailyPerfect: Object.values(progress.daily).filter(d => d && d.t >= 10 && d.c === d.t).length
  };
}
function checkBadges() {
  const s = gameStats(); const fresh = [];
  for (const b of BADGES) if (!progress.badges[b[0]] && b[4](s)) { progress.badges[b[0]] = dayKey(); fresh.push(b); }
  return fresh;
}

/* ---------- dagmissies ---------- */
const MISSIONS = {
  answer: { n: () => progress.goal || 20 }, correct: { n: () => 15 }, img: { n: () => 3 },
  fix: { n: () => 3, ok: () => Object.keys(progress.wrong).filter(id => byId[id]).length >= 3 },
  topic: { n: () => 8 }, combo: { n: () => 8 },
  fresh: { n: () => 10, ok: () => QUESTIONS.filter(q => !progress.seen[q.id]).length >= 10 },
  daily: { n: () => 1, ok: () => !progress.daily[dayKey()] }
};
function missions() {
  const dk = dayKey(); let m = progress.missions;
  if (!m || m.day !== dk) {
    const rnd = seeded("missie-" + dk + LS_KEY); const k = knowledge();
    const weak = Object.entries(k.tm).filter(([, r]) => r.total >= 30).sort((a, b) => a[1].ok / a[1].total - b[1].ok / b[1].total);
    const first = MISSIONS.fix.ok() && rnd() < 0.5 ? "fix" : "topic";
    const rest = ["answer", "correct", "img", "combo", "fresh", "daily"].filter(x => !MISSIONS[x].ok || MISSIONS[x].ok());
    for (let i = rest.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [rest[i], rest[j]] = [rest[j], rest[i]]; }
    m = progress.missions = { day: dk, chest: 0, list: [first, ...rest.slice(0, 2)].map(x => ({ k: x, n: MISSIONS[x].n(), t: x === "topic" ? (weak[0] ? weak[0][0] : QUESTIONS[0].topic) : null, p: 0 })) };
  }
  return m;
}
function missionText(x) { return t("m_" + x.k, { n: x.n, t: x.t }); }
function tickMissions(ev) {
  const m = missions(); const done = [];
  for (const x of m.list) {
    if (x.p >= x.n) continue;
    const before = x.p;
    if (x.k === "answer" && ev.answered) x.p++;
    else if (x.k === "correct" && ev.correct) x.p++;
    else if (x.k === "img" && ev.correct && ev.img) x.p++;
    else if (x.k === "fix" && ev.fix) x.p++;
    else if (x.k === "topic" && ev.correct && ev.topic === x.t) x.p++;
    else if (x.k === "combo" && ev.combo) x.p = Math.max(x.p, ev.combo);
    else if (x.k === "fresh" && ev.fresh) x.p++;
    else if (x.k === "daily" && ev.daily) x.p = 1;
    if (x.p >= x.n && before < x.n) { x.p = x.n; done.push(x); }
  }
  for (const x of done) progress.xp += 40;
  return done;
}
function openChest() {
  const m = missions(); if (m.chest || m.list.some(x => x.p < x.n)) return;
  const r = Math.random(); const n = r < 0.08 ? 500 : 100 + 50 * Math.floor(Math.random() * 5);
  m.chest = n; progress.xp += n; saveProgress();
  toast(n >= 500 ? t("chest_jackpot", { n }) : t("chest_got", { n })); confetti(); rerender();
}
function missionsCard() {
  return h("section", { class: "card", id: "missions" }, cardHead("⭐", "orange", t("m_title"), t("m_sub")), missionsBody());
}
function missionsBody() {
  const m = missions(); const all = m.list.every(x => x.p >= x.n);
  return h("div", { class: "card-body" },
      m.list.map(x => h("div", { class: "mission" + (x.p >= x.n ? " done" : "") },
        h("span", { class: "mcheck", text: x.p >= x.n ? "✓" : "" }),
        h("span", { class: "mtxt", text: missionText(x) }),
        h("div", { class: "mbar" }, h("span", { class: x.p >= x.n ? "t4" : "t3", style: "width:" + Math.round(100 * Math.min(x.p, x.n) / x.n) + "%" })),
        h("span", { class: "num muted mnum", text: Math.min(x.p, x.n) + "/" + x.n }))),
      m.chest ? h("div", { class: "chest got", text: "🎁 " + (m.chest >= 500 ? t("chest_jackpot", { n: m.chest }) : t("chest_got", { n: m.chest })) })
        : h("button", { class: "btn orange wide pill chestbtn" + (all ? " ready" : ""), disabled: !all, onclick: openChest }, all ? t("chest_open") : "🔒 " + t("chest_locked")));
}

/* ---------- state ---------- */
let session = null, view = "home", topicFilter = "", sourceFilter = "", imagesOnly = false, confirmReset = false;
const openAcc = { settings: false, missions: false, dx: false, goal: false, mastery: false, badges: false, about: false, install: false, activity: true, history: true, pmastery: true, pbadges: true, zoo: true, ranks: false, atlas: true };
function pool() { return QUESTIONS.filter(q => (!topicFilter || q.topic === topicFilter) && (!sourceFilter || q.source === sourceFilter) && (!imagesOnly || hasImages(q))); }
function rerender() { if (session && view === "quiz") renderQuestion(); else if (session && view === "result") renderResult(); else if (view === "progress") renderProgress(); else renderHome(); }
function goHome() { session = null; view = "home"; renderHome(); window.scrollTo(0, 0); }
function goProgress() { session = null; view = "progress"; renderProgress(); window.scrollTo(0, 0); }
function goZoo() { openAcc.zoo = true; goProgress(); const el = document.getElementById("acc-zoo"); if (el) el.scrollIntoView({ block: "start" }); }

/* ---------- vaste onderdelen ---------- */
function navBar() {
  const lv = rankInfo();
  const tab = (id, label, fn) => h("button", { class: "nav-btn" + (view === id ? " on" : ""), onclick: fn }, label);
  return h("nav", { class: "ia gutter" }, h("div", { class: "nav-in" },
    h("button", { class: "logo", onclick: () => { if (view === "home") location.href = "/"; else goHome(); }, "aria-label": "Start" }, "Intervention", h("span", { text: "Assistant" }), h("small", { text: "VGT-oefenen" })),
    tab("home", t("nav_practice"), goHome),
    tab("progress", t("nav_progress"), goProgress),
    h("div", { class: "nav-right" },
      h("span", { class: "xp-mini num", title: t("level"), text: lv.name + " · " + progress.xp + " XP" }),
      h("button", { class: "nav-av", type: "button", title: lv.name, "aria-label": t("nav_progress"), onclick: goProgress }, avatarEl(30, null, lv.i)),
      h("button", { class: "chip-btn", id: "lang-btn", title: lang === "nl" ? "Switch to English" : "Schakel naar Nederlands", onclick: () => setLang(lang === "nl" ? "en" : "nl") }, lang === "nl" ? "EN" : "NL"),
      h("button", { class: "chip-btn", id: "theme-btn", "aria-label": "Licht of donker thema", onclick: toggleTheme }, isDark() ? "☀️" : "🌙"))));
}
function footer() {
  return h("footer", { class: "foot gutter" },
    window.__iaFootExtra ? h("div", { class: "row" }, window.__iaFootExtra(h)) : h("span", { text: t("storage") }),
    confirmReset
      ? h("div", { class: "confirm" }, h("span", { text: t("reset_q") }),
          h("button", { class: "btn red", onclick: () => { progress = blank(); saveProgress(); confirmReset = false; rerender(); } }, t("erase")),
          h("button", { class: "btn", onclick: () => { confirmReset = false; rerender(); } }, t("cancel")))
      : h("button", { class: "linkbtn", onclick: () => { confirmReset = true; rerender(); } }, t("reset")));
}
function heroStats() {
  const lv = rankInfo(); const st = streakInfo(); const tc = todayCount(); const goal = progress.goal || 20;
  return h("div", { class: "hero-stats" },
    h("div", { class: "hstat level" },
      h("button", { class: "hav", type: "button", "aria-label": t("zoo"), onclick: goZoo }, avatarEl(58, null, lv.i)),
      h("div", { style: "min-width:0;flex:1" },
        h("div", { class: "lbl", text: t("level") + " · " + Math.floor(lv.k.pct) + "%" }),
        h("div", { class: "val" }, lv.name, " ", h("small", { class: "num", text: progress.xp + " XP" })),
        h("div", { class: "bar" }, h("span", { style: "width:" + lv.bar + "%" })),
        h("div", { class: "hneed", text: lv.next ? t("next_rank", { r: lv.next, need: lv.need }) : t("top_rank") }))),
    h("div", { class: "hstat" },
      h("div", { class: "lbl", text: t("streak") }),
      h("div", { class: "val num" }, (st.cur ? "🔥 " : "") + st.cur + " ", h("small", { text: st.cur === 1 ? t("day") : t("days") }))),
    h("div", { class: "hstat" },
      h("div", { class: "lbl", text: t("today") }),
      h("div", { class: "val num" }, tc + " ", h("small", { text: "/ " + goal })),
      h("div", { class: "bar" }, h("span", { style: "width:" + Math.min(100, Math.round(100 * tc / goal)) + "%" }))));
}
function accordion(key, dot, title, body) {
  const open = openAcc[key];
  return h("div", { class: "accordion" + (open ? " open" : ""), id: "acc-" + key },
    h("button", { class: "acc-header", "aria-expanded": open ? "true" : "false", onclick: () => { openAcc[key] = !openAcc[key]; rerender(); } },
      h("span", { class: "acc-title-wrap" }, h("span", { class: "acc-dot " + dot }), h("span", { class: "acc-title", text: title })),
      h("span", { class: "acc-chevron", text: "▾" })),
    open ? h("div", { class: "acc-body" }, body()) : null);
}
function cardHead(icon, col, title, sub) {
  return [h("div", { class: "stripe " + col }), h("div", { class: "card-head" }, h("div", { class: "icon " + col, text: icon }), h("div", null, h("div", { class: "card-title", text: title }), h("div", { class: "card-sub", text: sub })))];
}

/* ---------- start ---------- */
function renderHome() {
  view = "home"; session = null;
  const p = pool(); const examCount = Math.min(examSize, p.length);
  const count = (key, val) => QUESTIONS.filter(q => q[key] === val).length;
  const due = dueIds(); const today = progress.daily[dayKey()];
  const u = p.filter(q => !progress.seen[q.id]).length;
  const full = sourceFilter && !topicFilter && !imagesOnly;
  const summary = [topicFilter || t("all_topics"), sourceFilter || t("all_exams"), examCount + " " + t("q_short"), imagesOnly ? t("img_short") : null].filter(Boolean).join(" · ");
  const settings = h("details", { class: "settings", open: openAcc.settings || null, ontoggle: e => { openAcc.settings = e.currentTarget.open; } },
    h("summary", null, h("span", { class: "set-ic", "aria-hidden": "true", text: "⚙" }), h("span", { class: "set-sum", text: summary })),
    h("div", { class: "set-body" },
      h("div", { class: "field" }, h("label", { class: "flabel", for: "topic", text: t("topic") }),
        h("select", { id: "topic", onchange: e => { topicFilter = e.target.value; renderHome(); } },
          h("option", { value: "", text: t("all_topics") }), topics().map(x => h("option", { value: x, selected: x === topicFilter, text: x + " (" + count("topic", x) + ")" })))),
      h("div", { class: "field" }, h("label", { class: "flabel", for: "source", text: t("exam") }),
        h("select", { id: "source", onchange: e => { sourceFilter = e.target.value; renderHome(); } },
          h("option", { value: "", text: t("all_exams") }), sources().map(x => h("option", { value: x, selected: x === sourceFilter, text: x + " (" + count("source", x) + ")" })))),
      h("div", { class: "field" }, h("span", { class: "flabel", text: t("length") }),
        h("div", { class: "seg", role: "group", "aria-label": t("length") },
          SIZE_PRESETS.map(n => h("button", { type: "button", class: n === examSize ? "on" : null, "aria-pressed": n === examSize ? "true" : "false", onclick: () => { setExamSize(n); renderHome(); } }, String(n))),
          h("input", { type: "number", id: "size-custom", min: "1", max: "500", inputmode: "numeric", class: SIZE_PRESETS.includes(examSize) ? null : "on", value: SIZE_PRESETS.includes(examSize) ? "" : examSize, placeholder: t("other"), "aria-label": t("other"),
            onchange: e => { const v = parseInt(e.target.value, 10); if (v > 0) { setExamSize(v); renderHome(); } } }))),
      h("label", { class: "check" }, h("input", { type: "checkbox", id: "extraon", checked: extraOn, onchange: e => { setExtra(e.target.checked); if (!extraOn && /eigen vragen/i.test(sourceFilter)) sourceFilter = ""; renderHome(); } }), t("extra_on", { n: ALLQ.filter(isExtra).length })),
      h("label", { class: "check" }, h("input", { type: "checkbox", id: "imgonly", checked: imagesOnly, onchange: e => { imagesOnly = e.target.checked; renderHome(); } }), t("images_only")),
      full ? h("button", { class: "btn wide pill", id: "full", onclick: () => startFull(sourceFilter) }, "🏆 " + t("full_exam", { n: p.length })) : null,
      full ? h("p", { class: "hint", style: "margin:0", text: t("full_hint") + (progress.vgtBest && progress.vgtBest[sourceFilter] != null ? " · " + t("atlas_best", { p: progress.vgtBest[sourceFilter] }) : "") }) : null));
  const startCard = h("section", { class: "card start" }, h("div", { class: "card-body" },
    h("button", { class: "btn teal wide pill bigstart", id: "start", disabled: !examCount, onclick: () => startSession("exam") }, t("start_n", { n: examCount })),
    h("p", { class: "hint", style: "margin:0;text-align:center", text: u ? t("in_sel_s", { u }) : t("in_sel_done_s") }),
    settings));

  const m = missions(); const mDone = m.list.filter(x => x.p >= x.n).length; const chestReady = mDone === m.list.length && !m.chest;
  const dxc = DIAGNOSES.length ? dxCurrent() : null;
  const dxNav = (delta) => { dxOffset += delta; openAcc.dx = true; renderHome(); };
  const trow = (ic, label, right) => [h("span", { class: "tr-ic", "aria-hidden": "true", text: ic }), typeof label === "string" ? h("span", { class: "tr-l", text: label }) : label, h("span", { class: "tr-r" }, right)];
  const todayCard = h("section", { class: "card today" }, h("div", { class: "today-h", text: t("today_t") }),
    h("div", { class: "trow" }, trow("🧩", t("daily_title"), today ? h("span", { class: "tag green", text: "✓ " + today.c + "/" + today.t }) : h("button", { class: "btn teal pill sm", id: "daily", onclick: () => startSession("daily") }, t("go")))),
    h("details", { class: "trow-d", open: openAcc.missions || null, ontoggle: e => { openAcc.missions = e.currentTarget.open; } },
      h("summary", { class: "trow" }, trow("⭐", t("m_title"), h("span", { class: "num" + (chestReady ? " chest-dot" : ""), text: (chestReady ? "🎁 " : "") + mDone + "/" + m.list.length }))),
      missionsBody()),
    dxc ? h("details", { class: "trow-d", id: "dx-card", open: openAcc.dx || null, ontoggle: e => { openAcc.dx = e.currentTarget.open; } },
      h("summary", { class: "trow" }, trow("🩻", h("span", { class: "tr-l" }, h("small", { class: "tr-s", text: t("dx_title") }), dxc.d.naam), null)),
      dxBody(dxc.d, dxc.qids, dxNav)) : null,
    due.length ? h("div", { class: "trow" }, trow("🔁", t("review_short", { n: due.length }), h("button", { class: "linkbtn", id: "repeat", onclick: () => startSession("wrong") }, t("review_only")))) : null);

  mount(navBar(),
    h("header", { class: "hero gutter" }, h("div", { class: "hero-in" },
      h("h1", null, "Oefen", h("span", { text: "tentamen" })),
      heroStats())),
    h("main", { class: "main gutter narrow" }, startCard, todayCard),
    footer());
  const banner = installBanner(); if (banner) document.querySelector("main.main").prepend(banner);
}
function goalBlock() {
  const goal = progress.goal || 20; const daysLeft = progress.vgt ? dayNum(progress.vgt) - TODAY() : null;
  return h("div", { class: "card-body", style: "padding:0" },
    h("div", { class: "row", style: "gap:1rem" },
      h("div", { class: "field", style: "flex:1;min-width:9rem" }, h("span", { class: "flabel", text: t("goal") }),
        h("div", { class: "seg" }, [10, 20, 40].map(n => h("button", { type: "button", class: n === goal ? "on" : null, onclick: () => { progress.goal = n; saveProgress(); rerender(); } }, String(n))))),
      h("div", { class: "field", style: "flex:1;min-width:11rem" }, h("label", { class: "flabel", for: "vgt", text: t("next_vgt") + (daysLeft != null && daysLeft >= 0 ? " · " + t("days_left", { n: daysLeft }) : "") }),
        h("input", { type: "date", id: "vgt", value: progress.vgt || "", onchange: e => { progress.vgt = e.target.value; saveProgress(); rerender(); } }))),
    daysLeft != null && daysLeft > 0 ? h("p", { class: "hint", style: "margin:0", text: t("goal_hint", { n: goal, k: (Math.round(10 * goal * daysLeft / QUESTIONS.length) / 10).toString().replace(".", lang === "nl" ? "," : ".") }) }) : null);
}
function installBlock() {
  const steps = arr => h("ol", { class: "isteps" }, arr.map(x => h("li", { text: x })));
  return h("div", { class: "install" },
    h("div", { class: "igrid" },
      h("div", null, h("h4", { text: t("install_ios") }), steps(T.install_ios_steps[lang === "nl" ? 0 : 1])),
      h("div", null, h("h4", { text: t("install_android") }), steps(T.install_android_steps[lang === "nl" ? 0 : 1]))),
    h("p", { class: "hint", style: "margin:0", text: t("install_note") }));
}
function isStandalone() { try { return window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true; } catch (e) { return false; } }
function installBanner() {
  if (!window.__iaSite || isStandalone() || !/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) return null;
  try { if (localStorage.getItem("ia-install-tip") === "x") return null; } catch (e) {}
  const el = h("div", { class: "ibanner", role: "note" },
    h("span", { text: "📱 " + t("install_banner") }),
    h("button", { class: "linkbtn", type: "button", onclick: () => { openAcc.install = true; goProgress(); const a = document.getElementById("acc-install"); if (a) a.scrollIntoView({ behavior: "smooth", block: "start" }); } }, t("install_how")),
    h("button", { class: "chip-btn", type: "button", "aria-label": t("dismiss"), onclick: () => { try { localStorage.setItem("ia-install-tip", "x"); } catch (e) {} el.remove(); } }, "✕"));
  return el;
}
function masteryBlock() {
  const tm = topicMastery();
  return h("div", null, h("p", { class: "hint", style: "margin:0 0 0.5rem", text: t("mastery_hint") }),
    Object.keys(tm).sort((a, b) => a.localeCompare(b, "nl")).map(k => {
      const r = tm[k]; const pct = Math.round(100 * r.ok / r.total); const tier = pct >= 80 ? "t4" : pct >= 50 ? "t3" : pct >= 20 ? "t2" : "t1";
      return h("div", { class: "mast" }, h("span", { style: "overflow-wrap:anywhere", text: k }),
        h("div", { class: "mbar" }, h("span", { class: tier, style: "width:" + (r.ok ? Math.max(pct, 2) : 0) + "%" })),
        h("span", { class: "num muted", style: "text-align:right", text: pct + "%" }));
    }));
}
function badgesBlock() {
  const order = BADGES.slice().sort((a, b) => RARITY[a[5]][2] - RARITY[b[5]][2]);
  return h("div", { class: "badges" }, order.map(b => {
    const got = progress.badges[b[0]]; const animal = ANIMALS.find(a => a[3] === b[0]);
    return h("div", { class: "badge rar-" + b[5] + (got ? "" : " locked"), title: got || "" }, h("span", { class: "b-ic", text: b[1] }),
      h("div", { style: "min-width:0" }, h("div", { class: "b-t", text: t(b[2]) }), h("div", { class: "b-d", text: t(b[3]) }),
        h("div", { class: "b-r" }, h("span", { class: "rtag rar-" + b[5], text: t(RARITY[b[5]]) }), animal ? h("span", { class: "b-an", text: "+ " + (lang === "en" ? animal[2] : animal[1]) }) : null)));
  }));
}
function zooBlock() {
  const lv = rankInfo(); const cur = currentAnimal();
  return h("div", null, h("p", { class: "hint", style: "margin:0 0 0.7rem", text: t("zoo_hint") }),
    h("div", { class: "zoo" }, ANIMALS.map(a => {
      const own = !a[3] || progress.badges[a[3]]; const on = own && a[0] === cur[0];
      return h("div", { class: "zcell rar-" + a[4] + (own ? "" : " locked") + (on ? " on" : "") },
        avatarEl(84, a[0], own ? lv.i : 0, !own),
        h("div", { class: "b-t", text: own ? (lang === "en" ? a[2] : a[1]) : "???" }),
        h("span", { class: "rtag rar-" + a[4], text: t(RARITY[a[4]]) }),
        h("div", { class: "b-d", text: a[3] ? (own ? "✓ " + badgeName(a[3]) : t("zoo_how", { b: badgeName(a[3]) })) : t("zoo_start") }),
        own ? (on ? h("span", { class: "tag teal", text: t("zoo_on") }) : h("button", { class: "btn pill zpick", onclick: () => { progress.avatar = a[0]; saveProgress(); renderProgress(); } }, t("zoo_pick"))) : null);
    })));
}
function ranksBlock() {
  const lv = rankInfo();
  return h("div", null, h("p", { class: "hint", style: "margin:0 0 0.6rem", text: t("ranks_hint") }),
    h("div", { class: "list" }, RANKS.map((r, i) => h("div", { class: "li" + (i === lv.i ? " cur" : "") },
      avatarEl(34, currentAnimal()[0], i, i > lv.i),
      h("span", { class: "grow", style: "font-weight:700", text: lang === "en" ? r[2] : r[1] }),
      h("span", { class: "muted", style: "font-size:0.8rem;text-align:right", text: [t("ranks_req", { p: r[3] }), r[4] ? t("ranks_topic", { p: r[4] }) : null, r[5] ? t("ranks_dur", { n: r[5] }) : null].filter(Boolean).join(" · ") }),
      h("span", { style: "width:1.2rem;text-align:center", text: i <= lv.i ? "✓" : "" })))));
}
function atlasBlock() {
  const k = knowledge(); const cls = q => { const st = progress.qs[q.id]; if (!progress.seen[q.id] || !st) return ""; return !st.last ? "w" : isDurable(st) ? "d" : "o"; };
  const srcs = sources();
  return h("div", { class: "atlas" }, h("p", { class: "hint", style: "margin:0", text: t("atlas_hint") }),
    Object.keys(k.tm).sort((a, b) => a.localeCompare(b, "nl")).map(tp => {
      const r = k.tm[tp];
      return h("div", { class: "atopic" }, h("div", { class: "row" }, h("b", { text: tp }), h("span", { class: "spacer" }), h("span", { class: "hint num", text: t("atlas_topic", { s: r.seen, n: r.total, o: r.ok }) })),
        h("div", { class: "atl", role: "img", "aria-label": tp }, QUESTIONS.filter(q => q.topic === tp).map(q => h("i", { class: cls(q) || null }))));
    }),
    h("div", { class: "flabel", style: "margin-top:0.4rem", text: t("atlas_exams") }),
    h("div", { class: "list" }, srcs.map(src => {
      const qs = QUESTIONS.filter(q => q.source === src); const se = qs.filter(q => progress.seen[q.id]).length; const ok = qs.filter(q => progress.qs[q.id] && progress.qs[q.id].last).length;
      const best = progress.vgtBest && progress.vgtBest[src];
      return h("div", { class: "li asrc" }, h("span", { class: "grow", style: "font-weight:700;min-width:8rem", text: src }),
        h("div", { class: "mbar", title: se + "/" + qs.length }, h("span", { class: "t2", style: "width:" + Math.round(100 * se / qs.length) + "%" }), h("span", { class: "t4 over", style: "width:" + Math.round(100 * ok / qs.length) + "%" })),
        h("span", { class: "num muted", style: "font-size:0.8rem;min-width:4.5rem;text-align:right", text: Math.round(100 * se / qs.length) + "% · " + Math.round(100 * ok / qs.length) + "%" }),
        best != null ? h("span", { class: "tag " + (best >= 90 ? "orange" : "blue") + " num", text: (best >= 90 ? "🏆 " : "") + best + "%" }) : null,
        h("button", { class: "chip-btn", title: t("full_exam", { n: qs.length }), "aria-label": t("full_exam", { n: qs.length }), onclick: () => startFull(src) }, "▶"));
    })));
}
function activityBlock() {
  const weeks = 18; const today = TODAY(); const dow = (new Date().getDay() + 6) % 7; const start = today - dow - (weeks - 1) * 7;
  const cells = [];
  for (let n = start; n <= today; n++) {
    const c = progress.days[dayKeyFromNum(n)] || 0; const lvl = c === 0 ? "" : c < 10 ? "l1" : c < 25 ? "l2" : c < 50 ? "l3" : "l4";
    cells.push(h("i", { class: (lvl + (n === today ? " today" : "")).trim() || null, title: dayKeyFromNum(n) + ": " + c }));
  }
  return h("div", null, h("p", { class: "hint", style: "margin:0 0 0.5rem", text: t("activity_hint") }), h("div", { class: "heat", role: "img", "aria-label": t("activity") }, cells));
}
function historyBlock() {
  if (!progress.history.length) return h("p", { class: "hint", style: "margin:0", text: t("no_history") });
  return h("div", { class: "list" }, progress.history.slice(-12).reverse().map(r =>
    h("div", { class: "li" }, h("span", { class: "tag " + (r.kind === "daily" ? "teal" : r.kind === "wrong" ? "red" : "blue"), text: t(T.round_kind[r.kind || "exam"]) }),
      h("span", { class: "grow num", text: r.date }), h("span", { class: "num", text: r.correct + "/" + r.total }),
      h("span", { class: "num muted", style: "width:3rem;text-align:right", text: Math.round(100 * r.correct / r.total) + "%" }),
      r.xp != null ? h("span", { class: "tag teal num", text: "+" + r.xp + " XP" }) : null)));
}

/* ---------- voortgang ---------- */
function renderProgress() {
  view = "progress";
  const s = gameStats(); const st = streakInfo();
  const okTotal = Object.values(progress.qs).reduce((a, x) => a + x.ok, 0);
  const pct = s.answered ? Math.round(100 * okTotal / s.answered) : 0;
  const stat = (lbl, val) => h("div", { class: "rstat" }, h("div", { class: "lbl", text: lbl }), h("div", { class: "bigfig num", text: val }));
  mount(navBar(),
    h("header", { class: "hero gutter" }, h("div", { class: "hero-in" }, h("button", { class: "hero-back", type: "button", onclick: goHome }, t("back_home")), h("h1", null, "Voort", h("span", { text: "gang" })), heroStats())),
    h("main", { class: "main gutter" },
      h("div", { class: "resgrid" },
        stat(t("answered_total"), s.answered), stat(t("accuracy"), pct + "%"), stat(t("best_combo"), s.bestCombo),
        stat(t("streak"), st.cur + " / " + st.best), stat("XP", progress.xp), stat(t("badges_title"), Object.keys(progress.badges).length + "/" + BADGES.length)),
      accordion("zoo", "purple", "🩻 " + t("zoo") + " · " + ownedAnimals().length + "/" + ANIMALS.length, zooBlock),
      accordion("ranks", "blue", t("ranks_title"), ranksBlock),
      accordion("activity", "teal", t("activity"), activityBlock),
      accordion("atlas", "green", t("atlas"), atlasBlock),
      accordion("pmastery", "blue", t("mastery"), masteryBlock),
      accordion("pbadges", "orange", t("badges_title") + " · " + Object.keys(progress.badges).length + "/" + BADGES.length, badgesBlock),
      accordion("history", "purple", t("history"), historyBlock),
      accordion("goal", "purple", "🎯 " + t("goal_title"), goalBlock),
      window.__iaSite ? accordion("install", "purple", "📱 " + t("install"), installBlock) : null,
      accordion("about", "blue", t("about"), () => h("p", { style: "margin:0;font-size:0.88rem;line-height:1.6", text: t("about_text") })),
      h("div", { class: "back-row" }, h("button", { class: "btn", type: "button", onclick: goHome }, t("back_home")))),
    footer());
}

/* ---------- sessie ---------- */
let dxOffset = 0;
function dxOrder() {
  const order = DIAGNOSES.map((_, i) => i), rnd = seeded("dx-volgorde-v1");
  for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  return order;
}
function diagnosisCard() {
  if (!DIAGNOSES.length) return null;
  const order = dxOrder(), n = order.length, day = TODAY() + dxOffset;
  const d = DIAGNOSES[order[((day % n) + n) % n]];
  const qids = (d.qids || []).filter(id => byId[id]);
  const nav = (delta) => { dxOffset += delta; renderHome(); const el = document.getElementById("dx-card"); if (el) el.scrollIntoView({ block: "nearest" }); };
  return h("section", { class: "card dx", id: "dx-card" }, cardHead("🩻", "purple", t("dx_title"), dxOffset ? (dxOffset > 0 ? "+" : "") + dxOffset + " · " + t("dx_sub") : t("dx_sub")), dxBody(d, qids, nav));
}
function dxCurrent() { const order = dxOrder(), n = order.length, day = TODAY() + dxOffset; const d = DIAGNOSES[order[((day % n) + n) % n]]; return { d, qids: (d.qids || []).filter(id => byId[id]) }; }
function dxBody(d, qids, nav) {
  return h("div", { class: "card-body dx" },
      h("div", { class: "row" }, h("h3", { class: "dx-name", text: d.naam }), h("span", { class: "tag", text: d.rubriek }), lang === "en" ? h("span", { class: "hint", text: t("dx_nl_only") }) : null),
      h("p", { class: "dx-kern", text: d.kern }),
      h("div", { class: "dx-sec" }, h("b", { text: t("dx_img") }), d.img ? h("div", { class: "dx-fig" }, figures(d.img, null, d.imgCredit)) : null, h("ul", null, d.beeld.map(x => h("li", { text: x })))),
      h("p", { class: "dx-sec" }, h("b", { text: t("dx_dd") + ": " }), d.dd),
      h("p", { class: "dx-pearl" }, h("b", { text: "💡 " + t("dx_pearl") + ": " }), d.pearl),
      h("div", { class: "row" },
        qids.length ? h("button", { class: "btn purple pill", onclick: () => startSession("exam", qids) }, t("dx_practice", { n: qids.length })) : null,
        h("a", { class: "linkbtn", href: rpUrl(d.rp[0]), target: "_blank", rel: "noopener" }, "Radiopaedia ↗"),
        h("span", { class: "spacer" }),
        h("button", { class: "chip-btn", "aria-label": t("dx_prev"), onclick: () => nav(-1) }, "‹"),
        dxOffset ? h("button", { class: "chip-btn", onclick: () => { dxOffset = 0; renderHome(); } }, t("dx_today")) : null,
        h("button", { class: "chip-btn", "aria-label": t("dx_next"), onclick: () => nav(1) }, "›")));
}
function startSession(mode, ids) {
  let queue;
  if (ids) queue = shuffle(ids);
  else if (mode === "wrong") queue = shuffle(dueIds());
  else if (mode === "daily") queue = weightedSample(QUESTIONS.filter(q => q.type === "mc"), 10, seeded("vgt-" + dayKey())).map(q => q.id);
  else {
    // eerst vragen die je nog nooit hebt gemaakt; daarna aanvullen met eerder gemaakte (minder vaak gezien en laatst fout gaan voor)
    const pl = pool(), now = TODAY();
    const dueQ = shuffle(pl.filter(q => progress.box[q.id] && progress.box[q.id].due <= now)).slice(0, Math.round(examSize / 3));
    const inDue = new Set(dueQ.map(q => q.id));
    const fresh = pl.filter(q => !progress.seen[q.id]), old = pl.filter(q => progress.seen[q.id] && !inDue.has(q.id));
    const a = dueQ.concat(weightedSample(fresh, examSize - dueQ.length));
    const b = a.length < examSize ? weightedSample(old, examSize - a.length, null, q => qWeight(q) * ((progress.qs[q.id] && progress.qs[q.id].last === false) ? 3 : 1) / progress.seen[q.id]) : [];
    queue = shuffle(a.concat(b).map(q => q.id));
  }
  if (!queue.length) return renderHome();
  session = { mode, queue, idx: 0, res: [], reveal: false, combo: 0, bestCombo: 0, xp: 0, rankStart: rankInfo().i, unlocked: [], animals: [], full: null };
  view = "quiz"; window.scrollTo(0, 0); renderQuestion();
}
function startFull(src) { startSession("exam", QUESTIONS.filter(q => q.source === src).map(q => q.id)); if (session) session.full = src; }
function answered() { return session.res.filter(Boolean); }
function record(q, correct, extra) {
  const now = new Date(); const dk = dayKey(now); const tn = TODAY();
  const prev = progress.qs[q.id] || { n: 0, ok: 0, last: false };
  const box = progress.box[q.id];
  const wasWrong = !!box && box.b === 0;
  let gain = 0, goalHit = false, mult = 1, crit = 0;
  if (correct) {
    session.combo++; mult = Math.round(10 + Math.min(session.combo - 1, 10)) / 10;
    const r = Math.random(); crit = r < 0.02 ? 3 : r < 0.1 ? 2 : 0;
    gain = Math.round((10 + (wasWrong ? 5 : 0)) * mult) * (crit || 1);
  } else session.combo = 0;
  session.bestCombo = Math.max(session.bestCombo, session.combo);
  progress.stats.bestCombo = Math.max(progress.stats.bestCombo, session.combo);
  const before = progress.days[dk] || 0; progress.days[dk] = before + 1;
  const goal = progress.goal || 20;
  if (before < goal && before + 1 >= goal && !progress.goalDays[dk]) { progress.goalDays[dk] = 1; gain += 50; goalHit = true; }
  progress.xp += gain; session.xp += gain;
  if (window.__iaAnswer) { try { window.__iaAnswer({ question_id: q.id, correct: !!correct, chosen: extra && extra.chosen != null && q.options ? String(q.options[extra.chosen]).slice(0, 300) : null, mode: session.mode, first: !prev.n }); } catch (e) {} }
  const fresh0 = !progress.seen[q.id];
  progress.qs[q.id] = { n: prev.n + 1, ok: prev.ok + (correct ? 1 : 0), last: correct, mastered: !!prev.mastered && correct, t: Date.now() };
  const firstOk = prev.f || (correct ? Date.now() : 0); if (firstOk) progress.qs[q.id].f = firstOk;
  progress.seen[q.id] = (progress.seen[q.id] || 0) + 1;
  if (correct) {
    delete progress.wrong[q.id];
    if (box) {
      if (wasWrong) progress.stats.fixed++;
      const nb = box.b + 1;
      if (nb >= INTERVALS.length) { delete progress.box[q.id]; progress.qs[q.id].mastered = true; }
      else progress.box[q.id] = { b: nb, due: tn + INTERVALS[nb] };
    } else if (!progress.qs[q.id].mastered) progress.box[q.id] = { b: 2, due: tn + INTERVALS[2] };
    if (hasImages(q)) { progress.stats.imgCorrect++; progress.stats.imgRun = (progress.stats.imgRun || 0) + 1; progress.stats.imgRunBest = Math.max(progress.stats.imgRunBest || 0, progress.stats.imgRun); }
  } else {
    if (hasImages(q)) progress.stats.imgRun = 0;
    progress.wrong[q.id] = (progress.wrong[q.id] || 0) + 1;
    progress.box[q.id] = { b: 0, due: tn + INTERVALS[0] };
  }
  const hr = now.getHours(); if (hr < 5) progress.stats.night = true; else if (hr < 7) progress.stats.early = true;
  const mdone = tickMissions({ answered: true, correct, img: hasImages(q), fix: correct && wasWrong, topic: q.topic, combo: session.combo, fresh: fresh0 });
  session.xp += 40 * mdone.length;
  session.res[session.idx] = Object.assign({ id: q.id, correct, gain, combo: session.combo, mult, crit }, extra);
  session.reveal = false;
  const fresh = checkBadges(); session.unlocked.push(...fresh);
  const animals = unlockAnimals(fresh); session.animals.push(...animals);
  const ri = rankInfo(); if (ri.i > (progress.rank || 0)) progress.rank = ri.i;
  saveProgress();
  const msgs = []; if (goalHit) msgs.push(t("goal_hit"));
  for (const x of mdone) msgs.push("✅ " + t("m_done", { m: missionText(x) }));
  for (const b of fresh) msgs.push(b[1] + " " + t("new_badge") + ": " + t(b[2]));
  for (const x of animals) msgs.push("🩻 " + t("new_animal", { a: lang === "en" ? x.a[2] : x.a[1] }));
  msgs.forEach(m => toast(m));
}
function go(delta) {
  const to = session.idx + delta;
  if (to < 0) return;
  if (delta > 0 && !session.res[session.idx]) return;
  if (to >= session.queue.length) return finish();
  session.idx = to; session.reveal = false; renderQuestion(); window.scrollTo(0, 0);
}
function finish() {
  const done = answered(); const correct = done.filter(r => r.correct).length;
  if (done.length) {
    if (done.length >= 10 && correct === done.length) progress.stats.perfect++;
    if (session.mode === "daily" && !progress.daily[dayKey()]) progress.daily[dayKey()] = { c: correct, t: done.length };
    if (session.mode === "daily") { const md = tickMissions({ daily: true }); session.xp += 40 * md.length; }
    if (session.full && done.length === session.queue.length) {
      const pc = Math.round(100 * correct / done.length); progress.vgtBest = progress.vgtBest || {};
      progress.vgtBest[session.full] = Math.max(progress.vgtBest[session.full] || 0, pc);
      if (correct / done.length >= 0.9) progress.stats.vgt90 = (progress.stats.vgt90 || 0) + 1;
    }
    const d = new Date();
    progress.history.push({ date: d.getDate() + "-" + (d.getMonth() + 1), correct, total: done.length, kind: session.mode, xp: session.xp });
    progress.history = progress.history.slice(-40);
    const fb = checkBadges(); session.unlocked.push(...fb); session.animals.push(...unlockAnimals(fb));
    const ri = rankInfo(); if (ri.i > (progress.rank || 0)) progress.rank = ri.i;
    saveProgress();
  }
  view = "result"; renderResult();
}
function renderQuestion() {
  view = "quiz";
  const q = byId[session.queue[session.idx]];
  const n = session.queue.length; const res = session.res[session.idx] || null;
  const done = answered(); const ok = done.filter(r => r.correct).length;
  const head = h("div", { class: "qhead" },
    h("div", { class: "row" },
      h("button", { class: "btn", id: "prev", disabled: session.idx === 0, onclick: () => go(-1) }, t("prev")),
      h("span", { class: "num", style: "font-weight:700;font-size:0.86rem", text: t("q_of", { i: session.idx + 1, n }) }),
      h("span", { class: "spacer" }),
      session.combo >= 2 ? h("span", { class: "combo num" + (session.combo >= 11 ? " max" : ""), text: "🔥 " + t("combo", { n: session.combo }) + " · ×" + (Math.round(10 + Math.min(session.combo - 1, 10)) / 10).toString().replace(".", lang === "nl" ? "," : ".") }) : null,
      h("span", { class: "tag teal num", text: "+" + session.xp + " XP" }),
      h("button", { class: "btn", id: "stop", onclick: finish }, t("stop"))),
    h("div", { class: "qtrack" }, h("span", { style: "width:" + (100 * done.length / n) + "%" })));
  const col = color(q);
  const bx = progress.box[q.id]; const wasWrong = !!progress.wrong[q.id] && session.mode !== "wrong" && !res;
  const isReview = !res && !wasWrong && bx && bx.b > 0 && bx.due <= TODAY() && progress.seen[q.id];
  const inner = h("div", { class: "qinner" },
    h("div", { class: "qmeta" },
      h("span", { class: "tag " + col, text: q.topic }), h("span", { class: "tag", style: "background:var(--card);color:var(--muted)", text: q.source }),
      session.mode === "daily" ? h("span", { class: "tag teal", text: t("daily_title") }) : null,
      wasWrong ? h("span", { class: "tag red", text: t("earlier_wrong") }) : null,
      isReview ? h("span", { class: "tag teal", text: "🔁 " + t("review_tag") }) : null,
      h("span", { class: "spacer" }), h("span", { class: "hint num", text: t("correct_n", { n: ok }) })),
    h("p", { class: "stem", text: q.question }),
    figures(q.images, q.imageLabels, q.imageCredit));
  if (q.type === "open") renderOpen(q, inner, res); else renderMC(q, inner, res);
  mount(navBar(), h("main", { class: "main gutter" }, head, h("article", { class: "qcard" }, h("div", { class: "qbar", style: "background:var(--" + col + ")" }), inner)));
  const focus = inner.querySelector("[data-autofocus]");
  if (focus) focus.focus({ preventScroll: true });
}
// antwoordvolgorde per sessie husselen; niet bij juist/onjuist, getallen, Romeinse cijfers of verwijzingen naar andere opties
const OPT_NUM = /\d/, OPT_ROM = /(^|[^A-Za-z])(I{1,3}|IV|VI{0,3}|IX|XI{0,3})($|[^A-Za-z])/, OPT_REF = /bovenstaande|\bbeide\b|geen van|\b[A-F] en [A-F]\b/i;
const OPT_TF = /^(juist|onjuist|ja|nee|waar|onwaar)$/i;
function optOrder(q) {
  const id = (q.options || []).map((_, i) => i), n = id.length;
  if (!session) return id;
  const c = session.ord || (session.ord = {});
  if (c[q.id]) return c[q.id];
  const o = q.options;
  if (n > 2 && !o.some(x => OPT_TF.test(x.trim()) || OPT_NUM.test(x) || OPT_ROM.test(x) || OPT_REF.test(x)))
    for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [id[i], id[j]] = [id[j], id[i]]; }
  return (c[q.id] = id);
}
function optL(q, i) { return LETTERS[optOrder(q).indexOf(i)]; }
function renderMC(q, el, res) {
  el.append(h("ol", { class: "opts", "aria-label": "Antwoordopties" },
    optOrder(q).map((i, pos) => {
      const text = q.options[i];
      let cls = "opt";
      if (res) cls += i === q.answer ? " right" : (i === res.chosen ? " wrong" : " dim");
      return h("li", null, h("button", { class: cls, disabled: !!res, onclick: () => { record(q, i === q.answer, { chosen: i }); renderQuestion(); } },
        h("span", { class: "sn", text: LETTERS[pos] }), h("span", { class: "txt", text })));
    })));
  if (!res) { el.append(h("p", { class: "hint", style: "margin:0", text: t("keys", { L: LETTERS[q.options.length - 1] }) })); return; }
  el.append(explain(q, res));
}
function renderOpen(q, el, res) {
  if (!res && !session.reveal) { el.append(h("div", { class: "row" }, h("button", { class: "btn blue pill", "data-autofocus": true, onclick: () => { session.reveal = true; renderQuestion(); } }, t("show_answer")))); return; }
  el.append(h("div", { class: "model", text: q.modelAnswer }));
  if (!res) { el.append(h("div", { class: "row" }, h("button", { class: "btn teal", "data-autofocus": true, onclick: () => { record(q, true, {}); renderQuestion(); } }, t("knew")), h("button", { class: "btn red", onclick: () => { record(q, false, {}); renderQuestion(); } }, t("didnt")))); return; }
  el.append(explain(q, res));
}
function linkLine(q) { return h("p", { class: "links" }, t("read_more") + " ", linksFor(q).map((l, i) => [i ? " · " : null, h("a", { href: l.url, target: "_blank", rel: "noopener", text: l.label })])); }
function whyBlock(q, chosen) {
  if (!q.why || !q.options) return null;
  const idx = q.options.map((_, i) => i).filter(i => i !== q.answer && q.why[i]);
  if (!idx.length) return null;
  const ord = optOrder(q);
  idx.sort((a, b) => (b === chosen) - (a === chosen) || ord.indexOf(a) - ord.indexOf(b));
  return h("div", { class: "why" }, h("div", { class: "why-t", text: t("why_t") }),
    idx.map(i => h("p", { class: "why-i" + (i === chosen ? " mine" : "") }, h("b", { text: optL(q, i) + ". " + q.options[i] }), i === chosen ? h("span", { class: "tag red", text: t("your_pick") }) : null, h("span", { text: " " + q.why[i] }))));
}
function explain(q, res) {
  const last = session.idx + 1 >= session.queue.length;
  const verdict = res.correct ? t("good") : (q.options ? t("wrong_is", { L: optL(q, q.answer) }) : t("didnt"));
  return h("section", { class: "note " + (res.correct ? "ok" : "bad") },
    h("div", { class: "verdict" }, verdict, res.gain ? h("span", { class: "xpgain num", text: "+" + res.gain + " XP" }) : null, res.correct && res.combo >= 3 ? h("span", { class: "combo", text: "🔥 " + res.combo }) : null,
      res.crit ? h("span", { class: "crit", text: "💥 " + t("crit", { m: res.crit }) }) : null),
    q.explanation ? h("p", { class: "etext", text: q.explanation }) : null,
    whyBlock(q, res.chosen),
    q.flag ? h("p", { class: "flagnote", text: t(FLAG_LABEL[q.flag]) + ". " + t(FLAG_NOTE[q.flag]) }) : null,
    figures(q.explImages, null, q.explCredit),
    linkLine(q),
    h("div", { class: "row" }, h("button", { class: "btn blue", "data-autofocus": true, onclick: () => go(1) }, last ? t("to_result") : t("next")), h("span", { class: "hint", text: t("enter_next") }),
      window.__iaFeedback && !(session.fb && session.fb[q.id]) ? [h("span", { class: "spacer" }), h("button", { class: "linkbtn fblink", type: "button", onclick: () => { (session.fb = session.fb || {})[q.id] = "open"; if (fbDraft.id !== q.id) fbDraft = { id: q.id, cat: "key", text: "", err: "" }; renderQuestion(); const ta = document.getElementById("fb-text"); if (ta) ta.focus(); } }, "⚑ " + t("fb_open"))] : null),
    feedbackBox(q));
}
const FB_CATS = [["key", "Het juiste antwoord klopt niet", "The answer key is wrong"], ["unclear", "Vraag of antwoordopties onduidelijk", "Question or options unclear"], ["image", "Beeld klopt niet of ontbreekt", "Image wrong or missing"], ["explanation", "Uitleg kan beter", "Explanation could be better"], ["other", "Anders", "Other"]];
let fbDraft = { id: null, cat: "key", text: "", err: "" };
function feedbackBox(q) {
  const st = session.fb && session.fb[q.id];
  if (!window.__iaFeedback || !st) return null;
  if (st === "sent") return h("p", { class: "fbdone", role: "status", text: "✓ " + t("fb_thanks") });
  const sending = st === "sending";
  const send = async () => {
    if (!fbDraft.text.trim()) { const ta = document.getElementById("fb-text"); if (ta) ta.focus(); return; }
    session.fb[q.id] = "sending"; fbDraft.err = ""; renderQuestion();
    try { await window.__iaFeedback({ question_id: q.id, category: fbDraft.cat, message: fbDraft.text.trim() }); session.fb[q.id] = "sent"; fbDraft = { id: null, cat: "key", text: "", err: "" }; }
    catch (e) { session.fb[q.id] = "open"; fbDraft.err = t("fb_err") + (e.message || e); }
    if (view === "quiz" && byId[session.queue[session.idx]] === q) renderQuestion();
  };
  return h("div", { class: "fbbox" },
    h("label", { class: "flabel", for: "fb-cat", text: t("fb_what") }),
    h("select", { id: "fb-cat", disabled: sending, onchange: e => { fbDraft.cat = e.target.value; } }, FB_CATS.map(c => h("option", { value: c[0], selected: fbDraft.cat === c[0] }, lang === "nl" ? c[1] : c[2]))),
    h("textarea", { id: "fb-text", rows: 3, maxlength: 2000, disabled: sending, placeholder: t("fb_ph"), oninput: e => { fbDraft.text = e.target.value; } }, fbDraft.text),
    fbDraft.err ? h("p", { class: "hint", style: "color:var(--red);margin:0", text: fbDraft.err }) : null,
    h("div", { class: "row" },
      h("button", { class: "btn teal", type: "button", disabled: sending, onclick: send }, t("fb_send")),
      h("button", { class: "btn", type: "button", disabled: sending, onclick: () => { delete session.fb[q.id]; renderQuestion(); } }, t("fb_cancel"))));
}

/* ---------- resultaat ---------- */
function renderResult() {
  view = "result";
  const results = answered(); const total = results.length; const correct = results.filter(r => r.correct).length; const wrong = results.filter(r => !r.correct);
  const pct = total ? Math.round(100 * correct / total) : 0;
  const lv = rankInfo(); const leveled = lv.i > session.rankStart;
  const words = (session.mode === "wrong" ? t("review_done") : session.mode === "daily" ? t("daily_done_t") : t("round_done")).split(" ");
  const stat = (lbl, val, style) => h("div", { class: "rstat" }, h("div", { class: "lbl", text: lbl }), h("div", { class: "bigfig num", style, text: val }));
  mount(navBar(),
    h("header", { class: "hero gutter" }, h("div", { class: "hero-in" },
      h("h1", null, words[0] + " ", h("span", { text: words.slice(1).join(" ") })),
      h("p", { class: "sub num", text: correct + " / " + total + " · " + pct + "%" }),
      heroStats())),
    h("main", { class: "main gutter" },
      h("div", { class: "resgrid" }, stat(t("score"), pct + "%"), stat(t("xp_earned"), "+" + session.xp, "color:var(--teal)"), stat(t("best_combo"), session.bestCombo)),
      leveled ? h("div", { class: "unlock big" }, avatarEl(96, null, lv.i), h("div", null, h("div", { class: "card-title", text: t("rankup", { r: lv.name }) }), h("div", { class: "hint", text: t("rankup_sub", { p: Math.floor(lv.k.pct) }) }))) : null,
      session.animals.map(x => h("div", { class: "unlock big rar-" + x.a[4] }, avatarEl(96, x.a[0], lv.i), h("div", null,
        h("div", { class: "card-title", text: t("new_animal", { a: lang === "en" ? x.a[2] : x.a[1] }) }), h("span", { class: "rtag rar-" + x.a[4], text: t(RARITY[x.a[4]]) }),
        h("div", { class: "hint", text: t(x.auto ? "new_animal_sub" : "new_animal_sub2", { b: badgeName(x.a[3]) }) })))),
      session.unlocked.map(b => h("div", { class: "unlock" }, h("span", { class: "b-ic", text: b[1] }), h("div", null, h("div", { class: "card-title", text: t("new_badge") + ": " + t(b[2]) }), h("div", { class: "hint", text: t(b[3]) })))),
      h("div", { class: "row" },
        wrong.length ? h("button", { class: "btn red pill", onclick: () => startSession("exam", wrong.map(r => r.id)) }, t("repeat_wrong", { n: wrong.length })) : null,
        h("button", { class: "btn teal pill", onclick: () => startSession("exam") }, t("new_round", { n: examSize })),
        h("button", { class: "btn pill", onclick: goHome }, t("home"))),
      wrong.length ? h("section", { style: "display:flex;flex-direction:column;gap:0.5rem" },
        h("div", { class: "flabel", text: t("wrong_list") }),
        wrong.map(r => {
          const q = byId[r.id];
          return h("details", { class: "rev" }, h("summary", { text: short(q.question, 150) }),
            h("div", { class: "inner" },
              q.type === "open" ? h("p", { class: "model", text: q.modelAnswer })
                : h("p", { style: "margin:0" }, h("strong", { text: optL(q, q.answer) + ". " + q.options[q.answer] }), r.chosen != null ? h("span", { class: "muted", text: "  (" + t("yours") + ": " + optL(q, r.chosen) + ")" }) : null),
              q.explanation ? h("p", { class: "etext", text: q.explanation }) : null,
              whyBlock(q, r.chosen),
              linkLine(q)));
        })) : h("p", { class: "muted", style: "margin:0", text: total ? t("all_good") : t("none_answered") })),
    footer());
  if (leveled || session.animals.length || (total >= 10 && correct === total)) confetti();
  window.scrollTo(0, 0);
}

/* ---------- toetsenbord ---------- */
document.addEventListener("keydown", e => {
  if (lightboxEl) { if (e.key === "Escape" || e.key === "Enter") { e.preventDefault(); closeLightbox(); } return; }
  if (!session || view !== "quiz" || e.metaKey || e.ctrlKey || e.altKey) return;
  const tag = e.target && e.target.tagName;
  if (tag === "TEXTAREA" || tag === "SELECT" || tag === "INPUT") return;
  const q = byId[session.queue[session.idx]]; if (!q) return;
  const res = session.res[session.idx];
  if (e.key === "ArrowLeft") { e.preventDefault(); return go(-1); }
  if (res && (e.key === "ArrowRight" || (e.key === "Enter" && tag !== "BUTTON" && tag !== "A"))) { e.preventDefault(); return go(1); }
  if (res) return;
  if (q.type === "open") {
    if (!session.reveal && (e.key === " " || e.key === "Enter") && tag !== "BUTTON") { e.preventDefault(); session.reveal = true; renderQuestion(); }
    else if (session.reveal && /^[jJnNyY]$/.test(e.key)) { e.preventDefault(); record(q, /[jy]/i.test(e.key), {}); renderQuestion(); }
    return;
  }
  const k = e.key.toUpperCase();
  let i = k.length === 1 ? LETTERS.indexOf(k) : -1;
  if (i < 0 && /^[1-9]$/.test(e.key)) i = Number(e.key) - 1;
  if (i >= 0 && i < q.options.length) { e.preventDefault(); i = optOrder(q)[i]; record(q, i === q.answer, { chosen: i }); renderQuestion(); }
});
document.documentElement.lang = lang;
try { const r0 = rankInfo().i; if (r0 > (progress.rank || 0)) progress.rank = r0; } catch (e) {}
renderHome();
