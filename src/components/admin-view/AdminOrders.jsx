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
import AdminOrderDetail from "./AdminOrderDetail";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersForAdmin,
  getOrderDetailsForAdmin,
  resetOrderDetails,
} from "@/store/admin/adminOrder-slice/adminOrderSlice";
import { Badge } from "../ui/badge";

const AdminOrders = () => {
  const [openDetailDialog, setOpenDetailDialog] = useState(false);
  const { orderList, orderDetails } = useSelector((state) => state.adminOrder);

  const handleFetchOrderDetails = (getId) => {
    dispatch(getOrderDetailsForAdmin(getId));
  };

  const dispatch = useDispatch();

  //this is for fetching the order list
  useEffect(() => {
    dispatch(getAllOrdersForAdmin());
  }, [dispatch]);

  //this is for setOpenDetailDialog
  useEffect(() => {
    if (orderDetails !== null) setOpenDetailDialog(true);
  }, [orderDetails]);
  console.log(orderDetails, "orderDetails");
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Orders</CardTitle>
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
          <AdminOrderDetail orderDetails={orderDetails} />
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default AdminOrders;
