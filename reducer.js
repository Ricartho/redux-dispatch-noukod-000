let state = {count: 0}
function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}
<<<<<<< HEAD
render = () => (document.body.textContent = state.count)
=======

render = () => (document.body.textContent = state.count)

>>>>>>> 46a14cf5ce68e869d3ceae526451c5490534bd42
function dispatch(action){
  state = changeState(state,action)
  render()
}
<<<<<<< HEAD
render()
=======

render()


>>>>>>> 46a14cf5ce68e869d3ceae526451c5490534bd42
