import React, { useState, useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import style from "./product.module.css";
import SideArticle from "../../parts/ProductCust/SideArticle/SideArticle";
import CouponCard from "../../parts/ProductCust/CouponCard/CouponCard";
import Button from "../../parts/ProductCust/Button/Button";
import TermCondition from "../../parts/ProductCust/TermCondition/TermCondition";
import ProductCard from "../../parts/ProductCust/ProductCard/ProductCard";
import { dadCC, motherCC, pirateCC } from "../../assets/images";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getProduct } from "../../configs/redux/actions/product";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

function ProductCustomer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { role } = useSelector((state) => state.user);
  const { loading, allProducts } = useSelector((state) => state.product);
  const { currentPage, totalPage } = allProducts;
  const [togglestate, setToggleState] = useState(1);
  const [toggleKey, setToggleKey] = useState("favourite");
  const [product, setProduct] = useState([]);
  let [queryLimit, setQueryLimit] = useState("4");
  let [queryPage, setQueryPage] = useState("1");
  let [queryOrder, setQueryOrder] = useState("asc");
  let [querySort, setQuerySort] = useState("name");

  const sort = [
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Price",
      value: "price",
    },
    {
      label: "total Sale",
      value: "totalSale",
    },
    {
      label: "Added",
      value: "created_at",
    },
  ];
  const order = [
    {
      label: "Ascending",
      value: "ASC",
    },
    {
      label: "Descending",
      value: "DESC",
    },
  ];
  const limit = [
    {
      label: "Limit 4",
      value: "4",
    },
    {
      label: "Limit 8",
      value: "8",
    },
    {
      label: "Limit 12",
      value: "12",
    },
    {
      label: "Limit 16",
      value: "16",
    },
  ];

  const toggleTab = (index, data) => {
    setToggleState(index);
    setToggleKey(data);
    setQueryPage(1);
  };

  useEffect(() => {
    dispatch(
      getProduct(toggleKey, queryPage, queryLimit, querySort, queryOrder)
    )
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        Swal.fire({
          title: "Info!",
          text: err.message,
          icon: "info",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6a4029",
        });
      });
  }, [dispatch, queryLimit, toggleKey, queryOrder, querySort, queryPage]);

  const handleAddProduct = (event) => {
    history.push("/new-product");
  };
  const handleClickPage = (index) => {
    setQueryPage(index + 1);
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <div className={[["col-4"], style["side-section"]].join(" ")}>
          <SideArticle />
          <CouponCard
            pict={`${motherCC}`}
            title="HAPPY MOTHER'S DAY!"
            text="Get one of our favourite menu for free!"
            color="card-green"
          />
          <CouponCard
            pict={`${dadCC}`}
            title="Get a cup of coffee for free on sunday morning"
            text="Only at 7 to 9 AM"
            color="card-yellow"
          />
          <CouponCard
            pict={`${motherCC}`}
            title="HAPPY MOTHER'S DAY!"
            text="Get one of our favourite menu for free!"
            color="card-green"
          />
          <CouponCard
            pict={`${pirateCC}`}
            title="HAPPY HALLOWEEN!"
            text="Do you like chicken wings? Get 1 free only if you buy pinky promise"
            color="card-pink"
          />
          <Button />
          <TermCondition />
        </div>
        <div className={[["col-8"], style["main-section"]].join(" ")}>
          <div className="bg-white overflow-auto" style={{ height: "600px" }}>
            <div className={style["tab-card"]}>
              <button
                type="button"
                className={
                  togglestate === 1
                    ? `${style.btn} ${style.btnactive}`
                    : `${style.btn}`
                }
                onClick={() => toggleTab(1, "favourite")}
              >
                Favourite & Promo
              </button>
              <button
                type="button"
                className={
                  togglestate === 2
                    ? `${style.btn} ${style.btnactive}`
                    : `${style.btn}`
                }
                onClick={() => toggleTab(2, "coffee")}
              >
                Coffee
              </button>
              <button
                type="button"
                className={
                  togglestate === 3
                    ? `${style.btn} ${style.btnactive}`
                    : `${style.btn}`
                }
                onClick={() => toggleTab(3, "non-coffee")}
              >
                Non Coffee
              </button>
              <button
                type="button"
                className={
                  togglestate === 4
                    ? `${style.btn} ${style.btnactive}`
                    : `${style.btn}`
                }
                onClick={() => toggleTab(4, "foods")}
              >
                Foods
              </button>
              <button
                type="button"
                className={
                  togglestate === 5
                    ? `${style.btn} ${style.btnactive}`
                    : `${style.btn}`
                }
                onClick={() => toggleTab(5, "add-on")}
              >
                Add-on
              </button>
            </div>
            <div
              className={
                togglestate === 1
                  ? `${style.cardSection} ${style.activeContent}`
                  : `${style.cardSection}`
              }
            >
              {product.map((item, index) => {
                return (
                  <ProductCard
                    image={item.image}
                    title={item.name}
                    price={item.price}
                    key={index}
                    idProduct={item.id}
                  />
                );
              })}
            </div>
            <div
              className={
                togglestate === 2
                  ? `${style.cardSection} ${style.activeContent}`
                  : `${style.cardSection}`
              }
            >
              {product.map((item, index) => {
                return (
                  <ProductCard
                    image={item.image}
                    title={item.name}
                    price={item.price}
                    key={index}
                    idProduct={item.id}
                  />
                );
              })}
            </div>
            <div
              className={
                togglestate === 3
                  ? `${style.cardSection} ${style.activeContent}`
                  : `${style.cardSection}`
              }
            >
              {product.map((item, index) => {
                return (
                  <ProductCard
                    image={item.image}
                    title={item.name}
                    price={item.price}
                    key={index}
                    idProduct={item.id}
                  />
                );
              })}
            </div>
            <div
              className={
                togglestate === 4
                  ? `${style.cardSection} ${style.activeContent}`
                  : `${style.cardSection}`
              }
            >
              {product.map((item, index) => {
                return (
                  <ProductCard
                    image={item.image}
                    title={item.name}
                    price={item.price}
                    key={index}
                    idProduct={item.id}
                  />
                );
              })}
            </div>
            <div
              className={
                togglestate === 5
                  ? `${style.cardSection} ${style.activeContent}`
                  : `${style.cardSection}`
              }
            >
              {product.map((item, index) => {
                return (
                  <ProductCard
                    image={item.image}
                    title={item.name}
                    price={item.price}
                    key={index}
                    idProduct={item.id}
                  />
                );
              })}
            </div>
          </div>
          {/* Paginasi */}
          <div className="row pl-2 pl-lg-0 mt-5">
            <div className="col-12 d-flex justify-content-center">
              {parseInt(totalPage) > 1 ? (
                <Pagination aria-label="Page navigation example">
                  <PaginationItem>
                    <PaginationLink first onClick={(e) => setQueryPage(1)} />
                  </PaginationItem>
                  {Array.from(Array(totalPage).keys()).map((data, index) => {
                    return (
                      <PaginationItem active={currentPage === index + 1}>
                        <PaginationLink onClick={(e) => handleClickPage(index)}>
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  <PaginationItem>
                    <PaginationLink
                      last
                      onClick={(e) => setQueryPage(totalPage)}
                    />
                  </PaginationItem>
                </Pagination>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* Akhir Pagnisai */}
          <div className="row mt-5 justify-content-center">
            <div className="col-3">
              <select
                onChange={(event) => setQuerySort(event.target.value)}
                className="w-100 custom-select font-weight-normal"
              >
                {sort.map((item, index) => {
                  return (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-3">
              <select
                onChange={(event) => {
                  setQueryOrder(event.target.value);
                }}
                className="w-100 custom-select"
              >
                {order.map((item, index) => {
                  return (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-3">
              <select
                onChange={(event) => {
                  setQueryLimit(event.target.value);
                }}
                className="w-100 custom-select"
              >
                {limit.map((item, index) => {
                  return (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {role === 1 ? (
            <div className="container">
              <div className="static-bottom">
                <div className="row mt-3">
                  <div className="col-12 text-center">
                    <button
                      type="button"
                      className={`w-100 ${style["bg1"]} ${style["color1"]}`}
                      onClick={handleAddProduct}
                    >
                      Add New Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {loading &&
        Swal.fire({
          title: "Loading",
          html: "Please wait...",
          icon: "info",
          didOpen: () => {
            Swal.showLoading();
          },
        })}
      <Footer />
    </div>
  );
}

export default ProductCustomer;
