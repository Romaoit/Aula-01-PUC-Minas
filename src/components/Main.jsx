import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <main className="main">

      <section className="content">
        <h2>Tarefa-01</h2>
        <p>Conteúdo principal da aplicação.</p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem est cupiditate voluptatum, dolorum eaque molestias magni, iusto quaerat et quam odit consectetur tempora similique unde maxime, commodi facilis totam exercitationem.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo recusandae nostrum voluptate voluptas aperiam consequatur eum ex? Ea modi nemo cumque sit odio, quia delectus facilis itaque fugiat inventore culpa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem odio quod quia saepe pariatur temporibus voluptas assumenda dolorem nostrum rem corrupti quis cupiditate autem laborum a vitae cumque maxime.
        </p>
      </section>

      <aside className="sidebar">
        <div className="card">Noticia da manhã</div>
        <div className="card">Desporto</div>
        <div className="card">Saúde</div>
        <div className="card">Desenvolvimento</div>
      </aside>

    </main>
  );
};

export default Main;
