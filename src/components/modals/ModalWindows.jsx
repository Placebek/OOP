import React from 'react'
import MusicModalWindow from "./MusicModalWindow";
import SmallWindow from "./MusicSmallModalWindow";
import { closeLargeOpenSmallWindow, openLargeWindow, closeSmallWindow } from '../../store/slices/windowSlice';
import MP3Player from "../UI/button/Mp3Player";
import { useDispatch, useSelector } from 'react-redux';


function ModalWindows() {
    const dispatch = useDispatch();
    const windowState = useSelector(state => state.window);
    const { isLargeWindowOpen, isSmallWindowOpen, selectedMusic } = windowState || {};
    const LargeWindowClose = () => {
        dispatch(closeLargeOpenSmallWindow());
    };
    const LargeWindowOpen = () => {
        dispatch(closeSmallWindow())
        dispatch(openLargeWindow());
    }
    return (
        <>
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
    )
}

export default ModalWindows