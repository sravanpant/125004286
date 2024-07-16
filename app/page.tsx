"use client";
import CardComponent from "@/components/CardComponent";
import { Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const SearchBox = () => {
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [topn, setTopn] = useState<number>();
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const response = await fetch(
      "http://20.244.56.144/test/companies/" +
        company +
        "/categories/" +
        category +
        "/products?top=" +
        topn +
        "&minPrice=" +
        minPrice +
        "&maxPrice=" +
        maxPrice
    );
    const data = await response.json();
    console.log(data);
    setPosts(data);
  };

  const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
  const categories = [
    "Phone",
    "Computer",
    "TV",
    "Earphone",
    "Tablet",
    "Charger",
    "Mouse",
    "Keypad",
    "Bluetooth",
    "Pendrive",
    "Remote",
    "Speaker",
    "Headset",
    "Laptop",
    "PC",
  ];
  return (
    <div>
      <Card className="py-5 px-3">
        <div className="flex justify-center border rounded-xl p-3 my-1">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full">
              Select E-commerce company
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {companies.map((company, index) => (
                <div onClick={() => setCompany(company)} key={index}>
                  <DropdownMenuItem>{company} </DropdownMenuItem>
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex justify-center border rounded-xl p-3 my-1">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full">
              Select Category
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.map((category, index) => (
                <div onClick={() => setCategory(category)} key={index}>
                  <DropdownMenuItem>{category} </DropdownMenuItem>
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex justify-center my-2">
          <Input
            className="text-center"
            onChange={(e) => setTopn(parseInt(e.target.value))}
            type="number"
            placeholder="Enter number for top N"
          />
        </div>
        <div className="flex justify-center my-2">
          <Input
            className="text-center"
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            type="number"
            placeholder="Enter Max Price"
          />
        </div>
        <div className="flex justify-center my-2">
          <Input
            className="text-center"
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
            type="number"
            placeholder="Enter Min Price"
          />
        </div>
        <div className="flex justify-center">
          <Button onClick={fetchPost}>Submit</Button>
        </div>
      </Card>
    </div>
  );
};

export default function Home() {
  const data = [
    {
      productName: "Laptop1",
      price: 1000,
      rating: 4.5,
      discount: 10,
      availability: "yes",
    },
    {
      productName: "Laptop1",
      price: 1000,
      rating: 4.5,
      discount: 10,
      availability: "yes",
    },
    {
      productName: "Laptop1",
      price: 1000,
      rating: 4.5,
      discount: 10,
      availability: "yes",
    },
    {
      productName: "Laptop1",
      price: 1000,
      rating: 4.5,
      discount: 10,
      availability: "yes",
    },
  ];
  return (
    <div className="p-5 md:p-10">
      <div className="text-4xl font-bold flex justify-center">
        E commerce company
      </div>
      <div className="flex justify-start space-x-5 border rounded-full px-5 py-2 my-5">
        <Search />
        <div className="font-semibold text-lg">Search</div>{" "}
      </div>
      <SearchBox />
      {data.map((item, index: number) => (
        <CardComponent
          key={index}
          productName={item.productName}
          price={item.price}
          rating={item.rating}
          discount={item.discount}
          availabilty={item.availability}
        />
      ))}
    </div>
  );
}
