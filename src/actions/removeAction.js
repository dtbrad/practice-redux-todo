export function removeAction(val) {
  return {
    type: 'REMOVE_TODO',
    val,
  }
};