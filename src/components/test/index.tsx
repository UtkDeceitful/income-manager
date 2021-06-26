import { useQuery, gql } from '@apollo/client'
import { useState } from 'react'
import { Button } from 'semantic-ui-react'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

export function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)
  const [index, setIndex] = useState<number>(0)

  const increaseIndex = (): void => {
    setIndex(index + 1 <= data.rates.length - 1 ? index + 1 : index)
  }
  const decreaseIndex = (): void => {
    setIndex(index - 1 >= 0 ? index - 1 : index)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <p className="text-3xl">
        <b>{data.rates[index].currency}</b>: {data.rates[index].rate}
      </p>
      <Button onClick={decreaseIndex}>Previous</Button>
      <Button onClick={increaseIndex}>Next</Button>
    </div>
  )
}
