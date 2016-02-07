---
layout: post
title:  "Мій улюблений текстовий редактор - Sublime Text"
date:   2013-03-21 00:23:58
tags: linux nalashtyvannja dovidkovi_materialy korysni_resursy
meta_desc_1:
desc_1: "<p>Не так давно слухав подкаст '<a title='Радіо-Т - подкаст радио на темы хайтек, высоких компьютерных технологий, гаджетов, облаков, программирования и прочего интересного из мира ИТ' href='http://www.radio-t.com' target='_blank'>Радіо-Т</a>', де ведучі жваво обговорювали розвиток текстового редактора з назвою '<strong>Sublime Text</strong>'. В своїй професійній діяльності, а саме веб-розробці, я працював з досить великою кількістю редакторів таких, як: PSPad, Komodo, Kate, KWrite, ..., проте в них завжди бракувало різних дрібничок. Можливо, Sublime Text не панацея, проте мене зараз повністю задовільняє. Насамперед подобається те, що він зайняв нішу між великими IDE з усім готовим і текстовими редакторами типу 'збери сам' :) (vim, emacs, etc).</p><p>В цьому дописі зібрав свої вподобання щодо редактора <strong>Sublime Text</strong>, щоб з часом можна було б їх швидко розгорнути в нових середовищах.</p>"
desc_2:
desc_3:
desc_img: "http://4.bp.blogspot.com/-oKRH-NRJsrM/UioNXH3D0iI/AAAAAAAADFA/mNAiaaG8SFk/s940/sublime_doc_base.png"
---

Не так давно слухав подкаст "<a title="Радіо-Т - подкаст радио на темы хайтек, высоких компьютерных технологий, гаджетов, облаков, программирования и прочего интересного из мира ИТ" href="http://www.radio-t.com" target="_blank">Радіо-Т</a>", де ведучі жваво обговорювали розвиток текстового редактора з назвою '<strong>Sublime Text</strong>'. В своїй професійній діяльності, а саме веб-розробці, я працював з досить великою кількістю редакторів таких, як: PSPad, Komodo, Kate, KWrite, ..., проте в них завжди бракувало різних дрібничок. Можливо, Sublime Text не панацея, проте мене зараз повністю задовільняє. Насамперед подобається те, що він зайняв нішу між великими IDE з усім готовим і текстовими редакторами типу "збери сам" :) (vim, emacs, etc).

В цьому дописі зібрав свої вподобання щодо редактора <strong>Sublime Text</strong>, щоб з часом можна було б їх швидко розгорнути в нових середовищах.

