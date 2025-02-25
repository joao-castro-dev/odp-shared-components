import { MenuData } from "../../../../CustomHeaderTypes";

export interface CustomLevelProps {
  selectedLevelOne: MenuData;
  currentLevel: number;
  selectAndIncreseLevel(): void;
  children: React.ReactNode;
}
