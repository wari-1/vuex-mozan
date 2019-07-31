<template>
  <div>
    <div class="footer1">
      <div class="inner">
        <div class="help">
          <h4>帮助信息</h4>
          <div class="list">
            <ul>
              <li>
                <a href>
                  <img src="../assets/images/shoppingcart_16.jpg" alt />
                  <span>购物指南</span>
                </a>
              </li>
              <li>
                <a href>
                  <img src="../assets/images/shoppingcart_26.jpg" alt />
                  <span>支付方式</span>
                </a>
              </li>
              <li>
                <a href>
                  <img src="../assets/images/shoppingcart_30.jpg" alt />
                  <span>配送方式</span>
                </a>
              </li>
              <li>
                <a href>
                  <img src="../assets/images/shoppingcart_35.jpg" alt />
                  <span>售后服务</span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href>
                  <img src="../assets/images/shoppingcart_19.jpg" alt />
                  <span>服务中心</span>
                </a>
              </li>
              <li>
                <a href>
                  <img src="../assets/images/shoppingcart_27.jpg" alt />
                  <span>关于我们</span>
                </a>
              </li>
              <li>
                <a href>
                  <img src="../assets/images/shoppingcart_32.jpg" alt />
                  <span>免责条款</span>
                </a>
              </li>
              <li>
                <a href>
                  <img src="../assets/images/shoppingcart_36.jpg" alt />
                  <span>友情链接</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="focus">
          <h4>关注我们</h4>
          <div class="box">
            <div class="box1">
              <img src="../assets/images/shoppingcart_22.jpg" alt />
              <img src="../assets/images/shoppingcart_44.jpg" alt />
            </div>
            <div class="box1">
              <img src="../assets/images/shoppingcart_22.jpg" alt />
              <img src="../assets/images/shoppingcart_41.jpg" alt />
            </div>
          </div>
        </div>
        <div class="kefu">
          <h4>客服热线</h4>
          <div class="box">
            <img src="../assets/images/shoppingcart_19.jpg" alt />
            <div class="right">
              <p>400 113 5153</p>
              <span>[周一至周五 9:00-18:00]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer2">
      <div class="inner">
        <div class="logo">
          <img src="../assets/images/home_02.jpg" alt />
        </div>
        <div class="copyright">
          <p>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights</p>
          <p>地址：北京市朝阳区建国路93号院4号楼4层505</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping"
};
</script>

<style lang="scss">
.footer1 {
  background-color: #000;
  .inner {
    padding: 60px 70px 52px 70px;
    display: flex;

    .help {
      margin-right: 65px;
    }
    .focus {
      .box {
        display: flex;
        .box1 {
          margin-right: 30px;
          text-align: center;
          img:first-child {
            width: 106px;
          }
          img:nth-child(2) {
            margin-left: 24px;
            width: 50px;
            margin-top: 12px;
          }
        }
      }
    }
    .kefu {
      .box {
        display: flex;
        img {
          width: 30px;
          height: 20px;
          margin-top: 20px;
        }
        .right {
          display: flex;
          flex-direction: column;
          color: #fff;
          p {
            font-size: 20px;
            margin-bottom: 8px;
          }
          span {
            font-size: 12px;
          }
        }
      }
    }
  }
  h4 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 18px;
  }
  .list {
    display: flex;
    ul {
      margin-right: 30px;
      li {
        a {
          display: flex;
          align-items: center;
          span {
            font-size: 15px;
            color: #fff;

            line-height: 32px;
            align-items: center;
          }
          img {
            width: 30px;
            height: 20px;
          }
        }
      }
    }
  }
}
.footer2 {
  background-color: #2b2e33;
  .inner {
    padding: 0 27px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      height: 90px;
    }
    .copyright {
      text-align: right;
      float: right;
    }
    p {
      color: #707479;
      font-size: 10px;
      line-height: 15px;
    }
  }
}
</style>
