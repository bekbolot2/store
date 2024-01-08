import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import './CartBlock.css'


const CartBlock = () => {
    return (
        <div className="cart-block">
        <TiShoppingCart size={35} className='cart-block__icon'/>
        <span className="cart-block__totalprice">2345 сом</span>
        </div>
    );
};
export default CartBlock;