import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'
import { RadioButton } from 'src/ui/radio-button'

const Container = styled.View`
  background: ${colors.white};
  width: 100%;
`

const Header = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  padding-top: 21px;
  position: relative;
  margin-bottom: 23px;
`

const StyledButton = styled(Button)`
  background: ${colors.purple};
  padding: 5px 12px;
  border-radius: 24px;
  position: absolute;
  right: 15px;
  top: 25px;
`
const CustomText = styled.Text``

const SearchFilter = styled.View`
  height: 59px;
  border-top-color: ${colors.gray[3]};
  border-top-width: 1px;
  border-bottom-color: ${colors.gray[3]};
  border-bottom-width: 1px;
  margin-bottom: 19px;
  align-items: center;
  padding-left: 19px;
  flex-direction: row;
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

const LabelName = styled.Text`
  font-size: 17px;
  font-weight: 600;
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
const StatusFilter = styled.View`
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
const Line = styled.View`
  border-top-color: ${colors.gray[3]};
  border-top-width: 1px;
  width: 100%;
  margin-top: 10px;
`

const StatusLabelName = styled.Text`
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`

export const CharactersFilterModal = () => {
  const [checked, setChecked] = React.useState('')

  const statusArr = ['Alive', 'Dead', 'Unknown']

  const genderArr = ['Female', 'Male', 'Genderless', 'Unknown']

  return (
    <Container>
      <Header>
        <CustomText>Filter</CustomText>
        <StyledButton title={'APPLY'} />
      </Header>
      <SearchFilter>
        <StyledRadioButton
          title={''}
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
        <TextLabel>
          <LabelName>Name</LabelName>
          <LabelPromt>Give a name</LabelPromt>
        </TextLabel>
      </SearchFilter>
      <SearchFilter>
        <StyledRadioButton
          title={''}
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
        <TextLabel>
          <LabelName>Species</LabelName>
          <LabelPromt>Select one</LabelPromt>
        </TextLabel>
      </SearchFilter>

      <FilterName>Status</FilterName>
      <RadioGroup>
        {statusArr.map((status, index) => {
          return (
            <StatusFilter>
              <StyledRadioButton
                title={''}
                onPress={() => setChecked(status)}
                status={checked === status ? 'checked' : 'unchecked'}
              />
              <TextLabel>
                <StatusLabelName>{status}</StatusLabelName>
                {index !== 2 && <Line />}
              </TextLabel>
            </StatusFilter>
          )
        })}
      </RadioGroup>

      <FilterName>Gender</FilterName>

      <RadioGroup>
        {genderArr.map((gender, index) => {
          return (
            <StatusFilter>
              <StyledRadioButton
                title={''}
                onPress={() => setChecked(gender)}
                status={checked === gender ? 'checked' : 'unchecked'}
              />
              <TextLabel>
                <StatusLabelName>{gender}</StatusLabelName>
                {index !== 3 && <Line />}
              </TextLabel>
            </StatusFilter>
          )
        })}
      </RadioGroup>
    </Container>
  )
}
