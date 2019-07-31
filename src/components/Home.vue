<template>
  <div class="home">
    <div class="header">
      <div class="inner">
        <div class="logo">
          <img src="../assets/images/home_02.jpg" alt />
        </div>
        <div class="right">
          <div class="message">
            <a href>
              <img src="../assets/images/home_04.jpg" alt />
            </a>
          </div>
          <div class="denglu">
            <ul>
              <li>
                <a href>登录</a>
              </li>
              <li>/</li>
              <li>
                <a href>注册</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="inner">
        <swiper :options="swiperOption1" class="mySwiper-1">
          <swiper-slide>
            <a href>
              <img src="../assets/images/home_09.jpg" alt />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href>
              <img src="../assets/images/home_11.jpg" alt />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href>
              <img src="../assets/images/home_13.jpg" alt />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href>
              <img src="../assets/images/home_09.jpg" alt />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href>
              <img src="../assets/images/home_11.jpg" alt />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href>
              <img src="../assets/images/home_13.jpg" alt />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href>
              <img src="../assets/images/home_09.jpg" alt />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href>
              <img src="../assets/images/home_11.jpg" alt />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href>
              <img src="../assets/images/home_13.jpg" alt />
            </a>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <div class="main1">
      <div class="inner">
        <div class="content">
          <div class="left">
            <div class="title">
              <img src="../assets/images/yushou_32.jpg" alt />
              <h4>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h4>
            </div>
            <div class="daojishi">
              <span>距预售结束</span>
              <div class="box">
                <div class="box1">
                  <p>{{day}}</p>
                  <span>天</span>
                </div>
                <div class="box1">
                  <span>:</span>
                </div>
                <div class="box1">
                  <p>{{hour}}</p>
                  <span>时</span>
                </div>
                <div class="box1">
                  <span>:</span>
                </div>
                <div class="box1">
                  <p>{{minute}}</p>
                  <span>分</span>
                </div>
                <div class="box1">
                  <span>:</span>
                </div>
                <div class="box1">
                  <p>{{second}}</p>
                  <span>秒</span>
                </div>
              </div>
              <span>
                <span>注：</span>商品将于
                <span>2019年8月6日</span>统一发货
              </span>
            </div>
          </div>
          <div class="right">
            <div class="right1">
              <div class="left">
                <span>预售价</span>
              </div>
              <div class="rightt">
                <p>
                  <span>￥</span>700.00
                </p>
                <span>
                  正价
                  <span>￥960.00</span>
                </span>
              </div>
            </div>
            <div class="right2">
              <div class="left">
                <span>款式</span>
              </div>
              <div class="right">
                <span
                  v-for="type in types"
                  :key="type.id"
                  @click="$store.commit('changetype',{id:type.id})"
                  :class="type.checked?'active':''"
                >{{type.type}}</span>
              </div>
            </div>
            <div class="right3">
              <div class="left">
                <span>尺码</span>
              </div>
              <div class="right">
                <span
                  v-for="size in sizes"
                  :key="size.id"
                  @click="$store.commit('changesize',{id:size.id})"
                  :class="size.checked?'active':''"
                >{{size.size}}</span>
              </div>
            </div>
            <div class="right4">
              <div class="left">
                <span>数量</span>
              </div>
              <div class="right">
                <button @click="$store.commit('sub1')">-</button>
                <span>{{count}}</span>
                <button @click="$store.commit('add1')">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="yuding">
          <button @click="begin">立即预订</button>
        </div>
        <img src="../assets/images/home_26.jpg" alt style="marginTop:150px;marginLeft:-50px" />
      </div>
    </div>
    <div class="footer3">
      <div class="logo">
        <img src="../assets/images/black-logo_146.jpg" alt />
      </div>
      <div class="content">
        <div class="left">
          <p>关注魔赞微信公众号</p>
          <p>获得更多礼包</p>
          <p>魔赞微信号：morethancc</p>
          <img src="../assets/images/home_30.jpg" alt />
        </div>
        <div class="right">
          <p>关于魔赞 / MORETHAN</p>
          <p>魔赞是开普乐旗下的IP周边专属品牌</p>
          <p>正版授权，原创设计</p>
          <p>超值礼包，一流品质</p>
          <p>这就是魔赞对周边的定义</p>
          <p>这更是魔赞对玩家的承诺</p>
          <p>我们称之为</p>
          <p>[margical & more]</p>
        </div>
      </div>
    </div>
    <div class="footer4">
      <p>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights res</p>
      <p>地址：北京市朝阳区建国路93号院4号楼4层505</p>
    </div>
  </div>
