import { blogModel } from "../../database/models/blog";
import { createData } from "../../helper/database_service";
let ObjectId = require("mongoose").Types.ObjectId;


export const addBlog = async (req, res) => {
    try{
        const data = req.body;
        const response = await createData(blogModel ,data);
        res.status(200).json({ message: "Blog added successfully", data: data });
    }
    catch(error){
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export const updateBlog = async (req, res) => {
    try{
        let { id } = req.params, body = req.body;
        const response = await blogModel.findOneAndUpdate({_id:id}, body, { new: true, lean: true });  
        res.status(200).json({ message: "Blog updated successfully", data: response });
    }
    catch(error){
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export const deleteBlog = async (req, res) => {
    try{
        let { id } = req.params;
        const response = await blogModel.findOneAndDelete({ _id: new ObjectId(req.params.id), isDeleted: false}, {isDeleted: true}, { new: true, lean: true });
        res.status(200).json({ message: "Blog deleted successfully", data: response });
    }
    catch(error){
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export const getBlog = async (req, res) => {
    try{
        const blog = await blogModel.find({});
        res.status(200).json({ message: "Blog fetched successfully", data: blog });
    }
    catch(error){
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};