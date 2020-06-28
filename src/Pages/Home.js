import React from "react";
import Layout from "../Components/Layout";
import Card from "../Components/Card";

const Home = () => {
  return (
    <Layout>
      <div className="col-md-12">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default Home;
