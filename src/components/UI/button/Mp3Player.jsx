import { useEffect, useRef } from 'react';
import React, { useState } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';

const MP3Player = ({ isOpenSmallWindow, isOpenLargeWindow }) => {
    const { selectedMusic } = useSelector(state => state.window);

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(selectedMusic.music));
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        audioRef.current = new Audio(selectedMusic.music);
        if (isPlaying) {
            audioRef.current.play();
        }
        const handleTimeUpdate = () => {
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        };
        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        return () => {
            audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [selectedMusic.music, isPlaying]);


    const handleProgressChange = (e) => {
        const newTime = (e.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
        setProgress(e.target.value);
    };

    const playPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // const nextTrack = () => {
    //     const newIndex = (currentTrackIndex + 1) % tracks.length;
    //     setCurrentTrackIndex(newIndex);
    //     updateTrack(newIndex);
    // };

    // const prevTrack = () => {
    //     const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    //     setCurrentTrackIndex(newIndex);
    //     updateTrack(newIndex);
    // };

    return (
        <div className=''>
            <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className='fixed bottom-0 w-full mb-[144px] '
            />
            <button onClick={playPause} className='fixed bottom-[9.3]'>
                {isPlaying ? (
                    <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37" r="37" fill="#939393" className={isOpenSmallWindow ? '' : 'hidden'} />
                        <path stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" d="M46 20v35M28 20v35" />
                    </svg>


                ) : (
                    <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37" r="37" fill="#939393" className={isOpenSmallWindow ? '' : 'hidden'} />
                        <path stroke="#FFFFFF" fill="white" strokeLinecap="round" strokeWidth="7" strokeLinejoin="round" d="M28 20L28 54L51 37Z" />
                    </svg>

                )}
            </button>
        </div>
    );
};

export default MP3Player;
