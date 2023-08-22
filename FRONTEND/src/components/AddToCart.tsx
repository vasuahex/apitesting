import { addToCart, getCartItems } from "../features/Products/ProductSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { RiDeleteBin6Line } from 'react-icons/ri'
import { LiaRupeeSignSolid } from 'react-icons/lia'
// import { increase } from "../features/Products/ProductSlice"
import { clearCart } from "../features/Products/ProductSlice"
import { FaPlus, FaMinus } from "react-icons/fa"
const AddToCart = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state: any) => state.product)
  console.log(cartItems);
  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  const deleteCartItems = () => {
    dispatch(clearCart())
  }
  return (

    <div>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i
                    className="fas fa-angle-down mt-1"></i></a></p>
                </div>
              </div>

              <div>
                {cartItems?.products?.map((each: any) => (
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={each?._id?.images[0]?.url}
                            className="img-fluid rounded-3" alt="mobile" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="lead fw-normal mb-2">{each?._id?.title}</p>
                          <p><span className="text-muted"></span> <span className="text-muted">Color: </span>{each?.color}</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">

                          <button className="btn btn-link px-2">
                            <FaMinus className="fas fa-minus" />
                          </button>

                          <input id="form1" min="0" name="quantity" value={each?.count} type="number"
                            className="form-control form-control-sm" />

                          <button className="btn btn-link px-2" onClick={() => {
                            dispatch(addToCart({ prodId: each._id._id, color: each.color }))
                            dispatch(getCartItems())
                          }
                          }>
                            <FaPlus className="fas fa-plus" />
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 className="mb-0"><span><LiaRupeeSignSolid /></span>{each?._id?.price}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-danger"><RiDeleteBin6Line className="fas fa-trash fa-lg" /></a>
                        </div>
                      </div>
                    </div>
                  </div>

                ))}
              </div>




              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <input type="text" id="form1" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form1">Discound code</label>
                  </div>
                  <button type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
                </div>
              </div>

              <div className="card d-flex justify-space-between">
                <div className="card-body">
                  <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                </div>
                <div className="card-body">
                  <button type="button" className="btn btn-danger btn-block btn-lg" onClick={deleteCartItems}>clear cart</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddToCart