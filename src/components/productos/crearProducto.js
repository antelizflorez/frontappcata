import '../../css/index.css'

const crearProducto = () => {


            const contenedorTarjetas = document.getElementById("productos-container");


            function crearTarjetasProductosInicio(productos){
            productos.forEach(producto => {
                const nuevoProducto = document.createElement("div");
                nuevoProducto.classList = "tarjeta-producto"
                nuevoProducto.innerHTML = `
                <img src="./img/productos/${producto.id}.jpg" alt="ropa 1">
                <h3>${producto.nombre}</h3>
                <p class="precio">$${producto.precio}</p>
                <button>Agregar al carrito</button>`
                contenedorTarjetas.appendChild(nuevoProducto);
                nuevoProducto.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
            });
            }

            crearTarjetasProductosInicio(productoRopa);


}

export { crearProducto }