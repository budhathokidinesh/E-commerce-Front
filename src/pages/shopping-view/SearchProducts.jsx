import ProductDetailsDialog from "@/components/shopping-view/ProductDetails";
import ShoppingProductTile from "@/components/shopping-view/ShoppingProductTile";
import { Input } from "@/components/ui/input";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice/cartSlice";
import { fetchProductDetails } from "@/store/shop/product-slice/shopProductSlice";
import {
  getSearchResults,
  resetSearchResults,
} from "@/store/shop/searchSlice/searchSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const SearchProducts = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { searchResults } = useSelector((state) => state.shopSearch);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { productDetails } = useSelector((state) => state.shopProducts);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (keyword && keyword.trim() !== "" && keyword.trim().length > 3) {
      setTimeout(() => {
        setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
        dispatch(getSearchResults(keyword));
      }, 1000);
    } else {
      setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
      dispatch(resetSearchResults());
    }
  }, [keyword]);

  //this is for handling cart items
  const handleAddtoCard = (getCurrentProductId, getStock) => {
    let getCartItems = cartItems.items || [];
    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getStock) {
          toast(`Only ${getQuantity} quantity can be added for this item.`);
          return;
        }
      }
    }
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast("Product is added to cart");
      }
    });
  };
  //this is for opening dialog
  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);
  //this is for product details
  const handleGetProductDetails = (getCurrentProductId) => {
    console.log(getCurrentProductId);
    dispatch(fetchProductDetails(getCurrentProductId));
  };
  console.log(searchResults, "searchResults");
  return (
    <div className=" container mx-auto md:px-6 px-4 py-8">
      <div className="flex justify-center mb-8">
        <div className="w-full flex items-center">
          <Input
            value={keyword}
            name="keyword"
            onChange={(event) => setKeyword(event.target.value)}
            className="py-2"
            placeHolder="Search Products...."
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {!searchResults.length ? (
          <h1 className="text-3xl font-bold">No result found</h1>
        ) : null}
        {searchResults?.map((item) => (
          <ShoppingProductTile
            handleAddtoCard={handleAddtoCard}
            handleGetProductDetails={handleGetProductDetails}
            product={item}
          />
        ))}
      </div>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
};

export default SearchProducts;
