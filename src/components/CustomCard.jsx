import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IMG_URL } from '../hook/useAnv';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function CustomCard({ item }) {
  return (
    <Card sx={{
      maxWidth: 345,
      boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
      borderRadius: '16px',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      '&:hover': {
        boxShadow: '0px 10px 25px rgba(0,0,0,0.3)',
      },
    }}
    >
      <CardMedia
        sx={{
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          objectFit: 'cover',
          cursor: 'pointer',
          height: '250px'
        }}
        component="img"
        alt={item.original_title}
        height="200"
        image={item.backdrop_path ? `${IMG_URL}${item.backdrop_path}` : '/placeholder-image.jpg'}
      />
      <CardContent sx={{ padding: '16px 24px' }}>
        <Typography gutterBottom variant="h5" component="div">
          <strong className="text-[20px]">{item.original_title}</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p className="line-clamp-3">{item.overview}</p>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', padding: '8px 24px' }}>
        <Button
          size="large"
          sx={{
            color: 'red',
            '&:hover': {
              backgroundColor: 'rgba(245, 0, 87, 0.1)',
            },
          }}
        >
          <FavoriteBorderIcon />
        </Button>
        <Button
          size="large"
          sx={{
            color: 'blue',
            '&:hover': {
              backgroundColor: 'rgba(63, 81, 181, 0.1)',
            },
          }}
        >
          <SaveAltIcon />
        </Button>
        <Button
          size="large"
          sx={{
            color: 'blue',
            '&:hover': {
              backgroundColor: 'rgba(63, 81, 181, 0.1)',
            },
          }}
        >
          <MoreHorizIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
