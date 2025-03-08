import React from 'react';
type TLContainerProps = {
    children: React.ReactNode,
    className?: string
}

const TLContainer = ({ children, className = "" }: TLContainerProps) => {
    return (
        <div className={`container max-w-7xl mx-auto px-5 ${className}`}>
            {children}
        </div>
    );
};

export default TLContainer;