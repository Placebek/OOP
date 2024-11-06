import React from 'react';

function Greeting() {
    return (
        <div className="flex justify-center items-center mt-2">
            <div className='bg-[#393442] w-[95vw] max-w-[600px] h-[166px] rounded-xl p-2'>
                <h1 className='text-white text-[18px] font-semibold'>
                    Sálem, { }!

                    <p>TyńdaMa - sizdiń jeke mýzykalyq keńistigińiz!</p>
                    <p>Bizben birge: 42 Kún</p>
                    <p>Sizdiń basty hıtińiz: Imagine Dragons — Believer, 42 ret tyńdaldy</p>
                    </h1>
            </div>
        </div>
    );
}

export default Greeting;

