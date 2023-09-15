const { useDispatch } = require("react-redux");
const { increment, decrement } = require("../reducers/counterSlice");

const dispatch = useDispatch();
export const handleIncremnt = () => {
  dispatch(increment());
};
export const handleDecrement = () => {
  dispatch(decrement());
};
export default {
  handleDecrement,
  handleIncremnt,
};
