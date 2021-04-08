import CardDelivery from './CardDelivery'
import AsideRight from './AsideRight'
import { React, Fragment } from "react";
import style from './ProductDetail.module.css'
import CardCheckout from './CardCheckout';

export default function DetailProduct() {
    return (
        <Fragment>
            <div className="container">
                <div className={style['product-detail']}>
                    {/* Ini untuk info navigasi, coldBrew dari product yg di klik */}
                    <p className={style['title-route']}>Favorite & Promo <span>/Cold Brew </span> </p>
                    <div className="row">
                        <div className="col-lg-6 pt-5">
                            <CardDelivery />
                        </div>
                        <div className="col-lg-6 pt-5">
                            <AsideRight />
                        </div>
                    </div>
                    <CardCheckout />

                </div>

            </div>

        </Fragment>
    );
}