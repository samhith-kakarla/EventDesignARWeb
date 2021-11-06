export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

export function setUser(userId, fullName, email) {
  return { type: SET_USER, payload: { userId, fullName, email } };
}

export function unsetUser() {
  return { type: UNSET_USER, payload: {} };
}