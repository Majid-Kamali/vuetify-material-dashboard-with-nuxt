<template>
  <v-main>
    <nuxt />
    <dashboard-core-setting />
    <dashboard-core-footer />
  </v-main>
</template>

<script>
export default {
  name: 'DashboardCoreView',

  components: {
    DashboardCoreFooter: () => import('./Footer'),
     DashboardCoreSetting: () => import('./Setting.vue'),
  },
}
</script>