import React, { useEffect, useState } from "react";
import b1 from "../../assets/b1.jpg";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";
import b4 from "../../assets/b4.jpg";
import { Button } from "@/components/ui/button";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { SiNike } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FaRegFaceGrinBeamSweat } from "react-icons/fa6";
import { GiConverseShoe } from "react-icons/gi";
import { SiPuma } from "react-icons/si";
import { SiZara } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllShoppingProducts } from "@/store/shop/product-slice/shopProductSlice";
import ShoppingProductTile from "@/components/shopping-view/ShoppingProductTile";
//this is category of products to render
const categoriesWithIcons = [
  { id: "electronics", label: "Electronics", icon: <SiNike /> },
  { id: "fashion", label: "Fashion", icon: <CgAdidas /> },
  { id: "home", label: "Home & Furniture", icon: <FaHome /> },
  {
    id: "beauty",
    label: "Beauty & Personal Care",
    icon: <FaRegFaceGrinBeamSweat />,
  },
  { id: "sports", label: "Sports & Outdoors", icon: <GiConverseShoe /> },
];
const brands = [
  { id: "nike", label: "Nike", icon: <SiNike /> },
  { id: "adidas", label: "Adidas", icon: <CgAdidas /> },
  { id: "puma", label: "Puma", icon: <SiPuma /> },
  { id: "zara", label: "Zara", icon: <SiZara /> },
];

const ShoppingHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.shopProducts);

  const slides = [b1, b2, b3, b4];
  //this is for changing picture itself
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  //this is for dispatching the products
  useEffect(() => {
    dispatch(
      fetchAllShoppingProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);
  console.log(productList, "productList");
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] min-h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            src={slide}
            alt={index}
            className={`${
              index === currentSlide ? "opacity-100 z-10" : "opacity-10 z-0"
            } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent hover:cursor-pointer"
        >
          <FaAngleLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent hover:cursor-pointer"
        >
          <FaAngleRight className="w-4 h-4" />
        </Button>
      </div>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
            {categoriesWithIcons.map((categoryItem) => (
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-between p-2">
                  <div className="text-blue-400">{categoryItem.icon}</div>
                  <span>{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Feature Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productList && productList.length > 0
            ? productList.map((productItem) => (
                <ShoppingProductTile product={productItem} />
              ))
            : null}
        </div>
      </section>
    </div>
  );
};

export default ShoppingHome;
