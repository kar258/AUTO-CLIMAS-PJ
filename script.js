// FORMULARIO A WHATSAPP
document.getElementById('formulario').addEventListener('submit', function(e){
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;

    let texto = `Hola, quiero una cotización para mi auto clima.%0A
Nombre: ${nombre}%0A
Teléfono: ${telefono}%0A
Problema: ${mensaje}`;

    let numero = "529932883031"; // ← NÚMERO

    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
});

// CAMBIO DE TEMA
const btnTema = document.getElementById('temaBtn');
const body = document.body;
const icono = btnTema.querySelector('i');

btnTema.addEventListener('click', () => {
    body.classList.toggle('dark');

    if(body.classList.contains('dark')){
        icono.classList.remove('fa-moon');
        icono.classList.add('fa-sun');
    }else{
        icono.classList.remove('fa-sun');
        icono.classList.add('fa-moon');
    }
});
