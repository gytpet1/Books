export function selectBook(book) {
  //selectBook is ActionCreator it needs to return object with type prop
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
