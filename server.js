import app from './app';

const PORT = process.env.MPEN_PORT

app.listen(PORT, () =>
  console.log(`
    🚀 Server ready at: http://localhost:${PORT}
    ⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`
  ),
)
