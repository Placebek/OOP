import React, { useMemo, useState } from 'react'
import Icon from '../templates/icons/Асхаб.png'

const Search = ({ musics }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const doSearh = useMemo(() => {
        if (!searchQuery) {
            return musics
        }

        return musics.filter((musics) =>
            musics.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            musics.authorName.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [musics, searchQuery])
    return (
        <div className='flex pt-2 '>
            <div className='relative h-[69px] w-full rounded-3xl bg-[#393442;] shadow-2xl'>
                <input
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    placeholder='Izdeu..'
                    type="text"
                    className='bg-[#FFFFFFAB;] rounded-full pl-5 ml-[17px] h-[38px] mt-3 w-[300px] placeholder:text-gray-600 placeholder:font-semibold'
                />
                <div className='float-right pb-10 mr-[16px] mt-3'>
                    <img className='w-10 h-10 rounded-full' src={Icon} alt="тут картинка" />
                </div>
            </div>
            <div>
                <ul>{doSearh.map((musics) => (
                    <li key={musics.id} >{musics.title}-{musics.authorName}</li>
                ))}</ul>
            </div>
        </div>
    )



}

export default Search
