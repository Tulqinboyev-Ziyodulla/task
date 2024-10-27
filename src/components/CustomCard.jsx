import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IMG_URL } from '../hook/useEnv';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';

export default function CustomCard({ item }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Card className='cursor-pointer' sx={{ maxWidth: 345 }}>
      <div onClick={() => navigate(`/movie/${item.id}`)} className="w-full h-[300px] relative">
        <CardMedia
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute duration-300 w-full ${isHovered ? "left-[-100%]" : "left-0"}`}
          component="img"
          alt={item.original_title}
          loading="lazy"
          sx={{ height: 300 }}
          image={`${IMG_URL}${item.poster_path}`}
        />
        <CardMedia
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute duration-300 w-full ${isHovered ? "right-0" : "right-[-100%]"}`}
          component="img"
          alt={item.original_title}
          loading="lazy"
          sx={{ height: 300 }}
          image={`${IMG_URL}${item.backdrop_path}`}
        />
      </div>
      <CardContent sx={{ padding: '16px 24px' }}>
        <Typography gutterBottom variant="h5" component="div">
          <strong className="text-[20px]">{item.original_title}</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <span className="line-clamp-3">{item.overview}</span>
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
          onClick={() => navigate(`/movie/${item.id}`)}
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
