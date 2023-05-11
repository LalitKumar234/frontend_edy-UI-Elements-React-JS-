
import React, { useEffect, useState } from 'react'
import './PinToTop.css'
import { FcLike } from 'react-icons/fc';
import { BsThreeDotsVertical, BsPinAngleFill } from 'react-icons/bs';
import { posts } from './post'
import logo from './edyLogo.jpg'

const PinToTop = () => {
  const [dropDown, setDropDown] = useState()
  const [postItems, setPostItems] = useState(posts)

  const handlePinToTop = (index, id) => {
    if (!postItems[index].pinned) {
      postItems[index].pinned = true
      let pinned = postItems.filter((item) => item.id !== id);
      pinned.unshift(postItems[index]);
      setPostItems(pinned);
    }
    else{
      setPostItems(postItems)
    }

  }
  const handleUnpin = (index) => {
    if (postItems[index].pinned) {
      postItems[index].pinned = false
      setPostItems(postItems)
    }
  }
  useEffect(() => {
    postItems.map((post)=>{
      if(post.pinned){
        
      }
    })
    
    //To render the component whenever the postItems state changes
  }, [postItems])

  return (
    <div className='pinContainer'>
      <div className='pinToTopItems'>
        {
          postItems.map((post, index) => {
            return (
              <div className='postCards' key={post.id}>
                <div className='postHeader'>
                  <div className='userName'>
                    <div className='displayPic'>
                      <img src={logo} alt='' />
                    </div>
                    <p>@frontend_edy</p>
                    <span>
                      {
                        post.pinned ? <BsPinAngleFill size={22} /> : null
                      }
                    </span>
                  </div>
                  <span onClick={() => setDropDown(index)}>
                    <BsThreeDotsVertical size={23} />
                  </span>
                  {
                    dropDown === index ? <div className='pinDropDown'
                      onMouseLeave={() => setDropDown('')}>
                      {
                        post.pinned ? <span onClick={() => {
                          setDropDown('')
                          handleUnpin(index)
                        }}>
                          <BsPinAngleFill />
                          unpin
                        </span> : <span onClick={() => {
                          setDropDown('')
                          handlePinToTop(index, post.id)
                        }}>
                          <BsPinAngleFill />
                          Pin to top
                        </span>
                      }

                    </div> : null
                  }
                </div>
                <div className='postImage'>
                  <img src={post.image} alt='' />
                </div>
                <div className='aboutPost'>
                  <span><FcLike size={25} />{post.likes}</span>
                </div>
                <ul className='postTags'>
                  <li>#coding</li>
                  <li>#webdev</li>
                  <li>#frontend</li>
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default PinToTop




