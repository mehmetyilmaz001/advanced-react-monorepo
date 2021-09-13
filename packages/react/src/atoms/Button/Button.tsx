import React from 'react';

interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({label}) => {
    return <button className='dse-button-container'>{label || 'Label'}</button>
}

export default Button;