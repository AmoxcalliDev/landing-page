# Amoxcalli Landing Page

Landing page oficial de la comunidad **Amoxcalli Dev**: una casa digital para compartir conocimiento, colaborar en open source y mostrar proyectos de la organización.

Aplicación construida con **Next.js (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4** y animaciones con **GSAP**.

## Tabla de contenido

- [Visión del proyecto](#visión-del-proyecto)
- [Características](#características)
- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Requisitos](#requisitos)
- [Variables de entorno](#variables-de-entorno)
- [Instalación y desarrollo local](#instalación-y-desarrollo-local)
- [Comandos Disponibles](#comandos-disponibles)
- [Docker](#docker)
- [Cómo funciona la carga de repositorios](#cómo-funciona-la-carga-de-repositorios)
- [Licencia](#licencia)

## Visión del proyecto

Amoxcalli representa "la casa del conocimiento digital":

- Comunicar la identidad de la comunidad.
- Facilitar la entrada de nuevos colaboradores.
- Mostrar repositorios reales de GitHub de forma dinámica.
- Centralizar los enlaces clave (GitHub, Discord, contacto).

## Características

- Diseño moderno y responsive.
- Secciones narrativas: hero, nosotros, proyectos, stack, contribución y comunidad.
- Animaciones de scroll y aparición con GSAP.
- Consumo de la API de GitHub del lado del servidor vía endpoint interno.
- Caché y revalidación para mantener datos frescos sin sobrecargar la API.
- Preparada para producción con salida standalone de Next.js.

## Stack tecnológico

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Biome (lint y format)
- Docker + Docker Compose

## Estructura del proyecto

```text
src/
	app/
		api/repos/route.ts         # Endpoint que consulta GitHub y normaliza la respuesta
		globals.css                # Estilos globales y animaciones CSS
		layout.tsx                 # Metadata SEO + layout principal
		page.tsx                   # Landing principal
	components/
		sections/
			projects-section.tsx     # Sección dinámica de repositorios
		ui/
			page-animations.tsx      # Revelado de secciones con GSAP
			repo-card.tsx            # Tarjeta individual de repositorio
			repo-count.tsx           # Contador dinámico de repositorios
```

## Requisitos

- Node.js 20+ (recomendado 22 o superior)
- npm 10+
- Token de GitHub con acceso a lectura de repositorios públicos

## Variables de entorno

Crea tu archivo `.env` tomando como base `.env.example`.

```env
GITHUB_TOKEN=my-github-token
GITHUB_ORG=my-github-organization
```

Variables principales:

- `GITHUB_TOKEN`: token para autenticar peticiones a la API de GitHub.
- `GITHUB_ORG`: organización objetivo (por ejemplo `AmoxcalliDev`).

## Instalación y desarrollo local

```bash
npm install
cp .env.example .env
# Edita .env con tus valores reales
npm run dev
```

La aplicación quedará disponible en:

- http://localhost:3000

## Comandos disponibles

```bash
npm run dev      # entorno local
npm run build    # build de producción
npm run start    # ejecutar build de producción
npm run lint     # validación con Biome
npm run format   # formato automático con Biome
```

## Docker

### Desarrollo con Docker Compose

```bash
docker compose -f docker-compose-dev.yml up --build
```

### Producción con Docker Compose

```bash
docker compose up --build -d
```

El servicio expone el puerto `3000`.

## Cómo funciona la carga de repositorios

1. El frontend solicita `/api/repos`.
2. El endpoint consulta `https://api.github.com/orgs/{GITHUB_ORG}/repos`.
3. Se filtran forks y el repo `.github`.
4. Se normaliza la data para UI (nombre, descripción, lenguaje, stars, topics, URL).
5. La respuesta se revalida periódicamente para equilibrar frescura y rendimiento.

Si la API falla, la UI muestra un estado de error controlado sin romper la experiencia.

## Licencia

Este proyecto se distribuye bajo la licencia definida en [LICENSE](LICENSE).
