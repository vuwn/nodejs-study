import { createServer } from 'http'
const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'Vincent'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Taylor'},
];

// Logger middleWare
const logger = (req, res, next) => {

    console.log(`${req.method} ${req.url}`);
    next();

};

// JSON middleware
const jsonMiddleware = (req, res, next) => {

    res.setHeader('Content-Type', 'application/json');
    next();

};

// Route handler for /api/users
const getUsersHandler = (req, res) => {

    res.write(JSON.stringify(users));
    res.end();

};

// Route handler for GET /api/user/id
const getUserByIdHandler = (req, res) => {

        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id))
        
        if(user){
            res.write(JSON.stringify(user));
        } else{
            res.statusCode = 404;
            res.write(JSON.stringify({ message: 'User not found'}));
        }
        res.end();

};

// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Route now found'}));
    res.end();

};

const server = createServer((req, res) => {

    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if(req.url === '/api/users' && req.method === 'GET'){
                getUsersHandler(req, res);
            } else if(req.url.match(/\/api\/users\/([0-9]+)/) && 
                      req.method === 'GET'){
                getUserByIdHandler(req, res);
            } else{
                notFoundHandler(req, res);
            }
        })
    });

});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})