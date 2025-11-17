# Overview

This is a mobile-first web application called "Mi Vida UPMH" built as a static frontend website using HTML, CSS, and JavaScript. The project uses Vite as its development server and build tool, providing hot module reloading for rapid development. The application is designed for a university community (UPMH - Universidad Politécnica Metropolitana de Hidalgo) with a modern, gradient-based UI featuring purple and blue color schemes.

## Recent Changes (November 2025)

### Corrección de Filtros de Emociones (Noviembre 9, 2025)
- **Problema Resuelto**: Filtros de búsqueda, filtrado por persona y ordenamiento en la sección Bienestar no funcionaban correctamente
- **Mejoras Implementadas**:
  - **Búsqueda Robusta**: Manejo seguro de campos undefined/null (person, description, emotions) con defaults a strings vacíos
  - **Filtro por Persona**: Implementada coincidencia exacta con normalización (lowercase + trim) en ambos lados de la comparación
  - **Ordenamiento Estable**: Uso de localeCompare para comparaciones de strings en lugar de aritmética numérica, evitando NaN en IDs no numéricos
  - **Tie-breakers Determinísticos**: Criterios secundarios de ordenamiento para mantener orden consistente
  - **Validación de Arrays**: Verificación de que emotion.emotions sea un array antes de iterar
- **Decisión Arquitectural**: Programación defensiva con guardias contra valores faltantes para prevenir crashes en datos importados o corruptos
- **Resultado**: Todos los filtros (búsqueda, persona, ordenamiento) funcionan correctamente con cualquier combinación de datos

### Implementación Profesional de PWA (Noviembre 9, 2025 - Actualización)
- **Decisión Arquitectural**: Re-implementada PWA con enfoque profesional y controlado, basado en las mejores prácticas de 2025
- **Archivos Creados**: 
  - `public/manifest.json`: Configuración PWA completa con iconos, shortcuts, y metadata
  - `public/sw.js`: Service Worker con estrategia de caching híbrida (Cache First para assets, Network First para contenido dinámico)
  - `public/offline.html`: Página de fallback profesional cuando no hay conexión
  - `public/icons/`: Iconos generados profesionalmente en múltiples tamaños (192x192, 512x512, maskable)
- **Meta Tags Agregados**: Links al manifest, apple-touch-icons, y favicons en múltiples tamaños
- **Service Worker Inteligente**: 
  - Precaching controlado de assets estáticos críticos
  - Estrategia Cache First para imágenes, CSS, JS y fuentes
  - Estrategia Network First con fallback a cache para navegación
  - Página offline personalizada cuando falla la red
  - Limpieza automática de caches viejos
  - Notificación al usuario cuando hay actualizaciones disponibles
- **Configuración Vite Mejorada**: Configuración de build y publicDir para manejo correcto de archivos PWA
- **Instalabilidad**: La app ahora se puede instalar como app nativa en Android, iOS, Windows, Mac y Linux
- **Shortcuts**: Accesos rápidos a secciones clave (Tareas, Horario) desde el launcher del sistema
- **Estabilidad**: Service Worker no interfiere con HMR ni con navegación, usando filtros específicos para requests

### Optimizaciones Móviles para Android e iOS
- **Touch Events Optimizados**: Agregado soporte nativo para touchstart/touchend con feedback visual
- **Eliminación del Delay de 300ms**: Implementado `touch-action: manipulation` en todos los elementos interactivos para respuesta instantánea en iOS
- **Áreas Táctiles Mejoradas**: Todos los botones tienen un tamaño mínimo de 44x44px según las guías de accesibilidad de Apple y Google
- **Viewport Optimizado**: Configuración mejorada para prevenir zoom accidental y mejorar la experiencia en dispositivos móviles
- **Feedback Táctil Visual**: Sistema de opacidad en touchstart/touchend para confirmación visual de interacciones
- **Event Delegation Mejorada**: Convertido onclick inline a event delegation para mejor rendimiento y consistencia
- **Prevención de Selección de Texto**: Agregado `-webkit-tap-highlight-color: transparent` y `user-select: none` en elementos interactivos
- **Corrección de Errores**: Agregadas verificaciones de null en updateStats() para prevenir errores en diferentes páginas

