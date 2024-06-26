import styles from "./Card.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function Cards({data}:{data:any}) {
  
  return (
    <Link to={`/product-details/${data?.id}`}>
    <Card sx={{
       width: 250, 
       minHeight: 350, 
       transition: 'padding 0.3s',
       '&:hover': {
         padding: '5px',
       }, 
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data?.thumbnail}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {data?.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </Link>
    
  );
}

export default Cards;
