import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) =>(
    <div className = 'collection-preview'>
       <h2 className = 'title'>{title}</h2>
       <div className = 'preview'>
         {
           items.filter((item, index) => index < 4)
                .map(({ id, ...otherItemprops }) => 
                   <CollectionItem key={id} {...otherItemprops} />
            )
         }
       </div>

    </div>
);

export default CollectionPreview;