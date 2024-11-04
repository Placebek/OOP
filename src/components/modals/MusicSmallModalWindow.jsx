import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import '../shadow_css/shadow.css'


const SmallWindow = ({ musics, isOpenSmallWindow, openWindow }) => {
    const nodeRef = useRef(null);
    const checkLike = musics.liked ? '#FF7373' : 'currentColor';
    return (

        <CSSTransition
            in={isOpenSmallWindow}
            timeout={500}
            classNames="small-modal"
            unmountOnExit
            nodeRef={nodeRef}
        >
            <div ref={nodeRef} onClick={openWindow} className="fixed bottom-0 left-0 right-0 bg-[#ffffff] h-[60px] mb-[53px] flex flex-nowrap border-0 custom-small-window-shadow">
                <div className="h-[60px] w-[60px]">
                    <img className='' src={musics.img} alt="Картина песни" />
                </div>
                <div className="ml-[26px] flex flex-col mt-2">
                    <div className="pb-0 text-[20px] font-slim text-gray-800">
                        {musics.title}
                    </div>
                    <div className="text-[12px] text-gray-700 font-light">
                        {musics.authorName}
                    </div>
                </div>
                <div className="ml-auto mr-16 mt-[13px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='1.5' stroke={checkLike} className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
            </div>
        </CSSTransition >

    );
};

export default SmallWindow;