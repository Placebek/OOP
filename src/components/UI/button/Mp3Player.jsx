import { useEffect, useRef, useState } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import '../../shadow_css/shadow.css';

const MP3Player = ({ isOpenSmallWindow }) => {
    const { selectedMusic } = useSelector(state => state.window);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(selectedMusic.music));
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(selectedMusic.music);

        const updateDuration = () => {
            setDuration(audioRef.current.duration);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(audioRef.current.currentTime);
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        };

        audioRef.current.addEventListener('loadedmetadata', updateDuration);
        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

        if (isPlaying) audioRef.current.play();

        return () => {
            audioRef.current.removeEventListener('loadedmetadata', updateDuration);
            audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.pause();
        };
    }, [selectedMusic.music, isPlaying]);

    const handleProgressChange = (e) => {
        const newTime = (e.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
        setProgress(e.target.value);
    };

    const playPause = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div>
            <div className="time-info">
                <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className={`fixed bottom-0 ${isOpenSmallWindow ? 'active-progress w-full custom-progress-shadow mb-[109px]' : 'mb-[150px] left-1/2 transform -translate-x-1/2 w-[350px] large-progress'}`}
            />
            <div className="control-buttons">
                <button className={`${isOpenSmallWindow ? 'hidden' : 'fixed bottom-[80px] ml-[110px]'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 20L9 12L19 4L19 20Z" fill="#939393" stroke="#939393" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 19L5 5" stroke="#939393" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <button onClick={playPause} className={`${isOpenSmallWindow ? 'fixed bottom-9 right-0' : 'fixed bottom-16 left-1/2 transform -translate-x-1/2'}`}>
                    {isPlaying ? (
                        <svg width="60" height="60" viewBox="0 0 74 74">
                            <circle cx="37" cy="37" r="37" fill="#939393" className={isOpenSmallWindow ? 'hidden' : ''} />
                            <path stroke={isOpenSmallWindow ? "#ABABAB" : "white"} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d={isOpenSmallWindow ? "M46 5v30M29 5v30" : "M46 25v25M29 25v25"} />
                        </svg>
                    ) : (
                        <svg width="60" height="60" viewBox="0 0 74 74">
                            <circle cx="37" cy="37" r="37" fill="#939393" className={isOpenSmallWindow ? 'hidden' : ''} />
                            <path stroke={isOpenSmallWindow ? "#ABABAB" : "white"} fill={isOpenSmallWindow ? "#ABABAB" : "white"} strokeLinecap="round" strokeWidth="8" strokeLinejoin="round" d={isOpenSmallWindow ? "M30 5 L30 40 L54 23Z" : "M30 17 L30 51 L54 35Z"} />
                        </svg>
                    )}
                </button>

                <button className={`${isOpenSmallWindow ? 'hidden' : 'fixed bottom-[80px] right-0 mr-[110px]'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 4L15 12L5 20V4Z" fill="#939393" stroke="#939393" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 5V19" stroke="#939393" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default MP3Player;
