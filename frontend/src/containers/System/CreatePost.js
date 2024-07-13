import React, { useState } from 'react'
import { Overview, Loading } from '../../Component'
import { FaCamera } from "react-icons/fa6";
import { ImBin } from "react-icons/im";


// import { apiUploadImage } from '../../serviecs/post';
const CreatePost = () => {
  const [payload, setPayload] = useState({
    title: '',
    star: '',
    description:'',
    images: []
  }
  )
  const [isLoading, setisLoading] = useState(false)
  const [fileState, setFileState] = useState({ files: [], images: [] });
  const handleFiles = (e) => {
    setisLoading(true); // Start showing the loading state
    const files = Array.from(e.target.files);
  const urls = files.map(file => URL.createObjectURL(file));

  files.forEach(file => URL.revokeObjectURL(file));

  setFileState(prevState => ({
    ...prevState,
    files: [...prevState.files, ...files],
    images: [...prevState.images, ...urls],
  }));

  setPayload(prevPayload => ({
    ...prevPayload,
    images: [...prevPayload.images, ...urls], // Thêm URLs mới vào mảng images trong payload
  }));

    setisLoading(false); // Finish showing the loading state
  };
  const handleSubmit = () => {
    console.log(payload); 
  }
  const handleDeleteImg=(image) =>{
    const newImages = [...fileState.images];
    newImages.splice(image, 1);
    setFileState(prevState => ({
      ...prevState,
      images: newImages,
    }));
  }
  return (
    <div className='px-6'>
      <h1 className='font-bold text-2xl border-b-2 p-4'>Đăng Trải Nghiệm Của Bạn</h1>
      <div className='flex w-full'>
          <div className='py-4 flex flex-col w-full gap-4 flex-auto'>
            <Overview payload={payload} setPayload={setPayload}/>
            <div className='w-full'>
            <h2 className='font-semibold text-xl py-4'>Hình Ảnh</h2>
            <small>Cập nhật hình ảnh rõ ràng hơn</small>
            <div className='w-full'>
              <label className='w-full flex flex-col gap-4 items-center justify-center border-2 h-[200px] my-4 border-dashed rounded-md border-gray-400' htmlFor='file'>
              {isLoading ? <Loading/> : (
              <div className='flex flex-col items-center justify-center'>
               <FaCamera color='blue' size={50}/>
               Thêm ảnh
               </div>
               )
               }
               
              </label>
              <input hidden onChange={handleFiles} value='' type='file' id='file' multiple></input>
              <div className='w-full'>
                  <h3>Ảnh đã chọn</h3>
                  <div className='flex gap-4 items-center w-[50%]'>
                  {fileState.images.map(items =>{
                    return (
                      <div key={items} className='relative w-1/3 h-1/3'>
                            <img src={items} alt='anh' className='w-full h-full object-cover rounded-md'></img>
                            <span title='Xóa' 
                            onClick={() => handleDeleteImg(items)}
                            className='absolute top-1 right-1 p-2 cursor-pointer bg-gray-200 hover:bg-gray-400 rounded-full'>
                              <ImBin/>
                              </span>
                       </div>
                    )
                  })}
                       
                  </div>
              </div>
            </div>

        </div>
        <button onClick={handleSubmit} className='mt-4 bg-blue-500 text-white p-2 rounded-md'>Submit</button>
          </div>

          <div className='w-[30%] flex-none'>
          
          </div>
      </div>
    </div>
  )
}

export default CreatePost