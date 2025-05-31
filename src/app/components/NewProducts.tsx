import React from 'react';
import ProductCard from './ProductCard';


const productsData = [
    {
        img: "/jacket-1.jpg",
        title: "Jacket",
        desc: "MEN Yarn fleece Full-Zip Jacket",
        rating: 4,
        price: "50.00",
    },
    {
        img: "/shirt-1.jpg",
        title: "Shirt",
        desc: "Pure Garment Dyed Cotton Shirt",
        rating: 4,
        price: "35.00",
    },
    {
        img: "/skirt-1.jpg",
        title: "Skirt",
        desc: "Red Floral Wrap Mid Skirt",
        rating: 5,
        price: "45.00",
    },
    {
        img: "/party-wear-1.jpg",
        title: "Party Wear",
        desc: "Women's Party Wear Shoes",
        rating: 3.5,
        price: "30.00",
    },
    {
        img: "/sports-1.jpg",
        title: "Sports",
        desc: "Trekking & Running Shoes - Black & Red",
        rating: 4.5,
        price: "60.00",
    },
    {
        img: "/watch-1.jpg",
        title: "Watches",
        desc: "Smart Watches Iwatch Plus",
        rating: 4,
        price: "100.00",
    },
    {
        img: "/watch-2.jpg",
        title: "Watches",
        desc: "Pocket Watch Leather Pouch",
        rating: 4,
        price: "120.00",
    },
]


const NewProducts = () => {
  return (
    <div> 
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">New Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {productsData.map((item, index) => (
                    <ProductCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewProducts