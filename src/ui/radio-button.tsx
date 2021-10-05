import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import { ifProp } from 'styled-tools'

import { colors } from 'src/theme/colors'

interface StyledProps {
  status: string | undefined
}

const RadioBlock = styled.TouchableOpacity<StyledProps>`
  background-color: ${ifProp(
    { status: 'checked' },
    colors.purple,
    colors.white,
  )};
`

interface Props extends TouchableOpacityProps {
  onPress?: () => void
  status?: string
  title?: string
}

export const RadioButton = ({ onPress, status, title, ...rest }: Props) => {
  return <RadioBlock onPress={onPress} status={status} {...rest} />
}