</template>

<script>
import "../../swiper/swiper.css";
import { mapState } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import moment from "moment";
export default {
  name: "home",
  components: {
    swiper,
    swiperSlide
  },
  created() {
    setInterval(() => {
      const m1 = moment().format("YYYY-MM-DD HH:mm:ss");
      this.day = moment(this.m).diff(m1, "day");
      this.hour = moment(this.m).diff(m1, "hour") - 24 * this.day;
      this.minute =
        moment(this.m).diff(m1, "minute") - 24 * this.day * 60 - 60 * this.hour;
      this.second =
        moment(this.m).diff(m1, "second") -
        24 * this.day * 60 * 60 -
        60 * this.hour * 60 -
        60 * this.minute;
    }, 500);
  },
  computed: {
    ...mapState({
      count: state => state.products.count,
      sizes: state => state.products.sizes,
      types: state => state.products.types
    })
  },

  data() {
    return {
      m: "2019-08-06 11:00:00",
      day: null,
      hour: null,
      minute: null,
      second: null,
      swiperOption1: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        width: 1100,
        height: 348,
        direction: "horizontal", 
        loop: true, 
        slidesPerView: 3,
        spaceBetween: 28
      }
    };
  },
  methods: {
    begin() {
      if (!this.sizes.find(item => item.checked)) {
        alert("请选择商品尺寸");
      } else if (!this.types.find(item => item.checked)) {
        alert("请选择商品款式");
      } else {
        this.$store.commit("getNewProduct");
        this.$router.push(`${this.$publicUrl}/cart2`);
      }
    }
  }
};
</script>

