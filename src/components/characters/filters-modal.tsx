import React, { useEffect } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'
import { RadioGroupFilter } from 'src/ui/radio-group-filters'
import { SearchFilter } from 'src/ui/search-filter'

import { StateSetter, useCharacterFiltersContext } from './filters-context'

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

const StyledButtonApply = styled(Button)`
  background: ${colors.purple};
  padding: 5px 12px;
  border-radius: 24px;
  position: absolute;
  right: 15px;
  top: 25px;
`

const StyledButtonClear = styled(Button)`
  position: absolute;
  left: 16px;
  top: 14px;
`

const TextClearButton = styled.Text`
  color: ${colors.purple};
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
`
const CustomText = styled.Text``

interface ModalState {
  setIsVisible: StateSetter<boolean>
}

export const CharactersFilterModal = ({ setIsVisible }: ModalState) => {
  const {
    checkedName,
    checkedStatus,
    checkedGender,
    checkedSpecies,
    setCurrentFilters,
    setCheckedGender,
    setCheckedStatus,
    setCheckedName,
    setCheckedSpecies,
  } = useCharacterFiltersContext()

  useEffect(() => {
    setCurrentFilters({
      gender: checkedGender,
      name: checkedName,
      species: checkedSpecies,
      status: checkedStatus,
    })
  }, [
    checkedName,
    checkedStatus,
    checkedGender,
    checkedSpecies,
    setCurrentFilters,
  ])

  const clearFilter = () => {
    setCheckedGender('')
    setCheckedStatus('')
    setCheckedName('')
    setCheckedSpecies('')
  }

  return (
    <>
      <Container>
        <Header>
          <CustomText>Filter</CustomText>
          <StyledButtonApply
            onPress={() => setIsVisible(false)}
            title={'APPLY'}
          />
          <StyledButtonClear onPress={clearFilter}>
            <TextClearButton>Clear</TextClearButton>
          </StyledButtonClear>
        </Header>

        <SearchFilter
          checked={checkedName}
          onPress={() => setCheckedName('checked')}
          name={'Name'}
          promt={'Give a name'}
        />

        <SearchFilter
          checked={checkedSpecies}
          onPress={() => setCheckedSpecies('checked')}
          name={'Species'}
          promt={'Select one'}
        />

        <RadioGroupFilter
          checked={checkedStatus}
          setChecked={setCheckedStatus}
          filtersArray={['Alive', 'Dead', 'Unknown']}
          name={'Status'}
          line={2}
        />

        <RadioGroupFilter
          checked={checkedGender}
          setChecked={setCheckedGender}
          filtersArray={['Female', 'Male', 'Genderless', 'Unknown']}
          name={'Gender'}
          line={3}
        />
      </Container>
    </>
  )
}
