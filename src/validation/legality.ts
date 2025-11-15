import Joi from "joi";

export const addLegalitySchema = Joi.object().keys({
    type: Joi.string().valid('TermsCondition', 'PrivacyPolicy', 'RefundPolicy').required(),
    content: Joi.string().required(),
})

export const editLegalitySchema = Joi.object().keys({
    legalityId: Joi.string().required(),
    type: Joi.string().valid('TermsCondition', 'PrivacyPolicy', 'RefundPolicy').optional(),
    content: Joi.string().required(),
})

export const getLegalitySchema = Joi.object().keys({
    id: Joi.string().required(),
})

