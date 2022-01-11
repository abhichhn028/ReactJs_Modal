import React from 'react'
import ReactDOM from 'react-dom';
import './Modal.css';
import image from './img.png';

const Modal = ({closeModel}) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
        <div className="main-div">
        <div className="child-div">
            <div className="logo-div">
                <img src={image} alt=""/>
            </div>
            <div className="content-div">
                <h3>REACT JS MODAL</h3>
                <p>Welcome to Modal in ReactJs</p>
            </div>
            <div className="btn-div">
                <button className="btn" onClick={closeModel}>Okay</button>
            </div>
        </div>
    </div>
    </div>,document.getElementById("modal")
    );
}

export default Modal
