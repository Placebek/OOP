import React, { useState } from 'react';

const Tanymal = () => {
    const [activeButton, setActiveButton] = useState('tanymal');

    const changeActive = (style) => {
        setActiveButton(style);
    }

    return (
        <div className="h-screen max-h-8 mb-6">
            <div className='m-3 mt-4'>
                <ul className='font-sans font-semibold flex flex-nowrap'>
                    <li className={`border-b-[3px] transition-all duration-700 ${activeButton === 'tanymal' ? 'border-b-green-400' : 'border-b-transparent'}`}>
                        <button onClick={() => changeActive('tanymal')}>Tanymal</button>
                    </li>
                    <li className={`ml-4 border-b-[3px] transition-all duration-700 ${activeButton === 'siz_ushin' ? 'border-b-green-400' : 'border-b-transparent'}`}>
                        <button onClick={() => changeActive('siz_ushin')}>Siz ushin</button>
                    </li>
                    <li className={`ml-4 border-b-[3px] transition-all duration-700 ${activeButton === 'random' ? 'border-b-green-400' : 'border-b-transparent'}`}>
                        <button onClick={() => changeActive('random')}>Random</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Tanymal;
