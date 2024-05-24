import queryString from 'query-string';

type ParsedQueryParams = Record<string, string | undefined>;

// This function receives a query string and returns the value of the "question" parameter
// If not value found it returns 1 by default
export const getQuestionNumber = (query: string): number => {
  const { question } = queryString.parse(query) as ParsedQueryParams;

  if (!question) {
    return 1;
  }

  return parseInt(question);
};
