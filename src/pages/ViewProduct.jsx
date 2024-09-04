import React from 'react'
import { Button } from 'react-bootstrap'

function ViewProduct() {
  return (
    <>
      <div className="container my-3">
        <div className="row d-flex justify-content-center flex-wrap">
          <div className="col-6 border" style={{minWidth:"400px"}}>
            <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt="" width={"100%"} />
          </div>
          <div className="col-6 my-3 border px-5" style={{minWidth:"400px"}}>
            <p>ProductId:72314</p>
            <h1>Product Title</h1>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, officiis totam? Earum accusamus corporis provident, expedita quas sequi quasi, exercitationem tenetur eos qui vitae culpa ullam corrupti officiis amet temporibus.</p>
            <h4>Price: $1200</h4>
            <div className="buttons mt-5 d-flex justify-content-between">
              <Button variant="danger fs-6 rounded"><i className="fa-solid fa-heart">&nbsp;&nbsp; W i s h l i s t</i></Button>
              <Button variant="info fs-6 rounded"><i className="fa-solid fa-cart-shopping">&nbsp;&nbsp; c a r t </i></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewProduct
