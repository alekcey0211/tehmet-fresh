// import Alpine from "alpinejs";
// import persist from "@alpinejs/persist";
// import Swiper, { Navigation, Autoplay, Pagination } from "swiper";
// import PhotoSwipeLightbox from "photoswipe/lightbox";
// import Fuse from "fuse.js";

// window.autoComplete = () => {
//   return {
//     cursorIndex: -1,
//     activeSuggestion: null,
//     inputValue: "",
//     active: false,
//     suggestions: [],
//     query: "",
//     initFuse: async () => {
//       const productsUrl = new URL("https://tehmet.su/ajax/products.php");
//       const productsResponse = await fetch(productsUrl.toString());
//       const productsJson = await productsResponse.json();
//       const products = Object.values(productsJson.data ?? {});
//       products.forEach((p) => {
//         p.isExists = p.isExists ?? true;
//       });
//       return products;
//     },
//     fuse: new Fuse([], {
//       includeMatches: true,
//       findAllMatches: true,
//       threshold: 0.1,
//       ignoreLocation: true,
//       keys: ["name"],
//     }),
//     updateSuggestions: function (data) {
//       this.query = data;
//       this.suggestions = this.doFuseSearch(this.query);
//     },
//     doFuseSearch: function (query) {
//       let results = this.fuse.search(query);
//       return results.sort((a, b) => a.item.name.localeCompare(b.item.name));
//     },
//     getThis: function () {
//       let t = this;
//       return t;
//     },
//     getRefs(which) {
//       return this.$refs[which];
//     },
//     moveUpList() {
//       // Move up the list if there is a list and we're not at the top already.
//       if (this.suggestions.length > 0 && this.cursorIndex > 0) {
//         // Decrement cursorIndex.
//         this.cursorIndex--;

//         // Remove active status from any other suggestion.
//         let oldActive = this.suggestions.find(
//           (suggestion) => suggestion.active
//         );
//         if (oldActive) {
//           oldActive.active = false;
//         }

//         // Add active status to suggestion at cursorIndex.
//         this.suggestions[this.cursorIndex].active = true;
//         this.inputValue = this.suggestions[this.cursorIndex].item.name;
//       }
//     },
//     moveDownList() {
//       // Move down the list only if there is room on the list to move down.
//       if (
//         this.suggestions.length > 0 &&
//         this.cursorIndex < this.suggestions.length - 1
//       ) {
//         // Just increment the cursorIndex.
//         this.cursorIndex++;

//         // Remove active status from any other suggestion.
//         let oldActive = this.suggestions.find(
//           (suggestion) => suggestion.active
//         );
//         if (oldActive) {
//           oldActive.active = false;
//         }
//         this.suggestions[this.cursorIndex].active = true;
//         this.inputValue = this.suggestions[this.cursorIndex].item.name;
//       }
//     },
//   };
// };

// window.generateLinkByQueryParam = (values, hash) => {
//   const url = new URL(document.location.href);
//   for (const [key, value] of values) {
//     if (value === undefined || value === null) {
//       if (url.searchParams.has(key)) url.searchParams.delete(key);
//     } else {
//       url.searchParams.set(key, value);
//     }
//   }
//   return `${url.pathname}${url.search}${hash ? "#" + hash : ""}`;
// };

// window.getSearchParams = () => {
//   const url = new URL(document.location.href);
//   return [...url.searchParams.entries()].reduce((acc, [key, value]) => {
//     return {
//       ...acc,
//       [key]: value,
//     };
//   }, {});
// };

// window.catalogProductsInit = () => {
//   const params = getSearchParams();
//   return {
//     items: [],
//     isLoading: true,
//     getProducts: async (props) => {
//       const company = params.company?.trim().toLowerCase();

//       const brand = props?.brand;
//       const categories = props?.categories;
//       const id = props?.id;

//       const productsUrl = new URL("https://tehmet.su/ajax/products.php");
//       if (categories) {
//         categories.split(",").forEach((c) => {
//           productsUrl.searchParams.append("category[]", c);
//         });
//       }
//       if (id) productsUrl.searchParams.set("id", id);
//       if (company || brand)
//         productsUrl.searchParams.set("brand", company ?? brand);

