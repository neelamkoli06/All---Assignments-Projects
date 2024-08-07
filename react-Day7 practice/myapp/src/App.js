import React from "react";
import Products from "./Products";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 1,
      cosmeticData: true,
      otherData: true,
    };
  }
  cosmetic_handler = () => {
    this.setState({
      cosmeticData: true,
      otherData: false,
    });
  };
  otherproduct_handler = () => {
    this.setState({
      otherData: true,
      cosmeticData: false,
    });
  };
  handleAllProducts = () => {
    this.setState({
      otherData: true,
      cosmeticData: true,
    });
  };

  render() {
    const cosmetics = [
      {
        id: 1,
        name: "Foundation",
        img: "Assest/images/foundation1.avif",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 2,
        name: "Compact",
        img: "Assest/images/compact.png",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 3,
        name: "Eye Shadow",
        img: "Assest/images/eyeShadow.avif",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 4,
        name: "Eye Liner",
        img: "Assest/images/liner.avif",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 5,
        name: "Lipstick",
        img: "Assest/images/lipstick.jpg",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 6,
        name: "MakeUp Kit",
        img: "Assest/images/makeup_kit.jpeg",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 7,
        name: "Cleanser",
        img: "Assest/images/cleanser.avif",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 8,
        name: "Perfume",
        img: "Assest/images/perfume.jpeg",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
    ];
    const electronic_products = [
      {
        id: 1,
        name: "Laptop Bag",
        img: "Assest/images/laptop_bag.jpg",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 2,
        name: "Shoes",
        img: "Assest/images/shoes.webp",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 3,
        name: "Clock",
        img: "Assest/images/watch.jpg",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 4,
        name: "SkyBags",
        img: "Assest/images/skybag.jpg",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 5,
        name: "Samsung S24",
        img: "Assest/images/samsung_s24.jpeg",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 6,
        name: "Laptop",
        img: "Assest/images/laptop.jpeg",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 7,
        name: "Home Decor",
        img: "Assest/images/home-decor.jpg",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 8,
        name: "Clothes",
        img: "Assest/images/clothes.jpg",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
    ];
    return (
      <>
        <h1 className="bg-dark text-center fw-bold p-3 text-warning">
          Shopping App
        </h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <button
                className="btn btn-danger px-4 fw-bold"
                onClick={() => this.handleAllProducts()}
              >
                All Products
              </button>
              <button
                className="btn btn-dark fw-bold px-3 my-3 mx-5"
                onClick={() => this.otherproduct_handler()}
              >
                Cosmetics
              </button>
              <button
                className="btn btn-info px-4 my-3 fw-bold"
                onClick={() => this.cosmetic_handler()}
              >
                Other products
              </button>
            </div>

            <div className="col-md-12">
              <div className="row">
                {this.state.otherData
                  ? cosmetics.map((val, index) => {
                      return (
                        <div className="col-md-3 mt-3" key={index}>
                          <Products
                            name={val.name}
                            img={val.img}
                            btn1={val.btn1}
                            btn2={val.btn2}
                          />
                        </div>
                      );
                    })
                  : null}

                {this.state.cosmeticData &&
                  electronic_products.map((val, index) => {
                    return (
                      <div className="col-md-3 mt-3" key={index}>
                        <Products
                          name={val.name}
                          img={val.img}
                          btn1={val.btn1}
                          btn2={val.btn2}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}