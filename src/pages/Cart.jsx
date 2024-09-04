import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Cart() {
  return (
    <div>
      <div className="container-fluid px-5 my-3">
        <div className="row d-flex flex-wrap">
          <div className="col p-1 border">
            <table className='table' style={{width:"70vw"}}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>image</th>
                  <th>prize</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Shoe</td>
                  <td><img style={{width:"100px"}} src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt="" /></td>
                  <td>1200$</td>
                  <td><i className="fa-solid text-danger fa-trash"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col border">
            <Card className='d-flex gap-4 p-3'>
              <h1>cart summary</h1>
              <h4>total products: 4</h4>
              <h5>Total: $1200</h5>
              <Button>Checkout</Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
