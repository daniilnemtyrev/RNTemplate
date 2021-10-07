import React, { useState } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'
import { ModalMenu } from 'src/ui/modal'
import { RadioGroupFilter } from 'src/ui/radio-group-filters'
import { SearchFilter } from 'src/ui/search-filter'
import { SearchFilterModal } from 'src/ui/search-modal'

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
  const [visibleNameFilter, setIsVisibleNameFilter] = useState(false)
  const [visibleSpeciesFilter, setIsVisibleSpeciesFilter] = useState(false)
  const { filters, setFilters, setCurrentFilters } =
    useCharacterFiltersContext()

  const updateFilterName = (value: string) =>
    setFilters((prevProps) => ({ ...prevProps, name: value }))

  const updateFilterStatus = (value: string) =>
    setFilters((prevProps) => ({ ...prevProps, status: value }))

  const updateFilterSpecies = (value: string) =>
    setFilters((prevProps) => ({ ...prevProps, species: value }))

  const updateFilterGender = (value: string) =>
    setFilters((prevProps) => ({ ...prevProps, gender: value }))

  const applyFilters = () => {
    setCurrentFilters(filters)
    setIsVisible(false)
  }

  const clearFilter = () => {
    setFilters({ gender: '', name: '', species: '', status: '' })
  }

  const statusArray = ['Alive', 'Dead', 'Unknown']

  const genderArray = ['Female', 'Male', 'Genderless', 'Unknown']

  return (
    <>
      <ModalMenu
        showModal={visibleNameFilter}
        setShowModal={setIsVisibleNameFilter}>
        <SearchFilterModal
          updateFilter={updateFilterName}
          value={filters.name}
          name={'Name'}
          setIsVisible={setIsVisibleNameFilter}
        />
      </ModalMenu>

      <ModalMenu
        showModal={visibleSpeciesFilter}
        setShowModal={setIsVisibleSpeciesFilter}>
        <SearchFilterModal
          updateFilter={updateFilterSpecies}
          value={filters.species}
          name={'Species'}
          setIsVisible={setIsVisibleSpeciesFilter}
        />
      </ModalMenu>
      <Container>
        <Header>
          <CustomText>Filter</CustomText>
          <StyledButtonApply onPress={applyFilters} title={'APPLY'} />
          <StyledButtonClear onPress={clearFilter}>
            <TextClearButton>Clear</TextClearButton>
          </StyledButtonClear>
        </Header>

        <SearchFilter
          checked={filters?.name?.length > 0 && 'checked'}
          onPress={() => setIsVisibleNameFilter(true)}
          name={'Name'}
          promt={'Give a name'}
        />

        <SearchFilter
          checked={filters?.species?.length > 0 && 'checked'}
          onPress={() => setIsVisibleSpeciesFilter(true)}
          name={'Species'}
          promt={'Select one'}
        />

        <RadioGroupFilter
          checked={filters.status}
          updateFilter={updateFilterStatus}
          filtersArray={statusArray}
          name={'Status'}
          line={2}
        />

        <RadioGroupFilter
          checked={filters.gender}
          updateFilter={updateFilterGender}
          filtersArray={genderArray}
          name={'Gender'}
          line={3}
        />
      </Container>
    </>
  )
}
