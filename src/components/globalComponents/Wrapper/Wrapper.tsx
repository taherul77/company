import { WrapperProps } from '@/types';
import React, { ReactNode } from 'react';


export default function Wrapper({ children, className }: WrapperProps) {
    return (
        <div
            className={`container mx-auto px-5 py-4  md:px-20 ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
}
