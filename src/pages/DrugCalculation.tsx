import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { useParams } from 'react-router-dom';

const DrugCalculation: React.FC = () => {
    const { drug } = useParams<{ drug: string }>();
    const [dose, setDose] = useState<number>();
    const [volume, setVolume] = useState<number>();
    const [weight, setWeight] = useState<number>();
    const [time, setTime] = useState<number>();
    const [concentration, setConcentration] = useState<number>();
    const [result, setResult] = useState<number>();

    useEffect(() => {
            // You can use the 'drug' parameter here to fetch specific drug details if needed
    }, [drug]);
        
    const resetInputs = () => {
        setDose(undefined);
        setVolume(undefined);
        setWeight(undefined);
        setTime(undefined);
        setConcentration(undefined);
        setResult(undefined);
    };

    const calculateinf = () => {
        const enterdose = dose || 0;
        const entervolume = volume || 0;
        const enterweight = weight || 0;
        const entertime = time || 0;
        const enterconcentration = concentration || 0;

        const infusionRate = (enterdose * entervolume * enterweight * entertime) / (enterconcentration * 1000);

        if (isNaN(infusionRate)) {
            alert('Not a valid number, please check inputs!');
            return;
        }

        setResult(infusionRate);
    };

    return (
        <IonPage>
            <IonContent>
                <IonInput type="number" placeholder="Dose" value={dose} onIonChange={e => setDose(parseFloat(e.detail.value!))}></IonInput>
                <IonInput type="number" placeholder="Volume" value={volume} onIonChange={e => setVolume(parseFloat(e.detail.value!))}></IonInput>
                <IonInput type="number" placeholder="Weight" value={weight} onIonChange={e => setWeight(parseFloat(e.detail.value!))}></IonInput>
                <IonInput type="number" placeholder="Time" value={time} onIonChange={e => setTime(parseFloat(e.detail.value!))}></IonInput>
                <IonInput type="number" placeholder="Concentration" value={concentration} onIonChange={e => setConcentration(parseFloat(e.detail.value!))}></IonInput>
                <IonButton onClick={calculateinf}>Calculate</IonButton>
                <IonButton onClick={resetInputs}>Reset</IonButton>

                {result !== undefined &&
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Result</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <h2>{result}</h2>
                        </IonCardContent>
                    </IonCard>
                }
            </IonContent>
        </IonPage>
    );
};

export default DrugCalculation;

function useEffect(arg0: () => void, arg1: string[]) {
    throw new Error('Function not implemented.');
}
