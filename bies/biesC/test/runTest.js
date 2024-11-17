// runTests.js
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { exec } from 'child_process';
import chalk from 'chalk';

/**
 * Script para ejecutar pruebas en archivos .bies dentro del directorio de pruebas.
 * Este script ejecuta cada archivo .bies en el orden que se encuentra en el directorio `battery` y
 * muestra el resultado en la consola. Usa `exec` para correr el script `biesC.js` con cada archivo .bies.
 *
 * @version 1.0.0
 * 
 * @author
 * - Joshua Yarit Amador Lara
 * - Mauricio Chaves Chaves [Coordinador]
 * - Fabiola Rojas Alvarado
 * - Eddy Villarreal Muñoz
 */

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directorio de pruebas
const testDirectory = path.join(__dirname, '../battery');

/**
 * Lee el directorio de pruebas y ejecuta los archivos .bies secuencialmente.
 */
fs.readdir(testDirectory, (err, files) => {
  if (err) throw err;

  // Filtra solo archivos .bies
  const basmFiles = files.filter(file => file.trim().endsWith('.bies'));

  /**
   * Ejecuta un archivo de prueba .bies y llama recursivamente a sí mismo para ejecutar el siguiente.
   * @param {number} index - Índice del archivo actual en la lista de archivos .bies.
   */
  const runFile = (index) => {
    if (index >= basmFiles.length) return;

    const file = basmFiles[index];
    const filePath = path.join(testDirectory, file);
    console.log(chalk.yellow(`Ejecutando test para: ${filePath}`));

    exec(`node src/biesC.js battery/${file}`, (err, stdout, stderr) => {
      if (err) {
        console.error(chalk.red(`Error en ${file}:`), stderr);
      } else {
        console.log(chalk.green(`Resultado de ${file}:\n`), stdout);
      }
      // Ejecutar el siguiente archivo
      runFile(index + 1);
    });
  };

  // Iniciar la ejecución con el primer archivo
  runFile(0);
});
