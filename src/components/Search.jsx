import React, { useMemo, useState } from 'react'
import Icon from '../templates/icons/Асхаб.png'
import SearchModal from './modals/SearchModal';

const Search = ({ musics }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [isOpenSearchBar, setCheckOpenSearchBar] = useState(false);

    const doSearh = useMemo(() => {
        if (!searchQuery) {
            return musics
        }

        return musics.filter((musics) =>
            musics.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            musics.authorName.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [musics, searchQuery])


    const openSearch = () => {
        setCheckOpenSearchBar(true);
    };
    const closeSearch = () => {
        setCheckOpenSearchBar(false);
    };

    return (
        <div className='flex pt-2 '>
            <div className={isOpenSearchBar === false
                ? 'relative h-[69px] w-full rounded-3xl bg-[#393442] shadow-2xl transition-all duration-300'
                : 'absolute h-[300px] w-full rounded-3xl bg-[#393442] shadow-2xl transition-all duration-300'}>

                <input
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onClick={openSearch}
                    value={searchQuery}
                    placeholder='Izdeu..'
                    type="text"
                    className={isOpenSearchBar ? 'bg-[#FFFFFFAB;] rounded-full pl-5 ml-[17px] h-[38px] mt-[15px] focus:outline-none placeholder:text-gray-600 placeholder:font-semibold translate-x-12 w-[300px] sm:w-[330px] transition-all duration-500' : 'bg-[#FFFFFFAB;] rounded-full pl-5 ml-[17px] h-[38px] mt-[15px] w-[300px]  focus:outline-none placeholder:text-gray-600 placeholder:font-semibold transition-all duration-500'}
                />
                <div className={isOpenSearchBar ? 'hidden' : 'float-right pb-10 mr-[16px] mt-[15px]'}>
                    <img className='w-10 h-10 rounded-full' src={Icon} alt="тут картинка" />
                </div>
                <SearchModal isOpen={isOpenSearchBar} doSearh={doSearh} musics={musics} />
            </div>
            <div className='ml-5 float-left absolute mt-[20px]'>
                {isOpenSearchBar ? (<button onClick={closeSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={!isOpenSearchBar ? "#393442" : "white"} className="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>) : ''}
                <div className={isOpenSearchBar ? 'fixed inset-0 h-[500px] mt-[350px]' : 'hidden'} onClick={closeSearch}></div>
            </div>

        </div >
    )



}

export default Search
