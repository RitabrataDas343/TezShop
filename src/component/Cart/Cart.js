import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import CartColumns from "./CartColumns";
import Title from "../Title";
import EmptyCart from "./EmptyCart";

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="you" title="cart" />
                                    <CartColumns />
                                    {/* <CartList value={value} /> */}
                                    <div className="container-fluid">
                                        {cart.map(item => {
                                            return (
                                                <CartItem
                                                    key={item.id}
                                                    item={item}
                                                    value={value}
                                                />
                                            );
                                        })}
                                    </div>
                                    <CartTotals value={value} />
                                </React.Fragment>
                            );
                        }
                        return <EmptyCart />;
                    }}
                </ProductConsumer>
            </section>
        );
    }
}
