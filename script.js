// ---- Funcionalidad 1: Calcular Promedio de Notas ----
function agregarNota() {
    const notaDiv = document.createElement('div');
    notaDiv.classList.add('nota');
  
    notaDiv.innerHTML = `
      <input type="number" placeholder="Nota (0-5)" class="nota-input" min="0" max="5" step="0.1">
      <input type="number" placeholder="Porcentaje (%)" class="porcentaje-input" min="0" max="100" step="1">
      <button onclick="eliminarNota(this)">❌</button>
    `;
  
    document.getElementById('notas-container').appendChild(notaDiv);
  }
  
  function eliminarNota(boton) {
    boton.parentElement.remove();
  }
  
  function calcularPromedio() {
    const notas = document.querySelectorAll('.nota-input');
    const porcentajes = document.querySelectorAll('.porcentaje-input');
    let sumaPonderada = 0;
    let sumaPorcentajes = 0;
  
    notas.forEach((nota, index) => {
      const valorNota = parseFloat(nota.value) || 0;
      const valorPorcentaje = parseFloat(porcentajes[index].value) || 0;
  
      sumaPonderada += valorNota * (valorPorcentaje / 100);
      sumaPorcentajes += valorPorcentaje;
    });
  
    const resultadoDiv = document.getElementById('resultado');
    if (sumaPorcentajes !== 100) {
      resultadoDiv.textContent = "La suma de los porcentajes debe ser igual a 100%.";
      resultadoDiv.style.color = "red";
    } else {
      resultadoDiv.textContent = `Tu promedio final es: ${sumaPonderada.toFixed(2)}`;
      resultadoDiv.style.color = "green";
    }
  }
  
  // ---- Funcionalidad 2: Calcular Promedio del Semestre ----
  function agregarMateria() {
    const materiaDiv = document.createElement('div');
    materiaDiv.classList.add('nota');
  
    materiaDiv.innerHTML = `
      <input type="number" placeholder="Promedio de Materia (0-5)" class="materia-input" min="0" max="5" step="0.1">
      <input type="number" placeholder="Créditos" class="creditos-input" min="1" step="1">
      <button onclick="eliminarNota(this)">❌</button>
    `;
  
    document.getElementById('semestre-container').appendChild(materiaDiv);
  }
  
  function calcularPromedioSemestre() {
    const materias = document.querySelectorAll('.materia-input');
    const creditos = document.querySelectorAll('.creditos-input');
    let sumaPonderada = 0;
    let sumaCreditos = 0;
  
    materias.forEach((materia, index) => {
      const valorMateria = parseFloat(materia.value) || 0;
      const valorCredito = parseInt(creditos[index].value) || 0;
  
      sumaPonderada += valorMateria * valorCredito;
      sumaCreditos += valorCredito;
    });
  
    const resultadoDiv = document.getElementById('resultado-semestre');
    if (sumaCreditos === 0) {
      resultadoDiv.textContent = "Debes ingresar al menos una materia con créditos válidos.";
      resultadoDiv.style.color = "red";
    } else {
      const promedioFinal = sumaPonderada / sumaCreditos;
      resultadoDiv.textContent = `Tu promedio del semestre es: ${promedioFinal.toFixed(2)}`;
      resultadoDiv.style.color = "green";
    }
  }
  