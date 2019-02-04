<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <MHeader />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer height="auto">
      <MyFooter />
    </el-footer>
  </el-container>
</template>
<script>
import MHeader from '@/components/public/header/index'
import MyFooter from '~/components/public/footer'
export default {
  components: {
    MHeader,
    MyFooter
  }
}
</script>
