import {React, useCallback, useState } from 'react';
// import Slider from 'react-slick';
import '../App.css';
import { CiClock2 } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { SiAdguard } from "react-icons/si";
import { ProDuctInFor, SelectQuantity } from '.';
import { formatMoney, formatPrice } from '../ultis/helpers';


const ChiTietSanPham = () => {
  const [quantity, setQuantity] = useState(1);
  
  const handleQuantity = useCallback((number) => {
    if (!Number(number) || Number(number) < 1) {
      return;
    } else {
      setQuantity(number);
    }
  }, []);

  const handleChangeQuantity = useCallback((flag) => {
    if (flag === 'minus' && quantity === 1) return;
    if (flag === 'minus') setQuantity((prev) => +prev - 1);
    if (flag === 'plus') setQuantity((prev) => +prev + 1);
  }, [quantity]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="w-full m-auto flex flex-col gap-6">
      <div className="h-[81px] flex justify-center items-center bg-gray-100">
        <div className="w-[1050px]">
          <h3>Chi Tiết Sản Phẩm</h3>
        </div>
      </div>
      <div className="w-[1050px] m-auto mt-4 flex sm:w-full flex gap-4 ">
        <div className="flex flex-col gap-4 w-3/5">
          <div className="h-[458px] w-full border object-cover">
            {/* <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: require("../assets/img/bepga.jpg")
              },
              largeImage: {
                src: require("../assets/img/bepga.jpg"),
                width: 1200,
                height: 1800
              }/
            }} /> */}
          </div>
          {/* <div className="w-[458px]">
            <Slider {...settings} className="image-slider bg-gray-400">
              <div>
                <img src={require("../assets/img/bepga.jpg")} alt="sanpham" />
              </div>
              <div>
                <img src={require("../assets/img/bepga.jpg")} alt="sanpham" />
              </div>
              <div>
                <img src={require("../assets/img/bepga.jpg")} alt="sanpham" />
              </div>
            </Slider>
          </div> */}
        </div>
        <div className='flex flex-col  w-2/5 flex flex-col '>
        <div className="w-full flex flex-col gap-6 border p-4 bg-[#efefec] rounded-t-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-[30px] font-semibold">
              Tên Sản Phẩm
            </h2>
            <span className="text-sm text-[#c7370f]">Kho: 100</span>
          </div>
          <div className="flex  mt-4 gap-2 flex-col">
            Đánh Giá
            <span className="text-sm text-[#c7370f] italic">(Lựa Chọn Tuyệt vời đã có 100 sản phẩm được bán.)</span>
          </div>
          <h3 className="text-[30px] font-semibold text-[#c7370f]">
            {formatMoney(formatPrice(1000000))} VND
          </h3>
          <ul className="text-base list-square pl-5 text-gray-500">
            <li className="leading-6">Túi duffel REI Co-op Roadtripper 100 rộng rãi và tối giản được tối ưu hóa để nhét trong cốp xe trong khi chở được một tấn. Mang nó trên đường, trên không, bất cứ nơi nào, sau đó đóng gói vào hộp lưu trữ riêng.</li>
          </ul>
          <div>
            <SelectQuantity 
              quantity={quantity} 
              handleQuantity={handleQuantity}
              handleChangeQuantity={handleChangeQuantity}
            />
          </div>
          <div>
            <button className="w-full px-4 py-2 rounded-md text-white bg-red-400 font-semibold my-2">
              Thêm vào giỏ hàng
            </button>
          </div>
         
        </div>
        <div className='flex items-center justify-around text-[11px] w-full h-12 p-2 bg-[#aead9d] rounded-b-lg'>
              <div >
                <CiClock2 className='items-center w-full'/>
                <span>SHIPS IN 24 HRS</span>
              </div>
              <div>
                <BiLike className='items-center w-full'/>
                <span>EASY RETURNS</span>
              </div>
              <div>
                <SiAdguard className='items-center w-full'/>
                <span>LIFETIME WARRANTY*</span>
              </div>
          </div>
        </div>
        
      </div>
      <div className="w-[1050px] m-auto mt-4">
        <ProDuctInFor/>
      </div>
      <div className='w-full'>
        <marquee className='text-[34px] bg-blue-800 text-white'>Chào mừng bạn đến với  Tui là tất cả cuộc đời bạn</marquee>
      </div>
      <div className='w-[1050px] m-auto mt-4 '>
        <h3 className='text-[40px] font-somibold py-[15px] border-b-2 border-red-500'>OrTher Customer ALSO Like</h3>
      </div>
      <div className='h-[100px]'></div>
    </div>
    
  );
}

export default ChiTietSanPham;
