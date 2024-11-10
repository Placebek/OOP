import React from 'react'

function PlaylistItems({ props }) {

    return (
        <div>
            <div className="flex flex-nowrap p-0">
                <img className='w-[65px] h-[65px] rounded-[11px]' src={props.playlist_logo} alt="Suret" />
                <div className="font-medium ml-3 text-white max-w-[100px]">{props.playlist_name}</div>
            </div>
        </div>
    )
}

export default PlaylistItems