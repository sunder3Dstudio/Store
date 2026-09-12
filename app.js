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
    { 
        id: 40,
        nombre: "BRISTLEBACK", 
        categoria: "epicas", 
        precio: 520.00, 
        imagenes: ["bris_1.jpeg",
            "bris_2.jpeg",
            "bris_3.jpeg",
            "bris_4.jpeg"
            
        ],
        descripcion: "",
        tamaño: "30 cm",
        tiempoProduccion: "14 dias",
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
    { 
        id: 41,
        nombre: "RIKI", 
        categoria: "chibis", 
        precio: 120.00, 
        imagenes: ["riki.jpeg"],
        descripcion: "",
        tamaño: "12 cm",
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
// Variables globales para el carrusel de promo
let indicePromoActual = 0;
let intervaloPromo = null;

function renderizarPromociones() {
    const promoGrid = document.getElementById('promo-grid');
    if (!promoGrid) return;

    // Filtra todas las figuras de promo
    const figurasPromo = inventario.filter(p => p.categoria === 'promo');
    if (figurasPromo.length === 0) return;

    let htmlContenido = '';

    figurasPromo.forEach((p, index) => {
        const precioConDescuento = (p.precio * 0.80).toFixed(2);
        const precioOriginal = p.precio.toFixed(2);

        // La primera tarjeta inicia activa
        const claseActiva = index === 0 ? 'promo-activa' : '';

        htmlContenido += `
            <div class="product-card ${claseActiva}" onclick="abrirDetalleModal(${p.id})">
                <span class="discount-badge">-20%</span>
                <div class="product-img-box">
                    <img src="${p.imagenes[0]}" alt="${p.nombre}">
                </div>
                <h4 class="product-name">${p.nombre}</h4>
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

    // Crear puntitos indicadores
    const dotsContainer = document.getElementById('promo-dots');
    if (dotsContainer) {
        dotsContainer.innerHTML = figurasPromo.map((_, i) => 
            `<span class="promo-dot ${i === 0 ? 'active' : ''}" onclick="irAPromo(${i})"></span>`
        ).join('');
    }

    // Iniciar temporizador automático de 5 segundos
    iniciarAutoCarruselPromo();
}

// Función para cambiar de tarjeta (dirección: +1 para siguiente, -1 para anterior)
function cambiarPromo(direccion) {
    const cards = document.querySelectorAll('#promo-grid .product-card');
    const dots = document.querySelectorAll('.promo-dot');
    if (cards.length === 0) return;

    // Quitar activa actual
    cards[indicePromoActual].classList.remove('promo-activa');
    if (dots.length > 0) dots[indicePromoActual].classList.remove('active');

    // Calcular siguiente índice en bucle infinito
    indicePromoActual = (indicePromoActual + direccion + cards.length) % cards.length;

    // Activar nueva
    cards[indicePromoActual].classList.add('promo-activa');
    if (dots.length > 0) dots[indicePromoActual].classList.add('active');

    // Reiniciar el contador de 5s para que no cambie de golpe si el usuario acaba de tocar la flecha
    reiniciarAutoCarrusel();
}

function irAPromo(index) {
    const cards = document.querySelectorAll('#promo-grid .product-card');
    const dots = document.querySelectorAll('.promo-dot');
    if (cards.length === 0) return;

    cards[indicePromoActual].classList.remove('promo-activa');
    if (dots.length > 0) dots[indicePromoActual].classList.remove('active');

    indicePromoActual = index;

    cards[indicePromoActual].classList.add('promo-activa');
    if (dots.length > 0) dots[indicePromoActual].classList.add('active');

    reiniciarAutoCarrusel();
}

// --- SOPORTE TÁCTIL (SWIPE) PARA CAMBIAR PROMOS CON EL DEDO ---
document.addEventListener('DOMContentLoaded', () => {
    const contenedorPromo = document.getElementById('promo-grid');
    if (!contenedorPromo) return;

    let touchStartX = 0;
    let touchEndX = 0;

    contenedorPromo.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    contenedorPromo.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const diferencia = touchEndX - touchStartX;
        const umbral = 40; // Mínimo de desplazamiento para activar el cambio

        if (diferencia < -umbral) {
            cambiarPromo(1);  // Deslizar hacia la izquierda -> Siguiente
        } else if (diferencia > umbral) {
            cambiarPromo(-1); // Deslizar hacia la derecha -> Anterior
        }
    }, { passive: true });
});

function iniciarAutoCarruselPromo() {
    // 5000 ms = 5 segundos (tiempo ideal para leer el nombre y precio)
    intervaloPromo = setInterval(() => {
        // Solo rotar si la pantalla es de móvil/tablet
        if (window.innerWidth <= 768) {
            cambiarPromo(1);
        }
    }, 3000);
}

function reiniciarAutoCarrusel() {
    clearInterval(intervaloPromo);
    iniciarAutoCarruselPromo();
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
        mostrarToast(`${item.nombre} agregado al carrito`);
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

    const url = `https://api.whatsapp.com/send?phone=51928570482&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
document.addEventListener('DOMContentLoaded', () => {
    // Las funciones que ya tenías:
    cargarProductosStock(); 
    // ...
    
    // 👇 Agregas esta línea:
    renderizarPromociones();
});
renderizarPromociones();

let toastTimer = null;

function mostrarToast(mensaje) {
    const toast = document.getElementById('toast-notificacion');
    if (!toast) return;

    // SVG inline nítido y dorado garantizado al 100%
    toast.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="#ffcc00" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>${mensaje}</span>
    `;
    
    toast.classList.add('visible');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('visible');
    }, 2200);
}

// --- BUSCADOR GLOBAL INTEGRADO CON EL INVENTARIO ---
// --- BÚSQUEDA CON OVERLAY MODAL SEGURO ---
document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector('.search-box');
    const btnBuscar = document.getElementById('btn-toggle-buscar');
    const inputBuscar = document.getElementById('input-buscador');
    
    const modal = document.getElementById('modal-busqueda');
    const gridResultados = document.getElementById('grid-resultados-busqueda');
    const btnCerrar = document.getElementById('btn-cerrar-busqueda');
    const tituloResultados = document.getElementById('titulo-resultados-modal');

    if (!inputBuscar || !modal || !gridResultados) return;

    // Abrir barra de texto
    if (btnBuscar) {
        btnBuscar.addEventListener('click', (e) => {
            e.stopPropagation();
            searchBox?.classList.toggle('open');
            if (searchBox?.classList.contains('open')) inputBuscar.focus();
        });
    }

    // Cerrar modal
    const cerrarModal = () => {
        modal.classList.remove('activo');
        inputBuscar.value = '';
    };

    if (btnCerrar) btnCerrar.addEventListener('click', cerrarModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) cerrarModal();
    });

    // Detectar escritura
    // Detectar escritura en el buscador con ficha completa
    inputBuscar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query.length === 0) {
            modal.classList.remove('activo');
            gridResultados.innerHTML = '';
            return;
        }

        if (typeof inventario === 'undefined') return;

        const coincidencias = inventario.filter(prod => {
            const nombre = prod.nombre.toLowerCase().replace(/[-_]/g, ' ');
            const cat = prod.categoria ? prod.categoria.toLowerCase() : '';
            return nombre.includes(query) || cat.includes(query);
        });

        tituloResultados.innerHTML = `RESULTADOS PARA: <span style="color: #ffffff;">"${query.toUpperCase()}"</span>`;
        modal.classList.add('activo');

        if (coincidencias.length > 0) {
            gridResultados.innerHTML = coincidencias.map(p => {
                // 1. Imagen exacta
                let rutaImg = '';
                if (Array.isArray(p.imagenes) && p.imagenes.length > 0) {
                    rutaImg = p.imagenes[0];
                } else if (p.imagen) {
                    rutaImg = p.imagen;
                } else if (p.img) {
                    rutaImg = p.img;
                } else {
                    rutaImg = `${p.nombre.toLowerCase().replace(/\s+/g, '_')}_1.jpeg`;
                }

                // 2. Propiedades reales: busca nombres con o sin tilde, mayúsculas o minúsculas
                const alturaVal = p.altura || p.tamano || p.tamaño || p.dimensiones || p.medidas || p.size || '30 cm';
                const tiempoVal = p.tiempoProduccion || p.tiempo || p.produccion || p.dias || p.tiempo_produccion || '7 a 10 días hábiles';
                const materialVal = p.material || p.materiales || 'Resina Premium';
                const descVal = p.descripcion || p.detalle || p.desc || 'Figura impresa en 3D con acabados de alta calidad.';

                return `
                <div class="ficha-busqueda-card">
                    <div class="ficha-img-box">
                        <img src="${rutaImg}" alt="${p.nombre}" onerror="this.src='${p.nombre.toLowerCase().replace(/\s+/g, '_')}.jpeg'">
                    </div>
                    <div class="ficha-info-box">
                        <h2 class="ficha-titulo">${p.nombre}</h2>
                        <div class="ficha-precio">S/ ${Number(p.precio).toFixed(2)}</div>
                        
                        <p class="ficha-descripcion">${descVal}</p>
                        
                        <div class="ficha-specs-box">
                            <div class="spec-row">
                                <span class="spec-ico">📏</span>
                                <strong>Altura / Tamaño:</strong>&nbsp;${alturaVal}
                            </div>
                            <div class="spec-row">
                                <span class="spec-ico">⏳</span>
                                <strong>Tiempo de producción:</strong>&nbsp;${tiempoVal}
                            </div>
                            <div class="spec-row">
                                <span class="spec-ico">🧪</span>
                                <strong>Material:</strong>&nbsp;${materialVal}
                            </div>
                            <div class="spec-row">
                                <span class="spec-ico">💰</span>
                                <strong>Separa tu pedido con un 50% de adelanto</strong>
                            </div>
                        </div>

                        <button class="ficha-btn-add" onclick="event.stopPropagation(); agregarAlCarrito(${p.id})">
                            <i class="fas fa-shopping-cart"></i> AGREGAR AL CARRITO
                        </button>
                    </div>
                </div>
                `;
            }).join('');
        
        
        } else {
            gridResultados.innerHTML = `
                <div style="width: 100%; text-align: center; color: #cbd5e1; padding: 60px 10px; font-family: 'Montserrat', sans-serif;">
                    <p style="font-size: 1.1rem; font-weight: 700;">NO SE ENCONTRARON FIGURAS CON ESE NOMBRE</p>
                </div>
            `;
        }
    });
});