function loadDsnguoiDung(state, data) {
  state.nguoidungs = data
}

function updateDsNguoiDung(state, data){
  let index = state.nguoidungs.findIndex(item => item._id === data._id)
  if(index !== 1){
    state.nguoidungs[index] = data
    state.nguoidungs = [...state.nguoidungs]
  }
  else{
    state.nguoidungs = [...state.nguoidungs, ...[data]]
  }
}

function deleteNguoiDung(state, data){
  state.nguoidungs = state.nguoidungs.filter(item =>{
    return item._id != data._id
  })
}

export default {
  loadDsnguoiDung,
  updateDsNguoiDung,
  deleteNguoiDung
}