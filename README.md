# Design System

Design System construido con **React + TypeScript**, organizado como monorepo con **npm workspaces** y **Turborepo**.

Publica paquetes independientes en npm bajo el scope `@designsystemfdv/`.

---

## Packages

| Paquete | Descripcion |
|---------|-------------|
| `@designsystemfdv/primitives` | Design tokens (colores, tipografia, bordes, sombras) |
| `@designsystemfdv/utils` | Funciones utilitarias (cn, type checks, style helpers) |
| `@designsystemfdv/button-test` | Componente Button (React) |

## Apps

| App | Descripcion |
|-----|-------------|
| `apps/web` | App demo para consumir los paquetes |
| `apps/storybook` | Documentacion visual de componentes |

---

## Development

### Requisitos

- Node.js >= 20
- npm >= 10

### Instalacion

```bash
git clone https://github.com/fermatiasdv/designsystem.git
cd designsystem
npm install
```

### Scripts disponibles

```bash
npm run dev          # Levanta todos los workspaces en modo desarrollo
npm run build        # Compila todos los paquetes (respeta dependencias)
npm run test         # Ejecuta tests en todos los paquetes (vitest)
npm run typecheck    # Valida tipos en todos los paquetes (tsc --noEmit)
npm run lint         # Ejecuta ESLint donde este configurado
npm run changeset    # Crea un changeset (para versionado)
```

### Estructura del proyecto

```
designsystem/
├── packages/
│   ├── primitives/      # Design tokens
│   ├── utils/           # Utilidades
│   └── button-test/     # Componente Button
├── apps/
│   ├── web/             # App demo (Vite + React)
│   └── storybook/       # Storybook
├── .changeset/          # Configuracion de Changesets
├── .github/workflows/   # CI/CD pipelines
├── turbo.json           # Configuracion de Turborepo
└── package.json         # Root workspace
```

---

## CI/CD

### CI (Continuous Integration)

**Archivo:** `.github/workflows/ci.yml`

Se ejecuta en:
- Push a `main`
- Pull requests contra `main`

Pipeline:

1. **Install** — `npm ci` con cache de npm
2. **Lint** — `npm run lint` (ESLint via Turbo)
3. **Typecheck** — `npm run typecheck` (TypeScript via Turbo)
4. **Test** — `npm run test` (Vitest via Turbo)
5. **Build** — `npm run build` (Turbo, respetando dependencias entre paquetes)

Si cualquier paso falla, el pipeline falla y bloquea el merge.

### CD (Continuous Delivery)

**Archivo:** `.github/workflows/release.yml`

Se ejecuta en push a `main`. Usa [Changesets](https://github.com/changesets/changesets) para:

1. **Detectar changesets pendientes** — Si hay changesets sin publicar, crea un PR automatico "Version Packages" con:
   - Bump de versiones en cada `package.json`
   - Actualizacion del `CHANGELOG.md` de cada paquete
2. **Publicar a npm** — Cuando se mergea el PR de versionado, publica automaticamente los paquetes con cambios a npm.

---

## Publishing

### Como crear un changeset

Cada vez que hagas un cambio que deba reflejarse en una nueva version de un paquete:

```bash
npx changeset
```

Esto te pregunta:
1. Que paquetes fueron afectados
2. Tipo de cambio: `patch`, `minor` o `major`
3. Descripcion del cambio

Se crea un archivo en `.changeset/` que se commitea junto con tu PR.

**Ejemplo de flujo completo:**

```bash
# 1. Haces tus cambios en el codigo
# 2. Creas el changeset
npx changeset

# 3. Commiteas todo (codigo + changeset)
git add .
git commit -m "feat: add new variant to Button"

# 4. Abris PR a main
# 5. Al mergear, el bot de Changesets crea un PR de versionado
# 6. Al mergear ese PR, se publica automaticamente a npm
```

### Publicacion manual (opcional)

Si necesitas publicar manualmente:

```bash
npm run version-packages   # Aplica las versiones de los changesets
npm run release             # Build + publish a npm
```

---

## Versioning

Este proyecto usa [Semantic Versioning](https://semver.org/):

| Tipo | Version | Cuando usarlo |
|------|---------|---------------|
| `patch` | 1.0.0 -> 1.0.1 | Bug fixes, cambios internos sin impacto en la API publica |
| `minor` | 1.0.0 -> 1.1.0 | Nueva funcionalidad compatible con versiones anteriores |
| `major` | 1.0.0 -> 2.0.0 | Breaking changes (cambio de API, remover props, etc.) |

### Breaking changes

Cuando un cambio rompe la API publica de un paquete:

1. Al crear el changeset, seleccionar `major`
2. Describir claramente que cambio y como migrar
3. El CHANGELOG generado automaticamente incluira esta informacion

### Dependencias internas

Los paquetes internos (`primitives` -> `utils` -> `button-test`) se actualizan automaticamente como `patch` cuando cambian sus dependencias internas. Esto esta configurado en `.changeset/config.json` con `updateInternalDependencies: "patch"`.

---

## Secrets necesarios

Para que el CD funcione, configurar en **GitHub > Settings > Secrets and variables > Actions**:

| Secret | Descripcion | Como obtenerlo |
|--------|-------------|----------------|
| `NPM_TOKEN` | Token de publicacion de npm | [npmjs.com](https://www.npmjs.com/) > Access Tokens > Generate New Token (type: Automation) |

`GITHUB_TOKEN` se provee automaticamente por GitHub Actions.

---

## Tech Stack

- **React 19** + **TypeScript 5.9**
- **Vite 8** (build de componentes y apps)
- **Turborepo** (orquestacion del monorepo)
- **Vitest** (testing)
- **Storybook 8** (documentacion visual)
- **Changesets** (versionado y publicacion)
- **GitHub Actions** (CI/CD)

---

## Licencia

MIT
