import React from 'react';
const AuthContext = React.createContext({
    user: null, 
    login: () => {}
});

export default AuthContext;