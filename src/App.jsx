import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Card from "./components/Card";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [btnText, setBtnText] = useState([]);

  for (let i = 1; i <= 8; i++) {
    let obj = { id: i, txt: "Add to Cart" };
    btnText.push(obj);
  }
  let cardDetails = [
    {
      id: 1,
      TopSale: true,
      cardImg:
        "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",

      productName: "Water Bottle",

      mrp: 10.2,

      btnTxt: btnText[0].txt,
    },
    {
      id: 2,
      TopSale: false,
      cardImg:
        "https://hips.hearstapps.com/hmg-prod/images/home-1633038782.jpg?crop=0.5xw:1xh;center,top&resize=640:*",
      productName: "Furniture",

      mrp: 30.5,

      btnTxt: btnText[1].txt,
    },
    {
      id: 3,
      TopSale: true,
      cardImg:
        "https://www.pcworld.com/wp-content/uploads/2024/02/bf-laptop-deals-pcw-8.jpg?quality=50&strip=all",

      productName: "Laptop",

      mrp: 120.75,

      btnTxt: btnText[2].txt,
    },
    {
      id: 4,
      TopSale: false,
      cardImg:
        "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-types-feature.jpg",
      productName: "Camera",

      mrp: 145.25,

      btnTxt: btnText[3].txt,
    },
    {
      id: 5,
      TopSale: true,
      cardImg:
        "https://rukminim1.flixcart.com/image/832/832/kkec4280/chocolate/m/n/y/dairy-milk-silk-oreo-chocolate-bar-60-gm-pack-of-7-cadbury-original-imafzrekath3zm7j.jpeg?q=70",
      productName: "Oreo-DairyMilk",

      mrp: 7.12,

      btnTxt: btnText[4].txt,
    },
    {
      id: 6,
      TopSale: true,
      cardImg:
        "https://www.dekorcompany.com/cdn/shop/articles/1_a7c10f6b-fca6-4991-95c9-603c8e106329_1200x1200.jpg?v=1582201411",
      productName: "Decor-Item",

      mrp: 50.25,

      btnTxt: btnText[5].txt,
    },
    {
      id: 7,
      TopSale: true,
      cardImg:
        "https://anyaonline.in/cdn/shop/collections/Bridal-Kanchi-Silk-Sarees.jpg?v=1698142145",
      productName: " Silk Sarees",
      mrp: 32.55,

      btnTxt: btnText[6].txt,
    },
    {
      id: 8,
      TopSale: false,
      cardImg:
        "https://www.toroid.in/cdn/shop/files/20220407084528_IMG_1670-min.png?v=1696239846",

      productName: "Cycle",

      mrp: 90.81,

      btnTxt: btnText[7].txt,
    },
    
  ];
  let press = (product) => {
    let foundButton = btnText.find((ele) => product.id === ele.id);

    if (foundButton.txt === "Add to Cart") {
      setCartData([...cartData, product]);

      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            // console.log({ ...btn, txt: "Remove from Cart" });
            return { ...btn, txt: "Remove from Cart" };
          } else {
            return btn;
          }
        });
      });
    } else if (foundButton.txt === "Remove from Cart") {
      setCartData(cartData.filter((ele) => ele.id != product.id));
      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            return { ...btn, txt: "Add to Cart" };
          } else {
            return btn;
          }
        });
      });
    }
  };

  return (
    <div>
      <Nav navDetails={cartData} />
      <Header />
      <section className="content-section py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {cardDetails.map((card, index) => {
              return <Card key={index++} props={card} press={press} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
