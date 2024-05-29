import { WrapperProps } from '@/types';
import React, { ReactNode } from 'react';

// Define the ExpertiessWrapper component, which accepts children and an optional className as props
export default function ExpertiessWrapper({ children, className }: WrapperProps) {
    return (
        // Container div with default padding and margin, along with any additional className passed as a prop
        <div
            className={`container mx-auto px-5 md:px-36 ${
                className || ""  // Add any additional classes if provided
            }`}
        >
            {children}  
        </div>
    );
}


