import React from 'react'
import styled from 'styled-components/native'

import { StateSetter } from 'src/components/characters/filters-context'
import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'
import { Input } from 'src/ui/input'

const Container = styled.View`
  background: ${colors.white};
  width: 100%;
  align-items: center;
  height: 100%;
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

const StyledButtonBack = styled(Button)`
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
  name: string
  updateFilter: (value: string) => void
}

export const SearchFilterModal = ({
  setIsVisible,
  updateFilter,
  name,
}: ModalState) => {
  return (
    <Container>
      <Header>
        <CustomText>{name}</CustomText>
        <StyledButtonBack onPress={() => setIsVisible(false)}>
          <TextClearButton>Back</TextClearButton>
        </StyledButtonBack>
      </Header>

      <Input updateFilter={updateFilter} />
    </Container>
  )
}
