export type TSidebarItem = {
  text: string;
  imgSrc: any[];
  href: string;
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
