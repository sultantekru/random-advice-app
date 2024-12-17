import React, { useState } from 'react'
import './index.css'
import axios from 'axios';
import { AdviceResponse } from '../../types/AdviceResponseDTO';
import { API_URLS, MESSAGES } from '../../Constants/Constants';

let BASE_URL = API_URLS.BASE_URL;
export const RandomAdvice: React.FC = () => {
    const [randomAdvice, setRandomAdvice] = useState<string>("");
    const [welcomeMessage, setWelcomeMessage] = useState(MESSAGES.WELCOME);

    const giveAdvice = async () => {
        try {
            const response = await axios.get<AdviceResponse>(`${BASE_URL}`)
            setRandomAdvice(response.data.slip.advice);
            setWelcomeMessage('');

        } catch (error) {
            console.error(MESSAGES.ERROR);
        }

    }

    return (
        <div>
            <p className='welcome-message'>{MESSAGES.WELCOME}</p>
            <p className='random-advice'>{randomAdvice}</p>
            <button className='give-advice-button' onClick={giveAdvice}>{MESSAGES.GIVE_ADVICE_BUTTON}</button>
        </div>
    )
}
