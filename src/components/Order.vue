<template>
  <div class="order">
    <Header />
    <div class="main6">
      <div class="inner">
        <div class="top">
          <div class="title">
            <span></span>
            <h2>填写订单</h2>
          </div>
          <ul class="nav">
            <li :class="$route.fullPath===`${$publicUrl}/cart1#`?'active':''">购物车</li>
            <li :class="$route.fullPath===`${$publicUrl}/order#`?'active':''">填写订单</li>
            <li :class="$route.fullPath===`${$publicUrl}/shouyingtai1#`?'active':''">付款，完成订单</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main7">
      <div class="inner">
        <div class="title">
          <h4>收货地址</h4>
          <div class="right">
            <button type="text" @click="show=true">
              <i class="fa fa-plus-square"></i>新增地址
            </button>
            <div class="dialog-wrapper">
              <div class="modal" v-if="show" @click="show=false"></div>
              <div class="el-dialog" v-if="show">
                <div class="title">
                  <button @click="show=false">x</button>
                </div>
                <div class="form1">
                  <div class="left">
                    <div class="topp">
                      <p>
                        <span>*</span>收货人
                      </p>
                      <span>请填写收货人</span>
                    </div>
                    <input type="text" class="ren" :value="name" @input="updateName" />
                  </div>
                  <div class="right">
                    <div class="topp">
                      <p>
                        <span>*</span>联系电话
                      </p>
                    </div>
                    <input
                      type="text"
                      class="shouji"
                      :value="phone"
                      @input="updatePhone"
                      style="background:none;"
                    />
                  </div>
                </div>
                <div class="form2">
                  <div class="left">
                    <div class="topp">
                      <p>
                        <span>*</span>所在地区
                      </p>
                      <span>请填写完整的所在地区</span>
                    </div>
                    <div class="content">
                      <el-form
                        :model="ruleForm"
                        :rules="rules"
                        ref="ruleForm"
                        label-width="100px"
                        class="demo-ruleForm"
                      >
                        <el-form-item prop="district">
                          <myDistrict
                            :province.sync="ruleForm.district.province"
                            :city.sync="ruleForm.district.city"
                            :area.sync="ruleForm.district.area"
                          ></myDistrict>
                        </el-form-item>
                        <!-- <el-button @click="submitForm('ruleForm')">提交</el-button> -->
                      </el-form>
                    </div>

                    <div class="topp">
                      <p>
                        <span>*</span>详细地址
                      </p>
                      <span>请填写详细地址</span>
                    </div>
                    <div class="content">
                      <input type="text" placeholder="请填写详细地址" :value="dizhi" @input="updateDizhi" />
                    </div>
                    <div class="topp">
                      <p>
                        <span>*</span>地址别名
                      </p>
                    </div>
                    <div class="content">
                      <input type="text" />
                    </div>
                  </div>
                  <div class="form3">
                    <div class="left">
                      <input
                        type="checkbox"
                        class="checkbox"
                        :checked="checked1"
                        id="xxxx"
                        @click="orderChecked"
                      />
                      <label for="xxxx" class="text">
                        <span>√</span>
                      </label>
                      <p>设为默认地址</p>
                    </div>
                    <div class="right">
                      <button class="restore" @click="restore">保存地址</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul class="address-list">
          <li
            v-for="(addres,index) in address"
            :key="addres.id"
            :class="addres.checked?'active':''"
            v-show="index<showNum"
            style="padding:10px;"
            @click="showw(index)"
          >
            <span v-if="addres.checked">√</span>
            <div class="left" @click="$store.commit('changeChecked1',{id:addres.id})">
              <span class="name">
                <i class="fa fa-user"></i>
                {{addres.name}}
              </span>
              <span class="dizhi">
                <i class="fa fa-map-marker"></i>
                {{addres.text}}
              </span>
              <span class="phone">
                <i class="fa fa-phone"></i>
                {{addres.phoneNum}}
              </span>
            </div>
            <div class="right">
              <div class="left">
                <button
                  v-if="!addres.isDefault"
                  @click="$store.commit('changeDefault',{id:addres.id})"
                  :class="!addres.isDefault?'':'active'"
                >设为默认</button>
                <button
                  v-else
                  @click="addres.isDefault=false"
                  :class="!addres.isDefault?'':'active'"
                >默认</button>
              </div>
              <div class="center">
                <button type="text" @click="show=true">
                  <i class="fa fa-pencil-square-o"></i>编辑
                </button>
              </div>
              <div class="right">
                <div class="delB">
                  <button @click="$store.commit('tooltipShow1',{id:addres.id})">
                    <i class="fa fa-trash"></i>删除
                  </button>
                  <div class="tooltip" v-if="addres.tooltip">
                    <span @click="$store.commit('del1',{id:addres.id})">确认删除</span>
                    <span @click="addres.tooltip=false">不删除</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <button @click="showMore" v-if="showNum<num" class="more">展示更多</button>
          <button @click="showback" v-if="showNum===num&&num>3">返回</button>
        </ul>
      </div>
    </div>
    <div class="main8">
      <div class="inner">
        <div class="title">
          <h4>商品信息</h4>
          <span>返回购物车修改</span>
        </div>
        <div class="list1">
          <tr
            v-for="product in newProducts"
            :key="product.id"
            class="products-list"
            :class="product.inventory<1?'disabled':''"
          >
            <td></td>
            <td>
              <div class="goods">
                <img src="../assets/images/home_09.jpg" alt />
                <img src="../assets/images/shopping-tip_03.jpg" alt v-if="product.inventory<1" />
                <!-- <img src="../assets/images/shopping-tip_06.jpg" alt /> -->
                <div class="right">
                  <h4>{{product.title}}</h4>
                </div>
              </div>
            </td>
            <td>
              <span>款式：{{product.style}}</span>
            </td>
            <td>
              <span>型号：{{product.size}}</span>
            </td>
            <td>
              <span>￥{{product.price}}</span>
            </td>
            <td>
              <div class="count">
                <span>x{{product.count}}</span>
              </div>
            </td>
            <td></td>
            <td></td>
          </tr>
        </div>
      </div>
    </div>
    <div class="main9">
      <div class="inner">
        <div class="boxx">
          <div class="box">
            <span>支付方式</span>
            <div
              class="box1"
              @click="$store.commit('changeChecked2')"
              :class="checked2?'active':''"
            >
              <span v-if="checked2">√</span>
              在线支付
            </div>
          </div>
          <div class="box">
            <span>物流方式</span>
            <div
              class="box1"
              @click="$store.commit('changeChecked3')"
              :class="checked3?'active':''"
            >
              <span v-if="checked3">√</span>
              普通快递
            </div>
          </div>
          <div class="box">
            <span>发票信息</span>
            <div
              class="box1"
              @click="$store.commit('changeChecked4')"
              :class="checked4?'active':''"
            >
              <span v-if="checked4">√</span>
              不开发票
            </div>
            <div
              class="box1"
              @click="$store.commit('changeChecked4')"
              :class="!checked4?'active':''"
            >
              <span v-if="!checked4">√</span>
              开发票
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main8">
      <div class="inner">
        <div class="title">
          <h4>备注</h4>
          <span>清算</span>
        </div>
        <div class="content1">
          <div></div>
          <div class="box">
            <div class="left">
              <span>
                <span>{{choseNum}}</span>件商品，总金额：
              </span>
              <span>优惠金额：</span>
              <span>运费：</span>
              <span>应付金额</span>
            </div>
            <div class="right">
              <span>￥{{choseTotal}}</span>
              <span>-￥0.00</span>
              <span>￥0.00</span>
              <span>￥{{choseTotal}}</span>
            </div>
          </div>
        </div>
        <div class="foot">
          <div></div>
          <button @click="submit">提交订单</button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Header from "./Header";
