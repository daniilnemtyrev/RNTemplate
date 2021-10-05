import React from 'react'
import { View } from 'react-native'

import { StateSetter } from './filters-context'

interface ModalState {
  setIsVisible: StateSetter<boolean>
}

export const NameFilterModal = ({ setIsVisible }: ModalState) => {
  return <View />
}
