import React, { useState } from "react";
import '../shadow_css/shadow.css'

const Menu = () => {

    const [activeMenu, setActiveButton] = useState('home');
    const checkLike = activeMenu === 'fire' ? '#e5472e' : 'currentColor';

    const changeActive = (menu) => {
        setActiveButton(menu);
    }

    return (
        <footer>
            <div className="fixed bottom-0 left-0 right-0 h-[60] bg-white">
                <div className="">
                    <ul className="flex justify-between items-center">
                        <li className="ml-20 pt-2 mb-2">
                            <button onClick={() => changeActive('home')} className={`h-[32px] w-[32px] ${activeMenu === 'home' ? 'custom-shadow' : 'shadow-none'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </button>
                        </li>
                        <li className="pt-2 mb-2">
                            <button onClick={() => changeActive('fire')} className={`${activeMenu === 'fire' ? 'custom-fire-shadow' : 'shadow-none'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={checkLike} className="bi bi-fire" viewBox="0 0 16 16">
                                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                                </svg>
                            </button>
                        </li>
                        <li className="mr-20 pt-2 mb-2">
                            <button onClick={() => changeActive('profile')} className={`${activeMenu === 'profile' ? 'custom-shadow' : 'shadow-none'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Menu;
