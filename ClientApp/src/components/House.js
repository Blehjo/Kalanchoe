import React, { useState } from "react";
//import "./App.css";
import DragMove from "./DragMove";

const House = () => {
    const [translate, setTranslate] = useState({
        x: 0,
        y: 0
    });

    const handleDragMove = (e) => {
        setTranslate({
            x: translate.x + e.movementX,
            y: translate.y + e.movementY
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <DragMove onDragMove={handleDragMove}>
                    <div
                        style={{
                            transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
                        }}
                    >
                    </div>
                </DragMove>
            </header>
        </div>
    );
}

export default House;