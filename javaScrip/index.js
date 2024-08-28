document.addEventListener("DOMContentLoaded", function () {
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
  
    const catalogoDiv = document.getElementById("catalogo");
  
    function mostrarCatalogo() {
        catalogoDiv.innerHTML = "";
        juegos.forEach(juego => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h5 class="card-title">${juego.nombre}</h5>
                <p class="card-text">Precio: $${juego.precio}</p>
                <button class="btn" onclick="agregarAlCarrito(${juego.id})">Agregar al Carrito</button>
            `;
            catalogoDiv.appendChild(card);
        });
    }
  
    mostrarCatalogo();
  });