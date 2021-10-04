import React from 'react'
import { RadioState } from 'interfaces/filters/RadioState'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { RadioButton } from 'src/ui/radio-button'

const Filter = styled.View`
  align-items: center;
  padding-left: 19px;
  flex-direction: row;
  margin-bottom: 11px;
`

const FilterName = styled.Text`
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: ${colors.gray[3]};
  padding-left: 16px;
  margin-bottom: 16px;
`
const RadioGroup = styled.View`
  border-top-color: ${colors.gray[3]};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray[3]};
  padding-top: 11px;
  margin-bottom: 30px;
`
const LabelName = styled.Text`
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`

const StyledRadioButton = styled(RadioButton)`
  width: 22px;
  height: 22px;
  border: 1px solid ${colors.gray[3]};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-right: 16px;
`

const TextLabel = styled.View`
  width: 100%;
`

const Line = styled.View`
  border-top-color: ${colors.gray[3]};
  border-top-width: 1px;
  width: 100%;
  margin-top: 10px;
`

export const StatusFilter = ({ checked, setChecked }: RadioState) => {
  const statusArr = ['Alive', 'Dead', 'Unknown']

  return (
    <>
      <FilterName>Status</FilterName>
      <RadioGroup>
        {statusArr.map((status, index) => {
          return (
            <Filter key={status + index}>
              <StyledRadioButton
                title={''}
                onPress={() => setChecked(status)}
                status={checked === status ? 'checked' : 'unchecked'}
              />
              <TextLabel>
                <LabelName>{status}</LabelName>
                {index !== 2 && <Line />}
              </TextLabel>
            </Filter>
          )
        })}
      </RadioGroup>
    </>
  )
}
