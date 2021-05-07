import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product }) => {
    const classess = useStyles()
    console.log(product)
    return (
        <div>

            <Card className={classess.card}>
                <CardMedia className={classess.media} image={product.image} title={product.name} />
                <CardContent>
                    <div className={classess.cardContnet} >
                        <Typography variant='h5' gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant='h5'>
                            {product.price} Rs
                        </Typography>
                        <Typography variant='h5'>
                            {product.offer && 'In Offer'}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions disableSpacing className={classess.cardActions}>
                    <IconButton aria-label="Add To Cart" >
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>

        </div>
    )
};


export default Product
