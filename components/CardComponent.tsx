import Image from "next/image";
import React from "react";
import pic from "/public/image.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type cardProps = {
  productName: string;
  price: number;
  rating: number;
  discount: number;
  availabilty: string;
};

const CardComponent = ({
  productName,
  price,
  rating,
  discount,
  availabilty,
}: cardProps) => {
  return (
    <div className="rounded-xl lg:w-[20%] p-3 my-5">
      <Card>
        <CardHeader>
          <CardTitle>{productName}</CardTitle>
          <CardDescription>
            <Image
              className="py-5"
              width={300}
              height={50}
              src={pic}
              alt="laptop"
            />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Price: $ {price}</p>
        </CardContent>
        <CardContent>
          <p>Rating: {rating}/5</p>
        </CardContent>
        <CardContent>
          <p>Discount: {discount}% </p>
        </CardContent>
        <CardFooter>
          <p>Availibility: {availabilty}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardComponent;
