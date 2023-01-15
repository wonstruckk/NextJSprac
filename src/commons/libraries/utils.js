export const getMyDate = (createdAt) => {
  const qwer = new Date();
  const year = qwer.getFullYear();
  const month = String(qwer.getMonth() + 1).padStart(2, "0");
  const day = String(qwer.getDay()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
