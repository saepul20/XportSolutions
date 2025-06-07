document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active'); // Untuk animasi hamburger
        });
    }

    // Set Current Year in Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scroll for anchor links (opsional, jika ada #link di halaman yang sama)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if (targetElement) {
    //             targetElement.scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });

    // Contact Form Handling (basic, no actual submission)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            // Basic validation example (can be expanded)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                formMessage.textContent = 'Harap isi semua field yang wajib diisi.';
                formMessage.style.color = 'red';
                return;
            }
            
            // Simulate form submission
            formMessage.textContent = 'Pesan Anda telah diterima! Tim kami akan segera menghubungi Anda. (Ini hanya simulasi)';
            formMessage.style.color = 'green';
            contactForm.reset(); // Clear the form
            
            // Anda akan memerlukan backend untuk mengirim email atau menyimpan data.
            // Contoh:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     body: new FormData(contactForm)
            // }).then(response => response.json())
            // .then(data => { ... })
            // .catch(error => { ... });
        });
    }

});