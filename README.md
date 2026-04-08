# 📦 Design System

Design System construido con **React + TypeScript**, enfocado en crear componentes reutilizables, consistentes y escalables para aplicaciones web.

Este proyecto actúa como una **fuente única de verdad (Single Source of Truth)** para UI, permitiendo acelerar el desarrollo y mantener coherencia visual y funcional en múltiples productos.

---

## 🚀 Features

- ⚛️ Componentes reutilizables en React  
- 🧠 Tipado fuerte con TypeScript  
- 🎨 Tokens de diseño centralizados (colores, spacing, etc.)  
- 📱 Enfoque responsive (mobile-first)  
- 🧩 Arquitectura modular (primitives + compositions)  
- 📚 Integración con Storybook para documentación visual  
- ⚡ Optimizado para performance  

---

## 📂 Estructura del proyecto

```bash
src/
 └── ui/
      ├── components/     # Componentes principales
      ├── primitives/     # Componentes base (Button, Input, etc.)
      ├── hooks/          # Custom hooks
      ├── utils/          # Helpers
      ├── icons/          # Íconos
      ├── layout/         # Layout components
      └── styles/         # Tokens / estilos globales
```
La separación entre primitives y compositions permite escalar sin acoplar lógica ni UI.

📦 Instalación

Clonar el repositorio:

git clone https://github.com/fermatiasdv/designsystem.git
cd designsystem

Instalar dependencias:
npm install


Levantar entorno de desarrollo:
npm run dev

Levantar Storybook:
npm run storybook

🧩 Uso del Design System
1. Importar componentes
import { Button } from "@/ui/components/Button";
2. Usarlos en tu app
```React
<Button variant="primary" onClick={handleClick}>
  Guardar
</Button>
```

🎯 ¿Cómo aprovechar este proyecto?

Este design system puede usarse de varias formas:

✔️ Como librería de componentes

Integrarlo en múltiples proyectos para reutilizar UI consistente.

✔️ Como base de nuevos proyectos

Bootstrapping rápido sin tener que reinventar estilos y componentes.

✔️ Como playground de UI

Usar Storybook para probar variantes, estados y edge cases.

✔️ Como contrato entre diseño y desarrollo


Centraliza decisiones visuales y evita inconsistencias.

🧱 Filosofía
Composición > configuración
Consistencia > customización extrema
Simplicidad > abstracciones innecesarias
Performance first

⚙️ Tecnologías
React
TypeScript
CSS Modules / Styled strategy
Storybook
Vite

📐 Convenciones
Componentes desacoplados y reutilizables
Props explícitas (evitar "magic props")
Separación de lógica y presentación
Naming consistente (variant, size, etc.)

🧪 Testing
npm run test

📈 Roadmap
 Mejorar cobertura de componentes
 Sistema de theming
 Mejorar accesibilidad (a11y)
 Documentación avanzada en Storybook
 Publicación como paquete npm
 
🤝 Contribución
Fork del repo
Crear branch (feature/nueva-feature)
Commit
Pull Request
📄 Licencia

Licencia: MIT

PR, dudas y si querés que lo desarrolle para tu empresa, enviame un mail a fernandomatiasdv@gmail.com
