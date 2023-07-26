
// -------------- ALGORITMO CON CONDICIONAL -------------------
// let ingresarNombre = prompt('Ingresar nombre: ')
// let ingresarApellido = prompt('Ingresar apellido ')

// if (ingresarNombre !== '' && ingresarApellido !== '') {
//     alert('Bienvenido a Morras Seguros ' + ingresarNombre + '' + ingresarApellido)
// }else{
//     alert('Ingrese los datos solicitados')
// }


// ---------------------ALGORITMO CON CICLO------------------

// let ingresarApellido = prompt('Ingresar apellido para solicitar turno ')
// for (let i = 1; i < 10; i++) {
//     let turno = ingresarApellido + '' + i
//     alert(turno)
// }

// ---- PRE ENTREGA 2 ----
// let producto1 = {
//     nombre: 'remera',
//     precio: 4000
// }
// let producto2 = {
//     nombre: 'pantalon',
//     precio: 6000

// }
// // array de productos
// let productos = [producto1,producto2]

// // funcion para buscar productos por nombre
// function buscarProductos (nombre) {
//     for(let i = 0; i < productos.length; i++) {
//         if (productos[i].nombre == nombre){
//             return productos[i]
//         }
//     }
//     return null
// }

// // funcion para filtrar productos por precio menor  un valor dado
// function filtrarProductos (precioMaximo) {
//     let productosFiltrados = []
//     for (let i = 0; i < productos.length; i++){
//         if(productos[i].precio < precioMaximo){
//             productosFiltrados.push(productos[i])
//         }
//     }
//     return productosFiltrados
// }

// // Capturamos entrada del usuario
// let nombreProducto = prompt('Ingrese el nombre del producto a buscar:')
// let precioMaximo = prompt('Ingrese el precio maximo para filtrar productos:')

// // buscar producto por nombre
// let productoEncontrado = buscarProductos(nombreProducto)
// if (productoEncontrado){
//     console.log('Producto encontrado: ')
//     console.log(productoEncontrado)
// } else{
//     console.log('Producto no encontrado')
// }

// // filtrar productos por precio maximo 
// let productosFiltrados = filtrarProductos(parseFloat(precioMaximo))
// console.log("Productos filtrados por precio maximo: ")
// console.log(productosFiltrados)


// ------- PRE ENTREGA 3 --------
let producto1 = {
    nombre: 'remera',
    precio: 4000
    }
  
let producto2 = {
    nombre: 'pantalon',
    precio: 6000
    }

// Array de productos
let productos = [producto1, producto2]

// Función para buscar un producto por nombre
function buscarProducto() {
    let nombreProducto = document.getElementById('nombreProducto').value;
    let productoEncontrado = buscarProductos(nombreProducto)
    let resultadoBusqueda

    if (productoEncontrado) {
        let resultadoBusqueda = `
            <h3>Producto Encontrado:</h3>
            <p>Nombre: ${productoEncontrado.nombre}</p>
            <p>Precio: $${productoEncontrado.precio}</p>
        `
        } else {
        resultadoBusqueda = '<p>Producto no encontrado.</p>'
        }
    document.getElementById('productoEncontrado').innerHTML = resultadoBusqueda;
}

// Función para filtrar productos por precio máximo
function filtrarProductos() {
    let precioMaximo = parseFloat(document.getElementById('precioMaximo').value);
    let productosFiltrados = filtrarProductosPorPrecio(precioMaximo);
    let resultadoFiltrado
    if (productosFiltrados.length > 0) {
        let resultadoFiltrado = '<h3>Productos Filtrados:</h3>';
        for (let i = 0; i < productosFiltrados.length; i++) {
        resultadoFiltrado += `
            <p>Nombre: ${productosFiltrados[i].nombre}</p>
            <p>Precio: $${productosFiltrados[i].precio}</p>
        `
        }
    } else {
        resultadoFiltrado = '<p>No hay productos que cumplan el filtro.</p>'
    }
  
    document.getElementById('productosFiltrados').innerHTML = resultadoFiltrado
}

// Función para buscar un producto por nombre
function buscarProductos(nombre) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre === nombre) {
            return productos[i];
        }
    }
    return null;
}

// Función para filtrar productos por precio máximo
function filtrarProductosPorPrecio(precioMaximo) {
    let productosFiltrados = [];
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].precio < precioMaximo) {
            productosFiltrados.push(productos[i]);
        }
    }
    return productosFiltrados;
}


