const userRouter = require("express").Router();
const user = require("../controllers/user");
const auth = require("../auth/auth");


const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },

  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});
const upload = multer({ storage: storage });

const videoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "videos");
  },
  // destination: 'videos',
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});
const videoUpload = multer({
  storage: videoStorage,
  limits: {
    fileSize: 10000000, // 10000000 Bytes = 10 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) {
      return cb(new Error("Please upload a video"));
    }
    cb(undefined, true);
  },
});
/**
 * @swagger
 * /api/v1/user/signup:
 *   post:
 *     tags:
 *       - USER
 *     description: Creating Docs for User Login.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input: postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Signup Successfully .
 *       201:
 *         description: EMAIL ALLREADY EXITS.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/signup", user.signup, () => { });
/**
 * @swagger
 * /api/v1/user/verify:
 *   post:
 *     tags:
 *       - USER
 *     description: Creating Docs for User verification.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input: postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: verify Successfully .
 *       201:
 *         description: EMAIL ALLREADY VERIFY.
 *       202:
 *         description: OTP time out.
 *       203:
 *         description: otp not match.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/verify", user.otpVerifivation, () => { });
/**
 * @swagger
 * /api/v1/user/login:
 *   post:
 *     tags:
 *       - USER
 *     description: Creating Docs for User login.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input: postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Login Successfully, Token is genrated.
 *       201:
 *         description: EMAIL AND PASSWORD IS NOT MATCH.
 *       500:
 *         description: Internal server error.
 */
userRouter.get("/login", user.login, () => { });

/**
 * @swagger
 * /api/v1/user/Views/profile:
 *   get:
 *     tags:
 *       - USER
 *     description: Creating Docs for User profile.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input: Token
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: user Detale.
 *       404:
 *         description: user not found.
 *       500:
 *         description: Internal server error.
 */
userRouter.get("/Views/profile", auth.verifyToken, user.ViewsProfile, () => { });

/**
 * @swagger
 * /api/v1/user/forgate:
 *   post:
 *     tags:
 *       - USER
 *     description: Creating Docs for forgate password.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input: email
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP sent to the mail.
 *       404:
 *         description: Email not found.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/forgate", user.forgatePassword, () => { });

/**
 * @swagger
 * /api/v1/user/reset:
 *   patch:
 *     tags:
 *       - USER
 *     description: Creating Docs for forgate password.
 *     produces:
 *       - application/json
 *     parameters:
 *       - password: postman
 *       - Cpassword: postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Password Updated.
 *       404:
 *         description: password and Cpassword not match.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/reset", user.resetPassword, () => { });
/**
 * @swagger
 * /api/v1/user/token:
 *   get:
 *     tags:
 *       - USER
 *     description: Creating Docs for verify Token.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: token verify.
 *       404:
 *         description: invalid token.
 *       500:
 *         description: Internal server error.
 */
