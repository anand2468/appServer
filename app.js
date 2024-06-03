let exp = require('express')
let sql = require('mysql2')
const cors = require('cors');

let app = exp()
app.use(cors());
let pool = sql.createPool({
    host:'localhost',
    user:'root',
    password:'1029anand',
    database:'lara'
})

// app.get('/',(req, res)=>{
//     pool.query('select * from emp',(error, result)=>{
//         if (error) {
//             return res.status(500).end({error:'error occurred '})
//         }
//         res.status(200)
//         res.json({ data: result })
//         res.end()
//     })
// })

app.get('/get-posts', (req, res)=>{
    pool.query("select * from posts", (error, result)=>{
        if (error){ return res.status(500).end({'error':error})}
        res.status(200)
        res.json(result)
        res.end()
    })
})

app.listen(8080, ()=>{console.log('server is running at')})