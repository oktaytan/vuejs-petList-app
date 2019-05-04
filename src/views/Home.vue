<template>
  <div class="home">
    <h1 class="my-4">Adopt a new best friends</h1>
    <div class="animals__counts">
      <span class="mb-4">Animals Count: {{animalsCount || 0}}</span>
      <span class="mb-4">Cats Count: {{cats.length || 0}}</span>
      <span class="mb-4">Dogs Count: {{dogs.length || 0}}</span>
    </div>
    <button class="btn btn-primary mb-5" @click="togglePetForm">Add New Pet</button>

    <div class="animal__form" v-if="showPetForm">
      <b-form @submit.prevent="handleSubmit">
        <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
          <b-form-input
            type="text"
            id="input-1"
            v-model="formData.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Pet's Breed:" label-for="input-2">
          <b-form-input
            type="text"
            id="input-2"
            v-model="formData.breed"
            required
            placeholder="Enter breed"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Species:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="formData.species"
            :options="['cats','dogs']"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" label="Gender:" label-for="input-4">
          <b-form-select
            id="input-4"
            v-model="formData.gender"
            :options="['male','female']"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-5" label="Pet's Age:" label-for="input-5">
          <b-form-input
            type="number"
            id="input-5"
            v-model="formData.age"
            required
            placeholder="Enter age"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Pet's Color:" label-for="input-6">
          <b-form-input
            type="text"
            id="input-6"
            v-model="formData.color"
            required
            placeholder="Enter color"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-7" label="Pet's Weight:" label-for="input-7">
          <b-form-input
            type="number"
            id="input-7"
            v-model="formData.weight"
            required
            placeholder="Enter weight"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-8" label="Pet's Location:" label-for="input-8">
          <b-form-input
            type="text"
            id="input-8"
            v-model="formData.location"
            required
            placeholder="Enter location"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-9" label="Your Notes:" label-for="input-9">
          <b-form-input
            type="text"
            id="input-9"
            v-model="formData.notes"
            required
            placeholder="Enter notes"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger" class="ml-3">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      showPetForm: false,
      formData: {
        name: "",
        breed: "",
        species: null,
        gender: null,
        age: 0,
        color: "",
        weight: 0,
        location: "",
        notes: "Super friendly"
      }
    };
  },
  computed: {
    ...mapGetters(["animalsCount"]),
    ...mapState(["cats", "dogs"])
  },
  methods: {
    ...mapActions(["addPet"]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const {
        species,
        name,
        breed,
        gender,
        age,
        color,
        weight,
        location,
        notes
      } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          breed,
          species,
          gender,
          age,
          color,
          weight,
          location,
          notes
        }
      };
      this.addPet(payload);

      // reset form after submit
      this.formData = {
        name: "",
        breed: "",
        species: null,
        gender: null,
        age: 0,
        color: "",
        weight: 0,
        location: "",
        notes: "Super friendly"
      };
    }
  }
};
</script>

<style lang="scss" >
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .animals__counts {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #42b983;
    font-size: 1rem;
  }

  .animal__form {
    border: 1px solid #d3d3d3;
    width: 50%;
    padding: 2rem 5rem;
    border-radius: 1rem;
    box-sizing: border-box;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  }
}
</style>
