import React, { useRef } from "react"
import { CSSTransition } from "react-transition-group";

const MusicModalWindow = ({ props, isOpen, isOpenSmallWindow, closeWindow }) => {
    const nodeRef = useRef(null)
    return (
        <CSSTransition
            in={isOpen && !isOpenSmallWindow}
            timeout={300}
            classNames="modal"
            unmountOnExit
            nodeRef={nodeRef}
        >
            <div ref={nodeRef} className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-end">
                <div className="bg-[#504e4a] w-full h-4/5 fixed rounded-t-2xl flex justify-center">
                    <button className="h-10 w-10 absolute left-1 ml-4 mt-5" onClick={closeWindow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                    <div className="">
                        <img className='mt-[50%] rounded-sm h-[268px] w-[268px]' src={props.img} alt="Картина песни" />
                        <p className="text-center mt-4 text-3xl text-white">{props.title}</p>
                        <p className="text-center mt-1 text-sm font-extralight text-white">{props.authorName}</p>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default MusicModalWindow;