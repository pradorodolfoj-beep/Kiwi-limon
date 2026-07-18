// Sistema de autenticación global para Kiwi Limón
const AuthSystem = {
    // Cambia aquí tu contraseña si lo deseas
    _secret: "kiwi2026", 

    isLoggedIn: function() {
        return localStorage.getItem('kiwi_admin_session') === 'active';
    },

    login: function(username, password) {
        if (username.toLowerCase() === 'admin' && password === this._secret) {
            localStorage.setItem('kiwi_admin_session', 'active');
            return true;
        }
        return false;
    },

    logout: function() {
        localStorage.removeItem('kiwi_admin_session');
    }
};
