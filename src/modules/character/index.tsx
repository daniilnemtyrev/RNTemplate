import React, { useState } from 'react'
import styled from 'styled-components/native'

import { CharactersList } from 'src/components/characters/characters-list'
import { CharacterFiltersContextProvider } from 'src/components/characters/filters-context'
import { CharactersFilterModal } from 'src/components/characters/filters-modal'
import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'
import { ModalMenu } from 'src/ui/modal'

const Content = styled.View`
  flex: 1;
  padding-left: 9px;
  padding-right: 23px;
`

const CustomText = styled.Text`
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  color: ${colors.purple};
`

const StyledButton = styled(Button)`
  width: 42px;
  height: 22px;
  margin-bottom: 40px;
  margin-right: 16px;
`

export const CharacterScreen = () => {
  const [visibleFilters, setIsVisibleFilters] = useState(false)
  const navigation = useNavigation()

  navigation.setOptions({
    headerRight: () => (
      <StyledButton onPress={() => setIsVisibleFilters(true)}>
        <CustomText>Filter</CustomText>
      </StyledButton>
    ),
  })

  return (
    <CharacterFiltersContextProvider>
      <ModalMenu showModal={visibleFilters} setShowModal={setIsVisibleFilters}>
        <CharactersFilterModal setIsVisible={setIsVisibleFilters} />
      </ModalMenu>
      <Content>
        <CharactersList />
      </Content>
    </CharacterFiltersContextProvider>
  )
}
