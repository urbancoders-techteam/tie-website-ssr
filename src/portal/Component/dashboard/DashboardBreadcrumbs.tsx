// @ts-nocheck
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link, useLocation } from "@/portal/navigation";

const LABELS = {
  home: "Dashboard",
  admission: "Admissions",
  studyabroad: "Study abroad",
  "studyabroad-purchase": "Study abroad plan",
  "study-abroad-plan": "Study abroad plan",
  "study-abroad": "Study abroad",
  university: "University",
  "test-prep": "Test preparation",
  mocktest: "Tests",
  mocktestList: "Test list",
  testPage: "Test",
  mockscoreboard: "Scoreboard",
  scoretable: "Score",
  "view-resource-file": "File",
  order: "Orders",
  "order-details": "Order details",
  community: "Community",
  CreateCommunity: "Create community",
  joincommunity: "Join community",
  createcommunitypost: "New post",
  documentsverification: "Documents",
  learningresources: "Learning resources",
  "user-board": "User board",
  profileupdate: "Profile",
  resources: "Resources",
  support: "Support",
  planner: "Planner",
  performance: "Performance",
  notifications: "Notifications",
  enrollment: "Enrollment",
  "enrollment-form": "Enrollment form",
  "precounselling-form": "Pre-counselling",
  scheduleForm: "Schedule",
  scorepending: "Score pending",
};

const CATEGORY_LABELS = {
  personalized: "Personalized mentoring",
  career: "Career mapping",
  admission: "Admission service",
  post: "Post enrollment",
};

const STATUS_LABELS = {
  counselling: "Counselling",
  profile: "Profile building",
  profilebuilding: "Profile building",
  psychometric: "Psychometric test",
  countries: "Countries",
  courses: "Courses",
  universities: "Universities",
  test: "Test preparation",
  lor: "LORs, essays and SOPs",
  scholarship: "Scholarship",
  education: "Education loan",
  visa: "Visa, travel and forex",
  accommodation: "Accommodation",
};

// These pages live under a section that is not in the URL.
const MISSING_PARENT = {
  "view-resource-file": { label: "Resources", href: "/dashboard/resources" },
  scoretable: { label: "Tests", href: "/dashboard/mocktest" },
};

function labelFor(part) {
  if (LABELS[part]) return LABELS[part];
  return part
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function isOpaqueId(part) {
  if (LABELS[part]) return false;
  if (/^\d+$/.test(part)) return true;
  if (/^[a-f0-9]{24}$/i.test(part)) return true;
  if (/^[0-9a-f-]{32,}$/i.test(part)) return true;
  return false;
}

export function buildDashboardCrumbs(pathname, search = "") {
  const parts = String(pathname || "")
    .split("/")
    .filter(Boolean);
  const segments = parts[0] === "dashboard" ? parts.slice(1) : parts;
  const crumbs = [{ label: "Dashboard", href: "/dashboard/home" }];

  if (segments.length === 0 || (segments.length === 1 && segments[0] === "home")) {
    return crumbs;
  }

  let href = "/dashboard";
  segments.forEach((part) => {
    href += `/${part}`;
    if (isOpaqueId(part)) return;

    const parent = MISSING_PARENT[part];
    const alreadyThere = crumbs.some((crumb) => crumb.href === parent?.href);
    if (parent && !alreadyThere) crumbs.push(parent);

    crumbs.push({ label: labelFor(part), href });
  });

  if (segments[0] === "studyabroad") {
    const params = new URLSearchParams(
      String(search).startsWith("?") ? search.slice(1) : search,
    );
    const category = params.get("category");
    const status = params.get("status");

    if (category) {
      crumbs.push({
        label: CATEGORY_LABELS[category] || labelFor(category),
        href: `/dashboard/studyabroad?category=${encodeURIComponent(category)}`,
      });
    }
    if (status) {
      const query = new URLSearchParams();
      if (category) query.set("category", category);
      query.set("status", status);
      crumbs.push({
        label: STATUS_LABELS[status] || labelFor(status),
        href: `/dashboard/studyabroad?${query.toString()}`,
      });
    }
  }

  return crumbs;
}

const DashboardBreadcrumbs = () => {
  const location = useLocation();
  const crumbs = buildDashboardCrumbs(location.pathname, location.search);
  const last = crumbs.length - 1;

  return (
    <Breadcrumbs
      aria-label="Breadcrumb"
      maxItems={4}
      separator={<NavigateNextIcon sx={{ fontSize: 16, color: "#C5D0D6" }} />}
      sx={{
        "& .MuiBreadcrumbs-ol": { flexWrap: "nowrap" },
        "& .MuiBreadcrumbs-separator": { mx: 0.35 },
        "& .MuiBreadcrumbs-li": { minWidth: 0 },
      }}
    >
      {crumbs.map((crumb, index) => {
        const current = index === last;
        if (current) {
          return (
            <Typography
              key={`${crumb.href}-${crumb.label}`}
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#1C2B33",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: { xs: 140, md: 280 },
              }}
            >
              {crumb.label}
            </Typography>
          );
        }

        return (
          <Link
            key={`${crumb.href}-${crumb.label}`}
            to={crumb.href}
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#5C6B73",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            {crumb.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default DashboardBreadcrumbs;
