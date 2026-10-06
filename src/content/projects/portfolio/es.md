---
order: 3
title: Mi portafolio como producto
category: Diseño UX y desarrollo web
description: Traté mi propio portafolio como un producto real. Lo medí con Hotjar, lo sometí a la crítica de una comunidad UX y lo rediseñé con Design Thinking a partir de esos datos.
cover: ./portfolio_cover.webp
client: Proyecto propio
date: Abril 2025 - actualidad
context: "Un portafolio es la **primera impresión** de un diseñador: quien lo visita revisa decenas de propuestas y decide en segundos si sigue leyendo. Decidí tratar el mío como cualquier producto que diseño para un cliente, con **usuarios, métricas e iteraciones**, y lo diseñé y desarrollé de principio a fin."
challenge: Destacar entre cientos de portafolios y mostrar con claridad mis **habilidades, mi experiencia y mi proceso de diseño**, sin que el visitante abandone antes de llegar a los proyectos.
role: "Asumí **todos los roles** del proyecto: investigación, diseño visual, contenido y desarrollo web."
solution: "**Diseñé y desarrollé** el sitio con **Astro y Tailwind CSS**, priorizando el contenido según el feedback recibido, e integré **Hotjar** para medir cómo lo usan los visitantes y seguir iterando con datos."
results:
  - metric: "2 versiones"
    description: un MVP inicial y un rediseño guiado por el feedback de la comunidad y los datos de uso.
  - metric: "5 etapas"
    description: de Design Thinking aplicadas y documentadas, de empatizar a validar.
  - metric: "Hotjar"
    description: mapas de calor, de scroll y grabaciones para medir el comportamiento real de los visitantes.
