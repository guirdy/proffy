import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/49107317?s=460&u=a435622bd360e214b7bb9ed755ff5c6b377919ca&v=4" alt="Guilherme Leandro"/>
                        <div>
                            <strong>Guilherme Leandro</strong>
                            <span>Física</span>
                        </div>
                    </header>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        <br /><br />
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 1500,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Entrar em contato"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;