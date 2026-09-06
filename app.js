const inventario = [
    // PROMOS
    
    { 
        id: 201,
        nombre: "SAPITO SELFIE", 
        categoria: "promo", 
        precio: 90.00, 
        imagenes: ["selfi_1.jpeg",
            "selfi_2.jpeg",
            "selfi_3.jpeg",
            "selfi_4.jpeg",
        ],
        descripcion: "",
        tamaño: "9 cm",
        tiempoProduccion: "",
        material: "Resina"
        
    },
    { 
        id: 202,
        nombre: "FLAUTIN", 
        categoria: "promo", 
        precio: 30.00, 
        imagenes: ["flautin.jpeg"],
        descripcion: "",
        tamaño: "4 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 203,
        nombre: "CARNIVORA CURIOSA", 
        categoria: "promo", 
        precio: 80.00, 
        imagenes: ["flor_1.jpeg",
            "flor_2.jpeg",
            "flor_3.jpeg",
        ],
        descripcion: "",
        tamaño: "7.5 cm",
        tiempoProduccion: "4 dias",
        material: "Resina"
        
    },
    { 
        id: 204,
        nombre: "IO ", 
        categoria: "promo", 
        precio: 180.00, 
        imagenes: ["IO_1.jpeg",
            "IO_2.jpeg",
        ],
        descripcion: "",
        tamaño: "13 cm",
        tiempoProduccion: "5 dias",
        material: "Resina"
        
    },
    // FIGURAS EN STOCK (Aparecen en el inicio)
    { 
        id: 101, 
        nombre: "MONKEY KING", 
        categoria: "stock", 
        precio: 480.00, 
        imagenes: [
            "mk_1.jpeg",
            "mk_2.jpeg",
        ],
        descripcion: "",
        tamaño: "30 cm",
        material: "Resina + PLA+"
    },
    { 
        id: 102, 
        nombre: "QUEEN OF PAIN", 
        categoria: "stock", 
        precio: 1500.00, 
        imagenes: [
            "qop_1.jpeg",
            "qop_2.jpeg",
            "qop_3.jpeg"
        ],
        descripcion: "",
        tamaño: "55 cm",
        material: "resina"
    },
    { 
        id: 103, 
        nombre: "LION (chibi)", 
        categoria: "stock", 
        precio: 120.00, 
        imagenes: [
            "lion_1.jpeg"
        ],
        descripcion: "",
        tamaño: "12 cm",
        material: "Resina"
    },
    { 
        id: 104, 
        nombre: "LLAVERO INMORTAL", 
        categoria: "stock", 
        precio: 30.00, 
        imagenes: [
            "inmortal.jpeg",
        ],
        descripcion: ".",
        tamaño: "4.5 cm",
        material: "Resina"
    },

    // CATEGORÍA: FIGURAS ÉPICAS
    { 
        id: 1, 
        nombre: "MONKEY KING", 
        categoria: "epicas", 
        precio: 480.00, 
        imagenes: [
            "mk_1.jpeg",
            "mk_2.jpeg",
            "mk_3.jpeg",
            "mk_4.jpeg"
        ],
        descripcion: "",
        tamaño: "30 cm ",
        tiempoProduccion: "14 dias",
        material: "Resina "
    },
    { 
        id: 2, 
        nombre: "DROW RANGER", 
        categoria: "epicas", 
        precio: 550.00, 
        imagenes: [
            "dr_1.jpeg",
            "dr_2.jpeg",
            "dr_3.jpeg",
            "dr_4.jpeg"
        ],
        descripcion: "",
        tamaño: "34.5 cm",
        tiempoProduccion: "15 dias",
        material: "Resina + Base en PLA"
    },
    { 
        id: 34,
        nombre: "ABADDON", 
        categoria: "epicas", 
        precio: 430.00, 
        imagenes: ["abadon_1.jpeg",
            "abadon_2.jpeg",
            "abadon_3.jpeg",
            "abadon_4.jpeg"
        ],
        descripcion: "",
        tamaño: "24.5 cm",
        tiempoProduccion: "10 dias",
        material: "Resina"
    },
    { 
        id: 32,
        nombre: "ANTI MAGE", 
        categoria: "epicas", 
        precio: 400.00, 
        imagenes: ["anti_mage_1.jpeg",
            "anti_mage_2.jpeg",
            "anti_mage_3.jpeg",
            "anti_mage_4.jpeg"
        ],
        descripcion: "",
        tamaño: "20 cm",
        tiempoProduccion: "10 dias",
        material: "Resina"
    },
    { 
        id: 33,
        nombre: "ALCHEMIST", 
        categoria: "epicas", 
        precio: 450.00, 
        imagenes: ["al_1.jpeg",
            "al_2.jpeg",
            "al_3.jpeg",
            "al_4.jpeg"
            
        ],
        descripcion: "",
        tamaño: "26.5 cm",
        tiempoProduccion: "10 dias",
        material: "Resina"
    },
    { 
        id: 35,
        nombre: "WEI", 
        categoria: "epicas", 
        precio: 400.00, 
        imagenes: ["ammujer_1.jpeg",
            "ammujer_2.jpeg",
            "ammujer_3.jpeg",
            "ammujer_4.jpeg"
            
        ],
        descripcion: "",
        tamaño: "20 cm",
        tiempoProduccion: "10 dias",
        material: "Resina"
    },{ 
        id: 39,
        nombre: "MARS", 
        categoria: "epicas", 
        precio: 350.00, 
        imagenes: ["mars_2.jpeg",
            "mas_1.jpeg",
            "mars_3.jpeg",
            "mars_4.jpeg"
            
        ],
        descripcion: "",
        tamaño: "15 cm",
        tiempoProduccion: "7 dias",
        material: "Resina"
    },




    // CATEGORÍA: CHIBIS
    { 
        id: 3, 
        nombre: "PUDGE ", 
        categoria: "chibis", 
        precio: 120.00, 
        imagenes: [
            "pudge_1.jpeg",
            "pudge_2.jpeg",
            "pudge_3.jpeg",
            "pudge_4.jpeg"
        ],
        descripcion: "",
        tamaño: "12 cm",
        tiempoProduccion: "",
        material: "RESINA"
    },
    { 
        id: 4, 
        nombre: "LION ", 
        categoria: "chibis", 
        precio: 120.00, 
        imagenes: [
            "lion_1.jpeg"
        ],
        descripcion: "",
        tamaño: "12 cm",
        tiempoProduccion: "",
        material: "RESINA"
    },
    { 
        id: 28,
        nombre: "DROW RANGER ", 
        categoria: "chibis", 
        precio: 120.00, 
        imagenes: ["drowchibi_1.jpeg"],
        descripcion: "",
        tamaño: "12 cm",
        tiempoProduccion: "",
        material: "Resina"
    },
    { 
        id: 29,
        nombre: "LARGO ", 
        categoria: "chibis", 
        precio: 120.00, 
        imagenes: ["largochibi_1.jpeg"],
        descripcion: "",
        tamaño: "12 cm",
        tiempoProduccion: "",
        material: "Resina"
    },{ 
        id: 30,
        nombre: "MONKEY KING ", 
        categoria: "chibis", 
        precio: 120.00, 
        imagenes: ["mkchibi_1.jpeg"],
        descripcion: "",
        tamaño: "12 cm",
        tiempoProduccion: "",
        material: "Resina"
    },{ 
        id: 31,
        nombre: "QUEEN OF PEIN ", 
        categoria: "chibis", 
        precio: 120.00, 
        imagenes: ["qopchibi_1.jpeg"],
        descripcion: "",
        tamaño: "12 cm",
        tiempoProduccion: "",
        material: "Resina"
    },
    { 
        id: 36,
        nombre: "SAPITO SELFIE", 
        categoria: "chibis", 
        precio: 90.00, 
        imagenes: ["selfi_1.jpeg",
            "selfi_2.jpeg",
            "selfi_3.jpeg",
            "selfi_4.jpeg",
        ],
        descripcion: "",
        tamaño: "9 cm",
        tiempoProduccion: "",
        material: "Resina"
    },

    // CATEGORÍA: WAIFUS
    { 
        id: 5, 
        nombre: "queen of pein", 
        categoria: "waifus", 
        precio: 1500.00, 
        imagenes: [
            "qop_1.jpeg",
            "qop_2.jpeg",
            "qop_3.jpeg",
            "qop_4.jpeg",
        ],
        descripcion: "",
        tamaño: "55 cm",
        tiempoProduccion: "20 dias",
        material: "Resina "
    },
    { 
        id: 6, 
        nombre: "MARCI", 
        categoria: "waifus", 
        precio: 440.00, 
        imagenes: [
            "marci_1.jpeg",
            "marci_2.jpeg",
            "marci_3.jpeg",
            "marci_4.jpeg"
        ],
        descripcion: "",
        tamaño: "26.5 cm",
        tiempoProduccion: "14 dias",
        material: "Resina"
    },

    // CATEGORÍA: LLAVEROS
    { 
        id: 7, 
        nombre: "INMORTAL TOP 100", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: [
            "inmortal.jpeg"
        ],
        descripcion: "",
        tamaño: "4.5 cm",
        tiempoProduccion: "2 dias",
        material: "resina"
    },
    { 
        id: 8, 
        nombre: "SAPO ABANICO", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: [
            "abanico.jpeg"
        ],
        descripcion: "",
        tamaño: "4 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 9,
        nombre: "SAPO CON PISTOLA", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["psitola.jpeg"],
        descripcion: "",
        tamaño: "4 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 10, 
        nombre: "SAPO TORERO", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["torero.jpeg"],
        descripcion: "",
        tamaño: "4 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 11,
        nombre: "SAPO NAVIDEÑO", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["navideño.jpeg"],
        descripcion: "",
        tamaño: "4 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 12,
        nombre: "SAPO CON ACORDEON", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["acordeon.jpeg"],
        descripcion: "",
        tamaño: "4 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 13,
        nombre: "SAPO CON CAMPANILLAS", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["campanillas.jpeg"],
        descripcion: "",
        tamaño: "4 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 14,
        nombre: "SAPITO CON MARACAS", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["campanillas_2.jpeg"],
        descripcion: "",
        tamaño: "4 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 15,
        nombre: "SAPITO CON COLLAR DE CAMPANILLA", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["collar.jpeg"],
        descripcion: "",
        tamaño: "4 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 16,
        nombre: "FLAUTIN", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["flautin.jpeg"],
        descripcion: "",
        tamaño: "4 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 17,
        nombre: "SAPITO LLORON", 
        categoria: "llaveros", 
        precio: 25.00, 
        imagenes: ["lloron.jpeg"],
        descripcion: "Llavero resistente con argolla reforzada.",
        tamaño: "5 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 18,
        nombre: "SAPITO CON ORO", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["oro.jpeg"],
        descripcion: "",
        tamaño: "4 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 19,
        nombre: "SAPITO CON PLATILLOS", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["platillos.jpeg"],
        descripcion: "",
        tamaño: "4 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 20,
        nombre: "SIN CALIBRAR", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["sincalibrar.jpeg"],
        descripcion: "",
        tamaño: "4.5 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 21,
        nombre: "HERALDO", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["heraldo.jpeg"],
        descripcion: "",
        tamaño: "4.5 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 22,
        nombre: "GUARDIAN", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["guardian.jpeg"],
        descripcion: "",
        tamaño: "4.5 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 23,
        nombre: "CRUZADO", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["cruzado.jpeg"],
        descripcion: "",
        tamaño: "4.5 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 24,
        nombre: "ARCONTE", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["arconte.jpeg"],
        descripcion: "",
        tamaño: "4.5 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 25,
        nombre: "LEYENDA", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["leyenda.jpeg"],
        descripcion: "",
        tamaño: "4.5 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 26,
        nombre: "ANCESTRAL", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["ancestral.jpeg"],
        descripcion: "",
        tamaño: "4.5 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 27,
        nombre: "DIVINO", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["divino.jpeg"],
        descripcion: "",
        tamaño: "4.5 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    { 
        id: 37,
        nombre: "INMORTAL", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["inmor.jpeg"],
        descripcion: "",
        tamaño: "4.5 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },{ 
        id: 38,
        nombre: "INMORTAL 25K", 
        categoria: "llaveros", 
        precio: 30.00, 
        imagenes: ["inmortal25k.jpeg"],
        descripcion: "",

        tamaño: "4.5 cm",
        tiempoProduccion: "2 dias",
        material: "Resina"
    },
    
];

