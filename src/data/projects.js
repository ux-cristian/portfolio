export const projects = [
  {
    id: "rediseño-P&C",
    cover_image: "/projects/p&c/p&c_cover.webp",
    category: "Rediseño UI",
    title: "Rediseño de SEIZ para P&C",
    description: "Rediseñé la interfaz de usuario de la aplicación SEIZ para P&C, mejorando la experiencia del usuario y la usabilidad.",
    details: {
        context: "SEIZ es un software desarrollado por <strong>Atix Digital</strong> que usa inteligencia artificial para la extracción de información de documentos. ",
        client: "Atix Digital",
        date: "Febrero 2024 - Marzo 2024",
        challenge: "<strong>Atix</strong> en pro de brindar un servicio de calidad a sus clientes, buscaba <strong>optimizar interacciones</strong> de la interfaz de SEIZ que generaban fricciones de <strong>usabilidad.</strong>",
        solution: "Dada una investigación realizada por el equipo de Atix, se encontraron 7 incidencias clave. Se <strong>priorizó, rediseñó e iteró</strong> diferentes versiones del diseño en conjunto con el equipo de desarrollo, stakeholders y usuarios finales.",
        role: "Como <strong>UX Designer freelance</strong>, rediseñé los puntos de la interfaz que generaban más fricción de usabilidad. Adaptándome a las tecnologías usadas por el equipo de desarrollo.",
        process: [
            {
                title: "Priorización y cronograma",
                description: "Usé la Matriz Eisenhower para priorizar las incidencias y definí un cronograma de trabajo.",
                type: "image/webp",
                url: "/projects/p&c/p&c_multimedia_1.webp",
            },
            {
                title: "Búsqueda de patrones",
                description: "Recopilé en un moodboard interacciones de apps consolidadas que aportaban al proyecto (Google Workspace, WhatsApp, Word, YouTube).",
                type: "image/webp",
                url: "/projects/p&c/p&c_multimedia_2.webp",
            },
            {
                title: "Diseño de propuestas",
                description: "En base a la investigación anterior, se planteaba una propuesta de diseño. Por ejemplo, en la imagen se ve que los filtros ocupaban un espacio vertical excesivo y sus controles no eran intuitivos.  La solución propuesta reorganiza y compacta los filtros en una sola línea. También, se redefinen colores, iconos, componentes, de acuerdo a la nomenclatura establecida en MUI, que era la librería usada en desarrollo.",
                type: "image/webp",
                url: "/projects/p&c/p&c_multimedia_3.webp",
            },
            {
                title: "Validación e iteración",
                description: "En reuniones síncronas, se exponían las propuestas, se discutía la viabilidad de implementación con los desarrolladores y se recogía feedback. Más adelante, realizamos pruebas de usabilidad con usuarios finales; tras cada ronda de hallazgos, refiné los prototipos volviendo a ajustar interacción.",
                type: "image/webp",
                url: "/projects/p&c/p&c_multimedia_4.webp",
            },
            {
                title: "Entrega final",
                description: "Entregué flujos detallados en prototipos interactivos y documentación de estilos y componentes en Figma.",
                type: "image/webp",
                url: "/projects/p&c/p&c_multimedia_5.webp",
            },
        ],
        learnings: [
            "Cada proyecto UX es único y exige adaptar la metodología.",
            "La colaboración activa con desarrollo garantiza soluciones viables.",
            "Consideré reestructurar la arquitectura de información, pero quedó fuera de alcance del proyecto.",
        ]
      }
  },
  {
    id: "tokens",
    cover_image: "/projects/tokens/tokens_cover.webp",
    category: "Sistemas de diseño",
    title: "Sistema de Tokens escalable para productos White-Label",
    description: "Diseñé e implementé un sistema de tokens de diseño en Figma para Eccocar, basado en Material Design. La solución transformó un proceso de personalización manual en un sistema automatizado y escalable.",
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