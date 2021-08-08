import logo from './logo.svg';
import './App.css';
// import Greeting from './components/Greeting';
import LoginForm from './components/forms/LoginForm';
import Input from './components/forms/Input';
// import MouseClickerH from './components/MouseClickerH';
import CounterH from './components/CounterH';
import ClickerH from './components/ClickerH';
import ComponentDisablerH from './components/ComponentDisablerH';
import UserLoaderH from './components/UserLoaderH';
import StopwatchH from './components/StopwatchH';
// function App() {
//   return <Greeting name='Vasia'/>

// }
//====Hooks============

const App = () => <CounterH />;

// function App () {
//   return <LoginForm />;
// }

// class App extends Component {
//   ///rconst
//   constructor(props){
//     super(props);

//     this.state = {
//       name: 'Vasia',
//       isGreeting: false,
//     };
//   }

//   render() {
//       const {name, isGreeting} = this.state.name;

//       return <Greeting name = {name}  isGreeting =  {isGreeting}/>

//   }
// } //rcc

export default App;
