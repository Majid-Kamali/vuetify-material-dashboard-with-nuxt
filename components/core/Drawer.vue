<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    expand-on-hover
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-breakpoint="960"
    app
    width="260"
    v-bind="$attrs"
    permanent
  >
    <template #img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <v-row class="py-4 px-1">
      <v-list dense nav>
        <v-list-item>
          <v-list-item-avatar class="align-self-center" color="white" contain>
            <v-img
              src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"
              max-height="30"
            />
          </v-list-item-avatar>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1">
                برنامه نویس
              </v-list-item-title>
              <v-list-item-subtitle>Majid@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item>
      </v-list>
    </v-row>

    <v-divider class="width=80% margin: 0 auto;"></v-divider>

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
      drawer: false,
      profile: {
        avatar: true,
        title: 'Admin',
      },
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'داشبورد',
          to: '/',
        },
        {
          icon: 'mdi-account',
          title: 'کاربران جدید',
          to: '/pages/user',
        },
        {
          icon: 'mdi-clipboard-outline',
          title: 'مدیریت محصولات',
          to: '/tables/regular-tables',
        },
        {
          icon: 'mdi-format-font',
          title: 'مدیریت سفاشات',
          to: '/components/typography',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'مدیریت موجودی',
          to: '/components/icons',
        },
        {
          icon: 'mdi-map-marker',
          title: 'مدیریت پوسته  ',
          to: '/maps/google-maps',
        },
        {
          icon: 'mdi-bell',
          title: ' فروشگاه شما',
          to: '/components/notifications',
        },
      ],
    }
  },
}
</script>