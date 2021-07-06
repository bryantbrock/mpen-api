import app from './app';

const PORT = process.env.PORT || process.env.MPEN_PORT || 3001

app.listen(PORT, () =>
  console.log(`
    🚀 Server ready at: http://localhost:${PORT}
    ⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`
  ),
)
