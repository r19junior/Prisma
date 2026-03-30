# PRISMA Global Club - Documentación Técnica y Arquitectura Frontend

## 1. Introducción
Este documento detalla la arquitectura, el diseño y las directrices técnicas para la landing page de **PRISMA Global Club**, un club de voluntariado enfocado en la formación de jóvenes con visión global y la ejecución de proyectos de impacto social alineados a los Objetivos de Desarrollo Sostenible (ODS). 

El desarrollo web abordado en este repositorio se basa en la excelencia, la innovación y el impacto, reflejados en un diseño visual vanguardista, interactivo y con rendimiento ultrarrápido (Nivel Awwwards).

## 2. Brand Guidelines Aplicados
### 2.1. Arquetipos de Marca
- **Héroe (50%)**: Transmitido mediante tipografías robustas de alto contraste (`Archivo Black`) que ocupan la pantalla, colores intensos (Rojo PRISMA) y un diseño asertivo que denota valentía frente a los desafíos globales.
- **Creativo (30%)**: Implementado mediante interacciones avanzadas, el uso del motor de animaciones `GSAP`, el smooth scrolling de `Lenis` y micro-interacciones (cursor personalizado interactivo, efectos magnéticos).
- **Cuidador (20%)**: Reflejado en transiciones de página suaves, mensajes cálidos y legibilidad impecable con la tipografía `Poppins`, junto a un uso balanceado y abundante de espacio en blanco (`#f8f8f8`).

### 2.2. Colores y Sistema Visual
- **Colores Primarios**: 
  - `prisma-dark-red`: `#9d0116`
  - `prisma-red`: `#b43238`
  - `prisma-light-red`: `#fb6068`
  - `prisma-pink`: `#ffcfd1`
  - `prisma-white`: `#f8f8f8` (Fondo base principal para secciones limpias).
  - `prisma-black`: `#0a0a0a` (Utilizado para fondos oscuros que aporten un contraste tecnológico, p. ej., en el Hero y el Footer).
- **Colores Secundarios (Desarrollo y ODS)**: Integrados como variables en el sistema para iluminar secciones específicas (p. ej., el brillo de una tarjeta al pasar el cursor).
  - Educación: `#d61c30`
  - Medio Ambiente: `#4b9f37`
  - Inclusión: `#dd1367`
  - Cultura: `#f89d2c`
  - Salud: `#66015c`
  - Ciudadanía: `#00689d`
- **Tipografías**: 
  - `Archivo Black` para un impacto audiovisual masivo (H1, H2). 
  - `Poppins` para la legibilidad del cuerpo del texto, botones y metadata. 
  - `Gilker` y `JA Jayagiri Sans` reservadas estrictamente para elementos de identidad puntuales (como los logotipos y sub-marcas).

## 3. Arquitectura Tecnológica Exigida
- **Framework Frontend**: [Astro](https://astro.build/). Se ha seleccionado Astro por su enfoque de UI estática (*Island Architecture*), garantizando tiempos de carga casi instantáneos que reflejan la excelencia y optimizan el SEO del club.
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) acoplado de forma nativa a la compilación. El archivo `tailwind.config.mjs` restringe y encapsula de forma estricta los tokens listados en el manual de marca para evitar desviaciones formales e "inventos" de color.
- **Animaciones e Interactividad**:
  - `GSAP` (GreenSock) para animación declarativa y su excelente plugin `ScrollTrigger` para manejar la aparición gradual (revelado) del contenido al descender (`reveal on scroll`).
  - `Lenis` empleado para forzar un *Smooth Scroll* suave a 60fps, perfectamente sincronizado al pipeline interno de requestAnimationFrame (rAF) de GSAP para evitar el "stuttering".
- **Custom UI Features**: Se aplican soluciones de vanguardia como *Glassmorphism* (luces y sombras a través de elementos translúcidos con `backdrop-filter`) para las *Navbar*, y un puntero de ratón modificado (Custom Cursor) que se expande bajo un efecto *mix-blend-mode: difference* al hacer `hover` sobre enlaces y botones.

## 4. Estructura de Componentes Sentados
Los cimientos del proyecto configurados hasta ahora son los siguientes, listos para permitir la construcción modular del sitio:

1. **`tailwind.config.mjs`**: Archivo de configuración que encapsula la paleta completa PRISMA y empareja las familias de fuentes (Google Fonts y custom `@font-face`).
2. **`src/styles/global.css`**: Define las variables nativas CSS del manual, configura obligatoriamente las tipografías globales, implementa estilos directos para el funcionamiento estructural de Lenis, encapsula utilidades base de *glassmorphism* (e.g., `.glass`, `.glass-dark`) y provee la base del `custom-cursor`.
3. **`src/layouts/Layout.astro`**: Plantilla base (HOC) del motor de Astro que se encarga del cascarón `<html>`, configuraciones SEO de Cabecera (meta tags, charset, links de preload tipográfico), y lo más importante: inyecta mediante etiquetas `<script>` la inicialización centralizada de Lenis y la vincula con el Ticker global de GSAP. Al mismo tiempo, inicia la escucha global de eventos de movimiento del ratón para el *Custom Cursor*.
