import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { Button } from 'src/ui/button'

const Container = styled.View`
  background: ${colors.white};
`

const Header = styled.View`
  width: 100%;
  height: 570px;
  align-items: center;
  padding-top: 21px;
`

const StyledButton = styled(Button)`
  background: ${colors.purple};
  padding: 5px 12px;
  border-radius: 24px;
`
const CustomText = styled.Text``

export const CharactersFilterModal = () => {
  return (
    <Container>
      <Header>
        <StyledButton title={'APPLY'}>
          <CustomText>Filter</CustomText>
        </StyledButton>
      </Header>
    </Container>
  )
}
