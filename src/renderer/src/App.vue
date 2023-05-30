<script setup lang="ts">
import Header from './layout/header/Header.vue'
import { ElConfigProvider } from 'element-plus'

const zIndex = 3000
const size = 'small'
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <Header />
  </el-config-provider>
</template>

<style></style>
