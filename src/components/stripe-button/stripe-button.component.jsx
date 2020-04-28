import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const PublishableKey = 'pk_test_iEw1cnXgmuRjUD8GcArbD4m800tBBQkVfB'

  const onToken = (token) => {
    alert('payment successful')
    console.log(token)
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      ShippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PublishableKey}
    />
  )
}

export default StripeCheckoutButton
