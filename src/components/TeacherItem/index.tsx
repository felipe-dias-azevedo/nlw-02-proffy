import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/61800414?s=400&u=9abfa2d5a106fdcab0b0f631817e04e218ddee2e&v=4" alt="Felipe Azevedo" />
                <div>
                    <strong>Felipe Azevedo</strong>
                    <span>Fisíca</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de física avançada.
                        <br /><br />
                        Apaixonado por explorar coisas novas e por mudar a vida das pessoas através de experiências. Mais de 1.000.000 pessoas já tiveram a experiência de uma aula minha.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp logo" />
                            Entrar em contanto
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;