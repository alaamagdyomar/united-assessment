import React from 'react';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-full w-full">
            <div className="bg-cyan-900 w-full text-white text-center p-2">Logo Header</div>
            <main>{children}</main>
        </div>
    );
}
