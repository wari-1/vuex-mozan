<template>
  <div class="shouyingtai">
    <Header />
    <div class="main6">
      <div class="inner">
        <div class="top">
          <div class="title">
            <span></span>
            <h2>收银台</h2>
          </div>
          <ul class="nav">
            <li :class="$route.fullPath===`${$publicUrl}/cart1`?'active':''">购物车</li>
            <li :class="$route.fullPath===`${$publicUrl}/order`?'active':''">填写订单</li>
            <li :class="$route.fullPath===`${$publicUrl}/shouyingtai1`?'active':''">付款，完成订单</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main10">
      <div class="inner">
        <div class="box">
          <img src="../assets/images/money1_03.jpg" alt />
          <span>
            应付金额：
            <span>￥{{choseTotal}}</span>
          </span>
        </div>
      </div>
    </div>
    <div class="main9" v-if="newAddress">
      <div class="inner">
        <div class="boxx">
          <div class="left">
            <span>订单号：12345678912345</span>
          </div>
          <div class="right">
            <div class="topp">
              <span class="name">{{newAddress.name}}</span>
              <span class="phone">{{newAddress.phoneNum}}</span>
            </div>
            <div class="bottom">
              <span>{{newAddress.text}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main12">
      <div class="inner">
        <div class="left">
          <span>微信支付</span>
        </div>
        <div class="center">
          <span>
            距离二维码过期，还剩
            <span>{{count}}</span>秒
          </span>
          <span>过期后请重新刷新页面，获取二维码</span>
          <img src="../assets/images/weichat_06.jpg" alt />
        </div>
        <div class="right">
          <img src="../assets/images/weichat_03.jpg" alt />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import { mapGetters, mapState } from "vuex";
export default {
  name: "order",
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["choseTotal", "newAddress"]),
    ...mapState({
      count: state => state.products.count
    })
  },
  created() {
    this.$store.commit("getCode");
    setTimeout(() => {
      this.$router.push(`${this.$publicUrl}/shouyingtai4`);
    }, 10000);
  }
};
</script>

<style lang="scss">
.main12 .inner {
  padding: 20px 50px;
  display: flex;
  background-color: #fff;
  padding-bottom: 405px;
  .center {
    font-size: 14px;
    color: #2a2d32;
    line-height: 18px;
    margin: 0 140px;
    text-align: center;
    span {
      display: flex;
    }
  }
}
.shouyingtai {
  margin-top: 0;
  .foot {
    padding-bottom: 315px;
  }
}
span > span {
  color: red;
}
.main10 .inner {
  padding: 0px 50px;
  background-color: #fff;
  .box {
    display: flex;
    padding: 20px 0;
    align-items: center;
    border-bottom: 2px solid #2b2e33;
    > span {
      display: flex;
      color: #2a2d32;
      > span {
        color: red;
        font-size: 20px;
      }
    }
  }
}
.main9 .boxx {
  .left {
    flex-grow: 1;
  }
  .right {
    flex-shrink: 0;
    .topp {
      text-align: right;
      justify-content: flex-end;
    }
    span {
      font-size: 12px;
      line-height: 20px;
      padding-left: 20px;
      background-position: 0 0;
      background-repeat: no-repeat;
      color: #2b2f32;
    }
    span.name {
      margin-right: 5px;
    }
    .bottom {
      display: flex;
      flex-grow: row;
    }
  }
}
.inner {
  // padding: 0 50px;
  // background-color: #fff;
}
.shouyingtai {
  background-image: url("../assets/images/main-bg_21.jpg");
  width: 100%;
  user-select: none;
}
</style>
