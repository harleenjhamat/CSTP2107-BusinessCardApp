import React from 'react'
import {Fragment} from 'react';
import { Button, Card, CardDescription, Image, Icon} from 'semantic-ui-react'
import styles from "../styles/template.module.scss";
import Navbar from "./../components/Navbar";



const Templates = () => (

    
 <Fragment>
    <Navbar />
   <div className={styles.head}>
       <h1>View Templates:</h1>
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
                            src= 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg'
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
                                <div style={{position:"absolute", bottom: 60}}>
                                    <strong>BOB PANCAKES</strong><br></br>
                                    (123)-456-7890 <br></br>
                                    business@gmail.com
                                </div>
                               
                            </CardDescription>
                    </Card.Content>

                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button inverted color='blue' floated='right' animated>
                                    <Button.Content visible>Edit</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='edit'/>
                                    </Button.Content>
                                </Button>
                            
                            </div>
                        </Card.Content>
                    </Card>
        
                <Card color="blue">
                <Card.Content>
                        <Image
                        floated='left'
                        width={50}
                        height={50}
                        size='circular'
                        src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c7iB2K0JiS3ZzBAgNlWa9qpFN3MXRnWcgUicSetkPNTXCDLUVihPrKcn3j4qlBD07Jw&usqp=CAU'
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
                    <div style={{position:"absolute", bottom: 60}}>
                        <strong>BOB PANCAKES</strong><br></br>
                        (123)-456-7890 <br></br>
                        business@gmail.com
                    </div>
                    </CardDescription>
                </Card.Content>
                <br></br>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button inverted color='blue' floated='right' animated>
                        <Button.Content visible>Edit</Button.Content>
                        <Button.Content hidden>
                            <Icon name='edit'/>
                        </Button.Content>
                    </Button>
                    
                    </div>
                </Card.Content>
                </Card>
            
                <Card color="blue">
                <Card.Content>
                        <Image
                        floated='left'
                        width={50}
                        height={50}
                        size='circular'
                        src= 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-user-profile-vector-png-image_4830519.jpg'
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
                    <div style={{position:"absolute", bottom: 60}}>
                        <strong>BOB PANCAKES</strong><br></br>
                        (123)-456-7890 <br></br>
                        business@gmail.com
                    </div>
                    </CardDescription>
                </Card.Content>
                <br></br>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button inverted color='blue' floated='right' animated>
                        <Button.Content visible>Edit</Button.Content>
                        <Button.Content hidden>
                            <Icon name='edit'/>
                        </Button.Content>
                    </Button>
                    
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