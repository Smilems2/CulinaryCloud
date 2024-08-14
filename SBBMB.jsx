// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import "./SBBMB.css";
// import {Link, Outlet} from 'react-router-dom';
// import NavlogoImage from "./img/CR-icon.svg";
// // import Popup from 'reactjs-popup';
// // import NewPage from "./Newpage";
// // import './Newpage.css';

// const Rasoidemo=()=>{
//   const [employees,setEmployees]=useState([]);
//   const [menuplan,setMenuPlan]=useState([]);

 
//   useEffect(()=>{
//       axios.post("http://localhost:3000/rasoititle")
//       .then(response=>{setEmployees(response.data)}
//       )
//       .catch(error=>{
//           console.error("there was an error fetching the employee details",error)
//       })
//  } ,[]);

//  useEffect(()=>{
//   axios.post("http://localhost:3000/rasoimenu")
//   .then(response=>{setMenuPlan(response.data)}
//   )
//   .catch(error=>{
//       console.error("there was an error fetching the employee details",error)
//   })
// } ,[]);



//   return (
//     <>
//     <div>
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
//         integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
//         crossorigin="anonymous"
//         referrerpolicy="no-referrer"
//       />

//       <div id="root" style={{ height: "100%" }}>
//         <div className="whole-background _3arMG">
//           <header className="header-section _76q0O">
//             <div className="main-navbar global-nav">
//               <div className="interior-navbar _1EuBh">
//                 <a
//                   href="/"
//                   className="logo d9y3g"
//                   title="CloudRasoi"
//                   style={{ marginRight: "16px" }}
//                 >
//                   <img src={NavlogoImage} width="50px" height="50px"></img>
//                 </a>
//                 <div
//                   role="button"
//                   className="address-button _2z2N5"
//                   tabIndex="0"
//                 >
//                   <span className="other _1tcx6">
//                     <span className="_3odgy">Other</span>
//                   </span>
//                   <span className="address _3HusE">
//                     Agra, Uttar Pradesh, India
//                   </span>
//                   <span className="icon-downArrow kVKTT fa-solid fa-angle-down"></span>
//                 </div>
//                 <ul className="navbar-list _1JNGZ">
//                   <li className="cart _1fo6c">
//                     <div className="inner _1fmVk _30y3a">
//                       <div>
//                         <div className="inner1 _2CgXb">
//                           <a className="_1T-E4" href="/checkout">
//                             <span className="_3yZyp">
//                               <i
//                                 class="fa-solid fa-cart-shopping"
//                                 style={{
//                                   width: "20px",
//                                   height: "20px",
//                                   fontSize: "18px",
//                                 }}
//                               ></i>
//                             </span>
//                             <span>Cart</span>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li className="cart _1fo6c" style={{ width: "78px" }}>
//                     <div className="inner1 _2CgXb">
//                       <span className="_3yZyp">
//                         <i
//                           class="fa-regular fa-user"
//                           style={{
//                             width: "18px",
//                             height: "19px",
//                             fontSize: "18px",
//                           }}
//                         ></i>
//                       </span>
//                       <span>Sign In</span>
//                     </div>
//                   </li>
//                   <li className="cart _1fo6c" style={{ width: "62px" }}>
//                     <div className="inner1 _2CgXb" style={{padding: '10px', }}>
//                       <a className="_1T-E4" href="/support">
//                         <span className="_3yZyp">
//                           <i
//                             class=""
//                             style={{
//                               width: "18px",
//                               height: "19px",
//                               fontSize: "18px",
//                             }}
//                           ></i>
//                         </span>
//                         <Link to="/Udashboard" className='_1T-E4' activeclassname="active">
//                         <span>Dashboard</span>
//                         </Link>
//                       </a>
//                     </div>
//                   </li>
//                   <li className="cart _1fo6c _ma1fo6c" style={{ width: "62px" }}>
//                     <div className="inner1 _2CgXb">
//                       <a className="_1T-E4" href="/support">
//                         <span className="_3yZyp">
//                           <i
//                             class="fa-solid fa-percent"
//                             style={{
//                               width: "18px",
//                               height: "19px",
//                               fontSize: "18px",
//                             }}
//                           ></i>
//                           Offers
//                         </span>

