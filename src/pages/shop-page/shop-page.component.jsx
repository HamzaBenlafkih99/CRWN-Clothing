import React from 'react';
import { Route } from 'react-router-dom';
import './shop-page.styles.scss';
import Collections from '../collection/collection';

import CollectionOverview from '../../components/collections-overview/collections-overview';

const Shop = ({ match }) =>( 
    <div className='shop-page'>
       <Route exact path={`${match.path}`} component= {CollectionOverview} />
       <Route path={`${match.path}/:collectionId`} component= {Collections} />
    </div>
    
)



export default Shop;