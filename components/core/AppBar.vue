<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="50"
    class="px-auto"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      color="grey"
      @click="SET_DRAWER(!drawer)"
    >
      <v-icon v-if="drawer" small> fas fa-list </v-icon>

      <v-icon v-else small> mdi-dots-vertical </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down grey--text subtitle-2 px-2"
      v-text="$route.name"
    />
    <v-spacer />

    <div class="mx-3" />

   

   

   
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'DashboardCoreAppBar',

  data: () => ({
    dialog: false,
    notifications: [
      'Mike John Responded to your email',
      'You have 5 new tasks',
      "You're now friends with Andrew",
      'Another Notification',
      'Another one',
    ],
  }),
  computed: {
    drawer() {
      return this.$store.state.setting.drawer
    },
  },
  methods: {
    ...mapMutations({
      SET_DRAWER: 'setting/SET_DRAWER',
    }),
  },
}
</script>