import authRouter from './auth'
import productRouter from './product'
const initRoutes = (app) =>{
    app.use('/api/v1/auth' , authRouter)
    app.use('/api/v1' , productRouter)
    return app.use('/' , (req,res) => {
       res.send('sever on ..')
    })
    
    
}
export default initRoutes