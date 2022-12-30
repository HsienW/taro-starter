import {Component} from 'react';
import Taro from '@tarojs/taro';
import {View, Image} from '@tarojs/components';
import './index.scss'

export default class Index extends Component {
  state = {
    selected: 0,
    color: '#000000',
    selectedColor: '#36B98D',
    list: [
      {
        pagePath: '/pages/portal/portal',
        text: '首页',
        selectedIconPath: '../assets/icons/home-2.png',
        iconPath: '../assets/icons/home-1.png',
      },
      {
        pagePath: '/pages/account/account',
        text: '我的',
        selectedIconPath: '../assets/icons/user-2.png',
        iconPath: '../assets/icons/user-1.png',
      },
    ]
  }

  switchTab(index, url) {
    this.setSelected(index)
    Taro.switchTab({url})
  }

  setSelected(index) {
    this.setState({
      selected: index
    })
  }

  render() {
    const {list, selected, color, selectedColor} = this.state

    return (
      <View className='tab-bar'>
        <View className='tab-bar-border'/>
        {
          list.map((item, index) => {
            return (
              <View
                key={index}
                className='tab-bar-item'
                onClick={this.switchTab.bind(this, index, item.pagePath)}
              >
                <Image
                  src={
                    selected === index
                      ? item.selectedIconPath
                      : item.iconPath
                  }
                />
                <View style={{color: selected === index ? selectedColor : color}}>
                  {item.text}
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}
