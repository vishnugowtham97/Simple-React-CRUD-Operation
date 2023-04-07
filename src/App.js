import React from "react";
import "./App.css";
import CRUD from "./Component/Crud";
import Layout from "./Component/Layout";

function App() {
  return (
    <div>
      <div className="heading-tag">
        <h2>Simple Crud Operation </h2>
      </div>
      <hr />
      <div className="img-tag-banner">
        <img
          className="logo-image-banner"
          alt="Company-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwij1sQeu7WQT17hXEFCq2iMRLDdl_c4DXvQ&usqp=CAU"
        />
        <h3>V.V COMPANY PVT LTD</h3>
      </div>
      <h4 className="content-heading mb-3">Employee's Details</h4>
      <div className="content-form">
        <div className="curd-name">
          <CRUD />
        </div>
        <div className="curd-age">
          <Layout />
        </div>
      </div>
    </div>
  );
}
export default App;
