import React, { useEffect } from "react";
import './ModalAnimations.css';
import MusicModalWindow from "./modals/MusicModalWindow";
import SmallWindow from "./modals/MusicSmallModalWindow";
import MusicItems from "./UI/button/MusicItems";
import { useDispatch, useSelector } from 'react-redux';
import { closeLargeOpenSmallWindow, openLargeWindow, changeSmallWindow, loadMusicData } from '../store/slices/windowSlice';

const MusicList = () => {  // передаем данные музыки через пропсы или получаем из Redux
    const dispatch = useDispatch();

    // Получение данных из Redux
    const windowState = useSelector(state => state.window);
    const { windowData, isLargeWindowOpen, isSmallWindowOpen } = windowState || {};
    console.log(windowData)


    // Эффект для начальной загрузки данных (если они хранятся в Redux)
    // useEffect(() => {
    //     if (windowData.length > 0) {
    //         dispatch(loadMusicData());
    //     }
    // }, [windowData, dispatch]);

    // Функция для выбора новой песни
    const handleSelectMusic = (music) => {
        dispatch(changeSmallWindow(music));  // Передаем данные выбранной песни в действие
        dispatch(openLargeWindow());  // Открываем большое окно с песней
    };

    const LargeWindowClose = () => {
        dispatch(closeLargeOpenSmallWindow());
    };

    return (
        <div className="mt-1 pt-0.5 ml-3 flex flex-nowrap border-0 border-t-2 border-stone-400/50">
            {windowData.map((music) => {  // отрисовываем изначально доступные песни
                const checkLike = music.liked ? '#FF7373' : 'currentColor';
                return (
                    <div key={music.id} className="music-item" onClick={() => handleSelectMusic(music)}> {/* По клику на элемент меняем окно */}
                        <MusicItems openWindow={openLargeWindow} props={music} />
                        <div className="ml-auto mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={checkLike} className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                    </div>
                );
            })}
            <MusicModalWindow props={windowData} isOpen={isLargeWindowOpen} isOpenSmallWindow={isSmallWindowOpen} closeWindow={LargeWindowClose} />
            <SmallWindow props={windowData} isOpenSmallWindow={isSmallWindowOpen} closeSmallWindow={LargeWindowClose} />
        </div>
    );
};

export default MusicList;
