function loadDsQuanLyGiangDuong(state, data) {
  state.quanlys = data
}

function updateDsQuanLyGiangDuong(state, data) {
  let index = state.quanlys.findIndex(item => item._id === data._id)
  if (index !== 1) {
    state.quanlys[index] = data
    state.quanlys = [...state.quanlys]
  }
  else {
    state.quanlys = [...state.quanlys, ...[data]]
  }
}
function deleteQuanLyGiangDuong(state, data) {
  state.quanlys = state.quanlys.filter(item => {
    return item._id != data._id
  })
}

export default {
  loadDsQuanLyGiangDuong,
  updateDsQuanLyGiangDuong,
  deleteQuanLyGiangDuong
}