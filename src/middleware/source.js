const today = () => {
  const dateNow = new Date();
  let day = dateNow.getDate();
  let month = dateNow.getMonth() + 1;

  if (day < 10) {
    day = `0${dateNow.getDate()}`;
  }

  if (month < 10) {
    month = `0${dateNow.getMonth() + 1}`;
  }
  const todayDate = `${dateNow.getFullYear()}-${month}-${day}`;
  return todayDate;
};

const yesterday = () => {
  const dateNow = new Date();
  dateNow.setDate(dateNow.getDate() - 1);
  let day = dateNow.getDate();
  let month = dateNow.getMonth() + 1;

  if (day < 10) {
    day = `0${dateNow.getDate()}`;
  }

  if (month < 10) {
    month = `0${dateNow.getMonth() + 1}`;
  }
  const todayDate = `${dateNow.getFullYear()}-${month}-${day}`;
  return todayDate;
};

export { today, yesterday };
