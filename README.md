# PRISMA Global Club 🌍

**"Excelencia que transforma realidades."**

Bienvenido/a al repositorio oficial de PRISMA Global Club. Somos una plataforma digital y un club de voluntariado enfocado en la formación de jóvenes con visión global y la ejecución de proyectos de impacto social alineados a los Objetivos de Desarrollo Sostenible (ODS).

Esta Landing Page está impulsada por un diseño de alto impacto visual (Awwwards-level), transiciones suaves y una arquitectura modular de rápido despliegue utilizando el ecosistema estático de **Astro**.

## 🚀 Tecnologías Core
- **Astro**: Para enrutamiento ultrarrápido (MPA) y directivas de renderizado eficiente de "islas" (`client:only`, `client:load`).
- **React**: Componentes dinámicos interactivos integrados.
- **Tailwind CSS v4**: Motor de estilos y sistema de tokens construido enteramente sobre la API moderna `@theme`.
- **GSAP & Lenis**: Para las animaciones procedimentales (`ScrollTrigger`) y control total del raster del navegador (`Smooth Scroll`).

## 📂 Arquitectura de Páginas (CMS-Ready Data Injection)
El proyecto pasó de un sistema estático manual a un enrutamiento en Astro de 6 pestañas independientes. Cada pestaña tiene delegados sus componentes principales (Heros, Footers) y contiene *Placeholders* exactos listos para rellenarse con datos:

1. `/` -> **Inicio** (Dependiente de `src/data/0_inicio.json`)
2. `/historia` -> **Historia** (Dependiente de `src/data/2_historia.json`)
3. `/equipo` -> **Directiva y Equipo** (Dependiente de `src/data/3_equipo.json`)
4. `/proyectos` -> **Impacto** (Dependiente de `src/data/4_proyectos.json`)
5. `/aliados` -> **Red de Aliados** (Dependiente de `src/data/5_aliados.json`)
6. `/contacto` -> **Información General** (Actualmente conectado por bucles a `1_contacto.json`)
7. `/unete` -> **Call To Action Principal** (Dependiente de `src/data/6_reclutamiento.json`)

Toda la base de datos de la web se unifica en archivos `.json` bajo la carpeta `src/data/`. El equipo de contenido solo debe editar esos archivos con un editor de texto estándar, permitiendo que el Frontend compile automáticamente las tarjetas y maquetación.

## 🛠 Instalación y Desarrollo Local
```bash
# 1. Clonar el repositorio
git clone https://github.com/r19junior/Prisma.git

# 2. Instalar las dependencias de Node.js
npm install

# 3. Levantar el entorno local
npm run dev
```

*Atención: Asegúrate de importar los arcivos `.woff2` y `.woff` oficiales de las fuentes "Gilker" y "JA Jayagiri Sans" en `public/fonts/` antes de pase a producción a GitHub Pages/Vercel.*
