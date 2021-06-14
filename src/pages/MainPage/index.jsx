import { Fragment } from 'react';
import styles from "@/styles/mainpage.module.scss";
import Scrollme from './../../components/Scrollme';
import UserCard from './../../components/UserCard';
import SearchCard from './../../components/SearchCard';
import SharedCard from './../../components/SharedCard';

var row_center = `row m-0 p-0 justify-content-center`
var row_default = `row m-0 p-0`
var col = `text-center m-0 p-0`

const MainPage = () => (
    <Fragment>
       <div className={`container-fluid m-0 p-0 mt-5`}>
            <div className={`row m-0 p-0 mx-2 justify-content-center`}>
                <div className={`col-12 col-md-4 text-center border-end`}>
                    <h1>Your Card</h1>
                    {/*<SearchCard/>*/}
                    <UserCard/>
                </div>
                <div className={`col-12 col-md-8 text-center`}>
                    <h1>Shared With You</h1>
                    <div className={`${row_center}`}>
                        <div className={`${col} col-11`}>
                            <SearchCard/>
                        </div>
                    </div>
                    <div className={`${row_default} justify-content-between`}>
                        <SharedCard/>
                        <SharedCard/>
                        <SharedCard/>
                        <SharedCard/>
                    </div>
                </div>
                <Scrollme/>
            </div>
       </div>
    </Fragment>
)

export default MainPage
