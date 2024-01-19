// authService.js
import axios from 'axios';

export const checkAuthentication = async () => {
    try {
        const response = await axios.get(process.env.VUE_APP_BASE_URI + 'logged');
        return response.data.authenticated; // Supponendo che il server restituisca un campo "authenticated"
    } catch (error) {
        console.error('Errore durante la verifica dell\'autenticazione', error);
        return false;
    }
};
