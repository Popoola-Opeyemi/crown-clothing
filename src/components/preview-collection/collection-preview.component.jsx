import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from '../coleection-item/collection-item.component'

const collectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </div>
  </div>
)

export default collectionPreview
