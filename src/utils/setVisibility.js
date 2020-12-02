export const setVisibility = (state, component, altComponent = null) => {
  return state ? component : altComponent;
};
