import { Redirect, Route, useHistory } from 'react-router-dom';
import { IonApp, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonRow, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home'
import AdultDrugs from './pages/AdultDrugs'
import PediatricDrugs from './pages/PediatricDrugs'
import DrugCalculation from './pages/DrugCalculation'; // Import DrugCalculation component
import DrugsList from './pages/DrugsList';
import DrugGroupDetails from './pages/DrugsList'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import DopamineCalculation from './pages/drugslist/Dopamine';
import AmoxicillinCalculation from './pages/drugslist/Amoxicillin';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side='start' contentId='InfusionappM1'>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonButtons slot='start'>
              <IonMenuButton />
            </IonButtons>
            <IonTitle>MENU</IonTitle> 
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>COMPLETE DRUGS LIST</IonItem>
            <IonItem>COMPLETE ADULT DRUGS LIST</IonItem>
            <IonItem>COMPLETE PEDIATRIC DRUGS LIST</IonItem>
            <IonItem>ADD ADDITIONAL FUNCTIONALITIES</IonItem>
            <IonItem>SETTINGS</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id='InfusionappM1'>
        <Route path="/home" component={Home} exact/>
        <Route path="/adult-drugs" component={AdultDrugs} exact/>
        <Route path="/pediatric-drugs" component={PediatricDrugs} exact/>
        <Route path="/drug-calculation/amoxicillin" component={AmoxicillinCalculation} exact />
        <Route path="/drug-calculation/dopamine" component={DopamineCalculation} exact />
        <Route path="/drug-group-details/:group" component={DrugGroupDetails} exact />
        <Route path="/drugs-list" component={DrugsList} exact />
        <Redirect to="/home"/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

<IonMenu side='start' menuId='first'>
  <IonHeader>
      <IonToolbar color='primary'>
        <IonTitle>Start Menu</IonTitle> 
      </IonToolbar>
  </IonHeader>
  <IonContent>
    <IonList>
      <IonItem>Menu Item</IonItem>
      <IonItem>Menu Item</IonItem>
      <IonItem>Menu Item</IonItem>
      <IonItem>Menu Item</IonItem>
    </IonList>
  </IonContent>
</IonMenu>