process:
  - title: Un inicio caótico
    media:
      type: image
      src: ./portfolio_1.webp
    description: "...pero lleno de aprendizajes. Durante dos meses probé Webflow y Framer, pero sus planes gratuitos no me convencieron, así que elegí **Astro** por su velocidad y su modelo de componentes. Sin mucha planificación, y con lo que escuchaba en podcasts, vídeos y blogs sobre qué debía tener un portafolio, construí un **MVP** con secciones básicas: Header, Hero, About, Experience, Projects y Footer."
  - title: El valor del feedback
    media:
      type: image
      src: ./portfolio_2.webp
    description: |-
      Con el sitio publicado, instalé **Hotjar** para seguir el tráfico y el comportamiento de los visitantes. Vi que las visitas aumentaban, pero no se convertían en contactos.

      Necesitaba una mirada externa, así que presenté el portafolio a un **"UX Critique"** en la comunidad "UX Fomo", donde recibí un **feedback** muy valioso: «Tu portafolio es uno de los mejores que hemos visto en la comunidad en cuanto a contenedores, muy a mi estilo; sin embargo, necesitaba ver más tu proyecto, no que me lo cuentes como un tutorial», «El hero está vacío, no me dice que tenés experiencia», «Es importante que los proyectos estén arriba, porque es lo primero que van a buscar» ([ver todos los comentarios](https://docs.google.com/document/d/1LlwVAEbfHqUwnUjZ16MBGKwZ029Wr7Sl5XHNVyGNsTc/edit?usp=sharing)).

      La conclusión fue clara: **el contenido era clave** y mi portafolio no lo priorizaba. Algunos textos se sentían repetitivos, varios visitantes abandonaban antes de llegar a los proyectos y, lo más importante, **mis proyectos no reflejaban el proceso de diseño**: parecían un tutorial.
  - title: Una pausa para reflexionar
    media:
      type: image
      src: ./portfolio_3.webp
    description: "Entonces pensé: «¿Por qué no abordar mi portafolio como un **proyecto UX**?». Era la excusa perfecta para aplicar un **libro** que estaba leyendo, *Solving Product Design Exercises* de Artiom Dashinsky. No es una metodología de diseño, pero ofrece un marco muy útil para abordar desafíos, al que di mi propia interpretación con **Design Thinking**. Respondí y documenté las preguntas del marco en Notion ([ver respuestas](https://www.notion.so/Proyecto-portafolio-242415b4f9f98064a66fcf49d279deb7?source=copy_link))."
  - title: Empatizar
    media:
      type: image
      src: ./portfolio_4.webp
    description: |-
      Siguiendo el método **5W1H** que propone el libro, asocié las primeras preguntas del marco (Why?, Who?, When and where?) con la primera etapa del Design Thinking. Un buen proceso UX debe estar **abierto a la investigación** en cualquier etapa: es el pilar y el diferencial de nuestro trabajo.

      Con la información recogida se pueden crear distintos entregables: mapas de empatía, de propuesta de valor, de recorrido del usuario… En este caso elegí una user persona, construida a partir de una investigación profunda con Gemini ([ver investigación](https://g.co/gemini/share/9c245ec29bf0)). Es una **representación ficticia** de los usuarios reales que se va refinando a medida que llegan datos reales. Un recurso de Cris Busquets me ayudó a validarla: «¿Qué buscan los reclutadores en un portfolio UI/UX?» ([ver recurso](https://www.uifrommars.com/que-buscan-reclutadores-portfolio-ui-ux/)).
  - title: Definir
    media:
      type: image
      src: ./portfolio_5.webp
    description: Respondiendo a la **quinta pregunta** (What?), listé con ayuda de Gemini las funcionalidades que debía tener el portafolio y las crucé con el **feedback de la comunidad** y las métricas de **Hotjar**. Para priorizarlas usé una **matriz de impacto y esfuerzo**, como propone el libro.
  - title: Idear
    media:
      type: image
      src: ./portfolio_6.webp
    description: |-
      Hice wireframes para **organizar la información** según la **prioridad** definida en el paso anterior:

      - Un hero que muestra mi perfil de un vistazo.
      - Proyectos destacados con más visibilidad.
      - Casos de estudio que priorizan el contenido.
      - Experiencia con enlaces a las empresas.
      - Una sección ampliada de "Sobre mí".

      En otros proyectos esta etapa también puede incluir flujos de usuario, user journeys o mapas del sitio.
  - title: Prototipar
    media:
      type: gif
      src: /projects/portfolio/portfolio_7.gif
    description: Como ya tenía un prototipo en alta fidelidad, **iteré** sobre él siguiendo los **wireframes**. Hice **ajustes en la UI** para que reflejara más mi personalidad, con elementos que me identifican, como las curvas de nivel, que conectan con mi origen. También **cambié la tipografía** y mejoré la legibilidad.
  - title: Validar
    media:
      type: image
      src: ./portfolio_8.webp
    description: |-
      Mi **hipótesis**: con el nuevo enfoque se entiende mejor el impacto de mi trabajo y se **generan más contactos**. Para validarla definí estos objetivos:

      - Comprobar si disminuyen los abandonos (que los visitantes recorran toda la página de inicio).
      - Validar con los mapas de scroll y las grabaciones de Hotjar si los visitantes leen el caso de estudio completo.
      - Identificar dónde hacen más clics para reforzar ese contenido.

      El proceso sigue abierto: un **producto digital es un sistema vivo** y en evolución. Si tienes un comentario sobre este portafolio, me encantará leerlo en [cristian08nc@gmail.com](mailto:cristian08nc@gmail.com).
  - title: Handoff
    media:
      type: image
      src: ./portfolio_9.webp
    description: "**Organicé** el archivo de Figma ([ver archivo](https://www.figma.com/design/XFwELjDd13w9wNs0LcJYKo/Portfolio---UX-Cristian?node-id=1433-8123&t=nGEcIpeDAIuKPd0w-1)) como si fuera a **entregarlo a otro equipo**, aunque el desarrollo lo hiciera yo. Eso me permitió aplicar cambios más rápido y apoyarme en IA para componentes concretos. El código es público ([ver repositorio](https://github.com/ux-cristian/portfolio))."
learnings:
  - El **feedback y la iteración basados en datos** son fundamentales en un proceso UX, y nunca es tarde para investigar con usuarios.
  - Tratar el portafolio como un proyecto real me ayudó a definir mi **propuesta de valor** como diseñador.
  - La **IA ayuda a desbloquear** la investigación, la priorización y partes concretas del desarrollo.
  - "**Empezar por la interfaz** puede ser **contraproducente** y generar retrabajo."
  - En un producto de marca, el **contenido es tan importante como lo visual**.
---
