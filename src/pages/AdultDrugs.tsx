import React, { useState } from 'react';
import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonModal, IonInput } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const AdultDrugs: React.FC = () => {
    const history = useHistory();
    const [showAddDrugModal, setShowAddDrugModal] = useState(false);
    const [newDrugDetails, setNewDrugDetails] = useState({
        genericName: '',
        tradeName: '',
        features: '',
        strength: '',
        solvent: '',
        minDose: '',
        maxDose: '',
        doseUnits: '',
        perTime: '',
        notes: ''
    });

    const handleAddDrug = () => {
        // Here you can handle adding the new drug to your data storage or perform any necessary action
        console.log('New drug details:', newDrugDetails);
        // Close the modal after adding the drug
        setShowAddDrugModal(false);
    };

    // List of adult drugs grouped by category - this should be replaced with your actual data
    const adultDrugGroups = {
        CNS: ['Atracurium', 'Cisatracurium', 'Midazolam', 'Morphine', 'Propofol', 'Remifentanil', 'Rocuronium'],
        CVS: ['Ibuprofen', 'Amiodarone', 'Carbamazepine']
    };

    const navigateToDrugGroup = (group: string) => {
        history.push(`/drug-group-details/${group}`);
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
                                <IonButton expand="block" onClick={() => navigateToDrugGroup('CNS')}>View CNS Drugs</IonButton>
                                <IonButton expand="block" onClick={() => navigateToDrugGroup('CVS')}>View CVS Drugs</IonButton>
                                <IonButton expand="block" onClick={() => navigateToDrugGroup('OTHER')}>View OTHER Drugs</IonButton>
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

                {/* this code is posible to erase from here */}
                {/* Button to add a new drug */}
                <IonButton expand="block" onClick={() => setShowAddDrugModal(true)}>Add Drug</IonButton>

                {/* Modal for adding a new drug */}
                <IonModal isOpen={showAddDrugModal}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Add Drug</IonTitle>
                            <IonButtons slot="end">
                                <IonButton onClick={() => setShowAddDrugModal(false)}>Close</IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {/* Inputs for new drug details */}
                        <IonList>
                            <IonItem>
                                <IonLabel position="stacked">Generic Name</IonLabel>
                                <IonInput value={newDrugDetails.genericName} onIonChange={(e) => setNewDrugDetails({ ...newDrugDetails, genericName: e.detail.value! })}></IonInput>
                            </IonItem>
                            {/* Add more input fields for other drug details */}
                        </IonList>

                        {/* Add button to submit new drug details */}
                        <IonButton expand="block" onClick={handleAddDrug}>Add Drug</IonButton>

                        {/* Until here this code is posible to erase from here */}
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
};

export default AdultDrugs;