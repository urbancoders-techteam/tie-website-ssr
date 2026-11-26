// @ts-nocheck
import React from 'react';
import { Card, CardMedia, Box, IconButton, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

// File type to icon mapping
const fileTypeIcons = {
    "application/pdf": "vscode-icons:file-type-pdf2",
    "application/msword": "vscode-icons:file-type-word2",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "vscode-icons:file-type-word2",
    "application/vnd.ms-excel": "vscode-icons:file-type-excel2",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "vscode-icons:file-type-excel2",
    "text/plain": "vscode-icons:file-type-text",
    "application/zip": "vscode-icons:file-type-zip",
    "application/x-rar-compressed": "vscode-icons:file-type-zip",
    default: "vscode-icons:file-type-docs",
  };

const CustomPreviewCard = ({ doc, index, onRemove }) => {
  const isImage = doc.type?.startsWith('image/') || 
                  doc.url.match(/\.(jpeg|jpg|png|gif|bmp|webp)$/i) !== null;
  const fileIcon = fileTypeIcons[doc.type] || fileTypeIcons.default;

  return (
    <Card sx={{ maxWidth: 150, position: 'relative' }}>
      {isImage ? (
        <CardMedia
          component="img"
          height="100"
          image={doc.url}
          alt={`Document ${index + 1}`}
          sx={{ objectFit: 'cover' }}
        />
      ) : (
        <Box
          sx={{
            height: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            p: 1,
          }}
        >
          <Icon icon={fileIcon} width={40} height={40} />
        </Box>
      )}
     {onRemove && <IconButton
        size="small"
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: 'rgba(255,255,255,0.7)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.9)',
          },
        }}
        onClick={() => onRemove(index)}
      > 
        <Icon icon="mdi:close" width={16} />
      </IconButton>}
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          px: 1,
          textAlign: 'center',
        }}
      >
        {doc.name}
      </Typography>
    </Card>
  );
};

export default CustomPreviewCard;
