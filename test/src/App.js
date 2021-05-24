import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet';
import Welcome from './Component/Welcome'
import Message from './Component/Message'
import Counter from './Component/Counter'
import FunClick from './Component/FunClick'
import ClassClick from './Component/ClassClick';
import EventBind from './Component/EventBind';
import ParentComponent from './Component/ParentComponent';
import UserGreetings from './Component/UserGreetings';
import NameList from './Component/NameList';
import StyleSheet from './Component/StyleSheet';
import InLine from './Component/InLine';
import './style.css';
import styles from './style.module.css'
import Form from './Component/Form'
import LifecycleA from './Component/LifecycleA'


function App() {
  return (
    <div className="App">

      <LifecycleA />
      {/* <Form /> */}
      {/* <h1 className = 'error'>Error</h1>
      <h1 className = {styles.success}>Success</h1>
      <InLine /> */}
      {/* <UserGreetings /> */}
      {/* <ParentComponent /> */}
        {/* <EventBind /> */}
      {/* <FunClick /> */}
      {/* <ClassClick /> */}

      {/* <Counter /> */}
      {/* <Message /> */}

      {/* <Greet name="ABBEY" aka="Nibram">
        Learning React Props
      </Greet>
      <Greet name="Kenny"/>
      <Greet name="Bae"/> */}

      {/* <Welcome name='Nibram'>Nibram Cleaning Services</Welcome>
      <Welcome name='Software Engineering'>Frontend Engineer</Welcome>
      <Welcome name='Forex Trading'/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
