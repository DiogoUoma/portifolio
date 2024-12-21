import "./Contact.css";

const Contact = () => {
  return (
    <div className="contato_container">
      {/* backgorund 1 */}
      <div className="contact_content">
        {/* background 2 */}
        <h1>Contate-me</h1>
        <a href="mailto:diogouoma3105@gmail.com?subject=Olá!&body=Escreva sua mensagem aqui.">
          <p>diogouoma3105@gmail.com</p>
        </a>
        <a href="https://wa.me/5544999073105">
          <p>(44)999073105</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
