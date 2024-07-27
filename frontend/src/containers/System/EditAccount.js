import React, {useState} from 'react'
import { InputReadOnly, InputFrom } from "../../Component"
import user from "../../assets/img/user.png"
const EditAccount = () => {
  
  const [invalidFields, setInvalidFields] = useState([])
  return (
    <div className='flex flex-col w-full  items-center'>
      <h1 className='font-bold w-full text-start h-[69px] flex-none text-2xl border-b-2 py-4'>Chỉnh sửa thông tin cá nhân </h1>
      <div className='w-3/5  items-center justify-center flex-auto'>
      <div className=' py-6 flex flex-col gap-4 '>
        <InputReadOnly
        direction={'flex'}
         label='Mã Thành Viên'/>
        <InputReadOnly
        direction={'flex'}
        editPhone
         label='Số Điện Thoại'/>
         
        <InputFrom
        setInvalidFields={setInvalidFields}
        invalidFields={invalidFields}
        direction={'flex'}
        label='Tên hiển thị'
        className='w-full'/>
        <InputFrom
        setInvalidFields={setInvalidFields}
        invalidFields={invalidFields}
        direction={'flex'}
        label='Email'/>
        <div className='flex w-full'>
          <label className='w-48 flex-none' htmlFor='password'>Mật Khẩu</label>
          <small className='flex-auto h-12 text-blue-500 cursor-pointer w-full'>Đổi Mật Khẩu</small>
        </div>
        <div className='flex mb-6 w-full'>
          <label htmlFor='avatar' className='w-48 flex-none'> Ảnh đại diện</label>
          <img src={user} alt='avatar' className='w-28 h-28 rounded-full  object-cover'></img>
        </div>
        
        <button  className=' bg-blue-500 text-white p-2 rounded-md'>Cập Nhật</button>
        
      </div>
      </div>
      
    </div>
  )
}

export default EditAccount