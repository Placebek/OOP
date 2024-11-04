import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import 'react-h5-audio-player/lib/styles.css';
import '../../shadow_css/shadow.css';

const MP3Player = ({ isOpenSmallWindow }) => {
    const { selectedMusic } = useSelector(state => state.window);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(selectedMusic.music));
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const { musicdata } = useSelector(state => state.window);

    useEffect(() => {
        const audio = audioRef.current;
        audio.pause();
        audio.src = selectedMusic.music;

        const updateDuration = () => setDuration(audio.duration);
        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
            setProgress((audio.currentTime / audio.duration) * 100);
        };

        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.pause();
        };
    }, [selectedMusic.music]);

    const handleProgressChange = (e) => {
        const newTime = (e.target.value / 100) * duration;
        audioRef.current.currentTime = newTime;
        setProgress(e.target.value);
    };

    const playPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div>
            <input
                type="range"
                min="0"
                max="100"
                value={isNaN(progress) ? 0 : progress}
                onChange={handleProgressChange}
                className={`fixed bottom-0 ${isOpenSmallWindow ? 'active-progress w-full custom-progress-shadow mb-[109px]' : 'mb-[150px] left-1/2 transform -translate-x-1/2 w-[350px] large-progress'}`}
            />
            <div className={`${isOpenSmallWindow ? 'hidden' : 'fixed bottom-5 left-1/2 transform -translate-x-1/2 flex gap-[290px]'} md:flex md:gap-4`}>
                <div className='mb-[100px]'>{formatTime(currentTime)}</div>
                <div className='mb-[100px]'>{formatTime(duration)}</div>
            </div>

            <div className="control-buttons">
                {/* Кнопка предыдущего трека */}
                <button className={`${isOpenSmallWindow ? 'hidden' : 'fixed bottom-[80px] ml-[110px]'} md:bottom-[90px] md:ml-4`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 20L9 12L19 4L19 20Z" fill="#939393" stroke="#939393" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 19L5 5" stroke="#939393" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Кнопка воспроизведения/паузы */}
                <button onClick={playPause} className={`${isOpenSmallWindow ? 'fixed bottom-[58px] right-3' : 'fixed bottom-16 left-1/2 transform -translate-x-1/2'} md:bottom-20`}>
                    {isPlaying ? (
                        <svg
                            width={isOpenSmallWindow ? "40" : "60"}
                            height={isOpenSmallWindow ? "40" : "60"}
                            viewBox="0 0 74 74"
                        >
                            {!isOpenSmallWindow && (
                                <circle cx="37" cy="37" r="37" fill="#939393" />
                            )}
                            <path
                                stroke={isOpenSmallWindow ? "#939393" : "white"}
                                strokeWidth={isOpenSmallWindow ? "9" : "7"}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={isOpenSmallWindow ? "M42 10v40 M18 10v40" : "M46 25v25M29 25v25"}
                            />
                        </svg>
                    ) : (
                        <svg
                            width={isOpenSmallWindow ? "40" : "60"}
                            height={isOpenSmallWindow ? "40" : "60"}
                            viewBox="0 0 74 74"
                        >
                            {!isOpenSmallWindow && (
                                <circle cx="37" cy="37" r="37" fill="#939393" />
                            )}
                            <path
                                stroke={isOpenSmallWindow ? "#939393" : "white"}
                                fill={isOpenSmallWindow ? "#939393" : "white"}
                                strokeLinecap="round"
                                strokeWidth={isOpenSmallWindow ? "9" : "8"}
                                strokeLinejoin="round"
                                d={isOpenSmallWindow ? "M20 10 L20 55 L55 34Z" : "M30 25 L30 50 L50 37Z"}
                            />
                        </svg>
                    )}
                </button>

                {/* Кнопка следующего трека */}
                <button className={`${isOpenSmallWindow ? 'hidden' : 'fixed bottom-[80px] right-0 mr-[110px]'} md:bottom-[90px] md:mr-4`}>
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
