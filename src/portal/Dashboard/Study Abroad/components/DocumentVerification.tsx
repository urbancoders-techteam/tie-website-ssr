// @ts-nocheck
import { Box, Typography, Paper, CircularProgress } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDocumentsAsync,
  getUploadedDocumentsAsync,
  uploadDocumentAsync,
} from "@/portal/redux/services/documentServices";
import MainHeader from "@/portal/Component/content-component/MainHeader";
import FileInput from "./FileInput";

const DocumentVerification = () => {
  const dispatch = useDispatch();
  const {
    documents = {},
    uploadedDocuments = {},
    loading,
  } = useSelector((state) => state.documents);
  const [uploadingKey, setUploadingKey] = useState(null);

  useEffect(() => {
    dispatch(getDocumentsAsync());
    dispatch(getUploadedDocumentsAsync());
  }, [dispatch]);

  const documentLabels = {
    academicDocuments: {
      class10Marksheet: "Class 10 Mark Sheet & Certificate",
      class12Marksheet: "Class 12 Mark Sheet & Certificate",
      bachelorsSemesterWiseMarksheet: "Bachelor's Semester Wise Marksheet",
      bachelorsDegreeCertificate: "Bachelor’s Degree Certificate & Transcripts",
      mastersSemesterWiseMarksheet: "Masters's Semester Wise Marksheet",
      mastersDegreeCertificate: "Master’s Degree Certificate & Transcripts",
      backlogCertificate: "Backlog Certificate (if applicable)",
      schoolLeavingCertificate:
        "School Leaving Certificate / Migration Certificate",
    },
    standardisedTestScores: {
      ielts_toefl_pte_duolingo: "IELTS / TOEFL / PTE / Duolingo",
      graduateRecordExamination: "GRE (Graduate Record Examination)",
      graduateManagementAdmissionTest:
        "GMAT (Graduate Management Admission Test)",
      sat_Act: "SAT / ACT",
      lawSchoolAdmissionTest: "LSAT (Law School Admission Test)",
      medicalCollegeAdmissionTest: "MCAT (Medical College Admission Test)",
    },
    applicationDocuments: {
      statementOfPurpose: "Statement of Purpose (SOP)",
      lettersOfRecommendationOne: "Letters of Recommendation One(LORs)",
      lettersOfRecommendationTwo: "Letters of Recommendation Two(LORs)",
      lettersOfRecommendationThree: "Letters of Recommendation Three(LORs)",
      resume: "Resume / CV",
      essays: "Essays",
      portfolio: "Portfolio (if applicable)",
      researchProposal: "Research Proposal (for PhD applicants)",
    },
    identityDocuments: {
      passport: "Valid Passport",
      passportSizePhotograph: "Passport-size Photographs",
      birthCertificate: "Birth Certificate",
      policeClearanceCertificate: "Police Clearance Certificate (PCC)",
    },
    financialDocuments: {
      bankStatements: "Bank Statements (6-12 months)",
      loanApprovalLetter: "Loan Approval Letter",
      scholarshipLetter: "Scholarship Letter",
      incomeTaxReturnsOrForm16: "Income Tax Returns (ITR) or Form 16",
      sponsorshipLetter: "Sponsorship Letter (if applicable)",
    },
    additionalDocuments: {
      workExperienceCertificates:
        "Work Experience Certificates (if applicable)",
      internshipCertificates: "Internship Certificates",
      extracurricularAchievementCertificates:
        "Extracurricular & Achievement Certificates",
      languageProficiencyCertificate:
        "Language Proficiency Certificate (if required)",
      medicalCertificate: "Medical Certificate (if required)",
      affidavitOfFinancialSupport: "Affidavit of Financial Support",
    },
  };

  const handleFileUpload = async (category, docKey, file, fileName) => {
    setUploadingKey(`${category}-${docKey}`);
    try {
      const payload = {
        [category]: {
          [docKey]: {
            document: true,
            url: file,
            title: fileName,
          },
        },
      };
      await dispatch(uploadDocumentAsync(payload));
      // Only refetch after upload completes
      await dispatch(getUploadedDocumentsAsync());
    } catch (err) {
      console.error("Upload failed", err);
    } finally {
      setUploadingKey(null);
    }
  };

  // Filter out categories where all fields are falsy
  const filteredCategories = Object.entries(documents).filter(([_, fields]) =>
    Object.values(fields).some(Boolean)
  );

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ mt: 1, textAlign: "center" }}>
        <MainHeader
          content={"~Document Verification~"}
          fontSize={"26px"}
          fontWeight={"bold"}
          textAlign={"center"}
        />
      </Box>
      {filteredCategories?.length > 0 ? (
        <Typography variant="subtitle1" sx={{ my: 1, textAlign: "center" }}>
          Upload the required documents for verification.
        </Typography>
      ) : (
        ""
      )}

      {loading.uploadedDocuments || loading.documents ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <CircularProgress size={50} />
        </Box>
      ) : (
        <>
          {filteredCategories?.length ? (
            filteredCategories?.map(([categoryKey, fields]) => (
              <Box key={categoryKey} sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, textTransform: "capitalize" }}
                >
                  {categoryKey.replace(/([A-Z])/g, " $1")}
                </Typography>

                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Grid container spacing={2}>
                    {Object.entries(fields).map(([docKey, docValue]) => {
                      if (!docValue) {
                        // eslint-disable-next-line array-callback-return
                        return;
                      }
                      const label =
                        documentLabels?.[categoryKey]?.[docKey] ||
                        docValue ||
                        "Other";
                      const fileName =
                        uploadedDocuments?.[categoryKey]?.[docKey]?.title ||
                        null;
                      const isUploading =
                        uploadingKey === `${categoryKey}-${docKey}`;
                      return (
                        <Grid item xs={12} sm={6} md={4} key={docKey}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 1,
                            }}
                          >
                            <FileInput
                              id={`${categoryKey}-${docKey}`}
                              label={label}
                              acceptFiles="application/pdf,image/*"
                              value={fileName}
                              onFileUpload={async (base64Url, fileName) => {
                                await handleFileUpload(
                                  categoryKey,
                                  docKey,
                                  base64Url,
                                  fileName
                                );
                              }}
                              disabled={isUploading}
                              loading={isUploading}
                            />
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Paper>
              </Box>
            ))
          ) : (
            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                my: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 400,
              }}
            >
              No documents have been assigned to you for verification yet..!
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default DocumentVerification;
