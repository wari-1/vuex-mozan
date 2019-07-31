<template>
  <div>
    <Header />
    <div class="cart1">
      <div class="inner">
        <div class="top">
          <div class="title">
            <span></span>
            <h2>
              购物车[
              <span>{{products.length}}</span>]件
            </h2>
          </div>
          <ul class="nav">
            <li :class="$route.fullPath===`${$publicUrl}/cart1`?'active':''">购物车</li>
            <li :class="$route.fullPath===`${$publicUrl}/order`?'active':''">填写订单</li>
            <li :class="$route.fullPath===`${$publicUrl}/shouyingtai1`?'active':''">付款，完成订单</li>
          </ul>
        </div>
        <div class="main">
          <table boder="2" v-if="products.length">
            <tr>
              <th>
                <input
                  type="checkbox"
                  class="checkbox"
                  id="all"
                  :checked="allState"
                  @click="changeAll"
                />
                <label for="all" class="text">
                  <span>√</span>
                </label>
                <span>全选</span>
              </th>
              <th>商品</th>
              <th>单价</th>
              <th>数量</th>
              <th>小计</th>
              <th>操作</th>
            </tr>
            <div class="list1">
              <tr
                v-for="product in products"
                :key="product.id"
                class="products-list"
                :class="product.inventory<1||moment(product.id)<0?'disabled':''"
              >
                <td>
                  <input
                    type="checkbox"
                    class="checkbox"
                    :id="product.id"
                    :disabled="product.inventory<1||moment(product.id)<0"
                    :checked="product.checked"
                    @click="changeChecked(product.id)"
                  />
                  <label :for="product.id" class="text">
                    <span>√</span>
                  </label>
                </td>
                <td>
                  <div class="goods">
                    <img src="../assets/images/home_09.jpg" alt />
                    <img src="../assets/images/shopping-tip_03.jpg" alt v-if="product.inventory<1" />
                    <img src="../assets/images/shopping-tip_06.jpg" alt v-if="moment(product.id)<0" />
                    <div class="right">
                      <h4>{{product.title}}</h4>
                      <span>款式：{{product.style}}</span>
                      <span>型号：{{product.size}}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span>￥{{product.price}}</span>
                </td>
                <td>
                  <div class="count">
                    <button
                      @click="$store.commit('add',{id:product.id})"
                      :disabled="product.count>=product.inventory||moment(product.id)<0"
                    >+</button>
                    <span>{{product.count}}</span>
                    <button
                      @click="$store.commit('sub',{id:product.id})"
                      :disabled="moment(product.id)<0"
                    >-</button>
                  </div>
                </td>
                <td>
                  <span>{{(product.price*product.count).toFixed(2)}}</span>
                </td>
                <td>
                  <div class="delB">
                    <button @click="$store.commit('tooltipShow',{id:product.id})">x</button>
                    <div class="tooltip" v-if="product.tooltip">
                      <span @click="$store.commit('del',{id:product.id})">确认删除</span>
                      <span @click="product.tooltip=false">不删除</span>
                    </div>
                  </div>
                </td>
              </tr>
            </div>
            <div class="carts">
              <input
                type="checkbox"
                class="checkbox"
                id="all"
                :checked="allState"
                @click="changeAll"
              />
              <label for="all" class="text">
                <span>√</span>
              </label>
              <span>全选</span>
              <div class="delB">
                <img
                  src="../assets/images/carts_16.jpg"
                  alt
                  class="del"
                  @click="tooltip=!tooltip"
                  style="cursor:pointer;"
                />
                <div class="tooltip" v-if="tooltip">
                  <span @click="delChecked">确认删除</span>
                  <span @click="tooltip=false">不删除</span>
                </div>
              </div>

              <img src="../assets/images/carts_18.jpg" alt />
              <div class="totalgoods">
                <span>
                  共
                  <span>{{products.length}}</span>件商品，已选择
                  <span>{{goodsNum}}</span>件
                </span>
              </div>
              <div class="jiesuan">
                <img src="../assets/images/carts_20.jpg" alt />
                <span class="total">￥{{total}}</span>
                <el-button type="text" @click="jiesuan ">去结算</el-button>
                <el-dialog :visible.sync="dialogFormVisible">
                  <div class="title">
                    <!-- <img src="../assets/images/dialog_03.jpg" alt /> -->
                  </div>
                  <el-form :model="form">
                    <input
                      type="text"
                      placeholder="请输入手机号"
                      class="shouji"
                      :value="phonenum"
                      @input="updatephonenum"
                    />
                    <input
                      type="password"
                      placeholder="请输入密码"
                      class="password"
                      :value="pwd"
                      @input="updatepwd"
                    />
                  </el-form>
                  <div class="form-group" style="display: flex;">
                    <div>
                      <input
                        type="text"
                        id="code"
                        v-model="code"
                        class="code"
                        placeholder="请输入您的验证码"
                      />
                    </div>
                    <div class="login-code" @click="refreshCode">
                      <!--验证码组件-->

                      <s-identify :identifyCode="identifyCode"></s-identify>
                    </div>
                  </div>
                  <button @click="addOrder">登录</button>
                  <div class="denglu">
                    <a href class="mima">忘记密码？</a>
                    <a href class="zhuce">注册</a>
                  </div>
                  <div slot="footer" class="dialog-footer">
                    <a href>
                      <img src="../assets/images/dialog_10.jpg" alt />
                    </a>
                    <a href>
                      <img src="../assets/images/dialog_12.jpg" alt />
                    </a>
                    <a href>
                      <img src="../assets/images/dialog_07.jpg" alt />
                    </a>
                  </div>
                </el-dialog>

                <!-- <img src="../assets/images/carts_22.jpg" alt /> -->
              </div>
            </div>
          </table>
          <img src="../assets/images/v-else_03.jpg" alt v-else />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import moment from "moment";
