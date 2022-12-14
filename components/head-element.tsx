import { Head } from "$fresh/runtime.ts";
import { useContext } from "preact/hooks";
import { Page } from "../context/page-context.tsx";
import { config } from "../site/config.ts";

const Metrika = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
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
})(document, window, "yandex_metrika_callbacks");`,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/32253134"
            style="position:absolute; left:-9999px;"
            alt=""
          />
        </div>
      </noscript>
      <script
        dangerouslySetInnerHTML={{
          __html: `
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
});`,
        }}
      />
      <meta
        name="google-site-verification"
        content="hnkUOKg3b9TYxrf06HD7rd4PPxEWycsnauhnAZ279Wo"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
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

})(window, document, 'script', 'dataLayer', 'GTM-NZZRD7G');`,
        }}
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Z2FY1CPVCP"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
 window.dataLayer = window.dataLayer || [];
 function gtag() {
   dataLayer.push(arguments);
 }
 gtag('js', new Date());

 gtag('config', 'G-Z2FY1CPVCP');`,
        }}
      />
      <meta name="yandex-verification" content="f3d851eb6216d1c3" />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/25681487"
            style="position:absolute; left:-9999px;"
            alt=""
          />
        </div>
      </noscript>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NZZRD7G"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
      <script
        dangerouslySetInnerHTML={{
          __html: `
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
})(window, document, "ct", "sv8t3ldn");`,
        }}
      />
    </>
  );
};

export function HeadElement({
  description = "???????????? ???????????????? ???????????? - ?????????????? ?????????????????? ?? ???????????? ?? ?????????????? ?????????????????????? ???????????????? ?????????????????? ?????? ?????????????? ?????????????????????????????????? ???????? ???????????????? ?????????????????? ?????????????????????? ?? ???????????????????????? ?? ?????????????????????????????? ????????????????????????",
  keywords,
  image = "logo-color.png",
  title,
}: {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
}) {
  const { url } = useContext(Page);

  return (
    <Head>
      <title>{`${title} - ????????????`}</title>
      {/* <link rel="icon" href="/favicon.ico" sizes="32x32" /> */}
      <meta name="description" content={description} />
      {keywords && <meta name="Keywords" content={keywords} />}

      {/* <meta charSet="UTF-8" /> */}
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      /> */}

      {config.production && <Metrika />}

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
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="Tehmet" />
      <meta name="application-name" content="Tehmet" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      <link rel="stylesheet" href="/photoswipe/photoswipe.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="/swiper/swiper-bundle.min.css"
      />
      <link rel="stylesheet" type="text/css" href="/style.css" />

      <script
        type="module"
        src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1.3.1/lite-youtube.js"
        async
        defer
      ></script>
      {url.pathname === "/contacts" && (
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=5c97121dd5a0a4f13e785dce756a60838f8829f147f13c8a06628fec6931b410&lang=ru_RU"
          defer
        ></script>
      )}
      <script type="module" src="/script.js" defer></script>
      {config.production && (
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
      (function (w, d, u) {
        var s = d.createElement('script');
        s.async = true;
        s.src = u + '?' + (
        Date.now() / 60000 | 0);
        var h = d.getElementsByTagName('script')[0];
        h
          .parentNode
          .insertBefore(s, h);
      })(window, document, 'https://crm.tehmet.su/upload/crm/site_button/loader_1_5bqfwf.js');`,
          }}
        />
      )}
    </Head>
  );
}
