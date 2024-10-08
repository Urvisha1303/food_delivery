import React, { useContext } from 'react'
import "./Placeorder.css"
import { StoreContext } from '../../context/Storecontext'

const Placeorder = () => {
  const{getTotalCartAmount} = useContext(StoreContext)
  const handlePayment = () => {
    const options = {
      key: "rzp_test_lCGWVGmMKjk0GP",
      amount: (getTotalCartAmount() + 2) * 100, // Convert to paise
      currency: "INR",
      name: "Your Company Name",
      description: "Test Transaction",
      image: "https://example.com/your_logo", // Optional
      handler: function (response) {
        alert("Payment successful!");
        console.log(response);
      }
    };
    console.log( getTotalCartAmount());
    
    
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className='title'>Delivery Infromation</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'  />
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'  />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country'  />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div><hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0: 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0: getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="button" onClick={handlePayment}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder