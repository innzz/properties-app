import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonPage, IonRow} from '@ionic/react';
import React from 'react';
import './Login.css'

function Login() {
  return (
    <IonPage className='main-container ion-text-center'>
        <div className="headings">
        <h1>Login</h1>
        <h4>Sign in to continue.</h4>
        </div>
        <div className="content">
            <div className="inputs ion-text-start">
            
            <IonItem className='input-box' lines='none' color={'white'}>
            <IonLabel position='stacked' className='input-label' >
                    EMAIL
            </IonLabel> 
                <IonInput placeholder='hello@propertyDealer.com' className='input' />
            </IonItem>
            <IonItem className='input-box' lines='none' color={'white'}>
                <IonLabel className='input-label' position='stacked' >
                    PASSWORD
                </IonLabel>
                <IonInput placeholder='*****' className='input' />
            </IonItem>
            </div>
            <IonGrid className='buttons'>
                <IonRow className='buttons-row'>
                    <IonCol>
                    <IonButton className='button'  >Log In</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                    <IonButton className='button' >Create New Account</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    </IonPage>
  )
}

export default Login