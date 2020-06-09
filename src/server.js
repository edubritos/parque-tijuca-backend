const app = require("./app");

const port = process.env.PORT || 4200;

app.listen(port, () => {
  console.log("Aplicação executando na porta ", port);
});
