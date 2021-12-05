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
			<li><a href="">Главная</a></li>
			<li><a href="">Каталог</a></li>
			<ul class="submenu">
				<li><a href="">Краски</a></li>
				<li><a href="">Кисти художественные</a></li>
				<li><a href="">Пластика и пластилин</a></li>
				<li><a href="">Декорирование</a></li>
			</ul>
			<li><a href="">Контакты</a></li>
		</ul>`;