import Header from "./Header";
import Footer from "./Footer";
import SIdentify from "./sidentify";
export default {
  name: "cart1",
  components: {
    Header,
    Footer,
    SIdentify
  },
  data() {
    return {
      allState: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      show1: false,
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
      formLabelWidth: "120px",
      tooltip: false,
      identifyCodes: "1234567890",
      identifyCode: "",
      code: "" //text框输入的验证码
    };
  },
  created() {
    this.refreshCode();
  },
  computed: {
    ...mapState({
      products: state => state.products.all,
      phonenum: state => state.products.phonenum,
      pwd: state => state.products.pwd
    }),
    ...mapGetters(["goodsNum", "total"]),
    m1() {
      moment().format("YYYY-MM-DD HH:mm:ss");
    }
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    jiesuan() {
      if (this.products.find(item => item.checked)) {
        this.dialogFormVisible = true;
      } else {
        alert("请选择商品");
      }
    },

    updatephonenum(e) {
      this.$store.commit("updatephonenum", e.target.value);
    },
    updatepwd(e) {
      this.$store.commit("updatepwd", e.target.value);
    },

    moment(id) {
      return moment(this.products.find(item => item.id === id).deadline).diff(
        this.m1,
        "second"
      );
    },
    changeAll() {
      this.$store.commit("changeAll", { allState: this.allState });
      this.allState = !this.allState;
    },
    delChecked() {
      this.$store.commit("delChecked");
      this.tooltip = !this.tooltip;
    },
    changeChecked(id) {
      this.$store.commit("changeChecked", { id: id });
      if (this.products.find(item => !item.checked)) {
        this.allState = false;
      } else {
        this.allState = true;
      }
    },
    addOrder() {
      if (this.code === "") {
        alert("请输入验证码！");
        return;
      } else if (this.identifyCode !== this.code) {
        this.code = "";
        this.refreshCode();
        alert("请输入正确的验证码！");
      }else if (!/^1[34567]\d{9}/.test(this.phonenum)) {
        alert("请输入正确手机号");
      } else {
        this.$store.commit("addOrder");
        this.$router.push(`${this.$publicUrl}/order`);
      }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  }
};
</script>

<style lang="scss">
input#code {
  padding-left: 10px;
}
.code {
  width: 124px;
  height: 31px;
  border: 1px solid rgba(186, 186, 186, 1);
}
.login-code {
  cursor: pointer;
}
.carts .delB {
  width: 60px;
  height: 60px;
  .tooltip {
  }
}
.delB {
  position: relative;
  width: 96px;
  height: 96px;
  .tooltip {
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 0;
    bottom: -10px;
  }
  span {
    line-height: 32px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    &:first-child {
      background-color: #f50000;
      width: 75px;
    }
    &:last-child {
      background-color: #2b2e33;
      width: 125px;
    }
  }
}
.cart1 {
  .el-dialog__header {
    background-image: url("../assets/images/logo_03.jpg");
    background-repeat: no-repeat;
    background-position: center;
    height: 100px;
  }
  .el-dialog__body input {
    display: block;
    padding: 14px 15px 14px 60px;
    font-size: 14px;
    color: #babec9;
    border: 1px solid #babec9;
    background-repeat: no-repeat;
    background-position: 0 0;
    width: 100%;
    margin-bottom: 8px;
  }
  .el-button {
    width: 220px;
    background-color: #fff500;
    text-align: center;
    color: #2a2f32;
  }
  .el-dialog__body .shouji {
    background-image: url("../assets/images/input-bg_06.jpg");
  }
  .el-dialog__body .password {
    background-image: url("../assets/images/input-bg_09.jpg");
  }
  .el-dialog {
    width: 422px !important;
  }
  .el-dialog__body {
    .yanzhengma {
      display: flex;
      input {
        width: 230px;
        padding-left: 15px;
        margin-right: 10px;
      }
      img {
        height: 46px;
      }
    }
    > button {
      margin: 8px;
      line-height: 45px;
      color: #000;
      width: 100%;
      text-align: center;
      font-size: 20px;
      background-color: #fff500;
      margin-left: 0;
      border: 0;
    }
    .denglu {
      display: flex;
      align-content: space-around;
      a {
        font-size: 14px;
        color: #000;
      }
      a.zhuce {
        float: right;
        flex-grow: 1;
        text-align: right;
      }
      padding-bottom: 20px;
      border-bottom: 2px solid #979797;
    }
  }
  .dialog-footer {
    // padding-top: 20px;
    // padding-bottom: 20px;
    display: flex;
    justify-content: space-around;
  }
}
.carts {
  background-color: #2b2e33;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: #fff;
  width: 100%;
  img.del {
    margin: 0 15px;
  }

  .totalgoods > span {
    display: flex;
    align-items: center;
    margin-right: 15px;
    margin: 0 15px;
    margin-right: 50px;
    span {
      color: #c9ac13;
    }
  }
  .jiesuan {
    display: flex;
    align-items: center;
    span.total {
      color: #c9ac13;
      font-size: 25px;
      margin: 0 10px;

      width: 100px;
    }
    .el-button:hover {
      background-color: #c9ac13;
      color: #2a2f32;
    }
    img:last-child {
    }
  }
}
tr.disabled {
  // background-color: #ccc;
  background-image: url("../assets/images/gray-bg_08.jpg");
}
.cart2 {
  background-image: url("../assets/images/main-bg_21.jpg");
}
.top {
  display: flex;
  justify-content: space-between;
  background-color: #fdd900;
  padding: 15px 30px 15px 50px;
  .title {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    > span {
      width: 5px;
      height: 60px;
      background-color: #000;
      margin-right: 20px;
    }
    h2 {
      font-size: 26px;
      color: #2a2f32;
      > span {
        display: inline;
        color: #f20201;
      }
    }
  }
  ul.nav {
    float: right;
    display: flex;
    align-items: center;
    li {
      margin-right: 20px;
      font-size: 16px;
      color: #2c2d32;
      padding-bottom: 9px;
      border-bottom: 1px solid #000;
    }
    li.active {
      font-weight: bold;
      border-bottom: 5px solid #000;
    }
  }
}
.cart1 {
  background-image: url("../assets/images/main-bg_21.jpg");
  width: 100%;
  user-select: none;
  .top {
    display: flex;
    justify-content: space-between;
    background-color: #fdd900;
    padding: 25px 30px 25px 50px;
    .title {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      > span {
        width: 5px;
        height: 60px;
        background-color: #000;
        margin-right: 20px;
      }
      h2 {
        font-size: 26px;
        color: #2a2f32;
        > span {
          display: inline;
          color: #f20201;
        }
      }
    }
    ul.nav {
      float: right;
      display: flex;
      a {
        font-size: 16px;
        color: #2c2d32;
        padding-bottom: 9px;
        border-bottom: 1px solid #000;
      }
      li {
        margin-right: 20px;
      }
      a.active {
        font-weight: bold;
        border-bottom: 5px solid #000;
      }
    }
  }
  .main {
    background-color: #fff;
    padding: 20px 50px;
    > img {
      width: 1100px;
      margin: 0 auto;
    }
    table {
      width: 100%;

      > tr {
        display: flex;
        align: center;
        width: 100%;
        padding-bottom: 10px;
        border-bottom: 2px solid #2b2e33;
      }
    }
    th {
      color: #57585a;
      font-size: 14px;
      user-select: none;
      display: flex;
      align-items: center;
      // .all {
      //   border: 2px solid #babec9;
      //   margin-right: 3px;
      // }
    }

    tr.products-list {
      padding: 10px 20px;
    }
  }
}
.checkbox {
  display: none;
}
.text {
  display: block;
  width: 22px;
  height: 22px;
  border: 2px solid #babec9;
  text-align: center;
  line-height: 22px;
}
.text > span {
  display: none;
  font-size: 10px;
  user-select: none;
}
.checkbox:checked + .text {
  background-color: #fdd900;
  border: 0;
  padding: 2px;
}
.checkbox:checked + .text > span {
  display: block;
}
.list1 {
  border-bottom: 2px solid #2b2e33;

  tr {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    td {
      display: flex;
      align-items: center;
    }
    td:nth-child(1) {
      margin-right: 28px;
    }
    td:nth-child(2) {
      display: flex;
      width: 346px;
      .goods {
        display: flex;
        img {
          width: 96px;
          height: 96px;
          margin-right: 10px;
        }
        img:nth-child(2) {
          width: 86px;
        }
      }

      .right {
        h4 {
          font-size: 16px;
          color: #2b2e33;
          line-height: 20px;
          margin-bottom: 10px;
          width: 240px;
        }
        span {
          color: #83878a;
          font-size: 12px;
          line-height: 22px;
        }
      }
      margin-right: 100px;
    }
    td:nth-child(3) {
      display: flex;
      width: 50px;
      align-items: center;
      span {
        font-size: 12px;
        color: #000;
      }
      margin-right: 20px;
    }
    td:nth-child(4) {
      .count {
        display: flex;
        align-items: center;
      }
      button {
        font-size: 8px;
        text-align: center;
        border: 1px solid #000;
        width: 40px;
        height: 40px;
        background-color: #fff;
      }

      span {
        margin: 0 48px;
        font-size: 12px;
      }
      margin-right: 50px;
    }
    td:nth-child(5) {
      display: flex;
      align-items: center;
      margin-right: 50px;
      span {
        color: #f20201;
        font-size: 12px;
      }
    }
    td:nth-child(6) {
      float: right;
      position: relative;
      height: 96px;
      width: 50px;
      button {
        border: 0;
        position: absolute;
        top: 45%;
        right: 0;
        background-color: #fff;
        font-size: 8px;
      }
    }
  }
}
</style>
