import React, { useState } from 'react'
import './index.css'
import axios from 'axios';

let BASE_URL = "https://api.adviceslip.com/advice";
export const RandomAdvice: React.FC = () => {
    const [randomAdvice, setRandomAdvice] = useState<string>("");
    const [welcomeMessage, setWelcomeMessage] = useState('Hoş geldiniz! Rastgele bir tavsiye almak için aşağıdaki butona tıklayın.');

    const giveAdvice = async () => {
        const response = await axios.get(`${BASE_URL}`)
        console.log(response);

        setRandomAdvice(response.data.slip.advice);
        setWelcomeMessage('');
    }


    return (
        <div>
            <p className='welcome-message'>{welcomeMessage}</p>
            <p className='random-advice'>{randomAdvice}</p>
            <button className='give-advice-button' onClick={giveAdvice}>Give Advice</button>
        </div>
    )
}
