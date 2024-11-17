// runTests.js
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { exec } from 'child_process';
import chalk from 'chalk';

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directorio de pruebas
const testDirectory = path.join(__dirname, '../battery');

fs.readdir(testDirectory, (err, files) => {
  if (err)
    throw err;

  // Filtra solo archivos .basm
  const basmFiles = files.filter(file => file.trim().endsWith('.bies'));

  // Función recursiva para ejecutar archivos en orden
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