//       const productsResponse = await fetch(productsUrl.toString());
//       const productsJson = await productsResponse.json();
//       const products = Object.values(productsJson.data ?? {});
//       products.forEach((p) => {
//         p.isExists = p.isExists ?? true;
//       });

//       let items = [...products];
//       if (params.sort) {
//         items = items.sort((a, b) =>
//           params.order === "desc"
//             ? b[params.sort] - a[params.sort]
//             : a[params.sort] - b[params.sort]
//         );
//       }
//       return items;
//     },
//     formatNumber: (number) => new Intl.NumberFormat("ru-RU").format(number),
//     link: (v) => generateLinkByQueryParam(v, "catalog"),
//     params,
//     layout: Alpine.$persist("grid").as("layout"),
//   };
// };

// window.dropdownToggle = () => ({
//   open: false,
//   toggle() {
//     if (this.open) return this.close();
//     this.open = true;
//   },
//   close(focusAfter) {
//     if (!this.open) return;
//     this.open = false;
//   },
// });

// window.bestManagerInit = () => ({
//   data: {},
//   isLoading: true,
//   load: async () => {
//     const url = new URL("https://tehmet.su/ajax/best.php");
//     const resp = await fetch(url.toString());
//     const json = await resp.json();
//     return {
//       ...json,
//       img: `/assets/img/employee/${json.fio
//         .toLowerCase()
//         .split(" ")
//         .join("-")}.jpg`,
//     };
//   },
// });

// window.popularProductsInit = () => ({
//   data: [],
//   isLoading: true,
//   load: async () => {
//     const url = new URL("https://tehmet.su/ajax/products.php");
//     const resp = await fetch(url.toString());
//     const json = await resp.json();
//     const products = Object.values(json.data ?? {});
//     const popular = [
//       ...products.filter(
//         (x) =>
//           Boolean(x.featured) ||
//           x.features.find((f) =>
//             ["хит", "хит продаж"].includes(f.value.toLowerCase())
//           )
//       ),
//     ];

//     const sliderWrapper = document.querySelector(
//       "#swiper-bbaccfb375bf4ed48546783f28c4c46a .swiper-wrapper"
//     );
//     popular.forEach((item) => {
//       const slide = document.createElement("div");
//       slide.classList.add("swiper-slide");
//       slide.innerHTML = `
// 			<div
// 				class="swiper-slide__wrapper"
// 				style="clip-path: url(#form-01)"
// 			>
// 				<div
// 					class="swiper-slide__wrapper__img-container"
// 					style="clip-path: url(#form-01)"
// 				>
// 					<img src="${item.image}" alt="${item.name}" loading="lazy">
// 				</div>
// 				<span class="swiper-slide__wrapper__text">${item.name}</span>
// 				<a href="/products/${item.url}/" class="swiper-slide__wrapper__link"></a>
// 			</div>`;
//       sliderWrapper.appendChild(slide);
//     });

//     new Swiper("#swiper-bbaccfb375bf4ed48546783f28c4c46a", {
//       modules: [Navigation],
//       slidesPerView: 1,
//       breakpoints: {
//         [screens["2xs"]]: {
//           slidesPerView: Math.min(2, popular.length),
//         },
//         [screens.xs]: {
//           slidesPerView: Math.min(3, popular.length),
//         },
//         [screens.lg]: {
//           slidesPerView: Math.min(2, popular.length),
//         },
//         [screens.xl]: {
//           slidesPerView: Math.min(3, popular.length),
//         },
//         [screens["2xl"]]: {
//           slidesPerView: Math.min(4, popular.length),
//         },
//       },
//       // loop: true,
//       navigation: {
//         nextEl: "#swiper-bbaccfb375bf4ed48546783f28c4c46a-button-next",
//         prevEl: "#swiper-bbaccfb375bf4ed48546783f28c4c46a-button-prev",
//       },
//     });

//     return popular;
//   },
// });

// window.categoryInit = () => ({
//   data: {},
//   isLoading: true,
//   load: async (id) => {
//     const url = new URL("https://tehmet.su/ajax/categories.php");
//     if (id) url.searchParams.set("category", id);
//     const resp = await fetch(url.toString());
//     const json = await resp.json();
//     const category = json.data;
//     const children = Object.values(category?.children ?? {});
//     return {
//       category,
//       children: children.filter((x) => Boolean(Number(x.parent_id) === id)),
//     };
//   },
// });

