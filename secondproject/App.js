import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import Basics from './Components/Basics';
import Props from './Components/Props';
import State from './Components/State';
import Style from './Components/Style';
import HeightWidth from './Components/HeightWidth';
import WidthHeight from './Components/WidthHeight';
import WhatToDo from './Components/WhatToDo';
import FlexBox from './Components/FlexBox';
import TextInput from './Components/TextInput';
import Touches from './Components/Touches';
import ScrollView2 from './Components/ScrollView2';
import ListViews from './Components/ListViews';
import NetWorking from './Components/NetWorking';


//Todo: Refactor into a seperate file (Basics.js), import and complete the exercise

//Todo: Refactor into a seperate file (Props.js), import and complete the exercise

//Todo: Create a new file (State.js), import it, add a "Touchable", and complete the exercise

//Todo: Create a new file (Style.js), import it, add a "Touchable", and complete the exercise

//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise

//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise

//Todo: Create a new file (FlexBox.js), import it,add a "Touchable", and complete the exercise

//Todo: Create a new file (TextInput.js), import it,add a "Touchable", and complete the exercise

//Todo: Create a new file (Touches.js), import it,add a "Touchable", and complete the exercise

//Todo: Create a new file (ScrollView.js), import it,add a "Touchable", and complete the exercise

//Todo: Create a new file (ListViews.js), import it,add a "Touchable", and complete the exercise

//Todo: Create a new file (NetWorking.js), import it,add a "Touchable", and complete the exercise


const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

//Todo: Refactor into a seperate file (WhatToDo.js), import and complete the exercise


class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
      <View >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by Cph-la173</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('state')} title="State" />
        <Touchable onPress={() => navigate('style')} title="Style" />
        <Touchable onPress={() => navigate('heightwidth')} title="HeightWidth" />
        <Touchable onPress={() => navigate('widthheight')} title="WidthHeight" />
        <Touchable onPress={() => navigate('flexBox')} title="FlexBox" />
        <Touchable onPress={() => navigate('textInput')} title="TextInput" />
        <Touchable onPress={() => navigate('touches')} title="Touches" /> 
        <Touchable onPress={() => navigate('scrollView')} title="ScrollView" />
        <Touchable onPress={() => navigate('listViews')} title="ListViews" /> 
        <Touchable onPress={() => navigate('netWorking')} title="NetWorking" />        
        
        
      </View>
      </ScrollView>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  state: { screen: State },
  web: { screen: WhatToDo },
  style: { screen: Style },
  heightwidth: { screen: HeightWidth },
  widthheight: { screen: WidthHeight },
  flexBox: { screen: FlexBox },
  textInput: { screen: TextInput },
  touches: { screen: Touches},
  scrollView: { screen: ScrollView},
  listViews: { screen: ListViews},
  netWorking: {screen: NetWorking},
  
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})