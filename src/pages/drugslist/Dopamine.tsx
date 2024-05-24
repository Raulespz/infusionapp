import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonInput, IonRange, IonText, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';
import { useParams } from 'react-router-dom';

const DopamineCalculation: React.FC = () => {
    const [dose, setDose] = useState<number>(10); // Default dose 10 mcg/kg/min
    const [time, setTime] = useState<number>(1); // Default time 1 hour
    const [solution, setSolution] = useState<number>(50); // Default dilution 50 mL
    const [weight, setWeight] = useState<number>(70); // Default weight 70 kg
    const [concentration, setConcentration] = useState<number>(5); // Default concentration 5 mg/mL
    const [result, setResult] = useState<number>();
    const [showDopamineInfo, setShowDopamineInfo] = useState<boolean>(false); // State to track if dopamine information should be displayed

    const calculateInfusion = () => {
        const enterDose = dose || 0;
        const enterTime = time || 0;
        const enterSolution = solution || 0;
        const enterWeight = weight || 0;
        const enterConcentration = concentration || 0;

        const infusionRate = (enterDose * enterTime * enterSolution * enterWeight) / ( enterConcentration * 1000);

        if (isNaN(infusionRate)) {
            alert('Not a valid number, please check inputs!');
            return;
        }

        setResult(infusionRate);
    };

    function resetInputs(): void {
        setDose(10); // Default dose 10 mcg/kg/min
        setTime(1); // Default time 1 hour
        setSolution(50); // Default dilution 50 mL
        setWeight(70); // Default weight 70 kg
        setConcentration(5); // Default concentration 5 mg/mL
        setResult(undefined); // Clear the result
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Dopamine Calculation</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {/* Dose Input */}
                <IonItem>
                    <IonLabel position="stacked">Dose (mcg/kg/min):</IonLabel>
                    <IonInput type="number" value={dose.toString()} onIonChange={e => setDose(parseInt(e.detail.value!, 10) || 0)} clearInput></IonInput>
                </IonItem>
                <IonItem>
                    <IonRange min={1} max={20} step={1} value={dose} onIonChange={e => setDose(e.detail.value as number)}>
                        <IonLabel slot="start">1</IonLabel>
                        <IonLabel slot="end">20</IonLabel>
                    </IonRange>
                </IonItem>

                {/* Time Input */}
                <IonItem>
                    <IonLabel position="stacked">Time (hours):</IonLabel>
                    <IonInput type="number" value={time.toString()} onIonChange={e => setTime(Math.min(24, Math.max(1, parseInt(e.detail.value!, 10) || 1)))} clearInput></IonInput>
                </IonItem>
                <IonItem>
                    <IonRange min={1} max={24} step={1} value={time} onIonChange={e => setTime(e.detail.value as number)}>
                        <IonLabel slot="start">1</IonLabel>
                        <IonLabel slot="end">24</IonLabel>
                    </IonRange>
                </IonItem>

                {/* Solution Input */}
                <IonItem>
                    <IonLabel position="stacked">Solution (ml):</IonLabel>
                    <IonInput type="number" value={solution.toString()} onIonChange={e => setSolution(parseInt(e.detail.value!, 10) || 0)} clearInput></IonInput>
                </IonItem>
                <IonItem>
                    <IonRange min={50} max={1000} step={50} value={solution} onIonChange={e => setSolution(e.detail.value as number)}>
                        <IonLabel slot="start">50</IonLabel>
                        <IonLabel slot="end">1000</IonLabel>
                    </IonRange>
                </IonItem>

                {/* Weight Input */}
                <IonItem>
                    <IonLabel position="stacked">Weight (kg):</IonLabel>
                    <IonInput type="number" value={weight.toString()} onIonChange={e => setWeight(parseInt(e.detail.value!, 10) || 0)} clearInput></IonInput>
                </IonItem>
                <IonItem>
                    <IonRange min={0} max={300} step={1} value={weight} onIonChange={e => setWeight(e.detail.value as number)}>
                        <IonLabel slot="start">0</IonLabel>
                        <IonLabel slot="end">300</IonLabel>
                    </IonRange>
                </IonItem>

                {/* Concentration Input */}
                <IonItem>
                    <IonLabel position="stacked">Concentration (mg/mL):</IonLabel>
                    <IonInput type="number" value={concentration.toString()} onIonChange={e => setConcentration(parseInt(e.detail.value!, 10) || 0)} clearInput></IonInput>
                </IonItem>
                <IonItem>
                    <IonRange min={1} max={10} step={1} value={concentration} onIonChange={e => setConcentration(e.detail.value as number)}>
                        <IonLabel slot="start">1</IonLabel>
                        <IonLabel slot="end">10</IonLabel>
                    </IonRange>
                </IonItem>

                <IonItem button onClick={calculateInfusion}>
                    <IonLabel>Calculate</IonLabel>
                </IonItem>

                {/* Grid for buttons */}
                <IonGrid>
                    <IonRow>
                        <IonCol size="6" className="ion-text-center">
                            <IonButton color="primary" onClick={calculateInfusion}>Calculate</IonButton>
                        </IonCol>
                        <IonCol size="6" className="ion-text-center">
                            <IonButton color="danger" onClick={resetInputs}>Reset</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                 {/* Result */}
                 {result !== undefined && (
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Result</IonCardTitle>
                        </IonCardHeader>
                        
                        <IonCardContent>
                            <h2>{result} mL/hour</h2>
                        </IonCardContent>
                    </IonCard>
                )}

                {/* Button to toggle Dopamine Information */}
                <IonButton expand="full" onClick={() => setShowDopamineInfo(!showDopamineInfo)}>Dopamine Information</IonButton>

                {/* Dopamine Information */}
                {showDopamineInfo && (
                    <IonText>
                        <h2>Dopamine Specifications:</h2>
                        <p>Please adjust the dose, time, and dilution according to patient needs and clinical guidelines. For detailed dosage information, consult the drug's prescribing information or a clinical pharmacist.</p>
                    </IonText>
                )}
            </IonContent>
        </IonPage>
    );
};

export default DopamineCalculation;