//                         <span className="PJaej">New</span>
//                       </a>
//                     </div>
//                   </li>
//                   <li className="cart _1fo6c" style={{ width: "62px" }}>
//                     <div className="inner1 _2CgXb">
//                       <a className="_1T-E4" href="/support">
//                         <span className="_3yZyp">
//                           <i
//                             class="fa-solid fa-magnifying-glass"
//                             style={{
//                               width: "18px",
//                               height: "19px",
//                               fontSize: "18px",
//                             }}
//                           ></i>
//                         </span>
//                         <span>Search</span>
//                       </a>
//                     </div>
//                   </li>
//                   <li className="cart _1fo6c" style={{ width: "156.5px" }}></li>
//                 </ul>
//               </div>
//             </div>
//           </header>
//         </div>
//       </div>

//       <div className=".boxmain _bm1234">
//         <div className="boxflex _bf1234">
//          {employees.map((a1) =>(
//           <div className="backgroundofheadbox _bgo001" key={a1.id}>
//            <div className=".headingbox _hb123">
//             <div className=".headingmain _hm1234">
//               <h1 id="headinghg112">{a1.rasoi_name}</h1>
//             </div>
//           </div>
//           <div className=".headingsdiv _hv123">
//             <div className=".mainboxrate _me1234">
//               <div className=".div1 _d111">
//                 <div className=".left _lt12">
//                   <div className="logo _lg11">
//                     {/* <i class="fa-regular fa-circle-dot"></i> */}
//                   </div>
//                   <div className="content _ct11">{a1.rasoi_rating}⭐⭐⭐⭐ (1K+ rating)</div>
//                 </div>
//               </div>
//               <div className=".cuisine _ce121">
//                 <div className="contents _cs98">
//                   <span> {a1.rasoi_category}</span>
//                 </div>
//               </div>
//               <div className="outlet _ot121">
//                 <div className="headingout _h11111">
//                   <span className="ab12">Outlet </span>
//                   <span id="S">{a1.rasoi_address}</span>
//                 </div>
//                 <div className="time _te1">
//                   <span className="ab12">{a1.rasoi_time}</span>
//                 </div>
//               </div>
//               <div className="cycle _c189">
//                 <div className="cycle">
//                   <div className="left-cycle">
//                     <i class="fa-solid fa-bicycle"></i>
//                   </div>
//                   <div className="right-cycle">
//                     Order above 149 for discounted delivery fee
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         ))}

//           <div className="bodydivs _bs1165">
//             <div className="menu _mu19">
//               <div className="head _hd18">
//                 <h3 id="h56">Menu</h3>
//               </div>
//             </div>
//             <div className="foody _fy67">
//               <div className="upper _up90">
//               {menuPlan.map((a1) =>( 
//                 <div className="food-div" key={a1.plan_id}>
//                   <div className="left-food">
//                     <div className="icon-food _ifd1">
//                       <i class="fa-solid fa-leaf"></i>
//                     </div>
//                     <div className="food-name _fe1">{a1.plans}</div>
//                     <div className="price-food _pf1">{a1.price}</div>
//                     <div className="food-desc _fd1">
//                     {a1.description}
//                     </div>
//                   </div>
//                   <div className="right-food">
//                     <div className="image-food _if1"></div>
//                     <div className="button-add _bd1">
//                       {/* <button id="add">ADD</button> */}
//                       {/* <Popup trigger= */}
//                       <ul>
//                         <li>
//                           <Link to="/Popup" className='' activeclassname="active">
//                             <button id="add">ADD </button>
//                           </Link>
//                         </li>
//                       </ul> 
//         {/* modal nested> */}
//         {
//           close => (
//             <div className="box-new-page">
//           <div className="box _bx2">
//             <div className="box-new-page1">
//               <div className="bnp1">
//                 <div className="bnp1-1">
//                   <div className="bnp1-1-1">

