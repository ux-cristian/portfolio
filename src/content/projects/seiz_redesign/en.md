---
order: 2
title: SEIZ UX redesign
category: UX audit & redesign
description: I identified and prioritized the friction points of an AI-powered data extraction platform and redesigned its critical flows together with the development team.
cover: ./seiz_cover.webp
client: Atix Digital
date: February 2024 - March 2024
context: "**SEIZ** is software built by Atix Digital to **extract information** from documents using artificial intelligence. It's used by teams that process large volumes of documents every day, so every bit of friction in the interface turns into lost time."
challenge: "**Atix** wanted to deliver a high-quality service to one of its clients and needed to **improve the interactions** in SEIZ that were causing **usability issues**: unintuitive filters, missing feedback and flows that were hard to complete."
role: As a **freelance UX Designer**, I proposed interface and user-flow improvements. Over six weeks I worked with two web developers and the Director of IT Operations.
solution: "I **prioritized, redesigned and iterated** on the proposals together with the development team and stakeholders, adapting the design to the team's stack (**Material UI**) so implementation would be straightforward."
results:
  - metric: "7"
    description: usability issues prioritized with the Eisenhower matrix.
  - metric: "5"
    description: "critical flows redesigned: filters, file upload, document assignment, reports and tables."
  - metric: "6 weeks"
    description: of proposal, technical validation and iteration cycles with development.
  - metric: "1 prototype"
    description: interactive Figma prototype, documented with auto layout, styles and components ready to build.
process:
  - title: Prioritization and timeline
    media:
      type: image
      src: ./seiz_1.webp
    description: Building on earlier research by the Atix team, **7 key issues** were identified. I prioritized them with the Eisenhower matrix and, based on that, we set a **work timeline**.
  - title: Pattern research
    media:
      type: image
      src: ./seiz_2.webp
    description: "I collected an **interaction moodboard** with solutions from established apps that SEIZ users already used every day: Google Workspace, WhatsApp, Word and YouTube. Starting from familiar patterns lowers the learning curve."
  - title: Designing the proposals
    media:
      type: image
      src: ./seiz_3.webp
    description: |-
      Using those patterns and Nielsen's usability heuristics ([see heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)), I designed the proposals. These were the key problems and their solutions:

      - **Filters:** they took up too much vertical space and their controls weren't intuitive. I reorganized and compacted them into a single row.
      - **File upload:** there was no visibility of system status. I designed the full flow with feedback at every step.
      - **Document assignment:** everything happened inside a modal that only showed the document's code. I proposed selecting documents from the table, with filters and a clear selection, and then choosing who to reassign them to.
      - **Report view:** all filters had to be applied before any data appeared, but nothing said so. I designed an *empty state* with an illustration and a message explaining what to do.
      - **Table interaction:** tables inside a document were drawn, moved or deleted line by line. I proposed a Word-like flow based on rows and columns.

      Since the client had no brand colors, I used the predefined colors of the development team's library, Material UI (MUI).
  - title: Validation and iteration
    media:
      type: gif
      src: /projects/seiz/seiz_4.gif
    description: In **synchronous meetings** I presented the proposals, we reviewed their feasibility with developers and stakeholders, and I iterated on that feedback. Given the project's time and budget, validation was done with the team rather than with end users. Today, on a project like this, I set **research goals and metrics** from the start so iterations also reflect the perspective of the people who use the system.
  - title: Final delivery
    media:
      type: image
      src: ./seiz_5.webp
    description: I documented every interaction in an **interactive Figma prototype**. I built the screens with auto layout and documented styles and components so implementation would be as direct as possible.
learnings:
  - '**Active collaboration** with development and stakeholders leads to feasible solutions.'
  - Validation should be **structured**, with **clear goals and user-centered metrics**, not just observational.
  - Real projects aren't linear like in courses, so you have to **adapt the methodology** to each context.
  - It pays to **estimate iteration phases with some margin**, because feedback cycles often take longer than planned.
---
