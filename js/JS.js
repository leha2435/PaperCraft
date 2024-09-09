const menuLinks = document.querySelectorAll(".menu-link");
const contents = document.querySelectorAll(".content");

menuLinks.forEach((link) => {
	link.addEventListener("click", function (event) {
		event.preventDefault(); // Предотвращаем переход по ссылке

		// Убираем класс active со всех ссылок и контента
		menuLinks.forEach((link) => link.classList.remove("active"));
		contents.forEach((content) => content.classList.remove("active"));

		// Добавляем класс active на выбранную ссылку
		this.classList.add("active");

		// Находим связанный контент по data-target и показываем его
		const target = this.getAttribute("data-target");
		document.getElementById(target).classList.add("active");
	});
});
