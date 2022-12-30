import React from 'react';
import Taro from '@tarojs/taro';
import {View} from '@tarojs/components';
import './account.scss';

export default class Account extends React.Component {
  constructor() {
    super(...arguments);
    this.pageContext = Taro.getCurrentInstance().page;
    this.state = {
    }
  }

  componentDidShow() {
    const tabBar = Taro.getTabBar(this.pageContext);
    tabBar.setSelected(1);
  }

  render() {
    return (
      <View className='page-wrapper'>
        <View className='content'>
          <View>Account</View>
        </View>
      </View>
    )
  }
}

