import React from "react";
import { CSSTransition } from "react-transition-group";

const SmallWindow = ({ props, isOpenSmallWindow, closeSmallWindow, checkLike }) => {

    return (
        <CSSTransition
            in={isOpenSmallWindow}
            timeout={500}
            classNames="small-modal"
            unmountOnExit
        >
            <div className="fixed bottom-0 left-0 right-0 bg-[#ffffff] h-[75px] mb-[75px] flex flex-nowrap shadow-2xl">
                <div className="h-[75px] w-[75px]">
                    <img className='' src={props.post.img} alt="Картина песни" />
                </div>
                <div className="ml-[26px] flex flex-col mt-3">
                    <div className="pb-0 text-[22px] font-slim text-gray-800">
                        {props.post.title}
                    </div>
                    <div className="text-[12px] text-gray-700 font-light">
                        {props.post.authorName}
                    </div>
                </div>
                <div className="ml-auto mr-6 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={checkLike} className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <button onClick={closeSmallWindow} className="mr-6">
                        <img src="" alt="" />fff
                    </button>
                </div>
            </div>
        </CSSTransition>

    );
};

export default SmallWindow;