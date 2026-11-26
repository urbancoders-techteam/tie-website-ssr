// @ts-nocheck
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";

const CalendarComponent = ({
  events,
  fetchData,
  onDateClick,
  onEventClick,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (dateInfo) => {
    const firstDateOfMonth = dateInfo.view.currentStart;
    const year = firstDateOfMonth.getFullYear();
    const month = firstDateOfMonth.getMonth() + 1;
    fetchData(year, month);
  };

  const handleDateClick = (dateInfo) => {
    setSelectedDate(dateInfo.dateStr);
    onDateClick(dateInfo);
  };

  return (
    <Box
      sx={{
        p: { lg: "20px", sm: "5px", xs: "0px" },
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { md: "row", xs: "column" },
        backgroundColor: "#effdff",
        borderRadius: "10px",
        border: "2px solid #00999E",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          width: { lg: "80%", md: "70%", sm: "95%", xs: "100%" },
          m: { sm: "0px 20px", xs: "0px" },
          padding: { sm: "20px", xs: "0px" },
          mb: { xs: "20px", md: "0px" },
          borderRadius: "20px",
          boxShadow: 3,
          border: "2px solid #c1c1c1",
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          eventClick={onEventClick}
          eventContent={renderEventContent}
          headerToolbar={{
            left: "title",
            right: "prev,next",
          }}
          height="auto"
          contentHeight="auto"
          dayCellClassNames={(date) =>
            date.dateStr === selectedDate ? "selected-date" : ""
          }
          datesSet={handleDateChange}
        />
      </Box>
      <Box
        sx={{
          bgcolor: "#fff",
          width: { lg: "20%", md: "30%", sm: "100%" },
          padding: "20px",
          height: "300px",
          borderRadius: "20px",
          boxShadow: 3,
          border: "2px solid #c1c1c1",
        }}
      >
        <Legend />
      </Box>
    </Box>
  );
};

function renderEventContent(eventInfo) {
  const eventTypeToColor = {
    class: "#FFC107",
    mock: "#E91E63",
    attended: "#2196F3",
    notAttended: "#9E9E9E",
  };

  const event = eventInfo.event;
  const color = eventTypeToColor[event.extendedProps.type];

  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
      <span
        style={{
          backgroundColor: color,
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          marginRight: "4px",
        }}
      ></span>
      <span
        style={{
          fontSize: "12px",
          color: "#000",
          display: { md: "block", xs: "none" },
        }}
      >
        {event.title}
      </span>
    </div>
  );
}

const Legend = () => (
  <Box
    sx={{
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      p: 2,
      borderRadius: "20px",
    }}
  >
    <Grid container spacing={2}>
      <LegendItem color="#FFC107" label="Class" />
      <LegendItem color="#E91E63" label="Mock Test" />
      <LegendItem color="#2196F3" label="Attended Class" />
      <LegendItem color="#9E9E9E" label="Not Attended" />
    </Grid>
  </Box>
);

const LegendItem = ({ color, label }) => (
  <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
    <Box
      sx={{
        border: "2px solid ",
        borderColor: color,
        borderRadius: "50%",
        height: "22px",
        padding: "2px",
        mr: "10px",
        width: "22px",
      }}
    >
      <Box
        sx={{
          bgcolor: color,
          width: "15px",
          height: "15px",
          mr: 2,
          borderRadius: "50%",
        }}
      />
    </Box>
    <Typography>{label}</Typography>
  </Grid>
);

const styles = `
  .fc-daygrid-day-frame {
    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: center;
    padding: 0px 0;
    backgroundColor: white;
    border: 1px solid #E0E0E0;
    border-radius: 10px;
    box-sizing: border-box;
  }
  .fc-day-today {
    background-color: #008080 !important;
    border-radius: 10px;
    color: white;
  }
  .fc-theme-standard td, .fc-theme-standard th {
    border: none;
  }
  .fc .fc-daygrid-day-number {
    font-weight: 500;
    font-size: 14px;
    margin: 0;
    line-height: 1.5;
  }
  .fc-day:hover {
    cursor: pointer;
    border-radius: 10px;
    background-color: #16e7fa;
  }
  .fc-event {
    background: transparent !important;
    border: none !important;
    margin: 0 !important;
  }
  .fc-prev-button, .fc-next-button {
    background-color: transparent !important;
    border: none !important;
    color: black !important;
    font-size: 18px;
  }
  .fc-prev-button:hover, .fc-next-button:hover {
    background-color: transparent !important;
    color: #00999E !important;
  }
  .fc-toolbar-title {
    font-weight: 500 !important; 
    font-size: 20px !important;  
    color: #333; 
  }
  .fc-theme-standard .fc-scrollgrid {
    border: 1px solid #ddd;
    border: 1px solid var(--fc-border-color, #c1c1c1);
    border-radius: 10px;
    padding-top:10px;
  }
  .selected-date {
    background-color: #00999E !important;
    color: white !important;
    border-radius: 10px;
  }
`;

const CalendarPage = ({ events, fetchData, onDateClick, onEventClick }) => (
  <>
    <style>{styles}</style>
    <CalendarComponent
      events={events}
      fetchData={fetchData}
      onDateClick={onDateClick}
      onEventClick={onEventClick}
    />
  </>
);

export default CalendarPage;
