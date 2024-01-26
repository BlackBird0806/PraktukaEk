ReactDOM.render(<h1>Ласкаво просимо в наш інтернет магазин Квітник</h1>, document.getElementById("header"))

ReactDOM.render(<div>
    <p>&copy; 2023 Інтернет магазин Квітник. Всі права захищені.</p>
    <p>e-mail: Kvitnuk@gmail.com</p>
    <p>номер телефона: 063 454 63 41</p>
    <h4>Для оформлення замолення пишіть в наші соціальні мережі:</h4>
    <a class="social-link" href="#" target="_blank">Facebook</a>
    <a class="social-link" href="#" target="_blank">Instagram</a>
    <a class="social-link" href="#" target="_blank">Telegram</a>
</div>, document.getElementById("footer"))

ReactDOM.render(<div>
    <a href="#header">Головна сторінка</a>
    <a href="#line">Ассортимент квітів</a>
    <a href="#line2">Придбати квітку в горщику</a>
    <a href="#footer">Контакты</a>
</div>, document.getElementById("nav"))

ReactDOM.render(<div>
    <h2>Ласкаво просимо у наш магазин квітів</h2>
    <p> - місце, де найніжніші емоції перетворюються на квіткові шедеври! Наша команда вітає вас сердечно і готова подарувати вам красу природи в кожній квітці.</p>
    <p>У нашому асортименті ви знайдете вишукані букети для будь-якої нагоди: від романтичних дарунків до важливих святкових подій. Кожен букет складається з тщательно відібраних квітів високої якості, які вибрані з любов'ю та розташовані в елегантних композиціях.</p>
    <p>Наші флористи - це справжні майстри, які створюють твори мистецтва з квітів. Ми завжди враховуємо ваші побажання та гарантуємо свіжість кожного бутону. Кожен квітковий дизайн у нас - це вираз вдумливості та турботи, яку ми вкладаємо в кожен замовлення.</p>
    <p>Окрім квітів, ми також пропонуємо додаткові аксесуари та послуги, щоб зробити ваш подарунок ще більш особливим. Доставка квітів - це ще один сервіс, який ми надаємо з радістю. Ми працюємо для того, щоб кожен момент, який ви вирішуєте виразити через квіти, був неповторним та незабутнім.</p>
    <p>Зробіть світ яскравішим разом з нашими квітами. Замовляйте онлайн або завітайте до нашого магазину - ми завжди тут для вас, готові подарувати вам частинку природної краси та тепла!</p>
</div>,document.getElementById("content"))

ReactDOM.render(<div>
    <img src="/image/3.jpg" alt="Квіти"></img>
</div>, document.getElementById("img"))

ReactDOM.render(<h2>Ассортимент квітів</h2>, document.getElementById("line"))

ReactDOM.render(<div style={{ display: 'flex' }}>
    <table style={{ flex: 1, marginRight: '20px' }}>
      <thead>
        <tr>
          <th>Готові букети</th>
          <th>Вигляд</th>
          <th>Ціна</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Букет 101 біла роза</td>
          <td>
            <img src="/image/5.jpg" alt="White roze" style={{ width: '200px', height: '200px' }} />
          </td>
          <td>7500 гривень</td>
        </tr>
        <tr>
          <td>Букет 101 жовта роза</td>
          <td>
            <img src="/image/6.jpg" alt="Yellow roze" style={{ width: '200px', height: '200px' }} />
          </td>
          <td>6500 гривень</td>
        </tr>
        <tr>
          <td>букет 101 червона роза</td>
          <td>
            <img src="/image/4.jpg" alt="Red roze" style={{ width: '200px', height: '200px' }} />
          </td>
          <td>7250 гривень</td>
        </tr>
      </tbody>
    </table>

    <table style={{ flex: 1 }}>
      <thead>
        <tr>
          <th>Зібрати букет</th>
          <th>Вигляд</th>
          <th>Ціна</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Букет тюльпанів</td>
          <td>
            <img src="/image/7.jpg" alt="Тюльпани" style={{ width: '200px', height: '200px' }} />
          </td>
          <td>85 гривень за шт</td>
        </tr>
        <tr>
          <td>Букет лилий</td>
          <td>
            <img src="/image/8.jpg" alt="Лилии" style={{ width: '200px', height: '200px' }} />
          </td>
          <td>90 гривень за шт</td>
        </tr>
        <tr>
          <td>Букет роз</td>
          <td>
            <img src="/image/10.jpg" alt="Рози" style={{ width: '200px', height: '200px' }} />
          </td>
          <td>80 гривень за шт</td>
        </tr>
      </tbody>
    </table>
</div>, document.getElementById("table1"))

ReactDOM.render(<h2>Придбати квітку в горщику</h2>, document.getElementById("line2"))

ReactDOM.render(<div style={{ display: 'flex' }}>
    <table style={{ flex: 1, marginRight: '20px' }}>
      <thead>
        <tr>
          <th>Квіти в горщику</th>
          <th>Вигляд</th>
          <th>Ціна</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Азалія в горщику</td>
          <td>
            <img src="/image/11.jpg" alt="Азалія" style={{ width: '200px', height: '200px' }} />
          </td>
          <td>250 гривень</td>
        </tr>
        <tr>
          <td>Орхідея в горщику</td>
          <td>
            <img src="/image/12.jpg" alt="Орхідея" style={{ width: '200px', height: '200px' }} />
          </td>
          <td>350 гривень</td>
        </tr>
        <tr>
          <td>Гіацинт в горщику</td>
          <td>
            <img src="/image/13.jpg" alt="Red roze" style={{ width: '200px', height: '200px' }} />
          </td>
          <td>125 гривень</td>
        </tr>
      </tbody>
    </table>

    <table style={{ flex: 1 }}>
      <thead>
        <tr>
          <th>Зібрати букет</th>
          <th>Вигляд</th>
          <th>Ціна</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Дерево фікуса в горщику</td>
          <td>
            <img src="/image/14.jpg" alt="Фікус" style={{ width: '200px', height: '200px' }} />
          </td>
          <td>350 гривень за шт</td>
        </tr>
        <tr>
          <td>Дерево драцена в горщику</td>
          <td>
            <img src="/image/15.png" alt="Лилии" style={{ width: '200px', height: '200px' }} />
          </td>
          <td>300 гривень за шт</td>
        </tr>
        <tr>
          <td>Декоративний кущ заміокулькаса в горщику</td>
          <td>
            <img src="/image/16.jpg" alt="Рози" style={{ width: '200px', height: '200px' }} />
          </td>
          <td>80 гривень за шт</td>
        </tr>
      </tbody>
    </table>
</div>, document.getElementById("table2"))