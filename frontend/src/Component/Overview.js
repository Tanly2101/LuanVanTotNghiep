import React from 'react'
import {InputReadOnly} from "./"
const Overview = ({payload,setPayload}) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [id]: value
    }));
  };
  return (
   
    <div className='flex flex-col gap-4'>
        <h2 className='font-semibold text-xl py-4'>Thông tin mô tả</h2>
        <div className=' w-full flex flex-col gap-4'>
            <label htmlFor='title' >Tiêu đề</label>
            <input type='text' id='title' className='w-[30%] rounded-md outline-none border border-gray-300'
            value={payload.title} 
            onChange={handleChange}
            ></input>
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor='desc' >Nội dung mô tả</label>
            <textarea id='desc' 
            cols='30' row='10' 
            className='w-full rounded-md outline-none border border-gray-300'
            value={payload.desc}
            onChange={handleChange}
            ></textarea>
        </div>
        <div className='w-1/2 flex flex-col gap-4'>
        <InputReadOnly label='Thông tin liên hệ' />
        <InputReadOnly label='Điện thoại' />
        </div>
        
    </div>
  )
}

export default Overview