import React, { useRef } from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {
    const imgRef = useRef(null);

    const onKeyPressInput = (e) => {
        if(e.key === 'Enter') {
            console.log("Enter Pressed: " + e.target.value);
        }
    };

    const onChangeInput = (e) => {
        console.log("Input Changed: " + e.target.value);
    };

    const onFocusInput = (e) => {
        console.log("Focused");
    };

    const onBlurInput = (e) => {
        console.log("Blurred");
    };

    const onMouseOverImg = (e) => {
        console.log("Mouse Over", `x=${e.clientX}`, `y=${e.clientY}`);
    };

    const onMouseMoveImg = (e) => {
        const offsetTop = imgRef.current.offsetTop;
        const offsetLeft = imgRef.current.offsetLeft;

        // console.log(`Mouse Move`, `x=${e.clientX}`, `y=${e.clientY}`);
        console.log(`Mouse Move`, `x=${e.clientX - offsetLeft}`, `y=${e.clientY - offsetTop}`);
    };

    const onMouseOutImg = (e) => {
        console.log("Mouse Out", `x=${e.clientX}`, `y=${e.clientY}`);
    };

    const onMouseDownImg = (e) => {
        console.log("Mouse Down", `x=${e.clientX}`, `y=${e.clientY}`);
    };

    const onMouseUpImg = (e) => {
        console.log("Mouse Up", `x=${e.clientX}`, `y=${e.clientY}`);
    };

    const onClickImg = (e) => {
        console.log("Mouse Click", `x=${e.clientX}`, `y=${e.clientY}`);
    };

    const onDoubleClickImg = (e) => {
        console.log("Mouse Double Click", `x=${e.clientX}`, `y=${e.clientY}`);
    };

    return (
        <>
            <h2>Event Handler 예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력하세요'
                onKeyPress={onKeyPressInput}
                onChange={onChangeInput}
                onFocus={onFocusInput}
                onBlur={onBlurInput} />
            <br/>
            <br/>
            <img
                ref={imgRef}
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={logo}
                onMouseOver={onMouseOverImg}
                onMouseMove={onMouseMoveImg}
                onMouseOut={onMouseOutImg}
                onMouseDown={onMouseDownImg}
                onMouseUp={onMouseUpImg}
                onClick={onClickImg}
                onDoubleClick={onDoubleClickImg} />
        </>
    );
}