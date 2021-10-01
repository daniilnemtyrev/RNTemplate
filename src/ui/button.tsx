import React, { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import { ifProp } from 'styled-tools'

import { colors } from 'src/theme/colors'

const ButtonBlock = styled.TouchableOpacity<{ isDisabled?: boolean }>``
const Title = styled.Text`
  font-family: 'Montserrat-Bold';
  text-align: center;
  color: ${colors.white};
  font-size: 12px;
`

interface Props extends TouchableOpacityProps {
  title?: string
  children?: ReactNode
  onPress?: () => void
}

export const Button = ({ children, onPress, title, ...rest }: Props) => {
  return (
    <ButtonBlock
      isDisabled={Boolean(rest.disabled)}
      onPress={onPress}
      {...rest}>
      <Title>{title}</Title>
      {children}
    </ButtonBlock>
  )
}
