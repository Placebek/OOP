import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import './ModalAnimations.css'; // файл с CSS анимациями

const MusicList = (props) => {
    const [isOpen, setCheckOpen] = useState(false);
    const [isOpenSmallWindow, setSmallWindow] = useState(false);

    const openWindow = () => {
        setCheckOpen(true);
        setSmallWindow(false);
    };

    const closeSmallWindow = () => {
        setSmallWindow(false)
    }

    const closeWindow = () => {
        setCheckOpen(false);
        setTimeout(() => {
            setSmallWindow(true);
        }, 700);
    };

    const checkLike = props.post.liked ? '#FF7373' : 'currentColor';

    return (
        <div className="mt-1 pt-0.5 ml-3 flex flex-nowrap border-0 border-t-2 border-stone-400/50">
            {/* Кнопка для открытия модального окна */}
            <button
                onClick={openWindow}
                className="flex flex-nowrap w-full">
                <div className="h-[50px] w-[50px]">
                    <img className='rounded-lg' src={props.post.img} alt="Картина песни" />
                </div>
                <div className="ml-[26px] flex flex-col">
                    <div className="pb-0 h-[20px] font-medium text-gray-950">
                        {props.post.title}
                    </div>
                    <div className="h-[20px] text-gray-700">
                        {props.post.authorName}
                    </div>
                </div>
            </button>

            <div className="ml-auto mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={checkLike} className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </div>



            {/* Большое окно */}
            <CSSTransition
                in={isOpen}
                timeout={500}
                classNames="modal"
                appear
                unmountOnExit
            >
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-end">
                    <div className={'bg-[#504e4a] w-full h-[580px] rounded-t-2xl relative'}>
                        <button className="h-20 w-20 absolute top-4 right-4" onClick={closeWindow}>
                            <img className="" src="" alt="Назад" />
                        </button>
                    </div>
                </div>
            </CSSTransition>



            {/* Маленькое окно */}
            <CSSTransition
                in={isOpenSmallWindow}
                timeout={200}
                classNames="small-modal"
                unmountOnExit
            >
                <div className="fixed bottom-0 left-0 right-0 bg-[#ffffff] h-[75px] mb-[75px] flex flex-nowrap">
                    <div className="h-[75px] w-[75px]">
                        <img className='' src={props.post.img} alt="Картина песни" />
                    </div>
                    <div className="ml-[26px] flex flex-col mt-3">
                        <div className="pb-0 text-[22px] font-slim text-gray-950">
                            {props.post.title}
                        </div>
                        <div className="text-[12px] text-gray-700 font-light">
                            {props.post.authorName}
                        </div>
                    </div>
                    <div className="ml-auto mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={checkLike} className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </div>
                    <button onClick={closeSmallWindow} className="">Закрыть</button>
                </div>
            </CSSTransition>


        </div>
    );
};

export default MusicList;
