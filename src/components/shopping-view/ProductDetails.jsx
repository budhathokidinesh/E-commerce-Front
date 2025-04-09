import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { FaStar } from "react-icons/fa";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice/cartSlice";
import { toast } from "sonner";
import { setProductDetails } from "@/store/shop/product-slice/shopProductSlice";
import { Label } from "../ui/label";
import StarRating from "../common/StarRating";
import { addReview, getReviews } from "@/store/shop/review-slice/reviewSlice";

const ProductDetailsDialog = ({ open, setOpen, productDetails }) => {
  const [reviewMsg, setReviewMsg] = useState("");
  const [rating, setRating] = useState(0);
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { reviews } = useSelector((state) => state.shopReview);
  const dispatch = useDispatch();

  //this is for handling the rating change
  const handleRatingChange = (getRating) => {
    console.log(getRating, "getrating");
    setRating(getRating);
  };
  //this is for handling review
  const handleAddReview = () => {
    dispatch(
      addReview({
        productId: productDetails?._id,
        userId: user?.id,
        userName: user?.name,
        reviewMessage: reviewMsg,
        reviewValue: rating,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        setRating(0);
        setReviewMsg("");
        dispatch(getReviews(productDetails?._id));
        toast("Review added successfylly");
      }
    });
  };
  //this is for handling the addToCart Items
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
  const handleDialogClose = () => {
    setOpen(false);
    dispatch(setProductDetails());
    setRating(0);
    setReviewMsg("");
  };
  //this is for page loading first checking product details already exist or not
  useEffect(() => {
    if (productDetails !== null) dispatch(getReviews(productDetails?._id));
  }, [productDetails]);
  console.log(reviews, "reviews");

  //this is for calculating the average ratings
  const averageReview =
    reviews && reviews.length > 0
      ? reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) /
        reviews.length
      : 0;
  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="grid grid-cols-2 gap-8 sm:p-12 max-w-[90vh] sm:max-w-[80vw] lg:w-[70vw]">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={productDetails?.image}
            alt={productDetails?.title}
            width={600}
            height={600}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div>
          <div>
            <DialogTitle className="text-4xl font-extrabold">
              {productDetails?.title}
            </DialogTitle>
            <p className="text-muted-foreground text-2xl mt-2">
              {productDetails?.description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <p
              className={`${
                productDetails?.salePrice > 0 ? "line-through" : ""
              } text-3xl font-bold text-primary`}
            >
              ${productDetails?.price}
            </p>
            {productDetails?.salePrice > 0 ? (
              <p className="text-3xl font-bold text-primary">
                ${productDetails?.salePrice}
              </p>
            ) : null}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-0.5">
              <StarRating rating={averageReview} />
            </div>
            <p className="text-muted-foreground">
              ({averageReview.toFixed(2)})
            </p>
          </div>
          <div className="mt-5 mb-5">
            {productDetails?.stock === 0 ? (
              <Button className="w-full opacity-60 cursor-not-allowed ">
                Out Of Stock
              </Button>
            ) : (
              <Button
                onClick={() =>
                  handleAddtoCard(productDetails?._id, productDetails?.stock)
                }
                className="w-full hover:cursor-pointer"
              >
                Add to cart
              </Button>
            )}
          </div>
          <Separator />
          <div className="max-h-[300px] overflow-auto">
            <h2 className="text-xl font-bold">Reviews</h2>
            <div className="grid gap-6">
              {reviews && reviews.length > 0 ? (
                reviews.map((reviewItem) => (
                  <div className="flex gap-4">
                    <Avatar className="w-10 h-10 border">
                      <AvatarFallback>
                        {reviewItem?.userName[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold">{reviewItem?.userName}</h3>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <StarRating rating={reviewItem?.reviewValue} />
                      </div>
                      <p className="text-muted-foreground">
                        {reviewItem?.reviewMessage}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <h1>No Reviews</h1>
              )}
            </div>
            <div className="mt-10 flex-col">
              <Label className="p-1 text-bold">Write a review</Label>
              <div className="flex gap-1">
                <StarRating
                  rating={rating}
                  handleRatingChange={handleRatingChange}
                />
              </div>

              <Input
                name="reviewMsg"
                value={reviewMsg}
                onChange={(event) => setReviewMsg(event.target.value)}
                placeholder="Write a review"
                className="mt-1"
              />
              <Button
                onClick={handleAddReview}
                disabled={reviewMsg.trim() === ""}
                className="cursor-pointer mt-2"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;
