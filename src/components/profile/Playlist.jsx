import React from 'react'
import PlaylistItems from './PlaylistItems'
import { useSelector } from 'react-redux'

function Playlist() {
    const { playlistData } = useSelector(state => state.playlist)

    return (
        <div className='ml-[10px] mt-7'>
            <div className="text-[25px] ml-1 text-[#535151] font-medium">Sizdiń pleılıst</div>
            <div className="flex flex-row flex-wrap mt-3 gap-x-9">
                {playlistData.map((playlist) => (
                    <div key={playlist.id} className="bg-[#393442] w-[43vw] rounded-[11px] mt-2">
                        <PlaylistItems props={playlist} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Playlist
