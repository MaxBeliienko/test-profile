import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMain from "./CardMain";
import CardBack from "./CardBack";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  top: "99px",
  right: "20px",
  borderRadius: "50%",
}));

const CardContainer = styled(Box)(({ theme }) => ({
  perspective: "1000px",
  "& .card": {
    width: "100%",
    height: "100%",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    position: "relative",
  },
  "& .card.flip": {
    transform: "rotateY(180deg)",
  },
  "& .card-front, .card-back": {
    width: "100%",
    height: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
  },
  "& .card-back": {
    transform: "rotateY(180deg)",
  },
}));

const ProfileCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState("Leonardo Wilhelm DiCaprio");

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNameClick = (e) => {
    e.stopPropagation();
    setIsEditingName(true);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNameBlur = () => {
    setIsEditingName(false);
  };

  return (
    <CardContainer>
      <Card
        className={`card ${isFlipped ? "flip" : ""}`}
        sx={{
          minWidth: "406px",
          cursor: "pointer",
        }}
        onClick={handleFlip}
      >
        <CardContent
          sx={{
            position: "relative",
          }}
        >
          {isEditingName ? (
            <TextField
              variant="outlined"
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              fullWidth
              autoFocus
              sx={{ marginBottom: "10px" }}
            />
          ) : (
            <Typography
              variant="h6"
              sx={{
                borderBottom: "2px solid blue",
                marginBottom: "10px",
                padding: "16px 14px",
              }}
              onClick={handleNameClick}
            >
              {name}
            </Typography>
          )}

          {isFlipped ? <CardMain /> : <CardBack />}
          <Box>
            <Typography variant="body2" color="textSecondary">
              Personal QR code
            </Typography>
          </Box>
          <StyledIconButton>
            <MoreVertIcon />
          </StyledIconButton>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default ProfileCard;
