import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Counter from './components/Counter';
import Todolist from './components/Todolist';
import Count100 from './components/count100';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>APP</h1>
        <div className='component'>
          <Counter/>{<br/>}
          <Count100/>{<br/>}
          <Todolist/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
