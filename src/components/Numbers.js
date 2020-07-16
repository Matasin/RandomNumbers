import React from'react';
import InputNumbers from "./InputNumbers";

const style = {
    display: 'grid',
    justifyContent: 'center',
    zoom: '2',
    fontFamily: 'FreeMono, monospace',
}


const Numbers = () => (
    <div style={style}>
        <p>Enter your number and read fact about him:</p>
        <InputNumbers/>
    </div>
)


export default Numbers;