<template>
  <div>
    <h1 class="my-4">{{species | firstCapitalize}} for Adoption</h1>
    <b-table striped hover :items="pets">
      <template slot="name" slot-scope="data">
        <router-link :to="`/pets/${species}/${data.index}`">{{data.value}}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  },
  filters: {
    firstCapitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style>
</style>
