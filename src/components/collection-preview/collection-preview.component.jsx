import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item';
import { Link } from 'react-router-dom';

const CollectionPreview = ({ title, items }) =>(
    <div className = 'collection-preview'>
       <Link to={`/shop/${title.toLowerCase()}`} >
         <h2 className = 'title'>{title}</h2>
       </Link>
       <div className = 'preview'>
         {
           items.filter((item, index) => index < 4)
                .map(item => 
                   <CollectionItem key={item.id} item={ item } />
            )
         }
       </div>

    </div>
);

export default CollectionPreview;