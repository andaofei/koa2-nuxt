<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <EMenu></EMenu>
      </el-col>
      <el-col :span="19">
        <Life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Artistic />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EMenu from '~/components/index/menu'
import Life from '~/components/index/life.vue'
import Artistic from '~/components/index/artistic.vue'
export default {
  components: {
    EMenu,
    Life,
    Artistic
  }
}
</script>

<style lang="scss">
@import '~/assets/css/index/index.scss';
</style>
