import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Divider, 
    Typography 
} from "@mui/material"
import { FC } from "react"

type CardProps ={
    image: string;
    name: string;
    status: string;
    species: string;
}
export const CardComponent: FC<CardProps> = ({image, name, species, status}) => {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia 
                component="img"
                height="194"
                image={image}
                alt="img"
            />
            <CardContent>
                <Typography sx={{mb: 1.5}} variant="h4">Name: {name}</Typography>
                <Divider />
                <Typography sx={{mt: 1.5}}>Especie: {species}</Typography>
                <Typography sx={{mt: 1.5}}>Estado: {status}</Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}