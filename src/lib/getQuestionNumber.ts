import queryString from 'query-string';

type ParsedQueryParams = Record<string, string | undefined>;

/**
 * Retrieves the value of the "question" parameter from a query string.
 * If the "question" parameter is not found or is invalid, it returns 1 by default.
 *
 * @param query - The query string to parse (e.g., '?question=2').
 * @returns The value of the "question" parameter as a number. Returns 1 if the parameter is not found or cannot be parsed to a number.
 */

export const getQuestionNumber = (query: string): number => {
  const { question } = queryString.parse(query) as ParsedQueryParams;

  if (!question) {
    return 1;
  }

  return parseInt(question);
};
