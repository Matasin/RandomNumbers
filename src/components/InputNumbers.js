import React, { useState } from 'react';

const InputNumbers = () => {
    const [number, setNumber] = useState('');
    const [changeUrl, setChangeUrl] = useState(`math/?json`); //defaul URL who is changing letter

    const handleChange = (event) => {
        const  targetNumber = event.target.value;

        let URL = `http://numbersapi.com/${targetNumber}/${changeUrl}`;

        if (changeUrl === `random/?json`){ 
            URL = `http://numbersapi.com/random/?json`;
        }
        fetch(URL)
        .then(checkRespone => {
                if(checkRespone.ok){
                    return checkRespone;
                }
                throw Error(console.log(checkRespone.status))
            }
        )
        .then(response => response.json())
        .then(data => setNumber('In this year... ' + data.text))
        .catch(error => setNumber(error + ' ...Propably there is no number here'));
    }
    return(
        <>
            <input 
                style={styleInput} 
                type='text' 
                placeholder='Enter number' 
                onChange={handleChange}
            />      

            <p style={styleP}>{number}</p>

            <div style={styleContainerButtons}>
                {availableApi.map( availableApi=> {
                    if(availableApi !== 'random'){
                        return(
                            <button
                                key={availableApi}
                                onClick={
                                    () => setChangeUrl( `${availableApi}/?json` )
                                }
                                > 
                                    {availableApi} 
                            </button>
                        )
                    }
                    else{
                        return(
                            <button
                                key={availableApi}
                                onClick={
                                    () => setChangeUrl( `${availableApi}/?json`)
                                }
                                > 
                                    {availableApi} 
                            </button>
                        )
                    }
                })}
            </div>
            <div style={{marginTop: '10px', textAlign: 'center'}}>
                You are searching in category 
                <b style={{ textTransform: 'capitalize'}}> {changeUrl.replace('?json', '').replace('/', '')} </b>
            </div>
        </>
    )    
}

const styleInput = {
    border: 'none',
    borderBottom : '1px solid black',
};
const styleP = {
    maxWidth: '300px',
};

const availableApi = [
    'math',
    'trivia',
    'date (1-31)',
    'random',
];
const styleContainerButtons = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px'
};

export default InputNumbers;