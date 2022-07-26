import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';
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
                            <Link className='loginButtonLink' to='/allproperties'>
                                <IonButton className='button' >Log In</IonButton>
                            </Link>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <Link to={"/signup"}>
                                <IonButton className='button' >Create New Account</IonButton>
                            </Link>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>
        </IonPage>
    )
}

export default Login