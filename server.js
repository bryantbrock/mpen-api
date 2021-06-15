import app from './app';
import config from './config';
const { PORT } = config;

app.listen(PORT, () =>
  console.log(`
    🚀 Server ready at: http://localhost:3000
    ⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`
  ),
)
