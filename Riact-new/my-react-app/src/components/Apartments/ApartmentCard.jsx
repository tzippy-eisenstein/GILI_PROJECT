
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export const ApartmentCard = (props) => {
    const {
        _id,
        name,
        idAdvertiser,
        idCategory,
        cityId,
        address,
        adition,
        cost,
        numOfBad,
        image,
      } = props;
    return (
        <Card style={{ backgroundColor: '#252926', boxShadow: 'none', margin: '0.5rem' }}>
            <CardMedia
                component="img"
                height="200"
                src={`http://localhost:3001/${props.image}`}
                alt={props.name}
                style={{ objectFit: 'cover', borderRadius: '8px 8px 0 0', width: '100%' }}
            />
            <CardContent style={{ padding: '1rem', textAlign: 'center' }}>
                <Typography variant="h7" color="text.secondary" style={{ color: '#AF8C53' }}>
                    {props.idCategory.name}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary" style={{ color: '#AF8C53' }}>
                    {props.cost}$ |  Location: {props.address} | {props.numOfBad} Bads
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary" style={{ color: '#AF8C53' }}>
                    Details of the owner apartment :
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ color: '#AF8C53' }}>
                {props.idAdvertiser.email} | {props.idAdvertiser.phone}
                </Typography>
            </CardContent>
        </Card>
    );
}
 export default ApartmentCard
    
