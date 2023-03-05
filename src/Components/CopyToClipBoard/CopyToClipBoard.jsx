import React, { useState } from 'react'
import { MdOutlineCopyAll } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import './CopyToClipBoard.css'

const CopyToClipBoard = () => {
    const code = `npx create-react-app myapp`
    const [isCopied, setIsCopied] = useState(false)

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopy = () => {
        setIsCopied(true);
        copyTextToClipboard(code)
            .then(() => {
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
       
            <div className='codeBox'>
                <code className='copyContainer' >
                    {code}
                </code>
                <div className='copyIcon' onClick={handleCopy}>
                    <MdOutlineCopyAll size={25} />
                </div>
                <div className='copiedAlert'
                    style={{
                        visibility: `${isCopied ? 'visible' : 'hidden'}`,
                        opacity: `${isCopied ? '1' : '0'}`,
                        transform: `${isCopied ? `translate(0px, 0px)` : `translate(0px, 40px)`}`,
                        transition: '0.3s ease-in-out',
                    }}>
                    <div className='check'>
                        <AiFillCheckCircle size={25} />
                    </div>
                    Copied to clipboard
                </div>
            </div>
    )
}

export default CopyToClipBoard