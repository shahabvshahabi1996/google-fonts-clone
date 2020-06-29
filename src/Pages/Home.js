import React from "react";
import Layout from "../Components/Layout";
import Card from "../Components/Card";

const Home = () => {
  return (
    <Layout>
      <div className="col-md-12">
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
