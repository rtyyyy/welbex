import "./content.css";

function Content() {
    return (
        <div className="content__wrapper">
            <div className="content__title">
                <h1>Зарабатывайте больше</h1>
                <h2>с WELBEX</h2>
                <h4>Развиваем и контролируем продажи за вас</h4>
            </div>
            <div className="content__info">
                <h5>
                    Вместе с  <strong>бесплатной консультацией </strong>мы дарим:
                </h5>
                <div className="content__info--gifts">
                    <ul>
                        <li>
                            <h4>Виджеты</h4>
                            <p>30 готовых решений</p>
                        </li>
                        <li>
                            <h4>Dashboard</h4>
                            <p> с показателями вашего бизнеса</p>
                        </li>
                        <li>
                            <h4>Skype Аудит</h4>
                            <p>отдела продаж и CRM системы</p>
                        </li>
                        <li>
                            <h4>35 дней</h4>
                            <p>использования CRM</p>
                        </li>
                    </ul>
                </div>
                <button>
                    <p>Получить консультацию</p>
                </button>
            </div>
        </div>
    );
}
export default Content;
