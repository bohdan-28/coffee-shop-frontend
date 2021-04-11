import React, { Fragment, useState, useEffect } from "react";
import style from "./history.module.css";
import { withRouter } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
import CardHistory from '../CardHistory/CardHistory'
import { handClick } from '../../../assets/images'

const HistoryPart = (props) => {

  const Url = process.env.REACT_APP_API_URL;
  const Urlimg = process.env.REACT_APP_API_IMG;
  const token = localStorage.getItem('token');

  const [history, setHistory] = useState([])
  const [toggle, setToggle] = useState([0])

  useEffect(() => {
    getHistory(Url, token)

  }, []);

  const getHistory = (Url, token) => {
    return new Promise((resolve, reject) => {
      axios.get(`${Url}/orders/history/byid`, { headers: { authorization: `Bearer ${token}` } })
        .then((res) => {
          const newData = res.data.data.body
          setHistory(
            newData.map(d => {
              return {
                select: false,
                id: d.id,
                amount: d.amount,
                image: d.image,
                price: d.price,
                product: d.product,
                size: d.size
              };
            })
          );
          resolve(res.data.message)
        }).catch((err) => {
          reject(err)
        })
    })
  };
  const deleteHistoryById = () => {
    Swal.fire({
      title: "Are you sure you want to delete this?",
      showDenyButton: true,
      confirmButtonText: `Delete`,
      confirmButtonColor: "#6a4029",
      denyButtonText: "Cancel",
      denyButtonColor: `#ffba33`,
      focusDeny: true,
    }).then((result) => {
      if (result.isConfirmed) {
        let arrayids = [];
        history.forEach(d => {
          if (d.select) {
            arrayids.push(d.id)
          }
        });
        console.log(arrayids);
        axios
          .delete(`${Url}/orders/history/byid/${arrayids}`, { headers: { authorization: `Bearer ${token}` } })
          .then(data => {
            window.location.reload();
          })
          .catch(err => alert(err));
      } else {
        Swal.fire({
          title: "delete canceled",
          text: "",
          icon: "info",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6a4029",
        });
      }
    });
  };
    
  console.log(history);
  return (
    <Fragment>
      <div className={style.history}>
        <div className="container">
          <div className={style['head-section']}>
            <div className="arr">
              <i className={`${style.arrow} ${style.left}`}></i>
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
            <input
              type="checkbox"
              id="selectall"
              onChange={e => {
                let checked = e.target.checked;
                setHistory(
                  history.map(d => {
                    d.select = checked;
                    return d;
                  })
                )
              }} />
            <label htmlFor="selectall">Select All</label>
            <button onClick={() => deleteHistoryById()}> Delete</ button>
          </div>
          <div className={style['body-section']}>
            <h6>Last Week</h6>
            <p>Select</p>
          </div>
          <div className="row flex-wrap">
            {history.map((item, index) => {
              return <CardHistory
                image={`${Urlimg}${item.image}`}
                name={item.product}
                price={item.price}
                size={item.size}
                checked={item.select}
                onChange={(e) => {
                  let checked = e.target.checked;
                  setHistory(
                    history.map(data => {
                      if (item.id === data.id) {
                        data.select = checked;
                      }
                      return data;
                    })
                  );
                }}
                key={index} />
            })}
          </div>
        </div>
      </div>
    </Fragment >
  );
};

export default withRouter(HistoryPart);
