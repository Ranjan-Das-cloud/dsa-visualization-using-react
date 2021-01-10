export const newTrace = (array) => {
  return [
    {
      array: [...array],
      clusterA: [],
      clusterB: [],
      clusterC: [],
      clusterD: [],
      sortedIndices: []
    }
  ];
};

export const addToTrace = (
  trace,
  array,
  sortedIndices = [],
  clusterA = [],
  clusterB = [],
  clusterC = [],
  clusterD = []
) => {
  trace.push({
    array: [...array],
    clusterA: [...clusterA],
    clusterB: [...clusterB],
    clusterC: [...clusterC],
    clusterD: [...clusterD],
    sortedIndices: [...sortedIndices]
  });
};

export const lastSorted = (trace) => {
  return trace[trace.length - 1].sortedIndices;
};

export const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

export const createRange = (start, end) => {
  return [...Array(end - start).keys()].map((elem) => elem + start);
};

export const createKey = (clusterA, clusterB, clusterC, clusterD) => {
  return { clusterA, clusterB, clusterC, clusterD };
};
