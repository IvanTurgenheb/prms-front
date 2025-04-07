type MixedArrayType = string | number;

const mixedArray: MixedArrayType[] = ["1", 2, "3", "4", 5, 6, "7", 8, 9, 10];

const filterString = (value: MixedArrayType): boolean => {
  return typeof value === "string";
};

const readOnlyArray: ReadonlyArray<number> = [1, 2, 3];

const greeting: [number, string, boolean] = [1, "이상진", true];
