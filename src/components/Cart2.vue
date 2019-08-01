<template>
  <div class="cart2">
    <Header />
    <div class="main3">
      <div class="inner">
        <img src="../assets/images/cart2_03.jpg" alt />
      </div>
    </div>
    <div class="main4" v-if="choseProduct">
      <div class="inner">
        <div class="box">
          <img src="../assets/images/home_09.jpg" alt />
          <div class="center">
            <div class="left">
              <h4>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h4>
            </div>
            <div class="right">
              <span>款式:{{choseProduct.type}}</span>
              <span>尺码:{{choseProduct.size}}</span>
              <span>数量:x{{choseProduct.count}}</span>
            </div>
          </div>
          <div class="right">
            <span href class="back" @click="$router.back(-1)">返回</span>
            <span href class="jiesuan" @click="begin2">去购物车结算</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main5">
      <div class="inner">
        <div class="title">
          <h5>你可能还需要</h5>
          <span></span>
        </div>

        <div class="box">
          <div class="box1">
            <img src="../assets/images/cart2_07.jpg" alt />
            <h6>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h6>
            <div class="bottom">
              <span>￥88.00</span>
              <img src="../assets/images/cart2_11.jpg" alt />
            </div>
          </div>
          <div class="box1">
            <img src="../assets/images/cart2_07.jpg" alt />
            <h6>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h6>
            <div class="bottom">
              <span>￥88.00</span>
              <img src="../assets/images/cart2_11.jpg" alt />
            </div>
          </div>
          <div class="box1">
            <img src="../assets/images/cart2_07.jpg" alt />
            <h6>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h6>
            <div class="bottom">
              <span>￥88.00</span>
              <img src="../assets/images/cart2_11.jpg" alt />
            </div>
          </div>
          <div class="box1">
            <img src="../assets/images/cart2_07.jpg" alt />
            <h6>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h6>
            <div class="bottom">
              <span>￥88.00</span>
              <img src="../assets/images/cart2_11.jpg" alt />
            </div>
          </div>
          <div class="box1">
            <img src="../assets/images/cart2_07.jpg" alt />
            <h6>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h6>
            <div class="bottom">
              <span>￥88.00</span>
              <img src="../assets/images/cart2_11.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "cart1",
  components: {
    Header,
    Footer
  },
  methods: {
    begin2() {
      this.$router.push(`${this.$publicUrl}/cart1`);
    }
  },
  computed: {
    ...mapState({
      choseProduct: state => state.products.choseProduct
    })
  }
};
</script>

<style lang="scss">
.main5 {
  .inner {
    padding: 20px 50px 122px 50px;
    background-color: #fff;
    .title {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      span {
        background-color: #fdd901;
        height: 2px;
        flex-grow: 1;
      }
      h4 {
        color: #2b2f32;
        font-size: 16px;
        flex-shrink: 0;
      }
    }
    .box {
      display: flex;
      .box1 {
        display: flex;
        flex-direction: column;
        margin-left: 30px;
        border: 1px solid #f0f0f0;
        &:first-child {
          margin-left: 0;
        }
        img {
          margin-bottom: 5px;
        }
        h6 {
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 48px;
          width: 160px;
          padding-left: 10px;
        }
      }
    }
    .bottom {
      display: flex;
      padding: 0 10px;
      margin-bottom: 14px;
      span {
        color: #dd2326;
        font-size: 20px;
        margin-right: 30px;
      }
    }
  }
}
.main4 .inner {
  padding: 0 50px;
  background-color: #fff;
  .box {
    display: flex;
    padding: 10px;
    border-top: 1px solid #babec9;
    border-bottom: 1px solid #babec9;
    align-items: center;
    img {
      width: 96px;
      margin-right: 10px;
    }
    .center {
      display: flex;
      flex-grow: 1;
      .left {
        margin-right: 10px;
        display: flex;
        align-items: center;
        border-right: 1px solid #fdd900;
        h4 {
          font-size: 16px;
          line-height: 20px;
          color: #2a2d32;
          width: 240px;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        text-align-last: left;
        span {
          font-size: 14px;
          line-height: 22px;
          color: #6e7176;
        }
      }
    }
    > .right {
      flex-shrink: 0;
      display: flex;
      a {
        line-height: 46px;
        font-size: 18px;
        text-align: center;
      }
      a.back {
        color: #fff;
        width: 132px;
        margin-right: 10px;
        background-color: #2b2e33;
      }
      a.jiesuan {
        color: #000;
        width: 210px;
        background-color: #fdd900;
      }
    }
  }
}
</style>
