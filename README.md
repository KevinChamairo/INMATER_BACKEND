# INMATER_BACKEND
-----------------------------------------------------------------------------------------------
_VERSION NODE: 21.7.3
-----------------------------------------------------------------------------------------------
_COMANDOS USADOS: npm init -y --> Utilizado para crear el archivo package.json
-----------------------------------------------------------------------------------------------
_COMANDO: npm i typescript -D --> Comando para instalar typescript como dependencia de desarrollo, solo trabajará como typescript en desarrollo, en producción ya sería en JavaScript.
_COMANDO: npx tsc --init --> Con este comando se puede crear un archivo de configuración de typescript, este archivo "tsconfig.js" es para decirle al typescript en qué entorno se va a compilar, es decir como js puede ser utilizado en el navegador y en el servidor, e incluso en otros entornos, este archivo servirá para decirle al typescript donde lo pones a correr.
_"rootDir": "./src" --> archivo de origen
_"outDir": "./dist" --> archivo de salida
-----------------------------------------------------------------------------------------------
_COMANDO: npx tsc --> Ejecuta el compilador sin instalarlo globalmente (sacóla carpeta dist)
-----------------------------------------------------------------------------------------------
_INSTALACIÓN DE DEPENDENCIAS:
_COMANDO: npm i express --> utilizaremos este framework de node.js para crear servidores y aplicaciones web.Es la opción más popular para construir APIs y backend con Node.js.
_COMANDO: npm i pg --> comando para poder comunicarnos con PostgreSQL
_COMANDO: npm i @types/express -D --> Instalar los tipos datos de express para Typescript
-----------------------------------------------------------------------------------------------
_Configuración del package.json:

{
  "name": "BACKEND_INMATER",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "concurrently \"tsc --watch\" \"nodemon dist/index.js\"",
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^5.0.0",
    "@types/pg": "^8.11.11",
    "concurrently": "^9.1.2",
    "nodemon": "^3.1.9",
    "typescript": "^5.7.3"
  },
  "dependencies": {
    "express": "^4.21.2",
    "pg": "^8.13.3"
  }
}

_Configuración utilizada para poder utilizar el comando: NPM RUN BUILD para construir el js.
_Configuración utilizada para poder utilizar el comando: NPM RUN DEV para correr el backend.
-----------------------------------------------------------------------------------------------
_npm i nodemon -D --> Comando para poder reiniciar el servidor cada vez que yo cambio código.
-----------------------------------------------------------------------------------------------
_npm i concurrently -D --> Comando para unir NPM RUN BUILD y NPM RUN DEV
-----------------------------------------------------------------------------------------------
_psql -U postgres --> Para trabajar en la terminal y poner los scripts correspondientes para con Postgres con el sistema operativo de Windows.