import React from 'react';
import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonPage, IonRow} from '@ionic/react';
import './ForgotPass.css'

function ForgotPass() {
  return (
    <IonPage className='main-container ion-text-center'>
        <div className="headings">
        <h1>Forgot Password</h1>
        <h4>New Password</h4>
        </div>
        <div className="content">
            <div className="inputs ion-text-start">
            <IonItem className='input-box' color={'white'}>
            <IonLabel position='stacked' className='input-label' color={'light'}>
                    EMAIL
            </IonLabel> 
                <IonInput placeholder='hello@propertyDealer.com' className='input' color={'light'} />
            </IonItem>
            </div>
            <IonGrid className='buttons'>
                <IonRow className='buttons-row'>
                    <IonCol>
                    <IonButton className='button' color={'light'}>Send</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    </IonPage>
  )
}

export default ForgotPass;