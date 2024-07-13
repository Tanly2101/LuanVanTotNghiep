import React,{useState} from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
  import { Link } from 'react-router-dom'
import  "../App.css"
import menuManage from "../ultis/menuManage";
import { CiLogout } from "react-icons/ci";
import {  useSelector,useDispatch } from  'react-redux'
import * as actions from '../store/actions'

export default function Header(){
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.auth)
    let [IsShowMenu , setIsShowMenu] = useState(false)
    let [isActive, setActive] = useState(false)
    let handleopenShopping = () => {
        setActive(true);
    }
    let handlecloseShopping = () => {
        setActive(false);
    }
    function ShowsideBar(){
        let sideBar = document.querySelector('.sideBar')
        sideBar.style.display = 'flex'
      }
      
      function HidesideBar(){
        let sideBar = document.querySelector('.sideBar')
        sideBar.style.display = 'none'
      }
        return(
            <>
            <div id='hidden-cart' className={isActive ? '' : 'hidden'}>
      <div className="hidden-cart-box">
        <div className="hidden-cart-title">
          <h3>Giỏ Hàng Của Bạn</h3>
          <div className="Close-Shopping" onClick={handlecloseShopping}>
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#BB271A"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
          </div>
        </div>
        <p>Miễn Phí Ship Nếu Đơn Của Bạn Trên 100,000 VnĐ</p>
        <ul className="hidden-cart-pro"></ul>
        <div className="hidden-cart-pri">
           <div>Tổng Thu</div>
           <p>42000 Đ</p>
        </div>
        <div className="Check-out">
          <Link to='/Checkout'>
          <button>Check Out</button>
          </Link>
        
        </div>
        </div>
    </div>
            <header>
        <nav className="sideBar">
        <Link to="/">
            <span>
            <svg onClick={HidesideBar} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
            </span>
            </Link>
            <Link to="/thongtin">
            <span>
              Infor
            </span>
            </Link>
            <Link to="/chiase">
            <span>
              Bolg
            </span>
            </Link>
          
        </nav>
        <nav className="sideBarB">
          <div className="logo flex justify-center">
            <img src={require("../assets/img/Logo.png")}></img>
          </div>
          <div className="Box-search flex-auto">
              <input type="" placeholder="Tìm Kiếm"></input>
              <Link to="/">
                <i className="fas fa-search"></i>
              </Link>
          </div>
        <div className="shopping" onClick={handleopenShopping}>
                  <Link>
                  <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="40px" fill="#5f6368"><path d="M284.53-80.67q-30.86 0-52.7-21.97Q210-124.62 210-155.47q0-30.86 21.98-52.7Q253.95-230 284.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83Zm400 0q-30.86 0-52.7-21.97Q610-124.62 610-155.47q0-30.86 21.98-52.7Q653.95-230 684.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83ZM238.67-734 344-515.33h285.33l120-218.67H238.67ZM206-800.67h589.38q22.98 0 34.97 20.84 11.98 20.83.32 41.83L693.33-490.67q-11 19.34-28.87 30.67-17.87 11.33-39.13 11.33H324l-52 96h487.33V-286H278q-43 0-63-31.83-20-31.84-.33-68.17l60.66-111.33-149.33-316H47.33V-880h121.34L206-800.67Zm138 285.34h285.33H344Z"/></svg>
                  </Link>
                  <span className="quantily">0</span>
                  
        </div>
        {isLoggedIn && <div className="relative">
            <Button  variant="outlined" onClick={() => setIsShowMenu(prev => !prev)}>Quản lý Tài khoản</Button>
            
           {IsShowMenu && <div className="absolute min-w-200 top-full bg-white shadown-md rounded-md p-4 right-0 flex flex-col text-xs">
            {
              menuManage.map(item => {
                return(
                  <Link className='hover:text-orange-500 border-b border-gray-300 flex gap-1 items-center px-[15px]'key={item.id} to={item?.path}>
                        {item?.icon}{item.text}
                  </Link>
                )
              })
            }
            <span onClick={() => dispatch(actions.logout())}className="cursor-pointer text-black px-[19px] py-[8px] hover:text-orange-500 flex gap-1 items-center">
              <CiLogout/>
              Đăng Xuất
              </span>
              </div>}
              </div>}
        
            
            <Link to="/chiase">
            <span className="hideOnMobile">
              Bolg
            </span>
            </Link >
            <span className="hideOnMobile" >
            {!isLoggedIn && <div>
        <Menu >
        <MenuHandler >
          <Button style={{borderRadius:"0px",
    backgroundColor:"white",
    boxShadow:'none',
    color: "black",
    fontSize:'16px',
    fontWeight: "700",
    textTransform:"none"}}>Tài Khoản</Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>
          <Link to='/login'>Đăng Nhập</Link>
          </MenuItem>
          <MenuItem>
          Tạo Tài Khoản
          </MenuItem>
        </MenuList>
      </Menu>
      </div>}
              
      </span>
            <Link to="/">
            <span>
            <svg className="menuButton" onClick={ShowsideBar} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#5f6368"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
            </span>
            </Link>
        </nav>
      </header>
      
            </>
        );
}