### Cambios Anteriores (October 2025)
- **Navegación Completa**: Implementada navegación funcional entre cuatro secciones: Inicio, Horario, Progreso y Bienestar
- **Sección Horario**: Nueva sección con horario semanal completo de clases
- **Sección Progreso**: Nueva sección mostrando promedio académico, calificaciones por materia y estadísticas del semestre
- **Sección Bienestar**: Sección mejorada con formulario de emociones y análisis de relaciones
- **Modal de Notificaciones**: Botón de campana funcional que muestra tareas pendientes y próximos eventos
- **Modal de Ajustes**: Botón de engrane funcional con opciones de configuración y opción para borrar datos
- **Interactividad Completa**: Todos los botones de navegación e interacción están funcionando al 100%

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Technology Stack**: Pure HTML, CSS, and vanilla JavaScript with Vite as the build tool and development server.

**Design Approach**: The application follows a mobile-first design pattern with:
- CSS custom properties (CSS variables) for consistent theming
- Gradient-based color scheme (purple to blue primary gradient)
- Responsive layout designed primarily for mobile devices
- Sticky mobile header for improved navigation
- Font Awesome icons for UI elements
- Google Fonts (Poppins) for typography
- Touch-optimized interactions with instant feedback (no 300ms delay)
- Minimum 44x44px touch targets for accessibility
- Visual feedback on touch events for better UX

**Rationale**: This architecture was chosen for simplicity and performance. Using vanilla JavaScript eliminates framework overhead, making the application lightweight and fast. Vite provides modern development features (hot module reloading, fast builds) without the complexity of a full framework setup.

**Build System**: Vite serves as both the development server and production bundler:
- Development server runs on host `0.0.0.0` port `5000`
- Hot Module Reloading (HMR) enabled by default
- Can be easily disabled via configuration for users who prefer manual refreshing

**Styling Strategy**: Inline styles within the HTML file combined with a separate CSS file approach. The inline styles in `index.html` contain the main application styles with CSS variables for theming, while `style.css` appears to contain baseline/reset styles.

**Pros**:
- Zero framework dependencies means smaller bundle size
- Fast initial load times
- Easy to understand and modify
- Vite provides excellent developer experience

**Cons**:
- Manual state management required for complex interactions
- No built-in routing for multi-page applications
- Scaling to larger applications may require refactoring to a framework

## Component Structure

The application uses a CSS variable-based theming system with predefined colors:
- Primary: `#6a11cb` (purple)
- Secondary: `#2575fc` (blue)
- Accent: `#ff6b6b` (coral red)
- Success: `#00b894` (green)
- Warning: `#fdcb6e` (yellow)
- Danger: `#e17055` (orange-red)

The UI includes:
- Mobile header with sticky positioning and functional notification/settings buttons
- Card-based layout system with consistent shadows and border radius
- Container-based responsive layout with padding
- Bottom navigation bar with four main sections (Inicio, Horario, Progreso, Bienestar)
- Modal system for notifications, settings, and task management
- Interactive forms for task, event, person, and emotion management

## Application Features

**Main Sections:**
1. **Inicio (Home)**: Dashboard with welcome message, task statistics, quick actions, and scrollable cards for tasks, events, people, and emotions
2. **Horario (Schedule)**: Weekly class schedule showing all classes from Monday to Friday with times and locations
3. **Progreso (Progress)**: Academic progress tracker showing GPA (8.7), individual subject grades, and semester statistics
4. **Bienestar (Wellbeing)**: Social wellbeing section with emotion tracking form and relationship analysis tool

**Interactive Features:**
- Task management with priority levels and completion tracking
- Event scheduling with date and time
- People management with relationship categorization
- Emotion tracking linked to specific people
- Notifications modal showing pending tasks and upcoming events
- Settings modal with data management options
- Dynamic statistics and progress visualization

# External Dependencies

## CDN Resources

**Font Awesome 6.4.0**: Icon library loaded via CDN for UI icons
- Source: `cdnjs.cloudflare.com`
- Used for visual elements and navigation icons

**Google Fonts (Poppins)**: Web font with multiple weights (300, 400, 500, 600, 700)
- Provides consistent typography across the application
- Modern, readable sans-serif typeface

## NPM Packages

**Vite 5.4.8**: Build tool and development server
- Provides fast development server with HMR
- Handles module bundling for production
- Optimizes assets automatically

## Development Tools

**Configuration**: Standard Vite configuration with custom server settings
- Custom port (5000) for development
- Network-accessible server (`0.0.0.0` host)
- Configurable HMR for developer preference