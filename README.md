# api-rest-producto

las caracteristicas que hacen que esto sea una API REST es que usa HTTP y sus metodos estandar (GEST, POST, PUT, DELETE), URLs claras, formato JSON, y es stateless.

En este diseño podemos observar :
- interaccion: Solicitudes HTTP
- salida: JSON
- cliente: puede ser cualquier cliente (navegador, app movil, otro servidor)
- enfoque: expone solo los datos
- flexibilidad: multicliente (web, escritorio, movil)

mientras que en la arquitectura de 3 capas:
- interaccion: formularios web, interfaces graficas
- salida: html o vista renderizada
- cliente: navegador accediendo a pagina
- enfoque: contruir una aplicacion completa (frontend + backend)
- flexibilidad: limitado a un tipo de cliente
