import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCartProducts,
  increaseCount,
  decreaseCount,
  removeFromCart,
} from '../redux/CartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.cart);
  const rating=<>
  <i className="fa-solid fa-star"style={{color:"gold"}} ></i>
  <i className="fa-solid fa-star"style={{color:"gold"}}></i>
  <i className="fa-solid fa-star"style={{color:"gold"}}></i>
  <i className="fa-solid fa-star"style={{color:"gold"}}></i>
  <i className="fa-regular fa-star-half-stroke" style={{color:"gold"}}></i></>
  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const increaseCountHandler = (id) => {
    const newCount = cartProducts[id].count + 1;
    dispatch(increaseCount({ id, newCount }));
  };

  const decreaseCountHandler = (id) => {
    const currentCount = cartProducts[id].count;
    if (currentCount > 1) {
      const newCount = currentCount - 1;
      dispatch(decreaseCount({ id, newCount }));
    }
  };

  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row d-flex justify-content-center align-items-center  flex-column">
          {
            cartProducts.map((e, id) => (<div className="col-lg-10 col-sm-12 mb-4 " key={id}>
              <div className="card w-100 d-flex  justify-content-between p-3 " style={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }}>
                <div className="d-flex flex-row head1 justify-content-between">
                  <div className="image d-flex jusitfy-content-between flex-row">
                  <div className='d-flex'>
                    <img src={e.thumbnail} className='w-50' alt="" />
                    <div className="details ml-2">
                      <h4> {e.title} </h4>
                      <p>Details : <br /> 
                       {e.description}</p>
                       <p>{rating}</p></div></div>

                </div>


                  <div className="price d-flex    ">
                    <button className="btn btn-light h-25 text-danger align-items-center d-flex ">{e.count} </button>
                    <div>
                       <button className='h-25  btn btn-light outline-0 ' onClick={()=>increaseCountHandler(id)}  ><i class="fa-solid fa-angle-up"></i></button>
 <button className='h-25 btn btn-light outline-0 ' onClick={()=>decreaseCountHandler(id)}  ><i className="fa-solid fa-angle-down"></i></button>
                    </div>
                   
                    <h4 className='m-1 ml-4'>
                      <i className="fa-solid fa-indian-rupee-sign"></i>{e.price }/-</h4></div>

                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-danger"onClick={()=>handleDelete(e.id)} >Remove</button>
                </div>
                <hr />
                <div className="head2 d-flex flex-row  justify-content-between">
                  <div>
                    <p>subtotal</p>
                    <p>shipping</p>
                  </div>
                  <div>
                    <p> {e.price * e.count}</p>
                    <p>free</p>
                  </div>
                </div>
                <hr />
                <div className="head3 d-flex flex-row  justify-content-between">
                  <div>
                    <h3>TOTAL</h3>
                  </div>
                  <div>
                    <h4><i className="fa-solid fa-indian-rupee-sign"></i> {e.price * e.count}</h4>

                  </div>
                </div>

              </div>

            </div>
            ))
          }
          <Link to='/'> <button className="btn btn-primary"  >Return to Products</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;