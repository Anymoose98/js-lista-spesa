let lista_spesa = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

let lista = document.getElementById("lista")

let i = 0
while (i < lista_spesa.length) {
    const li = document.createElement("li");
    
    li.innerText = lista_spesa[i]
    
    lista.appendChild(li);

    i++
}