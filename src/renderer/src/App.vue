<script setup lang="ts">
import Header from './layout/Header.vue'
import { ElConfigProvider } from 'element-plus'

const zIndex = 3000
const size = 'small'
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <Header />
    <div>123</div>
  </el-config-provider>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
