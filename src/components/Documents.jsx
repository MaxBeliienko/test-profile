import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const documentsData = [
  { id: 1, name: "Document 1", icon: "person" },
  { id: 2, name: "Document 2", icon: "description" },
  { id: 3, name: "Document 3", icon: "check_circle" },
  { id: 4, name: "Document 4", icon: "verified" },
  { id: 5, name: "Document 5", icon: "add_circle" },
  { id: 6, name: "Document 6", icon: "person" },
  { id: 7, name: "Document 7", icon: "description" },
  { id: 8, name: "Document 8", icon: "check_circle" },
  { id: 9, name: "Document 9", icon: "verified" },
  { id: 10, name: "Document 10", icon: "add_circle" },
  { id: 11, name: "Document 11", icon: "block" },
];

const DocumentCard = ({ document, onDownload, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = () => {
    onDownload(document.id);
    handleMenuClose();
  };

  const handleDelete = () => {
    onDelete(document.id);
    handleMenuClose();
  };

  return (
    <Card sx={{ minWidth: 160, margin: 1 }}>
      <CardContent
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "primary.main", marginBottom: 1 }}>
          <span className="material-icons">{document.icon}</span>
        </Avatar>
        <Typography variant="body1" gutterBottom>
          {document.name}
        </Typography>
        <IconButton
          sx={{ position: "absolute", top: 0, right: 0 }}
          onClick={handleMenuOpen}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleDownload}>Download Image</MenuItem>
          <MenuItem onClick={handleDelete}>Delete Document</MenuItem>
        </Menu>
      </CardContent>
    </Card>
  );
};

const Documents = () => {
  const [documents, setDocuments] = useState(documentsData);
  const [currentDesk, setCurrentDesk] = useState(0);

  const desks = [documentsData, documentsData, documentsData];

  const handleDownload = (id) => {
    console.log(`Downloading image for document ${id}`);
  };

  const handleDelete = (id) => {
    setDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== id));
  };

  const handleScroll = (direction) => {
    setCurrentDesk((prevDesk) => {
      if (direction === "left") {
        return prevDesk > 0 ? prevDesk - 1 : desks.length - 1;
      } else {
        return prevDesk < desks.length - 1 ? prevDesk + 1 : 0;
      }
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        padding: 2,
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: 2,
          borderBottom: "2px solid blue",
          padding: "16px 14px",
        }}
      >
        Documents
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100vh",
            flexWrap: "wrap",
            transition: "transform 0.5s",
            transform: `translateX(-${currentDesk * 100}%)`,
          }}
        >
          {desks.map((desk, deskIndex) => (
            <Box key={deskIndex} sx={{ display: "flex", minWidth: "100%" }}>
              {desk.map((document) => (
                <DocumentCard
                  key={document.id}
                  document={document}
                  onDownload={handleDownload}
                  onDelete={handleDelete}
                />
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <IconButton
        sx={{ position: "absolute", right: "100px", top: "30px" }}
        onClick={() => handleScroll("left")}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        sx={{ position: "absolute", right: "50px", top: "30px" }}
        onClick={() => handleScroll("right")}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Documents;
