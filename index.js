// Datos ficticios para los gráficos
let datos = []
const barChartData = {
    labels: ['Eólica','Hidroeléctrica', 'Solar','Geotérmica'],
    datasets: [{
      label: 'Producción (GWh)',
      data: datos,
      backgroundColor: ['#4caf50', '#ffeb3b', '#2196f3', '#9c27b0'],
    }]
  };
  
  const pieChartData = {
    labels: ['Eólica','Hidroeléctrica', 'Solar','Geotérmica'],
    datasets: [{
      data: datos,
      backgroundColor: ['#4caf50', '#ffeb3b', '#2196f3','#9c27b0'],
    }]
  };
  
  const lineChartData = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'Capacidad Eólica',
      data: [200, 250, 300, 350, 400],
      borderColor: '#4caf50',
      fill: false,
    }, {
      label: 'Capacidad Solar',
      data: [100, 120, 150, 180, 210],
      borderColor: '#ffeb3b',
      fill: false,
    }, {
      label: 'Capacidad Hidroeléctrica',
      data: [300, 310, 320, 330, 350],
      borderColor: '#2196f3',
      fill: false,
    }]
  };
  
  // Inicializar gráficos
  function renderCharts() {
    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
      type: 'bar',
      data: barChartData,
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
      },
    });
  
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, {
      type: 'pie',
      data: pieChartData,
      options: {
        responsive: true,
      },
    });
  
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    new Chart(lineCtx, {
      type: 'line',
      data: lineChartData,
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
      },
    });
  }

 
  const boton = document.getElementById('btn-calcular');
  const contenedor = document.getElementById('container');
  const capacidadesRenovables = {
    'Eólica': 10,
    'Hidroeléctrica': 20,
    'Solar': 5,
    'Geotérmica': 15
  };
  
  
  boton.addEventListener('click',()=>{
    const formulario = parseFloat(document.getElementById('consumoElectrico').value);
    let capacidadInstalada = 0;
    datos.splice(0, datos.length)
      for (let fuente in capacidadesRenovables) {
        capacidadInstalada += capacidadesRenovables[fuente]
        datos.push((capacidadInstalada / formulario) * 100)
       
      }
     
      datos.forEach((item

      )=>{
        contenedor.innerHTML += `<li>${item}</li>`
        
      }) 
      
      renderCharts()
      
  })
 
 // barChartData.data.datasets[0].data = datos;
  //barChartData.update()
  // Renderizar gráficos al cargar la página
 // document.addEventListener('DOMContentLoaded', renderCharts);
  