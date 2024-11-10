import React from 'react'

function NewsItems({ props }) {
    return (
        <div className="relative h-full flex items-end">
            <div className="absolute font-medium ml-3 top-0 text-white">{props.news_title}</div>
            <div className="absolute bottom-2 left-3 text-white font-light">
                {props.news_author}
            </div>
            <div className="absolute bottom-2 right-3 text-white font-light">
                {props.news_created_date}
            </div>
        </div>
    )
}

export default NewsItems
