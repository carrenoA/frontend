// static/js/main.js

const AUTH_CONFIG = {
    user: "admin@gantt.com",
    pass: "123456"
};

document.addEventListener('alpine:init', () => {
    Alpine.data('loginHandler', () => ({
        email: '',
        password: '',
        error: false,
        errorMessage: '',

        submitLogin() {
            this.error = false;

            if (this.email === AUTH_CONFIG.user && this.password === AUTH_CONFIG.pass) {
                // IMPORTANTE: pushUrl actualiza la barra de direcciones para que el F5 funcione
                htmx.ajax('GET', 'src/views/dashboard.html', {
                    target: '#app-container',
                    pushUrl: true
                });
            } else {
                this.error = true;
                this.errorMessage = "Credenciales incorrectas. Intenta con admin@gantt.com / 123456";
            }
        }
    }));
});

// Reinicializar iconos automáticamente después de que HTMX cargue nuevo contenido
document.body.addEventListener('htmx:afterOnLoad', () => {
    if (window.lucide) {
        lucide.createIcons();
    }
});
