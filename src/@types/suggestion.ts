export interface ISuggestion {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
}

export type SuggestionType = {
  suggestions: ISuggestion[];
  filterBy: string;
};
