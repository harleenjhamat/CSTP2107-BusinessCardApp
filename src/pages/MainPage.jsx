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

            {/*Dropdown */}
            <div className="accordion" id="accordionExample">
                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button ${styles.dropdownContainer}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            My Own Card  
                            <div >
                                <a href="/">
                                    <Image 
                                        src="/assets/editGroupName.png"
                                        alt="Edit Group Name"
                                        width={30}
                                        height={30} 
                                    />
                                </a>
                                <a href="http://localhost:3000/TemplatePage">
                                    <Image 
                                        src="/assets/add-card.png"
                                        alt="Create Card"
                                        width={40}
                                        height={40}         
                                    />
                                </a>
                            </div>
                        </button>
                    </h2>

                    {/*Display user's own card*/}
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">                   
                    <div className={ styles.CardDisplay }>
                        <a href="http://localhost:3000/custom-card">
                        <Image
                            src="/assets/card1.png"
                            alt="Create Card"
                            width={500}
                            height={300}
                            className={ styles.CardDisplay }
                            
                        />
                        </a>
                    </div>

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
                                alt="Delete icon"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>
                    </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className={`accordion-button collapsed ${styles.dropdownContainer}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Group 1
                        <div >
                            <a href="/">
                                <Image 
                                    src="/assets/editGroupName.png"
                                    alt="Edit Group Name"
                                    width={30}
                                    height={30} 
                                    />
                            </a>
                            <a href="http://localhost:3000/TemplatePage">
                                <Image 
                                    src="/assets/add-card.png"
                                    alt="Create Card"
                                    width={40}
                                    height={40}         
                                />
                            </a>
                        </div>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <div className={ styles.CardDisplay }>
                        <Image
                            src="/assets/card1.png"
                            alt="Create Card"
                            width={500}
                            height={300}
                            className={ styles.CardDisplay }
                        />
                    </div>

                    {/*Share & Delete Card*/}
                    <div >

                        <button className={styles.GroupButtonDelete}>
                            Delete Card<Image
                                src="/assets/deleteCard.png"
                                alt="Delete icon"
                                width={30}
                                height={30}
                            />
                        </button>

                        <button className={styles.GroupButtonDelete}>
                            Delete Group<Image
                                src="/assets/deleteCard.png"
                                alt="Delete icon"
                                width={30}
                                height={30}
                            />
                        </button>

                    </div>
                    
                    </div>
                    </div>
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className={`accordion-button collapsed ${styles.dropdownContainer}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Group 2
                        <div >
                            <a href="/">
                                <Image 
                                    src="/assets/editGroupName.png"
                                    alt="Edit Group Name"
                                    width={30}
                                    height={30} 
                                    />
                            </a>
                            <a href="http://localhost:3000/TemplatePage">
                                <Image 
                                    src="/assets/add-card.png"
                                    alt="Create Card"
                                    width={40}
                                    height={40}         
                                />
                            </a>
                        </div>
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <div className={ styles.CardDisplay }>
                        <Image
                            src="/assets/card1.png"
                            alt="Create Card"
                            width={500}
                            height={300}
                            className={ styles.CardDisplay }
                        />
                    </div>

                    {/*Share & Delete Card*/}
                    <div >

                        <button className={styles.GroupButtonDelete}>
                            Delete Card<Image
                                src="/assets/deleteCard.png"
                                alt="Delete icon"
                                width={30}
                                height={30}
                            />
                        </button>

                        <button className={styles.GroupButtonDelete}>
                            Delete Group<Image
                                src="/assets/deleteCard.png"
                                alt="Delete icon"
                                width={30}
                                height={30}
                            />
                        </button>

                    </div>
                        
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
