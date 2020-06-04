

export default {
  handleDelete: (deleteFunc, idToDelete, urlToPush, props) => {
    deleteFunc(idToDelete).then(props.history.push(urlToPush))
  }

}