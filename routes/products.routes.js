import { Router } from 'express';
import { PrismaClient } from '@prisma/client'
const router = Router();
const prisma = new PrismaClient();

router.get("/", (req, res) => {
    res.send("getting all the products");
})

router.post("/", async (req, res) => {
    try{
        const {productThumbnail, productTitle, productDescription, productCost, onOffer} = req.body;
        const products = await prisma.products.create ({
            data: {
                productThumbnail: productThumbnail,
                productTitle: productTitle,
                productDescription: productDescription,
                productCost: productCost,
                onOffer: onOffer
                },
                select: {
                    productThumbnail: true,
                    productTitle: true,
                    productDescription: true,
                    productCost: true
                }
        })
        res.status(201).json(products);

    }
    catch(e){
        res.status(500).json({ success: false, message: e.message});
    }
    // res.send("getting a single product");
})

router.get("/:id", (req, res) => {
    res.send("getting a single product");
})

router.patch("/:id", (req, res) => {
    res.send("updating a product");
})

router.delete("/:id", (req, res) => {
    res.send("deleting a product");
})

export default router;
