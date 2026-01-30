const API_BASE = ' https://tiderode-gwyn-blockish.ngrok-free.dev';
// ===================================
// Global State Management
// ===================================
const state = {
    currentPage: 'home',
    currentProductId: null,
    currentPostId: null,
    cart: [],
    products: [],
    posts: [],
    filters: {
        category: 'all',
        sort: 'default'
    }
};

// ===================================
// Initialize App
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

async function initializeApp() {
    // Load cart from localStorage
    loadCartFromStorage();
    
    // Setup event listeners
    setupEventListeners();
    
    // Load data from API
    await loadProducts();
    await loadPosts();
    
    // Handle initial route
    handleRoute();
    
    // Update cart count
    updateCartCount();
}

// ===================================
// Event Listeners Setup
// ===================================
function setupEventListeners() {
    // Mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        createOverlay();
    });
    
    closeMenu.addEventListener('click', () => {
        closeMobileMenu();
    });
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateTo(page);
            closeMobileMenu();
        });
    });
    
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.addEventListener('click', () => {
        navigateTo('carrinho');
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleContactSubmit);
    
    // Filters
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    categoryFilter.addEventListener('change', (e) => {
        state.filters.category = e.target.value;
        renderAllProducts();
    });
    
    sortFilter.addEventListener('change', (e) => {
        state.filters.sort = e.target.value;
        renderAllProducts();
    });
    
    // Handle browser back/forward
    window.addEventListener('popstate', handleRoute);
}

// ===================================
// Navigation & Routing
// ===================================
function navigateTo(page, id = null) {
    state.currentPage = page;
    
    if (id) {
        if (page === 'produto') {
            state.currentProductId = id;
        } else if (page === 'post') {
            state.currentPostId = id;
        }
    }
    
    // Update URL
    const url = id ? `#${page}/${id}` : `#${page}`;
    history.pushState({ page, id }, '', url);
    
    // Update UI
    updateActivePage();
    updateActiveNav();
    scrollToTop();
}

function handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const [page, id] = hash.split('/');
    
    state.currentPage = page;
    
    if (id) {
        if (page === 'produto') {
            state.currentProductId = id;
        } else if (page === 'post') {
            state.currentPostId = id;
        }
    }
    
    updateActivePage();
    updateActiveNav();
}

function updateActivePage() {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show current page
    const currentPageEl = document.getElementById(`page-${state.currentPage}`);
    if (currentPageEl) {
        currentPageEl.classList.add('active');
        
        // Load page-specific content
        if (state.currentPage === 'produto' && state.currentProductId) {
            renderProductDetail(state.currentProductId);
        } else if (state.currentPage === 'post' && state.currentPostId) {
            renderPostDetail(state.currentPostId);
        } else if (state.currentPage === 'carrinho') {
            renderCart();
        }
    }
}

function updateActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === state.currentPage) {
            link.classList.add('active');
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===================================
// Mobile Menu
// ===================================
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
    removeOverlay();
}

function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay active';
    overlay.addEventListener('click', closeMobileMenu);
    document.body.appendChild(overlay);
}

