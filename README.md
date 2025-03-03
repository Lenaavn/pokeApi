# 📖 PokeAPI: ¡Atrápalos a Todos! 🐾

Bienvenido a PokeAPI 🌟 Este proyecto te permite explorar tus Pokémon favoritos de forma interactiva, con una interfaz moderna y fluida. 🚀

🎯 Características

- 🗂️ Lista de Pokémon: Explora un listado completo de Pokémon con detalles esenciales.

- 🔍 Búsqueda: Encuentra rápidamente el Pokémon que buscas ingresando su nombre.

- 🔄 Paginación: Navega entre cientos de Pokémon de manera sencilla y organizada.

- 🖼️ Imágenes: Visualiza imágenes oficiales de cada Pokémon.

- ⚡ Detalles: Haz clic sobre un Pokémon para descubrir más sobre él.

---

🛠️ Requisitos

Antes de empezar, asegúrate de contar con lo siguiente:

- Node.js (versión 14 o superior).

- Angular CLI (si usas Angular como framework).

- Conexión a internet para consumir datos de la PokeAPI.

---

🚀 Cómo Ejecutar

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

```bash
# Clonar el repositorio
git clone https://github.com/Lenaavn/pokeApi
cd pokeapi

# Instalar dependencias
npm install

# Iniciar el servidor
ng serve

Luego, abre tu navegador en http://localhost:4200.
```
---

📂 Estructura del Proyecto

```bash
pokeApiLeandro/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizables de tu app
│   │   │   ├── header/          # Encabezado de la aplicación
│   │   │   ├── footer/          # Pie de página de la aplicación
│   │   │   ├── poke-list/       # Componente para listar Pokémon
│   │   │   ├── poke-detail/     # Componente para mostrar detalles de un Pokémon
│   │   ├── services/            # Servicios para manejar lógica y APIs
│   │   │   ├── pokemon.service.ts # Servicio para consumir la PokeAPI
│   │   ├── shared/              # Elementos compartidos como modelos y utilidades
│   │   │   ├── models/          # Interfaces y modelos de datos
│   │   │   │   ├── pokemon.model.ts # Modelo de datos para un Pokémon
│   │   │   ├── utilities/       # Funciones reutilizables
│   │   ├── app-routing.module.ts # Configuración de rutas
│   │   ├── app.component.css     # Estilos globales de la aplicación
│   │   ├── app.component.html    # Plantilla principal
│   │   ├── app.component.ts      # Lógica principal de la app
│   │   ├── app.module.ts         # Configuración del módulo principal
│   ├── assets/                   # Recursos estáticos como imágenes y estilos
│   ├── environments/             # Configuraciones de entorno (dev, prod)
│   │   ├── environment.ts        # Configuración para desarrollo
│   │   ├── environment.prod.ts   # Configuración para producción
│   ├── styles.css                # Estilos globales para toda la app
├── .gitignore                    # Archivos a ignorar por Git
├── angular.json                  # Configuración principal de Angular
├── package.json                  # Dependencias y scripts del proyecto
└── README.md
```
---

🔧 Tecnologías Usadas

- 🌟 Framework: Angular

- 💾 API REST: PokeAPI para obtener datos en tiempo real.

- 🎨 Estilos: CSS y Angular Material para un diseño visualmente atractivo.

- 🌐 Uso de la PokeAPI

---

El proyecto se conecta a la API REST pública de PokeAPI para obtener datos de los Pokémon. Ejemplo de consumo usando HttpClient de Angular:

environments

```bash
export const environment = {
    production: false,
    baseUrl: 'https://pokeapi.co/api/v2'
};
```
---

💡 Posibles Mejoras

- ⭐ Filtros avanzados por tipo de Pokémon (agua, fuego, eléctrico, etc.).

- ⭐ Agregar funcionalidad para marcar Pokémon como favoritos.

- ⭐ Animaciones adicionales para una experiencia más inmersiva.

---

🧙‍♂️ Autor

Desarrollado con ❤️ por Leandro Ant. Vidal Núñez. ¡Espero que disfrutes explorando el mundo de los Pokémon tanto como yo disfruté creando esta aplicación! 😊
