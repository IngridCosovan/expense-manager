import {SubcategoryModel} from "app/core/models/subcategory.model";

export interface CategoryModel {
  is: number;
  name: string;
  loggedUserId: number;
  type: string;
  subcategories: SubcategoryModel[];
}

export function createCategoryContainer(id: number, name: string, loggedUserId: number, type: string, subcategories: SubcategoryModel[]) {
  return {
    id: id,
    name: name,
    loggedUserId: loggedUserId,
    type: type,
    subcategories: subcategories
  }
}
