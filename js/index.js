var container = document.getElementById('container');
var imagemAnterior = document.getElementById('para_que_serve');

function trocarImagem(image) {
  var novaImagem = new Image();
  novaImagem.src = image;
  novaImagem.id = 'nova_imagem';
  novaImagem.style.transform = 'translateX(100%)';
  novaImagem.style.opacity = '0';
  container.appendChild(novaImagem);

  imagemAnterior.classList.add('slide-out');
  novaImagem.classList.add('slide-in');

  setTimeout(function() {
    container.removeChild(imagemAnterior);
    novaImagem.classList.remove('slide-in');
    novaImagem.style.transform = 'translateX(0)';
    novaImagem.style.opacity = '1';
    novaImagem.style.boxShadow = '31px 8px 26px rgba(0, 0, 0, 0.507)';
    novaImagem.style.borderRadius = '20px';
    imagemAnterior = novaImagem;
  }, 500); // Tempo de espera correspondente à duração da transição CSS (0.5s)
}

var manage_drivers = document.getElementById('manage_drivers');
var manage_routes = document.getElementById('manage_routes');
var load_management = document.getElementById('load_management');
var routes_simulator = document.getElementById('routes_simulator');
var transfer_management = document.getElementById('transfer_management');
var customer_management = document.getElementById('customer_management');
var redelivery_management = document.getElementById('redelivery_management');
var report_generator = document.getElementById('report_generator');

var section_functions = document.getElementById('functions')

section_functions.addEventListener("mouseleave", function(){
  trocarImagem('img/parceirao_icon.png')
});

manage_drivers.addEventListener('mouseover', function() {
  trocarImagem('img/motoristas.webp');
});

manage_drivers.addEventListener('mouseover', function() {
    trocarImagem('img/rotas.webp');
  });

load_management.addEventListener('mouseover', function() {
  trocarImagem('img/cargas.webp');
});

routes_simulator.addEventListener('mouseover', function() {
  trocarImagem('img/roteirizador.webp');
});

transfer_management.addEventListener('mouseover', function() {
  trocarImagem('img/transferencias.webp');
});

customer_management.addEventListener('mouseover', function() {
  trocarImagem('img/clientes.webp');
});

redelivery_management.addEventListener('mouseover', function() {
  trocarImagem('img/reentregas.webp');
});

report_generator.addEventListener('mouseover', function() {
  trocarImagem('img/relatorio.webp');
});
