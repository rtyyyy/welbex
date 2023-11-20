import './footer.css'
function Footer() {
    return (
        <div className='footer__wrapper'>
            <div className='footer__content'>
                <div className='footer__about'>
                    <h5>О компании</h5>
                    <ul>
                        <li>Партнёрская программа</li>
                        <li>Вакансии</li>
                    </ul>
                </div>
                <div className='footer__menu'>
                    <div>
                        <h5>Меню</h5>
                    </div>
                    <div className='footer__menu--list'>
                        <ul>
                            <li>Расчёт стоимости</li>
                            <li>Услуги</li>
                            <li>Виджеты</li>
                            <li>Интеграции</li>
                            <li>Наши клиенты</li>
                        </ul>
                        <ul>
                            <li>Кейсы</li>
                            <li>Благотворительные письма</li>
                            <li>Сертификаты</li>
                            <li>Блог на YouTube</li>
                            <li>Вопрос / Ответ</li>
                        </ul>
                    </div>
                </div>
                <div className='footer__contact'>
                    <h5>Контакты</h5>
                    <ul>
                        <li>+7 555 555-55-55</li>
                        <li>
                            <div>
                                <img src="./images/telegram.png" alt="" />
                                <img src="./images/viber.png" alt="" />
                                <img src="./images/whatsapp.png" alt="" />
                            </div>
                        </li>
                        <li>Москва, Путевой проезд 3с1, к 902</li>
                    </ul>
                </div>
            </div>
            <div className='footer__copyright'>
                <p>©WELBEX 2022. Все права защищены.</p>
                <p>Политика конфиденциальности</p>
            </div>
        </div>
    )
}
export default Footer