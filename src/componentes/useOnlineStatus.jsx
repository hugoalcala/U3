import { use, useEffect, useState } from "react";
const useOnlineStatus = () =>{
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() =>{
        const setOnline = () => setIsOnline(true);
        const setOffline =()=> setIsOnline(false);

        window.addEventListener('online', setOnline);
        window.addEventListener('offline', setOffline);

        return () =>{
            window.removeEventListener('onLine', setIsOnline);
            window.removeEventListener('offline', setOffline);
        }
    },[]);
    return isOnline
}

export default useOnlineStatus;