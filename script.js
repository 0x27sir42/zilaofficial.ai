// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scroll and active link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu
                navMenu.classList.remove('active');
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Airdrop Modal functionality
    const preRegisterBtn = document.getElementById('preRegisterBtn');
    const airdropModal = document.getElementById('airdropModal');
    const modalClose = document.getElementById('modalClose');
    const airdropForm = document.getElementById('airdropForm');
    
    if (preRegisterBtn) {
        preRegisterBtn.addEventListener('click', function() {
            airdropModal.classList.add('active');
        });
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            airdropModal.classList.remove('active');
        });
    }
    
    // Close modal on outside click
    window.addEventListener('click', function(e) {
        if (e.target === airdropModal) {
            airdropModal.classList.remove('active');
        }
    });
    
    // Form submission
    if (airdropForm) {
        airdropForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const walletAddress = document.getElementById('walletAddress').value;
            const referralCode = document.getElementById('referralCode').value;
            
            // Simulate form submission
            alert(`Registration Successful!\n\nWallet: ${walletAddress}\nReferral Code: ${referralCode || 'None'}\n\nYou will receive confirmation via email soon!`);
            
            // Close modal and reset form
            airdropModal.classList.remove('active');
            airdropForm.reset();
        });
    }
    
    // Tokenomics Chart
    const chartCanvas = document.getElementById('tokenomicsChart');
    if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');
        
        // Chart data
        const data = [40, 10, 20, 15, 8, 5, 2];
        const labels = ['Staking', 'Liquidity', 'Ecosystem', 'Presale & Private Sale', 'Team', 'Burn', 'Airdrop'];
        const colors = ['#3B82F6', '#EF4444', '#F59E0B', '#DC2626', '#2563EB', '#7C3AED', '#A78BFA'];
        
        // Calculate total and percentages
        const total = data.reduce((a, b) => a + b, 0);
        let currentAngle = -Math.PI / 2; // Start from top
        
        // Set canvas size
        const size = 400;
        chartCanvas.width = size;
        chartCanvas.height = size;
        const centerX = size / 2;
        const centerY = size / 2;
        const radius = size / 2 - 20;
        
        // Draw pie chart
        data.forEach((value, index) => {
            const sliceAngle = (value / total) * 2 * Math.PI;
            
            // Draw slice
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.lineTo(centerX, centerY);
            ctx.fillStyle = colors[index];
            ctx.fill();
            
            // Draw border
            ctx.strokeStyle = '#0A0A0F';
            ctx.lineWidth = 3;
            ctx.stroke();
            
            currentAngle += sliceAngle;
        });
        
        // Add hover effect
        const tokenDetails = document.querySelectorAll('.token-detail');
        
        tokenDetails.forEach((detail, index) => {
            detail.addEventListener('mouseenter', function() {
                // Highlight corresponding segment
                this.style.background = 'rgba(139, 92, 246, 0.2)';
                
                // Redraw chart with highlighted segment
                ctx.clearRect(0, 0, size, size);
                let angle = -Math.PI / 2;
                
                data.forEach((value, i) => {
                    const sliceAngle = (value / total) * 2 * Math.PI;
                    
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, i === index ? radius + 10 : radius, angle, angle + sliceAngle);
                    ctx.lineTo(centerX, centerY);
                    ctx.fillStyle = colors[i];
                    ctx.fill();
                    
                    ctx.strokeStyle = '#0A0A0F';
                    ctx.lineWidth = 3;
                    ctx.stroke();
                    
                    angle += sliceAngle;
                });
            });
            
            detail.addEventListener('mouseleave', function() {
                this.style.background = 'rgba(26, 26, 46, 0.6)';
                
                // Redraw normal chart
                ctx.clearRect(0, 0, size, size);
                let angle = -Math.PI / 2;
                
                data.forEach((value, i) => {
                    const sliceAngle = (value / total) * 2 * Math.PI;
                    
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, radius, angle, angle + sliceAngle);
                    ctx.lineTo(centerX, centerY);
                    ctx.fillStyle = colors[i];
                    ctx.fill();
                    
                    ctx.strokeStyle = '#0A0A0F';
                    ctx.lineWidth = 3;
                    ctx.stroke();
                    
                    angle += sliceAngle;
                });
            });
        });
    }
    
    // Scroll animations
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
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.ecosystem-card, .team-card, .ecosystem-detail-card, .roadmap-card, .partnership-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection && scrolled < window.innerHeight) {
            const token3d = document.querySelector('.token-3d');
            if (token3d) {
                token3d.style.transform = `translateY(${scrolled * 0.3}px) rotateY(${scrolled * 0.1}deg)`;
            }
        }
    });
    
    // Add glow effect on mouse move for cards
    const cards = document.querySelectorAll('.ecosystem-card, .team-card, .partnership-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
    console.log('ZILA Website loaded successfully! 🚀');
});
