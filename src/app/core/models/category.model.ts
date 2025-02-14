import {SubcategoryModel} from "app/core/models/subcategory.model";
import {CategoryType} from "app/core/models/category-type.model";

export interface CategoryModel {
  id: number;
  name: string;
  loggedUserId: number;
  categoryType: CategoryType;
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
