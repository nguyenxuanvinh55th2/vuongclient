function loadDsThietBi(state, data){
  state.thietbis = data
}

function updateDsThietBi(state, data){
  let index = state.thietbis.findIndex(item => item._id === data._id)
  if(index !== 1){
    state.thietbis[index] = data
    state.thietbis = [...state.thietbis]
  }
  else{
    state.thietbis = [...state.thietbis, ...[data]]
  }
}

function deleteThietBi(state, data){
  state.thietbis = state.thietbis.filter(item => {
    return item._id != data._id
  })
}

export default {
  loadDsThietBi,
  updateDsThietBi,
  deleteThietBi
}
