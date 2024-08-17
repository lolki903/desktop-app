import { useEffect, useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { FaHouseFloodWater } from 'react-icons/fa6';

export const Theme = () => {
    const [dark, setDark] = useState(false);
    const changeTheme = () => {
        setDark(!dark);
        if (dark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }
    useEffect(() => {
        const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDark(darkTheme);
    }
    , []);
    return (
        <div>
            {dark ? <FaMoon onClick={changeTheme} /> : <FaHouseFloodWater onClick={changeTheme} />}
        </div>
    );
}