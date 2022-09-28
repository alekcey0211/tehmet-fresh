export const navItems = [
  {
    id: "menu-e44a6e2ca1ec4970af3508c832a1db98",
    html: `
		<div class="flex w-full h-full bg-light-blue items-center justify-center">
			<div class="w-full flex gap-4 items-center justify-between" style="max-width: 180px">
				<svg class="shrink-0" width="40" height="19" viewBox="0 0 40 19" fill="none">
					<path fill="url(#a)" d="M0 0h40v3H0z" />
					<path fill="url(#b)" d="M0 8h40v3H0z" />
					<path fill="url(#c)" d="M0 16h40v3H0z" />
					<defs>
						<linearGradient
							id="a"
							x1="16.122"
							y1="2.974"
							x2="28.05"
							y2=".503"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#0089CC" />
							<stop offset="1" stop-color="#0A529A" stop-opacity=".96" />
						</linearGradient>
						<linearGradient
							id="b"
							x1="16.122"
							y1="10.974"
							x2="28.05"
							y2="8.503"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#0089CC" />
							<stop offset="1" stop-color="#0A529A" stop-opacity=".96" />
						</linearGradient>
						<linearGradient
							id="c"
							x1="16.122"
							y1="18.974"
							x2="28.05"
							y2="16.503"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#0089CC" />
							<stop offset="1" stop-color="#0A529A" stop-opacity=".96" />
						</linearGradient>
					</defs>
				</svg>
			<a class="nav-item-span" href="/catalog" style="padding: 1rem">Каталог</a>
			</div>
		</div>
		`,
    text: "Каталог",
    link: "/catalog",
    // items: catalogs.filter(c => !c.parent).map((c) => ({
    // 	html: `<span class="py-2">${c.name}</span>`,
    // 	text: c.name,
    // 	link: "/" + c.id,
    // })),
    type: "catalog",
    // items: [
    // 	{
    // 		html: `<span class="py-2">Сварочные материалы</span>`,
    // 		text: "Сварочные материалы",
    // 		link: "/" + findCatalogItem("Сварочные материалы"),
    // 	},
    // 	{
    // 		html: `<span class="py-2">Абразивные материалы</span>`,
    // 		text: "Абразивные материалы",
    // 		link: "/" + findCatalogItem("Абразивные материалы"),
    // 	},
    // 	{
    // 		html: `<span class="py-2">Для монтажа нефтегазопроводов</span>`,
    // 		text: "Для монтажа нефтегазопроводов",
    // 		link: "/" + findCatalogItem("Для монтажа нефтегазопроводов"),
    // 	},
    // 	{
    // 		html: `<span class="py-2">Сварочное оборудование</span>`,
    // 		text: "Сварочное оборудование",
    // 		link: "/" + findCatalogItem("Сварочное оборудование"),
    // 	},
    // 	{
    // 		html: `<span class="py-2">Комплектующие для сварки</span>`,
    // 		text: "Комплектующие для сварки",
    // 		link: "/" + findCatalogItem("Комплектующие для сварки"),
    // 	},
    // 	{
    // 		html: `<span class="py-2">Вышки туры</span>`,
    // 		text: "Вышки туры",
    // 		link: "/vyshki-tury",
    // 	},
    // 	{
    // 		html: `<span class="py-2">Эмали</span>`,
    // 		text: "Эмали",
    // 		link: "/emali",
    // 	},
    // 	{
    // 		html: `<span class="py-2">Спецодежда и СИЗ</span>`,
    // 		text: "Спецодежда и СИЗ",
    // 		link: "/" + findCatalogItem("Спецодежда и СИЗ"),
    // 	},
    // 	{
    // 		html: `<span class="py-2">Изоляция</span>`,
    // 		text: "Изоляция",
    // 		link: "/" + findCatalogItem("Изоляция"),
    // 	},
    // 	{
    // 		html: `<span class="py-2">Обеспечение проживания на объекте</span>`,
    // 		text: "Обеспечение проживания на объекте",
    // 		link: "/obespechenie-prozhivaniya-na-obekte",
    // 	},
    // 	{
    // 		html: `<span class="py-2">Электроинструмент</span>`,
    // 		text: "Электроинструмент",
    // 		link: "/" + findCatalogItem("Электроинструмент"),
    // 	},
    // 	{
    // 		html: `<span class="py-2">Грузоподьемное оборудование</span>`,
    // 		text: "Грузоподьемное оборудование",
    // 		link: "/" + findCatalogItem("Грузоподьемное оборудование"),
    // 	},
    // 	{
    // 		html: `<span class="py-2">Электрика</span>`,
    // 		text: "Электрика",
    // 		link: "/sistemy-bezopasnosti-i-sks",
    // 	},
    // ],
  },
  {
    id: "menu-e28f77f7779a4bd387f0c8951f3044f5",
    text: "О компании",
    link: "/about",
    items: [
      {
        text: "О нас",
        link: "/",
      },
      {
        text: "Наша команда",
        link: "/team",
      },
      {
        text: "Карьера",
        link: "/career",
      },
      {
        text: "Неплательщики",
        link: "/defaulter",
      },
    ],
  },
  {
    id: "menu-3f25e7228c024bc8ae686fd84a0f89c5",
    text: "Новости",
    link: "/blog",
  },
  {
    id: "menu-cd6407baff874d0a94e66ae4c85d7e1b",
    text: "Доставка",
    link: "/delivery",
  },
  {
    id: "menu-dbfbbd6708f24a498d8fc45cbfb842c7",
    text: "Контакты",
    link: "/contacts",
  },
];
