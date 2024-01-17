import { labelsAssociates } from "../../constants";
import { IAssociate } from "../../types/Associates";

export const getLabelAssociate = (key: keyof IAssociate): string => {
  return labelsAssociates[key];
};