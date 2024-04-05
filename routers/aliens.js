const express = require('express');
const router =express.Router();

const Alien = require('../models/alien');

//get all 
router.get('/',async(req,res)=>{
    try {
        const aliens =await Alien.find();
        res.json(aliens);
        
    } catch (error) {
        console.log(error);
        
    }
})
// insert data
router.post('/', async(req, res)=>{
    const alien = new Alien({
        name : req.body.name,
        tech : req.body.tech,
        sub : req.body.sub
    });
    try {
        
        const a1 = await alien.save();
        console.log(a1);
        res.json(a1);
        
    } catch (error) {
        console.log(error);
        
    }
})

//find by id
router.get('/:id', async (req, res) => {
    try {
        const aliens =await Alien.findById(req.params.id);
        res.json(aliens);
        
    } catch (error) {
        console.log(error);
        
    }

})

//update
router.patch('/:id', async (req, res) => {
    try {
        const alien =await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        const a1 = await alien.save();
        console.log(a1);
        res.json(a1);
        
    } catch (error) {
        
    }
});
//delete
router.delete('/:id', (req, res) => {
    Alien.findById(req.params.id)
        .then(alien => {
            if (!alien) {
                return res.status(404).json({ message: "Alien not found" });
            }

            return alien.remove();
        })
        .then(removedAlien => {
            res.json(removedAlien);
        })
        .catch(error => {
            console.error("Error deleting alien:", error.message);
            res.status(500).json({ message: "Internal server error" });
        });
});




module.exports = router;
