import React from "react";
import "./BookNow.css";
import { IonPage, IonGrid, IonRow, IonCol, IonButton } from "@ionic/react";

const Checkout = () => {
  return (
    <IonPage className="book-now-outer-container">
      <div className="container">
        <IonGrid>
          <IonRow>
            <IonCol>
              <img
                className="firstImage"
                src="https://images.unsplash.com/photo-1571504211935-1c936b327411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=617&q=80"
                alt=""
              />
            </IonCol>
            <IonCol>
              <h2 className="heading">Name</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img
                className="secondImage"
                src="https://images.unsplash.com/photo-1571504211935-1c936b327411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=617&q=80"
                alt=""
              />
            </IonCol>
            <IonCol>
              <img
                className="secondImage"
                src="https://images.unsplash.com/photo-1571504211935-1c936b327411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=617&q=80"
                alt=""
              />
            </IonCol>
            <IonCol>
              <img
                className="secondImage"
                src="https://images.unsplash.com/photo-1571504211935-1c936b327411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=617&q=80"
                alt=""
              />
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="secondContainer">
          <IonGrid className="gridTwo">
            <IonRow>
              <IonCol>
                <h3 className="thirdheading">Amenties</h3>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h4 className="fourthHeading">FPrice</h4>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h4 className="fourthHeading">Location</h4>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h4 className="fourthHeading">XXXXXXXXXX</h4>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h4 className="fourthHeading">XXXXXXXXXX</h4>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton className="bookButton">BOOK NOW</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>
    </IonPage>
  );
};

export default Checkout;
