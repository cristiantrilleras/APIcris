
        

function cambio() {
    const apiKey = 'T9d9c6de760d941f2b52f195f'; // Reemplaza con tu propia clave de API
    
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
    .then(response => response.json())
    .then(data => {
        // Aquí puedes realizar las operaciones de conversión de monedas o actualizar tu página con las tasas de cambio
      const tasasDeCambioElement = document.getElementById('tasas-de-cambio');
      
      // Recorremos las tasas de cambio y las mostramos en la página
      for (const moneda in data.conversion_rates) {
          const tasa = data.conversion_rates[moneda];
          const tasaFormatted = tasa.toFixed(2); // Formateamos la tasa a 2 decimales
          const tasaHTML = `<p>1 USD = ${tasaFormatted} ${moneda}</p>`;
          tasasDeCambioElement.innerHTML += tasaHTML;
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });
    
}
    