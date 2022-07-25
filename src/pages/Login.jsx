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
            
            <IonItem className='input-box' color={'white'}>
            <IonLabel position='stacked' className='input-label' color={'light'}>
                    EMAIL
            </IonLabel> 
                <IonInput placeholder='hello@propertyDealer.com' className='input' color={'light'} />
            </IonItem>
            <IonItem className='input-box' color={'white'}>
                <IonLabel className='input-label' position='stacked' color={'light'}>
                    PASSWORD
                </IonLabel>
                <IonInput placeholder='*****' className='input' color={'light'}/>
            </IonItem>
            </div>
            <IonGrid className='buttons'>
                <IonRow className='buttons-row'>
                    <IonCol>
                    <IonButton className='button' color={'light'}>Log In</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                    <IonButton className='button' color={'light'}>Create New Account</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    </IonPage>
  )
}

export default Login