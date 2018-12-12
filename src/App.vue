<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Atech/Challenge</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/celsomarques/challenge"
      >
        <span class="mr-2">Github</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <ListFlight v-if="isAuthenticated"/>
      <Login v-else/>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from './components/login'
import ListFlight from './components/flight/list'

export default {
  name: 'App',
  components: {
    Login,
    ListFlight
  },
  computed: {
    ...mapGetters('auth', [ 'isAuthenticated' ])
  },
  data () {
    return {
      //
    }
  }
}
</script>
