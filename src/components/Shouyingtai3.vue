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
            <li :class="$route.fullPath===`${$publicUrl}/cart1#`?'active':''">购物车</li>
            <li :class="$route.fullPath===`${$publicUrl}/order#`?'active':''">填写订单</li>
            <li :class="$route.fullPath===`${$publicUrl}/shouyingtai1#`?'active':''">付款，完成订单</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main13">
      <div class="inner">
        <div class="left">
          <img src="../assets/images/res_03.jpg" alt />
        </div>
        <div class="right">
          <div class="topp">
            <span>支付成功！</span>
          </div>
          <div class="foot">
            <div class="left">
              <span>订单号：12345678912345</span>
              <span>成功支付:￥{{choseTotal}}</span>
            </div>
            <div class="right">
              <button @click="backHome">继续逛逛</button>
              <button>查看订单</button>
            </div>
          </div>
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

  methods: {
    backHome() {
      this.$router.push(`${this.$publicUrl}/`);
    }
  }
};
</script>

<style lang="scss">
.main13 .inner {
  padding: 20px 50px;
  display: flex;
  background-color: #fff;
  .left {
    border: 0;
  }
  .right {
    .topp {
      padding: 186px 0 20px 0;
      border-bottom: 2px solid #2b2e33;
    }
    .foot {
      color: #2b2e33;
      // padding-top: 28px;
      .left {
        flex-grow: 1;
        margin-right: 100px;
      }
      span {
        font-size: 14px;
        line-height: 26px;
      }
      button {
        margin-right: 10px;
      }
    }
  }
}
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
