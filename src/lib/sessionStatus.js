export const getSessionStatus = (sessionDate) => {

  const today = new Date();
  const session = new Date(sessionDate);

  // remove time
  today.setHours(0, 0, 0, 0);
  session.setHours(0, 0, 0, 0);

  if (session > today) {
    return "Upcoming";
  }

  if (session === today) {
    return "Running";
  }
  return "Expired";
};