import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <Card className="p-10">
      <CardHeader className="p-0">
        <CardTitle className="text-4xl">
          Payment is successfull. Thank you.
        </CardTitle>
      </CardHeader>
      <Button
        onClick={() => navigate("/shop/account")}
        className="cursor-pointer mt-5 w-[15%]"
      >
        View Orders
      </Button>
    </Card>
  );
};

export default PaymentSuccess;
