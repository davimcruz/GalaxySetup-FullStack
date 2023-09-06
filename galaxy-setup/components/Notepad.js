import React from 'react';

function Notepad() {
    return (
        <div className="notepad-container">
            <div className="navigation">
                <div className="page-tabs"></div>
                <button id="new-page-btn"></button>
            </div>
            <div className="editor-container">
                <div className="page-content">
                </div>
            </div>
        </div>
    );
}

export default Notepad;
