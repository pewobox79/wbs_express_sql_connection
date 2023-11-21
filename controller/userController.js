import { pool } from "../db/db.js"

export const UserController ={
    getAllUsers: (req, res)=>{

        pool.query("SELECT * FROM users")
        .then(data => res.json(data.rows))
        .catch(err => res.sendStatus(500).json({msg: "connection failed"}))

    },

    getSingleUser: (req, res)=>{

        const {id} = req.params
        pool.query("SELECT * FROM users WHERE id=$1", [id])
        .then(data => res.json(data.rows))
        .catch(err => res.sendStatus(500).json({msg: "failed to find single user"}))

    },

    addNewUser: (req, res)=>{
        const {last_name, age, email} = req.body

        const text = "INSERT INTO users(last_name, age, email) VALUES ($1, $2, $3) RETURNING *"
        const values = [last_name, age, email]
        
        pool.query(text, values)
        .then(data => res.status(201).json({msg: "user added", data}))
        .catch(err => res.status(400).json({msg: "add new user failed", err}))

    },
    updateUser: (req,res)=>{
        const {id} = req.params
        const {last_name} = req.body

        const text="UPDATE users SET last_name=$1 WHERE id=$2 RETURNING *"
        const values=[last_name, id]
       
        pool.query(text,values)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({msg: "update failed", err}))

    }



}