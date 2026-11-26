// @ts-nocheck
import * as React from "react";
import { Slider, IconButton, Box, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Replay10Icon from "@mui/icons-material/Replay10";
import Forward10Icon from "@mui/icons-material/Forward10";
import { Icon } from "@iconify/react";

function AudioPlayer({ src }) {
  const [play, setPlay] = React.useState(false);
  const [volume, setVolume] = React.useState(100);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const audioRef = React.useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    setPlay(!audio.paused);
  };

  const handleVolumeChange = (event, newValue) => {
    audioRef.current.volume = newValue / 100;
    setVolume(newValue);
  };

  const handleTimeChange = (event, newValue) => {
    audioRef.current.currentTime = newValue;
    setCurrentTime(newValue);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px 20px",
        backgroundColor: "#effdff",
        display: "flex",

        flexDirection: "row"
      }}
    >
      <Icon icon="mdi:audio-book" style={{ fontSize: "90px", color: "#000" }} />

      <Box
        sx={{
          width: "100%",
          padding: "0 30px",

          display: "flex",
          flexDirection: "column"
        }}
      >
        <audio
          ref={audioRef}
          src={src}
          onLoadedData={handleLoadedData}
          onTimeUpdate={handleTimeUpdate}
        />
        <Box>
          <Slider
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleTimeChange}
            sx={{ color: "#00999E", width: "100%" }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">{formatTime(currentTime)}</Typography>

          <Typography variant="body2">{formatTime(duration)}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", height: "20px" }}>
          <IconButton
            onClick={() =>
              (audioRef.current.currentTime = Math.max(0, currentTime - 10))
            }
          >
            <Replay10Icon />
          </IconButton>
          <IconButton onClick={togglePlayPause}>
            {play ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton
            onClick={() =>
              (audioRef.current.currentTime = Math.min(
                duration,
                currentTime + 10
              ))
            }
          >
            <Forward10Icon />
          </IconButton>

          <IconButton>
            <VolumeUpIcon />
          </IconButton>
          <Slider
            min={0}
            max={100}
            value={volume}
            onChange={handleVolumeChange}
            sx={{ color: "#00999E", width: 100 }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AudioPlayer;
