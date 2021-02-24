import 'react-native-gesture-handler';
import React from 'react'
import {Text,View,SafeAreaView,StyleSheet} from 'react-native'
import SearchScreen from './src/screens/SearchScreen'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import ResultShowScreen from './src/screens/ResultShowScreen'


const navigator = createStackNavigator({
  Search:SearchScreen,
  Result:ResultShowScreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions:{title:'News App'}
})

export default createAppContainer(navigator)

// const App = () => {
//   return <View>
//     <SafeAreaView style={styles.bodyStyle}>
//       <SearchScreen/>
//     </SafeAreaView>
//   </View>
// }

// const styles = StyleSheet.create({})

// export default App;