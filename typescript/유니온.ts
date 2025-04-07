type NumberOrString = number | string;

const numberString: NumberOrString = "이상진";

const convertToString = (value: NumberOrString): NumberOrString => {
  if (typeof value == "string") {
    return "스트링리턴";
  }

  return 2;
};
