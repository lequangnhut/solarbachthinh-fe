export interface ICategories {
  _id: string;
  categoryName: string;
  categoryImage: string;
  createdAt: string;
}

export interface IProductState {
  loading: boolean;
  categoriesList: Array<ICategories>;
}

export interface IProductStateForData {
  loading?: boolean;
  categoriesList?: Array<ICategories>;
}
