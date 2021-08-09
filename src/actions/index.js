const Inc = (num) => {
  return {
    type: 'INCREMENT',
    payload: num,
  };
};
const Dec = (nums) => {
  return {
    type: 'DECREMENT',
    payload: nums,
  };
};
export { Inc, Dec };
