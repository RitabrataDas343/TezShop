import React, { Component } from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
import { ProductWrapper } from "./ProductWrapper";

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {/* //*no other way ti pass info */}
                        {value => (
                            // once we click on this we are gonna handledetail and one we get it we are gonna find that product through getProduct and then flip detailProduct to that product
                            <div
                                className="img-container p-5"
                                onClick={() => {
                                    value.handleDetail(id);
                                }}>
                                <Link to="/details">
                                    <img
                                        src={img}
                                        alt=""
                                        className="card-img-top"
                                    />
                                </Link>
                                <button
                                    className="cart-btn"
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                    {inCart ? (
                                        <p
                                            className="lead text-capitalize mb-0"
                                            disabled>
                                            in Cart
                                        </p>
                                    ) : (
                                        <i className=" lead fa fa-cart-plus" />
                                    )}
                                </button>
                            </div>
                        )}
                    </ProductConsumer>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="lead align-self-center">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};
