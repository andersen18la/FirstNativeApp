import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

/*export default class FlexBox extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
       //flex direction kan være row eller column
            //justify content kan bruges til at aligne items.
            //justifyContent: 'space-between' giver mellemrum mellem items.
            //justifyContent: 'center' centrerer enten øverst eller til venstre.
            //alignItems: 'center' centrerer items i midten.
            //mere info: https://facebook.github.io/react-native/docs/layout-props.html
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
*/ 
export default class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
