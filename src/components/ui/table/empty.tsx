import React from "react";

export const EmptyTableBody = () => {
    return (
        <tbody className="h-32 relative">
            <div className="absolute w-full h-32 flex items-center justify-center">
                <p className="text-center text-lg">There's nothing here.</p>
            </div>
        </tbody>
    );
};
