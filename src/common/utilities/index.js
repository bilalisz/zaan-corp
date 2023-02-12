import { v4 as uuidv4 } from "uuid";
export const getUID = () => {
  return uuidv4().split("-").at(0);
};
