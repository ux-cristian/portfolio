export const projects = [
  {
    id: "portfolio",
    cover_image: "/projects/portfolio/portfolio_cover.webp",
    category: "Diseño UX y Desarrollo web",
    title: "Portafolio",
    description: "Brindar a l@s reclutadores información relevante para que analicen mi proceso de diseño y experiencia.",
    details: {
        context: "Un portafolio es hoy una <strong>herramienta</strong> esencial para conseguir un buen <strong>empleo en UX</strong>. L@s reclutadores revisan decenas de propuestas en busca de talento que se ajuste a sus necesidades, por lo que es clave crear un <strong>portafolio que destaque</strong>. Este proyecto me retó, me enseñó mucho y lo desarrollé con dedicación, disfrutando el proceso creativo.",
        client: "Proyecto personal",
        date: "Abril 2025 - actualidad",
        challenge: "Destacar entre cientos de portafolios y brindar a l@s <strong>reclutadores</strong> información clara y relevante sobre mis <strong>habilidades, experiencia y proceso de diseño.</strong>",
        solution: "<strong>Diseñé y desarrollé</strong> un portafolio integrando buenas prácticas de diseño visual y contenido enfocado. Utilicé <strong>Astro y Tailwind CSS</strong> para optimizar la experiencia de desarrollo, además de implementar <strong>Hotjar</strong> para analizar comportamiento de usuarios.",
        role: "Asumí <strong>todos los roles</strong> del proyecto: investigación, diseño visual, contenido y desarrollo web.",
        process: [
            {
                title: "Un inicio caótico",
                description: "...pero lleno de aprendizajes. Durante dos meses probé Webflow y Framer, pero sus planes gratuitos no me convencieron. Por eso, decidí usar <strong>Astro</strong>, también por su velocidad y compatibilidad con componentes. Inicialmente, sin mucha planificación y basándome en lo que escuchaba en podcasts, videos y blogs sobre lo que era importante en un portafolio construí un <strong>MVP</strong> con secciones básicas: Header, Hero, About, Experience, Projects y Footer.",
                type: "image/webp",
                url: "/projects/portfolio/portfolio_1.webp",
            },
            {
                title: "El valor del feedback",
                description: "Una vez diseñado y desarrollado el portafolio, implementé <strong>Hotjar</strong> para hacer seguimiento de tráfico y comportamiento de usuarios. Notando que el tráfico aumentaba los días en que aplicaba a empleos, pero no recibía contactos.<br><br>Entendiendo que necesitaba un punto de vista externo, sometí el portafolio a un <strong>\"UX Critique\"</strong> en la comunidad \"UX Fomo\", donde recibí un <strong>feedback</strong> muy valioso. «Tu portafolio es unos de los mejores que hemos visto en la comunidad en cuanto a contenedores, muy a mi estilo, sin embargo, necesitaba ver más tu proyecto, no que me lo cuentes como un tutorial.», «El hero está vacío, no me dice que tenés experiencia», «Los proyectos es importante que estén arriba, porque es lo primero que van a buscar». (<a class=\"text-primary-700 underline\" href='https://docs.google.com/document/d/1LlwVAEbfHqUwnUjZ16MBGKwZ029Wr7Sl5XHNVyGNsTc/edit?usp=sharing' target='_blank'>ver todos los comentarios</a>).<br><br>El resumen fue claro: <strong>el contenido era clave</strong> y mi portafolio carecía de un enfoque en este aspecto. Algunas palabras en las secciones se sentían repetitivas, haciendo que algunos usuarios abandonaran el portafolio antes de llegar a la sección de proyectos y lo más importante, <strong>mis proyectos no reflejaban el proceso de diseño</strong>, sino que parecían un tutorial.",
                type: "image/webp",
                url: "/projects/portfolio/portfolio_2.webp",
            },
            {
                title: "Una pausa y reflexión",
                description: "En este punto pensé «¿Por qué no abordar mi portafolio como un <strong>proyecto UX</strong>?» Siendo esta la excusa para aplicar los conceptos de un <strong>nuevo libro</strong> que estaba leyendo: <em>Solving product design exercises - Artiom Dashinsky</em>. Aunque su enfoque no es ser una metodología de diseño, proporciona un marco muy interesante para abordar desafíos. Le dí mi propia interpretación y enfoque de <strong>Design Thinking</strong>. Las repuestas a las preguntas propuestas por este marco, las he respondido y documentado en Notion (<a class=\"text-primary-700 underline\" href='https://www.notion.so/Proyecto-portafolio-242415b4f9f98064a66fcf49d279deb7?source=copy_link' target='_blank'>ver respuestas</a>).",
                type: "image/webp",
                url: "/projects/portfolio/portfolio_3.webp",
            },
            {
                title: "1. Empatizar",
                description: "Siguiendo la <strong>metodología 5W1H</strong>, propuesta en el libro, asocié las primeras 4 preguntas del marco de trabajo (Why?, Who?, When and where?) con la primera etapa del Design Thinking. Además, una buen dinámica de UX, deberá estar <strong>abierta a la investigación</strong> en cualquier etapa del proceso de diseño, entendiendo que es el pilar fundamental y diferencial como diseñadores.<br><br>En este punto, con la información recolectada, se puede generar diversos entregables como: mapas de empatía, mapa de la propuesta de valor, mapas de recorrido del usuario, etc. En este caso en particular, he decidido plasmarlo en un user-persona generada con una investigación profunda realizada con Gemini (<a class=\"text-primary-700 underline\" href='https://g.co/gemini/share/9c245ec29bf0' target='_blank'>ver investigación</a>). Es importante aclarar, que esta es una <strong>representación ficticia</strong> de los usuarios reales, por lo que se debe ir refinando a medida que se recopilen datos reales. Un recurso valioso compartido por Cris Busquets que me a ayudado a validar la user persona es el siguiente: «¿Qué buscan l@s reclutadores en un portfolio UI/UX?» (<a class=\"text-primary-700 underline\" href='https://www.uifrommars.com/que-buscan-reclutadores-portfolio-ui-ux/' target='_blank'>ver recurso</a>).",
                type: "image/webp",
                url: "/projects/portfolio/portfolio_4.webp",
            },
            {
                title: "2. Definir",
                description: "En esta etapa, respondiendo a la <strong>quinta pregunta</strong> (What?), liste con ayuda de Gemini las funcionalidades que debería tener el portafolio. Además, tuve en cuenta el <strong>feedback proporcionado</strong> por la comunidad y las métricas recolectadas en <strong>Hotjar</strong>. Lo que me facilitó la definición y priorización de funcionalidades y tareas en las que debía trabajar. Siguiendo la dinámica del libro, la priorización se hizo mediante una <strong>matriz de impacto/esfuerzo.</strong>",
                type: "image/webp",
                url: "/projects/portfolio/portfolio_5.webp",
            },
            {
                title: "3. Idear",
                description: "Realicé wireframes para <strong>organizar la información</strong> del sitio en base a la <strong>prioridad</strong> definida en el paso anterior: <ul class=\"list-disc pl-6\"><li>Hero con un vistazo rápido a mi perfil.</li><li>Proyectos destacados con más visibilidad.</li><li>Casos de estudio priorizando contenido.</li><li>Experiencia con enlaces clicables a las empresas.</li><li>Sección ampliada de “Más sobre mí”.</li></ul><br>En otros procesos de diseño podríamos generar: userflows, wireframes, user journeys, site maps, etc.",
                type: "image/webp",
                url: "/projects/portfolio/portfolio_6.webp",
            },
            {
                title: "4. Prototipar",
                description: "Debido a que ya tenía el prototipo en alta fidelidad, empecé a <strong>iterar</strong> sobre esa versión y siguiendo las ideas definidas en los <strong>wireframes</strong>. Esta vez decidí hacer unos <strong>ajustes a la UI</strong> que reflejen más mi personalidad, añadiendo elementos visuales que me identifiquen, como lo son las curvas de nivel, ya que conectan con mi origen. También <strong>cambié la tipografía</strong> y realicé unos ajustes para que sea más cómoda de leer.",
                type: "image/gif",
                url: "/projects/portfolio/portfolio_7.gif",
            },
            {
                title: "5. Validar",
                description: "Tengo la <strong>hipótesis</strong> que con el nuevo enfoque dado, se mostrará más el impacto y se <strong>generarán contactos</strong>. Mis objetivos de investigación/validación son claros: <ul class=\"list-disc pl-6\"><li>Saber si con la nueva manera de presentar el contenido disminuyen las deserciones (hacen scroll sobre todo el home del portafolio).</li><li>Validar mediante los mapas de scroll y videos de Hotjar si los usuarios navegan sobre el caso de estudio completo.</li><li>Conocer los puntos donde los usuarios dan más clicks para dar enfoque a ese contenido.</li></ul><br>El proceso sigue abierto, considero que un <strong>software es un sistema vivo</strong> y en evolución. Por eso, sino es muy atrevido de mi parte, quisiera pedirle que como reclutador y usuario de mi portafolio, me regale un comentario de feedback en el siguiente correo: <a href='mailto:cristian08nc@gmail.com' class='text-primary-700 underline' target='_blank'>cristian08nc@gmail.com</a>. ¡Muchas gracias!",
                type: "image/webp",
                url: "/projects/portfolio/portfolio_8.webp",
            },
            {
                title: "Handoff",
                description: "<strong>Organicé</strong> el archivo de figma (<a class=\"text-primary-700 underline\" href='https://www.figma.com/design/XFwELjDd13w9wNs0LcJYKo/Portfolio---UX-Cristian?node-id=1433-8123&t=nGEcIpeDAIuKPd0w-1' target='_blank'>ver archivo</a>) como si fuese a <strong>entregarlo a otro equipo</strong>, aunque el desarrollo lo hiciera yo mismo. Esto me permitió agilizar cambios y pedir apoyo puntual a IA en componentes específicos. Si desea, puede visitar el repositorio público donde podrá ver el código de este proyecto (<a class=\"text-primary-700 underline\" href='https://github.com/ux-cristian/portfolio' target='_blank'>ver repositorio</a>).",
                type: "image/webp",
                url: "/projects/portfolio/portfolio_9.webp",
            },
        ],
        learnings: [
            "El <strong>feedback e iteración basado en datos</strong> es fundamental en un proceso UX y nunca es tarde para realizar una investigación de usuarios. ",
            "Abordar el portafolio como un proyecto real me permitió reflexionar sobre mi <strong>propuesta de valor</strong> como diseñador.",
            "La <strong>IA puede desbloquear bloqueos creativos</strong> en investigación, priorización o desarrollo puntual.",
            "<strong>Empezar por la interfaz</strong> puede ser <strong>contraproducente</strong> y llevar a retrabajo.",
            "En productos de marca, el <strong>contenido es tan importante como lo visual.</strong>"
        ]
      }
  },
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