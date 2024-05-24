import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';
import { useParams } from 'react-router-dom';

const DrugGroupDetails: React.FC = () => {
    const { group } = useParams<{ group: string }>();
    const drugGroups = {
        CNS: ['Atracurium', 'Cisatracurium', 'Midazolam', 'Morphine', 'Propofol', 'Remifentanil', 'Rocuronium'],
        CVS: ['Ibuprofen', 'Amiodarone', 'Carbamazepine']
    };

    const drugs = drugGroups[group as keyof typeof drugGroups] || [];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{group} Drugs</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {drugs.map((drug, index) => (
                        <IonItem key={index}>
                            {drug}
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

console.log(group); // Log the current group
console.log(drugs); // Log the filtered drugs list

export default DrugGroupDetails;