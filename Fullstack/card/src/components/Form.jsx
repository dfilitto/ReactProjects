import { useState } from "react";
// Este componente recebe uma função chamada 'onSubmit' que será usada
// para enviar os dados preenchidos para outro componente (como o Card)
function Form({ onSubmit }) {
  // Aqui criamos um estado chamado 'formData', que começa com os três campos vazios
  const [formData, setFormData] = useState({
    nome: "",   // Vai guardar o nome digitado
    foto: "",   // Vai guardar o link da imagem digitada
    texto: ""   // Vai guardar o texto digitado
  });

  // Esta função é chamada toda vez que o usuário digita algo em qualquer campo do formulário
  function handleChange(event) {
    // Pega o nome do campo (ex: 'nome', 'foto' ou 'texto') e o valor digitado
    const { name, value } = event.target;

    // Atualiza o estado 'formData'
    // A função abaixo faz uma cópia de todos os dados atuais
    // e substitui somente o campo que foi modificado
    setFormData((dadosAnteriores) => ({
      ...dadosAnteriores,     // Copia todos os valores anteriores
      [name]: value           // Atualiza somente o campo modificado
    }));
  }

  // Esta função é chamada quando o botão do formulário é clicado
  function handleSubmit(event) {
    event.preventDefault(); // Impede que a página recarregue ao enviar o formulário
    onSubmit(formData);     // Envia os dados preenchidos para o componente pai
  }

  // Abaixo está a parte visual do formulário

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      {/* Campo Nome */}
      <input
        type="text"
        name="nome"
        placeholder="Digite o nome"
        value={formData.nome}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "0.5rem", width: "100%", padding: "0.5rem" }}
      />

      {/* Campo Texto */}
      <textarea
        name="texto"
        placeholder="Digite o texto"
        value={formData.texto}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "0.5rem", width: "100%", padding: "0.5rem" }}
      />

      {/* Campo Foto (URL da imagem) */}
      <input
        type="text"
        name="foto"
        placeholder="Cole a URL da imagem"
        value={formData.foto}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "0.5rem", width: "100%", padding: "0.5rem" }}
      />

      {/* Botão de Enviar */}
      <button type="submit" style={{ padding: "0.5rem 1rem" }}>
        Criar Card
      </button>
    </form>
  );
}

export default Form;