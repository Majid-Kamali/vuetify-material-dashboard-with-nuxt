<template>
  <v-app id="inspire">
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
  data: () => ({ drawer: null }),
}
</script>
