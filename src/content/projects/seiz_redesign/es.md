---
order: 2
title: Rediseño UX de SEIZ
category: Auditoría y rediseño UX
description: Identifiqué y prioricé los puntos de fricción de una plataforma de extracción de datos con IA y rediseñé sus flujos críticos junto al equipo de desarrollo.
cover: ./seiz_cover.webp
client: Atix Digital
date: Febrero 2024 - Marzo 2024
context: "**SEIZ** es un software desarrollado por Atix Digital para la **extracción de información** de documentos con inteligencia artificial. Lo usan equipos que procesan grandes volúmenes de documentos cada día, así que cada fricción en la interfaz se traduce en tiempo perdido."
challenge: "**Atix** quería ofrecer un servicio de calidad a uno de sus clientes y necesitaba **optimizar las interacciones** de SEIZ que generaban **problemas de usabilidad**: filtros poco intuitivos, falta de retroalimentación y flujos difíciles de completar."
role: Como **Diseñador UX freelance**, propuse mejoras de interfaz y de flujos de usuario. Durante mes y medio trabajé con dos desarrolladores web y la directora de Operaciones de TI.
solution: "**Prioricé, rediseñé e iteré** las propuestas junto al equipo de desarrollo y los stakeholders, adaptando el diseño a las tecnologías del equipo (**Material UI**) para que la implementación fuera directa."
results:
  - metric: "7"
    description: incidencias de usabilidad priorizadas con la matriz de Eisenhower.
  - metric: "5"
    description: "flujos críticos rediseñados: filtros, carga de archivos, asignación de documentos, reportes y tablas."
  - metric: "6 semanas"
    description: de ciclos de propuesta, validación técnica e iteración con desarrollo.
  - metric: "1 prototipo"
    description: interactivo en Figma, documentado con Autolayout, estilos y componentes listos para implementar.
process:
  - title: Priorización y cronograma
    media:
      type: image
      src: ./seiz_1.webp
    description: A partir de una investigación previa del equipo de Atix se identificaron **7 incidencias** clave. Las prioricé con la matriz de Eisenhower y, con esa prioridad, definimos un **cronograma de trabajo**.
  - title: Búsqueda de patrones
    media:
      type: image
      src: ./seiz_2.webp
    description: "Reuní en un **moodboard de interacciones** soluciones de aplicaciones consolidadas que los usuarios de SEIZ ya usaban a diario: Google Workspace, WhatsApp, Word y YouTube. Partir de patrones conocidos reduce la curva de aprendizaje."
  - title: Diseño de propuestas
    media:
      type: image
      src: ./seiz_3.webp
    description: |-
      Con esos patrones y las heurísticas de usabilidad de Nielsen ([ver heurísticas](https://www-nngroup-com.translate.goog/articles/ten-usability-heuristics/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc)) diseñé las propuestas. Estos fueron los problemas clave y sus soluciones:

      - **Filtros:** ocupaban demasiado espacio vertical y sus controles no eran intuitivos. Los reorganicé y compacté en una sola línea.
      - **Carga de archivos:** no había visibilidad del estado del sistema. Diseñé el flujo completo con retroalimentación en cada paso.
      - **Asignación de documentos:** todo ocurría dentro de un modal donde solo se veía el código del documento. Propuse seleccionar los documentos desde la tabla, con filtros y una selección clara, y después elegir a quién reasignarlos.
      - **Visualización de reportes:** había que aplicar todos los filtros para ver datos, pero nada lo indicaba. Diseñé un *empty state* con ilustración y un mensaje que explica qué hacer.
      - **Interacción con tablas:** las tablas de un documento se dibujaban, movían o eliminaban línea por línea. Propuse un flujo similar al de Word, basado en filas y columnas.

      Como el cliente no tenía colores de marca, usé los colores predefinidos de la librería del equipo de desarrollo, Material UI (MUI).
  - title: Validación e iteración
    media:
      type: gif
      src: /projects/seiz/seiz_4.gif
    description: En **reuniones síncronas** presentaba las propuestas, revisábamos su viabilidad con desarrollo y los interesados, y las iteraba con ese feedback. Por los tiempos y el presupuesto del proyecto, la validación se hizo con el equipo y no con usuarios finales. Hoy, en un proyecto así, defino desde el inicio **objetivos de investigación y métricas** para iterar también con la perspectiva de quienes usan el sistema.
  - title: Entrega final
    media:
      type: image
      src: ./seiz_5.webp
    description: Documenté cada interacción en un **prototipo interactivo de Figma**. Construí las interfaces con Autolayout y dejé documentados los estilos y componentes para que la implementación fuera lo más directa posible.
learnings:
  - La **colaboración activa** con desarrollo y con los interesados garantiza soluciones viables.
  - La validación debe ser **estructurada**, con **objetivos claros y métricas** centradas en los usuarios, no solo observacional.
  - 'Los proyectos reales no son lineales como en los cursos: hay que **adaptar la metodología** a cada contexto.'
  - 'Conviene **estimar con margen** las fases de iteración: los ciclos de feedback suelen tomar más de lo previsto.'
---
