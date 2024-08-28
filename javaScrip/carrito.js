document.addEventListener("DOMContentLoaded", function () {
    
    let carrito = cargarDesdeLocalStorage("carrito") || [];

    let juegos = [
        { id: 1, nombre: "Tekken 8 Deluxe", precio: 100000 },
        { id: 2, nombre: "Hogwarts Legacy", precio: 80000 },
        { id: 3, nombre: "It Takes Two", precio: 30000 },
        { id: 4, nombre: "Final Fantasy 7 Remake", precio: 85000 },
        { id: 5, nombre: "A Plague Tale: Innocence", precio: 52000 },
        { id: 6, nombre: "Hollow Knight", precio: 25000 },
        { id: 7, nombre: "Kingdom Hearts 3", precio: 20000 },
        { id: 8, nombre: "No Man's Sky", precio: 37000 },
        { id: 9, nombre: "Metal Gear Solid V: The Phantom Pain", precio: 56000 },
        { id: 10, nombre: "La Tierra-Media: Sombras de Mordor", precio: 40000 },
        { id: 11, nombre: "Batman: Arkham Collection", precio: 70000 },
        { id: 12, nombre: "Assassin's Creed III - Secretos Escondidos", precio: 15000 }
    ];

    const carritoDiv = document.getElementById("carrito-items");
    const btnFinalizarCompra = document.getElementById("finalizar-compra");

    function mostrarCarrito() {
        carritoDiv.innerHTML = "";
        if (carrito.length === 0) {
            carritoDiv.innerHTML = "<p>No hay juegos en el carrito.</p>";
            btnFinalizarCompra.style.display = "none";
        } else {
            carrito.forEach((juego, index) => {
                const itemDiv = document.createElement("div");
                itemDiv.className = "card";
                itemDiv.innerHTML = `
                    <h5 class="card-title">${juego.nombre}</h5>
                    <p class="card-text">Precio: $${juego.precio}</p>
                    <button class="btn btn-danger" onclick="eliminarDelCarrito(${index})">Eliminar</button>
                `;
                carritoDiv.appendChild(itemDiv);
            });
            btnFinalizarCompra.style.display = "block";
        }
    }

    function eliminarDelCarrito(index) {
        carrito.splice(index, 1);
        guardarEnLocalStorage("carrito", carrito);
        mostrarCarrito();
    }

    function finalizarCompra() {
        let total = carrito.reduce((acc, juego) => acc + juego.precio, 0);
        carritoDiv.innerHTML = `<p>Total a pagar: $${total}</p><p>¡Gracias por tu compra!</p>`;
        carrito = [];
        guardarEnLocalStorage("carrito", carrito);
        btnFinalizarCompra.style.display = "none";
    }

    function guardarEnLocalStorage(clave, valor) {
        localStorage.setItem(clave, JSON.stringify(valor));
    }

    function cargarDesdeLocalStorage(clave) {
        return JSON.parse(localStorage.getItem(clave));
    }

    mostrarCarrito();

    btnFinalizarCompra.addEventListener("click", finalizarCompra);

    window.eliminarDelCarrito = eliminarDelCarrito;

    
    window.agregarAlCarrito = function(juegoId) {
        const juego = juegos.find(j => j.id === juegoId);
        if (juego) {
            carrito.push(juego);
            guardarEnLocalStorage("carrito", carrito);
            mostrarCarrito();
        }
    };
});
