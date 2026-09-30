/* Base URL */
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const navURL = process.env.NEXT_PUBLIC_NAV_URL;

/* S3 bucket URLs */
export const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL ?? "";
export const homePageImageUrl = process.env.NEXT_PUBLIC_HOME_PAGE_IMAGE_URL ?? "";
export const webIconsUrl = process.env.NEXT_PUBLIC_WEB_ICONS_URL ?? "";
export const studyAbroadImageUrl = process.env.NEXT_PUBLIC_STUDY_ABROAD_IMAGE_URL ?? "";
export const testPrepImageUrl = `${studyAbroadImageUrl}test-prep/`;
export const immersionImageUrl = process.env.NEXT_PUBLIC_IMMERSION_IMAGE_URL ?? "";
export const internationalRelationImageUrl = process.env.NEXT_PUBLIC_INTERNATIONAL_RELATION_IMAGE_URL ?? "";