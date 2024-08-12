import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [destinations, setDestinations] = useState([]);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://fir-mk-1-52b42-default-rtdb.asia-southeast1.firebasedatabase.app/destinations.json');
                setDestinations(Object.values(response.data));
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ destinations, setDestinations, theme, setTheme }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}

// Exporting AppContext directly
export { AppContext };
