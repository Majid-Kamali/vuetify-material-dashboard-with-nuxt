<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-breakpoint="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template #img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <v-divider class="mb-1" />

    <v-list dense nav>
      <v-list-item>
        <v-list-item-avatar class="align-self-center pr-4" rounded contain>
          <v-img
            src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"
            max-height="30"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="display-1" v-text="profile.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list expand nav>
      <div />

      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <div />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => {
    return {
      expandOnHover: true,
      barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
      barImage:
        'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
      drawer: null,
      profile: {
        avatar: true,
        title: 'Admin',
      },
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'dashboard',
          to: '/',
        },
        {
          icon: 'mdi-account',
          title: 'user',
          to: '/pages/user',
        },
        {
          title: 'rtables',
          icon: 'mdi-clipboard-outline',
          to: '/tables/regular-tables',
        },
        {
          title: 'typography',
          icon: 'mdi-format-font',
          to: '/components/typography',
        },
        {
          title: 'icons',
          icon: 'mdi-chart-bubble',
          to: '/components/icons',
        },
        {
          title: 'google',
          icon: 'mdi-map-marker',
          to: '/maps/google-maps',
        },
        {
          title: 'notifications',
          icon: 'mdi-bell',
          to: '/components/notifications',
        },
      ],
    }
  },
}
</script>



// <style lang="sass">
//   @import '~vuetify/src/styles/tools/_rtl.sass'

//   #core-navigation-drawer
//     .v-list-group__header.v-list-item--active:before
//       opacity: .24

//     .v-list-item
//       &__icon--text,
//       &__icon:first-child
//         justify-content: center
//         text-align: center
//         width: 20px

//         +ltr()
//           margin-right: 24px
//           margin-left: 12px !important

//         +rtl()
//           margin-left: 24px
//           margin-right: 12px !important

//     .v-list--dense
//       .v-list-item
//         &__icon--text,
//         &__icon:first-child
//           margin-top: 10px

//     .v-list-group--sub-group
//       .v-list-item
//         +ltr()
//           padding-left: 8px

//         +rtl()
//           padding-right: 8px

//       .v-list-group__header
//         +ltr()
//           padding-right: 0

//         +rtl()
//           padding-right: 0

//         .v-list-item__icon--text
//           margin-top: 19px
//           order: 0

//         .v-list-group__header__prepend-icon
//           order: 2

//           +ltr()
//             margin-right: 8px

//           +rtl()
//             margin-left: 8px
// </style>
