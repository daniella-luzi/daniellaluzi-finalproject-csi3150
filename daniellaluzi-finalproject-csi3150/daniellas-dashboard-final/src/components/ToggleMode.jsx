import { useState, useEffect } from 'react';

function ToggleMode() {

    //getting a dark mode and getting local storage
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('isDark');
        return saved === 'true'; 
    });

    //setting local storage and adding or removing the dark class if the button is pushed
    useEffect(() => {

        localStorage.setItem('isDark', isDark);

        {isDark ? document.body.classList.add('darkMode')
        : document.body.classList.remove('darkMode');
        }; }, [isDark]);

    return(
        <button className="toggleBtn" onClick={() => setIsDark(!isDark)}>
            {isDark ? '☀️' : '🌙'}
        </button>
    );

}

export default ToggleMode;