/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import connection from "../database/db"


interface Post {
    id: Number;
    user: String;
    password: String;
}


// getting all posts
const getPosts =(): string => {
    const sql = `select id, email, password from User;`
    const time  = new Date()
    console.log("query time " + time)
    connection.query(sql,(error: any, results: any) =>{
        const resul = JSON.stringify(results)
        console.log("results " + resul + "type " + typeof(resul) + " error " + error)
        if(error) {
            console.log("hay error")
            return error.message;
        } else if(results.length > 0) {
            console.log("no hay error")
            return resul;
        } else{
            console.log("notresults")
            return 'No results for this query';
        }
    })
    return "Noestoyhaciendonada";
};


// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let id: string = req.params.id;
    // get the post
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let post: Post = result.data;
    return res.status(200).json({
        message: post
    });
};

// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req.params
    let id: string = req.params.id;
    // get the data from req.body
    let title: string = req.body.title ?? null;
    let body: string = req.body.body ?? null;
    // update the post
    let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        ...(title && { title }),
        ...(body && { body })
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from req.params
    let id: string = req.params.id;
    // delete the post
    let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // return response
    return res.status(200).json({
        message: 'post deleted successfully'
    });
};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let title: string = req.body.title;
    let body: string = req.body.body;
    // add the post
    let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        title,
        body
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

export default {getPosts ,getPost, updatePost, deletePost, addPost };