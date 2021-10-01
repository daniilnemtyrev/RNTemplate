import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CharacterScreen } from 'src/modules/character'
import { EpisodeScreen } from 'src/modules/episode'
import { LocationScreen } from 'src/modules/location'
import { CharctIcon } from 'src/resources/image/navigation/character-icon'
import { EpisodeIcon } from 'src/resources/image/navigation/episode-icon'
import { LocationIcon } from 'src/resources/image/navigation/location-icon'
import { colors } from 'src/theme/colors'

import { Routes } from './routes'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.CharacterScreen}>
      <Tab.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
        options={{
          headerTitle: 'Character',
          tabBarLabel: 'Character',
          headerStyle: {
            backgroundColor: colors.gray[1],
            height: 140,
          },
          headerTitleStyle: {
            fontSize: 34,
            fontWeight: 'bold',
            lineHeight: 41,
            color: colors.gray[0],
            marginRight: 200,
            marginTop: 50,
          },

          tabBarIcon: ({ focused }) => (
            <CharctIcon color={focused ? colors.purple : colors.gray[2]} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({ focused }) => (
            <LocationIcon color={focused ? colors.purple : colors.gray[2]} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          headerTitle: 'Episode',
          tabBarLabel: 'Episode',
          tabBarIcon: ({ focused }) => (
            <EpisodeIcon color={focused ? colors.purple : colors.gray[2]} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
