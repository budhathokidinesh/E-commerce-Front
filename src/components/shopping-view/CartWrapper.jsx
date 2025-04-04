import React from "react";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Button } from "../ui/button";
import UserCartItemsContent from "./CartItemsContent";

const UserCartWrapper = ({ cartItems }) => {
  const totalCartAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  return (
    <SheetContent className="sm:max-w-md overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-2xl font-extrabold">Your Cart</SheetTitle>{" "}
      </SheetHeader>
      <div className="mt-3 space-y-4">
        {cartItems && cartItems.length > 0
          ? cartItems.map((item) => (
              <UserCartItemsContent cartItems={item} className="scroll-auto" />
            ))
          : null}
      </div>
      <div className="mt-3 space-y-4">
        <div className="flex justify-between p-4">
          <span className="font-bold">Total</span>
          <span className="font-bold">${totalCartAmount}</span>
        </div>
      </div>
      <Button className="w-full mt-3 mb-3 hover:cursor-pointer">
        Checkout
      </Button>
    </SheetContent>
  );
};

export default UserCartWrapper;
