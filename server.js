import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {

    try{
        // check if === 'GET'
        if(req.method === 'GET'){
            if(req.url === '/'){
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<h1 /> Homepage`);
            } else if(req.url === '/about'){
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<h1 /> About`);
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(`<h1 /> Not Found`);
            } 
        } else{
            throw new Error('Method is not allows');
        }
    }catch(error){
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Server Error!`);
    }

});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});