import Footer from "./Footer";
import { Form, FormItem, Button } from "element-ui";
let checkDistrict = (rule, { province, city, area }, cb) => {
  if (!province) {
    cb(new Error("请选择省"));
  } else if (!city) {
    cb(new Error("请选择市"));
  } else if (!area) {
    cb(new Error("请选择区"));
  } else {
    cb();
  }
};
export default {
  name: "order",
  components: {
    Header,
    Footer,

    ElForm: Form,
    ElFormItem: FormItem
  },
  computed: {
    ...mapState({
      address: state => state.address.address,
      name: state => state.options.name,
      phone: state => state.options.phone,
      dizhi: state => state.options.dizhi,
      newProducts: state => state.products.newProducts,
      checked2: state => state.products.checked2,
      checked3: state => state.products.checked3,
      checked4: state => state.products.checked4
    }),
    ...mapGetters(["choseNum", "choseTotal", "newAddress", "num"])
  },
  methods: {
    showw(index) {},
    showNum1() {
      if (this.num < 4) {
        this.showNum = this.num;
      } else {
        this.showNum = 3;
      }
    },
    showMore() {
      this.showNum = this.num;
    },
    showback() {
      this.showNum = 3;
    },
    updateName(e) {
      this.$store.commit("updateName", e.target.value);
    },
    updatePhone(e) {
      this.$store.commit("updatePhone", e.target.value);
    },
    updateDizhi(e) {
      this.$store.commit("updateDizhi", e.target.value);
    },
    orderChecked() {
      this.checked1 = !this.checked1;
    },
    submit() {
      if (this.checked2 === false) {
        alert("请选择支付方式");
      } else if (this.checked3 === false) {
        alert("请选择物流方式");
      } else if (!this.newAddress) {
        alert("请选择地址");
      } else {
        this.$router.push(`${this.$publicUrl}/shouyingtai1#`);
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },
    restore() {
      if (this.name === "") {
        alert("请填写收货人姓名");
      } else if (
        !this.ruleForm.district.province ||
        !this.ruleForm.district.city ||
        !this.ruleForm.district.area
      ) {
        alert("请填写地址所在地区");
      } else if (this.dizhi === "") {
        alert("请填写详细地址");
      } else {
        this.$store.commit("restoreDizhi", {
          isDefault: this.checked1,
          province: this.ruleForm.district.province,
          city: this.ruleForm.district.city,
          area: this.ruleForm.district.area
        });
        this.show = false;
      }
    }
  },
  created() {
    this.showNum1();
  },
  // mounted() {
  //   document.querySelector(".el-form-item__content")[0].style.marginLeft = 0;
  // },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      show: false,
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
      checked1: false,
      showNum: 0,
      ruleForm: {
        district: {
          province: "",
          city: "",
          area: ""
        }
      },
      rules: {
        district: [
          { validator: checkDistrict, trigger: "blur" },
          { validator: checkDistrict, trigger: "change" }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
.modal {
  width: 100vw;
  height: 100vh;
  background-color: #b2b2b2;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.foot {
  display: flex;
  margin-top: 20px;
  div {
    flex-grow: 1;
  }
  button {
    width: 220px;
    line-height: 60px;
    font-size: 24px;
    color: #2b2e33;
    background-color: #fdd901;
    border: 0;
  }
}
.el-form-item__content {
  margin-left: 0px;
}
.el-form-item {
  display: flex;
  .el-select {
    width: 210px;
  }
}
.main9 .inner {
  background-color: #fff;
  padding: 0 50px;

  .boxx {
    display: flex;
    padding: 30px 0;
    border-bottom: 2px solid #b8beca;
  }
  .box {
    display: flex;
    margin-right: 50px;
    align-items: center;
    span {
      font-size: 18px;
      color: #2b2e33;
      margin-right: 20px;
    }
    .box1 {
      padding: 13px 34px;
      font-size: 14px;
      border: 3px solid #b8beca;
      margin-right: 10px;
      position: relative;
      > span {
        position: absolute;
        left: 0;
        bottom: 0;
        color: #fff;
        text-align: center;
        width: 18px;
        line-height: 18px;
        font-size: 10px;
        background-color: #fdd901;
      }
    }
    .box1.active {
      border: 3px solid #fdd900;
    }
  }
}
.main8 {
  .content1 {
    display: flex;
    div:first-child {
      flex-grow: 1;
    }
    .box {
      display: flex;
      .left {
        text-align: right;
        margin-right: 55px;
      }
      span {
        font-size: 12px;
        line-height: 33px;
        color: #5a5a5c;
        display: flex;
        > span {
          color: red;
        }
      }
      .right {
        text-align: right;
        span:last-child {
          font-size: 20px;
          color: #ef0100;
        }
      }
    }
  }
}
.order tr {
  padding: 20px;
}
.form3 {
  display: flex;
  .left {
    display: flex;
    align-items: center;
    flex-grow: 1;
    span {
    }
  }
  .right {
    flex-shrink: 0;
  }
}
.el-dialog .form3 span {
  font-size: 12px;
  color: #2d2e32;
}
.el-dialog .form3 button {
  width: 210px;
  border: 0;
  line-height: 52px;
  color: #2d2e32;
  font-size: 20px;
  background-color: #fdd900;
}
.order {
  .el-dialog {
    position: fixed;
    top: 5%;
    left: 30%;
    z-index: 2;
    width: 40%;
    padding: 20px;
    background-color: #fff;
    .title {
      display: flex;
      justify-content: flex-end;
      padding-bottom: 5px;
      button {
        background-color: #fff;
        border: 0;
        float: right;
      }
    }
    input {
      padding: 10px;
      color: #2b2e33;
      line-height: 24px;
      font-size: 14px;
      border: 1px solid #babec9;
      margin-top: 6px;
      margin-bottom: 5px;
    }
    input.shouji {
      background-image: url("../assets/images/input-bg_07.jpg");
    }
    input.password {
      background-image: url("../assets/images/input-bg_09.jpg");
    }
    p {
      font-size: 12px;
      color: #45464a;
      flex-grow: 1;
      display: flex;
      > span {
      }
    }
    span {
      color: #f40100;
      font-size: 12px;
    }
  }
}
.order {
  .list1 tr td:nth-child(3) {
    width: 200px;
  }
  .list1 tr td:nth-child(2) {
    margin-right: 0;
  }
}
.topp {
  display: flex;
}
.form1 {
  margin: 20px 0;
  display: flex;
  .left {
    margin-right: 8px;
    .topp {
      display: flex;
    }
    input {
      width: 208px;
    }
  }
  .right {
    input {
      width: 280px;
    }
  }
}
.form2 .content {
  input {
    width: 100%;
  }
}
.order {
  background-image: url("../assets/images/main-bg_21.jpg");
  width: 100%;
  user-select: none;
}
.main8 .inner {
  padding: 15px 50px;
  padding-bottom: 0;
  background-color: #fff;
  color: #2b2e33;
  .title {
    display: flex;
    border-bottom: 1px solid #2b2e33;
    h4 {
      flex-grow: 1;
      font-size: 18px;
      margin-bottom: 15px;
      color: #2b2e33;
    }
  }
}
.main7 .inner {
  padding: 15px 50px;
  background-color: #fff;
  color: #2b2e33;
  .title {
    display: flex;
    border-bottom: 1px solid #2b2e33;
    h4 {
      flex-grow: 1;
      font-size: 18px;
      margin-bottom: 15px;
      color: #2b2e33;
    }
    button {
      padding-left: 27px;
      background-repeat: no-repeat;
      background-position: 0 0;
    }
  }
}
span.name {
}
span.text {
}
span.phone {
}
ul.address-list {
  > button {
    background-image: url("../assets/images/more_03.jpg");
    width: 100%;
    text-align: center;
    line-height: 60px;
  }
  li.active {
    border: 1px solid #fdd901;
  }
  li {
    padding: 20px 24px;
    display: flex;
    flex-direction: row;
    border: 1px solid #fff;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    > span {
      position: absolute;
      left: 0;
      bottom: 0;
      color: #fff;
      text-align: center;
      width: 18px;
      line-height: 18px;
      font-size: 10px;
      background-color: #fdd901;
    }
    > .left {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      span {
        font-size: 12px;
        line-height: 20px;
        padding-left: 20px;
        background-position: 0 0;
        background-repeat: no-repeat;
        color: #2b2f32;
      }
    }
    > .right {
      display: flex;
      flex-direction: row;
      align-items: center;
      .left {
        width: 96px;
        margin-right: 30px;
        text-align: center;
        display: flex;
        align-items: center;
        button {
          width: 96px;
          background-color: #fff;
          border: 0;
          font-size: 12px;
          &:focus {
            outline: none;
          }
        }
        button.active {
          width: 96px;
          background-color: #2b2e33;
          border: 0;
          color: #fff;
          line-height: 36px;
          font-size: 12px;
        }
      }
      .center {
        display: flex;
        align-items: center;
        margin-right: 30px;
        button {
          background-repeat: no-repeat;
          padding-left: 18px;
          background-position: 0 0;
        }
      }
      .right .delB {
        position: relative;
        height: 65px;
        button {
          background-color: #fff;
          border: 0;
          background-position: 0 0;
          background-repeat: no-repeat;
          padding-left: 20px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .tooltip {
          bottom: -10px;
          right: 50px;
          span {
            color: #fff;
          }
        }
      }
    }
  }
}
.main7 .inner .el-dialog button {
  background: none;
}
.main7 .inner .el-dialog .form3 button {
  background-color: #fdd901;
}
</style>
