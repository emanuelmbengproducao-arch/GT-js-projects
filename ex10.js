const user = {
  nome: "Samuel",
  email: "samuel@gmail.com",
  senha: "123456",
};

const email = "samuel@gmail.com";
const senha = "1234567";

if (email !== user.email || senha !== user.senha) {
  console.log("Email ou senha incorretos!");
  return;
}
console.log(`Bem vindo ${user.nome}!`);
