<template>
  <v-flex xs3>
    <v-select
      :items="items"
      :value="defaultValue"
      @change="search"
      label="Status"
    ></v-select>
  </v-flex>
</template>

<script>

  export default {
    mounted() {
      this.search('ALL')
    },
    methods: {
      search(status) {
        const token = this.$store.getters['auth/getToken']
        this.$store.dispatch('flight/search', { token, status })
      }
    },
    data() {
      return {
        defaultValue: 'ALL',
        items: [
          { text: 'All', value: 'ALL' },
          { text: 'Active', value: 'ACTIVE' },
          { text: 'Canceled', value: 'CANCELED' },
          { text: 'Landed', value: 'LANDED' },
          { text: 'Scheduled', value: 'SCHEDULED' },
        ]
      }
    }
  }
</script>

<style>

</style>
