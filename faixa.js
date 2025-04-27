// Seus ativos
const stocks = [
    { name: 'AAPL', price: 175.12, change: 2.35 },
    { name: 'GOOG', price: 2800.75, change: -1.42 },
    { name: 'AMZN', price: 3300.21, change: 0.75 },
    // Pode adicionar mais...
  ];
  
  const tickerContent = document.getElementById('ticker-content');
  
  // Preenche o ticker
  stocks.forEach(stock => {
    const stockElement = document.createElement('span');
    stockElement.classList.add('stock');
    stockElement.classList.add(stock.change >= 0 ? 'positive' : 'negative');
    stockElement.innerText = `${stock.name}: $${stock.price.toFixed(2)} (${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)}%)`;
    tickerContent.appendChild(stockElement);
  });
  
  // Duplica para efeito contínuo
  tickerContent.innerHTML += tickerContent.innerHTML;
  
  // Função para iniciar a animação com velocidade automática
  function startTickerAnimation() {
    const ticker = document.getElementById('ticker');
    const contentWidth = tickerContent.offsetWidth;
    const containerWidth = ticker.offsetWidth;
  
    // Tempo baseado no tamanho: (quanto maior, mais tempo)
    const duration = contentWidth / 100; // Você pode ajustar esse "100" para ficar mais rápido/lento
    
    ticker.style.animation = `scroll ${duration}s linear infinite`;
  }
  
  // Define a animação
  const style = document.createElement('style');
  style.innerHTML = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  `;
  document.head.appendChild(style);
  
  // Quando carregar
  window.onload = startTickerAnimation;
  window.onresize = startTickerAnimation; // Recalcula se a tela mudar
  