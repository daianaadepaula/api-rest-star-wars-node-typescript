import { server } from './server/server';

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => console.log(`🚀 App is running at port ${PORT}!`));
