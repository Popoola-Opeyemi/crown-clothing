import React from "react"
import SHOP_DATA from "./shop.data"
import CollectionPreview from "../../components/preview-collection/collection-preview.component"

class Shop extends React.Component {
  constructor(){
    super()
    this.state = {
      collections:SHOP_DATA
    }
  }
  render(){
    const {collections} = this.state
    return (
      <div className="shop-page">
        {
          collections.map(({id, ...otherCollection}) => (
            <CollectionPreview key={id} {...otherCollection}></CollectionPreview>
          ))
        }
      </div>
    )
  }
}


export default Shop