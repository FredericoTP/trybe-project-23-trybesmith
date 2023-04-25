const errorMap: Record<string, number> = {
  INVALID_VALUE: 422,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

const mapError = (type: string): number => errorMap[type] || 500;

export {
  errorMap,
  mapError,
};