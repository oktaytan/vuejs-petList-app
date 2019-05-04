<template>
  <PetTable species="dogs" :pets="dogs"/>
</template>

<script>
import { mapState } from "vuex";
import PetTable from "@/components/PetTable.vue";

export default {
  name: "Dogs",
  components: {
    PetTable
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["dogs"])
  }
};
</script>

<style>
</style>