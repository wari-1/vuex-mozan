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
    <div class="main9">
      <div class="inner">
        <div class="boxx">
          <div class="box">
            <span>选择支付方式</span>
            <div class="box1">
              <span v-if="false">√</span>
              <img src="../assets/images/money1_15.jpg" alt />
            </div>
            <div class="box1 active">
              <span v-if="true">√</span>
              <img src="../assets/images/money1_12.jpg" alt />
            </div>
            <div class="box1">
              <span v-if="false">√</span>
              <img src="../assets/images/money1_18.jpg" alt />
            </div>
            <div class="box1">
              <span v-if="false">√</span>
              <img src="../assets/images/money1_21.jpg" alt />
            </div>
          </div>
        </div>
        <div class="foot">
          <div></div>
          <button>付款</button>
        </div>
        <el-dialog :visible.sync="dialogFormVisible" title="收银台">
          <div class="content">
            <span>请您在新打开的网上银行页面进行支付</span>
            <span>支付完成前请不要关闭该窗口</span>
            <div class="btn">
              <button @click="backHome">已完成支付</button>
              <button>支付遇到问题</button>
            </div>
          </div>
          <div class="bottom">
            <a href>选择其他支付方式</a>
          </div>
        </el-dialog>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import { mapGetters } from "vuex";
export default {
  name: "order",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      dialogTableVisible: true,
      dialogFormVisible: true,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapGetters(["choseTotal", "newAddress"])
  },
  methods: {
    backHome() {
      this.$router.push(`${this.$publicUrl}/shouyingtai3`);
    }
  }
};
</script>

<style lang="scss">
.shouyingtai {
  margin-top: 0;
  .el-dialog {
    .content {
      border-top: 2px solid #000;
      border-bottom: 2px solid #000;
      padding: 74px 0;
      text-align: center;
      span {
        font-size: 14px;
        line-height: 18px;
        color: #2a2d32;
      }
      .btn {
        display: flex;
        width: 460px;
        margin: 0 auto;
        margin-top: 50px;
        button {
          border: 0;
          margin-right: 30px;
          padding: 0 60px;
          line-height: 52px;
          color: #fff;
          background-color: #2a2d32;
        }
      }
    }
    .bottom {
      text-align: center;
      padding: 30px 0;
      a {
        color: #02a0ea;
        font-size: 14px;
      }
    }
  }
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
