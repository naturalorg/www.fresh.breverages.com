// Products Data for Natural Badam Milk
const products = [
    {
        id: 1,
        name: "Kesar Badam",
        description: "Rich saffron-infused almond milk with the perfect blend of tradition and taste.",
        image: "assets/product1.jpg",
        rate: "₹80",
        grams: "250ml",
        whatsappMessage: "Hi, I would like to order Kesar Badam (250ml - ₹80)"
    },
    {
        id: 2,
        name: "Rose Badam",
        description: "Delicate rose essence blended with creamy almond milk for a refreshing experience.",
        image: "assets/product2.jpg",
        rate: "₹75",
        grams: "250ml",
        whatsappMessage: "Hi, I would like to order Rose Badam (250ml - ₹75)"
    },
    {
        id: 3,
        name: "Cinnamon Badam",
        description: "Warm cinnamon spice meets smooth almond milk in this aromatic delight.",
        image: "assets/product3.jpg",
        rate: "₹75",
        grams: "250ml",
        whatsappMessage: "Hi, I would like to order Cinnamon Badam (250ml - ₹75)"
    },
    {
        id: 4,
        name: "Chocolate Badam",
        description: "Indulgent chocolate flavor combined with nutritious almond milk for a perfect treat.",
        image: "assets/product4.jpg",
        rate: "₹85",
        grams: "250ml",
        whatsappMessage: "Hi, I would like to order Chocolate Badam (250ml - ₹85)"
    },
    {
        id: 5,
        name: "Butterscotch Badam",
        description: "Sweet butterscotch delight mixed with creamy Badam milk for ultimate satisfaction.",
        image: "assets/product5.jpg",
        rate: "₹85",
        grams: "250ml",
        whatsappMessage: "Hi, I would like to order Butterscotch Badam (250ml - ₹85)"
    },
    {
        id: 6,
        name: "Kesar Pista Badam",
        description: "Premium blend of saffron, pistachio, and almond - our signature special flavor.",
        image: "assets/product6.jpg",
        rate: "₹95",
        grams: "250ml",
        whatsappMessage: "Hi, I would like to order Kesar Pista Badam (250ml - ₹95)"
    }
];

// WhatsApp number
const whatsappNumber = "916363407163";

// Function to create product cards
function createProductCard(product) {
    return `
        <div class="product-card" data-aos="fade-up">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x400/8B7355/FFFFFF?text=${product.name}'">
                <div class="product-badge">${product.grams}</div>
            </div>
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price">${product.rate}</span>
                        <span class="quantity">${product.grams}</span>
                    </div>
                    <button class="btn-buy" onclick="buyProduct('${product.whatsappMessage}')">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to handle WhatsApp redirect
function buyProduct(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Function to load products
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    }
}

// Initialize products when DOM is loaded
document.addEventListener('DOMContentLoaded', loadProducts);
