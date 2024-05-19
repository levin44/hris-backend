const { checkToken } = require("../middleware/auth");
const {createUser,getUserById,getUsers,updateUsers,deleteUser,login} = require("../controllers/user.controller");
const router = require("express").Router();

router.post("/",checkToken ,createUser);
router.get("/",checkToken ,getUsers);
router.get("/:id",checkToken ,getUserById);
router.patch("/",checkToken ,updateUsers);
router.delete("/",checkToken ,deleteUser);
router.post("/login",login);


module.exports = router;