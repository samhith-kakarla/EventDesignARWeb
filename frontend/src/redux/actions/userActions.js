export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

export function setUser(userId, email, fullName) {
  return { type: SET_USER, payload: { userId, email, fullName } };
}

export function unsetUser() {
  return { type: UNSET_USER, payload: {} };
}