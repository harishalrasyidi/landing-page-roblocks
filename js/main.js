// Fungsi untuk smooth scroll ke section saat menu diklik
document.addEventListener('DOMContentLoaded', function() {
    // Mengambil semua link di navbar
    const navLinks = document.querySelectorAll('header a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mengatur FAQ accordion
    const faqDetails = document.querySelectorAll('details');
    faqDetails.forEach(detail => {
        detail.addEventListener('click', () => {
            // Menutup FAQ lain saat satu FAQ dibuka
            faqDetails.forEach(otherDetail => {
                if (otherDetail !== detail && otherDetail.hasAttribute('open')) {
                    otherDetail.removeAttribute('open');
                }
            });
        });
    });

    // Mengatur tombol "Unduh Sekarang"
    const downloadButtons = document.querySelectorAll('button');
    downloadButtons.forEach(button => {
        if (button.textContent.trim() === 'Unduh Sekarang') {
            button.addEventListener('click', () => {
                // Ganti dengan URL download yang sebenarnya
                alert('Aplikasi akan segera tersedia di Play Store!');
            });
        }
    });

    // Animasi scroll untuk testimoni
    const testimonialContainer = document.querySelector('.flex.overflow-y-auto');
    if (testimonialContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        testimonialContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            testimonialContainer.classList.add('active');
            startX = e.pageX - testimonialContainer.offsetLeft;
            scrollLeft = testimonialContainer.scrollLeft;
        });

        testimonialContainer.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialContainer.classList.remove('active');
        });

        testimonialContainer.addEventListener('mouseup', () => {
            isDown = false;
            testimonialContainer.classList.remove('active');
        });

        testimonialContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialContainer.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialContainer.scrollLeft = scrollLeft - walk;
        });
    }
}); 