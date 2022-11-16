const productos = [{
   nombre: "anillo",
   precio: 1500
 },
 {
  nombre: "collares",
  precio : 6500
 },
 {
  nombre:"pulseras",
  precio: 4000
 }
]

const carrito = [];

// se solicita nombre y se agrega al carrito
var elegirProducto
while (elegirProducto != "listo" ) {
    elegirProducto = prompt("ingrese el nombre que quieres comprar "+
    "\n -collares 6.500"+"\n -pulseras 4000"+"\n -anillo 1500"+"\n" +
    "ingrese listo para finalizar");

    if (elegirProducto == "listo"){
        alert ("gracias por su compra")
    break;

    }else {
    let buscar= productos.find(x => x.nombre === elegirProducto);
    alert ( "se agrego al carrito " + buscar.nombre + " " + buscar.precio);
    carrito.push(buscar);

    }

}
for (const producto of carrito) {
    console.log ( "\n" + producto.nombre + " " + producto.precio + "\n");
     
   }













