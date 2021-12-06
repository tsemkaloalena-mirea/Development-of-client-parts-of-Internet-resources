document.getElementsByClassName("menu")[0].innerHTML = `
		<div>
			<a href="index.html" class="logo">
				<img src="./style/images/logo.png">
				<p>Paintbrush</p>
			</a>
			<div class="toggle-menu" onclick="menuButtonClicked(this)">
				<img src="./style/images/toggle-menu-1.png" class="bar1">
				<img src="./style/images/toggle-menu-2.png" class="bar2">
				<img src="./style/images/toggle-menu-3.png" class="bar3">
			</div>
		</div>
		<ul>
			<li><a href="index.html">Главная</a></li>
			<li><a href="">Каталог</a></li>
			<ul class="submenu">
				<li><a href="paints.html">Краски</a></li>
				<li><a href="brushes.html">Кисти художественные</a></li>
				<li><a href="plastic.html">Пластика и пластилин</a></li>
			</ul>
			<li><a href="infoart.html">Инфо-арт</a></li>
			<li><a href="contacts.html">Контакты</a></li>
		</ul>`;