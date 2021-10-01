import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { colors } from 'src/theme/colors'

interface Props {
  color?: string
}

export const EpisodeIcon = ({ color = colors.gray[3] }: Props) => {
  return (
    <Svg width={29} height={28} fill="none">
      <Path
        d="M24 8.167H5.331A2.333 2.333 0 003 10.5v12.833a2.333 2.333 0 002.333 2.334H24a2.333 2.333 0 002.333-2.334V10.5A2.333 2.333 0 0024 8.167zM20.5 2.333l-5.834 5.834-5.834-5.834"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
