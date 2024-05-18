import { WrapperProps } from '@/types';
import React, { ReactNode } from 'react';


export default function ExpertiessWrapper({ children, className }: WrapperProps) {
    return (
        <div
            className={`container mx-auto px-5 md:px-36 ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
}
