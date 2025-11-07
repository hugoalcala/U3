    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia'; 
    import batman from "../assets/batman.jpeg"


    function SimpleCard() {
    return (
        <Card sx={{ maxWidth: 345, border: '1px solid #ccc' }}> 
            <CardMedia
            component="img"
            height="140"
            image={batman} 
            alt="Foto del Card"
        />
        <CardContent>        
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25rem' }}>
            BATMAN
            </h3>
            <p style={{ margin: 0, color: '#555' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore numquam nulla odio aut molestias eaque natus, consequatur ipsa sunt repudiandae laborum pariatur minima dolorum autem, porro qui facilis maiores earum?
            </p>
            
        </CardContent>
        
        </Card>
    );
    }

    export default SimpleCard;