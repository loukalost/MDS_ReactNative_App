/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text
} from 'react-native'
import Clock from './components/Clock'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function HomeScreen () {
  return (
    <SafeAreaView style={{
      backgroundColor: 'white',
      margin: 'auto',
      width: '100%',
      padding: '60'
    }}
    >
      <ScrollView contentInsetAdjustmentBehavior='scrollableAxes'>
        <View>
          <Text>COUCOU</Text>
          <Clock fontSize={30} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen
  }
})

const Navigation = createStaticNavigation(RootStack)

export default function App () {
  return <Navigation />
}
