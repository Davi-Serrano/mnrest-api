import "reflect-metadata";
import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors"

import { router } from './routes';

import "./database";
import "./shared/container";

import { AppError } from "./erros/appError";

const port = process.env.PORT || 3333;

const app = express();

app.use(express.json());

app.use(router);
app.use((err: Error, req: Request, res: Response, next: NextFunction)=> {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            message: err.message
        });
    }

    return res.status(500).json({
        status: "error",
        message: `Internal server error ${err.message}`
    })
});

app.listen((port), ()=>{
    console.log('Server Rodando  na  porta ', port);
})
