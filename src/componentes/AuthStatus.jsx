import React, { useContext } from 'react';
import AuthContext from './AuthContext.jsx'; 

const AuthStatus = () => {
    const { user, login } = useContext(AuthContext);

    const log = () => {
        login('Hugo'); 
    };

    const logout = () => {
        login(null);
    };

    if (user) {
        return (
            <div>
                <p>Bienvenido {user}</p>
                <button onClick={logout}>Cerrar Sesión</button>
            </div>
        );
    } else {
        return (
            <div>
                <p> No autenticado</p>
                <button onClick={log}>Iniciar Sesión</button>
            </div>
        );
    }
};

export default AuthStatus;