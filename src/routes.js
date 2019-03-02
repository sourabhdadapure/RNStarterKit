import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Splash, LogIn } from './screens'

const AppStack = createStackNavigator({
	Splash: { screen: Splash },
	LogIn: { screen: LogIn },
})

const App = createAppContainer(AppStack)

export default class Routes extends React.Component {
	render() {
		return <App />
	}
}
