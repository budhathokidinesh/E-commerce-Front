import React, { useState } from "react";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import CommonForm from "../common/form";

const initialFormData = {
  status: "",
};

const AdminOrderDetail = () => {
  const [formData, setFormData] = useState(initialFormData);

  const updateHandleStatus = (e) => {
    e.preventDefault();
  };

  return (
    <DialogContent className="sm:max-w-[600px]">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="flex items-center mt-6 justify-between">
            <p className="font-medium">Order ID</p>
            <Label>12345</Label>
          </div>
          <div className="flex items-center mt-2 justify-between">
            <p className="font-medium">Order Date</p>
            <Label>2025-04-06</Label>
          </div>
          <div className="flex items-center mt-2 justify-between">
            <p className="font-medium">Price</p>
            <Label>$200</Label>
          </div>
          <div className="flex items-center mt-2 justify-between">
            <p className="font-medium">Status</p>
            <Label>In Process</Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Order Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span>Product One</span>
                <span>$100</span>
              </li>
            </ul>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Shipping Info</div>
            <div className="grid gap-0.5 text-muted-foreground">
              <span>Dinesh Buthathoki</span>
              <span>93A Collier Road</span>
              <span>Embleton</span>
              <span>6062</span>
              <span>0123456</span>
              <span>Please meet at door</span>
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
