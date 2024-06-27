import {
  ExploreFillIcon,
  ExploreIcon,
  FeedbackIcon,
  GamingFillIcon,
  GamingIcon,
  HelpIcon,
  HistoryFillIcon,
  HistoryIcon,
  HomeFillIcon,
  HomeIcon,
  LibraryFillIcon,
  LibraryIcon,
  LikedFillIcon,
  LikedIcon,
  LiveFillIcon,
  LiveIcon,
  PremiumFillIcon,
  PremiumIcon,
  ReportFillIcon,
  ReportIcon,
  SettingsIcon,
  SubscriptionsFillIcon,
  SubscriptionsIcon,
  WatchLaterFillIcon,
  WatchLaterIcon,
  YourVideosIcon,
} from "@/assets/icons";
import {
  SubAvatarImg1,
  SubAvatarImg2,
  SubAvatarImg3,
  SubAvatarImg4,
  SubAvatarImg5,
  SubAvatarImg6,
  SubAvatarImg7,
} from "@/assets/images";
import { TSidebarFooter, TSidebarItem, TSidebarSectionProps } from "./types";

// SIDEBAR SECTION 1 ITEMS LIST
const sidebarSection1: TSidebarSectionProps = {
  itemsList: [
    {
      text: "Home",
      imgSrc: [HomeIcon, HomeFillIcon],
      href: "/home",
    },
    {
      text: "Explore",
      imgSrc: [ExploreIcon, ExploreFillIcon],
      href: "/explore",
    },
    {
      text: "Subscriptions",
      imgSrc: [SubscriptionsIcon, SubscriptionsFillIcon],
      href: "/subscriptions",
    },
  ],
};

// SIDEBAR SECTION 2 ITEMS LIST
const sidebarSection2: TSidebarSectionProps = {
  itemsList: [
    {
      text: "Library",
      imgSrc: [LibraryIcon, LibraryFillIcon],
      href: "/library",
    },
    {
      text: "History",
      imgSrc: [HistoryIcon, HistoryFillIcon],
      href: "/history",
    },
    {
      text: "Your Videos",
      imgSrc: [YourVideosIcon, YourVideosIcon],
      href: "/your-videos",
    },
    {
      text: "Watch Later",
      imgSrc: [WatchLaterIcon, WatchLaterFillIcon],
      href: "/watch-later",
    },
    {
      text: "Liked Videos",
      imgSrc: [LikedIcon, LikedFillIcon],
      href: "/liked-videos",
    },
    {
      text: "Settings",
      imgSrc: [SettingsIcon, SettingsIcon],
      href: "/settings",
    },
    {
      text: "Reports",
      imgSrc: [ReportIcon, ReportFillIcon],
      href: "/reports",
    },
  ],
  defaultShow: 5,
};

// SIDEBAR SECTION 3 ITEMS LIST
const sidebarSection3: TSidebarSectionProps = {
  title: "Subscriptions",
  itemsList: [
    {
      text: "James Gouse",
      imgSrc: [SubAvatarImg1],
      href: "/subscriptions/james-gouse",
    },
    {
      text: "Alan Cooper",
      imgSrc: [SubAvatarImg2],
      href: "/subscriptions/alan-cooper",
    },
    {
      text: "Marcus Levin",
      imgSrc: [SubAvatarImg3],
      href: "/subscriptions/marcus-levin",
    },
    {
      text: "Alexis Sears",
      imgSrc: [SubAvatarImg4],
      href: "/subscriptions/alexis-sears",
    },
    {
      text: "Jesica Lambert",
      imgSrc: [SubAvatarImg5],
      href: "/subscriptions/jesica-lambert",
    },
    {
      text: "Anna White",
      imgSrc: [SubAvatarImg6],
      href: "/subscriptions/anna-white",
    },
    {
      text: "Skylar Dias",
      imgSrc: [SubAvatarImg7],
      href: "/subscriptions/skylar-dias",
    },
  ],
  defaultShow: 5,
};

// SIDEBAR SECTION 4 ITEMS LIST
const sidebarSection4: TSidebarSectionProps = {
  title: "More from youtube",
  itemsList: [
    {
      text: "Youtube Premium",
      imgSrc: [PremiumIcon, PremiumFillIcon],
      href: "premium",
    },
    {
      text: "Gaming",
      imgSrc: [GamingIcon, GamingFillIcon],
      href: "/gaming",
    },
    {
      text: "Live",
      imgSrc: [LiveIcon, LiveFillIcon],
      href: "/live",
    },
  ],
};

// SIDEBAR SECTION 5 ITEMS LIST
const sidebarSection5: TSidebarSectionProps = {
  itemsList: [
    {
      text: "Settings",
      imgSrc: [SettingsIcon],
      href: "/settings",
    },
    {
      text: "Report history",
      imgSrc: [ReportIcon, ReportFillIcon],
      href: "/report-history",
    },
    {
      text: "Help",
      imgSrc: [HelpIcon],
      href: "/help",
    },
    {
      text: "Send feedback",
      imgSrc: [FeedbackIcon],
      href: "/feedback",
    },
  ],
};

// SIDEBAR FOOTER SECTION 1
const sidbarFooterLinks1: TSidebarFooter[] = [
  { text: "About", url: "/" },
  { text: "Press", url: "/" },
  { text: "Copyright", url: "/" },
  { text: "Contact us", url: "/" },
  { text: "Creators", url: "/" },
  { text: "Advertise", url: "/" },
  { text: "Developers", url: "/" },
];

// SIDEBAR FOOTER SECTION 2
const sidbarFooterLinks2: TSidebarFooter[] = [
  { text: "Terms", url: "/" },
  { text: "Privacy", url: "/" },
  { text: "Policy & Safety", url: "/" },
  { text: "How Youtube works", url: "/" },
  { text: "Test new features", url: "/" },
];

// EXPORTS DESKTOP SIDEBAR SECTIONS
export const sidebarItems = [
  sidebarSection1,
  sidebarSection2,
  sidebarSection3,
  sidebarSection4,
  sidebarSection5,
];

// EXPORTS DESKTOP SIDEBAR FOOTER LINKS
export const sidbarFooterLinks = [sidbarFooterLinks1, sidbarFooterLinks2];

// EXPORTS MOBILE SIDEBAR ITEMS
export const mobileSidebarItems: TSidebarItem[] = [
  { text: "Home", imgSrc: [HomeIcon, HomeFillIcon], href: "/home" },
  { text: "Explore", imgSrc: [ExploreIcon, ExploreFillIcon], href: "/explore" },
  {
    text: "Subscriptions",
    imgSrc: [SubscriptionsIcon, SubscriptionsFillIcon],
    href: "/subscriptions",
  },
  { text: "Library", imgSrc: [LibraryIcon, LibraryFillIcon], href: "/library" },
];
