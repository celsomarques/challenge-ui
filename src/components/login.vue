<template>
  <v-container>

    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Login</h3>
            </div>
          </v-card-title>

          <v-card-text>
              <v-form>
                <v-text-field
                  v-model="username"
                  label="Username"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :type="'password'"
                  label="Password"
                  required
                ></v-text-field>
              </v-form>
          </v-card-text>

          <v-card-actions>
            <v-btn block color="blue" @click="login">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>

  import { mapState } from 'vuex'
  import router from '../routers'

  export default {
    methods: {

      login() {
        const data = {
          username: this.username,
          password: this.password
        }
        this.$store.dispatch('auth/login', data)
      }
    },
    computed: {
      ...mapState('auth', [ 'token' ])
    },

    watch: {
      token() {
        //eslint-disable-next-line
        router.push({ path: '/flights' })
      }
    },
    data() {
      return {
          username: 'challenge',
          password: 'challenge'
      }
    }
  }
</script>

<style>

</style>
