import React,{ useEffect } from "react";
import { Link } from 'react-router-dom'
import Glider from 'glider-js';
import {Blog} from '../Component'
import  "../App.css"


export function Home() {
  
    const data = [
      
      {
        imageLink:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      },
      {
        imageLink:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      },
      {
        imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
      },
      {
        imageLink:
            "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
      },
      {
        imageLink:
            "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
      },
      {
        imageLink:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
      },
    ];
    useEffect(() => {
    //step 1: get DOM
  let nextDom = document.getElementById('next');
  let prevDom = document.getElementById('prev');
  
  let carouselDom = document.querySelector('.carousel');
  let SliderDom = carouselDom.querySelector('.carousel .list');
  let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
  let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
  let timeDom = document.querySelector('.carousel .time');
  
  // thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  let timeRunning = 3000;
  // let timeAutoNext = 7000;
  
  nextDom.onclick = function(){
      showSlider('next');    
  }
  
  prevDom.onclick = function(){
      showSlider('prev');    
  }
  let runTimeOut;
  // let runNextAuto = setTimeout(() => {
  //     nextDom.click();
  // }, timeAutoNext)
  function showSlider(type){
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        if (SliderItemsDom.length > 0) {
            SliderDom.appendChild(SliderItemsDom[0]);
        } else {
            console.error('Không tìm thấy SliderItemsDom');
        }

        if (thumbnailItemsDom.length > 0) {
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        } else {
            console.error('Không tìm thấy thumbnailItemsDom');
        }

        carouselDom.classList.add('next');
    } else {
        if (SliderItemsDom.length > 0) {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        } else {
            console.error('Không tìm thấy SliderItemsDom');
        }

        if (thumbnailItemsDom.length > 0) {
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        } else {
            console.error('Không tìm thấy thumbnailItemsDom');
        }

        carouselDom.classList.add('prev');
    }
    
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
  
      // clearTimeout(runNextAuto);
      // runNextAuto = setTimeout(() => {
      //     nextDom.click();
      // }, timeAutoNext)
  }
  }, [])
      
  
  
  
    // const [loading, setLoading] = useState(true);
  
    // useEffect(() => {
    //   // Giả lập tải dữ liệu
    //   const timer = setTimeout(() => {
    //     setLoading(false);
    //   }, 5000);
  
    //   return () => clearTimeout(timer);
    // }, []);
    useEffect(() => {
      new Glider(document.querySelector('.glider'), {
        slidesToShow: 3,
        dots: '#dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [
          {
            breakpoint: 1200,
            settings: {  
              slidesToShow: 4,
              slidesToScroll: 2,  
            }
          },{
            breakpoint: 740,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
          
        ]
      });
      
    }, []);
  
  
    return (
      <>
       <nav className="bg-black" >
          <div className="max-w-7xl flex items-center mx-auto relative">  
            <ul className="flex font-semibold">
              <li className="group">
                <Link className="menu-item group-hover:border-white">Shop All</Link>
                <div className="grid grid-cols-7 w-full p-5 absolute top-full left-0 bg-white text-white mt-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-10 group-hover:mt-0 
                transition-all duration-500 ">
                  <ul className="p-2 ">
                    <li><Link to='' className="mega-sub-item-title">Product category</Link></li>
                    <div className="border-black border-t-4">
                    <li className="flex justify-between">
                      <Link to='' className="mega-sub-item">Sub category</Link>
                      <button className="text-black">{'>'}</button>
                    </li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    </div>
                  </ul>
                  <ul className="p-2">
                    <li><Link to='' className="mega-sub-item-title">Product category</Link></li>
                    <div className="border-black border-t-4">
                    <li className="flex justify-between">
                      <Link to='' className="mega-sub-item">Sub category</Link>
                      <button className="text-black">{'>'}</button>
                    </li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    </div>
                  </ul>
                  <ul className="p-2">
                    <li><Link to='' className="mega-sub-item-title">Product category</Link></li>
                    <div className="border-black border-t-4">
                    <li className="flex justify-between">
                      <Link to='' className="mega-sub-item">Sub category</Link>
                      <button className="text-black">{'>'}</button>
                    </li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    </div>
                  </ul>
                  <ul className="p-2">
                    <li><Link to='' className="mega-sub-item-title">Product category</Link></li>
                    <div className="border-black border-t-4">
                    <li className="flex justify-between">
                      <Link to='' className="mega-sub-item">Sub category</Link>
                      <button className="text-black">{'>'}</button>
                    </li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    </div>
                  </ul>
                  <ul className="p-2">
                    <li><Link to='' className="mega-sub-item-title">Product category</Link></li>
                    <div className="border-black border-t-4">
                    <li className="flex justify-between">
                      <Link to='' className="mega-sub-item">Sub category</Link>
                      <button className="text-black">{'>'}</button>
                    </li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    </div>
                  </ul>
                  <ul className="p-2">
                    <li><Link to='' className="mega-sub-item-title">Product category</Link></li>
                    <div className="border-black border-t-4">
                    <li className="flex justify-between">
                      <Link to='' className="mega-sub-item">Sub category</Link>
                      <button className="text-black">{'>'}</button>
                    </li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    </div>
                  </ul>
                  <ul className="p-2 ">
                    <img src={require("../assets/img/nav.png")} className="h-full"></img>
                  </ul>
                  <ul>
                  
                  </ul>
                </div>
              </li>
              <li className="group">
                <Link className="menu-item group-hover:border-white">MORE</Link> 
                
                <div className="grid grid-cols-4 w-full p-5 absolute top-full left-0 bg-white text-white mt-10 opacity-0 invisible  group-hover:opacity-100 group-hover:visible group-hover:top-10 group-hover:mt-0
                transition-all duration-500 ">
                  <ul className="p-2">
                    <li><Link to='' className="mega-sub-item-title">Product category</Link></li>
                    <li className="flex justify-between">
                      <Link to='' className="mega-sub-item">Sub category</Link>
                      <button className="text-black">{'>'}</button>
                    </li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                  </ul>
                  <ul className="p-2">
                    <li><Link to='' className="mega-sub-item-title">Product category</Link></li>
                    <li className="flex justify-between">
                      <Link to='' className="mega-sub-item">Sub category</Link>
                      <button className="text-black">{'>'}</button>
                    </li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                  </ul>
                  <ul className="p-2">
                    <li><Link to='' className="mega-sub-item-title">Product category</Link></li>
                    <li className="flex justify-between">
                      <Link to='' className="mega-sub-item">Sub category</Link>
                      <button className="text-black">{'>'}</button>
                    </li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                  </ul>
                  <ul className="p-2">
                    <li><Link to='' className="mega-sub-item-title">Product category</Link></li>
                    <li className="flex justify-between">
                      <Link to='' className="mega-sub-item">Sub category</Link>
                      <button className="text-black">{'>'}</button>
                    </li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                    <li className="flex justify-between"><Link to='' className="mega-sub-item">Sub category</Link>
                    <button className="text-black">{'>'}</button></li>
                  </ul>
                 
                  <ul>
                  
                  </ul>
                </div>
              </li>
            </ul>
          </div>
      </nav>
      <div class="carousel">
         
          <div class="list">
              <div class="item">
                
                  <img src={require("../assets/img/img1.jpg")}/>
                  <div class="SupContent">
                      <div class="author">LUNDEV</div>
                      <div class="titleau">DESIGN</div>
                      <div class="topic">ANIMAL</div>
                      <div class="des">
                          
                          Nội dung chỉ đơn  Giản là giới thiệu về các địa điểm cấm trại thôi
                      </div>
                      <div class="buttons">
                          <button>SEE MORE</button>
                          <button>SUBSCRIBE</button>
                      </div>
                  </div>
              </div>
              <div class="item">
                  <img src={require("../assets/img/img2.jpg")} />
                  <div class="SupContent">
                      <div class="author">LUNDEV</div>
                      <div class="titleau">DESIGN</div>
                      <div class="topic">ANIMAL</div>
                      <div class="des">
                          Nội dung chỉ đơn  Giản là giới thiệu về các địa điểm cấm trại thôi
                      </div>
                      <div class="buttons">
                          <button>SEE MORE</button>
                          <button>SUBSCRIBE</button>
                      </div>
                  </div>
              </div>
              <div class="item">
                  <img src={require("../assets/img/img3.jpg")} />
                  <div class="SupContent">
                      <div class="author">LUNDEV</div>
                      <div class="titleau">DESIGN</div>
                      <div class="topic">ANIMAL</div>
                      <div class="des">
                          Nội dung chỉ đơn  Giản là giới thiệu về các địa điểm cấm trại thôi
                      </div>
                      <div class="buttons">
                          <button>SEE MORE</button>
                          <button>SUBSCRIBE</button>
                      </div>
                  </div>
              </div>
              <div class="item">
                  <img src={require("../assets/img/img4.jpg")} />
                  <div class="SupContent">
                      <div class="author">LUNDEV</div>
                      <div class="titleau">DESIGN</div>
                      <div class="topic">ANIMAL</div>
                      <div class="des">
                          Nội dung chỉ đơn  Giản là giới thiệu về các địa điểm cấm trại thôi
                      </div>
                      <div class="buttons">
                          <button>SEE MORE</button>
                          <button>SUBSCRIBE</button>
                      </div>
                  </div>
              </div>
          </div>
          
          <div class="thumbnail">
              <div class="item">
                  <img src={require("../assets/img/img1.jpg")} />
                  <div class="SupContent">
                      <div class="titleau">
                          Name Slider
                      </div>
                      <div class="description">
                          Description
                      </div>
                  </div>
              </div>
              <div class="item">
                  <img src={require("../assets/img/img2.jpg")} />
                  <div class="SupContent">
                      <div class="titleau">
                          Name Slider
                      </div>
                      <div class="description">
                          Description
                      </div>
                  </div>
              </div>
              <div class="item">
                  <img src={require("../assets/img/img3.jpg")} />
                  <div class="SupContent">
                      <div class="titleau">
                          Name Slider
                      </div>
                      <div class="description">
                          Description
                      </div>
                  </div>
              </div>
              <div class="item">
                  <img src={require("../assets/img/img4.jpg")} />
                  <div class="SupContent">
                      <div class="titleau">
                          Name Slider
                      </div>
                      <div class="description">
                          Description
                      </div>
                  </div>
              </div>
          </div>
          <div class="arrows">
              <button id="prev">{'<'}</button>
              <button id="next">{'>'}</button>
          </div>
          
          
      </div>
      
      <div className="content">
        <body>
      
      <div className="PageWith">
        <div className="text-[43px]">Mua Sắm Các Danh Mục Hàng Đầu</div>
        <div className="ListCover" style={{height:"260px"}}>
        
        <div className="ListImgProduct ">
        {/* {loading ? (
          <div className="skeleton-container">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        ) : ( */}
          <Link to='/'>
            <div className="logo">
              <img src={require("../assets/img/camping.png")} alt="Camping" style={{ width: '10em' }} />
            </div>
            <span className="HoverTitle" style={{ fontWeight: 700, color: 'blue' }}>
              Camping
              <svg className="ButtonHover" style={{ marginTop: '-3px' }} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="30px" fill="#0000F5">
                <path d="M673-446.67H160v-66.66h513l-240-240L480-800l320 320-320 320-47-46.67 240-240Z" />
              </svg>
            </span>
          </Link>
        
      </div>
      <div className="ListImgProduct ">
        {/* {loading ? (
          <div className="skeleton-container">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        ) : ( */}
          <Link to='/'>
            <div className="logo">
              <img src={require("../assets/img/camping.png")} alt="Camping" style={{ width: '10em' }} />
            </div>
            <span className="HoverTitle" style={{ fontWeight: 700, color: 'blue' }}>
              Camping
              <svg className="ButtonHover" style={{ marginTop: '-3px' }} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="30px" fill="#0000F5">
                <path d="M673-446.67H160v-66.66h513l-240-240L480-800l320 320-320 320-47-46.67 240-240Z" />
              </svg>
            </span>
          </Link>
       
      </div>
      <div className="ListImgProduct ">
        {/* {loading ? (
          <div className="skeleton-container">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        ) : ( */}
          <Link to='/'>
            <div className="logo">
              <img src={require("../assets/img/camping.png")} alt="Camping" style={{ width: '10em' }} />
            </div>
            <span className="HoverTitle" style={{ fontWeight: 700, color: 'blue' }}>
              Camping
              <svg className="ButtonHover" style={{ marginTop: '-3px' }} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="30px" fill="#0000F5">
                <path d="M673-446.67H160v-66.66h513l-240-240L480-800l320 320-320 320-47-46.67 240-240Z" />
              </svg>
            </span>
          </Link>
        
      </div>
      <div className="ListImgProduct ">
        {/* {loading ? (
          <div className="skeleton-container">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        ) : ( */}
          <Link to='/'>
            <div className="logo">
              <img src={require("../assets/img/camping.png")} alt="Camping" style={{ width: '10em' }} />
            </div>
            <span className="HoverTitle" style={{ fontWeight: 700, color: 'blue' }}>
              Camping
              <svg className="ButtonHover" style={{ marginTop: '-3px' }} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="30px" fill="#0000F5">
                <path d="M673-446.67H160v-66.66h513l-240-240L480-800l320 320-320 320-47-46.67 240-240Z" />
              </svg>
            </span>
          </Link>
       
      </div>
        </div>
        
      </div>
        
        <div className=" text-[43px]">Tại Sau Nên Chọn Camping.K</div>
        <div className="service">
          
          <div className="delivery">
            <div className="title-service">
              <span><svg style={{color: '#fcb600'}} xmlns="http://www.w3.org/2000/svg" width="3em" height="3em"
                         viewBox="0 0 16 16"><g fill="currentColor"><path
                  d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218c.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563a2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045a4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188c-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132c.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195c.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657c.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362c-.598-.6-.436-1.733.361-2.532c.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"></path><path
                  d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903c-.126-.127.737-4.189 1.839-5.18c.346.69.837 1.35 1.411 1.925"></path></g></svg></span>
              <div>
                <h3>SHIP COD</h3>
                <p>Ship nội thành trong ngày</p>
              </div>
            </div>
          </div>
          <div className="guarantee">
            <div className="title-service">
              <span><svg style={{color: '#fcb600'}} xmlns="http://www.w3.org/2000/svg" width="3em" height="3em"
                         viewBox="0 0 256 256"><path fill="currentColor"
                                                     d="M136 80v43.47l36.12 21.67a8 8 0 0 1-8.24 13.72l-40-24A8 8 0 0 1 120 128V80a8 8 0 0 1 16 0m-8-48a95.44 95.44 0 0 0-67.92 28.15C52.81 67.51 46.35 74.59 40 82V64a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16H49c7.15-8.42 14.27-16.35 22.39-24.57a80 80 0 1 1 1.66 114.75a8 8 0 1 0-11 11.64A96 96 0 1 0 128 32"></path></svg></span>
              <div>
  
                <h3>BẢO HÀNH 30 NGÀY</h3>
                <p>Nếu có lỗi từ nhà sản xuất</p>
              </div>
            </div>
  
          </div>
          <div className="payment-methods">
            <div className="title-service">
              <span><svg style={{color: '#fcb600'}} xmlns="http://www.w3.org/2000/svg" width="3em" height="3em"
                         viewBox="0 0 24 24"><path fill="currentColor"
                                                   d="M19 19h-2q-.425 0-.712-.288T16 18t.288-.712T17 17h2v-2q0-.425.288-.712T20 14t.713.288T21 15v2h2q.425 0 .713.288T24 18t-.288.713T23 19h-2v2q0 .425-.288.713T20 22t-.712-.288T19 21zM4 12h16V8H4zm0 8q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v5q0 .425-.288.713T21 12h-2q-2.075 0-3.537 1.463T14 17v2q0 .425-.288.713T13 20z"></path></svg></span>
              <div>
                <h3>PHƯƠNG THỨC THANH TOÁN TIỀN MẶT</h3>
                <p>Chuyển khoản hoặc COD</p>
              </div>
            </div>
          </div>
          <div className="advise">
            <div className="title-service">
              <span><svg style={{color: '#fcb600'}} xmlns="http://www.w3.org/2000/svg" width="3em" height="3em"
                         viewBox="0 0 512 512"><path fill="currentColor"
                                                     d="M448 312.43c.77-1.11 1.51-2.26 2.27-3.34A174.55 174.55 0 0 0 480 211.85C480.32 112.55 396.54 32 292.94 32c-90.36 0-165.74 61.49-183.4 143.12a172.81 172.81 0 0 0-4 36.83c0 99.4 80.56 182.11 184.16 182.11c16.47 0 38.66-4.95 50.83-8.29s24.23-7.75 27.35-8.94s8-2.41 11.89-1.29l77.42 22.38a4 4 0 0 0 5-4.86l-17.72-67.49c-1.23-5-1.39-5.94 3.53-13.14"></path><path
                  fill="currentColor"
                  d="M312.54 415.38a165.32 165.32 0 0 1-23.26 2.05c-42.43 0-82.5-11.2-115-32.2a184.09 184.09 0 0 1-53.09-49.32c-26.08-34.57-40.3-78.51-40.3-124.49c0-3.13.11-6.14.22-9.16a4.34 4.34 0 0 0-7.54-3.12a158.76 158.76 0 0 0-14.86 195.24c2.47 3.77 3.87 6.68 3.44 8.62l-14.09 72.26a4 4 0 0 0 5.22 4.53l68-24.24a16.85 16.85 0 0 1 12.92.22c20.35 8 42.86 12.92 65.37 12.92a169.45 169.45 0 0 0 116.63-46a4.29 4.29 0 0 0-3.66-7.31"></path></svg></span>
              <div>
                <h3>TƯ VẤN MUA HÀNG 24/7</h3>
                <p>Hổ trợ tư vấn và đặt hàng</p>
              </div>
            </div>
          </div>
        </div>
        <div className="HeaderSub">
          <img style={{width: "130px"}} src={require("../assets/img/brand.jpg")}/>
          <div className="title-sub">
            <h1>THƯƠNG HIỆU</h1>
            <div>Các thương hiệu hàng đầu thế giới</div>
          </div>
  
        </div>
        <div className="animation-silder">
  
          <div className="Silder-track">
            <div className="Img-track">
              <img src={require("../assets/img/1.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/2.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/3.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/4.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/5.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/6.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/7.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/8.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/9.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/10.jpg")}/>
            </div>
           
            <div className="Img-track">
              <img src={require("../assets/img/1.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/2.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/3.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/4.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/5.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/6.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/7.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/8.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/9.jpg")}/>
            </div>
            <div className="Img-track">
              <img src={require("../assets/img/10.jpg")}/>
            </div>
  
          </div>
        </div>
        
        <div className="product">
          <div className="title-product p-[15px] flex justify-center text-[43px]">Sản Phẩm Nổi Bật</div>
          <div className="flex-card">
          <div className="card">
            <div className="cardImg">
              <img src={require("../assets/img/bepga.jpg")}/>
            </div>
            <div className='cardContent'>
              <h1>My Card</h1>
              <p>
                sản phẩm này có giá trị liên thành nha ni ơi
              </p>
            </div>
          </div>
          <div className="card">
            <div className="cardImg">
              <img src={require("../assets/img/bepga.jpg")}/>
            </div>
            <div className='cardContent'>
              <h1>My Card</h1>
              <p>
                sản phẩm này có giá trị liên thành nha ni ơi
              </p>
            </div>
          </div>
          <div className="card">
            <div className="cardImg">
              <img src={require("../assets/img/bepga.jpg")}/>
            </div>
            <div className='cardContent'>
              <h1>My Card</h1>
              <p>
                sản phẩm này có giá trị liên thành nha ni ơi
              </p>
            </div>
          </div>
          <div className="card">
            <div className="cardImg">
              <img src={require("../assets/img/bepga.jpg")}/>
            </div>
            <div className='cardContent'>
              <h1>My Card</h1>
              <p>
                sản phẩm này có giá trị liên thành nha ni ơi
              </p>
            </div>
          </div>
          </div>
        </div>
        <section className="N-slider">
                <h3 className="Slider-heading">Sản Phẩm Mới</h3>
                <div className="slider-btns">
                <button aria-label="Previous" class="glider-prev">
                  <span>{'<'}</span>
                </button>
                <button aria-label="Next" class="glider-next">
                  <span>{'>'}</span>
                </button>
                </div>
                
  
                <div class="glider-contain">
                         <div class="glider">
                         <div className="box-new">
                    <div className="p-img-container">
                      <div className="p-img">
                        <Link to='/'>
                        <img src={require("../assets/img/fishing.png")} className="p-img-front" ></img>
                        <img src={require("../assets/img/divingandspearfishing.png")}className="p-img-back"></img>
                        </Link>
                      </div>
                      <div className="p-box-text">
                        <div className="pro-category">
                            <span>
                                Sản phẩm
                            </span>
                        </div>
                        <Link to='/' className="pro-title">
                        Đây là sản pham sap dc them dũ lệu vào
                        </Link>
                        <div className="price-buy">
                            <span className="p-price"> 1200 đ</span>
                            <Link to='/' className="p-buy-btn">Buy Now</Link>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="box-new">
                    <div className="p-img-container">
                      <div className="p-img">
                        <Link to='/'>
                        <img src={require("../assets/img/fishing.png")} className="p-img-front" ></img>
                        <img src={require("../assets/img/divingandspearfishing.png")}className="p-img-back"></img>
                        </Link>
                      </div>
                      <div className="p-box-text">
                        <div className="pro-category">
                            <span>
                                Sản phẩm
                            </span>
                        </div>
                        <Link to='/' className="pro-title">
                        Đây là sản pham sap dc them dũ lệu vào
                        </Link>
                        <div className="price-buy">
                            <span className="p-price"> 1200 đ</span>
                            <Link to='/' className="p-buy-btn">Buy Now</Link>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="box-new">
                    <div className="p-img-container">
                      <div className="p-img">
                        <Link to='/'>
                        <img src={require("../assets/img/fishing.png")} className="p-img-front" ></img>
                        <img src={require("../assets/img/divingandspearfishing.png")}className="p-img-back"></img>
                        </Link>
                      </div>
                      <div className="p-box-text">
                        <div className="pro-category">
                            <span>
                                Sản phẩm
                            </span>
                        </div>
                        <Link to='/' className="pro-title">
                        Đây là sản pham sap dc them dũ lệu vào
                        </Link>
                        <div className="price-buy">
                            <span className="p-price"> 1200 đ</span>
                            <Link to='/' className="p-buy-btn">Buy Now</Link>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="box-new">
                    <div className="p-img-container">
                      <div className="p-img">
                        <Link to='/'>
                        <img src={require("../assets/img/fishing.png")} className="p-img-front" ></img>
                        <img src={require("../assets/img/divingandspearfishing.png")}className="p-img-back"></img>
                        </Link>
                      </div>
                      <div className="p-box-text">
                        <div className="pro-category">
                            <span>
                                Sản phẩm
                            </span>
                        </div>
                        <Link to='/' className="pro-title">
                        Đây là sản pham sap dc them dũ lệu vào
                        </Link>
                        <div className="price-buy">
                            <span className="p-price"> 1200 đ</span>
                            <Link to='/' className="p-buy-btn">Buy Now</Link>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="box-new">
                    <div className="p-img-container">
                      <div className="p-img">
                        <Link to='/'>
                        <img src={require("../assets/img/fishing.png")} className="p-img-front" ></img>
                        <img src={require("../assets/img/divingandspearfishing.png")}className="p-img-back"></img>
                        </Link>
                      </div>
                      <div className="p-box-text">
                        <div className="pro-category">
                            <span>
                                Sản phẩm
                            </span>
                        </div>
                        <Link to='/' className="pro-title">
                        Đây là sản pham sap dc them dũ lệu vào
                        </Link>
                        <div className="price-buy">
                            <span className="p-price"> 1200 đ</span>
                            <Link to='/' className="p-buy-btn">Buy Now</Link>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="box-new">
                    <div className="p-img-container">
                      <div className="p-img">
                        <Link to='/'>
                        <img src={require("../assets/img/fishing.png")} className="p-img-front" ></img>
                        <img src={require("../assets/img/divingandspearfishing.png")}className="p-img-back"></img>
                        </Link>
                      </div>
                      <div className="p-box-text">
                        <div className="pro-category">
                            <span>
                                Sản phẩm
                            </span>
                        </div>
                        <Link to='/' className="pro-title">
                        Đây là sản pham sap dc them dũ lệu vào
                        </Link>
                        <div className="price-buy">
                            <span className="p-price"> 1200 đ</span>
                            <Link to='/' className="p-buy-btn">Buy Now</Link>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="box-new">
                    <div className="p-img-container">
                      <div className="p-img">
                        <Link to='/'>
                        <img src={require("../assets/img/fishing.png")} className="p-img-front" ></img>
                        <img src={require("../assets/img/divingandspearfishing.png")}className="p-img-back"></img>
                        </Link>
                      </div>
                      <div className="p-box-text">
                        <div className="pro-category">
                            <span>
                                Sản phẩm
                            </span>
                        </div>
                        <Link to='/' className="pro-title">
                        Đây là sản pham sap dc them dũ lệu vào
                        </Link>
                        <div className="price-buy">
                            <span className="p-price"> 1200 đ</span>
                            <Link to='/' className="p-buy-btn">Buy Now</Link>
                        </div>
                      </div>
                    </div>
                </div>
                </div>
  
               
                
  </div>       
        </section>
        <div className="RainWear">
          <div className="Title-wear text-[43px]">
            Bộ Sưu Tập Đi Mưa Hoàn Hảo
          </div>
          <div className="Product_wear flex gap-2 sm:flex-col justify-center " >
                <div className="List-wear grid grid-row-2 gap-2 sm:flex-col " >
                  <div className="super_rain grid grid-cols-2 gap-2 ">
                  <div className="Box-rain border-solid border-2 ">
                    <div className="r-img-container">
                      <div className="r-img">
                        <Link to='/'>
                        <img src={require("../assets/img/fishing.png")} className="" ></img>
                        <div className="price-buy-rain">
                            <Link to='/' className="p-buy-btn-rain">Buy Now</Link>
                        </div>
                        </Link>
                        
                      </div>
                      <div className="r-box-text pt-5">
                        <div className="pro-rain">
                            <span>
                            Đây là sản pham sap dc them dũ lệu vào
                            </span>
                        </div>
                        <Link to='/' className="pro-title-rain">
                        
                        <span className="p-price-rain"> 1200 đ</span>
                        </Link>
                       
                      </div>
                    </div>
                </div>
                <div className="Box-rain border-solid border-2">
                    <div className="r-img-container">
                      <div className="r-img">
                        <Link to='/'>
                        <img src={require("../assets/img/fishing.png")} className="" ></img>
                        <div className="price-buy-rain">
                            <Link to='/' className="p-buy-btn-rain">Buy Now</Link>
                        </div>
                        </Link>
                        
                      </div>
                      <div className="r-box-text pt-5">
                        <div className="pro-rain">
                            <span>
                            Đây là sản pham sap dc them dũ lệu vào
                            </span>
                        </div>
                        <Link to='/' className="pro-title-rain">
                        
                        <span className="p-price-rain"> 1200 đ</span>
                        </Link>
                       
                      </div>
                    </div>
                </div>
                  </div>
                <div className="grid grid-cols-2 gap-2 justify-center">
                <div className="Box-rain border-solid border-2">
                    <div className="r-img-container">
                      <div className="r-img">
                        <Link to='/'>
                        <img src={require("../assets/img/fishing.png")} className="" ></img>
                        <div className="price-buy-rain">
                            <Link to='/' className="p-buy-btn-rain">Buy Now</Link>
                        </div>
                        </Link>
                        
                      </div>
                      <div className="r-box-text pt-5">
                        <div className="pro-rain">
                            <span>
                            Đây là sản pham sap dc them dũ lệu vào
                            </span>
                        </div>
                        <Link to='/' className="pro-title-rain">
                        
                        <span className="p-price-rain"> 1200 đ</span>
                        </Link>
                       
                      </div>
                    </div>
                </div>
                <div className="Box-rain border-solid border-2">
                    <div className="r-img-container">
                      <div className="r-img">
                        <Link to='/'>
                        <img src={require("../assets/img/fishing.png")} className="" ></img>
                        <div className="price-buy-rain">
                            <Link to='/' className="p-buy-btn-rain">Buy Now</Link>
                        </div>
                        </Link>
                        
                      </div>
                      <div className="r-box-text pt-5">
                        <div className="pro-rain">
                            <span>
                            Đây là sản pham sap dc them dũ lệu vào
                            </span>
                        </div>
                        <Link to='/' className="pro-title-rain">
                        
                        <span className="p-price-rain"> 1200 đ</span>
                        </Link>
                       
                      </div>
                    </div>
                </div>
                </div>
                </div>
                
                <div className="Wear-img">
                  <img src={require("../assets/img/rainwear.png")} className=" sm:w-full" ></img>
                </div>
          </div>
        </div>
        <div className="text-[43px] font-semibold">
       
                <Blog/>
              
        </div>
        </body>
        
      </div>
      <div className="title-img-nav flex justify-center text-[43px]">Địa Điểm Tuyệt Vời</div>
        <div className="img-nav" style={{height: '500px'}}>
          <div className="title-midle">
            
          </div>
        </div>
      <div className="contact h-96 w-full">
          <div className="">
            <div className="contact-box bg-cyan-300  flex justify-evenly h-48 items-center">
              <div className="text-2xl w-[410px]">
              <span className="text-white font-bold">THAM GIA CÂU LẠC BỘ PHIÊU LƯU </span>
              Nhận giảm giá Câu lạc bộ, tham dự các sự kiện độc quyền và hơn thế nữa
              </div>
              <div>
                <button className="rounded-full py-[10px] px-[50px] border-2 m-[20px] flex bg-white">
                Đăng Ký Miên Phí 
                <span className="pl-5">{">"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      <footer>
      <div className="waves">
          <div className='wave' id='wave1'></div>
          <div className='wave' id='wave2'></div>
          <div className='wave' id='wave3'></div>
          <div className='wave' id='wave4'></div>
        </div>
        <div className="w-[1600px] m-auto">
      <div className="Final grid grid-cols-2 gap-4">
        
          <div>
          Go further. Sleep wild.
          </div>
  
          <div className="grid grid-cols-3 gap-4">
            <div className="grid grid-row-4 gap-1 h-10 flex justify-center">
              <p style={{fontSize:"16px"}}>SITE</p>
              <Link>Shop all</Link>
              <Link>Out story</Link>
              <Link>Blog</Link>
            </div>
            <div>
          <ul className="menu">
          <div className="">ALL</div>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
            </div>
            <div>
        <div className="flex justify-center">Follow</div>
        <ul className='icon-social '>
          <li><a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1000 1000">
              <path fill="currentColor"
                    d="M182.594 0C81.445 0 0 81.445 0 182.594v634.813c0 101.149 81.445 182.594 182.594 182.594h344.063V609.063H423.282v-140.75h103.375v-120.25c0-94.475 61.079-181.219 201.781-181.219c56.968 0 99.094 5.469 99.094 5.469l-3.313 131.438s-42.963-.406-89.844-.406c-50.739 0-58.875 23.378-58.875 62.188v102.781h152.75l-6.656 140.75H675.5v390.938h141.906c101.149 0 182.594-81.445 182.594-182.594V182.595C1000 81.446 918.555.001 817.406.001H182.593z"></path>
            </svg>
          </a></li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
                <path fill="currentColor"
                      d="M14.977 1.467a.5.5 0 0 0-.87-.301a2.559 2.559 0 0 1-1.226.763A3.441 3.441 0 0 0 10.526 1a3.539 3.539 0 0 0-3.537 3.541v.44C3.998 4.75 2.4 2.477 1.967 1.325a.5.5 0 0 0-.916-.048C.004 3.373-.157 5.407.604 7.139C1.27 8.656 2.61 9.864 4.51 10.665C3.647 11.276 2.194 12 .5 12a.5.5 0 0 0-.278.916C1.847 14 3.55 14 5.132 14h.048c4.861 0 8.8-3.946 8.8-8.812v-.479c.363-.37.646-.747.82-1.236c.193-.546.232-1.178.177-2.006"></path>
              </svg>
            </a>
          </li>
          <li><a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" viewBox="0 0 576 512">
              <path fill="currentColor"
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z"></path>
            </svg>
          </a></li>
          <li><a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor"
                    d="M12 9.52A2.48 2.48 0 1 0 14.48 12A2.48 2.48 0 0 0 12 9.52m9.93-2.45a6.53 6.53 0 0 0-.42-2.26a4 4 0 0 0-2.32-2.32a6.53 6.53 0 0 0-2.26-.42C15.64 2 15.26 2 12 2s-3.64 0-4.93.07a6.53 6.53 0 0 0-2.26.42a4 4 0 0 0-2.32 2.32a6.53 6.53 0 0 0-.42 2.26C2 8.36 2 8.74 2 12s0 3.64.07 4.93a6.86 6.86 0 0 0 .42 2.27a3.94 3.94 0 0 0 .91 1.4a3.89 3.89 0 0 0 1.41.91a6.53 6.53 0 0 0 2.26.42C8.36 22 8.74 22 12 22s3.64 0 4.93-.07a6.53 6.53 0 0 0 2.26-.42a3.89 3.89 0 0 0 1.41-.91a3.94 3.94 0 0 0 .91-1.4a6.6 6.6 0 0 0 .42-2.27C22 15.64 22 15.26 22 12s0-3.64-.07-4.93m-2.54 8a5.73 5.73 0 0 1-.39 1.8A3.86 3.86 0 0 1 16.87 19a5.73 5.73 0 0 1-1.81.35H8.94A5.73 5.73 0 0 1 7.13 19a3.51 3.51 0 0 1-1.31-.86A3.51 3.51 0 0 1 5 16.87a5.49 5.49 0 0 1-.34-1.81V8.94A5.49 5.49 0 0 1 5 7.13a3.51 3.51 0 0 1 .86-1.31A3.59 3.59 0 0 1 7.13 5a5.73 5.73 0 0 1 1.81-.35h6.12a5.73 5.73 0 0 1 1.81.35a3.51 3.51 0 0 1 1.31.86A3.51 3.51 0 0 1 19 7.13a5.73 5.73 0 0 1 .35 1.81V12c0 2.06.07 2.27.04 3.06Zm-1.6-7.44a2.38 2.38 0 0 0-1.41-1.41A4 4 0 0 0 15 6H9a4 4 0 0 0-1.38.26a2.38 2.38 0 0 0-1.41 1.36A4.27 4.27 0 0 0 6 9v6a4.27 4.27 0 0 0 .26 1.38a2.38 2.38 0 0 0 1.41 1.41a4.27 4.27 0 0 0 1.33.26h6a4 4 0 0 0 1.38-.26a2.38 2.38 0 0 0 1.41-1.41a4 4 0 0 0 .26-1.38V9a3.78 3.78 0 0 0-.26-1.38ZM12 15.82A3.81 3.81 0 0 1 8.19 12A3.82 3.82 0 1 1 12 15.82m4-6.89a.9.9 0 0 1 0-1.79a.9.9 0 0 1 0 1.79"></path>
            </svg>
          </a></li>
        </ul>
        
        </div>
        </div>
        </div>
        <div className="m-[50px] border-t-4 border-white">
            <div></div>
            <div className="flex flex-row justify-between ">
            <div className="logo ">
            <img src={require("../assets/img/Logo.png")} className="h-[100px]"></img>
          </div>
          <div className="flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="m282-40 121-620q5-24 23-37t38-13q20 0 37.5 9t28.5 26l39 64q19 32 52.5 57t78.5 39v-75h40v550h-40v-414q-51-11-96-39t-80-69l-29 145 85 81v296h-60v-244l-100-95-74 339h-64Zm17-403-75-14q-10-2-17.5-13t-5.5-22l30-157q5-29 29-44.5t53-10.5l36 7-50 254Zm231-311q-30 0-51.5-21.5T457-827q0-30 21.5-51.5T530-900q30 0 51.5 21.5T603-827q0 30-21.5 51.5T530-754Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M80-80v-183l363-491-67-90 49-35 55 75 56-75 48 35-66 90 362 491v183H80Zm400-623L140-243v103h145l195-273 195 273h145v-103L480-703ZM359-140h242L480-310 359-140Zm121-273 195 273-195-273-195 273 195-273Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M163-484q-17 0-30-13t-13-30q0-17 13-30t30-13q17 0 30 13t13 30q0 17-13 30t-30 13ZM120.32-80v-186H80v-165q0-12 9.55-19.5t23.67-7.5h99.66q14.12 0 23.62 7.5Q246-443 246-431v165h-39v126h368v-243h-81q-65 0-111-43.97T337-534q0-46 27.5-88t77.5-59q7-70 55-114.5T608.5-840q63.5 0 111 44.5T775-681q50 17 77.5 59t27.5 88q0 63.06-46.5 107.03T722-383h-87v243h211v60H120.32ZM494-443h228q38 0 68-26t30-65q0-31.18-20-56.59Q780-616 751-628l-36-15v-31q0-45-32-75.5T608.26-780q-42.73 0-74.5 30.5Q502-719 502-674v31l-36 15q-29 12-49 37.41-20 25.41-20 56.59 0 39 29.5 65t67.5 26Zm115-169Z"/></svg>
            </div>
            </div>
        </div>
        <div className="flex flex-gap flex-x-4 mx-[50px] text-[17px]">
          <span>2024@ Thuong Hieu</span>
          <span style={{padding:'0 10px  0 10px'}}>Gia tri di doi voi chat luong</span>
          <span>Hang chat luong cao</span>
        </div>
        </div>
    </footer>
    </>
    );
  }
export default Home;