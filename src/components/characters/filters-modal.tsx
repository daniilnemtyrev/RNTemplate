import React from 'react'
import { RadioProps } from 'interfaces/filters/RadioProps'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'

import { useCharacterFiltersContext } from './filters-context'
import { GenderFilter } from './gender-filter'
import { NameFilter } from './name-filter'
import { SpeciesFilter } from './species-filter'
import { StatusFilter } from './status-filter'

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

export const CharactersFilterModal = ({}) => {
  const {
    checkedName,
    checkedStatus,
    checkedGender,
    checkedSpecies,
    setCheckedGender,
    setCheckedStatus,
    setCheckedName,
    setCheckedSpecies,
  } = useCharacterFiltersContext()

  return (
    <Container>
      <Header>
        <CustomText>Filter</CustomText>
        <StyledButton title={'APPLY'} />
      </Header>

      <NameFilter checked={checkedName} setChecked={setCheckedName} />

      <SpeciesFilter checked={checkedSpecies} setChecked={setCheckedSpecies} />

      <StatusFilter checked={checkedStatus} setChecked={setCheckedStatus} />

      <GenderFilter checked={checkedGender} setChecked={setCheckedGender} />
    </Container>
  )
}
