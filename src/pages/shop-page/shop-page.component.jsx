import React from 'react';
import './shop-page.styles.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Shop extends React.Component {
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
    render(){
        const { collections } = this.state;
        return(
            <div>
              {
                collections.map(({ id, title, items }) => (
                   <CollectionPreview key={id} title={title} items={items} />
                ))
              }
            </div>
        )
    }
}

export default Shop;