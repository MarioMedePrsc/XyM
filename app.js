let btn = document.querySelector('#btnNo');
btn.addEventListener("mouseover", movimiento);

function movimiento(){
    if(btn.classList.contains('posicion1')){
        btn.classList.replace('posicion1', 'posicion2');
    }else if(btn.classList.contains('posicion2')){
        btn.classList.replace('posicion2', 'posicion3');
    }else if(btn.classList.contains('posicion3')){
        btn.classList.replace('posicion3', 'posicion4');
    }else if(btn.classList.contains('posicion4')){
        btn.classList.replace('posicion4', 'posicion1');
    }
}