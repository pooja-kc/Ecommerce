import React from "react";
import "./Saved.css";
import { MdBookmarkBorder } from "react-icons/md";
import { connect } from "react-redux";
import store from '../../redux/store'
import Error from '../error/error';
import { productAdded ,productAddedToCart} from "../../redux/actions";

interface Props {
  products: {
    id: number;
    img: string;
    saved: boolean;
    price: number;
  }[];
}

function Saved({ products }: Props) {
  const handleClick = (value: number) => () => {
    console.log(value);
    store.dispatch(productAdded(value));
  };
  const addToCart =
  (id:number) => () => {
    store.dispatch(productAddedToCart(id));
    store.dispatch(productAdded(id));
  };
  return (
    <div className="saved_wrapper">
      
      <h1>My Saves</h1>
      <div className="wrapp">
        {products.map(
          (ele, index) =>
            ele.saved && (
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
                  <div className="btn" onClick={addToCart(products[index].id)}>
                    <button>
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
            )
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (
  state: {
    allProducts:{
      id: number;
      img: string;
      saved: boolean;
      price: number;
  }[],
  }
) => {
  return {
    products: state.allProducts,
  };
};

export default connect(mapStateToProps)(Saved);
