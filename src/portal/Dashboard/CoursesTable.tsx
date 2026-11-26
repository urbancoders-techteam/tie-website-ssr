// @ts-nocheck
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";
import { useCallback } from "react";

const CoursesTable = ({ sendDataToParent, courseRows, setCourseRows }) => {
  const handleInputChange = useCallback(
    (index, event) => {
      const { name, value, type } = event.target;
      setCourseRows((prevRows) => {
        const newRows = [...prevRows];
        if (type === "radio") {
          const isFullCourse = name.includes("option1");
          newRows[index] = {
            ...newRows[index],
            option1: isFullCourse,
            option2: !isFullCourse,
          };
        } else {
          newRows[index] = { ...newRows[index], [name]: value };
        }

        // Format the data to be sent to the parent component
        const formattedCourses = newRows
          .filter((row) => (row.option1 || row.option2) && row.amount)
          .map((row) => ({
            courseName: row.name,
            FullCourse: row.option1,
            MockTest: row.option2,
            Fee: parseInt(row.amount, 10), // Ensure fee is a number
          }));

        // Send formatted courses data to parent component
        sendDataToParent(formattedCourses);
        return newRows;
      });
    },
    [sendDataToParent, setCourseRows]
  );

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table aria-label="Courses Table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "18px" }}>Courses</TableCell>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                BASICS
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                ULTIMATE
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                FEE (in Rs)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courseRows?.map(({ name, option1, option2, amount }, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontSize: "16px" }} component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="center">
                  <FormControlLabel
                    control={
                      <Radio
                        checked={option1}
                        onChange={(e) => handleInputChange(index, e)}
                        name={`option1-${index}`}
                      />
                    }
                    label=""
                  />
                </TableCell>
                <TableCell align="center">
                  <FormControlLabel
                    control={
                      <Radio
                        checked={option2}
                        onChange={(e) => handleInputChange(index, e)}
                        name={`option2-${index}`}
                      />
                    }
                    label=""
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    variant="outlined"
                    size="small"
                    name="amount"
                    value={amount}
                    onChange={(e) => handleInputChange(index, e)}
                    type="number"
                    placeholder="Enter amount"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CoursesTable;
