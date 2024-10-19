import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Оставляем стандартные стили для функциональности
import './customAudioPlayer.css'; // Подключаем наш кастомный CSS

import music from '../../../templates/mp3/Darkhan Juzz - Sheker (kazmuz.kz).mp3';

const MP3Player = ({ musics }) => {
    const [currentTrack, setCurrentTrack] = useState(musics[0]);

    const handleNextTrack = () => {
        const currentIndex = musics.indexOf(currentTrack);
        const nextIndex = (currentIndex + 1) % musics.length;
        setCurrentTrack(musics[nextIndex]);
    };

    const handlePreviousTrack = () => {
        const currentIndex = musics.indexOf(currentTrack);
        const prevIndex = (currentIndex - 1 + musics.length) % musics.length;
        setCurrentTrack(musics[prevIndex]);
    };

    return (
        <div className="w-[300px] mb-[30px]">
            <AudioPlayer
                src={music}
                autoPlay
                onPlay={() => console.log("Playing")}
                onClickNext={handleNextTrack}
                onClickPrevious={handlePreviousTrack}
                customAdditionalControls={[]}
                customVolumeControls={[]}
                showSkipControls={true}
                className="audio-player-custom"
            />
        </div>
    );
};

export default MP3Player;
