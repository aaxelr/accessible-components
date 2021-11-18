import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, body }) {
  return (
    <Card sx={{ maxWidth: 800, margin: '1rem' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://picsum.photos/600/200"
        alt="lorem picsum"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}