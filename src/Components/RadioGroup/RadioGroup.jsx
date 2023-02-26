
import React, { useState } from 'react'
import './RadioGroup.css'
import { ImRadioChecked2, ImRadioUnchecked } from 'react-icons/im';
import card1 from '../../Assets/card1.png'
import card2 from '../../Assets/card2.png'
import card3 from '../../Assets/card3.png'

const RadioGroup = () => {
    const [active, setActive] = useState(0)
    const data = [{ card: 'Dark Grey', img: card1 },
    { card: 'Royal Blue', img: card2 },
    { card: 'Voilet Pink', img: card3 }]

    return (
        <div className='radioContainer'>
            {
                data.map((cards, index) => {
                    return (
                        <div className={`radioGroup ${active === index ? 'radioGroupActive' : ''}`}
                            onClick={() => setActive(index)} key={index}>
                            <div className="feature">
                                <div className="radioIcon">
                                    {
                                        active === index ? <ImRadioChecked2 size={20} />
                                            : <ImRadioUnchecked size={20} />
                                    }
                                </div>
                                <h5>{cards.card}</h5>
                            </div>
                            <img className='card' src={cards.img} alt="card2" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RadioGroup







