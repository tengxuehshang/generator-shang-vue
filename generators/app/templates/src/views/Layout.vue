<template>
  <el-container style="height:100%">
    <el-header style="height: 60px;border-bottom: 1px solid #dedede">
      <!-- <navbar @navClick="navClick" /> -->
      导航位置
    </el-header>
    <el-container>
      <el-aside v-if="showSiderBar" class="aside-container" style="width: 200px;">
        <!-- <sidebar class="sidebar-container" /> -->
      </el-aside>
      <el-main style="background-color: #f0f2f5;">
        <!-- <app-main /> -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'Home'
}
</script>
