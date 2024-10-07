import React, { useState } from "react";
import './ModalAnimations.css';
import MusicModalWindow from "./modals/MusicModalWindow";
import SmallWindow from "./modals/MusicSmallModalWindow";
import MusicItems from "./UI/button/MusicItems";

const MusicList = (props) => {
    const [isOpen, setCheckOpen] = useState(false);
    const [isOpenSmallWindow, setSmallWindow] = useState(false);

    const openWindow = () => {
        if (!isOpenSmallWindow) {
            setCheckOpen(true);
        }
    };

    const closeSmallWindow = () => {
        setSmallWindow(false)
    }

    const closeWindow = () => {
        setCheckOpen(false);
        setTimeout(() => {
            setSmallWindow(true);
        }, 300);
    };

    const checkLike = props.post.liked ? '#FF7373' : 'currentColor';

    return (
        <div className="mt-1 pt-0.5 ml-3 flex flex-nowrap border-0 border-t-2 border-stone-400/50">
            <MusicItems openWindow={openWindow} props={props.post} />
            <div className="ml-auto mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={checkLike} className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </div>

            <MusicModalWindow props={props} isOpen={isOpen} isOpenSmallWindow={isOpenSmallWindow} closeWindow={closeWindow} />
            <SmallWindow props={props} isOpenSmallWindow={isOpenSmallWindow} closeSmallWindow={closeSmallWindow} checkLike={checkLike} />

        </div>
    );
};

export default MusicList;
