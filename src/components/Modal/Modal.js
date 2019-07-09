import React from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';

import { modal } from './modal.css.js';

function Modal(props) {
  const handleRequestClose = () => {
    const { onRequestClose } = props;
    onRequestClose();
  };

  const modalSettings = () => {
    const { title, className, ...restProps } = props;
    const portalClasses = classNames('modal', className);
    return {
      ...props,
      portalClassName: portalClasses,
      className: 'modal-holder',
      overlayClassName: 'modal-overlay',
      onRequestClose: handleRequestClose,
      contentLabel: title,
      ariaHideApp: false,
      scroll: true,
      ...restProps
    };
  };

  return (
    <ReactModal { ...modalSettings() }>
      <div className="box">
        <div className="content">
          { props.children }
        </div>
      </div>
      <style jsx>
        { modal }
      </style>
    </ReactModal>
  )
};

Modal.defaultProps = {
  title: ''
};

export default Modal;