function removeOverlay() {
    const overlay = document.querySelector('.mobile-menu-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// ===================================
// Load Data from API
// ===================================
async function loadProducts() {
    try {
        const response = await fetch(`${API_BASE}/api/public/products`, {
            headers: {
    'ngrok-skip-browser-warning': 'true',
    'Accept': 'application/json'
}
        });

        const data = await response.json();

        if (data && data.data) {
            state.products = data.data;
            renderFeaturedProducts();
            renderAllProducts();
        }
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        state.products = [];
    }
}

async function loadPosts() {
    try {
        const response = await fetch('./blog_posts.json');
        const data = await response.json();

        if (data && data.data) {
            state.posts = data.data;
            renderBlogPosts();
        }
    } catch (error) {
        console.warn('Posts locais:', error);
        state.posts = [];
    }
}

// ===================================
// Render Products
// ===================================
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    const featured = state.products.filter(p => p.featured).slice(0, 3);
    
    if (featured.length === 0) {
        // Show first 3 products if no featured
        featured.push(...state.products.slice(0, 3));
    }
    
    container.innerHTML = featured.map(product => createProductCard(product)).join('');
}

function renderAllProducts() {
    const container = document.getElementById('allProducts');
    let filtered = [...state.products];
    
    // Apply category filter
    if (state.filters.category !== 'all') {
        filtered = filtered.filter(p => p.category === state.filters.category);
    }
    
    // Apply sorting
    switch (state.filters.sort) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-box-open"></i>
                <h3>Nenhum produto encontrado</h3>
                <p>Tente ajustar os filtros</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    return `
        <div class="product-card" onclick="navigateTo('produto', '${product.id}')">
            <div class="product-image">
                <i class="${product.icon || 'fas fa-heart'}"></i>
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">R$ ${product.price.toFixed(2)}</span>
                    <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart('${product.id}')">
                        <i class="fas fa-cart-plus"></i> Adicionar
                    </button>
                </div>
            </div>
        </div>
    `;
}

function getCategoryName(category) {
    const categories = {
        'pelucias': 'Pelúcias',
        'acessorios': 'Acessórios',
        'casa': 'Casa & Deco',
        'moda': 'Moda'
    };
    return categories[category] || 'Geral';
}

// ===================================
// Product Detail
// ===================================
function renderProductDetail(productId) {
    const product = state.products.find(p => String(p.id) === String(productId));
    const container = document.getElementById('productDetail');
    
    if (!product) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-exclamation-circle"></i>
                <h3>Produto não encontrado</h3>
                <button class="btn btn-primary" onclick="navigateTo('produtos')">
                    Voltar para Produtos
                </button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="product-detail-image">
            <i class="${product.icon || 'fas fa-heart'}"></i>
        </div>
        <div class="product-detail-content">
            <div class="product-detail-header">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h1 class="product-detail-title">${product.name}</h1>
                <div class="product-detail-price">R$ ${product.price.toFixed(2)}</div>
            </div>
            
            <p class="product-detail-description">${product.description_long || product.description}</p>
            
            <div class="product-features">
                <h3><i class="fas fa-star"></i> Características</h3>
                <ul>
                    ${product.features ? product.features.map(f => `
                        <li><i class="fas fa-check-circle"></i> ${f}</li>
                    `).join('') : '<li><i class="fas fa-check-circle"></i> Produto de alta qualidade</li>'}
                </ul>
            </div>
            
            <button class="btn btn-primary btn-block" onclick="addToCart('${product.id}')">
                <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
            </button>
        </div>
    `;
}

// ===================================
// Blog
// ===================================
function renderBlogPosts() {
    const container = document.getElementById('blogPosts');
    
    if (state.posts.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-blog"></i>
                <h3>Em breve novos posts!</h3>
                <p>Estamos preparando conteúdos incríveis para você 💕</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = state.posts.map(post => `
        <div class="blog-card" onclick="navigateTo('post', '${post.id}')">
            <div class="blog-card-image">
                <i class="${post.icon || 'fas fa-star'}"></i>
            </div>
            <div class="blog-card-content">
                <div class="blog-card-date">
                    <i class="fas fa-calendar"></i>
                    ${formatDate(post.date)}
                </div>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <a href="#" class="blog-card-link" onclick="event.preventDefault()">
                    Ler mais <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}

function renderPostDetail(postId) {
    const post = state.posts.find(p => p.id === postId);
    const container = document.getElementById('postDetail');
    
    if (!post) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-exclamation-circle"></i>
                <h3>Post não encontrado</h3>
                <button class="btn btn-primary" onclick="navigateTo('blog')">
                    Voltar ao Blog
                </button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="post-detail-header">
            <h1 class="post-detail-title">${post.title}</h1>
            <div class="post-detail-meta">
                <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                <span><i class="fas fa-user"></i> Nina</span>
            </div>
        </div>
        <div class="post-detail-content">
            ${post.content}
        </div>
    `;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
}

// ===================================
// Cart Management
// ===================================
function addToCart(productId) {
    const product = state.products.find(p => String(p.id) === String(productId));
    
    if (!product) return;
    
    const existingItem = state.cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            icon: product.icon,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartCount();
    showToast(`${product.name} adicionado ao carrinho! 🎉`);
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartCount();
    renderCart();
    showToast('Item removido do carrinho');
}

function updateQuantity(productId, change) {
    const item = state.cart.find(item => item.id === productId);
    
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    saveCartToStorage();
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const count = state.cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function renderCart() {
    const container = document.getElementById('cartContent');
    
    if (state.cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <h3>Seu carrinho está vazio</h3>
                <p>Adicione produtos fofinhos ao seu carrinho!</p>
                <button class="btn btn-primary" onclick="navigateTo('produtos')">
                    <i class="fas fa-shopping-bag"></i> Ir às Compras
                </button>
            </div>
        `;
        return;
    }
    
    const subtotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 15;
    const total = subtotal + shipping;
    
    container.innerHTML = `
        <div class="cart-items">
            ${state.cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <i class="${item.icon || 'fas fa-heart'}"></i>
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('')}
        </div>
        
        <div class="cart-summary">
            <h3>Resumo do Pedido</h3>
            <div class="cart-summary-item">
                <span>Subtotal</span>
                <span>R$ ${subtotal.toFixed(2)}</span>
            </div>
            <div class="cart-summary-item">
                <span>Frete</span>
                <span>${shipping === 0 ? 'Grátis! 🎉' : `R$ ${shipping.toFixed(2)}`}</span>
            </div>
            <div class="cart-summary-item total">
                <span>Total</span>
                <span>R$ ${total.toFixed(2)}</span>
            </div>
            ${subtotal < 100 ? `
                <p style="text-align: center; color: var(--color-gray-600); margin-top: 1rem; font-size: 0.9rem;">
                    <i class="fas fa-truck"></i> Frete grátis a partir de R$ 100,00
                </p>
            ` : ''}
            <button class="btn btn-primary btn-block" style="margin-top: 1.5rem;" onclick="checkout()">
                <i class="fas fa-check"></i> Finalizar Compra
            </button>
        </div>
    `;
}

function checkout() {
    const message = state.cart.map(item => 
        `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}`
    ).join('%0A');
    
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const whatsappUrl = `https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido:%0A%0A${message}%0A%0ATotal: R$ ${total.toFixed(2)}`;
    
    window.open(whatsappUrl, '_blank');
    showToast('Redirecionando para WhatsApp... 💚');
}

// ===================================
// LocalStorage
// ===================================
function saveCartToStorage() {
    localStorage.setItem('ninastore_cart', JSON.stringify(state.cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('ninastore_cart');
    if (saved) {
        try {
            state.cart = JSON.parse(saved);
        } catch (e) {
            state.cart = [];
        }
    }
}

// ===================================
// Contact Form
// ===================================
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    console.log('Mensagem de contato:', data);
    
    showToast('Mensagem enviada com sucesso! Logo entraremos em contato. 💌');
    e.target.reset();
}

// ===================================
// Toast Notification
// ===================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===================================
// Utility Functions
// ===================================
function generateId() {
    return 'id_' + Math.random().toString(36).substr(2, 9);
}

// Make functions available globally
window.navigateTo = navigateTo;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.checkout = checkout;
