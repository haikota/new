import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StockTrading from '../component/page/stockTrading/StockTrading';


const Routes = () => (
    <Switch>
        <Route exact path="/stocktrading" component={StockTrading} />
    </Switch>
);


export default Routes;