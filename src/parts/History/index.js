import React, { Fragment } from "react";
import style from "./history.module.css";
// import Button from "../../components/Button";
import { withRouter } from "react-router-dom";

const HistoryPart = (props) => {



  return (
    <Fragment>
      <div className={style.history}>
        <div className="container">

          <p className={style['title-history']}>Let’s see what you have bought!</p>
          <p className={style['sub-title-history']}>Select item to delete</p>
          <p className={style.selectAll}>Select All</p>

          <div className="row flex-wrap">
            <div className={style['history-card']}>
              <div className="d-flex">
                <img className={style['img-product']} src="http://www.southsoundtalk.com/wp-content/uploads/2019/11/Coffee-ander-Latte-e1573143205948.jpg" alt="" />
                <div className="pl-3 ">
                  <p className={style['title-History']}>Veggie tomato mix</p>
                  <p className={style['price-history']}>IDR 34.000</p>
                  <p className={style.status}>Delivered</p>
                </div>
                <input className={style.checkbox} id="deleteHistory" type="checkbox"></input>
              </div>
            </div>
            <div className={style['history-card']}>
              <div className="d-flex">
                <img className={style['img-product']} src="http://www.southsoundtalk.com/wp-content/uploads/2019/11/Coffee-ander-Latte-e1573143205948.jpg" alt="" />
                <div className="pl-3 ">
                  <p className={style['title-History']}>Veggie tomato mix</p>
                  <p className={style['price-history']}>IDR 34.000</p>
                  <p className={style.status}>Delivered</p>
                </div>
                <input className={style.checkbox} id="deleteHistory" type="checkbox"></input>
              </div>
            </div>
            <div className={style['history-card']}>
              <div className="d-flex">
                <img className={style['img-product']} src="http://www.southsoundtalk.com/wp-content/uploads/2019/11/Coffee-ander-Latte-e1573143205948.jpg" alt="" />
                <div className="pl-3 ">
                  <p className={style['title-History']}>Veggie tomato mix</p>
                  <p className={style['price-history']}>IDR 34.000</p>
                  <p className={style.status}>Delivered</p>
                </div>
                <input className={style.checkbox} id="deleteHistory" type="checkbox"></input>
              </div>
            </div>


          </div>
        </div>

      </div>
    </Fragment>
  );
};

export default withRouter(HistoryPart);
