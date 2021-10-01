import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { colors } from 'src/theme/colors'

interface Props {
  color?: string
}

export const LocationIcon = ({ color = colors.gray[3] }: Props) => {
  return (
    <Svg width={28} height={19} fill="none">
      <Path
        d="M22.424 10.816c3.066 2.46 4.771 4.635 4.183 5.653-.93 1.607-7.228-.285-14.068-4.226S.91 3.804 1.837 2.198c.582-1.004 3.26-.642 6.857.734"
        stroke={color}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M14.222 17.666a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"
        stroke={color}
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}
