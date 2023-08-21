import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getSingleProduct } from "../features/Products/ProductSlice"
import { useSelector } from "react-redux"
import styled from "styled-components"
const SingleProduct = () => {
    const { singleProduct } = useSelector((state: any) => state.product)

    console.log(singleProduct);
    const [clickImg, setClickImg] = useState("")
    const dispatch = useDispatch()
    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        console.log("useEffect called");
        dispatch(getSingleProduct(id))
    }, [])
    const changeImg = (e: any) => {

        setClickImg(e.target.src)
    }
    return (
        <Wrapper className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="images p-3">
                                    <div className="text-center p-4">
                                        <img id="main-image" src={clickImg} width="250" />
                                    </div>
                                    <div className="thumbnail text-center d-flex">
                                        {singleProduct?.images?.map((each: any) => (
                                            <div>
                                                <img src={each.url} width="40" className="images" onClick={(e) => changeImg(e)} />
                                            </div>
                                        ))}
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product p-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-long-arrow-left"></i>
                                            <span className="ml-1">Back</span>
                                        </div>
                                        <i className="fa fa-shopping-cart text-muted"></i>
                                    </div>
                                    <div className="mt-4 mb-3">
                                        <span className="text-uppercase text-muted brand">{singleProduct?.brand?.title}</span>
                                        <h5 className="text-uppercase">{singleProduct?.title}</h5>
                                        <div className="price d-flex flex-row align-items-center">
                                            <div className="ml-2">
                                                <small className="dis-price">{singleProduct?.price}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="about">{singleProduct?.description}</p>
                                    <div className="sizes mt-5">
                                    </div>
                                    <div className="cart mt-4 align-items-center">
                                        <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
                                        <i className="fa fa-heart text-muted"></i>
                                        <i className="fa fa-share-alt text-muted"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`

body{background-color: #000}.card{border:none}.product{background-color: #eee}.brand{font-size: 13px}.act-price{color:red;font-weight: 700}.dis-price{text-decoration: none}.about{font-size: 14px}.color{margin-bottom:10px}label.radio{cursor: pointer}label.radio input{position: absolute;top: 0;left: 0;visibility: hidden;pointer-events: none}label.radio span{padding: 2px 9px;border: 2px solid #ff0000;display: inline-block;color: #ff0000;border-radius: 3px;text-transform: uppercase}label.radio input:checked+span{border-color: #ff0000;background-color: #ff0000;color: #fff}.btn-danger{background-color: #ff0000 !important;border-color: #ff0000 !important}.btn-danger:hover{background-color: #da0606 !important;border-color: #da0606 !important}.btn-danger:focus{box-shadow: none}.cart i{margin-right: 10px} 
.images{
    margin-left:20px;
}
`
export default SingleProduct