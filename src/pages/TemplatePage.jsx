import React from 'react'
import { Fragment } from 'react';
import { Button, Card, CardDescription, Image, Icon } from 'semantic-ui-react'
import styles from "../styles/template.module.scss";
import Head from 'next/head'




const Templates = () => (

    <Fragment>
      <Head>
        <title>TemplatePage</title>
        <meta name='description' content='Customize your Card' />
      </Head>
        <div className={styles.head}>
            <h1>Choose Templates:</h1>
        </div>

        <div className="col-md-20 p-5">
            <div className={styles.card}>

                <Card.Group>
                    <div className='ui three stackable cards'>
                        <Card color="blue">
                            <Card.Content>
                                <Image
                                    floated='left'
                                    width={50}
                                    height={50}
                                    size='circular'
                                    src='https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg'
                                />
                                <div>
                                    <Image
                                        floated='right'
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
                                <div className='ui two buttons'>
                                    <form action="/custom-card">
                                    <Button inverted color='blue' floated='right' animated>
                                        <Button.Content visible>Edit</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='edit' />
                                        </Button.Content>
                                    </Button>
                                    </form>
                                </div>
                            </Card.Content>
                        </Card>

                        <Card color="blue">
                            <Card.Content>
                                <Image
                                    floated='right'
                                    width={150}
                                    height={150}
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
                                    </div>
                                </CardDescription>
                                <div className={styles.desc}>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><Icon name='mail' />name@email.com</li>
                                        <li class="list-group-item"><Icon name='phone square' />(123)-987-5400</li>
                                        <li class="list-group-item"><Icon name='browser' />abc.com</li>
                                        <li class="list-group-item"><Icon name='map marker alternate' /> 123 Main Street, Vancouver</li>
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
                                <div className='ui two buttons'>
                                <form action="/custom-card">
                                    <Button inverted color='blue' floated='right' animated>
                                        <Button.Content visible>Edit</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='edit' />
                                        </Button.Content>
                                    </Button>
                                    </form>

                                </div>
                            </Card.Content>
                        </Card>

                        <Card color="blue">
                            <Card.Content>
                                <Card.Header>
                                    <Image
                                        floated='center'
                                        width={300}
                                        height={150}
                                        size='square'
                                        src='https://cdn.dribbble.com/users/2685035/screenshots/10812974/school_4x.jpg'
                                    />
                                </Card.Header>
                                <Card.Header>
                                    <Image
                                        floated='center'
                                        size='medium circular'
                                    />
                                </Card.Header>
                                <CardDescription>
                                    <div style={{ position: "absolute", bottom: 80 }}>
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
                                    <Image
                                        floated='right'
                                        size='square'
                                        bordered='solid'
                                        width={200}
                                        height={200}
                                        src='https://us.123rf.com/450wm/klauts/klauts1007/klauts100700010/7319401-cute-illustration-of-a-smiling-woman.jpg?ver=6'
                                    />

                                </Card.Header>

                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                <form action="/custom-card">
                                    <Button inverted color='blue' floated='right' animated>
                                        <Button.Content visible>Edit</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='edit' />
                                        </Button.Content>
                                    </Button>
                                    </form>

                                </div>
                            </Card.Content>
                        </Card>
                    </div>
                </Card.Group>
            </div>
        </div>
    </Fragment>
)


export default Templates