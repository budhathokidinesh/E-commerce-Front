import React from "react";
import hanging from "../../assets/hanging.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Orders from "@/components/shopping-view/ShoppingOrders";
import Address from "@/components/shopping-view/Address";
import ShoppingOrders from "@/components/shopping-view/ShoppingOrders";

const ShoppingAccount = () => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[350px] min-h-[350px] w-full overflow-hidden ">
        <img
          src={hanging}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 py-8">
        <div className="flex flex-col rounded border bg-background p-6 shadow">
          <Tabs defaultValue="orders">
            <TabsList>
              <TabsTrigger value="orders" className="hover:cursor-pointer">
                Orders
              </TabsTrigger>
              <TabsTrigger value="address" className="hover:cursor-pointer">
                Address
              </TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
              <ShoppingOrders />
            </TabsContent>
            <TabsContent value="address">
              <Address />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ShoppingAccount;
