export const projects = [
  {
    id: "seiz_redesign",
    cover_image: "/projects/seiz/seiz_cover.webp",
    category: "Diseño UX",
    title: "Rediseño UX/UI",
    description: "Rediseñar interacciones que afectaban la usabilidad de la aplicación SEIZ.",
    details: {
        context: "El rediseño se realizó sobre <strong>SEIZ</strong>, que es un software desarrollado por Atix Digital. Su enfoque principal es la <strong>extracción de información</strong> de documentos usando inteligencia artificial.",
        client: "Atix Digital",
        date: "Febrero 2024 - Marzo 2024",
        challenge: "<strong>Atix</strong> en pro de brindar un servicio de calidad a uno de sus clientes, buscaba <strong>optimizar interacciones</strong> de la interfaz de SEIZ que generaban fricciones de <strong>usabilidad.</strong>",
        solution: "Se <strong>priorizó, rediseñó e iteró</strong> diferentes versiones del diseño en conjunto con el equipo de desarrollo y stakeholders, adaptándome a las tecnologías usadas por el equipo de desarrollo.",
        role: "Como <strong>Diseñador UX</strong>, planteé propuestas de mejoras en la interfaz y flujos de usuario. En el transcurso de un mes y medio trabajé junto a dos desarrolladores webs y una directora de Operaciones de TI. ",
        process: [
            {
                title: "Priorización y cronograma",
                description: "Dada una investigación realizada por el equipo de Atix, se encontraron <strong>7 incidencias</strong> clave, las cuales usando la Matriz Eisenhower se priorizaron, para luego definir un <strong>cronograma de trabajo.</strong>",
                type: "image/webp",
                url: "/projects/seiz/seiz_1.webp",
            },
            {
                title: "Búsqueda de patrones",
                description: "Recopilé en un <strong>moodboard de interacciones</strong> de apps consolidadas que se relacionaban y aportaban a la mejora del aplicativo. Para ello, busqué aplicaciones que usaban frecuentemente algunos de los usuarios de SEIZ: Google Workspace, WhatsApp, Word, YouTube.",
                type: "image/webp",
                url: "/projects/seiz/seiz_2.webp",
            },
            {
                title: "Diseño de propuestas",
                description: "En base a la investigación de patrones y teniendo en cuenta las heurísticas de usabilidad de Nielsen (<a class=\"text-primary-700 underline\" href='https://www-nngroup-com.translate.goog/articles/ten-usability-heuristics/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc' target='_blank'>ver heurísticas</a>), se planteaban propuestas de diseño. A continuación se describen los problemas clave y las soluciones propuestas:<ul class=\"list-disc pl-6\"><li><strong>Filtros:</strong> ocupaban un espacio vertical excesivo y sus controles no eran intuitivos. La solución propuesta reorganiza y compacta los filtros en una sola línea.</li><li><strong>Subir archivos:</strong> no se tenía una clara visibilidad del estado del sistema. Para lo que se tuvieron en cuenta los flujos completos y se establecieron elementos de retroalimentación a lo largo del flujo.</li><li><strong>Asignación de documentos:</strong> el flujo para reasignar documentos no era claro, se realizaba todo dentro de un modal, por lo que no era posible ver todo el detalle del documento, solo su código. Se planteó un flujo diferente, seleccionando los documentos desde la tabla, posibilitando su filtrado y claridad de selección, para posteriormente seleccionar al usuario que se le iba a reasignar.</li><li><strong>Visualización de reporte:</strong> era necesario aplicar todos los filtros para visualizar los datos, sin embargo, no se daba una retroalimentación clara porque no se visualizaban los datos. Se planteó un <em>empty state</em> con una ilustración y mensaje informativos e instructivos.</li><li><strong>Interacción con tablas:</strong> se tenía que dibujar, mover o eliminar línea por línea la tabla dentro de un documento. Se planteó un flujo similar a crear tablas en word, con un concepto de filas y columnas.</li></ul><br>Dado que el cliente no tenía colores de marca, se dejó a libre elección los colores que debería tener SEIZ para el UI, por lo que se optó por colores predefinidos en la librería usada en desarrollo: Material UI (MUI).",
                type: "image/webp",
                url: "/projects/seiz/seiz_3.webp",
            },
            {
                title: "Validación e iteración",
                description: "En <strong>reuniones síncronas</strong>, se exponían las propuestas, se discutía la viabilidad de implementación con los desarrolladores e interesados, de lo cual se recogía retroalimentación y se iteraba. En este punto considero hubo una <strong>carencia grave</strong>: no se realizaron pruebas de usabilidad. En parte fué por el tiempo y presupuesto ajustado del proyecto, sin embargo en proyectos con las mismas características se debe SI o SI, <strong>establecer objetivos de investigación y métricas</strong> para realizar las iteraciones en base a la perspectiva de los usuarios del sistema.",
                type: "image/gif",
                url: "/projects/seiz/seiz_4.gif",
            },
            {
                title: "Entrega final",
                description: "En un <strong>archivo de Figma</strong>, mediante un prototipo interactivo documenté cada una de las interacciones propuestas. Las interfaces fueron construidas con Autolayout para así facilitar la implementación, con la misma intención, dejé documentados los estilos y componentes.",
                type: "image/webp",
                url: "/projects/seiz/seiz_5.webp",
            },
        ],
        learnings: [
            "La <strong>colaboración activa</strong> con desarrollo e interesados garantiza soluciones viables.",
            "La etapa de <strong>validación e iteración</strong> debió ser más <strong>estructurada</strong> no un proceso empírico y observacional. Estableciendo <strong>objetivos claros y métricas</strong> centradas en los usuarios.",
            "En los <strong>proyectos de UX</strong> se presentan diferentes retos según su contexto y no es lineal como se suelen enseñar en los cursos de UX, por lo que es debido <strong>adaptar la metodología.</strong>",
            "Es importante <strong>estimar</strong> bien los tiempos en un proyecto, porque este proyecto me tomó más de lo establecido."
        ]
      }
  },
  {
    id: "tokens",
    cover_image: "/projects/tokens/tokens_cover.webp",
    category: "Sistemas de diseño",
    title: "Sistema de tokens",
    description: "Implementar en Figma un flujo de cambio de marca blanca inspirado en Material Design.",
    details: {
        context: "Eccocar era una <strong>startup</strong> que lanzaba, operaba y escalaba servicios de movilidad digital. Colaborando con Rent-a-Cars, Consesionarios y Gestores de flota de todo el mundo.",
        client: "Eccocar",
        date: "Junio 2024 - Agosto 2024",
        challenge: "En <strong>Eccocar</strong> adaptar un producto <strong>marca blanca</strong> para múltiples clientes era lento y poco escalable, porque para cada nuevo cliente se requería configurar un archivo nuevo con colores, tipografía y logo propios. Además, las actualizaciones de diseño no se replicaban fácilmente en los demás.",
        solution: "Implementamos un <strong>sistema de tokens</strong> en Figma basado en <strong>Material Design</strong>, con colecciones de variables para cada marca.",
        role: "Como <strong>UX Designer</strong>, diseñé y ejecuté el sistema de tokens con variables de Figma, definiendo la nomenclatura y estructura basada en Material Design. Creé componentes adaptables y colaboré con el desarrollador front-end para sincronizar los diseños e implementación.",
        process: [
            {
                title: "Investigación y fundamentos",
                description: "En el momento que entré a la empresa, se había establecido seguir las pautas del sistema de diseño Material Design 3. Por ello, analicé su documentación para entender su estructura de foundations. Esto sentó las bases para adaptar un sistema probado a las necesidades específicas de Eccocar.",
                type: "image/webp",
                url: "/projects/tokens/tokens_multimedia_1.webp",
            },
            {
                title: "Arquitectura de tokens",
                description: "Definí una nomenclatura y estructura lógica de 3 niveles para las variables: 01_settings (primitivos), 02_ref (estilos de marca para personalización) y 03_sys (tokens semánticos para controlar temas y asegurar consistencia).",
                type: "image/webp",
                url: "/projects/tokens/tokens_multimedia_2.webp",
            },
            {
                title: "Automatización del flujo de trabajo",
                description: "Para eliminar la carga manual de colores, adapté un plugin de Figma (desarrollado por Jake, disponible en https://github.com/jake-figma/variables-import-export) para importar paletas directamente desde un archivo JSON generado por Material Theme Builder, estandarizando y acelerando la creación de nuevas marcas. También, se añadé el nuevo logo de marca en la librería de assets.",
                type: "video/mp4",
                url: "/projects/tokens/tokens_multimedia_3.mp4",
            },
            {
                title: "Implementación y validación",
                description: "Apliqué los nuevos tokens a los componentes y flujos existentes. Verifiqué que el cambio entre temas (claro/oscuro) y marcas funcionara perfectamente, validando la robustez del sistema antes de su entrega a desarrollo.",
                type: "video/mp4",
                url: "/projects/tokens/tokens_multimedia_4.mp4",
            },
        ],
        learnings: [
            "Implementar un sistema de tokens mejora la escalabilidad y flexibilidad del diseño en productos marca blanca.",
            "La documentación clara y la nomenclatura estandarizada son clave para el éxito del sistema.",
            "Un sistema de diseño sólido optimiza procesos, acelera el negocio y fomenta una mejor colaboración entre diseño e ingeniería.",
        ]
      }
  } 
];