
// Boton flotante en el footer

document.addEventListener('DOMContentLoaded', () => {

    // Obtener la imagen
    const imagenHero = document.querySelector('.hero');

    // Inicializar las variables
    let i = 0;
    let tiempo = 0;

    // Arreglo con imagenes de fondo
    const imagenes = ['arriba2.jpg', 'arriba.jpg'];

    // setTimeout -> tarda 3 seg y ejecuta la funcion
    // setInterval -> espera un rango de tiempo y vuelve a ejecutar la funcion
    setInterval( () => {
        imagenHero.style.backgroundPositionX = '-'+tiempo+'px';

        if(tiempo > 40){
            tiempo = 0;

            imagenHero.style.backgroundImage = "url(img/"+imagenes[i]+")";

            if(i === imagenes.length - 1){
                i=0;
            }else{
                i++;
            }
            console.log(imagenes[i]);
        }
        tiempo++;

        // console.log(tiempo);

    }, 100);

    // Boton flotante en el footer 
    const btnFlotante = document.querySelector('.btn-flotante');

    btnFlotante.addEventListener('click', (e) =>{
        e.preventDefault();

        // Prevenimos Default, pero ejecutamos el siguiente codigo
        const footer = document.querySelector('#footer');

        if(footer.classList.contains('activo')){
            // Si lo contiene, ejecuta este codigo
            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Moneda';
        }else{
            // Si NO lo contiene, ejecuta este codigo
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';
        }

    });
});
