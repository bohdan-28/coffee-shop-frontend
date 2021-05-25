import AsideLeft from './AsideLeft'
import AsideRight from './AsideRight'
import { React, Fragment } from "react";
import style from './newpromo.module.css'

export default function NewProduct() {
    const handleChangePicture = (e) => {
        console.log(e.target.files[0]);
        // this.setState({
        //     insert: e.target.files[0].name,
        //     image: URL.createObjectURL(e.target.files[0]),
        //     selectedFile: e.target.files[0]
        // })
    }

    return (
        <Fragment>
            <div className="container">
                <div className={style['product-detail']}>
                    {/* Ini untuk info navigasi */}
                    <p className={style['title-route']}>Favorite & Promo <span>/Add New Promo </span> </p>
                    <div className="row">
                        <div className="col-lg-5 pt-5">
                            <AsideLeft
                                changePicture={handleChangePicture}
                            />

                        </div>
                        <div className="col-lg-7 pt-5">
                            <AsideRight />

                        </div>
                    </div>
                </div>

            </div>

        </Fragment>
    );
}