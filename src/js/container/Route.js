  import React, {Component} from 'react';
  import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';


  const Routes = (props)=>{
    return(
      <BrowserRouter>
          <Switch>
            {/* It's setup at the default index route */}
            <Route path="/" /> //component={}
          </Switch>
      </BrowserRouter>
    );
  }

  export { Routes };
