import React, { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

import { Search } from 'src/resources/image/input/Search'
import { colors } from 'src/theme/colors'

const SearchSection = styled.View`
  width: 90%;
  height: 36px;
  background-color: ${colors.gray[1]};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`

const InputBlock = styled.TextInput<{ isDisabled?: boolean }>`
  width: 90%;
  height: 36px;
  background-color: ${colors.gray[1]};
  opacity: 0.36;
  padding-left: 11px;
`

interface Props extends TouchableOpacityProps {
  children?: ReactNode
  updateFilter: (value: string) => void
}

export const Input = ({ children, updateFilter, ...rest }: Props) => {
  return (
    <SearchSection>
      <Search />
      <InputBlock
        isDisabled={Boolean(rest.disabled)}
        placeholder={'Search'}
        placeholderTextColor={colors.black}
        onChangeText={(value) => updateFilter(value)}
        {...rest}>
        {children}
      </InputBlock>
    </SearchSection>
  )
}
