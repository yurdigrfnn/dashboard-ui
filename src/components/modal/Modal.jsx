import './modal.css';
import React, { useEffect,useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";


const Modal = ({ children,closeButton,title, isOpen, onClose }) => { 
      return ReactDOM.createPortal(
        <CSSTransition
          in={isOpen}
          unmountOnExit
          timeout={{ enter: 0, exit: 300 }}
        >
          <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                {title}
              </div>
              <div className="modal-body">{children}</div>
              <div>
                {closeButton}
              </div>   
            </div>
          </div>
        </CSSTransition>,
        document.getElementById("root")
      );
};

export default Modal;