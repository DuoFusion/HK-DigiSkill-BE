import { apiResponse } from "../../common";
import { legalityModel } from "../../database";
import { countData, createData, getDataWithSorting, getFirstMatch, reqInfo, responseMessage, updateData } from "../../helper";
import { addLegalitySchema, editLegalitySchema, getLegalitySchema } from "../../validation";

const ObjectId = require('mongoose').Types.ObjectId;

export const add_legality = async (req, res) => {
    reqInfo(req)
    try {
        const { error, value } = addLegalitySchema.validate(req.body)
        if (error) return res.status(501).json(new apiResponse(501, error?.details[0]?.message, {}, {}))

        const existing = await getFirstMatch(legalityModel, { type: value.type, isDeleted: false }, {}, {})
        if (existing) return res.status(400).json(new apiResponse(400, `${value.type} already exists. Use edit endpoint to update.`, {}, {}))

        const response = await createData(legalityModel, value);
        if (!response) return res.status(404).json(new apiResponse(404, responseMessage?.addDataError, {}, {}))
        return res.status(200).json(new apiResponse(200, responseMessage?.addDataSuccess("legality"), response, {}))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

export const edit_legality_by_id = async (req, res) => {
    reqInfo(req)
    try {
        const { error, value } = editLegalitySchema.validate(req.body)
        if (error) return res.status(501).json(new apiResponse(501, error?.details[0]?.message, {}, {}))

        const response = await updateData(legalityModel, { _id: new ObjectId(value.legalityId), isDeleted: false }, value, {})
        if (!response) return res.status(404).json(new apiResponse(404, responseMessage?.updateDataError("legality"), {}, {}))
        return res.status(200).json(new apiResponse(200, responseMessage?.updateDataSuccess("legality"), response, {}))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

export const get_all_legality = async (req, res) => {
    reqInfo(req)
    try {
        const { page, limit, search, startDate, endDate, type } = req.query
        let criteria: any = { isDeleted: false }, options: any = { lean: true }

        if (search) {
            criteria.$or = [
                { content: { $regex: search, $options: 'si' } },
            ]
        }
        if (type) {
            criteria.type = type
        }
        if (startDate && endDate) {
            criteria.createdAt = { $gte: new Date(startDate), $lte: new Date(endDate) }
        }
        options.sort = { createdAt: -1 }
        if (page && limit) {
            options.skip = (parseInt(page) - 1) * parseInt(limit)
            options.limit = parseInt(limit)
        }

        const response = await getDataWithSorting(legalityModel, criteria, {}, options)
        const totalCount = await countData(legalityModel, criteria)
        const stateObj = {
            page: parseInt(page) || 1,
            limit: parseInt(limit) || totalCount,
            page_limit: Math.ceil(totalCount / (parseInt(limit) || totalCount)) || 1,
        }
        return res.status(200).json(new apiResponse(200, responseMessage.getDataSuccess('legality'), { legality_data: response, totalData: totalCount, state: stateObj }, {}))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

export const get_legality_by_id = async (req, res) => {
    reqInfo(req)
    try {
        const { error, value } = getLegalitySchema.validate(req.params)
        if (error) return res.status(501).json(new apiResponse(501, error?.details[0]?.message, {}, {}))
        const response = await getFirstMatch(legalityModel, { _id: new ObjectId(value.id), isDeleted: false }, {}, {})
        if (!response) return res.status(404).json(new apiResponse(404, responseMessage?.getDataNotFound("legality"), {}, {}))
        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess("legality"), response, {}))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

export const get_legality_by_type = async (req, res) => {
    reqInfo(req)
    try {
        const { type } = req.params
        if (!type) return res.status(400).json(new apiResponse(400, "Type is required", {}, {}))
        
        const response = await getFirstMatch(legalityModel, { type: type, isDeleted: false }, {}, {})
        if (!response) return res.status(404).json(new apiResponse(404, responseMessage?.getDataNotFound("legality"), {}, {}))
        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess("legality"), response, {}))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

