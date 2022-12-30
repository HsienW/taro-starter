import React from 'react';
import {View} from '@tarojs/components';
import './sub-app1.scss';

export default class SubApp1 extends React.Component {

  render() {
    return (
      <View className='page-wrapper'>
        <View className='content'>
          <View>SubApp1</View>
        </View>
      </View>
    )
  }
}

