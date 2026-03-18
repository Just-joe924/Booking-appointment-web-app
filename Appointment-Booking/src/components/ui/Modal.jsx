import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children, title, className = '' }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const modalContent = (
        <div className={`modal-overlay ${className}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {title && <div className="modal-header">
                    <h2>{title}</h2>
                    <button onClick={onClose} className="modal-close">&times;</button>
                </div>}
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;