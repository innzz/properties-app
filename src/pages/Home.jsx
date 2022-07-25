import { IonButton, IonContent, IonImg, IonPage } from '@ionic/react';
import './Home.css';

const Home = () => {
  return (
    <IonPage>
      <IonImg className='background-image' src='/Home_Page.svg' alt="image" />
      <IonContent className='content ion-text-center'>
        <IonImg className='logo' src="/Logo.svg" alt="" />
        <h1>Find Your</h1>
        <h2>Dream House</h2>
        <h4>Get free consultation today!</h4>
        <IonButton className='button'>SIGN UP / LOG IN</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
