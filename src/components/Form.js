import React from 'react'

export default function Form(props) {
    const inputHandle=(e)=>{
        props.onChangeinput(e);
    }
    const Change=e=>{
        props.formsubmitchange(e);
    }
  return (
    <form onSubmit={Change}>
        <label htmlFor="Name">Product Name</label>
        <input type="text" name='title' required placeholder='Enter the product name'  value={props.list.title}  onChange={inputHandle}/>
        {/* <div className="productdetail">
          <label htmlFor="productdetail">Product Details</label>
          <input type="text" placeholder='Enter the product details ' value={inputDetail}  onChange={handledetail}/>
        </div> */}
        

        <div className="price">
          <label htmlFor="Price">Price</label>
          <input type='number' name='price' required placeholder='Enter the price' value={props.list.price} onChange={inputHandle} />
        </div>
        <div className="discountprice">
          <label htmlFor="Price">Discount Price</label>
          <input type='number' name='discountPrice' required placeholder='Enter the price' value={props.list.discountPrice} onChange={inputHandle} />
        </div>
        <div className="Img">
          <label htmlFor="Imageaddress">Image Address/ Url</label>
          <input type="text" name='imgscr' required placeholder='Enter the image address / Url' value={props.list.imgscr}  onChange={inputHandle}/>
        </div>
        <div className="submit">
          <button >Submit</button>
        </div>
      </form>
  )
}
