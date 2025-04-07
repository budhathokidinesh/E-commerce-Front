import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { capturePayment } from "@/store/shop/order-slice/orderSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaypalReturn = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const token = params.get("token");
  const payerId = params.get("PayerID");

  useEffect(() => {
    if (token && payerId) {
      const orderId = JSON.parse(sessionStorage.getItem("currentOrderId"));
      console.log("OrderID from session:", orderId);
      dispatch(capturePayment({ token, payerId, orderId })).then((data) => {
        if (data?.payload?.success) {
          console.log(data, "Data");
          sessionStorage.removeItem("currentOrderId");

          navigate("/shop/payment-success");
        }
      });
    }
  }, [token, payerId, dispatch]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Processing Payment ....Please wait!</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default PaypalReturn;
