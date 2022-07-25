import { IonButton, IonContent, IonImg, IonPage } from '@ionic/react';
import './Home.css';

const Home = () => {
  return (
    <IonPage className='home-container'>
      <IonImg className='background-image' src='/Home_Page.svg' alt="image" />
      <IonContent className='content-home ion-text-center'>
        <IonImg className='logo-home' src="/Logo.svg" alt="" />
        <h2><b>Find Your</b></h2>
        <h2>Dream House</h2>
        <h3>Get free consultation today!</h3>
        <IonButton className='button2'>SIGN UP / LOG IN</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
