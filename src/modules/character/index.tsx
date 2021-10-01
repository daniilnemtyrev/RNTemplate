import React, { useState } from 'react'
import styled from 'styled-components/native'

import { CharactersFilterModal } from 'src/components/characters/characters-filter-modal'
import { CharactersList } from 'src/components/characters/characters-list'
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
  width: 42;
  height: 22;
  margin-bottom: 40;
  margin-right: 16;
`

export const CharacterScreen = () => {
  const [visible, setIsVisible] = useState(false)
  const navigation = useNavigation()
  navigation.setOptions({
    headerRight: () => (
      <StyledButton onPress={() => setIsVisible(true)}>
        <CustomText>Filter</CustomText>
      </StyledButton>
    ),
  })

  return (
    <>
      <ModalMenu showModal={visible} setShowModal={setIsVisible}>
        <CharactersFilterModal />
      </ModalMenu>
      <Content>
        <CharactersList />
      </Content>
    </>
  )
}
