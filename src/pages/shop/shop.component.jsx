import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CollectionPage from '../collection/collection.component'
import { updateCollections } from '../../redux/shop/shop.actions'
import { WithSpinner } from '../../components/spinner/spinner.component'
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  state = {
    loading: true,
  }
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionMap)
      this.setState({ loading: false })
    })

    // const collectionRef = firestore.collection('collections')
    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapshot)
    //   updateCollections(collectionMap)
    //   this.setState({ loading: false })
    // })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        ></Route>
        <Route
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
          path={`${match.path}/:collectionId`}
        ></Route>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatchEvent) => ({
  updateCollections: (collectionsMap) =>
    dispatchEvent(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
