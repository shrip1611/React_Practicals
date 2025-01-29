import React from "react";
import './style.css';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./q1/Counter";
import Product from "./q12/Product";
import Nav from "./q2/Nav";
import Home from "./q2/Home";
import About from "./q2/About";
import Todo from "./q3/Todo";
// import Todoupdate from "./q3/Todoupdate";
import Proptoc from "./q4/Proptoc";
import Arraymap from "./q5/Arraymap";
import Parent from "./q6/Parent";
import Lifecycle from "./q7/Lifecycle";
import Afruits from "./q8/Afruits";
import Combine from "./q9/Combine";
import Redus from "./q10/Redus";
import Valid from "./q11/Valid";



function App() {

  return (
    <>
      {/* <Counter num={0}/>  */}
      {/* <Router>
    <Nav/>
    <Routes>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'/about'} element={<About/>}></Route>
    </Routes>
    </Router> */}
      {/* <Todo/> */}
      {/* <Proptoc name='Shriram'/> */}
      {/* <Arraymap/> */}
      {/* <Parent/> */}
      {/* <Lifecycle/> */}
      {/* <Afruits/> */}
      {/* <Combine/> */}
      {/* <Redus/> */}
      {/* <Valid/> */}
      {/* <Product/> */}
      {/* <Todoupdate/> */}


      <Router>
        <Navbar />
        <Routes>
          <Route path={'/counter'} element={<Counter num={0}/>}></Route>
          <Route path="/nav" element={<Nav />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} /> 
          </Route>
          <Route path={'/todo'} element={<Todo />}></Route>
          <Route path={'/proptoc'} element={<Proptoc name="Shriram" />}></Route>
          <Route path={'/arraymap'} element={<Arraymap />}></Route>
          <Route path={'/parent'} element={<Parent />}></Route>
          <Route path={'/lifecycle'} element={<Lifecycle />}></Route>
          <Route path={'/afruits'} element={<Afruits />}></Route>
          <Route path={'/combine'} element={<Combine />}></Route>
          <Route path={'/redus'} element={<Redus />}></Route>
          <Route path={'/valid'} element={<Valid />}></Route>
          <Route path={'/product'} element={<Product />}></Route>
        </Routes>
      </Router>

    
    </>
  );
}

export default App;
