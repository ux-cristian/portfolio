---
order: 1
title: Sistema de tokens multimarca
category: Sistemas de diseño
description: Convertí un producto marca blanca lento de personalizar en un sistema de tokens en Figma. Ahora, lanzar una nueva marca es cambiar una colección de variables, no rehacer un archivo.
cover: ./tokens_cover.webp
client: Eccocar
date: Junio 2024 - Agosto 2024
context: Eccocar era una **startup** que lanzaba, operaba y escalaba servicios de movilidad digital, colaborando con empresas de alquiler de coches, concesionarios y gestores de flota de todo el mundo. Su producto se vendía en **marca blanca**, así que cada cliente necesitaba verlo con su propia identidad.
challenge: Adaptar el producto a cada nuevo cliente era **lento y poco escalable**. Por cada marca había que configurar un archivo nuevo con colores, tipografía y logo propios, y las mejoras de diseño **no se replicaban** fácilmente en las demás versiones.
role: Como **Diseñador UX**, diseñé y ejecuté el sistema de tokens con variables de Figma, definí su nomenclatura y estructura a partir de Material Design, creé componentes adaptables y trabajé con el desarrollador front-end para mantener sincronizados diseño e implementación.
solution: Un **sistema de tokens en Figma** basado en **Material Design 3**, con una colección de variables por marca y temas claro y oscuro. Los componentes se construyen una sola vez y cambian de identidad al cambiar de colección.
results:
  - metric: "3 niveles"
    description: de tokens (**settings**, **ref** y **sys**) que separan los valores base, la identidad de cada marca y el uso semántico.
  - metric: "300+"
    description: variables organizadas para color, tipografía y espaciado.
  - metric: "2 temas"
    description: claro y oscuro para cada marca, validados sobre componentes y flujos reales.
  - metric: "0"
    description: colores cargados a mano. Las paletas se importan desde un JSON generado por Material Theme Builder.
process:
  - title: Investigación y fundamentos
    media:
      type: image
      src: ./tokens_multimedia_1.webp
    description: El equipo había decidido seguir las pautas de **Material Design 3**, así que empecé analizando su documentación para entender cómo estructura sus fundamentos. Eso me dio una base probada que luego adapté a las necesidades específicas de Eccocar.
  - title: Arquitectura de tokens
    media:
      type: image
      src: ./tokens_multimedia_2.webp
    description: "Definí una nomenclatura y una estructura de **3 niveles** para las variables: **01_settings** (valores primitivos), **02_ref** (estilos de cada marca, el nivel que se personaliza) y **03_sys** (tokens semánticos que controlan los temas y garantizan la consistencia)."
  - title: Automatización del flujo de trabajo
    media:
      type: video
      src: /projects/tokens/tokens_multimedia_3.mp4
    description: Para eliminar la carga manual de colores, adapté un plugin de Figma ([variables-import-export](https://github.com/jake-figma/variables-import-export), de Jake) que importa paletas directamente desde el JSON que genera **Material Theme Builder**. Así, crear una marca nueva pasó a ser un proceso estándar y rápido. El logo de cada marca se añade a la librería de assets.
  - title: Implementación y validación
    media:
      type: video
      src: /projects/tokens/tokens_multimedia_4.mp4
    description: Apliqué los nuevos tokens a los componentes y flujos existentes y comprobé que el cambio entre temas (claro y oscuro) y entre marcas funcionara en todos ellos, validando la solidez del sistema **antes de entregarlo a desarrollo**.
learnings:
  - Un sistema de tokens hace que un producto marca blanca **escale** sin multiplicar el trabajo de diseño.
  - 'La **nomenclatura** y la **documentación** son tan importantes como las variables: son lo que permite que otros usen el sistema.'
  - Un buen sistema de diseño acelera al negocio y mejora la **colaboración entre diseño e ingeniería**.
---
