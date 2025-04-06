import React, { useState } from "react";
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

const ShoppingOrders = () => {
  const [openDetailDialog, setOpenDetailDialog] = useState(false);
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
            <TableRow>
              <TableCell>12345</TableCell>
              <TableCell>2025-03-06</TableCell>
              <TableCell>Delevered</TableCell>
              <TableCell>$140</TableCell>
              <TableCell>
                <Dialog
                  open={openDetailDialog}
                  onOpenChange={setOpenDetailDialog}
                >
                  <Button
                    onClick={() => setOpenDetailDialog(true)}
                    className="hover:cursor-pointer"
                  >
                    View Details
                  </Button>
                  <ShoppingOrderDetail />
                </Dialog>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ShoppingOrders;
