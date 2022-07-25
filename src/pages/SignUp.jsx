import React from 'react';
import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonPage, IonRow} from '@ionic/react';
import './SignUp.css'

function SignUp() {
  return (
    <IonPage className='main-container ion-text-center'>
        <div className="headings">
        <h1>Create New Account</h1>
        <h4>Already Registered? Log in here.</h4>
        </div>
        <div className="content">
            <div className="inputs ion-text-start">
            
            <IonItem className='input-box'  lines="none">
            <IonLabel position='stacked' className='input-label' >
                    NAME
            </IonLabel> 
                <IonInput placeholder='INZAMAM' className='input'  />
            </IonItem>
            <IonItem className='input-box'   lines="none">
            <IonLabel position='stacked' className='input-label' >
                    EMAIL
            </IonLabel> 
                <IonInput placeholder='hello@propertyDealer.com' className='input'  />
            </IonItem>
            <IonItem className='input-box'   lines="none">
                <IonLabel className='input-label' position='stacked' >
                    PASSWORD
                </IonLabel>
                <IonInput placeholder='*****' className='input' />
            </IonItem>
            <IonItem className='input-box'   lines="none"> 
                <IonLabel className='input-label' position='stacked' >
                    Mobile
                </IonLabel>
                <IonInput placeholder='+91 1000 2000' className='input' />
            </IonItem>
            </div>
            <IonGrid className='buttons'>
                <IonRow className='buttons-row'>
                    <IonCol>
                    <IonButton className='button' >Sign Up</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    </IonPage>
  )
}

export default SignUp