# Consumo de dos API's( JSONPlaceholder y Rest countries)

Por medio de JavaScript con función fetch

JSONPlaceholder es una API REST en línea gratuita que puede utilizar siempre que necesite datos falsos.

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
```

Rest countries - Obtenga información sobre países a través de una API RESTful

El proyecto restcountries ha sido adquirido por apilayer, uno de los principales proveedores de microservicios API. Proporcionándola como una solución gratuita para los desarrolladores.

```javascript
fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(json => console.log(json))
```
