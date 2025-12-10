// Form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Create mailto link
    const mailtoLink = `mailto:seu-email@example.com?subject=Solicitação de Consultoria - ${encodeURIComponent(name)}&body=Nome: ${encodeURIComponent(name)}%0AE-mail: ${encodeURIComponent(email)}%0ATelefone: ${encodeURIComponent(phone)}%0A%0AMensagem:%0A${encodeURIComponent(message)}`;
    
    // For demonstration, show success message
    alert('Obrigado pela sua solicitação! Entraremos em contato em breve.');
    
    // Reset form
    this.reset();
    
    // Uncomment the line below to actually send the email
    // window.location.href = mailtoLink;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.proposta-card, .timeline-item, .investimento-card, .roi-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
