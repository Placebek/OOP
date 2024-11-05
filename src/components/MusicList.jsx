import React from "react";
import './ModalAnimations.css';
import MusicModalWindow from "./modals/MusicModalWindow";
import SmallWindow from "./modals/MusicSmallModalWindow";
import MusicItems from "./UI/button/MusicItems";
import { useDispatch, useSelector } from 'react-redux';
import { closeLargeOpenSmallWindow, openLargeWindow, changeSmallWindow, closeSmallWindow } from '../store/slices/windowSlice';
import MP3Player from "./UI/button/Mp3Player";

const MusicList = () => {
    const dispatch = useDispatch();
    const windowState = useSelector(state => state.window);
    const { windowData, isLargeWindowOpen, isSmallWindowOpen, selectedMusic } = windowState || {};

    const handleSelectMusic = (music) => {
        dispatch(openLargeWindow());
        dispatch(changeSmallWindow(music));
        // console.log(selectedMusic)
    };


    const LargeWindowClose = () => {
        dispatch(closeLargeOpenSmallWindow());
    };
    const LargeWindowOpen = () => {
        dispatch(closeSmallWindow())
        dispatch(openLargeWindow());
    }

    return (
        <>
            {windowData.map((music) => {
                const checkLike = music.liked ? '#FF7373' : 'currentColor';
                return (
                    <div key={music.id} className="mt-1 pt-0.5 ml-3  border-0 border-t-2 border-stone-400/50">
                        <div className="flex flex-nowrap" onClick={() => handleSelectMusic(music)}>
                            <div>
                                <MusicItems props={music} />
                            </div>
                            <div className="ml-auto mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={checkLike} className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                );
            })}
            {selectedMusic && (
                <>
                    <MusicModalWindow
                        props={selectedMusic}
                        isOpen={isLargeWindowOpen}
                        isOpenSmallWindow={isSmallWindowOpen}
                        closeWindow={LargeWindowClose}
                    />
                    <SmallWindow
                        musics={selectedMusic}
                        isOpenSmallWindow={isSmallWindowOpen}
                        openWindow={LargeWindowOpen}
                    />
                    <MP3Player isOpenSmallWindow={isSmallWindowOpen} isOpenLargeWindow={isLargeWindowOpen} />
                </>
            )}
        </>
    );
};

export default MusicList;
