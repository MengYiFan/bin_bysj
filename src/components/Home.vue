<template>
  <div class="home-container">
    <mu-carousel :active="active">
      <mu-icon value="arrow_back" slot="left"></mu-icon>
      <mu-icon value="arrow_forward" slot="right"></mu-icon>
      <template slot="indicator" slot-scope="{ index, active }">
        <mu-button icon
        class="mu-carousel-indicator-button"
        :class="{'mu-carousel-indicator-button__active': active}"
        @click="changeActive(index)">
          <span class="rect-indicator"></span>
        </mu-button>
      </template>
      <mu-carousel-item>
        <img :src="homeImg1">
      </mu-carousel-item>
      <mu-carousel-item>
        <img :src="homeImg2">
      </mu-carousel-item>
      <mu-carousel-item>
        <img :src="homeImg3">
      </mu-carousel-item>
    </mu-carousel>

    <div class="content">
      <p class="title">热门推荐</p>
      <div class="card-list">
        <div v-for="item of recommend" :key="item.title" class="card-item amt-shadow">
          <img :src="item.src" class="card-img">
          <div class="card-body">
            <span class="card-body-title">{{item.title}}</span>
            <p class="card-body-desc">{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <img class="cover amt-shadow" :src="heng" style="height: 250px;" />
    </div>

    <div class="content" style="margin-bottom: 50px;">
      <p class="title">热门景点</p>
      <div class="flex">
        <img class="bunch amt-shadow" :src="shu" />
        <div>
          <div class="card-list" style="height: 240px;">
            <div v-for="item of top" :key="item.title" class="card-item amt-shadow">
              <img :src="item.src" class="card-img" style="height: 160px;">
              <div class="card-body">
                <span class="card-body-title">{{item.title}}</span>
              </div>
            </div>
          </div>
          <div class="card-list" style="height: 240px; margin-top: 20px;">
            <div v-for="item of top2" :key="item.title" class="card-item amt-shadow">
              <img :src="item.src" class="card-img" style="height: 160px;">
              <div class="card-body">
                <span class="card-body-title">{{item.title}}</span>
                <p class="card-body-desc">{{item.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeImg1 from '../assets/home-1.jpg'
import homeImg2 from '../assets/home-2.jpg'
import homeImg3 from '../assets/home-3.jpg'

import homeImg4 from '../assets/home-4.jpg'
import homeImg5 from '../assets/home-5.jpg'
import homeImg6 from '../assets/home-6.jpg'
import homeImg7 from '../assets/home-7.jpg'

import heng from '../assets/home-heng.jpg'
import shu from '../assets/shu.jpg'

import t10 from '../assets/t10.jpeg'
import t9 from '../assets/t9.jpeg'
import t8 from '../assets/t8.jpeg'
import t7 from '../assets/t7.jpeg'
import t6 from '../assets/t6.jpeg'
import t5 from '../assets/t5.jpeg'
import t4 from '../assets/t4.jpeg'
import t3 from '../assets/t3.jpeg'

export default {
  name: 'Home',
  data () {
    return {
      homeImg1,
      homeImg2,
      homeImg3,
      active: 0,
      recommend: [{
        src: homeImg4,
        title: '大阪',
        content: '历史重地大阪城、世界最大水族馆──大阪海游馆以及高耸入云的梅田蓝天大厦都是必到景点。'
      }, {
        src: homeImg5,
        title: '澳门',
        content: '澳门曾经是葡萄牙殖民地，现今则有亚洲拉斯维加斯的美誉。'
      }, {
        src: homeImg6,
        title: '东京',
        content: '东京是全世界最著名的现代大都会，每年已经有超过一千万旅客到访，其新旧并存的风情还会吸引更多人朝圣。'
      }, {
        src: homeImg7,
        title: '新加坡',
        content: '文化多元融合的新加坡有太多精彩等你发现！在金沙空中花园观景台俯瞰新加坡全景，在滨海艺术中心听一场演唱会，在圣淘沙像飞鹰一样穿梭雨林海滩，体验绳索探险，在牛车水品尝多样美食，看这里是如何将传统和本地特色相互融合。'
      }],
      heng,
      shu,
      top: [{
        src: t10,
        title: '巴厘岛'
      }, {
        src: t9,
        title: '埃及阿布辛贝神庙'
      }, {
        src: t8,
        title: '瑞士策马特峰'
      }, {
        src: t7,
        title: '迪拜'
      }],
      top2: [{
        src: t3,
        title: '美国约塞米蒂国家公园'
      },
      {
        src: t6,
        title: '罗马'
      }, {
        src: t5,
        title: '巴西的里约热内卢'
      }, {
        src: t4,
        title: '巴黎'
      }]
    }
  },
  methods: {
    changeActive (index) {
      this.active = index
    }
  }
}
</script>
