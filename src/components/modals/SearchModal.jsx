import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import '../ModalAnimations.css';
import MusicItems from "../UI/button/MusicItems";

const SearchModal = ({ isOpen, doSearh }) => {
    const nodeRef = useRef(null);

    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="search"
            unmountOnExit
            nodeRef={nodeRef}
        >
            <div ref={nodeRef} className="fixed inset-0 h-[80px] mt-[70px] right-10">
                <div className="">
                    <div>
                        <h1 className="ml-3 mt-2 text-gray-300 font-semibold/50">Sońǵy suranystar:</h1>
                        <ul className="mt-3">
                            {doSearh.map((music) => (
                                <li key={music.id} className="ml-3 mt-1 border-0 border-t-2 pt-1">
                                    <MusicItems props={music} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default SearchModal;
