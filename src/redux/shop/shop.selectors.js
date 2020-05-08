import { createSelector } from "reselect"
export const selectShop = state => state.shop

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
)


export const selectCollection = (collectionURLParam) => createSelector(
  selectCollections,
  collections => collections[collectionURLParam]
)

export const selectCollectionsforPreview = createSelector(
  selectCollections,
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)