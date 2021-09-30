import React from 'react';
import cl from './AdminModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.adminModal]

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.adminModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;