let carrito = [];
let productoActualModal = null;

document.addEventListener('DOMContentLoaded', () => {
    cargarStockInicial();

    // Detección de scroll para el logo
    window.addEventListener('scroll', () => {
        const logo = document.getElementById('dynamic-logo');
        const homeView = document.getElementById('home-view');

        if (window.scrollY > 90 || homeView.style.display === 'none') {
            logo.classList.add('shrunk');
        } else {
            logo.classList.remove('shrunk');
        }
    });
});

// Cargar stock en la página principal
function cargarStockInicial() {
    const stockContainer = document.getElementById('stock-grid');
    stockContainer.innerHTML = '';
    
    const stockItems = inventario.filter(p => p.categoria === 'stock');
    stockItems.forEach(p => {
        stockContainer.innerHTML += crearCardHTML(p);
    });
}

// Plantilla de la tarjeta de producto (Hacer clic en la tarjeta abre el detalle)
function crearCardHTML(p) {
    const primeraImg = p.imagenes && p.imagenes.length > 0 ? p.imagenes[0] : '';
    return `
        <div class="product-card" onclick="abrirDetalleModal(${p.id})">
            <div class="product-img-box">
                <img src="${primeraImg}" alt="${p.nombre}">
            </div>
            <h4 class="product-name">${p.nombre}</h4>
            <p class="product-price">S/ ${p.precio.toFixed(2)}</p>
            <button class="btn-add" onclick="event.stopPropagation(); agregarAlCarrito(${p.id})">
                Agregar al Carrito
            </button>
        </div>
    `;
}
// --- RENDERIZAR SECCIÓN PROMO PRIMAVERAL CON DESCUENTO ---
function renderizarPromociones() {
    const promoGrid = document.getElementById('promo-grid');
    if (!promoGrid) return;

    // Filtra hasta 4 figuras con categoría 'promo'
    const figurasPromo = inventario.filter(p => p.categoria === 'promo').slice(0, 4);

    let htmlContenido = '';

    figurasPromo.forEach(p => {
        // Cálculo del 20% de descuento
        const precioConDescuento = (p.precio * 0.80).toFixed(2);
        const precioOriginal = p.precio.toFixed(2);

        htmlContenido += `
            <div class="product-card" onclick="abrirDetalleModal(${p.id})">
                <span class="discount-badge">-20%</span>

                <div class="product-img-box">
                    <img src="${p.imagenes[0]}" alt="${p.nombre}">
                </div>

                <h4 class="product-name">${p.nombre}</h4>
                
                <!-- Precios: tachado y nuevo -->
                <div class="promo-pricing">
                    <span class="price-original">S/ ${precioOriginal}</span>
                    <span class="price-discount">S/ ${precioConDescuento}</span>
                </div>

                <button class="btn-add" onclick="event.stopPropagation(); agregarAlCarrito(${p.id})">
                    Agregar al Carrito
                </button>
            </div>
        `;
    });

    promoGrid.innerHTML = htmlContenido;
}

