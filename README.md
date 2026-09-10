# Diwas Khatri — Portfolio

> A human-first, single-file portfolio for **Diwas Khatri**, a high-school builder from Nepal exploring bots, automation, web apps, browser extensions, APIs, AI/ML, and developer tooling.
> A simple Proflio Code Of My Webiste

[![Live website](https://img.shields.io/badge/Live%20website-diwas.gamer.free-496833?style=for-the-badge&logo=googlechrome&logoColor=white)](https://diwas.gamer.free)
[![GitHub](https://img.shields.io/badge/GitHub-%40DiwasKhatri07-181717?style=for-the-badge&logo=github)](https://github.com/DiwasKhatri07)
[![License](https://img.shields.io/badge/License-MIT-c8ed64?style=for-the-badge&labelColor=1d241b)](LICENSE)

## About the project

This repository contains the source for my personal portfolio website. It is intentionally lightweight and direct: the main experience is a standalone `index.html` with embedded CSS and JavaScript so it can be opened locally, hosted on GitHub Pages, or deployed to a simple static host without a backend.

The design tells the real story behind my work. I started exploring technology at 13, while studying in class 8, after discovering Telegram bots. I am still learning through free YouTube courses, Udemy, documentation, public repositories, and repeated hands-on experiments. Python is where I feel most comfortable, but I continue to explore web apps, browser extensions, APIs, Android, and AI/ML.

## Highlights

- Editorial, responsive portfolio interface with an accessible mobile layout.
- Real project showcase linked to public GitHub repositories.
- Project repository previews, project categories, and live-demo links where a verified demo exists.
- Personal journey section focused on learning and building rather than invented employment history.
- Full social and contact directory, including Instagram, GitHub, LinkedIn, YouTube, X, Telegram, GitLab, Gitea, Fiverr, Ko-fi, and Buy Me a Coffee.
- Downloadable one-page CV at [`diwas-khatri-resume.pdf`](diwas-khatri-resume.pdf).
- User-controlled YouTube soundtrack player with autoplay disabled. Playback begins only after the visitor chooses to play a track.
- Animated SVG showcase assets in [`assets/`](assets/).
- No backend, database, tracking logic, or secret keys required.

## Repository structure

```text
.
├── index.html                       # Main standalone website
├── diwas-khatri-resume.pdf          # One-page CV download
├── assets/
│   ├── diwas-orbit.svg              # Animated identity/orbit mark
│   └── portfolio-flow.svg            # Animated portfolio showcase graphic
├── client/                           # Original WebDev project source
│   ├── index.html
│   └── src/                          # React source retained for reference
├── resume-source/
│   └── main.typ                     # Editable Typst CV source
├── .github/workflows/pages.yml      # Optional GitHub Pages deployment
├── CNAME                             # Custom-domain placeholder
├── LICENSE                           # MIT license
└── README.md
```

## Run locally

No build step is required for the standalone experience:

```bash
git clone https://github.com/DiwasKhatri07/Portfolio.git
cd Portfolio
python3 -m http.server 8080
```

Open `http://localhost:8080` in a browser. Opening `index.html` directly also works, but a local HTTP server gives the most accurate browser behavior for embedded media and relative assets.

## Deploy to GitHub Pages

The repository includes an optional GitHub Actions workflow at `.github/workflows/pages.yml`. Enable **Settings → Pages → Source: GitHub Actions** once in the repository settings. The workflow publishes the repository root whenever changes are pushed to `main`.

The intended live domain is:

- https://diwas.gamer.free

The `CNAME` file is included as a domain configuration placeholder. A custom domain only works after DNS records and the hosting provider are configured for the repository.

## Selected projects

| Project | Description | Links |
|---|---|---|
| NepBot | WhatsApp linked-device bot dashboard with pairing flow and controls. | [Repository](https://github.com/DiwasKhatri07/nep-bot) |
| NepTLS | Dependency-light Python HTTP client and TLS research toolkit. | [Repository](https://github.com/DiwasKhatri07/NepTLS) · [PyPI](https://pypi.org/project/neptls/) |
| NepaliCode | Nepali-inspired programming-language direction and Android IDE concept. | [Repository](https://github.com/DiwasKhatri07/NepaliCode) |
| Automate YT | Authorized media workflow automation and YouTube upload tooling. | [Repository](https://github.com/DiwasKhatri07/Automate-YT-Channel) · [YouTube](https://www.youtube.com/@DiwasKhatri-v4e) |
| Nepali IDE | AI-native Android coding workspace direction. | [Repository](https://github.com/DiwasKhatri07/Nepali-IDE) |
| World Explorer | React and Three.js interactive portfolio experiment. | [Repository](https://github.com/DiwasKhatri07/diwas-world-explorer) · [Live demo](https://diwasexplor-8hxow3bb.manus.space/) |
| NepToons | Flask streaming-library experiment with HLS and profiles. | [Repository](https://github.com/DiwasKhatri07/nep-toons) |
| KnightSense | Manifest V3 Chrome extension for local Stockfish analysis. | [Repository](https://github.com/DiwasKhatri07/KnightSense-Chess-Engine) |
| nepal-phone | Dependency-free JavaScript utility for Nepali mobile numbers. | [Repository](https://github.com/DiwasKhatri07/nepal-phone) · [NPM](https://www.npmjs.com/package/@diwaskhatri/nepal-phone) |
| NEPSE API | Python API experiment for real-time Nepal Stock Exchange data. | [Repository](https://github.com/DiwasKhatri07/NEPSE-API-) |
| MonkeyType Extension | Manifest V3 typing-practice browser extension. | [Repository](https://github.com/DiwasKhatri07/monkeytype-extension) |
| USB File Preview | Local-first file preview and Python IDE direction. | [Repository](https://github.com/DiwasKhatri07/usb-file-preview) · [Live demo](https://usbpreview-oqx3nys8.manus.space) |

## Contact and social links

- Email: [diwaskhatri@proton.me](mailto:diwaskhatri@proton.me)
- GitHub: [@DiwasKhatri07](https://github.com/DiwasKhatri07)
- Instagram: [@diwas_khatrii](https://www.instagram.com/diwas_khatrii/)
- LinkedIn: [linkedin.com/in/diwaskhatri](https://www.linkedin.com/in/diwaskhatri/)
- YouTube: [@gatewaymaker](https://youtube.com/@gatewaymaker)
- X: [@a1diwas](https://x.com/a1diwas)
- Telegram: [@diwazz](https://t.me/diwazz) · [@diwasxd](https://t.me/diwasxd)
- GitLab: [@diwaskhatri](https://gitlab.com/diwaskhatri)
- Gitea: [@diwash](https://gitea.com/diwash)
- Fiverr: [Hire me](https://www.fiverr.com/sellers/diwaskhatri07/)
- Ko-fi: [Support my work](https://ko-fi.com/diwaskhatri)
- Buy Me a Coffee: [Support my work](https://www.buymeacoffee.com/diwaskhatri)

## Editing the CV

The attached PDF is generated from the editable Typst source in `resume-source/main.typ`. To regenerate it, install Typst and run:

```bash
typst compile resume-source/main.typ diwas-khatri-resume.pdf
```

Keep the CV truthful and update project descriptions as the projects evolve.

## Credits and implementation notes

The portfolio is authored by Diwas Khatri. The visual system uses embedded CSS, semantic HTML, lightweight browser JavaScript, inline SVG treatment, and public repository links. Project preview images are loaded from GitHub's public Open Graph endpoint so the repository cards stay current without adding binary screenshots to the repository.

The soundtrack embeds the three YouTube videos supplied by the owner. The player intentionally sets `autoplay=0`; visitors must press play themselves.

## License

The source code is released under the MIT License. Personal identity content, photographs, brand names, and external project content remain subject to their respective owners and platform terms. See [`LICENSE`](LICENSE) for details.
