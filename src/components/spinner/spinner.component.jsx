import React from 'react'

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'

export const WithSpinner = (WrappedComponent) => ({
  isLoading,
  ...otherProps
}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps}></WrappedComponent>
  )
}