// --- MODAL DE DETALLES DEL PRODUCTO ---
function abrirDetalleModal(id) {
    const prod = inventario.find(p => p.id === id);
    if (!prod) return;

    productoActualModal = prod;

    // Llenar datos de texto
    document.getElementById('detail-title').innerText = prod.nombre;
    // Mostrar precio con descuento si es promo
    const detailPriceElem = document.getElementById('detail-price');
    if (prod.categoria === 'promo') {
        const precioConDescuento = (prod.precio * 0.80).toFixed(2);
        const precioOriginal = prod.precio.toFixed(2);
        detailPriceElem.innerHTML = `
            <div class="promo-pricing-modal">
                <span class="price-original">S/ ${precioOriginal}</span>
                <span class="price-discount">S/ ${precioConDescuento}</span>
            </div>
        `;
    } else {
        detailPriceElem.innerText = `S/ ${prod.precio.toFixed(2)}`;
    }
    document.getElementById('detail-description').innerText = prod.descripcion || "Figura impresa en 3D con acabados de alta calidad.";
    document.getElementById('detail-size').innerText = prod.tamaño || "Medida estándar";
    const filaTiempo = document.getElementById('row-detail-time');
        if (filaTiempo) {
            if (prod.categoria === 'stock') {
                filaTiempo.style.display = 'none';
        } else {
            filaTiempo.style.display = 'block';
                document.getElementById('detail-time').innerText = prod.tiempoProduccion || "2 a 4 días hábiles";
        }
}
    document.getElementById('detail-material').innerText = prod.material || "PLA Premium / Resina";

    // Cargar fotos y miniaturas
    const mainImg = document.getElementById('detail-main-img');
    const thumbRow = document.getElementById('detail-thumbnails');
    thumbRow.innerHTML = '';

    if (prod.imagenes && prod.imagenes.length > 0) {
        mainImg.src = prod.imagenes[0];

        // Si hay más de 1 imagen, creamos las miniaturas
        if (prod.imagenes.length > 1) {
            prod.imagenes.forEach((imgUrl, index) => {
                const thumb = document.createElement('img');
                thumb.src = imgUrl;
                thumb.classList.add('thumb-img');
                if (index === 0) thumb.classList.add('active');

                thumb.onclick = () => {
                    mainImg.src = imgUrl;
                    document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                };
                thumbRow.appendChild(thumb);
            });
            thumbRow.style.display = 'flex';
        } else {
            thumbRow.style.display = 'none';
        }
    }

    // Botón de agregar dentro del modal
    const addBtn = document.getElementById('detail-add-btn');
    addBtn.onclick = () => {
        agregarAlCarrito(prod.id);
        cerrarDetalleModal();
    };

    document.getElementById('product-detail-modal').style.display = 'block';
}