//                     {/* <span id="paneer">Shahi Paneer ₹120</span> */}
//                     <div className="paneer">
//                        <p id="paneer">Shahi Paneer ₹120</p>
//                     </div>
//                     <div className="paneer">
//                     <button id="cross"><i class="fa-regular fa-circle-xmark"></i></button>
//                     </div>
//                   </div>

//                   <div className="bnp1-1-2">

//                     <p id="customise">Customise as per your taste</p>

//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="box-new-page2">
//                 <div className="bnp2-1">

//                     <p id="quantity">Quantity</p>

//                     <div className="radio" >
//                         <div className="first-veg">
//                         <label for="ml">500 Ml
//                         <input type="radio" className="ml" value="500 Ml" name="quantity" />
//                         </label> 
//                         </div>
//                         <br />
//                        <div className="second-veg">
//                        <label for="kg">1 kg
//                         <input type="radio" id="kg" className="ml" value="1 kg" name="quantity" />
//                         </label>
//                        </div>
//                     </div>
                    
//                 </div>

//             </div>

//             <div className="box-new-page3">
//                 <div className="left123">
//                     <div className="left123-1">
//                         <p>₹140.00</p>
//                         <p id="view">View Customised item</p>
//                     </div>
//                     <div className="left123-2">

//                     </div>
//                 </div>
//                 <div className="right123">
//                     <button id="cart">Add Item to cart</button>

//                 </div>
//             </div>
//           </div>
//         </div>
//           )
//         }
//       {/* </Popup> */}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//                 <div className="food-div">
//                   <div className="left-food">
//                     <div className="icon-food _ifd1">
//                       <i class="fa-solid fa-leaf"></i>
//                     </div>
//                     <div className="food-name _fe2">Pav Bhaji</div>
//                     <div className="price-food _pf2">₹ 150</div>
//                     <div className="food-desc _fd2">
//                     Pav Bhaji is a popular Indian street food that originated in Mumbai. It is a spicy and flavorful vegetable curry made with a variety of vegetables and spices, served with buttered and toasted buns known as pav.
//                     </div>
//                   </div>
//                   <div className="right-food">
//                     <div className="image-food _if2"></div>
//                     <div className="button-add _bd2">
//                     {/* <Popup trigger= */}
//         {<button id="add">ADD </button>} 
//         {/* modal nested> */}
//         {
//           close => (
//             <div className="box-new-page">
//           <div className="box _bx2">
//             <div className="box-new-page1">
//               <div className="bnp1">
//                 <div className="bnp1-1">
//                   <div className="bnp1-1-1">

//                     {/* <span id="paneer">Shahi Paneer ₹120</span> */}
//                     <div className="paneer">
//                        <p id="paneer">Shahi Paneer ₹120</p>
//                     </div>
//                     <div className="paneer">
//                     <button id="cross"><i class="fa-regular fa-circle-xmark"></i></button>
//                     </div>
//                   </div>

//                   <div className="bnp1-1-2">

//                     <p id="customise">Customise as per your taste</p>

//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="box-new-page2">
//                 <div className="bnp2-1">

//                     <p id="quantity">Quantity</p>

//                     <div className="radio" >
//                         <div className="first-veg">
//                         <label for="ml">500 Ml
//                         <input type="radio" className="ml" value="500 Ml" name="quantity" />
//                         </label> 
//                         </div>
//                         <br />
//                        <div className="second-veg">
//                        <label for="kg">1 kg
//                         <input type="radio" id="kg" className="ml" value="1 kg" name="quantity" />
//                         </label>
//                        </div>
//                     </div>
                    
//                 </div>

//             </div>

