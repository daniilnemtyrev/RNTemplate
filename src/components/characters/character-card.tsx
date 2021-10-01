import React from 'react'
import { ICharacter } from 'interfaces/character/ICharacter'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Container = styled.View`
  width: 163px;
  height: 219px;
  background: ${colors.white};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin: 9px 9px;
`
const CustomImage = styled.Image`
  width: 100%;
  height: 140px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
const TextContainer = styled.View`
  width: 100%;
  padding-top: 12px;
  padding-left: 12px;
`

const Status = styled.Text`
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  text-align: left;
  color: ${colors.gray[2]};
`
const Name = styled.Text`
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
`

export const CharacterCard = ({ name, status, image }: ICharacter) => {
  return (
    <Container>
      <CustomImage source={{ uri: `${image}` }} />
      <TextContainer>
        <Status>{status}</Status>
        <Name>{name}</Name>
      </TextContainer>
    </Container>
  )
}
