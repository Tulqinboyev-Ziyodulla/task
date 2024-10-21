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

export default function CustomCard({item}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={item.original_title}
        height="140"
        image={item.backdrop_path ? `${IMG_URL}${item.backdrop_path}` : '/placeholder-image.jpg'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <strong className='text-[20px] '>{item.original_title}</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <p className='line-clamp-3'> {item.overview}  </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">
          <SaveAltIcon/>
        </Button>
        <Button size="large">
          <FavoriteBorderIcon/>
        </Button>
      </CardActions>
    </Card>
  );
}
