import React, { useEffect } from "react";
import { Footer } from "../../components";
import Navbar from "../../components/Navbar";
import Main from "../../parts/EditProduct";
import { getProductProcess } from "../../configs/redux/actions/productAdmin";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
function EditProduct() {
  const location = useLocation();
  const dispatch = useDispatch();
  const id = location.state.id;
  const { loading } = useSelector((state) => state.productAdmin);
  console.log(loading);
  useEffect(() => {
    dispatch(getProductProcess(id));
  }, [dispatch, id]);

  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
      {loading &&
        Swal.fire({
          title: "Loading",
          html: "Please wait...",
          icon: "info",
          didOpen: () => {
            Swal.showLoading();
          },
        })}
    </div>
  );
}

export default EditProduct;