// window.Alpine = Alpine;
// Alpine.plugin(persist);

// Alpine.start();

const screens = {
  /** 375px */
  "2xs": 375,
  /** 475px */
  xs: 475,
  /** 640px */
  sm: 640,
  /** 768px */
  md: 768,
  /** 1024px */
  lg: 1024,
  /** 1280px */
  xl: 1280,
  /** 1536px */
  "2xl": 1536,
};

new Swiper("#swiper-47b71397b2cc4df69b420a003b5477aa", {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: "#swiper-47b71397b2cc4df69b420a003b5477aa-button-next",
    prevEl: "#swiper-47b71397b2cc4df69b420a003b5477aa-button-prev",
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

new Swiper("#swiper-71e5983e0ce24d2aa0a941ba82f4c3f3", {
  modules: [Navigation],
  spaceBetween: 20,
  slidesPerView: 3,
  breakpoints: {
    [screens.lg]: {
      slidesPerView: 5,
    },
    [screens["2xl"]]: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
  },
  loop: true,
  navigation: {
    nextEl: "#swiper-71e5983e0ce24d2aa0a941ba82f4c3f3-button-next",
    prevEl: "#swiper-71e5983e0ce24d2aa0a941ba82f4c3f3-button-prev",
  },
});

new Swiper("#swiper-aef69157f3874b3d8911be4c51d5741b", {
  modules: [Navigation],
  spaceBetween: 20,
  slidesPerView: 2,
  breakpoints: {
    [screens.md]: {
      slidesPerView: 3,
    },
    [screens.lg]: {
      slidesPerView: 5,
    },
  },
  loop: true,
  navigation: {
    nextEl: "#swiper-aef69157f3874b3d8911be4c51d5741b-button-next",
    prevEl: "#swiper-aef69157f3874b3d8911be4c51d5741b-button-prev",
  },
  on: {
    click: (swiper) => {
      document
        .getElementById(swiper.clickedSlide.dataset["galleryItemId"])
        ?.click();
    },
  },
});

new Swiper("#swiper-67233994a168456eb9db9ba8c425f2b5", {
  modules: [Navigation],
  spaceBetween: 50,
  slidesPerView: 1,
  breakpoints: {
    [screens.sm]: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    [screens.lg]: {
      slidesPerView: 3,
      navigation: false,
    },
  },
  loop: true,
  navigation: {
    nextEl: "#swiper-67233994a168456eb9db9ba8c425f2b5-button-next",
    prevEl: "#swiper-67233994a168456eb9db9ba8c425f2b5-button-prev",
  },
});

new Swiper("#swiper-9a3e8ea9-7faf-486e-957f-de3a1795479f", {
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination-9a3e8ea9-7faf-486e-957f-de3a1795479f",
    clickable: true,
  },
  autoplay: {
    delay: 5_000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

new Swiper("#swiper-bbf7c73f-0433-40a2-945b-8708ba9dfbc4", {
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination-bbf7c73f-0433-40a2-945b-8708ba9dfbc4",
    clickable: true,
  },
  autoplay: {
    delay: 5_000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

if (!window.HTMLDialogElement) {
  const dialogs = document.querySelectorAll("dialog");
  dialogs.forEach((dialog) => {
    dialogPolyfill.registerDialog(dialog);
  });
}

const dialogs = document.querySelectorAll("dialog");
dialogs.forEach((dialog) => {
  const form = dialog.querySelector("form");
  const closeButton = dialog.querySelectorAll("[data-close]");
  const triggers = document.querySelectorAll(
    `[data-dialog-for="${dialog.id}"]`
  );
  const successMsg = dialog.querySelector("[data-success]");
  const buttonContainer = dialog.querySelector("[data-button-container]");

  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;
    if (!isInDialog) dialog.close();
  });
  closeButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      dialog.close();
    });
  });
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      if (trigger.dataset.closeOther === "true") {
        for (const dialog of dialogs) {
          dialog.close();
        }
      }
      dialog.showModal();
    });
  });

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const calltouchRequest = () => {
      const ct_fio =
        formData.get("name")?.toString() ??
        formData.get("fio")?.toString() ??
        formData.get("nameFF")?.toString();
      const ct_mail =
        formData.get("contactFF")?.toString() ??
        formData.get("email")?.toString();
      const ct_phone =
        formData.get("phone")?.toString() ??
        formData.get("phoneFF")?.toString();
      const ct_comment = formData.get("messageFF")?.toString();
      const ct_check = formData.get("agreement")?.toString() === "on";
      const ct_site_id = "42285";
      const ct_sub = formData.get("theme")?.toString();
      let ct_valid = "";
      if (/Заказ звонка/gi.test(ct_sub)) {
        ct_valid = !!ct_phone && !!ct_check;
      }
      if (/обратной связи/gi.test(ct_sub)) {
        ct_valid = !!ct_phone && !!ct_fio && ct_mail && !!ct_check;
      }
      // if (/Подписаться на рассылки/gi.test(ct_sub)) {
      // 	ct_valid = !!ct_fio && ct_mail && !!ct_check;
      // }
      // if (/Заказ прайс-листа/gi.test(ct_sub)) {
      // 	ct_valid = !!ct_fio && ct_mail && !!ct_check;
      // }
      // if (!ct_sub) {
      // 	ct_sub = "Узнать цену";
      // 	ct_comment =
      // 		"Товар: " +
      // 		m.find('input[name*="product"]').val() +
      // 		"; Количество: " +
      // 		m.find('input[name*="quantity"]').val();
      // 	ct_valid = !!ct_fio && !!ct_check;
      // }

      const calltouchFormData = new FormData();
      calltouchFormData.set("fio", ct_fio);
      calltouchFormData.set("phoneNumber", ct_phone);
      calltouchFormData.set("email", ct_mail);
      calltouchFormData.set("comment", ct_comment);
      calltouchFormData.set("subject", ct_sub);
      calltouchFormData.set("requestUrl", location.href);
      calltouchFormData.set("sessionId", window.call_value);

      if (ct_valid && window.ct_snd_flag != 1) {
        window.ct_snd_flag = 1;
        setTimeout(function () {
          window.ct_snd_flag = 0;
        }, 20000);
        try {
          fetch(
            `https://api.calltouch.ru/calls-service/RestAPI/requests/${ct_site_id}/register/`,
            { method: "POST", body: calltouchFormData }
          );
        } catch (error) {
          console.error(error);
        }
      }
    };

    switch (dialog.id) {
      case "a74b73421fe794532bd3f7cb4f430e750":
        await fetch("https://tehmet.su/cs_send.php", {
          method: "POST",
          body: formData,
          mode: "no-cors",
        });
        try {
          if (typeof ym !== "undefined") {
            if (formData.get("isOrder") === "1") {
              ym?.(25681487, "reachGoal", "TOVAR");
            } else {
              ym?.(25681487, "reachGoal", "ZVONOK");
            }
          }
          if (typeof gtag !== "undefined") {
            gtag?.("config", "UA-64540463-1", { page_path: "ZVONOK" });
          }
        } catch (e) {
          console.error(e);
        }
        break;
      case "form-effb7861-5ab1-469e-8091-fca64e21430b":
        await fetch("https://tehmet.su/cs_send.php", {
          method: "POST",
          body: formData,
          mode: "no-cors",
        });
        try {
          if (typeof ym !== "undefined") {
            ym?.(25681487, "reachGoal", "SVYAZ");
          }
          if (typeof gtag !== "undefined") {
            gtag?.("config", "UA-64540463-1", { page_path: "SVAZOK" });
          }
        } catch (e) {
          console.error(e);
        }
        break;
    }

    calltouchRequest();

    form.reset();
    buttonContainer?.classList.add("hidden");
    successMsg?.classList.remove("hidden");
    setTimeout(() => {
      dialog.close();
    }, 2_000);
  });
});

