import Joi from "joi";

export const addWorkshopSchema = Joi.object().keys({
    image: Joi.string().allow('', null).optional(),
    title: Joi.string().required(),
    subTitle: Joi.string().allow('', null).optional(),
    about: Joi.string().allow('', null).optional(),
    pdfAttach: Joi.string().allow('', null).optional(),
    workshopCurriculum: Joi.array().items(Joi.string()).optional(),
    workshopTestimonials: Joi.array().items(Joi.string()).optional(),
    workshopFAQ: Joi.array().items(Joi.string()).optional(),
    price: Joi.number().default(0),
    mrpPrice: Joi.number().default(0),
    validFor: Joi.string().allow('', null).optional(),
    couponCode: Joi.string().allow('', null).optional(),
    language: Joi.string().allow('', null).optional(),
    duration: Joi.string().allow('', null).optional(),
})

export const editWorkshopSchema = Joi.object().keys({
    workshopId: Joi.string().required(),
    image: Joi.string().allow('', null).optional(),
    title: Joi.string().optional(),
    subTitle: Joi.string().allow('', null).optional(),
    about: Joi.string().allow('', null).optional(),
    pdfAttach: Joi.string().allow('', null).optional(),
    workshopCurriculum: Joi.array().items(Joi.string()).optional(),
    workshopTestimonials: Joi.array().items(Joi.string()).optional(),
    workshopFAQ: Joi.array().items(Joi.string()).optional(),
    price: Joi.number().optional(),
    mrpPrice: Joi.number().optional(),
    validFor: Joi.string().allow('', null).optional(),
    couponCode: Joi.string().allow('', null).optional(),
    language: Joi.string().allow('', null).optional(),
    duration: Joi.string().allow('', null).optional(),
})

export const deleteWorkshopSchema = Joi.object().keys({
    id: Joi.string().required(),
})

export const getWorkshopSchema = Joi.object().keys({
    id: Joi.string().required(),
})

export const purchaseWorkshopSchema = Joi.object().keys({
    workshop_id: Joi.string().required(),
    amount: Joi.number().optional(),
    payment_id: Joi.string().allow('', null).optional(),
    payment_method: Joi.string().allow('', null).optional(),
    receipt_number: Joi.string().allow('', null).optional(),
    discount_amount: Joi.number().default(0),
    final_amount: Joi.number().optional(),
})

