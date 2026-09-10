#let ink = rgb("1d241b")
#let moss = rgb("496833")
#let sage = rgb("e9f0df")
#let lime = rgb("c8ed64")
#let muted = rgb("6f776b")
#set page(paper: "a4", margin: (top: 0.42in, bottom: 0.38in, left: 0.52in, right: 0.52in), fill: rgb("fbfbf7"))
#set text(font: "Noto Sans", size: 8.3pt, fill: ink)
#set par(leading: 0.93em, spacing: 0.28em)
#set heading(numbering: none)
#show link: set text(fill: moss)
#show heading.where(level: 1): set text(size: 10.7pt, weight: "bold", fill: moss)
#show heading.where(level: 1): set block(above: 0.35em, below: 0.16em)

#rect(fill: ink, radius: 5pt, width: 100%, inset: (x: 15pt, y: 13pt))[
  #grid(columns: (1fr, auto), gutter: 18pt,
    [#text(size: 25pt, weight: "bold", fill: white)[Diwas Khatri]\
     #text(size: 9.2pt, weight: "bold", fill: lime)[BUILDER  ·  PYTHON DEVELOPER  ·  AUTOMATION ENTHUSIAST]\
     #text(size: 8pt, fill: rgb("d5dccb"))[High-school student from Nepal, learning by building useful things.]],
    [#align(right)[#text(size: 8.2pt, fill: rgb("eef4e6"))[Nepal\
     #link("mailto:diwaskhatri@proton.me")[diwaskhatri\@proton.me]\
     #link("https://github.com/DiwasKhatri07")[github.com/DiwasKhatri07]\
     #link("https://www.linkedin.com/in/diwaskhatri/")[linkedin.com/in/diwaskhatri]]]]
  )
]

#grid(columns: (1fr, 1fr), gutter: 18pt,
  [#rect(fill: lime, radius: 2pt, width: 100%, height: 4pt)[]
   = Profile
   I started building at 13, while studying in class 8, after discovering Telegram bots. Since then I have learned through free YouTube courses, Udemy, documentation, and hands-on experiments. I build bots, web automations, APIs, extensions, and web apps, while growing into AI/ML and developer tooling. I am open to freelance work, collaborations, and junior opportunities.
  ],
  [#rect(fill: sage, radius: 4pt, width: 100%, inset: 10pt)[
    #text(size: 9pt, weight: "bold", fill: moss)[CONTACT & SOCIALS]\
    #link("https://x.com/a1diwas")[X \@a1diwas]  ·  #link("https://youtube.com/@gatewaymaker")[YouTube \@gatewaymaker]\
    #link("https://t.me/diwazz")[Telegram \@diwazz]  ·  #link("https://t.me/diwasxd")[Telegram \@diwasxd]\
    #link("https://gitlab.com/diwaskhatri")[GitLab]  ·  #link("https://gitea.com/diwash")[Gitea]\
    #link("https://www.fiverr.com/sellers/diwaskhatri07/")[Fiverr]  ·  #link("https://ko-fi.com/diwaskhatri")[Ko-fi]\
    #link("https://www.buymeacoffee.com/diwaskhatri")[Buy Me a Coffee]
  ]]
)

= Skills & Focus
#grid(columns: (1fr, 1fr), gutter: 18pt,
  [*Languages:* Python, JavaScript, TypeScript, HTML/CSS, Kotlin, C++\
   *Frameworks:* Flask, React, Three.js, Jetpack Compose\
   *Tools:* Git/GitHub, REST APIs, browser extensions, local-first tools],
  [*Core strengths:* Telegram and chat-bot development, web automation, API integration, scheduling, media workflows\
   *Growing into:* AI/ML concepts, Android development, programming-language/runtime design, stronger software architecture]
)

= Selected Work
#grid(columns: (1fr, 1fr), gutter: 12pt,
  [#text(weight: "bold", fill: moss)[NepBot]  ·  #link("https://github.com/DiwasKhatri07/nep-bot")[GitHub]\
  WhatsApp linked-device bot dashboard with pairing flow, country-code validation, controls, and a Python-facing service.],
  [#text(weight: "bold", fill: moss)[NepTLS]  ·  #link("https://github.com/DiwasKhatri07/NepTLS")[GitHub]\
  Python HTTP client and TLS research toolkit for authorized diagnostics and networking experiments.],
  [#text(weight: "bold", fill: moss)[NepaliCode]  ·  #link("https://github.com/DiwasKhatri07/NepaliCode")[GitHub]\
  Nepali-inspired programming language direction, runtime ideas, and Kotlin/Compose Android IDE concept.],
  [#text(weight: "bold", fill: moss)[Automate YT]  ·  #link("https://github.com/DiwasKhatri07/Automate-YT-Channel")[GitHub]\
  Creator workflow automation for media import, rendering, metadata, uploads, duplicate protection, and scheduling.],
  [#text(weight: "bold", fill: moss)[Nepali IDE]  ·  #link("https://github.com/DiwasKhatri07/Nepali-IDE")[GitHub]\
  AI-native Android coding workspace direction with Python execution, live preview, Git integration, and project history.],
  [#text(weight: "bold", fill: moss)[World Explorer]  ·  #link("https://github.com/DiwasKhatri07/diwas-world-explorer")[GitHub]\
  Explorable React and Three.js portfolio with 3D routes, gesture controls, and a Code City quest.],
  [#text(weight: "bold", fill: moss)[NepToons]  ·  #link("https://github.com/DiwasKhatri07/nep-toons")[GitHub]\
  Flask streaming-library experiment with HLS playback, authentication, profiles, favorites, and preview.],
  [#text(weight: "bold", fill: moss)[KnightSense]  ·  #link("https://github.com/DiwasKhatri07/KnightSense-Chess-Engine")[GitHub]\
  Manifest V3 Chrome extension for local Stockfish analysis, evaluations, saved positions, and MultiPV lines.]
)

= Education & Direction
#grid(columns: (1fr, 1fr), gutter: 18pt,
  [*Current education*\
   High-school student in Nepal.\
   *Learning path*\
   Free programming courses, Udemy, documentation, open-source code, and project-based practice.],
  [*Career direction*\
   Bot development, Python, web automation, web applications, AI/ML, and developer tooling.\
   *Availability*\
   Open to freelance projects, collaborations, and junior opportunities.]
)

#v(3pt)
#line(length: 100%, stroke: 0.6pt + rgb("cbd5b8"))
#align(center)[#text(size: 7.2pt, fill: muted)[#link("mailto:diwaskhatri@proton.me")[diwaskhatri\@proton.me]  ·  #link("https://github.com/DiwasKhatri07")[github.com/DiwasKhatri07]  ·  #link("https://www.linkedin.com/in/diwaskhatri/")[LinkedIn]  ·  Portfolio links available at github.com/DiwasKhatri07]]
