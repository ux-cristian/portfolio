---
order: 3
title: Sistema de tokens
category: Sistemas de diseño
description: Implementar en Figma un flujo de cambio de marca blanca inspirado en Material Design.
cover: ./tokens_cover.webp
client: Eccocar
date: Junio 2024 - Agosto 2024
context: Eccocar era una **startup** que lanzaba, operaba y escalaba servicios de movilidad digital. Colaborando con Rent-a-Cars, Consesionarios y Gestores de flota de todo el mundo.
challenge: En **Eccocar** adaptar un producto **marca blanca** para múltiples clientes era lento y poco escalable, porque para cada nuevo cliente se requería configurar un archivo nuevo con colores, tipografía y logo propios. Además, las actualizaciones de diseño no se replicaban fácilmente en los demás.
role: Como **UX Designer**, diseñé y ejecuté el sistema de tokens con variables de Figma, definiendo la nomenclatura y estructura basada en Material Design. Creé componentes adaptables y colaboré con el desarrollador front-end para sincronizar los diseños e implementación.
solution: Implementamos un **sistema de tokens** en Figma basado en **Material Design**, con colecciones de variables para cada marca.
process:
  - title: Investigación y fundamentos
    media:
      type: image
      src: ./tokens_multimedia_1.webp
    description: En el momento que entré a la empresa, se había establecido seguir las pautas del sistema de diseño Material Design 3. Por ello, analicé su documentación para entender su estructura de foundations. Esto sentó las bases para adaptar un sistema probado a las necesidades específicas de Eccocar.
  - title: Arquitectura de tokens
    media:
      type: image
      src: ./tokens_multimedia_2.webp
    description: "Definí una nomenclatura y estructura lógica de 3 niveles para las variables: 01_settings (primitivos), 02_ref (estilos de marca para personalización) y 03_sys (tokens semánticos para controlar temas y asegurar consistencia)."
  - title: Automatización del flujo de trabajo
    media:
      type: video
      src: /projects/tokens/tokens_multimedia_3.mp4
    description: Para eliminar la carga manual de colores, adapté un plugin de Figma (desarrollado por Jake, disponible en https://github.com/jake-figma/variables-import-export) para importar paletas directamente desde un archivo JSON generado por Material Theme Builder, estandarizando y acelerando la creación de nuevas marcas. También, se añadé el nuevo logo de marca en la librería de assets.
  - title: Implementación y validación
    media:
      type: video
      src: /projects/tokens/tokens_multimedia_4.mp4
    description: Apliqué los nuevos tokens a los componentes y flujos existentes. Verifiqué que el cambio entre temas (claro/oscuro) y marcas funcionara perfectamente, validando la robustez del sistema antes de su entrega a desarrollo.
learnings:
  - Implementar un sistema de tokens mejora la escalabilidad y flexibilidad del diseño en productos marca blanca.
  - La documentación clara y la nomenclatura estandarizada son clave para el éxito del sistema.
  - Un sistema de diseño sólido optimiza procesos, acelera el negocio y fomenta una mejor colaboración entre diseño e ingeniería.
---
