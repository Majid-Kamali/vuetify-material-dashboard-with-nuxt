<template>
  <div id="settings-wrapper">
    <v-card
      id="settings"
      class="py-2 px-4"
      color="rgba(0, 0, 0, .3)"
      dark
      flat
      link
      min-width="100"
      style="position: fixed; top: 115px; left: -35px; border-radius: 8px;"
    >
      <v-icon large>
       fa fa-cog
      </v-icon>
    </v-card>

    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      activator="#settings"
      bottom
      content-class="v-settings"
      left
      nudge-left="8"
      offset-x
      origin="top left"
      transition="scale-transition"
    >
      <v-card
        class="text-center mb-0"
        width="300"
      >
        <v-card-text>
          <strong class="mb-3 d-inline-block">سایدبار تم</strong>

          <v-item-group v-model="color">
            <v-item
              v-for="col in colors"
              :key="col"
              :value="col"
            >

              <template #default="{ active, toggle }">
                <v-avatar
                  :class="active && 'v-settings__item--active'"
                  :color="col"
                  class="v-settings__item"
                  size="25"
                  @click="toggle"
                />
              </template>
            </v-item>
          </v-item-group>



          <v-divider class="my-4 secondary" />

          <v-row
            align="center"
            no-gutters
          >
            <v-col cols="auto">
              نمای قالب
            </v-col>

            <v-spacer />

            <v-col cols="auto">
              <v-switch
                v-model="mode"
                class="ma-0 pa-0"
                color="secondary"
                hide-details
              />
            </v-col>
          </v-row>

          <v-divider class="my-4 secondary" />

          <v-row
            align="center"
            no-gutters
          >
            <v-col cols="auto">
              تصویر سایدبار
            </v-col>

            <v-spacer />

            <v-col cols="auto">
              <v-switch
                v-model="showImage"
                class="ma-0 pa-0"
                color="secondary"
                hide-details
              />
            </v-col>
          </v-row>

          <v-divider class="my-4 secondary" />
           <v-row align="center" no-gutters>
            <v-col cols="auto"> حالت سایدبار </v-col>

            <v-spacer />

            <v-col cols="auto">
              <v-switch
                v-model="expandSideBar"
                class="ma-0 pa-0"
                color="secondary"
                hide-details

              />
            </v-col>
          </v-row>
          <v-divider class="my-4 secondary" />

          <strong class="mb-3 d-inline-block">تصاویر</strong>

          <v-expand-transition>
              <v-card
                v-show="showImage"
              >
                <v-item-group
                  v-model="image"
                  transition="fade-transition"
                  class="d-flex justify-space-between mb-3"
                >
                  <v-item
                    v-for="img in images"
                    :key="img"
                    :value="img"
                    class="mx-1"
                  >
                    <template #default="{ active, toggle }">
                      <v-sheet
                        :class="active && 'v-settings__item--active'"
                        class="d-inline-block v-settings__item"
                        @click="toggle"
                      >
                        <v-img
                          :src="img"
                          height="100"
                          width="50"
                        />
                      </v-sheet>
                    </template>
                  </v-item>
                </v-item-group>

              </v-card>
          </v-expand-transition>




          <v-btn
            block
            class="mb-3"
            color="success"
            href="https://www.creative-tim.com/product/vuetify-material-dashboard"
            default
            rel="noopener"
            target="_blank"
          >
           تنظیمات
          </v-btn>

          <v-btn
            block
            class="mb-3"
            color="grey darken-1"
            dark
            href="https://vuetifyjs.com/components/api-explorer"
            default
            rel="noopener"
            target="_blank"
          >
           پروفایل کاربری
          </v-btn>

          <div class="my-12" />

          <div>
            <strong class="mb-3 d-inline-block">تنظیمات قالب پنل مدیریت</strong>
          </div>


        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import {  mapState , mapGetters  } from 'vuex'

export default {
  name: 'DashboardCoreSettings',

 data: () => ({
      color: '#E91E63',
      colors: [
        '#9C27b0',
        '#00CAE3',
        '#4CAF50',
        '#ff9800',
        '#E91E63',
        '#FF5252',
      ],
      image: './setting/sidebar-1.jpg',
      images: [
        './setting/sidebar-1.jpg',
        './setting/sidebar-2.jpg',
        './setting/sidebar-3.jpg',
        './setting/sidebar-4.jpg',
      ],
      menu: false,
      saveImage: '',
      showImage: true,
      expandSideBar: true,
      mode:true,
    }),
    computed: {
      ...mapState(['barImage']),
      ...mapGetters({SETTING_GETTER: 'setting/SETTING_GETTER'}),

      getSetting() {
        return this.SETTING_GETTER
      }

    },
    watch: {
      color (val, oldVal) {
        if (val === undefined) {
          val = oldVal
        }
        this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'].primary = val
        this.$store.dispatch('setting/SAVE_COLOR', val)
      },
      showImage (val) {

        this.$store.dispatch('setting/SAVE_SHOWIMAGE', val)

      },
      image (val) {
        this.$store.dispatch('setting/SAVE_BARIMAGE', val)

      },
      expandSideBar(val, oldVal){
         if (val === undefined) {
          val = oldVal
        }
        this.$store.dispatch('setting/SAVE_EXPAND_SIDEBAR', val)
      },
      mode(val){
        this.$vuetify.theme.dark = val
        this.$store.dispatch('setting/SAVE_MODE', val)
      }
    },
    mounted(){
        this.LocalstorageKeyExists()
    },
    methods:{
      LocalstorageKeyExists(){

        if (localStorage.getItem('setting-color')===null) {
          this.color = '#9C27b0'
        }else{
          this.color = localStorage.getItem('setting-color')
        }

        if (localStorage.getItem('setting-expand-sidebar')===null) {
          this.expandSideBar = true
        }else{
          this.expandSideBar = localStorage.getItem('setting-expand-sidebar') === 'true'
        }

        if (localStorage.getItem('setting-mode')===null) {
          this.mode = true
          this.$vuetify.theme.dark = true
        }else{
          this.mode = localStorage.getItem('setting-mode')==='true'
          this.$vuetify.theme.dark = localStorage.getItem('setting-mode')==='true'
        }

        if (localStorage.getItem('setting-showImage')===null) {
          this.showImage = true
        }else{
          this.showImage = localStorage.getItem('setting-showImage') === 'true'
        }

        if (localStorage.getItem('setting-barImage')===null) {
          this.image = './setting/sidebar-1.jpg'
        }else{
          this.image = localStorage.getItem('setting-barImage')
        }

      }
    }
  }
</script>

<style lang="sass">
  .v-settings
    .v-item-group > *
      cursor: pointer

    &__item
      border-width: 3px
      border-style: solid
      border-color: transparent !important

      &--active
        border-color: #FFF !important
</style>

