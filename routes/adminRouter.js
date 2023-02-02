const adminRouter = require("express").Router();
const admin = require('../controllers/admin');


// adminRouter.post('/signup',admin.adminSignup,()=>{
// })

/**
 * @swagger
 * /api/v1/admin/login:
 *   get:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs for Admin Login.
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
adminRouter.get('/login', admin.adminLogin, () => {
});

/**
 * @swagger
 * /api/v1/admin/edit_User/Profile:
 *   post:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs for edit the user private profile.
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
adminRouter.post('/edit_User/Profile', admin.editUserProfile, () => {
})


/**
 * @swagger
 * /api/v1/admin/view:
 *   get:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs for view the all document.
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
adminRouter.get('/Views', admin.ViewsDocuments, () => {
});

/**
 * @swagger
 * /api/v1/admin//edit/static:
 *   post:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs for edit the static coontaint.
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
adminRouter.post('/edit/static', admin.StaticContaint, () => {
});

/**
 * @swagger
 * /api/v1/admin/new/product:
 *   post:
 *     tags:
 *       - ADMIN PRODUCT
 *     description: Creating Docs for Add the new product.
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
adminRouter.post('/new/product', admin.add_Product, () => {
});

/**
 * @swagger
 * /api/v1/admin/delete/product:
 *   delete:
 *     tags:
 *       - ADMIN PRODUCT
 *     description: Creating Docs for remove the product.
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
adminRouter.post('/delete/product', admin.remove_Product, () => {
});

/**
 * @swagger
 * /api/v1/admin/get/product:
 *   get:
 *     tags:
 *       - ADMIN
 *     description: Creating Docs to get the perticulore product.
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
adminRouter.get('/get/product', admin.get_Product, () => {
});

/**
 * @swagger
 * /api/v1/admin/update/product:
 *   patch:
 *     tags:
 *       - ADMIN PRODUCT
 *     description: Creating Docs for update the product.
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
adminRouter.post('/update/product', admin.update_product, () => {
});

/**
 * @swagger
 * /api/v1/admin//add/hospital:
 *   post:
 *     tags:
 *       - ADMIN HOSPITAL
 *     description: Creating Docs for add the hospital for the COVID.
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
adminRouter.post('/add/hospital', admin.add_hospital, () => {
});


module.exports = adminRouter;