function cerrarDetalleModal() {
    document.getElementById('product-detail-modal').style.display = 'none';
    productoActualModal = null;
}

// --- NAVEGACIÓN DE CATEGORÍAS ---
function abrirPantallaCategoria(catSlug, catNombre) {
    document.getElementById('home-view').style.display = 'none';
    const catView = document.getElementById('category-view');
    catView.classList.remove('hidden-view');
    catView.style.display = 'block';

    document.getElementById('dynamic-logo').classList.add('shrunk');
    document.getElementById('cat-view-title').innerText = catNombre.toUpperCase();

    const productosCat = inventario.filter(p => p.categoria === catSlug);
    const grid = document.getElementById('category-products-grid');
    grid.innerHTML = '';
    productosCat.forEach(p => {
        grid.innerHTML += crearCardHTML(p);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volverAlInicio() {
    document.getElementById('category-view').style.display = 'none';
    const homeView = document.getElementById('home-view');
    homeView.style.display = 'block';
    
    if (window.scrollY < 90) {
        document.getElementById('dynamic-logo').classList.remove('shrunk');
    }
}

// --- CARRITO ---
function agregarAlCarrito(id) {
    const item = inventario.find(p => p.id === id);
    if (item) {
        // Si es de promo le aplicamos el 20% de descuento al precio
        const precioCobrar = item.categoria === 'promo' ? item.precio * 0.80 : item.precio;

        // Metemos una copia al carrito con el precio final ya calculado
        carrito.push({
            ...item,
            precio: precioCobrar
        });

        actualizarCarrito();
    }
}

// Actualiza la vista del modal del carrito y agrega el botón de borrar a cada item
function actualizarCarrito() {
    document.getElementById('cart-count').innerText = carrito.length;
    const lista = document.getElementById('cart-items');
    lista.innerHTML = '';

    if (carrito.length === 0) {
        lista.innerHTML = '<li class="cart-empty">El carrito está vacío.</li>';
        document.getElementById('cart-total').innerText = '0.00';
        return;
    }

    let total = 0;
    carrito.forEach((p, index) => {
        total += p.precio;
        lista.innerHTML += `
            <li class="cart-item-row">
                <div class="cart-item-info">
                    <span class="cart-item-name">${p.nombre}</span>
                    <span class="cart-item-price">S/ ${p.precio.toFixed(2)}</span>
                </div>
                <button class="btn-remove-item" onclick="eliminarDelCarrito(${index})" title="Quitar del pedido">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </li>
        `;
    });

    document.getElementById('cart-total').innerText = total.toFixed(2);
}

// Nueva función: Elimina un producto por su índice y refresca la lista
function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Quita 1 elemento en la posición dada
    actualizarCarrito();      // Vuelve a calcular total y contador
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

function enviarPedidoWhatsApp() {
    if (carrito.length === 0) return alert("Tu carrito está vacío.");

    let mensaje = "¡Hola Sunder 3D! Deseo hacer el siguiente pedido:\n\n";
    carrito.forEach((p, i) => {
        mensaje += `${i + 1}. ${p.nombre} - S/ ${p.precio.toFixed(2)}\n`;
    });

    const total = document.getElementById('cart-total').innerText;
    mensaje += `\n*Total a pagar:* S/ ${total}`;

    const telefono = "51928570482"; // Reemplaza con tu número real
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
}
document.addEventListener('DOMContentLoaded', () => {
    // Las funciones que ya tenías:
    cargarProductosStock(); 
    // ...
    
    // 👇 Agregas esta línea:
    renderizarPromociones();
});
renderizarPromociones();
