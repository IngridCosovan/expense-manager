export default interface DropdownObject {
  index?: number;
  name: string;
  label: string;
  code: string;
  id?: number;
  designObjectId?: number;
  disabled?: boolean;
}

export interface DropdownOptions {
  label?: string;
  code?: string;
  index?: number;
  designObjectId?: number;
  id?: number;
  disabled?: boolean;
}

export function isDropdown(obj: any): obj is DropdownObject {
  return obj && 'label' in obj && 'code' in obj;
}
