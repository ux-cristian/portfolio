---
order: 3
title: My portfolio as a product
category: UX design & web development
description: I treated my own portfolio as a real product. I measured it with Hotjar, put it through a UX community critique and redesigned it with Design Thinking based on that data.
cover: ./portfolio_cover.webp
client: Personal project
date: April 2025 - present
context: "A portfolio is a designer's **first impression**: visitors go through dozens of them and decide in seconds whether to keep reading. I decided to treat mine like any product I design for a client, with **users, metrics and iterations**, and I designed and built it end to end."
challenge: Stand out among hundreds of portfolios and clearly show my **skills, experience and design process**, without visitors leaving before they reach the projects.
role: "I took on **every role** in the project: research, visual design, content and web development."
solution: "I **designed and built** the site with **Astro and Tailwind CSS**, prioritizing content based on the feedback I received, and integrated **Hotjar** to measure how visitors use it and keep iterating with data."
results:
  - metric: "2 versions"
    description: an initial MVP and a redesign driven by community feedback and usage data.
  - metric: "5 stages"
    description: of Design Thinking applied and documented, from empathize to validate.
  - metric: "Hotjar"
    description: heatmaps, scroll maps and recordings to measure real visitor behavior.
process:
  - title: A chaotic start
    media:
      type: image
      src: ./portfolio_1.webp
    description: "...but full of lessons. For two months I tried Webflow and Framer, but their free plans didn't convince me, so I chose **Astro** for its speed and component model. Without much planning, and based on what I heard in podcasts, videos and blogs about what a portfolio should include, I built an **MVP** with basic sections: Header, Hero, About, Experience, Projects and Footer."
  - title: The value of feedback
    media:
      type: image
      src: ./portfolio_2.webp
    description: |-
      Once the site was live, I installed **Hotjar** to track traffic and visitor behavior. Visits were going up, but they weren't turning into contacts.

      I needed an outside perspective, so I submitted the portfolio to a **"UX Critique"** in the "UX Fomo" community, where I got very valuable **feedback** (originally in Spanish): "Your portfolio is one of the best we've seen in the community in terms of containers, very much my style; however, I needed to see more of your project, not have you tell it to me like a tutorial", "The hero is empty, it doesn't tell me you have experience", "It's important that projects are at the top, because that's the first thing people look for" ([see all comments](https://docs.google.com/document/d/1LlwVAEbfHqUwnUjZ16MBGKwZ029Wr7Sl5XHNVyGNsTc/edit?usp=sharing)).

      The takeaway was clear: **content was key** and my portfolio didn't prioritize it. Some copy felt repetitive, several visitors left before reaching the projects and, most importantly, **my projects didn't show my design process**: they read like a tutorial.
  - title: A pause to reflect
    media:
      type: image
      src: ./portfolio_3.webp
    description: "Then I thought: \"Why not approach my portfolio as a **UX project**?\" It was the perfect excuse to apply a **book** I was reading, *Solving Product Design Exercises* by Artiom Dashinsky. It isn't a design methodology, but it offers a very useful framework for tackling challenges, which I interpreted through **Design Thinking**. I answered and documented the framework's questions in Notion ([see answers](https://www.notion.so/Proyecto-portafolio-242415b4f9f98064a66fcf49d279deb7?source=copy_link), in Spanish)."
  - title: Empathize
    media:
      type: image
      src: ./portfolio_4.webp
    description: |-
      Following the **5W1H** method proposed in the book, I mapped the framework's first questions (Why?, Who?, When and where?) to the first stage of Design Thinking. A good UX process should stay **open to research** at every stage: it's the foundation and the differentiator of our work.

      The information gathered can feed many deliverables: empathy maps, value proposition maps, user journey maps… Here I chose a user persona, built from in-depth research with Gemini ([see research](https://g.co/gemini/share/9c245ec29bf0)). It's a **fictional representation** of real users that gets refined as real data comes in. A resource by Cris Busquets helped me validate it ([see resource](https://www.uifrommars.com/que-buscan-reclutadores-portfolio-ui-ux/), in Spanish).
  - title: Define
    media:
      type: image
      src: ./portfolio_5.webp
    description: Answering the **fifth question** (What?), I listed with Gemini's help the features the portfolio needed and cross-checked them against the **community feedback** and **Hotjar** metrics. To prioritize them I used an **impact/effort matrix**, as the book suggests.
  - title: Ideate
    media:
      type: image
      src: ./portfolio_6.webp
    description: |-
      I made wireframes to **organize the information** according to the **priorities** defined in the previous step:

      - A hero that shows my profile at a glance.
      - Featured projects with more visibility.
      - Case studies that put content first.
      - Experience with links to the companies.
      - An expanded "About me" section.

      On other projects this stage can also include user flows, user journeys or site maps.
  - title: Prototype
    media:
      type: gif
      src: /projects/portfolio/portfolio_7.gif
    description: Since I already had a high-fidelity prototype, I **iterated** on it following the **wireframes**. I made **UI adjustments** so it would reflect more of my personality, with elements that identify me, like the contour lines that connect with where I come from. I also **changed the typography** and improved readability.
  - title: Validate
    media:
      type: image
      src: ./portfolio_8.webp
    description: |-
      My **hypothesis**: with the new approach, the impact of my work is easier to understand and **more contacts are generated**. To validate it I set these goals:

      - Check whether drop-offs decrease (visitors scrolling through the entire home page).
      - Use Hotjar scroll maps and recordings to see whether visitors read the full case study.
      - Find where they click the most in order to strengthen that content.

      The process is still open: a **digital product is a living system** that keeps evolving. If you have feedback on this portfolio, I'd love to read it at [cristian08nc@gmail.com](mailto:cristian08nc@gmail.com).
  - title: Handoff
    media:
      type: image
      src: ./portfolio_9.webp
    description: "I **organized** the Figma file ([see file](https://www.figma.com/design/XFwELjDd13w9wNs0LcJYKo/Portfolio---UX-Cristian?node-id=1433-8123&t=nGEcIpeDAIuKPd0w-1)) as if I were **handing it off to another team**, even though I built it myself. That let me apply changes faster and lean on AI for specific components. The code is public ([see repository](https://github.com/ux-cristian/portfolio))."
learnings:
  - '**Data-driven feedback and iteration** are essential in a UX process, and it''s never too late to research with users.'
  - Treating the portfolio as a real project helped me define my **value proposition** as a designer.
  - '**AI helps unblock** research, prioritization and specific parts of development.'
  - '**Starting with the interface** can be **counterproductive** and lead to rework.'
  - In a branded product, **content matters as much as visuals**.
---
