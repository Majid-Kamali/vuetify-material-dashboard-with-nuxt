<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="
      setSetting.barColor !==
      'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'
    "
    :expand-on-hover="setSetting.expandSideBar"
    :right="$vuetify.rtl"
    :src="imageSrc"
    mobile-breakpoint="960"
    app
    mini-variant-width="80"
    width="260"
    v-bind="$attrs"
  >

    <template #img="props">
      <v-img
        :gradient="`to bottom, ${setSetting.barColor}`"
        v-bind="props"
      />
    </template>

    <v-row class="py-4 px-3">
      <v-list dense nav>
        <v-list-item>
          <v-list-item-avatar class="align-self-center" contain>
            <v-img :src="profile.avatar" max-height="30" />
          </v-list-item-avatar>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1">
                {{ profile.title }}
              </v-list-item-title>
              <v-list-item-subtitle> {{
                profile.subtitle
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item>
      </v-list>
    </v-row>

    <v-divider class="width=80% margin: 0 auto;"></v-divider>

    <v-list expand nav>
      <div />

      <v-list>
        <v-list-item-group :color="setSetting.color">
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
// import { mapState  } from 'vuex'
import { mapGetters  } from 'vuex'
export default {

  data: () => {
    return {
      profile: {
        avatar:
          './setting/favicon.ico',
        title: 'برنامه نویس',
        subtitle: 'Majid@gmail.com',
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
  computed: {
  // ...mapState({ settings: state => state.setting }),
  ...mapGetters({settings: 'setting/SETTING_GETTER'}),
  setSetting(){
      return {
        barColor:this.settings.barColor,
        barImage:this.settings.barImage,
        showImage:this.settings.showImage,
        color:this.settings.color,
        expandSideBar: this.settings.expandSideBar,
      }
        // console.log('after this.settings.expandSideBar', this.settings.expandSideBar)
  },
  imageSrc() {
    return this.setSetting.showImage === false ? this.settings.barColor : this.setSetting.barImage
  },
  drawer: {
      get() {
        return this.$store.state.setting.drawer;
      },
      set(val) {
        this.$store.commit("setting/SET_DRAWER", val);
      },
    },
  },
  watch:{

  },
  updated() {


  },
  mounted(){
       if(process.browser){
        this.mode = localStorage.getItem("seting-mode");
      }

  },
  methods:{

  },

}
</script>

<style lang="sass">
@import '~vuetify/src/styles/tools/_rtl.sass'

#core-navigation-drawer
  .v-list-group__header.v-list-item--active:before
    opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
