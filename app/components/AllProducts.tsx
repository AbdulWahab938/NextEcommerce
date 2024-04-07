// components/AllProducts.tsx

import { useEffect, useState } from "react";
import { simplifiedProduct } from "../interface";
import { client } from "@/lib/sanity";

export default function AllProducts() {
  const [products, setProducts] = useState<simplifiedProduct[]>([]);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "product"] | order(_createdAt desc) {
        _id,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url
      }`;

      const data = await client.fetch(query);
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <div className="bg-white">
      {/* Render products as per your requirement */}
    </div>
  );
}
