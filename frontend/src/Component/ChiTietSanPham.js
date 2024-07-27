import { React, useCallback, useState, useEffect } from "react";
import axios from "axios";
// import Slider from 'react-slick';
import "../App.css";
import { CiClock2, CiSignpostL1 } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { SiAdguard } from "react-icons/si";
import { ProDuctInFor, SelectQuantity } from ".";
import { formatMoney, formatPrice } from "../ultis/helpers";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";
const ChiTietSanPham = () => {
  const { id } = useParams();
  const { selectedProduct, selectProduct } = useProductContext();
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState();
  const [dataloai, setDataLoai] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (selectedProduct && selectedProduct.id === parseInt(id)) {
      setData(selectedProduct);
    } else {
      fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/product/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [id, selectedProduct]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/v1/product`)
      .then((response) => {
        setDataLoai(response.data);
      })
      .catch((error) => {});
  }, []);
  const handleQuantity = useCallback((number) => {
    if (!Number(number) || Number(number) < 1) {
      return;
    } else {
      setQuantity(number);
    }
  }, []);
  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formatter.format(amount);
  };
  const handleChangeQuantity = useCallback(
    (flag) => {
      if (flag === "minus" && quantity === 1) return;
      if (flag === "minus") setQuantity((prev) => +prev - 1);
      if (flag === "plus") setQuantity((prev) => +prev + 1);
    },
    [quantity]
  );

  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };

  return (
    <div className="w-full m-auto flex flex-col gap-6">
      <div className="h-[81px] flex justify-center items-center bg-gray-100">
        <div className="w-[1050px]">
          <h3>Chi Tiết Sản Phẩm</h3>
        </div>
      </div>
      {data && (
        <div>
          <div className="w-[1050px] m-auto mt-4 flex sm:w-full gap-4 ">
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
            <div className="flex flex-col  w-2/5 ">
              <div className="w-full flex flex-col gap-6 border p-4 bg-[#efefec] rounded-t-lg">
                <div className="flex items-center justify-between">
                  <h2 className="text-[30px] font-semibold">{data.Title}</h2>
                  <span className="text-sm text-[#c7370f]">Kho: 100</span>
                </div>
                <div className="flex  mt-4 gap-2 flex-col">
                  Đánh Giá
                  <span className="text-sm text-[#c7370f] italic">
                    (Lựa Chọn Tuyệt vời đã có 100 sản phẩm được bán.)
                  </span>
                </div>
                <h3 className="text-[30px] font-semibold text-[#c7370f]">
                  {`${formatCurrency(data.Price)}`} VND
                </h3>
                <ul className="text-base list-square pl-5 text-gray-500">
                  <li className="leading-6">{data.Description}</li>
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
              <div className="flex items-center justify-around text-[11px] w-full h-12 p-2 bg-[#aead9d] rounded-b-lg">
                <div>
                  <CiClock2 className="items-center w-full" />
                  <span>SHIPS IN 24 HRS</span>
                </div>
                <div>
                  <BiLike className="items-center w-full" />
                  <span>EASY RETURNS</span>
                </div>
                <div>
                  <SiAdguard className="items-center w-full" />
                  <span>LIFETIME WARRANTY*</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1050px] m-auto mt-4 sm:w-full sm:h-full">
            <ProDuctInFor />
          </div>
        </div>
      )}

      <div className="w-full">
        <marquee className="text-[34px] bg-blue-800 text-white">
          Chào mừng bạn đến với Tui là tất cả cuộc đời bạn
        </marquee>
      </div>
      <div className="w-full mt-4 border-b-2 border-red-500">
        <h3 className=" w-[1050px] text-[40px] m-auto font-somibold py-[15px] sm:w-full">
          OrTher Customer ALSO Like
        </h3>
      </div>
      <div className="h-full flex flex-row justify-center gap-4">
        {dataloai &&
          dataloai
            .filter((itemSanPham) => itemSanPham.loaisanpham === "BanChay")
            .sort(() => 0.5 - Math.random()) // Xáo trộn mảng
            .slice(0, 4) // Lấy 4 sản phẩm đầu tiên sau khi xáo trộn
            .map((itemSanPham, index) => (
              <div className="flex flex-row " key={index}>
                <div className="card">
                  <Link
                    to={`/SanPham/${itemSanPham.id}`}
                    onClick={() => selectProduct(itemSanPham)}
                  >
                    <div className="w-[397px] h-[397px] sm:w-full sm:h-full">
                      <img
                        src={`/img/${itemSanPham.Images}`}
                        className="h-full"
                        alt="sanpham"
                      />
                    </div>
                    <div className="cardContent">
                      <h1>{itemSanPham.Title}</h1>
                      <p>{itemSanPham.Description}</p>
                      <button className="border border-cyan-900 hover:bg-deep-orange-500 rounded-md w-full h-[40px]">
                        ADD to Card
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default ChiTietSanPham;