// const lightbox = new PhotoSwipeLightbox({
//   gallery: "#gallery-89fcf8b9d9ab43948151a207a5eba144",
//   children: "a",
//   pswpModule: () => import("photoswipe"),
// });
// lightbox.init();

function init() {
  document.querySelectorAll("[data-map]").forEach((map) => {
    const coords = map.dataset.coords.split(",");
    const title = map.dataset.title;
    const myMap = new ymaps.Map(map, {
      center: coords,
      zoom: 16,
    });
    myMap.geoObjects.add(
      new ymaps.Placemark(coords, {
        iconCaption: `Техмет, ${title}`,
      })
    );
  });
}
if (typeof ymaps !== "undefined") {
  ymaps.ready(init);
}

const _ctreq_b24 = (data) => {
  const sid = 42285;
  const request = window.ActiveXObject
    ? new ActiveXObject("Microsoft.XMLHTTP")
    : new XMLHttpRequest();
  const post_data = Object.keys(data)
    .reduce((a, k) => {
      if (!!data[k]) {
        a.push(k + "=" + encodeURIComponent(data[k]));
      }
      return a;
    }, [])
    .join("&");
  const url = `https://api.calltouch.ru/calls-service/RestAPI/${sid}/requests/orders/register/`;
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(post_data);
};

