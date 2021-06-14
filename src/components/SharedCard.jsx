import { Fragment } from 'react';
import styles from "@/styles/sharedcard.module.scss";

var row_center = `row m-0 p-0 justify-content-center`
var row_default = `row m-0 p-0`
var col = `text-center m-0 p-0`
const SharedCard = () => (
    <Fragment>
        {/* container */}
        <div className={`${col} col-12 col-md-6`}>
            <div className={`${row_center}`}>
                {/* gap */}
                <div className={`${col} col-12 col-md-11`}>
                    <div className={`${row_center}`}>
                        <div className={`${col} col-12`}>
                            <img src="/assets/choose_template.jpg" className={`${styles.fitimg} figure-img img-fluid rounded`} alt="..."/>
                        </div>
                    </div> 
                    <div className={`${row_default} justify-content-between mb-5`}>
                        <div className={`${col} col-12 col-md-5 mt-3 d-grid`}>
                            <button className={`${styles.button}`}>Remove</button>
                        </div>
                        <div className={`${col} col-12 col-md-5 mt-3 d-grid`}>
                            {/* <button className={`btn btn-secondary`}>Edit</button> */}
                        </div>
                    </div>  
                </div>  
            </div>  
        </div>  
    </Fragment>
)


export default SharedCard
