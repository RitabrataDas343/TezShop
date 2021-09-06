import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
//here we have product consumer that wraps the whole products
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {
                        id,
                        company,
                        img,
                        info,
                        price,
                        title,
                        inCart
                    } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* // title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end of title */}
                            {/* product info */}
                            {/* product image */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <img
                                            src={img}
                                            alt="product"
                                            className="img img-fluid"
                                        />
                                    </div>
                                    {/* product image end */}
                                    {/* product text */}
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h2>model : {title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            This is made by :
                                            <span className="text-uppercase">
                                                {company}
                                            </span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                                price : <span>$</span>
                                                {price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            some info about the product
                                        </p>
                                        <p className="lead text-muted">
                                            {info}
                                        </p>
                                        {/* buttons */}
                                        <div className="">
                                            <Link to="/">
                                                <ButtonContainer>
                                                    back to products
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer
                                                cart
                                                disabled={inCart ? true : false}
                                                onClick={() => {
                                                    value.addToCart(id);
                                                }}>
                                                {inCart
                                                    ? "inCart"
                                                    : "add to Cart"}
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}
