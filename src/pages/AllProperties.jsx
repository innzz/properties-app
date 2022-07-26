import { IonButton, IonPage, IonIcon, IonItem, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg } from '@ionic/react';
import React from 'react';
import './AllProperties.css';
import { arrowForwardOutline } from 'ionicons/icons'
import { Link } from 'react-router-dom';

function AllProperties() {
    return (
        <IonPage className='main-container ion-text-center'>
            <div className="upper-content">
                <IonImg className='background-image' src='/Home_Page.svg' />
                <div className="upper-content-inner-container">
                    <Link to={"/home"}>
                        <IonImg className='logo' src="/Logo.svg" alt="" />
                    </Link>
                    <div className="upper-content-headings">
                        <h1>Find Your</h1>
                        <h2>Dream House</h2>
                        <h4>Get free consultation today!</h4>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <Link to={"/propertiesforrent"}>
                                        <IonButton className='button1'>For Rent</IonButton>
                                    </Link>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <Link to={"/propertiesforsale"}>
                                        <IonButton className='button4'>For Buying</IonButton>
                                    </Link>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </div>
                </div>
            </div>
            <div className='top-content'>
                <IonItem className='button' color={'white'}>
                    <span>Poperties</span>
                    <IonIcon slot='end' className='icon' icon={arrowForwardOutline} />
                </IonItem>
                <IonGrid className='top-content-cards'>
                    <IonRow>
                        <IonCol className='card-col'>
                            <Link to={'/checkout'}>
                            <IonCard className='card'>
                                <IonImg className='img' src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />

                                {/* <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image1" /> */}
                                <span className='price-badge'>$239k</span>
                            </IonCard>
                            </Link>
                        </IonCol>
                        <IonCol className='card-col'>
                            <Link to={'/checkout'}>
                            <IonCard className='card'>
                                <IonImg className='img' src='https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
                                {/* <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image1" /> */}
                                <span className='price-badge'>$239k</span>
                            </IonCard>
                            </Link>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <h3 className='best-price ion-text-left'>Best Price</h3>
                <IonGrid className='bottom-content-cards'>
                    <Link to={'/checkout'}>
                    <IonRow className='bottom-card'>
                        <IonCol className='bottom-card-image-col'>
                            <IonCard className='card'>
                                <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image1" />
                            </IonCard>
                        </IonCol>
                        <IonCol className='bottom-card-heading-col'>
                            <IonCardHeader className='bottom-card-headers ion-text-left'>
                                <IonCardTitle className='bottom-card-title' color={'black'}>
                                    House Fore Sale!
                                </IonCardTitle>
                                <IonCardSubtitle className='bottom-card-subTitle'>
                                    4 Rooms, 2 Bathrooms <br />
                                    1200 sq fit
                                </IonCardSubtitle>
                            </IonCardHeader>
                        </IonCol>
                    </IonRow>
                    <IonRow className='bottom-card'>
                        <IonCol className='bottom-card-image-col'>
                            <IonCard className='card'>
                                <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image1" />
                            </IonCard>
                        </IonCol>
                        <IonCol className='bottom-card-heading-col'>
                            <IonCardHeader className='bottom-card-headers ion-text-left'>
                                <IonCardTitle className='bottom-card-title' color={'black'}>
                                    House Fore Sale!
                                </IonCardTitle>
                                <IonCardSubtitle className='bottom-card-subTitle'>
                                    4 Rooms, 2 Bathrooms <br />
                                    1200 sq fit
                                </IonCardSubtitle>
                            </IonCardHeader>
                        </IonCol>
                    </IonRow>
                    <IonRow className='bottom-card'>
                        <IonCol className='bottom-card-image-col'>
                            <IonCard className='card'>
                                <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image1" />
                            </IonCard>
                        </IonCol>
                        <IonCol className='bottom-card-heading-col'>
                            <IonCardHeader className='bottom-card-headers ion-text-left'>
                                <IonCardTitle className='bottom-card-title' color={'black'}>
                                    House Fore Sale!
                                </IonCardTitle>
                                <IonCardSubtitle className='bottom-card-subTitle'>
                                    4 Rooms, 2 Bathrooms <br />
                                    1200 sq fit
                                </IonCardSubtitle>
                            </IonCardHeader>
                        </IonCol>
                    </IonRow>
                    <IonRow className='bottom-card'>
                        <IonCol className='bottom-card-image-col'>
                            <IonCard className='card'>
                                <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image1" />
                            </IonCard>
                        </IonCol>
                        <IonCol className='bottom-card-heading-col'>
                            <IonCardHeader className='bottom-card-headers ion-text-left'>
                                <IonCardTitle className='bottom-card-title' color={'black'}>
                                    House Fore Sale!
                                </IonCardTitle>
                                <IonCardSubtitle className='bottom-card-subTitle'>
                                    4 Rooms, 2 Bathrooms <br />
                                    1200 sq fit
                                </IonCardSubtitle>
                            </IonCardHeader>
                        </IonCol>
                    </IonRow>
                    <IonRow className='bottom-card'>
                        <IonCol className='bottom-card-image-col'>
                            <IonCard className='card'>
                                <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image1" />
                            </IonCard>
                        </IonCol>
                        <IonCol className='bottom-card-heading-col'>
                            <IonCardHeader className='bottom-card-headers ion-text-left'>
                                <IonCardTitle className='bottom-card-title' color={'black'}>
                                    House Fore Sale!
                                </IonCardTitle>
                                <IonCardSubtitle className='bottom-card-subTitle'>
                                    4 Rooms, 2 Bathrooms <br />
                                    1200 sq fit
                                </IonCardSubtitle>
                            </IonCardHeader>
                        </IonCol>
                    </IonRow>
                    </Link>
                </IonGrid>
                <div>
                    <IonButton className='browseMore-button'>
                        Browse More
                    </IonButton>
                </div>
            </div>
        </IonPage>
    )
}

export default AllProperties