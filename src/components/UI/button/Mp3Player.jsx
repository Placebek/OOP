import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './customAudioPlayer.css';
import { useDispatch, useSelector } from 'react-redux';

const MP3Player = ({ musics }) => {
    // const [currentTrack, setCurrentTrack] = useState(musics[0]);
    const { selectedMusic } = useSelector(state => state.window)

    // const handleNextTrack = () => {
    //     const currentIndex = musics.indexOf(currentTrack);
    //     const nextIndex = (currentIndex + 1) % musics.length;
    //     setCurrentTrack(musics[nextIndex]);
    // };

    // const handlePreviousTrack = () => {
    //     const currentIndex = musics.indexOf(currentTrack);
    //     const prevIndex = (currentIndex - 1 + musics.length) % musics.length;
    //     setCurrentTrack(musics[prevIndex]);
    // };

    return (
        <div className="w-[300px] mb-[30px]">
            <AudioPlayer
                src={selectedMusic.music}
                autoPlay
                onPlay={() => console.log("Playing")}
                // onClickNext={handleNextTrack}
                // onClickPrevious={handlePreviousTrack}
                customAdditionalControls={[]}
                customVolumeControls={[]}
                showSkipControls={true}
                className="audio-player-custom"
            />
        </div>
    );
};

export default MP3Player;
