function loadDsPhongThietBi(state, data){
  state.phongthietbis = data
}

function updateDsPhongThietBi(state, data){
  let index = state.phongthietbis.findIndex(item => item._id === data._id)
  if(index !== -1){
    state.phongthietbis[index] = data
    state.phongthietbis = [...state.phongthietbis]
  }
  else{
    state.phongthietbis = [...state.phongthietbis, ...[data]]
  }
}

function deletePhongThietBi(state, data){
  state.phongthietbis = data.phongthietbis.filter(item =>{
    return item._id != data._id 
  })
}


export default {
  loadDsPhongThietBi,
  updateDsPhongThietBi,
  deletePhongThietBi
}