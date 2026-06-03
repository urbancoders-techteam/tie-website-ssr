/** Shared navigation types for country tab pages (UK and future countries). */

export type CountryTopTab = {
  id: string;
  label: string;
  sectionId: string;
};

export type CountrySidebarLink = {
  id: string;
  label: string;
  sectionId: string;
  /** Grouped in the highlighted intro block at the top of the sidebar. */
  inIntroGroup?: boolean;
};

export type CountryPageNavConfig = {
  topTabs: CountryTopTab[];
  sidebarLinks: CountrySidebarLink[];
  sidebarCta: string;
  /** Accessible name for the sidebar landmark, e.g. "UK study guide navigation". */
  sidebarAriaLabel: string;
};
