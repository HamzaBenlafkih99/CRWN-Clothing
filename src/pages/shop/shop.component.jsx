import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { uppdateCollection } from '../../redux/shop/shop.action';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribFromSnapshot = null;
  componentDidMount(){
       const { uppdateCollection } = this.props;
       const collectionRef = firestore.collection('collections');
       this.unsubscribFromSnapshot = collectionRef.onSnapshot(async snapshot=>{
         const collectionMap = convertCollectionSnapshotToMap(snapshot);
         uppdateCollection(collectionMap);
         this.setState({ loading: false });
       });
  }
   
  render(){
    const { match } = this.props;
    const { loading } = this.state;
    return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
          render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} { ...props } />}
        />
        <Route path={`${match.path}/:collectionId`} 
          render={(props) => <CollectionPageWithSpinner isLoading={ loading } { ...props } />}
        />
      </div>
    );
  }
} 

const mapDispatchToProps = dispatch =>({
  uppdateCollection: collectionMap => dispatch(uppdateCollection(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);

