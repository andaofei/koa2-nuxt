<template>
  <el-row :gutter="15" class="m-header">
    <el-col :span="6">
      <Geo />
    </el-col>
    <el-col :span="6">
      <User />
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple" />
    </el-col>
  </el-row>
</template>

<script>
import Geo from './goe'
import User from './user'
export default {
  name: 'Index',
  components: {
    Geo,
    User
  }
}
</script>

<style scoped>
</style>
