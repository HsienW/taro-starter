import React from 'react';
import Taro from '@tarojs/taro';
import {View} from '@tarojs/components';
import {Button} from '@nutui/nutui-react-taro';
import './portal.scss';

export default class Portal extends React.Component {
  constructor() {
    super(...arguments);
    this.pageContext = Taro.getCurrentInstance().page;
    this.state = {}
  }

  componentDidShow() {
    const tabBar = Taro.getTabBar(this.pageContext);
    tabBar.setSelected(0);
  }

  pageNavigateTo(path) {
    Taro.navigateTo({
      url: path
    })
  }

  render() {
    return (
      <View className='page-wrapper'>
        <View className='content'>
          <View>Portal</View>
          <Button type='primary'>Portal</Button>
        </View>
      </View>
    )
  }
}

