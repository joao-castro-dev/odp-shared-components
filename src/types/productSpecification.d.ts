export type Specification = {
  name: string;
  originalName: string;
  values: {
    val: string;
  }[];
};

export type productPageSpecification = {
  name: string;
  originalName: string;
  specifications: Specification[];
};
