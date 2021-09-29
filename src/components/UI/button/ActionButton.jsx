import React from 'react';

const ActionButton = ({children, ...props}) => {
    return (
        <button {...props} className="btn btn-primary">
            {children}
        </button>
    );
};

export default ActionButton;