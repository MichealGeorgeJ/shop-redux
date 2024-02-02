import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,updateCartData } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.cart);
  const rating=<>
  <i className="fa-solid fa-star"style={{color:"gold"}} ></i>
  <i className="fa-solid fa-star"style={{color:"gold"}}></i>
  <i className="fa-solid fa-star"style={{color:"gold"}}></i>
  <i className="fa-solid fa-star"style={{color:"gold"}}></i>
  <i className="fa-regular fa-star-half-stroke" style={{color:"gold"}}></i></>
  
  const addToCartHandler = (id) => {
    const selectedProduct = cartProducts.find((product) => product.id === id);
    if (selectedProduct) {
      dispatch(addToCart(selectedProduct));
    }
  }

  useEffect(() => {
    const updateCartDataHandler = () => {
      const updatedCartData = [
        {
          "id": 1,
          "count":1,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          "discountPercentage": 12.96,
          "rating": 4.69,
          "stock": 94,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/1/1.jpg",
              "https://i.dummyjson.com/data/products/1/2.jpg",
              "https://i.dummyjson.com/data/products/1/3.jpg",
              "https://i.dummyjson.com/data/products/1/4.jpg",
              "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          ]
      },
      {
          "id": 2,"count":1,
          "title": "iPhone X",
          "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
          "price": 899,
          "discountPercentage": 17.94,
          "rating": 4.44,
          "stock": 34,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/2/1.jpg",
              "https://i.dummyjson.com/data/products/2/2.jpg",
              "https://i.dummyjson.com/data/products/2/3.jpg",
              "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
          ]
      },
      {
          "id": 3,"count":1,
          "title": "Samsung Universe 9",
          "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
          "price": 1249,
          "discountPercentage": 15.46,
          "rating": 4.09,
          "stock": 36,
          "brand": "Samsung",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/3/1.jpg"
          ]
      },
      {
          "id": 4,"count":1,
          "title": "OPPOF19",
          "description": "OPPO F19 is officially announced on April 2021.",
          "price": 280,
          "discountPercentage": 17.91,
          "rating": 4.3,
          "stock": 123,
          "brand": "OPPO",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/4/1.jpg",
              "https://i.dummyjson.com/data/products/4/2.jpg",
              "https://i.dummyjson.com/data/products/4/3.jpg",
              "https://i.dummyjson.com/data/products/4/4.jpg",
              "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
          ]
      },
      {
          "id": 5,"count":1,
          "title": "Huawei P30",
          "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
          "price": 499,
          "discountPercentage": 10.58,
          "rating": 4.09,
          "stock": 32,
          "brand": "Huawei",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/5/1.jpg",
              "https://i.dummyjson.com/data/products/5/2.jpg",
              "https://i.dummyjson.com/data/products/5/3.jpg"
          ]
      }
      ];
      dispatch(updateCartData(updatedCartData));
    };
    updateCartDataHandler();
  }, [dispatch]);
  
  return (
    <div>
    <div className="container mt-5">
    <div className="row d-flex justify-content-between">
            {
                cartProducts.map((products,id)=>(
                    <div className="col-lg-6 col-sm-12 mb-4 "key={id} >
                <div style={{boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}} className="card h-100 p-2">
                    <img src={products.thumbnail} alt="" className="card-img-top" />
        <div className="card-body">
        <h3>{products.title} </h3>           <p> Details: <br/> 
            {products.description}</p>
                    <h4><i className="fa-solid fa-indian-rupee-sign"></i>  {products.price}/-</h4>
                    <p>{rating} ({products.rating})</p>
                
                    <p><i className="fa-solid fa-tag"></i> Discount : {products.discountPercentage} % </p>
        </div>
        <div className="card-footer d-flex justify-content-center">
           
            <Link to='Cart'> <button className="btn btn-primary" onClick={()=>addToCartHandler(id)}  >Add to Cart</button></Link>
        </div>
                </div>
            </div>
                ))
            }
        </div>
    </div>
</div>
  );
};

export default Products;