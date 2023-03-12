
import React, { useState } from 'react'
import './Accordion.css'
import { RiAddLine } from 'react-icons/ri';

const Accordion = () => {
    const [accActive, setAccActive] = useState()

    let accordionData = [{
        title: "React is not a framework",
        accordionContent: "Even professional React developers often say that React is a JavaScript framework. However, React’s official website describes it as “a JavaScript library for building user interfaces,” so who’s right? The short answer is that React is a JavaScript library, but the fact remains that it has several characteristics of a framework."
    },
    {
        title: "React has a strong community",
        accordionContent: "Developers love React, and it shows in how strong the community around it is. React’s official website lists multiple thriving React communities, each with thousands of users who are happy to share their experience, give useful tips, and answer code-level questions."
    },
    {
        title: "Supports Type Systems",
        accordionContent: "React comes with a built-in way to validate props, these are called propTypes. React components can be part of a hierarchy of bigger components, therefore, a good practice is to validate prop data types. Think of propTypes as building a strongly-typed system inside each component. This type system adds clarity and intent to React components."
    },
    ]
    const handleActive = (index) => {
        if (accActive === index) {
            setAccActive()
        }
        else {
            setAccActive(index)
        }
    }




    return (
        <div className='accordionContainer'>
            {
                accordionData.map((acc, index) => {
                    return (
                        <div className="accordion"
                            onClick={() => handleActive(index)}>
                            <div className='accordionHeading'>

                                <span className="addIcon"
                                    style={{
                                        transform: `${accActive === index ? 'rotate(45deg)' :
                                            'rotate(0deg)'}`
                                    }}>
                                    <RiAddLine size={25} />
                                </span>
                                <h3>{acc.title}</h3>
                            </div>
                            {
                                accActive === index ? <div className="accordionContent">
                                    {acc.accordionContent}
                                </div> : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordion


