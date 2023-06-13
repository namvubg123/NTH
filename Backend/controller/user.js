const User = require("../model/user");

const userController = {
    //get list User
    getAllUsers: async(req,res) =>{
        try{
            const user = await User.find();
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //Delete user
    deleteUser: async(req,res) =>{
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted')
        }catch(err){
            res.status(500).json(err);
        }
    }
}
module.exports = userController;