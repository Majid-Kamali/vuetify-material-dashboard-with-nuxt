<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn class="mr-3" elevation="1" fab small color="grey lighten-2">
      <v-icon v-if="value"> mdi-view-quilt </v-icon>

      <v-icon v-else> mdi-dots-vertical </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down  grey--text subtitle-2"
      v-text="$route.name"
    />

    <v-spacer />

  

    <div class="mx-3" />
      
   <v-dialog
      v-model="dialog"
      width="500"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          text
          v-on="on"
        >
         <v-icon color="grey">fa fa-cog</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

     <v-menu>
      
       
      <template #activator="{ on, attrs }">
        <v-btn class="ml-2" min-width="0" text  v-bind="attrs" v-on="on">
          <v-badge color="red" overlap >
            <template #badge>
              <span>5</span>
            </template>

            <v-icon color="grey">mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>
      
     <v-list :tile="false" nav>
        <div>
          <v-list-item v-for="(n, i) in notifications" :key="`item-${i}`">
            <v-list-item-title v-text="n" />
          </v-list-item>
        </div>
      </v-list>
    </v-menu>

    <v-btn class="ml-2" min-width="0" text to="/pages/user">
      <v-icon color="grey">fa fa-user</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'DashboardCoreAppBar',

  data: () => ({
    value: false,
    notifications: [
      'Mike John Responded to your email',
      'You have 5 new tasks',
      "You're now friends with Andrew",
      'Another Notification',
      'Another one',
    ],
  }),
   methods: {
      onClick () {
        // Perform an action
      },
    },
}
</script>