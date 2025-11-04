import { aboutUsModel } from "../../database/models/about_us";
import { createData} from "../../helper/database_service";

export const add_about_us = async (req, res) => {
    try {
        const body = req.body;
        const response = await createData(aboutUsModel ,body);
        return res.status(200).json({ status: 200, message: "About Us added successfully", data: response });
    }
    catch (error) {
        return res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
    }
};


export const update_about_us = async (req, res) => {
    try {
        let { id } = req.params, body = req.body;
        const response = await aboutUsModel.findOneAndUpdate({_id: id}, body, { new: true, lean: true });  
        return res.status(200).json({ status: 200, message: "About Us updated successfully", data: response });
    }
    catch (error) {
        return res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
    }
};


export const get_about_us = async (req, res) => {
    try {
        const response = await aboutUsModel.find({}); 
        return res.status(200).json({ status: 200, message: "About Us get successfully", data: response });
    }
    catch (error) {
        return res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
    }
};

