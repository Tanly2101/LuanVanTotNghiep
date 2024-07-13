import React, { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import { Rating } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import '../Style/SanPham.css'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon
    
  } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
export function SanPHam(){
  const [open, setOpen] = React.useState(0);
 
  const handleOpen1 = (value) => setOpen(open === value ? 0 : value);
//   const [open, setOpen] = React.useState(0);
  const [openAccordions, setOpenAccordions] = useState({});

  const handleOpen = (index) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const [active, setActive] = useState(1);

  const getItemProps = (index) => {
    return {
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    };
  };

  const next = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

 
  return (
    <>
    <body>
      <div className="Category">
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 overflow-auto">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          FilTer
        </Typography>
      </div>
      <List>
        <Accordion
          open={openAccordions[1]}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${openAccordions[1] ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={openAccordions[1]}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Thể Loại
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                <input type="checkbox" className="h-4 w-4" />
                </ListItemPrefix>
                option 1
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                <input type="checkbox" className="h-4 w-4" />
                </ListItemPrefix>
                option 1
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                <input type="checkbox" className="h-4 w-4" />
                </ListItemPrefix>
                option 1
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={openAccordions[2]}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${openAccordions[2] ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={openAccordions[2]}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Kích Cỡ
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                <input type="checkbox" className="h-4 w-4" />
                </ListItemPrefix>
                option 1
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                <input type="checkbox" className="h-4 w-4" />
                </ListItemPrefix>
                option 1
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={openAccordions[3]}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${openAccordions[3] ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={openAccordions[3]}>
            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Thương Hiệu
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                <input type="checkbox" className="h-4 w-4" />
                </ListItemPrefix>
                option 1
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                <input type="checkbox" className="h-4 w-4" />
                </ListItemPrefix>
                option 1
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={openAccordions[4]}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${openAccordions[4] ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={openAccordions[4]}>
            <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Giới Tính
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                <input type="checkbox" className="h-4 w-4" />
                </ListItemPrefix>
                option 1
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                <input type="checkbox" className="h-4 w-4" />
                </ListItemPrefix>
                option 1
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={openAccordions[5]}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${openAccordions[5] ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={openAccordions[5]}>
            <AccordionHeader onClick={() => handleOpen(5)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Giá
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                <input type="checkbox" className="h-4 w-4" />
                </ListItemPrefix>
                option 1
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                <input type="checkbox" className="h-4 w-4" />
                </ListItemPrefix>
                option 1
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </Card>
    <div className="List w-full">
    <div className="flex flex-wrap gap-2 ">
    <div className="Yie-List">
      <img src={require("../assets/img/img1.jpg")} alt="Description of image"></img>
      <div className="infor">
        <div className="title-yie">
          <Link>
          Đây Là Tên Sản Phẩm 
          </Link>
        </div>
        {/* <div className="Eva-yie">
        <Rating value={4} />
        </div> */}
        <div className="Price-yie">
          <p>8000$</p>
        </div>
        <div className="card-yie">
        <button>Add To Card</button>
        </div>
      </div>
    </div>
    <div className="Yie-List">
      <img src={require("../assets/img/img1.jpg")} alt="Description of image"></img>
      <div className="infor">
        <div className="title-yie">
          <Link>
          Đây Là Tên Sản Phẩm 
          </Link>
        </div>
        {/* <div className="Eva-yie">
        <Rating value={4} />
        </div> */}
        <div className="Price-yie">
          <p>8000$</p>
        </div>
        <div className="card-yie">
        <button>Add To Card</button>
        </div>
      </div>
    </div>
    <div className="Yie-List">
      <img src={require("../assets/img/img1.jpg")} alt="Description of image"></img>
      <div className="infor">
        <div className="title-yie">
          <Link>
          Đây Là Tên Sản Phẩm 
          </Link>
        </div>
        {/* <div className="Eva-yie">
        <Rating value={4} />
        </div> */}
        <div className="Price-yie">
          <p>8000$</p>
        </div>
        <div className="card-yie">
        <button>Add To Card</button>
        </div>
      </div>
    </div>
    <div className="Yie-List">
      <img src={require("../assets/img/img1.jpg")} alt="Description of image"></img>
      <div className="infor">
        <div className="title-yie">
          <Link>
          Đây Là Tên Sản Phẩm 
          </Link>
        </div>
        {/* <div className="Eva-yie">
        <Rating value={4} />
        </div> */}
        <div className="Price-yie">
          <p>8000$</p>
        </div>
        <div className="card-yie">
        <button>Add To Card</button>
        </div>
      </div>
    </div>
    <div className="Yie-List">
      <img src={require("../assets/img/img1.jpg")} alt="Description of image"></img>
      <div className="infor">
        <div className="title-yie">
          <Link>
          Đây Là Tên Sản Phẩm 
          </Link>
        </div>
        {/* <div className="Eva-yie">
        <Rating value={4} />
        </div> */}
        <div className="Price-yie">
          <p>8000$</p>
        </div>
        <div className="card-yie">
        <button>Add To Card</button>
        </div>
      </div>
    </div>
    <div className="Yie-List">
      <img src={require("../assets/img/img1.jpg")} alt="Description of image"></img>
      <div className="infor">
        <div className="title-yie">
          <Link>
          Đây Là Tên Sản Phẩm 
          </Link>
        </div>
        {/* <div className="Eva-yie">
        <Rating value={4} />
        </div> */}
        <div className="Price-yie">
          <p>8000$</p>
        </div>
        <div className="card-yie">
        <button>Add To Card</button>
        </div>
      </div>
    </div>
    <div className="Yie-List">
      <img src={require("../assets/img/img1.jpg")} alt="Description of image"></img>
      <div className="infor">
        <div className="title-yie">
          <Link>
          Đây Là Tên Sản Phẩm 
          </Link>
        </div>
        {/* <div className="Eva-yie">
        <Rating value={4} />
        </div> */}
        <div className="Price-yie">
          <p>8000$</p>
        </div>
        <div className="card-yie">
        <button>Add To Card</button>
        </div>
      </div>
      
      
    </div>
    <div className="Yie-List">
      <img src={require("../assets/img/img1.jpg")} alt="Description of image"></img>
      <div className="infor">
        <div className="title-yie">
          <Link>
          Đây Là Tên Sản Phẩm 
          </Link>
        </div>
        {/* <div className="Eva-yie">
        <Rating value={4} />
        </div> */}
        <div className="Price-yie">
          <p>8000$</p>
        </div>
        <div className="card-yie">
        <button>Add To Card</button>
        </div>
      </div>
    </div>
    <div className="Yie-List">
      <img src={require("../assets/img/img1.jpg")} alt="Description of image"></img>
      <div className="infor">
        <div className="title-yie">
          <Link>
          Đây Là Tên Sản Phẩm 
          </Link>
        </div>
        {/* <div className="Eva-yie">
        <Rating value={4} />
        </div> */}
        <div className="Price-yie">
          <p>8000$</p>
        </div>
        <div className="card-yie">
        <button>Add To Card</button>
        </div>
      </div>
    </div>
    </div>
    <div>
    <div className="flex items-center gap-4 justify-center pt-[15px]">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> 
      </Button>
      <div className="flex items-center gap-2">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 5}
      >
        
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
    </div>
    </div>
    </div>
    
    <div className="template p-[50px] ">
      <div className="border-t-4 grid grid-cols-2 gap 4 pt-[15px]">
      <div className="">
            <div className="title-temp">
              <h2>
                Title
              </h2>
              <div>
                <p>NỘi Dung</p>
              </div>
            </div>
          </div>
          <div className="">
          <div>
              <img src={require("../assets/img/img1.jpg")}></img>
            </div>
          </div>
      </div>
          
    </div>
    <div className="Expert p-[50px]">
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen1(1)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We&aposre not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen1(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen1(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </>
  

    </div>
    </body>
    </>
  );
}


export default SanPHam;