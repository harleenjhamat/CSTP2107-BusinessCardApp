import { Fragment } from 'react';
import styles from "../styles/sharedcard.module.scss";

var row_center = `row m-0 p-0 justify-content-center`
var row_default = `row m-0 p-0`
var col = `text-center m-0 p-0`
const UserCard = () => (
    <Fragment>
        <div className={`${row_center}`}>
            <div className={`${col} col-12`}>
                <div className={`${row_center}`}>
                    <div className={`${col} col-12`}>
                        <img src="/assets/choose_template.jpg" className={`${styles.fitimg} figure-img img-fluid rounded`} alt="..."/>
                    </div>
                </div> 
                <div className={`${row_default} mb-5 justify-content-between`}>
                    <div className={`${col} col-12 col-md-5 mt-3 d-grid`}>
                        <button className={`${styles.button}`}>Share</button>
                    </div>
                    <div className={`${col} col-12 col-md-5 mt-3 d-grid`}>
                        <button className={`${styles.button}`}>Edit</button>
                    </div>
                </div>  
            </div>  
        </div>  
    </Fragment>
)


export default UserCard
