import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
    let history = useHistory(); // Initialize useHistory hook

    const navigateToAdultDrugsList = () => {
        history.push('/adult-drugs'); // Navigate to drugs list page
    };

    const navigateToPediatricDrugsList = () => {
        history.push('/pediatric-drugs'); // Navigate to drugs list page
    };

    const navigateToDrugsList = () => {
        history.push('/drugs-list'); // Navigate to drugs list page
    };

    

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle> Drugs Infusion Calculation </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonButton expand="block" onClick={navigateToAdultDrugsList}>View Adult Drugs List</IonButton>
                <IonButton expand="block" onClick={navigateToPediatricDrugsList}>View Pediatric Drugs List</IonButton>
                <IonButton expand="block" onClick={navigateToDrugsList}>View Drugs List</IonButton>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <h1>Efficiency and Accuracy in drug infusion calculation</h1>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Home;