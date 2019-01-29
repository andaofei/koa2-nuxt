<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <EMenu></EMenu>
      </el-col>
      <el-col :span="19">
        2
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        3
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EMenu from '~/components/index/menu'
export default {
  components: {
    EMenu
  }
}
</script>

<style lang="scss">
@import '~/assets/css/index/index.scss';
</style>
