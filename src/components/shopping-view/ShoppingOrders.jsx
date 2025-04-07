import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Dialog } from "../ui/dialog";
import ShoppingOrderDetail from "./ShoppingOrderDetail";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersByUsersId,
  getOrderDetails,
  resetOrderDetails,
} from "@/store/shop/order-slice/orderSlice";
import { Badge } from "../ui/badge";

const ShoppingOrders = () => {
  const [openDetailDialog, setOpenDetailDialog] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { orderList, orderDetails } = useSelector((state) => state.shopOrder);

  //this is for when user clicks view details

  //this is fetching order details
  const handleFetchOrderDetails = (getId) => {
    setSelectedOrderId(getId);
    dispatch(getOrderDetails(getId));
  };
  useEffect(() => {
    if (orderDetails && selectedOrderId === orderDetails?._id) {
      setOpenDetailDialog(true);
    }
  }, [orderDetails, selectedOrderId]);

  //this is dispathing all orders
  useEffect(() => {
    dispatch(getAllOrdersByUsersId(user?.id));
  }, [dispatch, user?.id]);
  console.log(orderDetails, "orderdetails");
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead>Order Price</TableHead>
              <TableHead>
                <span className="sr-only"></span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderList && orderList.length > 0
              ? orderList.map((orderItem) => (
                  <TableRow>
                    <TableCell>{orderItem?._id}</TableCell>
                    <TableCell>{orderItem?.orderDate.split("T")[0]}</TableCell>
                    <TableCell>
                      <Badge
                        className={`px-2 py-1 ${
                          orderItem?.orderStatus === "confirmed"
                            ? "bg-green-600"
                            : orderItem?.orderStatus === "rejected"
                            ? "bg-red-600"
                            : orderItem?.orderStatus === "pending"
                            ? "bg-amber-400"
                            : ""
                        }`}
                      >
                        {orderItem?.orderStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>${orderItem?.totalAmount}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleFetchOrderDetails(orderItem?._id)}
                        className="hover:cursor-pointer"
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
        <Dialog
          open={openDetailDialog}
          onOpenChange={() => {
            setOpenDetailDialog(false);
            dispatch(resetOrderDetails());
          }}
        >
          <ShoppingOrderDetail orderDetails={orderDetails} />
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ShoppingOrders;
