import { TodoProvider } from './context/TodoContext';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
const App = () => {
 return (
 <TodoProvider>
 <div>
 <Header />
 <AddTodo />
 <TodoList />
 <Footer />
 </div>
 </TodoProvider>
 );
}

export default App;
