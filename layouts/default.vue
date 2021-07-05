<template>
  <v-app>
    <core-drawer />
    <core-app-bar />
    <core-view />
  </v-app>
</template>

<script>
import AppBar from '@/components/core/AppBar'
import Drawer from '@/components/core/Drawer'
import View from '@/components/core/View'
export default {
  components: {
    CoreAppBar: AppBar,
    CoreDrawer: Drawer,
    CoreView: View,
  },
  created() {
    this.$vuetify.rtl = true
  },
}
</script>
