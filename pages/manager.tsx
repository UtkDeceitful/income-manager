import { Button } from '@components/button'
import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

type Division = {
  saving: number
  variables?: {
    label: string
    value: string
  }[]
}

interface IDivision {
  engagement: Division
  investment: Division
  personal: Division
}

export const manager = (): JSX.Element => {
  const [amount, setAmount] = useState<number>(0)
  const [data, setData] = useState<IDivision>(null)

  const onButtonClicked = () => {
    const dividedAmount = amount / 3
    setData({
      engagement: {
        saving: dividedAmount,
      },
      investment: {
        saving: dividedAmount,
      },
      personal: {
        saving: dividedAmount,
      },
    })
  }

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{ background: '#E8EDFB' }}
    >
      <Container>
        <Title>
          Tom Ferry
          <br /> Money Management
        </Title>
        <Label htmlFor="income" className="mb-2">
          Income :
        </Label>
        <Input
          type="text"
          name="income"
          value={amount}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value
            if (value !== '') {
              setAmount(Number.parseInt(e.target.value))
            } else {
              setAmount(0)
            }
          }}
          placeholder="Input text here"
        />
        <Button onClick={(e) => onButtonClicked()}>Calculate</Button>
        <Box>
          <BoxContainer className="manager__box">
            <Subtitle>Engagements</Subtitle>
            <Result>
              {data?.engagement.saving
                ? Math.floor(data?.engagement.saving)
                : 0}
              $
            </Result>
          </BoxContainer>
          <BoxContainer className="manager__box">
            <Subtitle>Investment</Subtitle>
            <Result>
              {data?.investment.saving
                ? Math.floor(data?.investment.saving)
                : 0}
              $
            </Result>
          </BoxContainer>
          <BoxContainer className="manager__box">
            <Subtitle>Personal</Subtitle>
            <Result>
              {data?.personal.saving ? Math.floor(data?.personal.saving) : 0}$
            </Result>
          </BoxContainer>
        </Box>
      </Container>
    </div>
  )
}

const Container = styled.div`
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.2);
  border-radius: 38px;
  width: 650px;
  background: #fff;
  padding: 36px 36px;
`

const Title = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 40px;
  color: #000000;
  text-align: center;
`

const Subtitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`
const Result = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #e8edfb;
  border-radius: 5px;
  padding: 8px 16px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.05);
  min-width: 180px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #bbcaf3;
  }
`
const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* Neutral / Gray 600 */

  color: #475569;
`
const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  outline: none !important;
  margin-bottom: 24px;
  /* Shades/White */
  background: #ffffff;

  /* Neutral / Gray 300 */

  border: 1px solid #cbd5e1;
  box-sizing: border-box;
  border-radius: 4px;
  &::placeholder {
    /* Neutral / Gray 400 */

    color: #94a3b8;
  }
`

/* We can add the state prop */
const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(manager)
