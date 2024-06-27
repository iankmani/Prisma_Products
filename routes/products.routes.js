import { Router } from 'express';
import { PrismaClient } from '@prisma/client'
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
    try{
        const products = await prisma.products.findMany()
        res.status(200).json(products)
    }catch(e){
        res.status(500).json({success: false, message: e.message})

    }
    // res.send("getting all the products");
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
                    id: true,
                    productThumbnail: true,
                    productTitle: true,
                    productDescription: true,
                    productCost: true
                }
        })
        res.status(201).json( {success: true, data: products});
    }
    catch(e){
        res.status(500).json({ success: false, message: "FAILURE!!!!"});
    }
})

router.get("/:id", async (req, res) => {
    try{
        const products = await prisma.products.findFirst({
            where: {id: req.params.id}
        })
            res.status(200).json(products)
    }catch(e){
        res.status(500).json({success: false, message: e.message})
    }
    // res.send("getting a single product");
})

router.patch("/:id", async (req, res) => {
    try{
        const updatedproducts = await prisma.products.update({
            where: {id: req.params.id},
            data:{productDescription: "it is cheaper and sweeter"}
    })
    res.status(201).json(updatedproducts) 
        //comfirm when there is internet connection
    }catch(e){
        res.status(500).json({success: false, message: e.message})
    }
    // res.send("updating a product");
})

router.delete("/:id", async (req, res) => {
    try{
        const products = await prisma.products.delete({
            where: {id: req.params.id}
        })
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({success: false, message: e.message})
    }
    // res.send("deleting a product");
})

export default router;
