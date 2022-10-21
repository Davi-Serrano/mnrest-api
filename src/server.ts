import {app, port} from "./app"

app.listen((port), ()=>{
    console.log('Server Rodando  na  porta ', port);
})