<style lang="scss">
.footer4 {
  padding: 25px 0;
  text-align: center;
  background-color: #2b2e33;
  p {
    font-size: 11px;
    line-height: 19px;
    color: #707479;
  }
}
.footer3 {
  background-color: #000;
  .logo {
    margin: 0 auto;
    width: 185px;
  }
  .content {
    width: 417px;
    margin: 0 auto;
    display: flex;
    .left {
      text-align-last: right;
      margin-right: 30px;
      img {
        display: inline;
      }
    }
    .right {
      text-align: left;
    }
    p {
      font-size: 14px;
      line-height: 18px;
      color: #fff;
    }
    img {
      margin-top: 7px;
    }
  }
}
.main1 > .inner {
  padding: 30px 50px 0 50px;
  .yuding {
    margin-top: 20px;
    button {
      width: 100%;
      text-align: center;
      color: #f6d301;
      border: 3px solid #f6d301;
      line-height: 84px;
      border-radius: 5px;
      background-color: #2b2e33;
    }
  }
  .content {
    padding-bottom: 20px;
    border-bottom: 1px solid #4f4f4f;

    display: flex;

    > .left {
      border-right: 1px solid #707378;
      margin-right: 100px;
    }
    > .right {
      display: flex;
      flex-direction: column;
      margin-left: 50px;
      .right1,
      .right2,
      .right3,
      .right4 {
        display: flex;
      }
      .left {
        margin-right: 30px;
        flex-shrink: 0;
        margin-left: 0;
        border: 0;
        span {
          width: 64px;
          font-size: 14px;
          line-height: 26px;
          text-align: center;
          color: #000;
          background-color: #fff;
          border-radius: 5px;
        }
      }
      .right {
        display: flex;
        flex-direction: row;
        span {
          display: inline;
          border: 1px solid #fff;
          color: #fff;
          padding: 8px;
          font-size: 11px;
          margin-right: 6px;
          margin-bottom: 6px;
          border-radius: 5px;
          cursor: pointer;
        }
        span.active {
          background-color: #fff;
          color: #000;
        }
      }
      .right1 .rightt {
        p {
          font-size: 30px;
          color: #f6d301;
          display: flex;
          margin-bottom: 10px;
          span {
            font-size: 18px;
            align-self: flex-end;
          }
        }
        > span {
          font-size: 15px;
          border: 0;
          padding: 0;
          color: #fff;
          display: flex;
          span {
            text-decoration: line-through;
          }
        }
        margin-bottom: 30px;
      }
      .right2 {
        margin-bottom: 30px;
      }
      .right4 {
        display: flex;
        align-content: space-around;
        margin-top: 30px;
        button {
          font-size: 12px;
          background-color: #2b2e33;
          border: 1px solid #fff;
          border-radius: 5px;
          width: 68px;
          text-align: center;
          line-height: 36px;
          flex-shrink: 0;
          color: #fff;
        }
        .right {
          display: flex;
          span {
            flex-grow: 1;
            display: block;
            border: 0;
            text-align: center;
            color: #fff;
            &:hover {
              background-color: #2b2e33;
              color: #fff;
            }
          }
        }
      }
    }
  }
  .title {
    display: flex;
    h4 {
      font-size: 34px;
      line-height: 45px;
      color: #fff;
      margin-left: 30px;
      width: 410px;
    }
  }
  .box {
    display: flex;
    background-color: #707378;
    padding: 8px 20px;
    border-radius: 5px;
    .box1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 30px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      &:nth-child(2n) {
        flex-direction: row;
      }

      > span {
        margin-top: 16px;
      }
      p,
      span {
        color: #fdd900;
        display: block;
      }
      p {
        font-size: 32px;
        margin-bottom: 5px;
      }
      span {
        font-size: 12px;
        margin-top: 0;
      }
    }
  }
  .daojishi > span {
    display: flex;
    font-size: 14px;
    margin-top: 16px;
    color: #fff;
    &:first-child {
      margin-top: 0;
      font-size: 12px;
      color: #4f4f4f;
      margin-bottom: 5px;
    }
  }
}
.swiper-container {
  width: 1100px;
  overflow: hidden;
  margin: 0 auto;
}
.swiper-wrapper {
  width: 1100px;
  height: 348px;
  transform: translate3d(-376px, 0px, 0px);
  transition-duration: 0s;
  position: relative;
  display: flex;
  .swiper-button-prev,
  .swiper-button-next {
    left: -50px;
    top: 147px;
    width: 36px;
    line-height: 120px;
    background: none;
    background-color: #443b07;
    font-size: 36px;
    text-align: center;
    color: #f6d301;
  }
  .swiper-button-next {
    right: -50px;
  }
}
.swiper-slide {
  width: 348px;
  height: 348px;
  img {
    width: 348px;
    height: 348px;
  }
}
.home {
  // width: 28.8rem;
  height: 5090px;
  background-image: url("./../assets/images/bg2_02.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.banner .inner {
  background-image: url("../assets/images/home_16.jpg");
  padding: 33px 50px;
}
.inner {
  width: 1200px;
  margin: 0 auto;
}
.header {
  width: 100%;
  background-color: #2b2e33;
}
.header .inner {
  display: flex;
  align-items: center;
  .logo {
    flex-grow: 1;
    margin-left: 505px;

    img {
      display: inline;
      height: 90px;
      display: block;
    }
  }
  .right {
    flex-shrink: 0;
    margin-right: 37px;
    display: flex;
    img {
      height: 90px;
      display: block;
    }
    .denglu {
      display: flex;
      align-items: center;
      ul {
        display: flex;
      }
      li {
        margin-right: 5px;
        color: #707479;
        font-size: 10px;
      }
      a {
        color: #707479;
        font-size: 10px;
      }
    }
  }
}
</style>
