import React, { ReactNode, useEffect, useState } from 'react'
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import Voice from '@react-native-community/voice'
import styled from 'styled-components/native'

import { useCharacterFiltersContext } from 'src/components/characters/filters-context'
import { Dictation } from 'src/resources/image/input/Dictation'
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
  padding-left: 11px;
  padding-right: 11px;
`

const InputBlock = styled.TextInput<{ isDisabled?: boolean }>`
  width: 90%;
  height: 36px;
  background-color: ${colors.gray[1]};
  opacity: 0.36;
  padding-left: 11px;
`
const VoiceIcon = styled(Dictation)`
  margin-right: 80px;
`

interface Props extends TouchableOpacityProps {
  children?: ReactNode
  value: string
  updateFilter: (value: string) => void
}

export const Input = ({ children, value, updateFilter, ...rest }: Props) => {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler
    Voice.onSpeechEnd = onSpeechEndHandler
    Voice.onSpeechResults = onSpeechResultsHandler

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const onSpeechStartHandler = (e) => {
    console.log('start handler==>>>', e)
  }

  const onSpeechEndHandler = (e) => {
    setLoading(false)
  }

  const onSpeechResultsHandler = (e) => {
    const text = e.value[0]
    updateFilter(text)
  }

  const startRecording = async () => {
    setLoading(true)

    try {
      await Voice.start('en-Us')
    } catch (error) {
      console.log('error raised', error)
    }
  }

  const stopRecording = async () => {
    try {
      await Voice.stop()
    } catch (error) {
      console.log('error raised', error)
    }
  }

  return (
    <SearchSection>
      <Search />
      <InputBlock
        isDisabled={Boolean(rest.disabled)}
        placeholder={'Search'}
        value={value}
        placeholderTextColor={colors.black}
        onChangeText={(eventText) => updateFilter(eventText)}
        {...rest}>
        {children}
      </InputBlock>
      {isLoading ? (
        <TouchableOpacity
          onPress={() => {
            stopRecording
            setLoading(false)
          }}>
          <ActivityIndicator />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={startRecording}>
          <VoiceIcon />
        </TouchableOpacity>
      )}
    </SearchSection>
  )
}
