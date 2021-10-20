import { Switch, Route  } from "react-router-dom";
import { ContextProvider } from "./context/GlobalContext";

import './App.css';
import Heading from "./Components/Heading";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import Profile from "./Components/Profile";


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
              <Route
                path="/profile/:id"
                component={Profile} />  
            </Switch>            
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
