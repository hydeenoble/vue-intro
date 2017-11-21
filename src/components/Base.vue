<template>
    <v-app light>
        <!--<router-view></router-view>-->
        <v-navigation-drawer
                fixed
                :mini-variant="miniVariant"
                :clipped="clipped"
                v-model="drawer"
                app
        >
            <v-list>
                <v-list-tile
                        v-for="(item, i) in items"
                        :key="i"
                        value="true"
                        router :to="item.link"
                >
                    <v-list-tile-action>
                        <v-icon light v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar app>
            <v-btn
                    icon
                    @click.stop="miniVariant = !miniVariant"
            >
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>

            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <v-slide-y-transition mode="out-in">
                    <!--<v-layout column align-center>-->
                        <!--<img src="/static/v.png" alt="Vuetify.js" class="mb-5"/>-->
                        <!--<div>-->
                            <!--This is the Dashboard-->
                        <!--</div>-->
                    <!--</v-layout>-->
                    <router-view></router-view>
                </v-slide-y-transition>
            </v-container>
        </v-content>
        <v-footer :fixed="fixed" app>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Home',
          link: '/login'
        }, {
          icon: 'bubble_chart',
          title: 'Dashboard',
          link: '/i/dashboard'
        }, {
          icon: 'bubble_chart',
          title: 'Others',
          link: '/i/others'
        },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Test App'
      }
    }
  }
</script>
