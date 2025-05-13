// 1. Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');
  
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });
  
    // 2. Smooth Scroll to Sections
    const navLinks = document.querySelectorAll('.nav-list a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
          });
          navList.classList.remove('active');
          menuToggle.classList.remove('open');
        }
      });
    });
  
    // 3. Dynamic Product Rendering (Optional Feature)
    const productData = [
      {
        name: "Comfort Chair",
        price: "$120",
        image: "https://i.imgur.com/V4bXkXJ.png"
      },
      {
        name: "Wooden Table",
        price: "$250",
        image: "https://i.imgur.com/SvFcQFc.png"
      },
      {
        name: "Cozy Sofa",
        price: "$450",
        image: "https://i.imgur.com/N2Y94tN.png"
      }
    ];
  
    const productGrid = document.querySelector('.product-grid');
  
    if (productGrid) {
      productGrid.innerHTML = ''; // Clear existing static HTML
      productData.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <button class="add-to-cart-btn">Add to Cart</button>
        `;
        productGrid.appendChild(card);
      });
    }
  
    // 4. Alert on "Add to Cart" buttons
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart-btn')) {
        const productName = e.target.previousElementSibling.previousElementSibling.textContent;
        alert(`🛒 ${productName} added to your cart!`);
      }
    });
  
    // 5. Scroll Animation (fade in effect)
    const fadeElements = document.querySelectorAll('.product-card');
  
    const revealOnScroll = () => {
      fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          el.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
  });
  