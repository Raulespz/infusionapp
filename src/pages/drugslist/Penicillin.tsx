import React from 'react';
import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const AdultDrugs: React.FC = () => {
    const history = useHistory();

    // List of adult drugs grouped by category - this should be replaced with your actual data
    const adultDrugGroups = {
        CNS: ['Levofloxacin', 'Meropenem', 'Metronidazole'],
        CVS: ['Ibuprofen', 'Amiodarone', 'Carbamazepine']
    };

    const navigateToDrugGroup = (group: string) => {
        // Navigate to drug group list page
        history.push(`/drug-group/${group}`);
    };

    // List of adult drugs - this should be replaced with your actual data
    const adultDrugs = ['Levofloxacin', 'Meropenem', 'Metronidazole', 'Ibuprofen'];

    const handleDrugClick = (drug: string) => {
        // Navigate to drug detail or calculation page
        history.push(`/drug-details/${encodeURIComponent(drug)}`);
    };

    const navigateToPediatric = () => {
        // Navigate to Pediatric Drugs list
        history.push('/pediatric-drugs');
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
                    <IonTitle>All Adult Drugs List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonList>
                                <IonButton expand="block" onClick={navigateToPediatric}>View Pediatric Drugs</IonButton>
                                <IonButton expand="block" onClick={navigateToDrugsList}>View Complete Drugs List</IonButton>
                                <h1>Adult Drugs</h1>
                                {/* Add a divider or header between drug groups and individual drugs */}
                                <IonHeader>Adult-Drugs-Section</IonHeader>
                                {Object.keys(adultDrugGroups).map((group, index) => (
                                    <IonButton key={index} expand="block" onClick={() => navigateToDrugGroup(group)}>
                                        View {group} Drugs
                                    </IonButton>
                                ))}
                                {/* Add a divider or header between drug groups and individual drugs */}
                                <IonHeader>Individual Drugs</IonHeader>
                                {adultDrugs.map((drug, index) => (
                                    <IonItem key={index} button onClick={() => handleDrugClick(drug)}>
                                        <IonLabel>{drug}</IonLabel>
                                    </IonItem>
                                ))}
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AdultDrugs;