# Online Shop

Aplicación web para una tienda online. Para cada uno de los productos, se permite su inserción en el carro de la compra, así como la modificación de sus unidades, y acceder a la vista detalle.
Este proyecto ha sido desarrollado con React, diviéndolo en componentes para facilitar el reciclaje de código y con Firebase, para almacenar los datos de los productos.

EN PRODUCCIÓN: https://diegorosadoh-onlineshop.netlify.app
<hr>

## Funcionalidades generales
El usuario se puede mover entre vistas ('Products' y 'Cart') a través del menú de navegación o por medio de rutas en la URL. El carrito se guarda en el almacenamiento local del navegador.

## Añadir producto al carrito
Cada uno de los productos tiene asociado un botón bajo la imagen que añade una unidad de tal producto al carrito. Si ese producto ya se encontraba en el carrito, las unidades se incrementan en uno.

## Vista detalle
Al pulsar sobre el título de un producto, se muestra la descripción completa del artículo en una caja, a clickar sobre esta caja se vuelve a la vista sencilla del producto.

## Modificar unidades en el carrito
En la vista del carrito, para cada uno de los productos se disponen tres botones: uno para aumentar sus unidades, otro para reducirlas y un último para borrar el producto del carrito. Si solo hay una unidad de un producto en el carrito y se reducen sus unidades, el artículo es borrado del carrito.
