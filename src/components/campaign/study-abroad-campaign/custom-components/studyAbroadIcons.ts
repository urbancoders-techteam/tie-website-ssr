import type { IconType } from "react-icons";
import {
  LuBadgePercent,
  LuBookOpen,
  LuBriefcase,
  LuCalendarClock,
  LuCalendarRange,
  LuFileCheck2,
  LuGlobe,
  LuGraduationCap,
  LuLandmark,
  LuPlane,
  LuUsers,
  LuWallet,
} from "react-icons/lu";

export const STUDY_ABROAD_ICONS = {
  plane: LuPlane,
  bookOpen: LuBookOpen,
  calendarRange: LuCalendarRange,
  graduationCap: LuGraduationCap,
  wallet: LuWallet,
  badgePercent: LuBadgePercent,
  calendarClock: LuCalendarClock,
  briefcase: LuBriefcase,
  fileCheck: LuFileCheck2,
  globe: LuGlobe,
  landmark: LuLandmark,
  users: LuUsers,
} as const satisfies Record<string, IconType>;

export type StudyAbroadIcon = keyof typeof STUDY_ABROAD_ICONS;
