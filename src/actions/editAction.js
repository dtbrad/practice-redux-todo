export function editAction(id, val) {
  return {
    type: 'EDIT_TODO',
    id,
    val,
  }
};