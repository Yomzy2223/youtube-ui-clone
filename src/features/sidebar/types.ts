export type TSidebarItem = {
  text: string;
  imgSrc: any[];
  default?: boolean;
};

export type TSidebarSectionProps = {
  title?: string;
  itemsList: TSidebarItem[];
  defaultShow?: number;
};

export type TSidebarFooter = {
  text: string;
  url: string;
};
