<template>
  <div>
    <div class="header1">
      <div class="inner">
        <div class="back" @click="$router.back(-1)">
          <img src="../assets/images/shoppingcart_05.jpg" alt />
        </div>
        <div class="logo">
          <img src="../assets/images/home_02.jpg" alt />
        </div>
        <div class="right">
          <div class="search">
            <a href>
              <img src="../assets/images/shoppingcart_02.jpg" alt />
            </a>
          </div>
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
  </div>
</template>

<script>
export default {
  name: "tou"
};
</script>

<style lang="scss">
.header1 {
  width: 100%;
  background-color: #2b2e33;
  position: relative;
}
.header1 .inner {
  display: flex;
  align-items: center;
  .back {
    margin-left: 50px;
    margin-top: 25px;
    margin-right: 40px;
    img {
      height: 25px;
      display: block;
    }
  }
  .logo {
    flex-grow: 1;
    text-align: center;
    margin-right: 224px;
    img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
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
