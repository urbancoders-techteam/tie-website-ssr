// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./slices/pageSlices";
import documentReducer from "./slices/documentSlices";
import psychometricReducer from "./slices/psycometricSlices";
import counsellorListReducer from "./slices/table";
import careerMapReducer from "./slices/careerMapSlice";
import enrollmentSupportReducer from "./slices/postEnrollmentSupport";
import studyAbroadReducer from "./slices/studyAbroadSlice";
import eventReducer from "./slices/eventSlice";
import testimonialReducer from "./slices/testimonialSlice";
import testprepReducer from "./slices/testPrepSlice";
import orderReducer from "./slices/orderSlice";
import admissionServiceReducer from "./slices/admissionServiceSlice";
import resourcesServiceReducer from "./slices/resourceSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    documents: documentReducer,
    counsellorList: counsellorListReducer,
    psychometric: psychometricReducer,
    careerMap: careerMapReducer,
    enrollmentSupport: enrollmentSupportReducer,
    studyAbroad: studyAbroadReducer,
    events: eventReducer,
    testimonial: testimonialReducer,
    testPrep: testprepReducer,
    order: orderReducer,
    admissionService: admissionServiceReducer,
    resources: resourcesServiceReducer,
  },
});
