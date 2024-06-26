import { config } from 'dotenv'
import express from 'express'
import productsRouter from './routes/products.routes.js'
config();
const app = express();
app.use(express.json());
app.use("/products", productsRouter)
app.listen(3000, () =>{
    console.log('Server is running on port 3000');
})

// const createProducts = async () => {
//     const products = await prisma.products.create ({
//         data: {
//             productThumbnail: "http://dummyimage.com/240x100.png/cc0000/ffffff",
//             productTitle: "Coconut - Shredded, Unsweet",
//             productDescription: "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus",
//             productCost: 3.17 ,
//             onOffer: true

//             }
//     })
//     console.log(products)
// }
// createProducts();