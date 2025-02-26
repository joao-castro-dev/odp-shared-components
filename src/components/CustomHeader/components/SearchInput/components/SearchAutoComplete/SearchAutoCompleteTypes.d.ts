export interface SearchAutoCompleteProps {
  sort?: string;
  handleFormatSearchPath: (data: { term: { value: string }; sort: any }) => any;
}
