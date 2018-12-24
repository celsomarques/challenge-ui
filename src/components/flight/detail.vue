<template>
  <v-container>
    <v-layout
      wrap
    >
      <v-flex xs12>
      </v-flex>

      <v-flex mb-4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Flight Detail</h3>
            </div>
          </v-card-title>

          <v-card-text>
            <v-layout row pa-2>
              <v-flex xs4>
                <h4>Pilot</h4>
                <span>{{ flight.pilot.name }}</span>
              </v-flex>
              <v-flex xs4>
                <h4>Aircraft Tail Number</h4>
                <span>{{ flight.aircraft }}</span>
              </v-flex>
              <v-flex xs4>
                <h4>Status</h4>
                <span>{{ flight.status }}</span>
              </v-flex>
            </v-layout>
            <v-layout row pa-2>
              <v-flex xs4>
                <h4>Departure</h4>
                <span>{{ flight.departure.code }} - {{ flight.departure.city }}</span>
              </v-flex>
              <v-flex xs4>
                <h4>Departure Time</h4>
                <span>{{ flight.departureTime | formatDate }}</span>
              </v-flex>
            </v-layout>
            <v-layout row pa-2>
              <v-flex xs4>
                <h4>Arrival</h4>
                <span>{{ flight.arrival.code }} - {{ flight.arrival.city }}</span>
              </v-flex>
              <v-flex xs4>
                <h4>Scheduled Time</h4>
                <span>{{ flight.scheduledTime | formatDate }}</span>
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-card-actions>
            <v-btn color="grey" @click="$router.back()">Back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters('flight', [ 'flight' ])
    },
    mounted() {
      this.$store.dispatch('flight/load', this.$route.params.id)
    },
    data() {
      return  {}
    }
  }
</script>

<style>

</style>
