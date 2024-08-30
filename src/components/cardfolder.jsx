import React from 'react';

const CardFolder = () => {
    return (
        <div className="cards-container">
            <div className="card">
                <h2 className="text-2xl font-bold text-purple-300 mb-4">Card 1</h2>
                <p className="text-gray-300">
                    This is the content for card 1. It will provide some useful information.
                </p>
            </div>
            <div className="card">
                <h2 className="text-2xl font-bold text-purple-300 mb-4">Card 2</h2>
                <p className="text-gray-300">
                    This is the content for card 2. It will provide some useful information.
                </p>
            </div>
            <div className="card">
                <h2 className="text-2xl font-bold text-purple-300 mb-4">Card 3</h2>
                <p className="text-gray-300">
                    This is the content for card 3. It will provide some useful information.
                </p>
            </div>
        </div>
    );
}

export default CardFolder;
