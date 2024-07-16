import React, {useState, useEffect} from 'react';

export default function Hook({ color }) {
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [text, setText] = useState('');
    /*
      1. Alternative 01: getDerivedStateFromProps
     */
    if(color !== backgroundColor) {
        setBackgroundColor(color);
        console.log(`Background color changed to ${color}`);
    }

    /*
      2. After Rendering
      Class Component(componentDidMount, componentDidUpdate)
     */
    useEffect(() => {
        console.log('After Rendering: update text or update backgroundColor');
    });

    /*
      3. After Rendering
      어떤 특정 상태의 변화에 반응하는 함수
     */
    useEffect(() => {
        return () => {
            console.log('After Rendering: update text');
        };
    }, [text]);

    /*
      4. Alternative 02: componentDidMount & componentWillUnmount
     */
    useEffect(() => {
        console.log('After Mount(componentDidMount)');
        return () => {
            console.log('After Unmount(componentWillUnmount)');
        };
    }, []); // 빈 배열을 넣어주면 componentDidMount & componentWillUnmount

    return (
        <>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: backgroundColor
                } } />
            <input
                type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        </>
    );
}