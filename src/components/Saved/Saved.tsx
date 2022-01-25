import React from "react";
import "./Saved.css";
import { MdBookmarkBorder } from "react-icons/md";
import { connect } from "react-redux";
import store from '../../redux/store'
interface Props {
  products: {
    id: number;
    img: string;
    saved: boolean;
  }[];
}

function Saved({ products }: Props) {
  const handleClick = (value: number) => () => {
    console.log(value);
    store.dispatch({
      type: "productsSaved",
      payload: { id: value },
    });
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
                  <div className="btn">
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
    id: number;
    img: string;
    saved: boolean;
  }[]
) => {
  return {
    products: state,
  };
};

export default connect(mapStateToProps)(Saved);
