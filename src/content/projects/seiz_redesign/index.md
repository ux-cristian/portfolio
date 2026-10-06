---
order: 2
title: Rediseño UX/UI
category: Diseño UX
description: Rediseñar interacciones que afectaban la usabilidad de la aplicación SEIZ.
cover: ./seiz_cover.webp
client: Atix Digital
date: Febrero 2024 - Marzo 2024
context: El rediseño se realizó sobre **SEIZ**, que es un software desarrollado por Atix Digital. Su enfoque principal es la **extracción de información** de documentos usando inteligencia artificial.
challenge: "**Atix** en pro de brindar un servicio de calidad a uno de sus clientes, buscaba **optimizar interacciones** de la interfaz de SEIZ que generaban fricciones de **usabilidad.**"
role: Como **Diseñador UX**, planteé propuestas de mejoras en la interfaz y flujos de usuario. En el transcurso de un mes y medio trabajé junto a dos desarrolladores webs y una directora de Operaciones de TI.
solution: Se **priorizó, rediseñó e iteró** diferentes versiones del diseño en conjunto con el equipo de desarrollo y stakeholders, adaptándome a las tecnologías usadas por el equipo de desarrollo.
process:
  - title: Priorización y cronograma
    media:
      type: image
      src: ./seiz_1.webp
    description: Dada una investigación realizada por el equipo de Atix, se encontraron **7 incidencias** clave, las cuales usando la Matriz Eisenhower se priorizaron, para luego definir un **cronograma de trabajo.**
  - title: Búsqueda de patrones
    media:
      type: image
      src: ./seiz_2.webp
    description: "Recopilé en un **moodboard de interacciones** de apps consolidadas que se relacionaban y aportaban a la mejora del aplicativo. Para ello, busqué aplicaciones que usaban frecuentemente algunos de los usuarios de SEIZ: Google Workspace, WhatsApp, Word, YouTube."
  - title: Diseño de propuestas
    media:
      type: image
      src: ./seiz_3.webp
    description: |-
      En base a la investigación de patrones y teniendo en cuenta las heurísticas de usabilidad de Nielsen ([ver heurísticas](https://www-nngroup-com.translate.goog/articles/ten-usability-heuristics/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc)), se planteaban propuestas de diseño. A continuación se describen los problemas clave y las soluciones propuestas:

      - **Filtros:** ocupaban un espacio vertical excesivo y sus controles no eran intuitivos. La solución propuesta reorganiza y compacta los filtros en una sola línea.
      - **Subir archivos:** no se tenía una clara visibilidad del estado del sistema. Para lo que se tuvieron en cuenta los flujos completos y se establecieron elementos de retroalimentación a lo largo del flujo.
      - **Asignación de documentos:** el flujo para reasignar documentos no era claro, se realizaba todo dentro de un modal, por lo que no era posible ver todo el detalle del documento, solo su código. Se planteó un flujo diferente, seleccionando los documentos desde la tabla, posibilitando su filtrado y claridad de selección, para posteriormente seleccionar al usuario que se le iba a reasignar.
      - **Visualización de reporte:** era necesario aplicar todos los filtros para visualizar los datos, sin embargo, no se daba una retroalimentación clara porque no se visualizaban los datos. Se planteó un *empty state* con una ilustración y mensaje informativos e instructivos.
      - **Interacción con tablas:** se tenía que dibujar, mover o eliminar línea por línea la tabla dentro de un documento. Se planteó un flujo similar a crear tablas en word, con un concepto de filas y columnas.

      Dado que el cliente no tenía colores de marca, se dejó a libre elección los colores que debería tener SEIZ para el UI, por lo que se optó por colores predefinidos en la librería usada en desarrollo: Material UI (MUI).
  - title: Validación e iteración
    media:
      type: gif
      src: /projects/seiz/seiz_4.gif
    description: "En **reuniones síncronas**, se exponían las propuestas, se discutía la viabilidad de implementación con los desarrolladores e interesados, de lo cual se recogía retroalimentación y se iteraba. En este punto considero hubo una **carencia grave**: no se realizaron pruebas de usabilidad. En parte fué por el tiempo y presupuesto ajustado del proyecto, sin embargo en proyectos con las mismas características se debe SI o SI, **establecer objetivos de investigación y métricas** para realizar las iteraciones en base a la perspectiva de los usuarios del sistema."
  - title: Entrega final
    media:
      type: image
      src: ./seiz_5.webp
    description: En un **archivo de Figma**, mediante un prototipo interactivo documenté cada una de las interacciones propuestas. Las interfaces fueron construidas con Autolayout para así facilitar la implementación, con la misma intención, dejé documentados los estilos y componentes.
learnings:
  - La **colaboración activa** con desarrollo e interesados garantiza soluciones viables.
  - La etapa de **validación e iteración** debió ser más **estructurada** no un proceso empírico y observacional. Estableciendo **objetivos claros y métricas** centradas en los usuarios.
  - En los **proyectos de UX** se presentan diferentes retos según su contexto y no es lineal como se suelen enseñar en los cursos de UX, por lo que es debido **adaptar la metodología.**
  - Es importante **estimar** bien los tiempos en un proyecto, porque este proyecto me tomó más de lo establecido.
---
