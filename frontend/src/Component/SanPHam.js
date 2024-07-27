import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Rating } from "@material-tailwind/react";
import "../Style/SanPham.css";
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
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { ContextSearch } from "../Context/ContextSearch";
import { usePagination } from "../Context/PaginationContext";
import { useProductContext } from "../Context/ProductContext";
import Pagination from "./Pagination";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
export function SanPHam() {
  const [open, setOpen] = React.useState(0);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [dataFilter, setDataFilter] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);
  const { selectProduct } = useProductContext();
  const handleOpen1 = (value) => setOpen(open === value ? 0 : value);
  const [filters, setFilters] = useState({
    categoryId: null,
    // Thêm các bộ lọc khác ở đây, ví dụ:
    // price: null,
    // brand: null,
    // color: null,
  });
  //   const [open, setOpen] = React.useState(0);
  ////////////////////useContext///////////////////////////
  const { searchData } = useContext(ContextSearch);
  const { currentPage, pageSize, updateTotalItems, updatePageSize } =
    usePagination();
  /////////////////////////////////////////////////////////
  const [openAccordions, setOpenAccordions] = useState({});
  const [error, setError] = useState(null);
  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formatter.format(amount);
  };
  /////////////////////////////
  useEffect(() => {
    updatePageSize(8); // Set pageSize to 8
  }, []);
  ////////////////////////////
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/category`)
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        setData(error);
      });
  }, []);
  ////////////////////////////
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/v1/filter/`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);

        // Biến đổi dữ liệu nếu cần
        const dataFilter = response.data.map((item) => ({
          ...item,
        }));

        setDataFilter(dataFilter);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  /////////////////////////////////////
  /////////////////////////////////////////

  const handleFilterChange = (filterType, value) => {
    console.log("Updating filter:", filterType, value); // Debugging
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };
  //////////////////////////////////////////
  // Gọi API hoặc xử lý dữ liệu tại đây dựa trên giá trị searchData
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let response;

  //       if (searchData) {
  //         response = await axios.get(
  //           `${process.env.REACT_APP_SERVER_URL}/api/v1/product/search?Title=${searchData}`
  //         );
  //       } else {
  //         response = await axios.get(
  //           `${process.env.REACT_APP_SERVER_URL}/api/v1/product`
  //         );
  //       }
  //       console.log(response.data);
  //       updateTotalItems(response.data.length);
  //       const currentData = paginateData(response.data, 4, currentPage);
  //       setData(currentData);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  //   fetchData();
  // }, [searchData, currentPage]);
  // useEffect(() => {
  //   console.log("Current categoryId filter:", filters.categoryId);
  //   const fetchData = async () => {
  //     try {
  //       let response;

  //       if (searchData) {
  //         response = await axios.get(
  //           `${process.env.REACT_APP_SERVER_URL}/api/v1/product/search?Title=${searchData}`
  //         );
  //       } else {
  //         // Kiểm tra nếu filters có categoryId và giá trị khác null
  //         if (filters.categoryId) {
  //           // Fetch sản phẩm theo categoryId
  //           response = await axios.get(
  //             `${process.env.REACT_APP_SERVER_URL}/api/v1/product/products/${filters.categoryId}`
  //           );
  //         } else {
  //           // Fetch tất cả sản phẩm
  //           response = await axios.get(
  //             `${process.env.REACT_APP_SERVER_URL}/api/v1/product`
  //           );
  //         }
  //       }

  //       console.log(response.data);
  //       updateTotalItems(response.data.length);
  //       const currentData = paginateData(response.data, 4, currentPage);
  //       setData(currentData);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  //   fetchData();
  // }, [filters, searchData, currentPage, categories]);
  /////////////////////////////////////////////////
  const priceOptions = [
    { value: 0, title: "All" },
    { value: 100000, title: "$0 - 100000" },
    { value: 500000, title: "$100001 - $500000" },
    { value: 2000000, title: "$500001 - $2000000" },
    { value: 2000001, title: "Over $2000000" },
  ];
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  /////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        // Fetch products based on priority
        let productsResponse;

        if (searchData) {
          // Priority 1: Search data
          productsResponse = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/v1/product/search?Title=${searchData}`
          );
        } else if (selectedValue) {
          productsResponse = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/v1/product/price?Price=${selectedValue}`
          );
        } else if (filters.categoryId) {
          // Priority 2: Category filter
          productsResponse = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/v1/product/products/${filters.categoryId}`
          );
        } else {
          // Priority 3: All products
          productsResponse = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/v1/product`
          );
        }

        console.log("Products:", productsResponse.data);
        updateTotalItems(productsResponse.data.length);
        const currentData = paginateData(productsResponse.data, 4, currentPage);
        setData(currentData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [selectedValue, filters.categoryId, searchData, currentPage]);
  ///////////////////////////////////////////////////////
  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    // Nếu bạn cần chuyển trang, bạn có thể thêm logic tại đây
  };

  const paginateData = (data, itemsPerPage, currentPage) => {
    // Tính chỉ số bắt đầu và kết thúc của dữ liệu hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Trả về một phần của mảng dữ liệu
    return data.slice(startIndex, endIndex);
  };

  const handleOpen = (index) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  ////////////////////////////////////////////

  /////////////////////////////////////////////////
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <body>
        <div className="Category pt-4 h-full w-full">
          <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 overflow-auto bg-gray-300 flex-none">
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
                    className={`mx-auto h-4 w-4 transition-transform ${
                      openAccordions[1] ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={openAccordions[1]}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Thể Loại
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {categories.map((category) => (
                      <ListItem key={category.id} className="p-0">
                        <Link
                          onClick={() => {
                            console.log("Link clicked:", category.id); // Debugging
                            handleFilterChange(
                              "categoryId",
                              String(category.id)
                            );
                          }}
                          className="flex items-center w-full py-2 px-3 rounded-lg text-sm text-blue-gray-700 hover:bg-blue-gray-50 focus:bg-blue-gray-50"
                        >
                          <ListItemPrefix>
                            <ChevronRightIcon className="h-3 w-3" />
                          </ListItemPrefix>
                          {category.TitleCategory}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={openAccordions[3]}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      openAccordions[3] ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={openAccordions[3]}>
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Thương Hiệu
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {dataFilter.map((item, index) => (
                      <ListItem key={index}>
                        <Link
                          // to={`/products?filter=${item.id}`}
                          className="w-full block py-2 px-4 hover:bg-gray-100 transition-colors text-gray-700 text-sm"
                          value={selectedBrand}
                          onClick={() => handleBrandClick(item.id)}
                        >
                          {item.tenthuonghieu}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={openAccordions[5]}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      openAccordions[5] ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={openAccordions[5]}>
                  <AccordionHeader
                    onClick={() => handleOpen(5)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Giá
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {priceOptions.map((option, index) => (
                      <ListItem key={index}>
                        <label className="sidebar-label-container flex items-center space-x-2">
                          <input
                            className="form-radio h-4 w-4 rounded-none border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            type="radio"
                            value={option.value}
                            // checked={selectedValue === option.value}
                            onChange={handleChange}
                            name="priceOption"
                          />
                          <span className="ml-2 text-gray-700">
                            {option.title}
                          </span>
                        </label>
                      </ListItem>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>
            </List>
          </Card>
          <div className="flex-auto w-full h-full">
            <div className="List w-full  bg-gray-300 ">
              <div className="flex flex-wrap gap-2 p-2 flex-auto">
                {data &&
                  data.map((item) => (
                    <div key={item.id} className="Yie-List flex flex-col">
                      <Link
                        to={`/SanPham/${item.id}`}
                        onClick={() => selectProduct(item)}
                      >
                        <div>
                          <img
                            src={`/img/${item.Images}`}
                            alt="sanpham"
                            className="h-56"
                          />
                        </div>
                        <div className="infor flex flex-col">
                          <div className="flex-auto h-full">
                            <div className="title-yie">
                              <Link>{item.Title}</Link>
                            </div>
                            <div className="Price-yie">
                              <p>Giá bán : {`${formatCurrency(item.Price)}`}</p>
                            </div>
                            <div className="">
                              <p>Đã Bán : </p>
                            </div>
                          </div>
                          <div className="card-yie flex-none h-[40px] mb-2">
                            <button>Add To Card</button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
              <Pagination />
            </div>
          </div>
        </div>
        <div className="template p-[50px] ">
          <div className="border-t-4 grid grid-cols-2 gap 4 pt-[15px]">
            <div className="">
              <div className="title-temp">
                <h2>Title</h2>
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
              <AccordionHeader onClick={() => handleOpen1(1)}>
                What is Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&aposre not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader onClick={() => handleOpen1(2)}>
                How to use Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader onClick={() => handleOpen1(3)}>
                What can I do with Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </>
        </div>
      </body>
    </>
  );
}

export default SanPHam;
