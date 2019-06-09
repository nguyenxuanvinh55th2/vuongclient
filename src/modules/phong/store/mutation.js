function loadDsPhong(state, data) {
  state.phongs = data
}


function updateDsPhong(state, data){
  let index = state.phongs.findIndex(item => item._id === data._id)
  if(index !== 1){
    state.phongs[index] = data
    state.phongs = [...state.phongs]
  }
  else{
    state.phongs = [...state.phongs, ...[data]]
  }
}

function deletePhong(state, data) {
  state.phongs = state.phongs.filter(item => {
    return item._id != data._id
  })
}
export default {
  loadDsPhong,
  updateDsPhong,
  deletePhong
}