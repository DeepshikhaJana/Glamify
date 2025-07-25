import React, { useContext } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal';
import { assets } from '../assets/assets';
import { useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function PlaceOrder() {

  const [method, setMethod] = useState('cod');
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

    const onchangeHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setFormData(data => ({ ...data, [name]: value }));
    };

    const onSubmitHandler = async(event) => {
      event.preventDefault();
      try {
        let orderItems = [];
        for(const items in cartItems){
          for(const item in cartItems[items]){
            if(cartItems[items][item] > 0){
              const itemInfo = structuredClone(products.find(product => product._id === items))
              if(itemInfo){
                itemInfo.size = item
                itemInfo.quantity = cartItems[items][item]
                orderItems.push(itemInfo)
              }
            }
          }
        }
       
        let orderData = {
          address: formData,
          items: orderItems,
          amount: getCartAmount() + delivery_fee,
        };

        switch (method) {
          //API Calls for COD
          case 'cod': 
              const response = await axios.post(backendUrl + '/api/order/place', orderData, {headers: {token}})
              console.log(response.data);
              if(response.data.success){
                setCartItems({})
                navigate('/orders')
              }
              else{
                toast.error(response.data.message);
              }
              break;
          default:
            break;
        }
      }
       catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };
  
  return (
    <form onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-top"
    >
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onchangeHandler}
            name="firstName"
            value={formData.firstName}
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            onChange={onchangeHandler}
            name="lastName"
            value={formData.lastName}
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          onChange={onchangeHandler}
          name="email"
          value={formData.email}
          required
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email Address"
        />
        <input
          onChange={onchangeHandler}
          name="street"
          value={formData.street}
          required
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            onChange={onchangeHandler}
            name="city"
            value={formData.city}
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            onChange={onchangeHandler}
            name="state"
            value={formData.state}
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onchangeHandler}
            name="zipcode"
            value={formData.zipcode}
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            onChange={onchangeHandler}
            name="country"
            value={formData.country}
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          onChange={onchangeHandler}
          name="phone"
          value={formData.phone}
          required
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4 ">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder