function loadDsLoaiNguoiDung(state, data){
  state.loainguoidungs = data
}

function updateDsLoaiNguoiDung(state, data){
  let index = state .loainguoidungs.findIndex(item => item._id === data._id)
  if(index !==1){
    state.loainguoidungs[index] = data
    state.loainguoidungs = [...state.loainguoidungs]
  }
  else
  {
    state.loainguoidungs = [...state.loainguoidungs, ...[data]]
  }
}

export default {
  loadDsLoaiNguoiDung,
  updateDsLoaiNguoiDung
}