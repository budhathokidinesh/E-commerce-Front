import React, { useState } from "react";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import CommonForm from "../common/form";
import { Badge } from "../ui/badge";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersForAdmin,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} from "@/store/admin/adminOrder-slice/adminOrderSlice";
import { toast } from "sonner";

const initialFormData = {
  status: "",
};

const AdminOrderDetail = ({ orderDetails }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormData);
  const { user } = useSelector((state) => state.auth);

  const updateHandleStatus = (e) => {
    e.preventDefault();

    const { status } = formData;
    dispatch(
      updateOrderStatus({ id: orderDetails?._id, orderStatus: status })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(getOrderDetailsForAdmin(orderDetails?._id));
        dispatch(getAllOrdersForAdmin());
        setFormData(initialFormData);
        toast("Order status is updated successfully");
      }
    });
  };

  return (
    <DialogContent className="sm:max-w-[600px] max-h-screen overflow-y-auto">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="flex items-center mt-6 justify-between">
            <p className="font-medium">Order ID</p>
            <Label>{orderDetails?._id}</Label>
          </div>
          <div className="flex items-center mt-2 justify-between">
            <p className="font-medium">Order Date</p>
            <Label>{orderDetails?.orderDate.split("T")[0]}</Label>
          </div>
          <div className="flex items-center mt-2 justify-between">
            <p className="font-medium">Price</p>
            <Label>${orderDetails?.totalAmount}</Label>
          </div>
          <div className="flex items-center mt-2 justify-between">
            <p className="font-medium">Payment Method</p>
            <Label>{orderDetails?.paymentMethod}</Label>
          </div>
          <div className="flex items-center mt-2 justify-between">
            <p className="font-medium">Payment Status</p>
            <Label>{orderDetails?.paymentStatus}</Label>
          </div>
          <Separator />
          <div className="flex items-center mt-2 justify-between">
            <p className="font-medium"> Order Status</p>
            <Label>
              {" "}
              <Badge
                className={`px-2 py-1 ${
                  orderDetails?.orderStatus === "confirmed"
                    ? "bg-green-600"
                    : orderDetails?.orderStatus === "rejected"
                    ? "bg-red-600"
                    : ""
                }`}
              >
                {orderDetails?.orderStatus}
              </Badge>
            </Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Order Details</div>
            <ul className="grid gap-3">
              {orderDetails?.cartItems && orderDetails?.cartItems.length > 0
                ? orderDetails?.cartItems.map((item) => (
                    <li className="flex items-center justify-between">
                      <span>{item.title}</span>
                      <span>Quantity(s): {item.quantity}</span>
                      <span>${item.price}</span>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Shipping Info</div>
            <div className="grid gap-0.5 text-muted-foreground">
              <span>Customer Name: {user?.name}</span>
              <span>Address: {orderDetails?.addressInfo?.address}</span>
              <span>City: {orderDetails?.addressInfo?.city}</span>
              <span>PostCode: {orderDetails?.addressInfo?.postCode}</span>
              <span>Contact: {orderDetails?.addressInfo?.phone}</span>
              <span>Additional note: {orderDetails?.addressInfo?.notes}</span>
            </div>
          </div>
        </div>
        <div>
          <CommonForm
            formControls={[
              {
                name: "status",
                label: "Order Status",
                componentType: "select",
                options: [
                  { id: "pending", label: "Pending" },
                  { id: "inProcess", label: "In Process" },
                  { id: "inShipping", label: "In Shipping" },
                  { id: "rejected", label: "Rejected" },
                  { id: "delevered", label: "Delevered" },
                ],
              },
            ]}
            formData={formData}
            setFormData={setFormData}
            buttonText={"Update Order Status"}
            onSubmit={updateHandleStatus}
          />
        </div>
      </div>
    </DialogContent>
  );
};

export default AdminOrderDetail;
