# Rick and Morty App


# Características

Búsqueda de personajes con filtros.

Uso de Material UI para la interfaz de usuario.

Paginación para navegar entre los personajes.

Manejo de errores y notificaciones con react-toastify.

Redirección a detalles de personajes.

# Lo que se facilitó

Integración con la API de Rick and Morty, ya que proporciona un endpoint bien documentado.

Uso de Material UI para los componentes, lo que permitió una interfaz visualmente atractiva y funcional sin necesidad de diseñar desde cero.

Manejo de estado con React y hooks como useState y useEffect para gestionar los datos y actualizaciones en la interfaz.

# Problemas encontrados y soluciones

1. La paginación no actualizaba correctamente la lista de personajes

Problema: Cuando se cambiaba de página, la consulta a la API no se actualizaba correctamente, ya que no se consideraban los filtros existentes.

Solución: Se incluyeron los filtros en la dependencia del useEffect, asegurando que cada cambio en la página o en los filtros desencadenara una nueva consulta a la API.

4. Mantener el estado de los filtros al redireccionar

Problema: Al seleccionar un personaje, ir a ver la vista detallada y volver; la lista de filtros se reseteaba .

Solución: Se Utilizo useContext para mantener el estado de los filtros de manera global entre los componentes.


# Tecnologías utilizadas

- React
- TypeScript
- Axios para las solicitudes HTTP
- Material UI para los componentes de la interfaz
- React Toastify para las notificaciones
- React Router para la navegación
- tailwind para estilos css
- context para el manejo de estados

