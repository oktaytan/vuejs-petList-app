export default {
  ADD_PET: (state, { species, pet }) => {
    state[species].push(pet);
  }
};
