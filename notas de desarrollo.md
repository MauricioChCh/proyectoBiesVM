npm init -y (iniciamos el npm que genera un json)
![[notas de desarrollo-1725845520222.jpeg]]
El comando `npm init -y` se utiliza para crear un archivo `package.json` en un proyecto Node.js de manera automática, sin necesidad de responder a las preguntas del asistente interactivo. Al usar el parámetro `-y`, se generan los valores por defecto para el archivo `package.json`

[process.argv](https://nodejs.org/docs/latest/api/process.html) es una propiedad de node que permite introducir una linea de arrays como parametro 

[[biesVM.js]] 

*Formas de probar*
1- `node biesVM.js prueba.basm`
2- Se puede hacer ejecutable en linux con:
	teniendo esto en el script: `node biesVM.js prueba.basm`
	dandonde lpermiso de ejecucion `chmod +x biesVM.js`
	ejecutando: `./biesVM.js prueba.basm`
3- Dentro de la carpeta instalarlo globalmente `npm install -g .`
	ya con eso `biesVM prueba.basm`


tambien se puede usar `sudo npm link` para linkear de manera global el proyecto a la pc
y apartir de ahi se puede usar biesVM como comando 

*Comandos*
```
sudo npm link
```
para likear todo yt que se pueda usar ciertas cosas 
Esto crea un enlace simbólico global al comando `biesVM`. Ahora puedes usar `biesVM` en cualquier lugar de tu sistema. en