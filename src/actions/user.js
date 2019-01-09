export const userInsertData = data => ({
  type: 'USER_INSERT_DATA',
  payload: data,
});
export const userUpdateUid = data => ({
  type: 'USER_UPDATE_UID',
  payload: data,
});
export const userUpdateGender = data => ({
  type: 'USER_UPDATE_GENDER',
  payload: data,
});
export const userUpdateSigarets = data => ({
  type: 'USER_UPDATE_SIGARETS',
  payload: data,
});
export const userUpdateMail = data => ({
  type: 'USER_UPDATE_MAIL',
  payload: data,
});
