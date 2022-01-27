import React from "react";
import "./Product.css";
import store from "../../redux/store";
import { MdBookmarkBorder } from "react-icons/md";
import { connect } from "react-redux";
import { productAdded , productAddedToCart} from "../../redux/actions";
//product add is product save

interface Props {
  products: {
    id: number;
    img: string;
    saved: boolean;
    price: number;
  }[];
}

function Product({ products }: Props) {
  const handleClick = (value: number) => () => {
    console.log(value);
    store.dispatch(productAdded(value));
  };
  const addToCart =
    (id:number) => () => {
      store.dispatch(productAddedToCart(id));
      console.log("after cart add", store.getState());
    };

  return (
    <div className="product_wrapper">
      {products.map((ele, index) => (
        <div key={index} className="card-container">
          <div className="image-container">
            <img src={products[index].img} alt="image" />
          </div>
          <div className="card-content">
            <div className="card-title">
              <h3> title</h3>
            </div>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, consequuntur.
              </p>
            </div>
            <div className="btn">
              <button onClick={addToCart(products[index].id)}>
                <a>Add to Cart</a>
              </button>
              <div
                className={`save_icon  ${ele.saved ? "saved" : ""}`}
                onClick={handleClick(ele.id)}
              >
                <MdBookmarkBorder />
              </div>
            </div>
            <div className="price">Rs {products[index].price} </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: {
  allProducts: {
    id: number;
    img: string;
    saved: boolean;
    price: number;
  }[];
}) => {
  return {
    products: state.allProducts,
  };
};

export default connect(mapStateToProps)(Product);
