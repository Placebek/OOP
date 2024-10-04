
import React, { useState } from "react";
import '../shadow_css/shadow.css'

const Menu = () => {

    const [activeMenu, setActiveButton] = useState('home');

    const changeActive = (menu) => {
        setActiveButton(menu);
    }

    return (
        <footer>
            <div className="fixed bottom-0 left-0 right-0 ">
                <div className="bg-white h-[75px]">
                    <ul className="flex flex-row gap-24">
                        <li className="ml-[48px] mt-4">
                            <button onClick={() => changeActive('home')} className={`${activeMenu === 'home' ? 'custom-shadow' : 'shadow-none'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                                </svg>
                            </button>
                        </li>
                        <li className="mt-4">
                            <button onClick={() => changeActive('fire')} className={`${activeMenu === 'fire' ? 'custom-shadow' : 'shadow-none'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                                </svg>
                            </button>
                        </li>
                        <li className="mt-4">
                            <button onClick={() => changeActive('profile')} className={`${activeMenu === 'profile' ? 'custom-shadow' : 'shadow-none'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-11">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </button>

                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Menu;