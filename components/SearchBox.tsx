import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
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

export default SearchBox;
