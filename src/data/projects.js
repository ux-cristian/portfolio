export const projects = [
  {
    id: "tokens",
    cover_image: "/portfolio/projects/tokens/tokens_cover.webp",
    category: "Sistemas de diseño",
    title: "Sistema de Tokens escalable para productos White-Label",
    description: "Diseñé e implementé un sistema de tokens de diseño en Figma para Eccocar, basado en Material Design. La solución transformó un proceso de personalización manual en un sistema automatizado y escalable.",
    details: {
        client: "Eccocar",
        year: 2024,
        challenge: "En <strong>Eccocar</strong> adaptar un producto <strong>marca blanca</strong> para múltiples clientes era lento y poco escalable, porque para cada nuevo cliente se requería configurar un archivo nuevo con colores, tipografía y logo propios. Además, las actualizaciones de diseño no se replicaban fácilmente en los demás.",
        solution: "Implementamos un <strong>sistema de tokens</strong> en Figma basado en <strong>Material Design</strong>, con colecciones de variables para cada marca.",
        role: "Como <strong>UX Designer</strong>, diseñé y ejecuté el sistema de tokens con variables de Figma, definiendo la nomenclatura y estructura basada en Material Design. Creé componentes adaptables y colaboré con el desarrollador front-end para sincronizar los diseños e implementación.",
        process: [
            {
                title: "Investigación y fundamentos",
                description: "En el momento que entré a la empresa, se había establecido seguir las pautas del sistema de diseño Material Design 3. Por ello, analicé su documentación para entender su estructura de foundations. Esto sentó las bases para adaptar un sistema probado a las necesidades específicas de Eccocar.",
                type: "image/webp",
                url: "/portfolio/projects/tokens/tokens_multimedia_1.webp",
            },
            {
                title: "Arquitectura de tokens",
                description: "Definí una nomenclatura y estructura lógica de 3 niveles para las variables: 01_settings (primitivos), 02_ref (estilos de marca para personalización) y 03_sys (tokens semánticos para controlar temas y asegurar consistencia).",
                type: "image/webp",
                url: "/portfolio/projects/tokens/tokens_multimedia_2.webp",
            },
            {
                title: "Automatización del flujo de trabajo",
                description: "Para eliminar la carga manual de colores, adapté un plugin de Figma (desarrollado por Jake, disponible en https://github.com/jake-figma/variables-import-export) para importar paletas directamente desde un archivo JSON generado por Material Theme Builder, estandarizando y acelerando la creación de nuevas marcas. También, se añadé el nuevo logo de marca en la librería de assets.",
                type: "video/mp4",
                url: "/portfolio/projects/tokens/tokens_multimedia_3.mp4",
            },
            {
                title: "Implementación y validación",
                description: "Apliqué los nuevos tokens a los componentes y flujos existentes. Verifiqué que el cambio entre temas (claro/oscuro) y marcas funcionara perfectamente, validando la robustez del sistema antes de su entrega a desarrollo.",
                type: "video/mp4",
                url: "/portfolio/projects/tokens/tokens_multimedia_4.mp4",
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