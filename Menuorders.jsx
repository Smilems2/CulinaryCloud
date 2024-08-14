import React, { useState } from "react";
import "./Menuorders.css";
import {Link, Outlet} from 'react-router-dom';
import NavlogoImage from "./img/CR-icon.png";
import LogoImage from "./img/pizza.jpg";
// import Popmenu from "./Popmenu";

export default function Venmenu() {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Item Details Submitted:", { image, category, price });
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div id="root" style={{ height: "100%" }}>
        <div className="whole-background _3arMG">
          <header className="header-section _76q0O">
            <div className="main-navbar global-nav">
              <div className="interior-navbar _1EuBh">
                <a
                  href="/"
                  className="logo d9y3g"
                  title="CloudRasoi"
                  style={{ marginRight: "16px" }}
                >
                  <img src={NavlogoImage} alt="" width="50px" height="50px" />
                </a>
                <div
                  role="button"
                  className="address-button _2z2N5"
                  tabIndex="0"
                >
                  <span className="other _1tcx6">
                    <span className="_3odgy">Other</span>
                  </span>
                  <span className="address _3HusE">
                    Agra, Uttar Pradesh, India
                  </span>
                  <span className="icon-downArrow kVKTT fa-solid fa-angle-down"></span>
                </div>
                <ul className="navbar-list _1JNGZ">
                  <li className="cart _1fo6c">
                    <div className="inner _1fmVk _30y3a">
                      <div>
                        <div className="inner1 _2CgXb">
                          <a className="_1T-E4" href="/checkout">
                            <span className="_3yZyp">
                              <i
                                className="fa-solid fa-cart-shopping"
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  fontSize: "18px",
                                }}
                              ></i>
                            </span>
                            <span>Cart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="cart _1fo6c" style={{ width: "78px" }}>
                    <div className="inner1 _2CgXb">
                      <span className="_3yZyp">
                        <i
                          className="fa-regular fa-user"
                          style={{
                            width: "18px",
                            height: "19px",
                            fontSize: "18px",
                          }}
                        ></i>
                      </span>
                      <span>Sign In</span>
                    </div>
                  </li>
                  <li className="cart _1fo6c" style={{ width: "62px" }}>
                    <div className="inner1 _2CgXb" style={{padding: '10px', }}>
                      <a className="_1T-E4" >
                        <span className="_3yZyp">
                          <i
                            className=""
                            style={{
                              width: "18px",
                              height: "19px",
                              fontSize: "18px",
                            }}
                          ></i>
                        </span>
                        <Link to="/Vdashboard" className='_1T-E4' activeclassname="active">
                        <span>Dashboard</span>
                        </Link>
                      </a>
                    </div>
                  </li>
                  <li className="cart _1fo6c _ma1fo6c" style={{ width: "62px" }}>
                    <div className="inner1 _2CgXb">
                      <a className="_1T-E4" href="/support">
                        <span className="_3yZyp">
                          <i
                            className="fa-solid fa-percent"
                            style={{
                              width: "18px",
                              height: "19px",
                              fontSize: "18px",
                            }}
                          ></i>
                          Offers
                        </span>
                        <span className="PJaej">New</span>
                      </a>
                    </div>
                  </li>
                  <li className="cart _1fo6c" style={{ width: "62px" }}>
                    <div className="inner1 _2CgXb">
                      <a className="_1T-E4" href="/support">
                        <span className="_3yZyp">
                          <i
                            className="fa-solid fa-magnifying-glass"
                            style={{
                              width: "18px",
                              height: "19px",
                              fontSize: "18px",
                            }}
                          ></i>
                        </span>
                        <span>Search</span>
                      </a>
                    </div>
                  </li>
                  <li
                    className="cart _1fo6c"
                    style={{ width: "156.5px" }}
                  ></li>
                </ul>
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className="main _mn2510">
        <div className="leftbox _lx2510">
          <div className="lowerleft _lt25100">
            <div className="box189">
              <div className="inpout56">
                <p>Res ID: 8512448</p>
              </div>
            </div>
            <div className="box289">
              <img src={LogoImage} width="300px" height="200px" alt="Logo" />
            </div>
            <div className="box389">
              <p className="content678">Sri Dauji Chatpata</p>
              <p className="content678">Kamla nagar agra</p>
              <p className="content678">+91 876543238</p>
              <p className="content6789">Registered</p>
            </div>
            <div className="box489">
              <i className="fa-solid fa-bars"></i>
              <p>Menu</p>
            </div>
            <div className="box589">
              <i className="fa-regular fa-image"></i>
              <p>Photos</p>
            </div>
          </div>
        </div>
        <div className="rightbox _rx2510">
          <div className="upper _ur2510"></div>
          <div className="lower _lr2510">
            <div className="upperbox _ux25101">
              <div className="photoupload">
                <div
                  style={{
                    maxWidth: "366px",
                    padding: "1rem",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    marginLeft: "200px",
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "1rem" }}>
                      <label
                        htmlFor="imageUpload"
                        style={{ display: "block", marginBottom: "0.5rem" }}
                      >
                        {image ? (
                          <img
                            src={image}
                            alt="Uploaded"
                            style={{ width: "100%", borderRadius: "8px" }}
                          />
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "335px",
                            // marginTop: "40px",
                              height: "150px",
                              border: "2px dashed #ccc",
                              borderRadius: "8px",
                            }}
                          >
                            <span>Add Image</span>
                          </div>
                        )}
                      </label>
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                      />
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                      <label
                        htmlFor="category"
                        style={{ display: "block", marginBottom: "0.5rem" }}
                      >
                        Item Category
                      </label>
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.5rem",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <option value="">Select Category</option>
                        <option value="North Indian">North Indian</option>
                        <option value="South Indian">South Indian</option>
                        <option value="Italian">Italian</option>
                        {/* Add more categories here */}
                      </select>
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                      <label
                        htmlFor="price"
                        style={{ display: "block", marginBottom: "0.5rem" }}
                      >
                        Item Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.5rem",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                      <label
                        htmlFor="description"
                        style={{ display: "block", marginBottom: "0.5rem" }}
                      >
                        Item Description
                      </label>
                      <textarea
                        id="description"
                        rows="4"
                        style={{
                          width: "100%",
                          padding: "0.5rem",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                        }}
                      ></textarea>
                    </div>

                    <Link to="/Venmenupopup" className="" activeclassname="active">
                    <button
                      type="submit"
                    //   onClick={togglePopup}
                      style={{
                        width: "100%",
                        padding: "1rem",
                        backgroundColor: "#FEA116",
                        color: "black",
                        border: "none",
                        textAlign: "center",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Add Item
                    </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
            <div className="lowerbox _lx25101"></div>
          </div>
        </div>
      </div>

      {/* {isOpen && (
        <div className="popup">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
            integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <div className="main _mn6789">
            <div className="bodydiv _bv6789">
              <div className="head _hd6789">
                <p>Create Customisations for Biryani</p>
                <button id="bcf" onClick={togglePopup}>
                  X
                </button>
              </div>
              <hr />
              <div className="bodylower _br6789">
                <div className="leftdiv _lv6789">
                  <div className="top _tp6789">
                    <p className="_b26789">Properties</p>
                  </div>
                  <div className="bottom _bm6789">
                    <div className="leftie">
                      <div className="btg891">
                        <p>Quantity (3 variants)</p>
                        <p id="trash">
                          <i className="fa-regular fa-trash-can"></i>
                        </p>
                      </div>
                      <button className="btg89">Single</button>
                      <button className="btg89">Half</button>
                      <button className="btg89">Full</button>
                      <button id="gth89">+ Add new Quantity</button>
                    </div>
                    <div className="rightie">
                      <button id="bt9086">+ Add more Properties</button>
                    </div>
                  </div>
                </div>
                <div className="rightdiv _rv6789">
                  <div className="div1789">
                    <p id="po">Variant Pricing</p>
                    <p id="pbitt">Enter variant pricing here</p>
                  </div>
                  <div className="div2789">
                    <p>Type</p>
                    <p>Price</p>
                  </div>
                  <div className="div3789">
                    <div className="lt90">
                      <p>Single</p>
                    </div>
                    <div className="rt90">
                      <button id="paisa45">₹ 250</button>
                      <p id="bt9087">
                        <i className="fa-regular fa-circle-check"></i>
                      </p>
                    </div>
                  </div>
                  <div className="div3789">
                    <div className="lt90">
                      <p>Half</p>
                    </div>
                    <div className="rt90">
                      <button id="paisa45">₹ 500</button>
                      <p id="bt9087">
                        <i className="fa-regular fa-circle-check"></i>
                      </p>
                    </div>
                  </div>
                  <div className="div3789">
                    <div className="lt90">
                      <p>Full</p>
                    </div>
                    <div className="rt90">
                      <button id="paisa45">₹ 700</button>
                      <p id="bt9087">
                        <i className="fa-regular fa-circle-check"></i>
                      </p>
                    </div>
                  </div>
                  <div className="div6789">
                    <button id="done78" onClick={togglePopup}>
                      Done
                    </button>
                  </div>
                  <div className="div7789"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
