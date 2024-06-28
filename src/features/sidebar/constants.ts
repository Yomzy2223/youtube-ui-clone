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
      default: true,
    },
    {
      text: "Explore",
      imgSrc: [ExploreIcon, ExploreFillIcon],
    },
    {
      text: "Subscriptions",
      imgSrc: [SubscriptionsIcon, SubscriptionsFillIcon],
    },
  ],
};

// SIDEBAR SECTION 2 ITEMS LIST
const sidebarSection2: TSidebarSectionProps = {
  itemsList: [
    {
      text: "Library",
      imgSrc: [LibraryIcon, LibraryFillIcon],
    },
    {
      text: "History",
      imgSrc: [HistoryIcon, HistoryFillIcon],
    },
    {
      text: "Your Videos",
      imgSrc: [YourVideosIcon, YourVideosIcon],
    },
    {
      text: "Watch Later",
      imgSrc: [WatchLaterIcon, WatchLaterFillIcon],
    },
    {
      text: "Liked Videos",
      imgSrc: [LikedIcon, LikedFillIcon],
    },
    {
      text: "Settings",
      imgSrc: [SettingsIcon, SettingsIcon],
    },
    {
      text: "Reports",
      imgSrc: [ReportIcon, ReportFillIcon],
    },
  ],
  defaultShow: 5,
};

// SIDEBAR SECTION 3 ITEMS LIST
const sidebarSection3: TSidebarSectionProps = {
  title: "Subscriptions",
  itemsList: [
    {
      text: "Gamer X",
      imgSrc: [SubAvatarImg4],
    },
    {
      text: "Beauty Guru",
      imgSrc: [SubAvatarImg5],
    },
    {
      text: "Tech Learner",
      imgSrc: [SubAvatarImg6],
    },
    {
      text: "Doggo Lover",
      imgSrc: [SubAvatarImg7],
    },
    {
      text: "Earth Advocate",
      imgSrc: [SubAvatarImg1],
    },
    {
      text: "Fitness Coach",
      imgSrc: [SubAvatarImg2],
    },
    {
      text: "Marie Kondo Fan",
      imgSrc: [SubAvatarImg3],
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
    },
    {
      text: "Gaming",
      imgSrc: [GamingIcon, GamingFillIcon],
    },
    {
      text: "Live",
      imgSrc: [LiveIcon, LiveFillIcon],
    },
  ],
};

// SIDEBAR SECTION 5 ITEMS LIST
const sidebarSection5: TSidebarSectionProps = {
  itemsList: [
    {
      text: "Settings",
      imgSrc: [SettingsIcon],
    },
    {
      text: "Report history",
      imgSrc: [ReportIcon, ReportFillIcon],
    },
    {
      text: "Help",
      imgSrc: [HelpIcon],
    },
    {
      text: "Send feedback",
      imgSrc: [FeedbackIcon],
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
  { text: "Home", imgSrc: [HomeIcon, HomeFillIcon] },
  { text: "Explore", imgSrc: [ExploreIcon, ExploreFillIcon] },
  {
    text: "Subscriptions",
    imgSrc: [SubscriptionsIcon, SubscriptionsFillIcon],
  },
  { text: "Library", imgSrc: [LibraryIcon, LibraryFillIcon] },
];
