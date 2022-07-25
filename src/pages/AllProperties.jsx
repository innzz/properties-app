import { IonButton, IonPage, IonIcon, IonItem, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import React from 'react';
import './AllProperties.css';
import {arrowForwardOutline} from 'ionicons/icons'

function AllProperties() {
  return (
    <IonPage className='main-container ion-text-center'>
        <div className='top-content'>
        <IonItem className='button' color={'white'}>
            <span>Poperties</span>
            <IonIcon slot='end' icon={arrowForwardOutline} />
        </IonItem>
        <IonGrid className='top-content-cards'>
            <IonRow>
                <IonCol className='card-col'>
                    <IonCard className='card'>
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image" />
                        <span className='price-badge'>$239k</span>
                    </IonCard>
                </IonCol>
                <IonCol className='card-col'>
                    <IonCard className='card'>
                        <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image" />
                        <span className='price-badge'>$239k</span>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
        <h3 className='best-price ion-text-left'>Best Price</h3>
        <IonGrid className='bottom-content-cards'>
        <IonRow className='bottom-card'>
                <IonCol className='bottom-card-image-col'>
                    <IonCard className='card'>
                        <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image" />
                    </IonCard>
                </IonCol>
                <IonCol className='bottom-card-heading-col'>
                <IonCardHeader className='bottom-card-headers ion-text-left'>
                                <IonCardTitle className='bottom-card-title' color={'black'}>
                                    House Fore Sale!
                                </IonCardTitle>
                                <IonCardSubtitle className='bottom-card-subTitle'>
                                    4 Rooms, 2 Bathrooms <br/>
                                    1200 sq fit
                                </IonCardSubtitle>
                            </IonCardHeader>
                </IonCol>
        </IonRow>
        <IonRow className='bottom-card'>
                <IonCol className='bottom-card-image-col'>
                    <IonCard className='card'>
                        <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image" />
                    </IonCard>
                </IonCol>
                <IonCol className='bottom-card-heading-col'>
                <IonCardHeader className='bottom-card-headers ion-text-left'>
                                <IonCardTitle className='bottom-card-title' color={'black'}>
                                    House Fore Sale!
                                </IonCardTitle>
                                <IonCardSubtitle className='bottom-card-subTitle'>
                                    4 Rooms, 2 Bathrooms <br/>
                                    1200 sq fit
                                </IonCardSubtitle>
                            </IonCardHeader>
                </IonCol>
        </IonRow>
        <IonRow className='bottom-card'>
                <IonCol className='bottom-card-image-col'>
                    <IonCard className='card'>
                        <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image" />
                    </IonCard>
                </IonCol>
                <IonCol className='bottom-card-heading-col'>
                <IonCardHeader className='bottom-card-headers ion-text-left'>
                                <IonCardTitle className='bottom-card-title' color={'black'}>
                                    House Fore Sale!
                                </IonCardTitle>
                                <IonCardSubtitle className='bottom-card-subTitle'>
                                    4 Rooms, 2 Bathrooms <br/>
                                    1200 sq fit
                                </IonCardSubtitle>
                            </IonCardHeader>
                </IonCol>
        </IonRow>
        <IonRow className='bottom-card'>
                <IonCol className='bottom-card-image-col'>
                    <IonCard className='card'>
                        <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image" />
                    </IonCard>
                </IonCol>
                <IonCol className='bottom-card-heading-col'>
                <IonCardHeader className='bottom-card-headers ion-text-left'>
                                <IonCardTitle className='bottom-card-title' color={'black'}>
                                    House Fore Sale!
                                </IonCardTitle>
                                <IonCardSubtitle className='bottom-card-subTitle'>
                                    4 Rooms, 2 Bathrooms <br/>
                                    1200 sq fit
                                </IonCardSubtitle>
                            </IonCardHeader>
                </IonCol>
        </IonRow>
        <IonRow className='bottom-card'>
                <IonCol className='bottom-card-image-col'>
                    <IonCard className='card'>
                        <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image" />
                    </IonCard>
                </IonCol>
                <IonCol className='bottom-card-heading-col'>
                <IonCardHeader className='bottom-card-headers ion-text-left'>
                                <IonCardTitle className='bottom-card-title' color={'black'}>
                                    House Fore Sale!
                                </IonCardTitle>
                                <IonCardSubtitle className='bottom-card-subTitle'>
                                    4 Rooms, 2 Bathrooms <br/>
                                    1200 sq fit
                                </IonCardSubtitle>
                            </IonCardHeader>
                </IonCol>
        </IonRow>
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