import { Switch, Route  } from "react-router-dom";
import { ContextProvider } from "./context/GlobalContext";


import Heading from "./Components/Heading";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import './App.css';


function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading></Heading>
            <Switch>
              <Route 
                path="/" 
                component={TaskList} 
                exact/>    
              <Route
                path="/add"
                component={TaskForm}/>
              <Route 
                path="/edit/:id"
                component={TaskForm}/>
            </Switch>            
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
