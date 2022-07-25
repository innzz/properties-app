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
            
            <IonItem className='input-box' color={'white'}>
            <IonLabel position='stacked' className='input-label' color={'light'}>
                    NAME
            </IonLabel> 
                <IonInput placeholder='INZAMAM' className='input' color={'light'} />
            </IonItem>
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
            <IonItem className='input-box' color={'white'}>
                <IonLabel className='input-label' position='stacked' color={'light'}>
                    Mobile
                </IonLabel>
                <IonInput placeholder='+91 1000 2000' className='input' color={'light'}/>
            </IonItem>
            </div>
            <IonGrid className='buttons'>
                <IonRow className='buttons-row'>
                    <IonCol>
                    <IonButton className='button' color={'light'}>Sign Up</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    </IonPage>
  )
}

export default SignUp