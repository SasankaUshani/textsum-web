import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import SignUp from '../views/signupView'
import app from '../views/App'
import home from '../views/homepage'

const Routes = () => {
    return (
    
        <Switch>
          
            <Route exact path='/' component={app}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/home' component={home}/>

          
            {/*<Route path='/payment-method' component={PaymentMethod}/>*/}
            <Route path='*' component={app}/>
           
        </Switch>
    )
}

export default Routes;