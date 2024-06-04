<template>
  <div class="container">
    <div class="logo">
      <img
        alt="logo"
        src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
      />
      <div class="logo-text">Arco Design Pro</div>
    </div>

    <!-- <LoginBanner /> -->
    <div class="content">
      <div class="content-inner">
        <LoginForm />
      </div>
      <div class="footer">
        <!-- 页脚 -->
        <Footer /> 
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Footer from '@/components/footer/index.vue';
  import LoginBanner from './components/banner.vue';
  import LoginForm from './components/login-form.vue';
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    height: 100vh;

    .banner {
      width: 550px;
      background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
    }

    .content {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      padding-bottom: 40px;
    }

    .footer {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
    }
  }

  // 这段代码定义了一个固定定位的 logo，位于浏览器窗口的左上角，同时包含了文本，文本居中显示，并且有一些样式定义来调整其外观。
  .logo {
    position: fixed; // 将元素设置为固定定位，相对于浏览器窗口进行定位。
    // 指定元素相对于浏览器窗口顶部和左侧的偏移量，分别为 24 像素和 22 像素。
    top: 24px;
    left: 22px;
    // 指定元素的堆叠顺序，使其位于其他具有默认堆叠顺序的元素之上。
    z-index: 1;
    display: inline-flex;  // 将元素设置为内联的 Flexbox 容器，使其内部元素能够灵活排列。
    align-items: center; // 指定内部元素在侧轴上（垂直方向）的对齐方式为居中。

    // 对于 ".logo-text" 类：
    &-text {
      // 指定文本的右外边距和左外边距分别为 4 像素，用于控制文本与其周围内容的间距。
      margin-right: 4px;
      margin-left: 4px;
      // 指定文本颜色为通过 CSS 变量定义的值，可能是页面的一个主题色或者特定颜色。
      color: var(--color-fill-1);
      font-size: 20px; // 指定文本的字体大小为 20 像素。
    }
  }
</style>

<style lang="less" scoped>
  // responsive
  @media (max-width: @screen-lg) {
    .container {
      .banner {
        width: 25%;
      }
    }
  }
</style>
