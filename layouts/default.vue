<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <MHeader />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer height="auto">
      Footer
    </el-footer>
  </el-container>
</template>
<script>
import MHeader from '@/components/public/header/index'
export default {
  components: {
    MHeader
  }
}
</script>
