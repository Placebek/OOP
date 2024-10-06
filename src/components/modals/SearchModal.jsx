import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import '../ModalAnimations.css'
import MusicItems from "../UI/button/MusicItems";

const SearchModal = ({ isOpen, doSearh, musics }) => {

    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="search"
            unmountOnExit>
            <div className="fixed inset-0 bg-[#FFFFFFAB;] h-[80px] mt-[105px] right-10">
                <div className="">
                    <div>
                        <ul>{doSearh.map((musics) => (
                            // <li key={musics.id} >{musics.title}-{musics.authorName}</li>
                            <li><MusicItems props={musics} /></li>
                        ))}</ul>
                    </div>
                </div>
            </div>


        </CSSTransition>
    )
}

export default SearchModal;
