import React, {Fragment}  from 'react';
import PropTypes from 'prop-types';
import './Modal.css'

function Modal (props){
    return (
        <Fragment>
            <div className='modal-wrapper' style={props.show ? {display: 'block'} : {display: 'none'} }>
                <div className='modal-content'>
                    <div className='close-btn'>
                        <span onClick={props.hidePopup}>
                            <i className="fa fa-times" aria-hidden="true"/>
                        </span>
                    </div>
                    {props.children}
                </div>
            </div>
        </Fragment>
    );
}

Modal.propTypes = {
    hidePopup: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};

Modal.defaultProps = {
    show: false
};

export default Modal;