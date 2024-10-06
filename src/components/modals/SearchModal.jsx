import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import '../ModalAnimations.css'

const SearchModal = ({ isOpen }) => {

    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="search"
            unmountOnExit>
            <div className="fixed inset-0 bg-[#FFFFFFAB;] h-[80px] border-4 border-neutral-950 ">
                <div className=""></div>
            </div>


        </CSSTransition>
    )
}

export default SearchModal;
