import { Fragment } from 'react';
import styles from "@/styles/sharedcard.module.scss";

var row_center = `row m-0 p-0 justify-content-center`
var row_default = `row m-0 p-0`
var col = `text-center m-0 p-0`

const SearchCard = () => (
    <Fragment>
    <div className={`${row_center}`}>
        <div className={`${col} col-12`}>
            <div className={`${row_default} justify-content-between my-4`}>
                <div className={`${col} col-12 col-md-8 mb-2`}>
                    <input type="text" className={`form-control`} />
                </div>
                <div className={`${col} col-12 col-md-3 mb-2 d-grid`}>
                    <button className={`${styles.button}`}>Search</button>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
)


export default SearchCard
