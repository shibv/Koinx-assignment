export function calculateStandardDeviation(values) {
    const n = values.length;
    if (n === 0) return 0;
    const mean = values.reduce((sum, value) => sum + value, 0) / n;
    const squaredDifferences = values.map(value => Math.pow(value - mean, 2));
    const variance = squaredDifferences.reduce((sum, value) => sum + value, 0) / n;
    return Math.sqrt(variance);
  }