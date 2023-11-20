
import './header.css'


function Header(){
    return(
        <div className="header__wrapper">
            <div className="header__logo">
                <img src="./images/logo_welbex.png" alt="" />
                <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            </div>
            <div className="header__menu">
                <ul>
                    <li>Услуги</li>
                    <li>Виджеты</li>
                    <li>Интеграции</li>
                    <li>Кейсы</li> 
                    <li>Сертификаты</li>
                </ul>
            </div>
            <div className="header__contact">
                <div>
                    <p>+7 555 555-55-55</p>
                </div>
                <div>
                    <img src="./images/telegram.png" alt="" />
                    <img src="./images/viber.png" alt="" />
                    <img src="./images/whatsapp.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default  Header