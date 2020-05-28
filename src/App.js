import React from "react";
import "./styles.css";
import Navbar from "./dependency/navbar";
import Banner from "./dependency/banner";
import Items from "./dependency/items";
import Cart from "./dependency/cart";
import Sidebar from "./dependency/sidebar";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          num: 5,
          rate: 152,
          name: "Mexican Cheesy Fries + Medium Coke",
          src:
            "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_180/v1554979897/Items/Category3861.png",
          cat: "combo"
        },
        {
          num: 1,
          rate: 150,
          name: "Aloo Tikka Burger",
          src:
            "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,h_180/v1484907250/Items/65.png",
          cat: "burger"
        },
        {
          num: 2,
          rate: 120,
          name: "Grilled Chatpata Aloo",
          src:
            "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,h_180/v1569308388/Items/4863.png",
          cat: "burger"
        },
        {
          num: 6,
          rate: 170,
          name: "Cappuccino(S) + Fries(M) ",
          src:
            "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_180/v1581502809/Items/5063.jpg",
          cat: "combo"
        },
        {
          num: 3,
          rate: 180,
          name: "McAlooTikki Burger",
          src:
            "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,h_180/v1484907267/Items/3191.png",
          cat: "burger"
        },
        {
          num: 4,
          rate: 150,
          name: "Egg Burger",
          src:
            "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,h_180/v1484926778/Items/50.png",
          cat: "burger"
        },
        {
          num: 7,
          rate: 90,
          name: "Chicken Biriyani",
          src:
            "https://www.chickenfoodcourt.com/assets/img/speacial-item/special-item3.jpg",
          cat: "rice"
        },
        {
          num: 7,
          rate: 190,
          name: "Fried Rice",
          src:
            "https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2017/10/egg-fried-rice.jpg",
          cat: "rice"
        }
      ],
      cart: [],
      viewCart: false,
      cartTotal: 0,
      categorySelect: "all",
      emptyCart: true
    };
    console.log(this.state.cart);
  }
  makeSelect = event => {
    let select = this.state.categorySelect;
    this.setState({ categorySelect: event.target.dataset.id });
    this.setState({ viewCart: false });
    console.log(_.filter(this.state.menu, { cat: select }));
  };

  removeItem = event => {
    console.log(
      this.state.cart.findIndex(obj => obj.num === event.target.dataset.id)
    );
    let index = this.state.cart.findIndex(
      obj => obj.num === event.target.dataset.id
    );
    let itemRate = this.state.cart[index].rate;
    let itemQty = this.state.cart[index].qty;
    console.log(itemRate, itemQty);
    this.state.cart.splice(index, 1);
    this.setState({
      cartTotal: this.state.cartTotal - itemRate * itemQty
    });
    if (this.state.cart.length === 0) this.setState({ emptyCart: true });
  };
  addCart = event => {
    console.log(event.target.dataset.id);
    console.log(
      this.state.cart.findIndex(obj => obj.num === event.target.dataset.id)
    );
    let index = this.state.cart.findIndex(
      obj => obj.num === event.target.dataset.id
    );
    if (index === -1) {
      this.state.cart.push({
        num: event.target.dataset.id,
        name: event.target.dataset.name,
        rate: Number(event.target.dataset.rate),
        qty: 1
      });
    } else {
      this.state.cart[index].qty = this.state.cart[index].qty + 1;
      console.log("qty");
      console.log(this.state.cart[index].qty);
    }
    this.setState({
      cartTotal: this.state.cartTotal + Number(event.target.dataset.rate)
    });
    this.setState({ emptyCart: false });
    console.log(this.state.cartTotal);
  };

  seeCart = itemCart => {
    console.log("in");
    this.setState({ viewCart: true });
    console.log(this.state.viewCart);
  };

  hideCart = itemCart => {
    console.log("in");
    this.setState({ viewCart: false });
    console.log(this.state.viewCart);
  };

  changeQty = event => {
    console.log("qty changed");
    console.log("Item Id : " + event.target.dataset.id);
    console.log("Item Qty : "+ event.target.value);
    let index = this.state.cart.findIndex(
      obj => obj.num === event.target.dataset.id
    );
    this.state.cart[index].qty = event.target.value;
    this.setState({
      cartTotal: this.state.cartTotal*2
    });

  };

  render() {
    const viewCart = this.state.viewCart;
    let select = this.state.categorySelect;
    return (
      <div>
        <Navbar
          cart={this.state.cart}
          viewCart={viewCart}
          seeCart={this.seeCart}
          hideCart={this.hideCart}
        />
        <Sidebar makeSelect={this.makeSelect} />
        {viewCart ? (
          <Cart
            cart={this.state.cart}
            total={this.state.cartTotal}
            removeItem={this.removeItem}
            emptyCart={this.state.emptyCart}
           changeQty={this.changeQty}
          />
        ) : (
          <div>
            <Banner />,
            <Items
              menu={
                this.state.categorySelect === "all"
                  ? this.state.menu
                  : _.filter(this.state.menu, {
                      cat: this.state.categorySelect
                    })
              }
              addCart={this.addCart}
            />
          </div>
        )}
      </div>
    );
  }
}
export default App;
