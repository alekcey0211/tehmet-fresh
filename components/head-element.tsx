import { Head } from "$fresh/runtime.ts";

export function HeadElement({
  description = "Группа Компаний Техмет - ведущий поставщик в России в области комплексных поставок продукции для монтажа нефтегазопроводов Цель компании создавать уверенность у потребителей в бесперебойности производства",
  image = "/assets/img/logo-color.png",
  title,
  url,
}: {
  url: URL;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{`${title} - Техмет`}</title>
      {/* <link rel="icon" href="/favicon.ico" sizes="32x32" /> */}
      <meta name="description" content={description} />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={url.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={url.hostname} />
      <meta property="twitter:url" content={url.href} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/img/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/img/favicon-16x16.png"
      />
      <link rel="manifest" href="/assets/img/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/assets/img/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/assets/img/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="Tehmet" />
      <meta name="application-name" content="Tehmet" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta
        name="msapplication-config"
        content="/assets/img/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />

      <link rel="stylesheet" type="text/css" href="swiper-bundle.min.css" />
      <link rel="stylesheet" type="text/css" href="dialog-polyfill.css" />
      <link rel="stylesheet" type="text/css" href="style.css" />

      <script src="swiper-bundle.min.js" async defer></script>
      <script src="dialog-polyfill.js" async defer></script>
      <script src="script.js" async defer></script>

      {/* {% if site.production %}
	{# <!-- Yandex.Metrika counter --> #}
	<script type="text/javascript">
		(function (d, w, c) {
			(w[c] = w[c] || []).push(function () {
				try {
					w.yaCounter32253134 = new Ya.Metrika({id: 32253134, clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true});
				} catch (e) {}
			});

			var n = d.getElementsByTagName("script")[0],
				s = d.createElement("script"),
				f = function () {
					n
						.parentNode
						.insertBefore(s, n);
				};
			s.type = "text/javascript";
			s.async = true;
			s.src = "https://mc.yandex.ru/metrika/watch.js";

			if (w.opera == "[object Opera]") {
				d.addEventListener("DOMContentLoaded", f, false);
			} else {
				f();
			}
		})(document, window, "yandex_metrika_callbacks");
	</script>
	<noscript>
		<div><img src="https://mc.yandex.ru/watch/32253134" style="position:absolute; left:-9999px;" alt=""/></div>
	</noscript>
	{# <!-- /Yandex.Metrika counter --> #}
	{# <!-- Yandex.Metrika counter --> #}
	<script type="text/javascript">
		(function (m, e, t, r, i, k, a) {
			m[i] = m[i] || function () {
				(m[i].a = m[i].a || []).push(arguments)
			};
			m[i].l = 1 * new Date();
			k = e.createElement(t),
			a = e.getElementsByTagName(t)[0],
			k.async = 1,
			k.src = r,
			a
				.parentNode
				.insertBefore(k, a)
		})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

		ym(25681487, "init", {
			id: 25681487,
			clickmap: true,
			trackLinks: true,
			accurateTrackBounce: true,
			webvisor: true,
			trackHash: true
		});
	</script>
	{# <!-- /Yandex.Metrika counter --> #}

	<meta name="google-site-verification" content="hnkUOKg3b9TYxrf06HD7rd4PPxEWycsnauhnAZ279Wo" />
	{# <!-- Global site tag (gtag.js) - Google Analytics --> #}
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
			var f = d.getElementsByTagName(s)[0],

				j = d.createElement(s),
				dl = l != 'dataLayer'
					? '&l=' + l
					: '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f
				.parentNode
				.insertBefore(j, f);

		})(window, document, 'script', 'dataLayer', 'GTM-NZZRD7G');
	</script>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-Z2FY1CPVCP"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-Z2FY1CPVCP');
	</script>
	<meta name="yandex-verification" content="f3d851eb6216d1c3"/>
	<noscript>
		<div><img src="https://mc.yandex.ru/watch/25681487" style="position:absolute; left:-9999px;" alt=""/></div>
	</noscript>
	<noscript>
		<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NZZRD7G" height="0" width="0" style="display:none;visibility:hidden"></iframe>
	</noscript>
	{# <!-- Google Tag Manager (noscript) --> #}
	<noscript>
		<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WX7W2G3" height="0" width="0" style="display:none;visibility:hidden"></iframe>
	</noscript>
	{# <!-- End Google Tag Manager (noscript) --> #}

	{# <!-- calltouch --> #}
	<script type="text/javascript">
		(function (w, d, n, c) {
			w.CalltouchDataObject = n;
			w[n] = function () {
				w[n]["callbacks"].push(arguments)
			};
			if (!w[n]["callbacks"]) {
				w[n]["callbacks"] = []
			}
			w[n]["loaded"] = false;
			if (typeof c !== "object") {
				c = [c]
			}
			w[n]["counters"] = c;
			for (var i = 0; i < c.length; i += 1) {
				p(c[i])
			}
			function p(cId) {
				var a = d.getElementsByTagName("script")[0],
					s = d.createElement("script"),
					i = function () {
						a
							.parentNode
							.insertBefore(s, a)
					};
				s.type = "text/javascript";
				s.async = true;
				s.src = "https://mod.calltouch.ru/init.js?id=" + cId;
				if (w.opera == "[object Opera]") {
					d.addEventListener("DOMContentLoaded", i, false)
				} else {
					i()
				}
			}
		})(window, document, "ct", "sv8t3ldn");
	</script>
	{# <!-- calltouch --> #}
{% endif %} */}

      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/img/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/img/favicon-16x16.png"
      />
      <link rel="manifest" href="/assets/img/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/assets/img/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/assets/img/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="Tehmet" />
      <meta name="application-name" content="Tehmet" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta
        name="msapplication-config"
        content="/assets/img/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="{{ page.url | url }}" />
      <meta property="og:title" content="{{ metaTitle | safe }}" />
      <meta property="og:description" content="{{ metaDescription | safe }}" />
      <meta property="og:image" content="/assets/img/logo-color.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="{{ page.url | url }}" />
      <meta property="twitter:title" content="{{ metaTitle | safe }}" />
      <meta
        property="twitter:description"
        content="{{ metaDescription | safe }}"
      />
      <meta property="twitter:image" content="/assets/img/logo-color.png" /> */}
    </Head>
  );
}
