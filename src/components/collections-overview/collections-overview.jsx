import React from 'react';
import './collections-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';

const CollectionOverview = ({ collections }) =>( 
    
    <div className='collections-overview'>
        {
         collections.map(({ id, title, items }) => (
            <CollectionPreview key={id} title={title} items={items} />
        ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);