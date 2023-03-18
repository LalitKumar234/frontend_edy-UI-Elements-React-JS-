
import React, { useState } from 'react'
import './TabsV2.css'

const TabsV2 = () => {
    const [isActive, setIsActive] = useState(1)
    const handleActive = (btn) => setIsActive(btn)

    return (
        <div className="tabsV2Container">
        <div className='tabsContainer'>
            <div className="btnContainer">
                <button className={`tabs ${isActive === 1 ? 'activeTab' : ''}`} 
                onClick={() => handleActive(1)}>Recent</button>
                <button className={`tabs ${isActive === 2 ? 'activeTab' : ''}`} 
                onClick={() => handleActive(2)}>Popular</button>
                <button className={`tabs ${isActive === 3 ? 'activeTab' : ''}`} 
                onClick={() => handleActive(3)}>Trending</button>
            </div>
            {isActive === 1 && <div className="tabData">
                <div className="tabContent">
                    <h5>"Perhaps Some Guys": Pat Cummins' 
                        Brutal Take After Loss Against India In 2nd Test
                    </h5>
                    <p>Updated: February 19, 2023</p>
                </div>
            </div>}
            {isActive === 2 && <div className="tabData">
                <div className="tabContent">
                    <h5>How ChatGPT Sparked 'Gold Rush' In Silicon Valley</h5>
                    <p>Updated: February 19, 2023</p>
                </div>
            </div>}
            {isActive === 3 && <div className="tabData">
                <div className="tabContent">
                    <h5>Watch: R Ashwin Rattles Steve Smith At Non-Striker's End, 
                        Virat Kohli's Reaction Can't Be Missed
                    </h5>
                    <p>Updated: February 19, 2023</p>
                </div>
            </div>}
        </div>
        </div>
    )
}

export default TabsV2



