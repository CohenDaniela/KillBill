# Kill Bill Death List App

Este proyecto full-stack es una aplicación basada en la película "Kill Bill". La aplicación presenta dos listas principales: la "Death List Five", que son los cinco personajes que la protagonista debe eliminar, y una lista completa de todos los personajes de la película. Además, los usuarios tienen la capacidad de marcar personajes como favoritos.

## Características Principales

- **Death List Five:** En la sección de "Death List Five", los usuarios pueden ver los cinco personajes que la protagonista de Kill Bill tiene como objetivo eliminar. Pueden tachar los personajes a medida que avanzan en la película.

- **Lista Completa de Personajes:** La aplicación muestra una lista completa de todos los personajes de Kill Bill. Los usuarios pueden explorar estos personajes y acceder a detalles específicos haciendo clic en cada uno.

- **Favoritos:** Los usuarios pueden marcar personajes como favoritos. Estos personajes favoritos se pueden visualizar en una sección dedicada.

## Funcionalidades

### Death List Five

- Tachar Personajes: Los usuarios pueden tachar los personajes de la "Death List Five" a medida que avanzan en la película.

### Lista Completa de Personajes

- Detalles del Personaje: Al hacer clic en un personaje, los usuarios pueden ver detalles específicos, como su nombre, alias, ocupación, armas, afiliación, edad y lugar de nacimiento.

### Favoritos

- Marcar y Desmarcar: Los usuarios pueden marcar personajes como favoritos y quitarlos de la lista de favoritos.

- Ver Favoritos: Hay una sección dedicada donde los usuarios pueden ver todos los personajes marcados como favoritos.

- Eliminar Favoritos: Los usuarios tienen la opción de eliminar personajes individuales de la lista de favoritos.

## Tecnologías Utilizadas

- **Frontend:** La aplicación utiliza React para el desarrollo del frontend. Se ha implementado React Router para la navegación entre las diferentes secciones.

- **Backend:** La lógica del servidor se ejecuta en Node.js utilizando Express como framework. La base de datos MySQL se utiliza para almacenar la información sobre los personajes.

- **Base de Datos:** La base de datos MySQL almacena información sobre los personajes, incluidos sus nombres, alias, ocupación, armas, afiliación, edad, lugar de nacimiento y categoría.

- **Gestión de Estado:** Se utiliza el estado local para rastrear los personajes, la "Death List Five" tachada y la lista de favoritos.

- **Estilo:** Se ha implementado un estilo básico con archivos Sass para mejorar la presentación y la experiencia del usuario.

- **API:** Se ha creado una API REST para proporcionar datos sobre los personajes y gestionar la interacción del usuario.

## Instrucciones de Ejecución

1. **Clonar el Repositorio:** `git clone <URL del repositorio>`
2. **Instalar Dependencias:** `npm install` tanto en el directorio raíz como en el directorio `client`.
3. **Configurar la Base de Datos:** Configurar las variables de entorno en un archivo `.env` para la conexión a la base de datos MySQL.
4. **Iniciar el Servidor:** Ejecutar `npm start` en el directorio raíz.
5. **Iniciar la Aplicación Frontend:** En el directorio `client`, ejecutar `npm start`.

## Notas Adicionales

- **LocalStorage:** Se ha utilizado LocalStorage para almacenar datos locales, como los personajes marcados como favoritos y los elementos tachados en la "Death List Five".

- **Landing Page:** La página de inicio presenta enlaces a las secciones principales de la aplicación.

- **Imágenes:** Las imágenes de los personajes se cargan desde el servidor y se presentan en la interfaz de usuario.

---

¡Disfruta explorando la aplicación de Kill Bill Death List!
