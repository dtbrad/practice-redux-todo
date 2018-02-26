export function submitEditAction(val) {
  return {
    type: 'CHANGE_TODO',
    val,
  }
};