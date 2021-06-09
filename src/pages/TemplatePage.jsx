import React from 'react'
import { Fragment } from 'react';
import { Button, Card, CardDescription, Image, Icon } from 'semantic-ui-react'
import styles from "../styles/template.module.scss";
import Head from 'next/head'

const Templates = () => (

    <div className={styles.page}>
      <Head>
        <title>TemplatePage</title>
        <meta name='description' content='Customize your Card'/>
      </Head>
        <div className={styles.head}>
            <h1>Choose Templates:</h1>
        </div>

        <div className="col-md-20 p-5">
            <div className={styles.cblock}>

                <Card.Group>
                    <div className='ui three stackable cards'> 
                        <span className={styles.Card1}>
                        <Card color='blue'>
                            <Card.Content>
                                <img className={styles.img}
                                    floated='right'
                                    width={50}
                                    height={50}
                                    size='circular'
                                    src='https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg'
                                />
                                <div>
                                    <Image
                                        floated='left'
                                        size='circular'
                                        width={80}
                                        height={30}
                                        src='/assets/logo2.png'
                                    />
                                </div>
                                <Card.Header>
                                    <Image
                                        floated='center'
                                        size='medium circular'
                                        src='https://image.freepik.com/free-vector/business-logo-design_1057-540.jpg'
                                    />
                                </Card.Header>
                                <CardDescription>
                                    <div style={{ position: "absolute", bottom: 60 }}>
                                        <strong>BOB PANCAKES</strong><br></br>
                                    (123)-456-7890 <br></br>
                                    business@gmail.com
                                </div>

                                </CardDescription>
                            </Card.Content>

                            <Card.Content extra>
                            <form action="/custom-card">
                                <div className='ui two buttons'>  
                                    <Button inverted color='blue' animated>
                                        <Button.Content visible>Edit</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='edit' />
                                        </Button.Content>
                                    </Button>   
                                </div>
                            </form>
                            </Card.Content>
                        </Card>
                        </span>
                        <span className={styles.Card2}>
                        <Card color="blue">
                            <Card.Content>
                                <img className={styles.img}
                                    width={100}
                                    height={120}
                                    size='circular'
                                    src='https://wishesonlinedatingsecrets.club/wp-content/uploads/dsp_media/user_photos/user_47/47_white%20girl%20with%20black%20hair%20.png'
                                />
                                <div> 
                                    <Image
                                        floated='left'
                                        size='square'
                                        width={130}
                                        height={80}
                                        src='https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg'
                                    />
                                </div>
                                <Card.Header>
                                    <Image
                                        floated='center'
                                        size='medium circular'
                                    />
                                    <h1 style={{ position: "absolute", top: 60 }}>Elisa Smith</h1>
                                </Card.Header>
                                <CardDescription>
                                    <div style={{ position: "absolute", top: 120 }}>
                                        Art Director
                                    </div><br></br>
                                </CardDescription>
                                <div className={styles.desc}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><Icon name='mail' />name@email.com</li>
                                        <li className="list-group-item"><Icon name='phone square' />(123)-987-5400</li>
                                        <li className="list-group-item"><Icon name='browser' />abc.com</li>
                                        <li className="list-group-item"><Icon name='map marker alternate' /> 123 Main Street, Vancouver</li>
                                    </ul>
                                </div>
                                <div style={{ position: "absolute", bottom: 60 }}>
                                    <Image
                                        floated='left'
                                        size='circular'
                                        width={80}
                                        height={30}
                                        src='/assets/logo2.png'
                                    />
                                </div>

                            </Card.Content>
                            <br></br>
                            <Card.Content extra>
                            <form action="/custom-card">
                                <div className='ui two buttons'>  
                                    <Button inverted color='blue' animated>
                                        <Button.Content visible>Edit</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='edit' />
                                        </Button.Content>
                                    </Button>   
                                </div>
                            </form>
                            </Card.Content>
                        </Card>
                        </span>
                        <span className= {styles.Card3}>
                        <Card color="blue">
                            <Card.Content>
                                <Card.Header>
                                    <Image
                                        floated='center'
                                        width={300}
                                        height={130}
                                        size='square'
                                        src='https://cdn.dribbble.com/users/2685035/screenshots/10812974/school_4x.jpg'
                                    />
                                </Card.Header>
    
                                <CardDescription>
                                    <div style={{ position: "absolute", bottom: 60 }}>
                                        Name: <br></br>
                                        <strong>Last, First Name</strong><br></br><br></br>
                                        Student ID: <br></br>
                                        <strong>123456789</strong><br></br><br></br>
                                        Date of Birth:<br></br>
                                        <strong>01-Aug-2000</strong><br></br><br></br>
                                        Joining:<br></br>
                                        <strong>May,2020</strong><br></br>
                                    </div>
                                </CardDescription>
                                <Card.Header>
                                    <img className={styles.img}
                                        width={150}
                                        height={186}
                                        src='https://us.123rf.com/450wm/klauts/klauts1007/klauts100700010/7319401-cute-illustration-of-a-smiling-woman.jpg?ver=6'
                                    />

                                </Card.Header>

                            </Card.Content>
                            <Card.Content extra>
                            <form action="/custom-card">
                                <div className='ui two buttons'>  
                                    <Button inverted color='blue' animated>
                                        <Button.Content visible>Edit</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='edit' />
                                        </Button.Content>
                                    </Button>   
                                </div>
                            </form>
                            </Card.Content>
                        </Card>
                        </span>
                    </div>
                </Card.Group>   
              
            
            </div>
        </div>
    </div>
)


export default Templates