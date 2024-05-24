import React from 'react';
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonButton} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const DrugsList: React.FC = () => {
    const history = useHistory();
    // List of drugs

    const drugsList = [
        'Dopamine',
        'Adenosine',
        'Amiodarone',
        'Amoxicillin',
        'Amoxicillin Clavulonate 312',
        'Azithromycin',
        'Budesonide/Formoterol 80',
        'Carbamazepine',
        'Cefixime',
        'Cefriaxone',
        'Diazepam',
        'Dobutamine',
        'Epinephrine',
        'Ethosuximide',
        'Fluticasone',
        'Furosemide',
        'Ibuprofen',
        'Levofloxacin',
        'Meropenem',
        'Metronidazole',
        'Midazolam (Bolus)',
        'Midazolam',
        'Paracetamol',
        'Penicilin',
        'Phenobarbital',
        'Phenytoin',
        'Trimethoprim',
        'Valproate'
    ];

    const handleDrugClick = (drug: string) => {
        history.push(`/drug-calculation/${encodeURIComponent(drug)}`);
    };


    return (
        <IonPage>
            <IonContent>
                <IonList>
                    {/* Map through drugsList and create an IonItem button for each drug */}
                    {drugsList.map((drug, index) => (
                        <IonItem key={index} button>
                            <IonLabel>{drug}</IonLabel>
                            <IonButton onClick={() => handleDrugClick(drug)}>Calculate</IonButton>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default DrugsList;