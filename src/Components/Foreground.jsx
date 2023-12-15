import React, { useRef } from 'react'

import  Card  from './Card';

 const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "This is Card 1.",
      fileSize: ".9mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green"
      }

    },
    {
      desc: "This is Card 2.",
      fileSize: ".4mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Hello",
        tagColor: "green"
      }

    },
    {
      desc: "This is Card 3.",
      fileSize: ".7mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green"
      }

    },
  ];
  return (

    
    
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 p-5 flex-wrap'>
      {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
      ))}

    </div>
  )
}

export default Foreground;
