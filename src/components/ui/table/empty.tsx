import React from "react";

export const EmptyTableBody = () => {
    return (
        <div className="h-32 relative">
            <div className="absolute w-full h-32 flex items-center justify-center">
                <p className="text-center text-lg">There is nothing here.</p>
            </div>
        </div>
    );
};
