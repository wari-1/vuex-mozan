<template>
  <div>
    <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->

    <el-dialog
      title="新增地址"
      :visible.sync="openprop"
      custom-class="addressprop"
      :close-on-click-modal="false"
    >
      <el-form :model="form">
        <div class="basicinfo">
          <el-form-item style="width:53%;display:block;border-radius:0px">
            <p
              style=" display:flex;
                    color: black;
                  font-weight: bold;
                       font-size: 0.5rem;
                         line-height: 1;
                         justify-content:space-between;width:100%;"
            >
              <span>
                <b style="color:red">*</b> 收货人
              </span>
              <span
                v-show="form.name===''?true:false"
                style="color:red;flex-grow:1;text-align:right;font-weight:normal;font-size:0.3rem"
              >请输入收货人姓名</span>
            </p>
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item style="width:43%;display:block;border-radius:0px">
            <p
              style=" display:flex;
                    color: black;
                  font-weight: bold;
                       font-size: 0.5rem;
                         line-height: 1;justify-content:space-between;width:100%;"
            >
              <span>
                <b style="color:red">*</b> 联系电话
              </span>

              <span
                v-show="form.tel===''?true:false"
                style="color:red;flex-grow:1;text-align:right;font-weight:normal;font-size:0.3rem"
              >请输入收货人电话</span>
            </p>
            <el-input v-model="form.tel" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div class="selectarea" style="margin-bottom:10px">
          <p
            style=" display: flex;
                    color: black;
                  font-weight: bold;
                       font-size: 0.5rem;
                       line-height: 1;justify-content:space-between;width:100%;margin-bottom:10px;"
          >
            <span>
              <b style="color:red">*</b> 收货地区
            </span>

            <span
              v-show="this.ruleForm.district.province===''&&this.ruleForm.district.city===''&&this.ruleForm.district.area===''?true:false"
              style="color:red;flex-grow:1;text-align:right;font-weight:normal;font-size:0.3rem"
            >请输入完整得知</span>
          </p>
          <myDistrict
            :province.sync="ruleForm.district.province"
            :city.sync="ruleForm.district.city"
            :area.sync="ruleForm.district.area"
          ></myDistrict>
        </div>
        <el-form-item style="width:100%;display:block;border-radius:0px">
          <p
            style=" display: flex;
                    color: black;
                  font-weight: bold;
                       font-size: 0.5rem;
                         line-height: 1;justify-content:space-between;width:100%;"
          >
            <span>
              <b style="color:red">*</b> 详细地址
            </span>

            <span
              v-show="form.detailaddress===''?true:false"
              style="color:red;flex-grow:1;text-align:right;font-weight:normal;font-size:0.3rem"
            >请输入完整地址</span>
          </p>
          <el-input v-model="form.detailaddress" autocomplete="off"></el-input>
        </el-form-item>
        <div class="unnecessory" style="display:flex;justify-content:space-between">
          <el-form-item style="width:60%;display:block;border-radius:0px">
            <p
              style=" display: block;
                    color: black;
                  font-weight: bold;
                       font-size: 0.5rem;
                         line-height: 1;"
            >地址别名</p>
            <el-input v-model="form.nickname" autocomplete="off" @change="activetag=8"></el-input>
          </el-form-item>
          <div style="width:35%;margin-top:10px;">
            <p
              style=" display: block;
                    color: black;
                    font-weight: bold;
                       font-size: 0.5rem;
                         line-height:1;margin-bottom:10px;"
            >常用别名</p>
            <p
              style="display:block;border-radius:0px;color:black;display:flex;justify-content:space-between;width:100%;align-items:top"
            >
              <span
                v-for="(item,index) in tagname"
                :key="index"
                :class="{activetag:activetag===index}"
                @click="activetag=index"
                style="width:32%;font-size:0.5rem;line-height:1.6;border:1px solid black;display:block;text-align:center;cursor:pointer;user-select:none"
              >{{item}}</span>
            </p>
          </div>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <span style="width:10%;display:flex;align-self:center" class="checkbox">
          <input id="setdefault" type="checkbox" class="check" v-model="form.default" />
          <label for="setdefault" class="checklabel" style>
            <span style="top:10%;left:50%">√</span>
          </label>
        </span>
        <el-button
          type="text"
          @click="address"
          class="checkout"
          style="background-color:#fdd900;color:black;text-align:center;font-size:0.6rem;font-weight:bolder;width:30%;border-radius:0"
        >保存地址</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import myDistrict from "my-district";
