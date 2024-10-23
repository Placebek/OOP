import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import stylesLarge from './customAudioPlayer.module.css';  // Импортируем как объект
import stylesSmall from './customSmallAudio.module.css';   // Импортируем как объект
import { useSelector } from 'react-redux';

const MP3Player = ({ isOpenSmallWindow, isOpenLargeWindow }) => {
    const { selectedMusic } = useSelector(state => state.window);

    let nameClass = '';
    if (isOpenLargeWindow && !isOpenSmallWindow) {
        nameClass = stylesLarge['audio-large-window'];
    } else if (isOpenSmallWindow) {
        nameClass = stylesSmall['audio-small-window'];
    }
    return (
        <div className="w-[300px] mb-[30px]">
            <AudioPlayer
                src={selectedMusic.music}
                autoPlay
                onPlay={() => console.log("Playing")}
                customAdditionalControls={[]}
                customVolumeControls={[]}
                customProgressBarSection={['PROGRESS_BAR']}
                showSkipControls={true}
                className={nameClass}  // Применяем класс через переменную
            />
        </div>
    );
};

export default MP3Player;
