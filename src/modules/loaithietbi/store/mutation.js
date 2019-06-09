function loadDsLoaiThietBi(state, data){
  state.loaithietbis = data
}

function updateDsLoaiThietBi(state, data){
  let index = state .loaithietbis.findIndex(item => item._id === data._id)
  if(index !==1){
    state.loaithietbis[index] = data
    state.loaithietbis = [...state.loaithietbis]
  }
  else
  {
    state.loaithietbis = [...state.loaithietbis, ...[data]]
  }
}


export default {
  loadDsLoaiThietBi,
  updateDsLoaiThietBi
}