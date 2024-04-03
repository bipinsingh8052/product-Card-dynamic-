import React,{useState} from 'react'
import '../style/product.css'
import Listdata from "../components/Item";
import From from '../components/Form'
export default function Product() {
  // const product = [ 
  //   {
  //   id:0,
  //   imgscr:"https://m.media-amazon.com/images/I/71q-01HbzXL._SY879_.jpg",
  //   title:"Dhurvi Trendz",
  //   price:432,
  //   discountPrice:373,
  //   details:"Women Regular Fit Rayon Shirt",
  //   imgdetail:"this is a regular used cloths"
  // },
  // {
  //   id : 1,
  //   imgscr:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
  //   title:"Funday Fashion",
  //   price:432,
  //   discountPrice:289,
  //   details:"Women's Denim Blend Standard Length Jacket",
  //   imgdetail:"this is not regular used cloths"
  // }
  // ]
  const [list,updatelist]=useState( {
    id : 1,
    imgscr:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    imgdetail:"Women's Denim Blend Standard Length Jacket"
  })
  // const [title,updatetitle]=useState("");
  // // const [inputDetail,outputDetail]=useState("");
  // const [price ,updatePrice]=useState("0");
  // const [imgscr,updateImg]=useState("");
  // const [discountPrice,updatediscountprice]=useState("0");

  // const Handleproduct=(event)=>{
  //   updatelist({
  //     ...list,
  //     title:event.target.value
  //   })
  // }
  // const handlePrice=(event)=>{
  //   updatelist({
  //     ...list,
  //     price:event.target.value
  //   })
  // }
  // const handleimg=(event)=>{
  //   updatelist({
  //     ...list,
  //     imgscr:event.target.value
  //   })
  // }
  // const handleDiscountPrice=(event)=>{
  //   updatelist({
  //     ...list,
  //     discountPrice:event.target.value
  //   })
  // }
  const handleChange=(event)=>{
    event.preventDefault();
  //  console.log({
  //    title:title,    discountPrice,imgscr,price, })
   if(list.discountPrice>list.price){
    alert("Given discountprice is greaten then price");
    return;
   }
  //  updatelist(
  //   {
  //     title,
  //     discountPrice,
  //      imgscr,
  //      price
  //  }
  //  );
  }

  const inputHandle=event=>{
    updatelist(
      {...list,
      [event.target.name]:event.target.value}
    )

  }
  return (
    <div className='mainconatiner'>
        <div className='conatiner'>
      <h5>Item Card Details</h5>
      {/* <form onSubmit={handleChange}>
        <label htmlFor="Name">Product Name</label>
        <input type="text" name='title' required placeholder='Enter the product name'  value={list.title}  onChange={inputHandle}/>
        <div className="price">
          <label htmlFor="Price">Price</label>
          <input type='number' name='price' required placeholder='Enter the price' value={list.price} onChange={inputHandle} />
        </div>
        <div className="discountprice">
          <label htmlFor="Price">Discount Price</label>
          <input type='number' name='discountPrice' required placeholder='Enter the price' value={list.discountPrice} onChange={inputHandle} />
        </div>
        <div className="Img">
          <label htmlFor="Imageaddress">Image Address/ Url</label>
          <input type="text" name='imgscr' required placeholder='Enter the image address / Url' value={list.imgscr}  onChange={inputHandle}/>
        </div>
        <div className="submit">
          <button >Submit</button>
        </div>
      </form>
      */}
      <From list={list} onChangeinput={inputHandle} fromsubmitchange={handleChange}/>
     </div> 
    <div className='Listdata'> 
       <Listdata  data={list}  />
      </div>
      </div>


  )
}
