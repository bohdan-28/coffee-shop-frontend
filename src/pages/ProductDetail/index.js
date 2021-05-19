import React from "react";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components";
import Main from "../../parts/ProductDetail";

function ProductDetail(props) {
  const id = props.match.params.id;

  return (
    <div>
      {/* <Navbar /> */}
      <Main idUser={id}></Main>
      <Footer />
    </div>
  );
}

export default ProductDetail;
