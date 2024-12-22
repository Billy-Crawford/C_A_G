// src/utils/handleClick.ts
import { MouseEventHandler } from 'react';

export const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log('Button clicked', event);
};
