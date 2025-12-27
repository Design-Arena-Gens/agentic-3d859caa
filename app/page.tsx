export default function Home() {
  const products = [
    {
      id: 1,
      name: "Fone Bluetooth Sem Fio",
      rating: "4.8",
      reviews: "2.134",
      oldPrice: "R$ 129,90",
      newPrice: "R$ 69,90",
      description: "Som de alta qualidade, bateria durável e conexão rápida.",
      icon: "🎧",
      badge: "Comprar agora"
    },
    {
      id: 2,
      name: "Ring Light LED com Tripé",
      rating: "4.9",
      reviews: "3.010",
      oldPrice: "R$ 159,90",
      newPrice: "R$ 89,90",
      description: "Ideal para vídeos, fotos e chamadas online.",
      icon: "💡",
      badge: "Oferta por tempo limitado"
    },
    {
      id: 3,
      name: "Garrafa Térmica Inox 500ml",
      rating: "4.7",
      reviews: "1.542",
      oldPrice: null,
      newPrice: "R$ 49,90",
      description: "Mantém sua bebida quente ou fria por horas.",
      icon: "🍶",
      badge: "Frete rápido"
    },
    {
      id: 4,
      name: "Suporte para Celular Veicular",
      rating: "4.6",
      reviews: "980",
      oldPrice: "R$ 39,90",
      newPrice: "R$ 24,90",
      description: "Ajustável, resistente e fácil de instalar.",
      icon: "📱",
      badge: "Últimas unidades"
    },
    {
      id: 5,
      name: "Kit 3 Camisetas Básicas",
      rating: "4.9",
      reviews: "2.450",
      oldPrice: "R$ 149,90",
      newPrice: "R$ 89,90",
      description: "Conforto, qualidade e ótimo custo-benefício.",
      icon: "👕",
      badge: "Comprar agora"
    }
  ];

  const categories = [
    { name: "Eletrônicos", icon: "💻" },
    { name: "Acessórios", icon: "⌚" },
    { name: "Casa & Utilidades", icon: "🏠" },
    { name: "Moda", icon: "👗" },
    { name: "Beleza", icon: "💄" },
    { name: "Promoções", icon: "🔥" }
  ];

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div>
            <div className="logo">🧡 MegaOferta Express</div>
            <div className="slogan">Preço baixo, compra rápida e entrega garantida!</div>
          </div>
          <nav className="nav">
            <a href="#home">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#sobre">Sobre Nós</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Buscar produtos..." />
          <span className="search-icon">🔍</span>
        </div>

        <div className="badges">
          <div className="badge">🔥 Ofertas do Dia</div>
          <div className="badge">⚡ Promoções Relâmpago</div>
          <div className="badge">🚚 Frete Rápido</div>
          <div className="badge">🔒 Pagamento Seguro</div>
        </div>
      </header>

      <div className="banner">
        🔥 OFERTAS IMPERDÍVEIS – ATÉ 60% OFF HOJE!
      </div>

      <div className="container">
        <h2 className="section-title">📦 Categorias</h2>
        <div className="categories">
          {categories.map((cat, idx) => (
            <div key={idx} className="category">
              <div className="category-icon">{cat.icon}</div>
              <div>{cat.name}</div>
            </div>
          ))}
        </div>

        <h2 className="section-title">⭐ Produtos em Destaque</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <div className="product-badge">{product.badge}</div>
              <div className="product-image">{product.icon}</div>
              <h3 className="product-title">{product.name}</h3>
              <div className="product-rating">
                <span className="stars">⭐⭐⭐⭐⭐</span>
                <span>({product.rating} – {product.reviews} avaliações)</span>
              </div>
              <div className="product-price">
                {product.oldPrice && <div className="old-price">{product.oldPrice}</div>}
                <div className="new-price">{product.newPrice}</div>
              </div>
              <p className="product-description">{product.description}</p>
              <button className="btn btn-primary">🛒 Comprar agora</button>
            </div>
          ))}
        </div>

        <div id="sobre" className="about">
          <h2 className="section-title">🧾 Sobre Nós</h2>
          <p>
            A <strong>MegaOferta Express</strong> nasceu para trazer produtos de qualidade com os melhores preços do mercado.
            Nosso objetivo é oferecer uma experiência simples, rápida e segura para todos os clientes.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Trabalhamos com fornecedores confiáveis para garantir que você receba produtos autênticos e de alta qualidade,
            sempre com preços que cabem no seu bolso. Nossa missão é tornar as compras online acessíveis e práticas para todos.
          </p>
        </div>

        <div id="contato" className="contact">
          <h2 className="section-title">📞 Contato</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <span>Email: suporte@megaofertaexpress.com</span>
            </div>
            <div className="contact-item">
              <span>💬</span>
              <span>Atendimento rápido pelo chat</span>
            </div>
            <div className="contact-item">
              <span>⏰</span>
              <span>Segunda a sábado – 8h às 20h</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 MegaOferta Express. Todos os direitos reservados.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
          🔒 Pagamento seguro | 🚚 Entrega garantida | ⭐ Satisfação do cliente
        </p>
      </footer>
    </>
  );
}
