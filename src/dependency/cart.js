import React from "react";
import "../styles.css";

export default function(props) {
  return (
    <div className="cart">
      {props.emptyCart ? (
        <div class="alert alert-warning" role="alert">
          <h4 class="alert-heading">Oops Cart is Empty !</h4>
          Try adding Items from dashboard!!
        </div>
      ) : (
        <div>
          <h1>Your Cart</h1>
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {props.cart.map(({ num, name, rate, qty }) => (
                <tr>
                  <td>{name}</td>
                  <td>{rate}</td>
                  <td><input type="number" min="0" placeholder={qty} onChange={props.changeQty}
                  data-id={num}
                  /></td>
                  <td>{rate * qty}</td>
                  <td>
                    <a
                      href="/#"
                      class="btn btn-outline-danger btn-sm"
                      data-id={num}
                      onClick={props.removeItem}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
              <tr>
                <td />
                <td />
                <th> Total </th>
                <th>{props.total}</th>
                <th />
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