//             <div className="box-new-page3">
//                 <div className="left123">
//                     <div className="left123-1">
//                         <p>₹140.00</p>
//                         <p id="view">View Customised item</p>
//                     </div>
//                     <div className="left123-2">

//                     </div>
//                 </div>
//                 <div className="right123">
//                     <button id="cart">Add Item to cart</button>

//                 </div>
//             </div>
//           </div>
//         </div>
//           )
//         }
//       {/* </Popup> */}
//                       {/* <button id="add">ADD</button> */}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="food-div">
//                   <div className="left-food">
//                     <div className="icon-food _ifd1">
//                       <i class="fa-solid fa-leaf"></i>
//                     </div>
//                     <div className="food-name _fe3">Kadhai Paneer</div>
//                     <div className="price-food _pf3">₹ 300</div>
//                     <div className="food-desc _fd3">
//                     A rich, creamy curry of soft succulent paneer and plenty of onions in a wonderful medley of spices, herbs and tomatoes.
//                     </div>
//                   </div>
//                   <div className="right-food">
//                     <div className="image-food _if3"></div>
//                     <div className="button-add _bd3">
//                     {/* <Popup trigger= */}
//         {<button id="add">ADD </button>} 
//         {/* modal nested> */}
//         {
//           close => (
//             <div className="box-new-page">
//           <div className="box _bx2">
//             <div className="box-new-page1">
//               <div className="bnp1">
//                 <div className="bnp1-1">
//                   <div className="bnp1-1-1">

//                     {/* <span id="paneer">Shahi Paneer ₹120</span> */}
//                     <div className="paneer">
//                        <p id="paneer">Shahi Paneer ₹120</p>
//                     </div>
//                     <div className="paneer">
//                     <button id="cross"><i class="fa-regular fa-circle-xmark"></i></button>
//                     </div>
//                   </div>

//                   <div className="bnp1-1-2">

//                     <p id="customise">Customise as per your taste</p>

//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="box-new-page2">
//                 <div className="bnp2-1">

//                     <p id="quantity">Quantity</p>

//                     <div className="radio" >
//                         <div className="first-veg">
//                         <label for="ml">500 Ml
//                         <input type="radio" className="ml" value="500 Ml" name="quantity" />
//                         </label> 
//                         </div>
//                         <br />
//                        <div className="second-veg">
//                        <label for="kg">1 kg
//                         <input type="radio" id="kg" className="ml" value="1 kg" name="quantity" />
//                         </label>
//                        </div>
//                     </div>
                    
//                 </div>

//             </div>

//             <div className="box-new-page3">
//                 <div className="left123">
//                     <div className="left123-1">
//                         <p>₹140.00</p>
//                         <p id="view">View Customised item</p>
//                     </div>
//                     <div className="left123-2">

//                     </div>
//                 </div>
//                 <div className="right123">
//                     <button id="cart">Add Item to cart</button>

//                 </div>
//             </div>
//           </div>
//         </div>
//           )
//         }
//       {/* </Popup> */}
//                       {/* <button id="add">ADD</button> */}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="food-div">
//                   <div className="left-food">
//                     <div className="icon-food _ifd1">
//                       <i class="fa-solid fa-leaf"></i>
//                     </div>
//                     <div className="food-name _fe4">Chole Bhature</div>
//                     <div className="price-food _pf4">₹ 190</div>
//                     <div className="food-desc _fd4">
//                     It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a deep-fried bread made from maida
//                     </div>
//                   </div>
//                   <div className="right-food">
//                     <div className="image-food _if4"></div>
//                     <div className="button-add _bd4">
//                     {/* <Popup trigger= */}
//         {<button id="add">ADD </button>} 
//         {/* modal nested> */}
//         {
//           close => (
//             <div className="box-new-page">
//           <div className="box _bx2">
//             <div className="box-new-page1">
//               <div className="bnp1">
//                 <div className="bnp1-1">
//                   <div className="bnp1-1-1">

