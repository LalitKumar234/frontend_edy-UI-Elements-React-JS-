
import React, { useState } from 'react'
import './DragAndDrop.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { VscAdd } from 'react-icons/vsc';
import { CiEdit } from 'react-icons/ci';

const DragAndDrop = () => {
    const links = [
        {
            id: 1,
            link: "YouTube",
            url: 'https://www.youtube.com/frontend_edy'
        },
        {
            id: 2,
            link: "Instagram",
            url: 'https://www.instagram.com/frontend_edy'
        },
        {
            id: 3,
            link: "FaceBook",
            url: 'https://www.facebook.com/frontend_edy'
        },
    ];
    const [allLinks, setAllLinks] = useState(links);
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(allLinks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setAllLinks(items);
    };



    return (
        <div className='linksContainer'>
            <button className='addLinksButton' >
                <VscAdd size={25} />
                Add Link
            </button>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="allLinks">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}
                            className="dragAndDropContainer">
                            {allLinks.map && allLinks.map((link, index) => (
                                <Draggable
                                    key={link.id}
                                    draggableId={link.id.toString()}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div className='dragElement'
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        ><div className="dragIcon">
                                                <RxDragHandleDots2 size={16} />
                                            </div>
                                            <div className="dragContent">
                                            <div className="dragTitle">{link.link}<CiEdit size={23}/></div>
                                            <div className="dragUrl">{link.url}<CiEdit size={23}/></div>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default DragAndDrop



