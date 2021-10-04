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
  border-top-color: ${colors.gray[3]};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray[3]};
  padding-top: 10px;
  padding-bottom: 10px;
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

const LabelName = styled.Text`
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`

const LabelPromt = styled.Text`
  color: ${colors.gray[3]};
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
`

const TextLabel = styled.View`
  width: 100%;
`

export const SpeciesFilter = ({ checked, setChecked }: RadioState) => {
  return (
    <Filter>
      <StyledRadioButton
        title={''}
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
      <TextLabel>
        <LabelName>Species</LabelName>
        <LabelPromt>Select one</LabelPromt>
      </TextLabel>
    </Filter>
  )
}
