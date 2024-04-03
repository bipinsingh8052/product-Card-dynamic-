import React, { useState } from 'react'
import '../style/item.css';

export default function List({data}) {

    const [count,setcount]=useState(0);
    // const Addcart=()=>{
    //     console.log("add the cart",data.discountPrice);
    // }
    const Decrese=()=>{
       if(count<=0){
        return;
       }
       else{
        setcount(count-1);
       }
    }
    const incrse=()=>{
        setcount(count+1);
    }
  return (
    <div className='Cart '>
       <div className="Header ">
            <div className='conatiner '>
                <div className="imgConatiner ">
                    <img src={data.imgscr}  alt={data.imgdetail} />
                </div>
                <div className="title">
                    <span>
                        <p>₹{data.discountPrice}</p>
                        <strike>₹{data.price}</strike>
                    </span>
                    <h5>{data.title}</h5>
                </div>
            </div>
        </div>

            <div className='increase'>
                <button onClick={Decrese}>-</button>
                <div>{count}</div>
                <button onClick={incrse}>+</button>
            </div>
            <button  className='shoping' >
                <span>Add to Cart</span>
                <i className="bi bi-cart4"></i>
            </button>
            
    </div>
  )
}

