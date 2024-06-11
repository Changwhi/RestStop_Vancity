const inputDataTypeFilter = (inputData: any) => {
  // check if inputData is a function
  if (typeof inputData == "function") {
    return inputData();
  }
  // check if inputData is not a function such as json
  else {
    return inputData;
  }
};

export default inputDataTypeFilter;
