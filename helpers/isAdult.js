const isAdult = dateOfBirth => {
  // get day, month, year from params
  let [day, month, year] = dateOfBirth.split('/');

  // transform vars to number
  day = Number(day);
  month = Number(month);
  year = Number(year);

  // get date
  const today = new Date();
  const userBirth = new Date(year, month - 1, day);

  // get years
  let age = today.getFullYear() - userBirth.getFullYear();

  // get month
  const m = today.getMonth() - userBirth.getMonth();

  // decrement year if today month < userBirth month or month < 0
  if (m < 0 || (m === 0 && today.getDate() < userBirth.getDate())) {
    age--;
  }

  if (age < 18) {
    return false;
  }
  return true;
};

module.exports = isAdult;
