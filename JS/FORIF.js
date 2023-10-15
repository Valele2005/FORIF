document.addEventListener("DOMContentLoaded", function () {
    const listaElement = document.getElementById("lista"); 
    const numElementos =10;
    for (let i=0; i< numElementos; i++){
        const li = document.createElement("li"); 
        li.textContent =`Elemento ${i + 1}`;

        if (i % 2 === 0){
            li.classList.add("par");
        }else {
            li.classList.add("impar");
        }
        listaElement.appendChild(li);
    }
} );