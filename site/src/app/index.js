import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {Main, About} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router> 
            
                <Switch>
                    
                    <Route path="/" exact component={Main}/>
                    <Route path="/about" exact component={About}/>
                   
                    
                </Switch>
            
           

        </Router>
      
           
        
        
    )
}

export default App