import { close } from "fs";
export default {
  name: "gocart",
  props: {
    openprop: {
      type: Boolean,
      default: false
    },
    close: {
      type: Function
    }
  },
  data() {
    return {
      tagname: ["家", "学校", "公司"],
      activetag: 5,
      ruleForm: {
        district: {
          province: "",
          city: "",
          area: ""
        }
      },
      dialogFormVisible: this.openadd,
      form: {
        name: "",
        tel: "",
        detailaddress: "",
        default: false,
        nickname: ""
      }
    };
  },
  components: {
    myDistrict
  },
  methods: {
    address() {
      const newAddress = Object.assign(this.form, this.ruleForm.district);
      let a = true;
      let b = true;
      for (let i = 0; i < 2; i++) {
        if (
          this.ruleForm.district[Object.keys(this.ruleForm.district)[i]] === ""
        ) {
          a = false;
          break;
        }
      }
      for (let i = 0; i < 2; i++) {
        if (this.form[Object.keys(this.form)[i]] === "") {
          b = false;
          break;
        }
      }
      console.log(b);
      if (a === true && b === true) {
        if (/^1[34567]\d{9}/.test(this.form.tel)) {
          console.log(newAddress);
          this.$store.commit("addaddress", newAddress);

        } else {
          alert("请输入正确手机号");
        }
      } else {
        alert("信息不全");
      }

      if (/^1[34567]\d{9}/.test(this.form.tel)) {
        console.log(newAddress);
        
        
        this.$emit("close");
      } else {
        alert("请输入正确手机号");
      }
    }
  }
};
</script>

<style>
.activetag {
  background-color: #000;
  color: white;
}
.addressprop.el-dialog {
  width: 600px;
  padding: 10px 15px;
}
.addressprop .basicinfo {
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  margin-bottom: 5px;
}
.addressprop.el-dialog .el-dialog__header {
  border-bottom: 2px solid #555;
}
.addressprop.el-dialog .el-dialog__header {
  display: block;
  color: black;
  font-weight: bold;
  font-size: 0.5rem;
  line-height: 3;
}
.addressprop .el-dialog__body {
  padding: 10px 0;
}
.addressprop .el-form-item__label {
  font-size: 0.4rem;
  line-height: 1;
}
.addressprop .el-input__inner {
  height: 24px;
}
.addressprop .el-input__inner {
  border-radius: 0;
}
.addressprop .el-form-item {
  margin-bottom: 0;
}
.addressprop .selectarea .distinct-component-ct {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.addressprop .el-input__inner {
  text-indent: 0px;
}
.addressprop .dialog-footer {
  display: flex;
  justify-content: space-between;
}
.addressprop .el-dialog__footer {
  border-top: none;
}
.addressprop .checklabel {
  background-color: white;
  border: 1px solid black;
}
.selectarea .el-input__inner {
  padding: 15px 0;
  text-indent: 10px;
}
.addressprop .selectarea .el-input__suffix {
  width: 30px;
  right: 0px;
  background-color: #333;
}
.addressprop .selectarea .el-input__icon {
  line-height: 32px;
  font-size: 0.8rem;
}
.addressprop .selectarea .el-select__caret.el-input__icon.el-icon-arrow-up {
  font-weight: bold;
  color: white;
}
.addressprop .el-form-item {
  margin-top: 10px;
}
</style>
