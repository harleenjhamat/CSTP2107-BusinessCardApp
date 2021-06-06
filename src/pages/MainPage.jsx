import { Fragment } from 'react';
import styles from "../styles/mainpage.module.scss";
import Image from "next/image";


const MainPage = () => (

    <Fragment>
        <br></br>
        { /*Search Cards*/ }

        <div className={ styles.container }>
            <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                <span>
                    <button className={` ${styles.searchbutton} `}>
                    <Image
                        src="/assets/search2.png"
                        alt="search icon"
                        width={20}
                        height={20}
                    />
                    </button>
                </span>
            </div>
            <br></br>

            {/*Dropdown to see Cards*/}
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        My Own Card  
                            <div >
                                <a className={ styles.dropdownContainer } href="http://localhost:3000/TemplatePage">
                                    <Image 
                                        src="/assets/add-card.png"
                                        alt="add icon"
                                        width={40}
                                        height={40}
                                        className={ styles.AddCardButton }
                                    />
                                </a>
                            </div>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">

                    {/*Display user's own card*/}


                    {/*Share & Delete Card*/}
                    <div className={styles.buttonContainer}>
                        <button className={styles.MyOwnCardButtonShare}> 
                            <Image
                                src="/assets/share.png"
                                alt="share icon"
                                width={30}
                                height={30}
                            />
                        </button>
                        
                        <button className={styles.MyOwnCardButtonDelete}>
                            <Image
                                src="/assets/deleteCard.png"
                                alt="share icon"
                                width={30}
                                height={30}
                                quality="high"
                            />
                        </button>
                    </div>
                    </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Group 1
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Group 2
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                
                
            </div>
        </div>

        {/* Add New Group */}
        <div className={ styles.container }>
            <button className={styles.button}> + + Add New Group + + </button>
        </div>
        
    </Fragment>
)


export default MainPage
