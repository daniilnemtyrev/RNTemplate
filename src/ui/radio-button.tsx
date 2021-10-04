import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const RadioBlock = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
`

interface Props extends TouchableOpacityProps {
  onPress?: () => void
  status?: string
  title?: string
}

export const RadioButton = ({ onPress, status, title, ...rest }: Props) => {
  return (
    <RadioBlock
      onPress={onPress}
      {...rest}
      color={status === 'checked' ? colors.purple : colors.white}
    />
  )
}
