import React, { Fragment, useState } from "react";
import style from "./history.module.css";
import { withRouter } from "react-router-dom";
import Swal from 'sweetalert2'
import CardHistory from '../CardHistory/CardHistory'
import { handClick } from '../../../assets/images'

const HistoryPart = (props) => {
  // const [checked, setChecked] = useState(false)
  // const [isSelected, setisSelected] = useState(false)
  

  // const deleteValidation = () => {
  //   if (isSelected == false) {
  //     setisSelected(true);
  //   } 
  //   return isSelected;
  // }

  return (
    <Fragment>
      <div className={style.history}>
        <div className="container">
          <div className={style['head-section']}>
            <div className="arr">
              <i class={`${style.arrow} ${style.left}`}></i>
            </div>
            <h5>Order History</h5>
          </div>
          <div className="classtitle">
            <p className={style['title-history']}>Let’s see what you have bought!</p>
            <p className={style['sub-title-history']}><span className={style.handimg}><img src={handClick} alt="" /></span> Select item to delete</p>
          </div>
          {/* {!isSelected ?
            <p className={style.selectAll}>Select All</p> :
            <p className={style.selectAll}>Delete</p>
          } */}
          <div className={style.checkbox}>
            <input type="checkbox" id="selectall" />
            <label htmlFor="selectall">Select All</label>
          </div>
          <div className={style['body-section']}>
            <h6>Last Week</h6>
            <p>Select</p>
          </div>
          <div className="row flex-wrap">
            <CardHistory />
            <CardHistory />
          </div>
        </div>
      </div>
    </Fragment >
  );
};

export default withRouter(HistoryPart);