//                     {/* <span id="paneer">Shahi Paneer ₹120</span> */}
//                     <div className="paneer">
//                        <p id="paneer">Shahi Paneer ₹120</p>
//                     </div>
//                     <div className="paneer">
//                     <button id="cross"><i class="fa-regular fa-circle-xmark"></i></button>
//                     </div>
//                   </div>

//                   <div className="bnp1-1-2">

//                     <p id="customise">Customise as per your taste</p>

//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="box-new-page2">
//                 <div className="bnp2-1">

//                     <p id="quantity">Quantity</p>

//                     <div className="radio" >
//                         <div className="first-veg">
//                         <label for="ml">500 Ml
//                         <input type="radio" className="ml" value="500 Ml" name="quantity" />
//                         </label> 
//                         </div>
//                         <br />
//                        <div className="second-veg">
//                        <label for="kg">1 kg
//                         <input type="radio" id="kg" className="ml" value="1 kg" name="quantity" />
//                         </label>
//                        </div>
//                     </div>
                    
//                 </div>

//             </div>

//             <div className="box-new-page3">
//                 <div className="left123">
//                     <div className="left123-1">
//                         <p>₹140.00</p>
//                         <p id="view">View Customised item</p>
//                     </div>
//                     <div className="left123-2">

//                     </div>
//                 </div>
//                 <div className="right123">
//                     <button id="cart">Add Item to cart</button>

//                 </div>
//             </div>
//           </div>
//         </div>
//           )
//         }
//       {/* </Popup> */}
//                       {/* <button id="add">ADD</button> */}
//                     </div>
//                   </div>
//                 </div>
                
//               </div>
//               <div className="lower lr90"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Rasoidemo;




import "./SBBMB.css";
import './Navbar.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import NavlogoImage from "./img/CR-icon.png";

