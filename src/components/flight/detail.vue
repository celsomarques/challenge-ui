<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
      </v-flex>

      <v-flex mb-4>
      <div>
      Testeeeeee:
        {{ $route.params.id }}
        </div>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

  export default {
    computed: {
    },
    mounted() {
    },
    data() {
      return  {
      }
    }
  }
</script>

<style>

</style>
