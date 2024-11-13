import React, { useRef } from "react"
import { CSSTransition } from "react-transition-group";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { closeNewsWindow } from '../../store/slices/newsSlices'
import PageTransition from "../transitions/PageTransiton";




const NewsPage = () => {
    const dispatch = useDispatch()
    const { pk } = useParams();
    const { newsData, isNewsPageOpen } = useSelector(state => state.news)
    const props = newsData[pk - 1];
    console.log(isNewsPageOpen)

    return (

        <div className="bg-[#504e4a] min-h-screen bg-diagonal-gradient flex justify-center">
            <PageTransition>
                <div>
                    <div
                        key={props.id}
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(98, 98, 98, 0.35) 50%, #000000 100%), url(${props.news_logo})`,
                        }}
                        className='h-[35vh] mt-1 rounded-lg bg-cover bg-center relative '
                    >
                        <div className="">
                            <Link onClick={() => dispatch(closeNewsWindow())} to='/news' className="h-10 w-10 absolute left-1 ml-3 mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" class="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>

                            </Link>
                            <div className="absolute font-medium top-12 left-3 text-[14px] text-white">{props.news_title}</div>
                        </div>
                        <div className="absolute bottom-2 left-3 text-white ">
                            {props.news_author}
                        </div>
                        <div className="absolute bottom-2 right-3 text-white ">
                            {props.news_created_date}
                        </div>
                    </div>
                    <div className="w-full h-[12vh] bg-[#69637f7d] rounded-[19px]">
                        <p className=" mt-3 p-3 text-[12px] text-white">{props.news_title}</p>
                    </div>
                    <div className="w-full max-h-[34vh] bg-[#69637f7d] rounded-[19px] overflow-y-auto mt-2 overscroll-none rtl">
                        <p className="mt-1 text-sm font-light text-white mx-3">{props.news_text}</p>
                    </div>
                </div>
            </PageTransition>
        </div>
    );
};

export default NewsPage;

