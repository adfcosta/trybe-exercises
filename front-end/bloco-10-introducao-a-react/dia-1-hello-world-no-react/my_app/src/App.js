import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['do the laundry',  'make dinner', 'do the dishes']

const tasksMap = tasks.map ( task  => Task(task));

function App() {
  return (
    <ul>{tasksMap}</ul>
  );
}

export default App;
