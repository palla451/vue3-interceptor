// authGuard.js
import { checkAuthentication } from '@/services/authService';
export const requireAuth = async (to, from, next) => {
    try {
        const isAuthenticated = await checkAuthentication();

        if (to.meta.requiresAuth) {
            if (isAuthenticated) {
                next();
            } else {
                next('/login');
            }
        } else {
            next();
        }
    } catch (error) {
        console.error('Errore durante la verifica dell\'autenticazione', error);
        next('/login'); // Reindirizza a /login in caso di errore
    }
};
