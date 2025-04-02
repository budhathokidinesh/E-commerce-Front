import React from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { FaStar } from "react-icons/fa";
import { Input } from "../ui/input";

const ProductDetailsDialog = ({ open, setOpen, productDetails }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
              <FaStar className="w-5 h-5 fill-primary" />
              <FaStar className="w-5 h-5 fill-primary" />
              <FaStar className="w-5 h-5 fill-primary" />
              <FaStar className="w-5 h-5 fill-primary" />
              <FaStar className="w-5 h-5 fill-primary" />
            </div>
            <p className="text-muted-foreground">(4.5)</p>
          </div>
          <div className="mt-5 mb-5">
            <Button className="w-full hover:cursor-pointer">Add to cart</Button>
          </div>
          <Separator />
          <div className="max-h-[300px] overflow-auto">
            <h2 className="text-xl font-bold">Reviews</h2>
            <div className="grid gap-6">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>DB</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Dinesh Budhathoki</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <FaStar className="w-5 h-5 fill-primary" />
                    <FaStar className="w-5 h-5 fill-primary" />
                    <FaStar className="w-5 h-5 fill-primary" />
                    <FaStar className="w-5 h-5 fill-primary" />
                    <FaStar className="w-5 h-5 fill-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    This is the best product I ever bought.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>DB</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Dinesh Budhathoki</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <FaStar className="w-5 h-5 fill-primary" />
                    <FaStar className="w-5 h-5 fill-primary" />
                    <FaStar className="w-5 h-5 fill-primary" />
                    <FaStar className="w-5 h-5 fill-primary" />
                    <FaStar className="w-5 h-5 fill-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    This is the best product I ever bought.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>DB</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">Dinesh Budhathoki</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <FaStar className="w-5 h-5 fill-primary" />
                    <FaStar className="w-5 h-5 fill-primary" />
                    <FaStar className="w-5 h-5 fill-primary" />
                    <FaStar className="w-5 h-5 fill-primary" />
                    <FaStar className="w-5 h-5 fill-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    This is the best product I ever bought.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <Input placeholder="Write a review" />
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;
