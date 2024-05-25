console.log("Estoy online");

var $contenedorTarjetas = document.getElementById("productos");
var $checks = document.querySelectorAll('input[type="checkbox"]');
var $radios = document.querySelectorAll('input[type="radio"]');
var $inputBuscar = document.getElementById('buscar');

// Función para mostrar los productos en el HTML
function mostrarProductos(productos) {
    $contenedorTarjetas.innerHTML = ''; // Limpiar el contenedor

    productos.forEach(producto => {
        const carta = document.createElement('div');

        carta.innerHTML = `
            <img src="${producto.imagen}">
            <h4>${producto.nombre}</h4>
            <h5>Tipo: ${producto.tipo}</h5>
            <p>Descripción: ${producto.descripcion}</p>
            <p>$ ${producto.precio}</p>
            <button type="button" class="btn-azul">Comprar</button>
        `;

        $contenedorTarjetas.append(carta);
    });
}

// Función para filtrar los productos por tipo
function filtrarPorTipo(productos) {
    const tiposSeleccionados = Array.from($checks)
        .filter(check => check.checked)
        .map(check => check.value);

    if (tiposSeleccionados.length === 0) {
        // Si no hay ningún checkbox seleccionado, retornar todos los productos
        return productos;
    }

    return productos.filter(producto => tiposSeleccionados.includes(producto.tipo));
}

// Función para filtrar los productos por nombre
function filtrarPorNombre(productos) {
    const textoBuscar = $inputBuscar.value.trim().toLowerCase();

    if (textoBuscar === '') {
        // Si el campo de búsqueda está vacío, retornar todos los productos
        return productos;
    }

    return productos.filter(producto => producto.nombre.toLowerCase().includes(textoBuscar));
}

// Función para ordenar los productos por precio (de menor a mayor)
function ordenarPorPrecioMenor(productos) {
    return productos.slice().sort((a, b) => a.precio - b.precio);
}

// Función para ordenar los productos por precio (de mayor a menor)
function ordenarPorPrecioMayor(productos) {
    return productos.slice().sort((a, b) => b.precio - a.precio);
}

// Función para aplicar filtros y ordenamientos y mostrar los productos resultantes
function actualizarProductos() {
    let productosFiltrados = productosBase.slice(); // Hacer una copia del arreglo base

    // Aplicar filtros
    productosFiltrados = filtrarPorTipo(productosFiltrados);
    productosFiltrados = filtrarPorNombre(productosFiltrados);

    // Aplicar ordenamiento según el radio button seleccionado
    const ordenSeleccionado = document.querySelector('input[name="ordenar"]:checked');
    if (ordenSeleccionado) {
        const valorOrden = ordenSeleccionado.value;
        if (valorOrden === "menor-mayor") {
            productosFiltrados = ordenarPorPrecioMenor(productosFiltrados);
        } else if (valorOrden === "mayor-mayor") {
            productosFiltrados = ordenarPorPrecioMayor(productosFiltrados);
        }
    }

    // Mostrar los productos actualizados
    mostrarProductos(productosFiltrados);
}

// Mostrar todos los productos al cargar la página
actualizarProductos();

// Agregar eventos a los checkboxes, radios y al input de búsqueda
$checks.forEach(check => {
    check.addEventListener('change', actualizarProductos);
});

$radios.forEach(radio => {
    radio.addEventListener('change', actualizarProductos);
});

$inputBuscar.addEventListener('input', actualizarProductos);





// var urlAPI = './scripts/baseDatos.json';

// async function obtenerProductos() {
//     try {
//         let response = await fetch(urlAPI);
//         let dataAPI = await response.json();

//         for (let item of dataAPI) {
//             productos.push(item);
//         }

//         console.log(productos); // Para verificar que los productos se cargaron correctamente
//     } catch (error) {
//         console.error("Error al obtener los productos:", error);
//     }
// }

// // Llamada a la función para obtener los productos
// obtenerProductos();

// productos.forEach(element => {
//     if (element.nombre == "Disco Duro Externo 1TB"){
//         console.log(element);
//     }
//     else{
//         console.log('gilmes');
//     }
    

    
// });










// fetch('./scripts/baseDatos.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Red no exitosa');
//         }
//         return response.json();
//     })
//     .then(datos => {
//         productos = datos ;
//         console.log(productos);  
        

        






//     });


    // .catch(error => {
    //     console.error('Error al obtener los datos:', error);
    // });


//----------comentado--

// datos.forEach(producto => {
//     const carta = document.createElement('div');

//     carta.innerHTML = `
//         <img src="${producto.imagen}">
//         <h4>${producto.nombre}</h4>
//         <h5>Tipo: ${producto.tipo}</h5>
//         <p>Descripción: ${producto.descripcion}</p>
//         <p>$ ${producto.precio}</p>
//         <button type="button" class="btn-azul">Comprar</button>
//         `;

//     $contenedorTarjetas.append(carta);
// });