window.addEventListener("b24:form:submit", (event) => {
  const form = event.detail.object;
  if (form.validated) {
    let fio = "";
    let phone = "";
    let email = "";
    let comment = "";
    form.getFields().forEach((el) => {
      if (el.name == "LEAD_NAME" || el.name == "CONTACT_NAME") {
        fio = el.value();
      }
      if (el.name == "LEAD_PHONE" || el.name == "CONTACT_PHONE") {
        phone = el.value();
      }
      if (el.name == "LEAD_EMAIL" || el.name == "CONTACT_EMAIL") {
        email = el.value();
      }
      if (el.name == "LEAD_COMMENTS" || el.name == "DEAL_COMMENTS ") {
        comment = el.value();
      }
    });
    const sub = "Заявка с формы Bitrix24 " + location.hostname;
    const ct_data = {
      fio: fio,
      phoneNumber: phone,
      email: email,
      comment: comment,
      subject: sub,
      requestUrl: location.href,
      sessionId: window.call_value,
    };
    if (!!phone || !!email) _ctreq_b24(ct_data);
  }
});

window.addEventListener("onBitrixLiveChat", (event) => {
  const widget = event.detail.widget;
  widget.subscribe({
    type: BX.LiveChatWidget.SubscriptionType.every,
    callback: (ev) => {
      if (ev.type == BX.LiveChatWidget.SubscriptionType.userMessage) {
        if (!window.ct_snd_flag && !!window.ct) {
          ct("goal", "b24chat");
          window.ct_snd_flag = 1;
        }
      }
      if (ev.type == BX.LiveChatWidget.SubscriptionType.userForm) {
        const sid = 42285;
        let fio = "";
        let phone = "";
        let email = "";
        if (!!ev.data && !!ev.data.fields && !!ev.data.fields.name) {
          fio = ev.data.fields.name;
        }
        if (!!ev.data && !!ev.data.fields && !!ev.data.fields.phone) {
          phone = ev.data.fields.phone;
        }
        if (!!ev.data && !!ev.data.fields && !!ev.data.fields.email) {
          email = ev.data.fields.email;
        }
        const ct_data = {
          phoneNumber: phone,
          fio,
          email,
          requestUrl: location.href,
          sessionId: window.call_value,
          subject: "Чат Bitrix24 посетитель оставил контакты",
        };
        const request = window.ActiveXObject
          ? new ActiveXObject("Microsoft.XMLHTTP")
          : new XMLHttpRequest();
        const post_data = Object.keys(ct_data)
          .reduce(function (a, k) {
            if (!!ct_data[k]) {
              a.push(k + "=" + encodeURIComponent(ct_data[k]));
            }
            return a;
          }, [])
          .join("&");
        const url = `https://api.calltouch.ru/calls-service/RestAPI/${sid}/requests/orders/register/`;
        request.open("POST", url, true);
        request.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );
        request.send(post_data);
      }
    },
  });
});

document
  .querySelector("a.b24-widget-button-openline_livechat")
  ?.addEventListener("click", () => {
    ym?.(25681487, "reachGoal", "chat");
  });
