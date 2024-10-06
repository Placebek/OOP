import React from "react";

const MusicItems = ({ openWindow, props }) => {
    return (
        <button
            onClick={openWindow}
            className="flex flex-nowrap w-full">
            <div className="h-[50px] w-[50px]">
                <img className='rounded-lg' src={props.img} alt="Картина песни" />
            </div>
            <div className="ml-[26px] flex flex-col">
                <div className="pb-0 h-[20px] font-medium text-gray-950">
                    {props.title}
                </div>
                <div className="h-[20px] text-gray-700">
                    {props.authorName}
                </div>
            </div>
        </button>

    )
}

export default MusicItems