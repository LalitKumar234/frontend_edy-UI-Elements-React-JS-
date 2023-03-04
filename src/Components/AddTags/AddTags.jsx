
import React, { useState } from 'react'
import './AddTags.css'
import { RxCross2 } from 'react-icons/rx';

const AddTags = () => {
    const [tagText, setTagText] = useState('');
    const [tags, setTags] = useState([]);
    const [reRender, setReRender] = useState(false)

    const forceRender = () => {
        setReRender(!reRender)
    }

    const handleAddTag = (e) => {
        forceRender()
        if (e.key === 'Enter') {
            setTagText('')
            if (tagText !== '') {
                setTags([...tags, tagText])
            }
            else {
                console.log('empty')
            }
        }
    }
    const handleDeleteTag = (index) => {
        forceRender()
        tags.splice(index, 1)
    }

    return (
        <div className='AddTagContainer'>
            <div className="addTagBox">
                <h5>Add Tags</h5>
                <div className="addTagInput">
                    {
                        tags.map((tag, index) => {
                            return (
                                <div className="tags" key={index}>
                                    <span>{tag}</span>
                                    <div className="crossIcon"
                                        onClick={() => handleDeleteTag(index)}>
                                        <RxCross2 />
                                    </div>

                                </div>
                            )
                        })
                    }
                    <input className='inputTag' type="text" autoFocus
                        value={tagText}
                        onKeyUpCapture={(e) => { handleAddTag(e) }}
                        onChange={(e) => setTagText(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default AddTags