export default function SBBMB() {
  const [tiffinService, setTiffinService] = useState(null); // Initialize with null to indicate loading
  const [menuPlan, setMenuPlan] = useState([]);
  const [img1, setImg] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();


  useEffect(() => {
    axios
      .post(`http://localhost:3100/rasoititle/${id}`)
      .then((response) => {
        setTiffinService(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the tiffin service details:", error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .post("http://localhost:3100/rasoimenu")
      .then((response) => {
        setMenuPlan(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the menu plan:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .post('http://localhost:3100/fetch')
      .then((res) => {
        setImg(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
};

  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

<div id="root" style={{height: '100%'}}>
            <div className="whole-background _3arMG">
                <header className="header-section _76q0O">
                    <div className="main-navbar global-nav">
                        <div className="interior-navbar _1EuBh">
                            <a href='/' className="logo d9y3g" title="CloudRasoi" style={{marginRight: '16px'}}>
                            <img src={NavlogoImage} width="50px" height="50px" ></img>
                            </a>
                            <div role="button" className="address-button _2z2N5" tabIndex="0">
                                <span className="other _1tcx6">
                                    <span className="_3odgy">Other</span>
                                </span>
                                <span className="address _3HusE">Agra, Uttar Pradesh, India</span>
                                <span className="icon-downArrow kVKTT fa-solid fa-angle-down"></span>
                            </div>
                            <ul className="navbar-list _1JNGZ">
                                <li className="cartdiv _1fo6c">
                                    <div className="inner _1fmVk _30y3a">
                                        <div>
                                            <div className="inner1 _2CgXb">
                                                <a className="_1T-E4" onClick={() => handleNavigation('/Cart')}>
                                                    <span className="_3yZyp"><i class="fa-solid fa-cart-shopping" style={{width: '20px', height: '20px', fontSize: '18px'}}></i></span>
                                                    <span>cart</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="cartdiv _1fo6c" style={{width: '78px'}}>
                                    <div className="inner1 _2CgXb">
                                        <a className='_1T-E4' onClick={() => handleNavigation('/Uprofile')}>
                                        <span className="_3yZyp"><i class="fa-regular fa-user" style={{width: '18px', height: '19px', fontSize: '18px'}}></i></span>
                                        <span>Sign In</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="cartdiv _1fo6c" style={{width: '62px'}}>
                                    <div className="inner1 _2CgXb" style={{padding: '10px' }}>
                                        <a className="_1T-E4" onClick={() => handleNavigation('/Udashboard')}>
                                            <span className="_3yZyp"><i class="" style={{width: '18px', height: '19px', fontSize: '18px'}}></i></span>
                                            <span>Dashboard</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="cartdiv _1fo6c" style={{width: '62px'}}>
                                    <div className="inner1 _2CgXb">
                                        <a className="_1T-E4">
                                            <span className="_3yZyp"><i class="fa-solid fa-percent" style={{width: '18px', height: '19px', fontSize: '18px'}}></i>Offers</span>
                                        
                                            <span className="PJaej">New</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="cartdiv _1fo6c" style={{width: '62px'}}>
                                    <div className="inner1 _2CgXb">
                                        <a className="_1T-E4" onClick={() => handleNavigation('/Searchbar')}>
                                            <span className="_3yZyp"><i class="fa-solid fa-magnifying-glass" style={{width: '18px', height: '19px', fontSize: '18px'}}></i></span>
                                            <span>Search</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="cartdiv _1fo6c" style={{width: '156.5px'}}>

                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        </div>

        <div className="boxmain _bm1234">
          <div className="boxflex _bf1234">
            <div className="headingbox _pvhb123">
              <div className="headingmain _pvhm1234">
                <h1 id="pvheadinghg112">{tiffinService ? tiffinService.title : "Loading..."}</h1>
              </div>
            </div>
            <div className="headingsdiv _pvhv123">
              {tiffinService ? (
                <div className="mainboxrate _pvme1234">
                  <div className="div1 _pvd111">
                    <div className="left _pvlt12">
                      <div className="logo _pvlg11"></div>
                      <div className="content _pvct11">
                        <tr>
                          <td className="_s1234">4⭐️⭐️⭐️⭐️⭐️</td>
                        </tr>
                      </div>
                    </div>
                  </div>
                  <div className="cuisine _pvce121">
                    <div className="contents _pvcs98">
                      <span>{tiffinService.category}</span>
                    </div>
                  </div>
                  <div className="outlet _pvot121">
                    <div className="headingout _pvh11111">
                      <span className="pvab12">Outlet </span>
                      <span id="pvS">{tiffinService.address}</span>
                    </div>
                    <div className="time _pvte1">
                      <span className="pvab12">{tiffinService.phone}</span>
                    </div>
                  </div>
                  <div className="cycle _pvc189">
                    <div className="pvcycle">
                      <div className="pvleft-cycle">
                        <i className="fa-solid fa-bicycle"></i>
                      </div>
                      <div className="pvright-cycle">Free delivery</div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="bodydivs _pvbs1165">
              <div className="menu _pvmu19">
                <div className="head _pvhd18">
                  <h3 id="pvh56">Menu</h3>
                </div>
              </div>
              <div className="foody _pvfy67">
                <div className="upper _pvup90">
                  {menuPlan.length > 0 ? (
                    menuPlan.map((a1) => (
                      <div className="pvfood-div" key={a1.plan_id}>
                        <div className="pvleft-food">
                          <div className="pvicon-food _pvifd1">
                            <i className="fa-solid fa-leaf"></i>
                          </div>
                          <div className="food-name _pvfe1">{a1.plans}</div>
                          <div className="price-food _pvpf1">{a1.price}</div>
                          <div className="food-desc _pvfd1">{a1.description}</div>
                        </div>
                        <div className="pvright-food">
                          <div className="image-food _pvif1">
                            <img src={a1.plan_imageURL} alt={a1.plans} style={{ width: '200px', height: '140px' }} />
                          </div>
                          <div className="button-add _pvbd1">
                            <button id="pvadd">ADD</button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No menu available.</p>
                  )}
                  <div className="lower pvlr90"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}





// import "./SBBMB.css";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import NavlogoImage from "./img/CR-icon.png";
// import { useParams } from "react-router-dom";

// export default function SBBMB() {
//   const [tiffinService, setTiffinService] = useState([]);
//   const [menuPlan, setMenuPlan] = useState([]);
//   const [img1, setImg] = useState([]);
//   const {id} = useParams();


//   useEffect(() => {
//     axios.post(`http://localhost:3100/rasoititle/${id}`)
//       .then(response =>setTiffinService(response.data)) 
//       .catch((error) => {
//         console.error("There was an error fetching the employee details", error);
//       });
//   }, [id]);

//   // useEffect(() => {
//   //   axios.post("http://localhost:3100/rasoimenu")
//   //     .then(response => {
//   //       setMenuPlan(response.data);
//   //     })
//   //     .catch(error => {
//   //       console.error("There was an error fetching the menu details", error);
//   //     });
//   // }, []);

//   useEffect(() => {
//     axios.post('http://localhost:3100/fetch')
//       .then((res) => {
//         setImg(res.data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   return (
//     <>
//       <div>
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
//           integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
//           crossOrigin="anonymous"
//           referrerPolicy="no-referrer"
//         />

//         <div id="root" style={{ height: "100%" }}>
//           <div className="whole-background _3arMG">
//             <header className="header-section _76q0O">
//               <div className="main-navbar global-nav">
//                 <div className="interior-navbar _1EuBh">
//                   <a
//                     href="/"
//                     className="logo d9y3g"
//                     title="CloudRasoi"
//                     style={{ marginRight: "16px" }}
//                   >
//                     <img src={NavlogoImage} alt="Logo" width="50px" height="50px" />
//                   </a>
//                   <div
//                     role="button"
//                     className="address-button _2z2N5"
//                     tabIndex="0"
//                   >
//                     <span className="other _1tcx6">
//                       <span className="_3odgy">Other</span>
//                     </span>
//                     <span className="address _3HusE">
//                       Agra, Uttar Pradesh, India
//                     </span>
//                     <span className="icon-downArrow kVKTT fa-solid fa-angle-down"></span>
//                   </div>
//                   <ul className="navbar-list _1JNGZ">
//                     <li className="cart _1fo6c">
//                       <div className="inner _1fmVk _30y3a">
//                         <div>
//                           <div className="inner1 _2CgXb">
//                             <a className="_1T-E4" href="/checkout">
//                               <span className="_3yZyp">
//                                 <i
//                                   className="fa-solid fa-cart-shopping"
//                                   style={{
//                                     width: "20px",
//                                     height: "20px",
//                                     fontSize: "18px",
//                                   }}
//                                 ></i>
//                               </span>
//                               <span>Cart</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </li>
//                     <li className="cart _1fo6c" style={{ width: "78px" }}>
//                       <div className="inner1 _2CgXb">
//                         <span className="_3yZyp">
//                           <i
//                             className="fa-regular fa-user"
//                             style={{
//                               width: "18px",
//                               height: "19px",
//                               fontSize: "18px",
//                             }}
//                           ></i>
//                         </span>
//                         <span>Sign In</span>
//                       </div>
//                     </li>
//                     <li className="cart _1fo6c" style={{ width: "62px" }}>
//                       <div className="inner1 _2CgXb" style={{ padding: '10px' }}>
//                         <Link to="/Udashboard" className='_1T-E4'>
//                           <span className="_3yZyp">
//                             <i
//                               className="fa-solid fa-tachometer-alt"
//                               style={{
//                                 width: "18px",
//                                 height: "19px",
//                                 fontSize: "18px",
//                               }}
//                             ></i>
//                           </span>
//                           <span>Dashboard</span>
//                         </Link>
//                       </div>
//                     </li>
//                     <li className="cart _1fo6c _ma1fo6c" style={{ width: "62px" }}>
//                       <div className="inner1 _2CgXb">
//                         <a className="_1T-E4" href="/support">
//                           <span className="_3yZyp">
//                             <i
//                               className="fa-solid fa-percent"
//                               style={{
//                                 width: "18px",
//                                 height: "19px",
//                                 fontSize: "18px",
//                               }}
//                             ></i>
//                             Offers
//                           </span>
//                           <span className="PJaej">New</span>
//                         </a>
//                       </div>
//                     </li>
//                     <li className="cart _1fo6c" style={{ width: "62px" }}>
//                       <div className="inner1 _2CgXb">
//                         <a className="_1T-E4" href="/support">
//                           <span className="_3yZyp">
//                             <i
//                               className="fa-solid fa-magnifying-glass"
//                               style={{
//                                 width: "18px",
//                                 height: "19px",
//                                 fontSize: "18px",
//                               }}
//                             ></i>
//                           </span>
//                           <span>Search</span>
//                         </a>
//                       </div>
//                     </li>
//                     <li className="cart _1fo6c" style={{ width: "156.5px" }}></li>
//                   </ul>
//                 </div>
//               </div>
//             </header>
//           </div>
//         </div>

//         <div className="boxmain _pvbm1234">
//           <div className="boxflex _pvbf1234">
//             <div className="headingbox _pvhb123">
//               <div className="headingmain _pvhm1234">
//                 <h1 id="pvheadinghg112">
//                   {tiffinService.length > 0 && tiffinService[0].rasoi_name}
//                 </h1>
//               </div>
//             </div>
//             <div className="headingsdiv _pvhv123">
//               <div className="mainboxrate _pvme1234">
//                 <div className="div1 _pvd111">
//                   <div className="left _pvlt12">
//                     <div className="logo _pvlg11"></div>
//                     <div className="content _pvct11">
//                       <span className="_s1234">4⭐️⭐️⭐️⭐️⭐️</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="cuisine _pvce121">
//                   <div className="contents _pvcs98">
//                     <span>
//                       {tiffinService.length > 0 && tiffinService[0].rasoi_category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="outlet _pvot121">
//                   <div className="headingout _pvh11111">
//                     <span className="pvab12">Outlet </span>
//                     <span id="pvS">
//                       {tiffinService.length > 0 && tiffinService[0].rasoi_address}
//                     </span>
//                   </div>
//                   <div className="time _pvte1">
//                     <span className="pvab12">
//                       {tiffinService.length > 0 && tiffinService[0].rasoi_phone}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="cycle _pvc189">
//                   <div className="pvcycle">
//                     <div className="pvleft-cycle">
//                       <i className="fa-solid fa-bicycle"></i>
//                     </div>
//                     <div className="pvright-cycle">Free delivery</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bodydivs _pvbs1165">
//               <div className="menu _pvmu19">
//                 <div className="head _pvhd18">
//                   <h3 id="pvh56">Menu</h3>
//                 </div>
//               </div>
//               <div className="foody _pvfy67">
//                 <div className="upper _pvup90">
//                   {menuPlan.map((item) => (
//                     <div className="pvfood-div" key={item.plan_id}>
//                       <div className="pvleft-food">
//                         <div className="pvicon-food _pvifd1">
//                           <i className="fa-solid fa-leaf"></i>
//                         </div>
//                         <div className="food-name _pvfe1">{item.plans}</div>
//                         <div className="price-food _pvpf1">{item.price}</div>
//                         <div className="food-desc _pvfd1">{item.description}</div>
//                       </div>
//                       <div className="pvright-food">
//                         <div className="image-food _pvif1">
//                           <img
//                             src={item.plan_imageURL}
//                             alt={item.plans}
//                             style={{ width: '200px', height: '140px' }}
//                           />
//                         </div>
//                         <div className="button-add _pvbd1">
//                           <button id="pvadd">ADD</button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="lower pvlr90"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
