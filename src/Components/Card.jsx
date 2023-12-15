import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md"; 
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion"

 const Card = ({data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.2} className='relative w-60 h-72 bg-zinc-900 rounded-[45px] px-7 py-10 overflow-hidden text-white'>
        <FaFileAlt />
            <p className='mt-4'>{data.desc}</p>
            <div className='footer absolute w-full bottom-0 left-0 '>

            <div className='flex justify-between px-6 mb-4'>
              <h5>{data.fileSize}</h5>
              <span className='h-7 w-7 bg-zinc-700 flex justify-center items-center rounded-full'>
                
                {data.close ? <RxCross2 />  :  <MdOutlineFileDownload />}
                
              
              </span>
            </div>

            {
                data.tag.isOpen ? (<div className='w-full py-3 bg-green-600'>
                <h5 className='flex justify-center text-sm font-semibold'>{data.tag.tagTitle}</h5>
              </div>)
              : null
            }
            
            
            </div>
            
        </motion.div>
        
  )
}

export default Card;

