import isThisYear from "date-fns/isThisYear/index.js";
import format from "date-fns/format/index.js";
import capitalize from "lodash/capitalize";

export const formatTime = (date: string) => {
  try {
    return format(new Date(date), "HH:mm");
  } catch (error) {
    return date;
  }
};

export const formatDate = (date: string) => {
  try {
    return format(new Date(date), "dd.MM.yyyy");
  } catch (error) {
    return date;
  }
};

export const formatHumanDate = (date: string) => {
  try {
    return format(new Date(date), "EEEE d. MMMM");
  } catch (error) {
    return date;
  }
};

export const formatHumanDateTime = (date: string) => {
  try {
    if (!isThisYear(new Date(date))) {
      return capitalize(format(new Date(date), "EEEE dd.MM.yyyy HH:mm"));
    }
    return capitalize(format(new Date(date), "EEEE d. MMMM HH:mm"));
  } catch (error) {
    return date;
  }
};
