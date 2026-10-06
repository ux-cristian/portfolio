---
order: 1
title: Portafolio
category: Diseño UX y Desarrollo web
description: Brindar a l@s reclutadores información relevante para que analicen mi proceso de diseño y experiencia.
cover: ./portfolio_cover.webp
client: Proyecto personal
date: Abril 2025 - actualidad
context: Un portafolio es hoy una **herramienta** esencial para conseguir un buen **empleo en UX**. L@s reclutadores revisan decenas de propuestas en busca de talento que se ajuste a sus necesidades, por lo que es clave crear un **portafolio que destaque**. Este proyecto me retó, me enseñó mucho y lo desarrollé con dedicación, disfrutando el proceso creativo.
challenge: Destacar entre cientos de portafolios y brindar a l@s **reclutadores** información clara y relevante sobre mis **habilidades, experiencia y proceso de diseño.**
role: "Asumí **todos los roles** del proyecto: investigación, diseño visual, contenido y desarrollo web."
solution: "**Diseñé y desarrollé** un portafolio integrando buenas prácticas de diseño visual y contenido enfocado. Utilicé **Astro y Tailwind CSS** para optimizar la experiencia de desarrollo, además de implementar **Hotjar** para analizar comportamiento de usuarios."
process:
  - title: Un inicio caótico
    media:
      type: image
      src: ./portfolio_1.webp
    description: "...pero lleno de aprendizajes. Durante dos meses probé Webflow y Framer, pero sus planes gratuitos no me convencieron. Por eso, decidí usar **Astro**, también por su velocidad y compatibilidad con componentes. Inicialmente, sin mucha planificación y basándome en lo que escuchaba en podcasts, videos y blogs sobre lo que era importante en un portafolio construí un **MVP** con secciones básicas: Header, Hero, About, Experience, Projects y Footer."
  - title: El valor del feedback
    media:
      type: image
      src: ./portfolio_2.webp
    description: |-
      Una vez diseñado y desarrollado el portafolio, implementé **Hotjar** para hacer seguimiento de tráfico y comportamiento de usuarios. Notando que el tráfico aumentaba los días en que aplicaba a empleos, pero no recibía contactos.

      Entendiendo que necesitaba un punto de vista externo, sometí el portafolio a un **"UX Critique"** en la comunidad "UX Fomo", donde recibí un **feedback** muy valioso. «Tu portafolio es unos de los mejores que hemos visto en la comunidad en cuanto a contenedores, muy a mi estilo, sin embargo, necesitaba ver más tu proyecto, no que me lo cuentes como un tutorial.», «El hero está vacío, no me dice que tenés experiencia», «Los proyectos es importante que estén arriba, porque es lo primero que van a buscar». ([ver todos los comentarios](https://docs.google.com/document/d/1LlwVAEbfHqUwnUjZ16MBGKwZ029Wr7Sl5XHNVyGNsTc/edit?usp=sharing)).

      El resumen fue claro: **el contenido era clave** y mi portafolio carecía de un enfoque en este aspecto. Algunas palabras en las secciones se sentían repetitivas, haciendo que algunos usuarios abandonaran el portafolio antes de llegar a la sección de proyectos y lo más importante, **mis proyectos no reflejaban el proceso de diseño**, sino que parecían un tutorial.
  - title: Una pausa y reflexión
    media:
      type: image
      src: ./portfolio_3.webp
    description: "En este punto pensé «¿Por qué no abordar mi portafolio como un **proyecto UX**?» Siendo esta la excusa para aplicar los conceptos de un **nuevo libro** que estaba leyendo: *Solving product design exercises - Artiom Dashinsky*. Aunque su enfoque no es ser una metodología de diseño, proporciona un marco muy interesante para abordar desafíos. Le dí mi propia interpretación y enfoque de **Design Thinking**. Las repuestas a las preguntas propuestas por este marco, las he respondido y documentado en Notion ([ver respuestas](https://www.notion.so/Proyecto-portafolio-242415b4f9f98064a66fcf49d279deb7?source=copy_link))."
  - title: 1. Empatizar
    media:
      type: image
      src: ./portfolio_4.webp
    description: |-
      Siguiendo la **metodología 5W1H**, propuesta en el libro, asocié las primeras 4 preguntas del marco de trabajo (Why?, Who?, When and where?) con la primera etapa del Design Thinking. Además, una buen dinámica de UX, deberá estar **abierta a la investigación** en cualquier etapa del proceso de diseño, entendiendo que es el pilar fundamental y diferencial como diseñadores.

      En este punto, con la información recolectada, se puede generar diversos entregables como: mapas de empatía, mapa de la propuesta de valor, mapas de recorrido del usuario, etc. En este caso en particular, he decidido plasmarlo en un user-persona generada con una investigación profunda realizada con Gemini ([ver investigación](https://g.co/gemini/share/9c245ec29bf0)). Es importante aclarar, que esta es una **representación ficticia** de los usuarios reales, por lo que se debe ir refinando a medida que se recopilen datos reales. Un recurso valioso compartido por Cris Busquets que me a ayudado a validar la user persona es el siguiente: «¿Qué buscan l@s reclutadores en un portfolio UI/UX?» ([ver recurso](https://www.uifrommars.com/que-buscan-reclutadores-portfolio-ui-ux/)).
  - title: 2. Definir
    media:
      type: image
      src: ./portfolio_5.webp
    description: En esta etapa, respondiendo a la **quinta pregunta** (What?), liste con ayuda de Gemini las funcionalidades que debería tener el portafolio. Además, tuve en cuenta el **feedback proporcionado** por la comunidad y las métricas recolectadas en **Hotjar**. Lo que me facilitó la definición y priorización de funcionalidades y tareas en las que debía trabajar. Siguiendo la dinámica del libro, la priorización se hizo mediante una **matriz de impacto/esfuerzo.**
  - title: 3. Idear
    media:
      type: image
      src: ./portfolio_6.webp
    description: |-
      Realicé wireframes para **organizar la información** del sitio en base a la **prioridad** definida en el paso anterior:

      - Hero con un vistazo rápido a mi perfil.
      - Proyectos destacados con más visibilidad.
      - Casos de estudio priorizando contenido.
      - Experiencia con enlaces clicables a las empresas.
      - Sección ampliada de “Más sobre mí”.

      En otros procesos de diseño podríamos generar: userflows, wireframes, user journeys, site maps, etc.
  - title: 4. Prototipar
    media:
      type: gif
      src: /projects/portfolio/portfolio_7.gif
    description: Debido a que ya tenía el prototipo en alta fidelidad, empecé a **iterar** sobre esa versión y siguiendo las ideas definidas en los **wireframes**. Esta vez decidí hacer unos **ajustes a la UI** que reflejen más mi personalidad, añadiendo elementos visuales que me identifiquen, como lo son las curvas de nivel, ya que conectan con mi origen. También **cambié la tipografía** y realicé unos ajustes para que sea más cómoda de leer.
  - title: 5. Validar
    media:
      type: image
      src: ./portfolio_8.webp
    description: |-
      Tengo la **hipótesis** que con el nuevo enfoque dado, se mostrará más el impacto y se **generarán contactos**. Mis objetivos de investigación/validación son claros:

      - Saber si con la nueva manera de presentar el contenido disminuyen las deserciones (hacen scroll sobre todo el home del portafolio).
      - Validar mediante los mapas de scroll y videos de Hotjar si los usuarios navegan sobre el caso de estudio completo.
      - Conocer los puntos donde los usuarios dan más clicks para dar enfoque a ese contenido.

      El proceso sigue abierto, considero que un **software es un sistema vivo** y en evolución. Por eso, sino es muy atrevido de mi parte, quisiera pedirle que como reclutador y usuario de mi portafolio, me regale un comentario de feedback en el siguiente correo: [cristian08nc@gmail.com](mailto:cristian08nc@gmail.com). ¡Muchas gracias!
  - title: Handoff
    media:
      type: image
      src: ./portfolio_9.webp
    description: "**Organicé** el archivo de figma ([ver archivo](https://www.figma.com/design/XFwELjDd13w9wNs0LcJYKo/Portfolio---UX-Cristian?node-id=1433-8123&t=nGEcIpeDAIuKPd0w-1)) como si fuese a **entregarlo a otro equipo**, aunque el desarrollo lo hiciera yo mismo. Esto me permitió agilizar cambios y pedir apoyo puntual a IA en componentes específicos. Si desea, puede visitar el repositorio público donde podrá ver el código de este proyecto ([ver repositorio](https://github.com/ux-cristian/portfolio))."
learnings:
  - El **feedback e iteración basado en datos** es fundamental en un proceso UX y nunca es tarde para realizar una investigación de usuarios.
  - Abordar el portafolio como un proyecto real me permitió reflexionar sobre mi **propuesta de valor** como diseñador.
  - La **IA puede desbloquear bloqueos creativos** en investigación, priorización o desarrollo puntual.
  - "**Empezar por la interfaz** puede ser **contraproducente** y llevar a retrabajo."
  - En productos de marca, el **contenido es tan importante como lo visual.**
---
