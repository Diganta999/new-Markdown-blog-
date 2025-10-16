import React from 'react';
import { cn } from '@/lib/utils';

interface MaxwidthWrapper {
    className:string;
    children:React.ReactNode
}

const MaxwidthWrapper = ({className,children}:MaxwidthWrapper) => {
    return (
        <div className={cn('mx-auto max-w-screen w-full my-12',className)}>
            {children}
        </div>
    );
};

export default MaxwidthWrapper;