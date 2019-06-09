
function loadDsGiangDuong(state, data) {
  state.giangduongs = data
}

function loadGiangDuongById(state, data) {
  state.giangduongs = data
}

function updateDsGiangDuong(state, data) {
  let index = state.giangduongs.findIndex(item => item._id === data._id)
  if (index !== 1) {
    state.giangduongs[index] = data
    state.giangduongs = [...state.giangduongs]
  }
  else {
    state.giangduongs = [...state.giangduongs, ...[data]]
  }
}

function deleteGiangDuong(state, data) {
  state.giangduongs = state.giangduongs.filter(item => {
    return item._id != data._id
  })
}

export default {
  loadDsGiangDuong,
  loadGiangDuongById,
  updateDsGiangDuong,
  deleteGiangDuong
}