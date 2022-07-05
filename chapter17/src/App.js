import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
//import Todos from './components/Todos';


const App = () => {
    return (
        <div>
            <CounterContainer/>
            <hr/>
            {/* <Todos/> */}
            <TodosContainer />
        </div>
    );
};

export default App;