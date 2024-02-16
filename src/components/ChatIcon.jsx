import React from 'react'

function ChatIcon() {
  return (
    <div className='fixed lg:bottom-10 lg:right-10 right-8 bottom-9 z-10'>
        <img className='lg:h-[70px] lg:w-[70px] h-[60px] w-[60px]' src={require('../assets/chaticon.png')} alt="" />
    </div>
  )
}

export default ChatIcon