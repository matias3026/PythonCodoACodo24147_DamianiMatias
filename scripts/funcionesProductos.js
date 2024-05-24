console.log("estoy online");

var contenedorTarjetas = document.getElementById("productos");

fetch('./scripts/baseDatos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Red no exitosa');
        }
        return response.json();
    })
    .then(datos => {
        datos.forEach(producto => {
            const carta = document.createElement('div');

            carta.innerHTML = `
                <img src="${producto.imagen}">
                <h4>${producto.nombre}</h4>
                <h5>Tipo: ${producto.tipo}</h5>
                <p>Descripción: ${producto.descripcion}</p>
                <p>$ ${producto.precio}</p>
                <button type="button" class="btn-azul">Comprar</button>
                `;

            contenedorTarjetas.append(carta);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });
