export const addID = <I>(arrayOfObjects: I[]): Record<string, any>[] => {
  const iDArray: Record<string, any>[] = [];

  for (const itemIndex in arrayOfObjects) {
    const updatedObject: Record<string, any> = {};

    for (const key in arrayOfObjects[itemIndex]) {
      updatedObject[key] = arrayOfObjects[itemIndex][key];
    }
    updatedObject.id = itemIndex;
    iDArray.push(updatedObject);
  }
  return iDArray;
};
