import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

const prod = [
    {
        "id": 1,
        "name": "Achi Masala",
        "category": [1],
        "offer": null,
        "stockCount": 5,
        "price": 100,
        "image": "https://5.imimg.com/data5/EF/CN/CS/GLADMIN-82212497/chilli-500x500.png"
    },
    {
        "id": 2,
        "name": "Lion Biryani Rice",
        "category": [2],
        "offer": 1,
        "stockCount": 5,
        "price": 100,
        "image": "https://5.imimg.com/data5/EF/CN/CS/GLADMIN-82212497/chilli-500x500.png"
    }
]

// const Products = () => {
//     return (
//         <main>
//             <Grid container justify="center" spacing={4} >
//                 {
//                     prod.map(product) => ( < Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> <Product product={product} /> <Grid />))
//                 }
//             </Grid>
//         </main>
//     )
// }

// export default Products



const Products = () => {
    return (
        <div>
            <Grid container justify="center" spacing={4}>
                {prod.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );

}

export default Products

