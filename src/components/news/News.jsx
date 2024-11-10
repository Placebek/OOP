import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewsItems from './NewsItems'
import '../shadow_css/shadow.css'
import { Link } from 'react-router-dom';
import { openNewsWindow } from '../../store/slices/newsSlices'

function News() {
    const dispatch = useDispatch()
    const { newsData } = useSelector(state => state.news)
    const [isActiveButton, setActiveButton] = useState('alem');

    const changeButton = (element) => {
        setActiveButton(element)
    }
    return (
        <div className='min-h-screen bg-diagonal-gradient'>
            <div className="flex flex-row gap-5 mt-4">
                <button onClick={() => changeButton('alem')} className={`rounded-3xl ml-3 px-4 py-2 text-base font-medium ${isActiveButton === 'alem' ? 'bg-[#FF9500]' : 'bg-white'}`}>Alem</button>
                <button onClick={() => changeButton('qaz')} className={`rounded-3xl px-4 py-2 text-base font-medium ${isActiveButton === 'qaz' ? 'bg-[#FF9500]' : 'bg-white'}`}>Qazaqstan</button>
                <button onClick={() => changeButton('juyrda')} className={`rounded-3xl px-4 py-2 text-base font-medium ${isActiveButton === 'juyrda' ? 'bg-[#FF9500]' : 'bg-white'}`}>Jýyrda</button>
                <button onClick={() => changeButton('top')} className={`rounded-3xl px-4 py-2 text-base font-medium ${isActiveButton === 'top' ? 'bg-[#FF9500]' : 'bg-white'}`}>top-10</button>
            </div>
            <div className="flex flex-row mt-3">
                <div className='w-full'>
                    {newsData.map((props) =>
                        <div
                            key={props.id}
                            style={{
                                backgroundImage: `linear-gradient(180deg, rgba(98, 98, 98, 0.35) 7.42%, #000000 100%), url(${props.news_logo})`,

                            }}
                            className='h-[120px] mb-2 rounded-lg bg-cover bg-center '
                        >
                            <Link to={`/news/${props.id}`} onClick={() => dispatch(openNewsWindow())}>
                                <NewsItems props={props} />
                            </Link>
                        </div>

                    )}
                </div>
            </div>
        </div >
    )
}

export default News