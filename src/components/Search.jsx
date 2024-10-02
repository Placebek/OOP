import React from 'react'
import Icon from '../templates/icons/Асхаб.png'

const Search = () => {

    return (
        <div className='flex pt-2 '>
            <div className='relative h-[69px] w-full rounded-3xl bg-[#393442;] shadow-2xl'>
                <input className='bg-[#FFFFFFAB;] rounded-full ml-[17px] h-[38px] mt-3 placeholder:pl-5 w-[300px] placeholder:text-gray-600 placeholder:font-semibold' type="text" placeholder='Izdeu..' />
                <div className='float-right pb-10 mr-[16px] mt-3'>
                    <img className='w-10 h-10 rounded-full' src={Icon} alt="тут картинка" />
                </div>
            </div>
        </div>
    )



}

export default Search