userRouter.get("/token", auth.verifyToken, () => { });
/**
 * @swagger
 * /api/v1/user/resend:
 *   post:
 *     tags:
 *       - USER
 *     description: Creating Docs for resend OTP.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/resend", user.resend, () => { });
/**
 * @swagger
 * /api/v1/user/page:
 *   get:
 *     tags:
 *       - USER PRODUCT
 *     description: Creating Docs for pegination.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.get("/page", user.pegination, () => { });
/**
 * @swagger
 * /api/v1/user/QRcode:
 *   post:
 *     tags:
 *       - USER
 *     description: Creating Docs for QRcode genration.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/QRcode", user.QRcode, () => { });
/**
 * @swagger
 * /api/v1/user/profile/edit:
 *   patch:
 *     tags:
 *       - USER
 *     description: Creating Docs for profile edit.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/profile/edit", user.editProfile, () => { });
/**
 * @swagger
 * /api/v1/user/filter:
 *   get:
 *     tags:
 *       - USER PRODUCT
 *     description: Creating Docs for filter product.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.get("/filter", user.filter, () => { });
/**
 * @swagger
 * /api/v1/user/img:
 *   post:
 *     tags:
 *       - USER
 *     description: Creating Docs for update the profile photo.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.post(
  "/img",
  upload.array("upload_pic"),
  user.user_profile,
  (req, res) => {
    console.log(req.file);
  },
  (error, req, res1) => {
    res1.status(400).send({ error: error.message });
  }
);
/**
 * @swagger
 * /api/v1/user/video:
 *   post:
 *     tags:
 *       - USER PRODUCT
 *     description: Creating Docs for uplod the product video.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.post(
  "/video",
  videoUpload.array("upload_video"),
  user.user_video,
  (req, res) => {
    console.log();
    req.file;
  },
  (error, req, res1) => {
    res1.status(400).send({ error: error.message });
  }
);

/**
 * @swagger
 * /api/v1/user/new/product:
 *   post:
 *     tags:
 *       - USER PRODUCT
 *     description: Creating Docs for add the nre product.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/new/product", user.add_Product, () => { });

/**
 * @swagger
 * /api/v1/user/get/product:
 *   get:
 *     tags:
 *       - USER PRODUCT
 *     description: Creating Docs for view product.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.get("/get/product", user.get_Product, () => { });

/**
 * @swagger
 * /api/v1/user/filter:
 *   patch:
 *     tags:
 *       - USER PRODUCT
 *     description: Creating Docs for Update th eproduct.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/update/product", user.update_product, () => { });

/**
 * @swagger
 * /api/v1/user/search:
 *   get:
 *     tags:
 *       - USER PRODUCT
 *     description: Creating Docs for search the product.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.get("/product/search", user.Search_Product, () => { });
userRouter.get("/aproduct/search", user.Aggrigation_Search_Product, () => { });

/**
 * @swagger
 * /api/v1/user/product/permision:
 *   get:
 *     tags:
 *       - USER PRODUCT
 *     description: Creating Docs for to get the permision to add the add the product on the accout.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/Product/permission", user.get_product_permission, () => { });

/**
 * @swagger
 * /api/v1/user/addProduct:
 *   post:
 *     tags:
 *       - USER PRODUCT
 *     description: Creating Docs for tp add the product.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/add/product", user.add_Product, () => { });

/**
 * @swagger
 * /api/v1/user/aggregation:
 *   get:
 *     tags:
 *       - USER PRODUCT
 *     description: Creating Docs for aggrigation filter.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.get("/aggrigation", user.Aggrigation, () => { });

/**
 * @swagger
 * /api/v1/user/populate:
 *   get:
 *     tags:
 *       - USER PRODUCT
 *     description: Creating Docs for view the product delate using user id.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.get("/populate", user.populate, () => { });

/**
 * @swagger
 * /api/v1/user/add/store:
 *   post:
 *     tags:
 *       - USER STORE
 *     description: Creating Docs for adding the store.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/add/store", user.Add_Store, () => { });

/**
 * @swagger
 * /api/v1/user/search/store:
 *   get:
 *     tags:
 *       - USER STORE
 *     description: Creating Docs for searchin the store.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.get("/search/store", user.Search_Store, () => { });

/**
 * @swagger
 * /api/v1/user/order:
 *   post:
 *     tags:
 *       - USER PRODUCT ORDER
 *     description: Creating Docs to order the product.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.get("/order", user.Order, () => { });

/**
 * @swagger
 * /api/v1/user/book/vaccine:
 *   post:
 *     tags:
 *       - COVID
 *     description: Creating Docs for booking the vaccine.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/book/vaccine", user.Book_slot, () => { });

/**
 * @swagger
 * /api/v1/user/chat/send:
 *   post:
 *     tags:
 *       - USER CHAT
 *     description: Creating Docs for sending the chat.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.post("/chat/send", user.SendChat, () => { });

/**
 * @swagger
 * /api/v1/user/chat/receive:
 *   get:
 *     tags:
 *       - USER CHAT
 *     description: Creating Docs for receive the chat.
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.get("/chat/receive", user.receiveChat, () => { });


/**
 * @swagger
 * /api/v1/user/chat/test:
 *   get:
 *     tags:
 *       - TEST
 *     description: Creating Docs for short wat to provide the message to the user like success, not found, etc....
 *     produces:
 *       - application/json
 *     parameters:
 *       - input : postman
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP resend to the mail.
 *       404:
 *         description: invalid otp.
 *       500:
 *         description: Internal server error.
 */
userRouter.get("/test", user.test, () => { });

userRouter.post("/search/populate", user.populate_Search, () => { });

userRouter.post("/add/user", user.add_user, () => { });

userRouter.post("/add/project", user.add_project, () => { });

userRouter.post("/add/flat", user.add_flat, () => { });
userRouter.get("/getData", user.Search_populate, () => { });




module.exports = userRouter;
