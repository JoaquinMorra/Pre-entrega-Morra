
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
let producto1 = {
    nombre: 'remera',
    precio: 4000
}
let producto2 = {
    nombre: 'pantalon',
    precio: 6000

}
// array de productos
let productos = [producto1,producto2]

// funcion para buscar productos por nombre
function buscarProductos (nombre) {
    for(let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == nombre){
            return productos[i]
        }
    }
    return null
}

// funcion para filtrar productos por precio menor  un valor dado
function filtrarProductos (precioMaximo) {
    let productosFiltrados = []
    for (let i = 0; i < productos.length; i++){
        if(productos[i].precio < precioMaximo){
            productosFiltrados.push(productos[i])
        }
    }
    return productosFiltrados
}

// Capturamos entrada del usuario
let nombreProducto = prompt('Ingrese el nombre del producto a buscar:')
let precioMaximo = prompt('Ingrese el precio maximo para filtrar productos:')

// buscar producto por nombre
let productoEncontrado = buscarProductos(nombreProducto)
if (productoEncontrado){
    console.log('Producto encontrado: ')
    console.log(productoEncontrado)
} else{
    console.log('Producto no encontrado')
}

// filtrar productos por precio maximo 
let productosFiltrados = filtrarProductos(parseFloat(precioMaximo))
console.log("Productos filtrados por precio maximo: ")
console.log(productosFiltrados)