![#1 Sublime Text](http://4.bp.blogspot.com/-oKRH-NRJsrM/UioNXH3D0iI/AAAAAAAADFA/mNAiaaG8SFk/s940/sublime_doc_base.png)

<dl>
<dt>Розробник</dt>
<dd>Jon Skinner</dd>
<dt>Перший вихід</dt>
<dd>January 18, 2008</dd>
<dt>Написаний на</dt>
<dd>C++, Python</dd>
<dt>Операційна система</dt>
<dd>Microsoft Windows 32/64 Bit, Mac OS X, Linux 32/64 Bit</dd>
<dt>Розмір</dt>
<dd>~5–8 MB</dd>
<dt>Ліцензія</dt>
<dd><a title="Proprietary software" href="http://en.wikipedia.org/wiki/Proprietary_software" target="_blank">Proprietary software</a>.Use requires payment.</dd>
<dt>Website</dt>
<dd><a title="На офіційну сторінку редактора Sublime Text" href="http://www.sublimetext.com" target="_blank">www.sublimetext.com</a></dd></dl>

## Кросс-платформенність
------------------------

Удома і на роботі використовую як <strong>Windows,</strong> так і <strong>Fedora (дестрибутив Linux)</strong>. Тому кросс-платформенність програмного забезпечення для мене є досить важливим аргументом, оскільки досить зручно не залежно від операційної системи потрапляти в уже знайоме середовище з тими ж 'гарячими клавішами' і відповідними налаштуваннями.

## Встановлення та налаштування редактора
-----------------------------------------

Встановлення редактора нічим не відрізняється від встановлення будь-якої іншої програми. Зате налаштування відбувається шляхом редагування файлу який поданий в форматі <strong>'JSON'</strong>. Загалом є два файли налаштувань: <strong>файл налаштувань по замовчуванню</strong>, та <strong>файл користувацьких налаштувань</strong>. Рекомендую перший файл <em>(налаштувань по замовчуванню)</em> використовувати як огляд-опис можливостей налаштувань, а вже у файлі користувацьких налаштувань в носити всі необхідні зміни.

<strong>Мої налаштуванні такі</strong> <em>(Preferences -> Settings - User)</em>:

<pre>{
    "detect_slow_plugins": false,
    "draw_white_space": "all",
    "ensure_newline_at_eof_on_save": true,
    "font_face": "Courier New",
    "highlight_line": true,
    "highlight_modified_tabs": true,
    "ignored_packages":
    [
        "Vintage"
    ],
    "tab_size": 4,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true
}</pre>

<table class="table">
    <thead>
        <tr>
            <th>Змінна</th>
            <th>Опис</th>
            <th>Можливі значення</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>detect_slow_plugins</td>
            <td>Якщо встановлено <code>true</code>, редактор пильнуватиме чи котрийсь із встановлених плагінв не використовує більше часу ніж би мав, у випадку використання зявлятиметься повідомлення з інформацією про цю подію. Це може допомогти вам визначити чому "Sublime Text" в даний час повільно працює або не відповідає. Проте мені ця функція заважає, через те я її вимкнув.</td>
            <td><code>true</code> або <code>false</code></td>
        </tr>
        <tr>
            <td>draw_white_space</td>
            <td>Якщо встановлено <code>"all"</code>, то усі пробіли і таби будуть візуалізовані у вигляді крапок і рисок. Якщо встановлено <code>"selection"</code>, то візуалізація буде застосована тільки до виділених фрагментів.</td> <td><code>"none"</code>, <code>"selection"</code> або <code>"all"</code></td>
        </tr>
        <tr>
            <td>ensure_newline_at_eof_on_save</td>
            <td>Якщо <code>true</code> то після збереження файлу в кінець файлу буде додана порожня стрічка, якщо її ще не було</td>
            <td><code>true</code> або <code>false</code></td>
        </tr>
        <tr>
            <td>font_face</td>
            <td>За бажанням можна змінити шрифт відображення файлу.</td>
            <td>Назва шрифта</td>
        </tr>
        <tr>
            <td>highlight_line</td>
            <td>Якщо встановлено <code>true</code>, то стічка на якій в даний мамент знаходиться курсор матиме інший фон, це допоможе її швидше знайти.</td>
            <td><code>true</code> або <code>false</code></td>
        </tr>
        <tr>
            <td>highlight_modified_tabs</td>
            <td>Якщо встановлено <code>true</code>, назви вкладок з новими змінами будуть виділятись кольором. Дуже зручно при роботі з великою кількістю вкладок</td> <td><code>true</code> або <code>false</code></td>
        </tr>
        <tr>
            <td>tab_size</td>
            <td>Встановлення кількісті пробілів в одному табі</td>
            <td>Цифра</td>
        </tr>
        <tr>
            <td>translate_tabs_to_spaces</td>
            <td>Якщо встановлено <code>true</code>, замість табів для форматування будуть використовуватись пробіли.</td>
            <td><code>true</code> або <code>false</code></td>
        </tr>
        <tr>
            <td>trim_trailing_white_space_on_save</td>
            <td>Якщо встановлено <code>true</code>, всі пробіли в кінці стрічок будуть видалятись при збереженні файлу.</td>
            <td><code>true</code> або <code>false</code></td>
        </tr>
    </tbody>
</table>

### Гарячі клавіші

Найбільш часто використовувані мною сполучення клавіш:
<ul>
<li><code>ctrl + f</code> - пошук по файлу;</li>
<li><code>ctrl + p</code> - перехід/пошук файлу;</li>
<li><code>ctrl + r</code> - пошук по імені функції, структури;</li>
<li><code>ctrl + ;</code> - пошук по змінних;</li>
<li><code>ctrl + shift + p</code> - меню з переліком усіх команд Sublime Text із можливістю пошуку;</li>
<li><code>ctrl + /</code> - закоментувати/розкоментувати;</li>
<li><code>alt + shift + 1..3</code> - розділити вікно редактора на 1, 2, 3 шари;</li>
<li><code>ctrl + shift + 1..3</code> - перемістити файл в шар 1, 2, 3;</li>
<li><code>ctrl + 1..3</code> - перейти в шар 1, 2, 3;</li>
<li><code>ctrl + f2</code> - встановити або видалити закладку;</li>
<li><code>f2</code> - перейти до наступної закладки;</li>
</ul>

## Різні дрібні але значущі детальки редактора
----------------------------------------------

Sublime відразу привернув мою увагу своєю красою, анімацією, а також купою функцій та плагінів. Наприклад: якщо я закриваю редактор, не зберігши зміни в одному з відкритих файлів, Sublime не буде задавати зайвих питань, він просто відновить всі незбережені зміни при наступному запуску.

### Проекти

За замовчуванням Sublime Text працює з індивідуальними файлами, однак він також вміє вправлятись і з проектами, причому такий режим роботи має ряд істотних переваг: відображення дерево подібної структури файлів папки відкритого проекту і відкриті файли, в ній можна створювати, перейменовувати, видаляти файли і папки, а також є розширений пошук по файлах проекту за допомогою функції Goto Anything, та про неї нижче.
![#2 Sublime Text: Проекти](http://1.bp.blogspot.com/-C4kwLuZtCpU/UioNu3-zk7I/AAAAAAAADFI/yzgv4RHODwI/s940/sublime_doc_proekty_menu.png)

### Назва табів

Якщо відкрити файл <code>controller/user.php</code>, то на вкладці буде написано просто <code>user.php</code>, але якщо одночасно відкрити <code>controller/user.php</code> і <code>view/user.php</code>, то вкладки будуть називатися <code>user.php - controller</code> і <code>user.php - view</code> відповідно.
![#3 Sublime Text: Назва табів](http://2.bp.blogspot.com/-I-zTkIzTROY/UioN_3w1d4I/AAAAAAAADFQ/9tk1ooL3Xdg/s940/sublime_doc_tabs.png)

### Мінікарта

Своєрідній додатковий повзунок прокрутки у вигляді міні-карти всього коду.
![#4 Sublime Text: Мінікарта](http://3.bp.blogspot.com/-kR3AckLjvcI/UioOMQWHMBI/AAAAAAAADFY/xzAEsL6y7iw/s940/sublime_doc_minimap.png)

### Командна палітра (меню команд)

Командна палітра дозволяє знайти і виконати майже будь-яку функцію редактора, використовуючи все той же пошук нечіткого збігу. Для того щоб викликати командну палітру використовуємо комбінацію клавіш <code>Ctrl + Shift + P</code>.
![#5 Sublime Text: Командна палітра](http://3.bp.blogspot.com/-jsdi13kHl8o/UioOZY1MpKI/AAAAAAAADFg/nLZqquAF3aQ/s940/sublime_doc_komandne_menu.png)

Наприклад, відкриваємо файл з неправильним розширенням і хочемо перемкнути мову підсвічування синтаксису на коректний. Можна почати шукати потрібну мову у списку всіх мов, а можна скористатися командною палітрою. Для перемикання мови підсвічування на <code>php</code> мені досить натиснути <code>Ctrl + Shift + P</code> і ввести <code>ssph</code> у стрічці що відкрилась.

### Функція 'Goto Anything'

<strong>Goto Anything</strong> - це одна з найбільш корисних функцій редактора. Вона дозволяє перейти до будь-якого файлу проекту, просто набравши його назву. Тонкість полягає в тому, що пошук файлу здійснюється за допомогою 'пошуку нечіткого збігу', який в свою чергу дозволяє вказати будь-які символи з рядка який ви шукали. Символи не повинні йти підряд, головне дотримуватись правильного порядку.

Наприклад, вам потрібно знайти всі <code>css</code> файли з папки <code>styles</code>, для цього досить скористатися комбінацією клавіш <code>Ctrl + P</code> і ввести <code>styles/.css</code> після чого ви отримаєте список файлів. Пошук нечітких збігів дозволяє шукати файли за найбільш унікальними символами в їхньому імені та шляху.
![#6 Sublime Text: Goto Anything](http://3.bp.blogspot.com/-xABAiXDD0_Y/UioOn-VkECI/AAAAAAAADFo/_oiHK3Zox8k/s940/sublime_doc_goto_anything_1.png)

Крім пошуку по файлах, функція <strong>Goto Anything</strong> дозволяє перейти до довільного рядка або потрібного оголошення. Для переходу до рядка потрібно перед номером рядка поставити двокрапку.

Для переходу до оголошення потрібно поставити символ <code>@</code>, після чого ввести саме оголошення. Оголошенням може бути: селектор у <code>css-файлі</code>, назву методу чи функції в файлі <code>php</code> або <code>js</code> і т.д.

Проте, найголовніше у функції Goto Anything є те, що можна комбінувати пошук файлу і рядки/оголошення в ньому.

Наприклад, мені потрібно знайти селектор <code>#my-element</code> у файлі <code>main.css</code>. Для цього я спочатку вводжу ім'я файлу, після чого, якщо знайдено більше одного файлу, вибираю потрібний мені файл з випадаючого списку, ставлю символ <code>@</code> і дописую <code>#my-element</code>.
![#7 Sublime Text: Goto Anything](http://1.bp.blogspot.com/-cbvkI-KDk7k/UioO1JNuKgI/AAAAAAAADFw/nnGG4zY516M/s940/sublime_doc_goto_anything_2.png)

### Множинне виділення

Якщо в ході розробки вам необхідно перейменувати змінну, то не потрібно "чарувати" з пошуком і заміною (ім'я змінної може зустрічатись різних контекстах), достатньо використати функцію множинного виділення. Аби це зробити достатньо виділити змінну, натиснути <code>Ctrl + D</code>, і редактор знайде і виділить фрагменти файлу, де зустрічається змінна. Для пропуску чергового фрагмента достатньо натиснути <code>Ctrl + K</code>, потім <code>Ctrl + D</code>. Поточний фрагмент буде пропущений і редактор перейде до наступного. Після того як всі необхідні фрагменти будуть виділені, досить ввести нове ім'я змінної, і воно буде змінене у всіх виділених фрагментах одночасно. Скасувати множинне виділення можна, натиснувши на <code>Esc</code>.
![#8 Sublime Text: Множинне виділення](http://3.bp.blogspot.com/-tHLwBe9qHLE/UioPAdVcHwI/AAAAAAAADF4/V-ExPojx0Qo/s940/sublime_doc_mnozhynne_vydilennja.png)

## Доповнення (plugins)
-----------------------

Перераховувати всі можливості <strong>Sublime Text</strong> можна дуже довго, але для плідної роботи одного редактора не достатньо. Через те доповнення стають нам в допомозі :) Про додатки якими користуюсь, а також про їх налаштування читайте згодом.

## Використані матеріали
------------------------

<ol>
    <li>Офіційний сайт редактора 'Sublime Text' // URL: <a title="Офіційний сайт редактора - Sublime Text" href="http://www.sublimetext.com" target="_blank">http://www.sublimetext.com</a></li>
    <li>Sublime Text - Wikipadia, the free encyclopedia // URL: <a title="Sublime Text - Wikipadia, the free encyclopedia" href="http://en.wikipedia.org/wiki/Sublime_Text" target="_blank">http://en.wikipedia.org/wiki/Sublime_Text</a></li>
    <li>Разработка с помощью Sublime Text 2 - Студия Анатолия Попеля // URL: <a title="Разработка с помощью Sublime Text 2 - Студия Анатолия Попеля" href="http://popel-studio.com/blog/article/razrabotka-s-pomoschiu-sublime-text-2.html" target="_blank">http://popel-studio.com/blog/article/razrabotka-s-pomoschiu-sublime-text-2.html</a></li>
    <li><span>Моргун Иван. Ода о Sublime Text // URL: </span><a title="Моргун Иван. Ода о Sublime Text" href="http://proft.me/2013/02/2/oda-o-sublime-text/" target="_blank">http://proft.me/2013/02/2/oda-o-sublime-text/</a></li>
    <li><span>Sublime Text 2 обзор и плагины/plugins // </span>URL: <a title="Sublime Text 2 обзор и плагины/plugins" href="http://labdes.ru/sublime-text-2-obzor-i-plaginyplugins" target="_blank">http://labdes.ru/sublime-text-2-obzor-i-plaginyplugins</a></li>
    <li>"Радіо-Т" - подкаст радіо на темы хайтек, высоких компьютерных технологий, гаджетов, облаков, программирования и прочего интересного из мира ИТ // URL: <a title="Радіо-Т - подкаст радіо на темы хайтек, высоких компьютерных технологий, гаджетов, облаков, программирования и прочего интересного из мира ИТ" href="http://www.radio-t.com" target="_blank">http://www.radio-t.com</a></li>
</ol>