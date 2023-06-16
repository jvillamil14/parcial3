
let dulces = [
    {nombre: "Chocolates", sabor: "Amargo", Marca: "Negro", precio: 3500, cantidad: 12},
    {nombre: "Gomitas", sabor: "Acidas", Marca: "Verde,rojo y azul", precio: 2400, cantidad: 20},
    {nombre: "Mentas", sabor: "Menta", Marca: "Blanco", precio: 200, cantidad: 100},
    {nombre: "Paletas", sabor: "Fruta", Marca: "Arcoiris", precio: 3000, cantidad: 15},
    {nombre: "bombones", sabor:"fresa", Marca:"rojo", precio: 500, cantidad:50}

];
dulces.forEach(dulce => {
    console.log(`Nombre: ${dulce.nombre}, Sabor:${dulce.sabor} ,Marca: ${dulce.Marca}, Precio:${dulce.precio},  Cantidad:${dulce.cantidad}`);
});




