import { icons } from "./icons.tsx";

export const Pagination = ({
  page: currentPage,
  pages,
  link,
}: {
  page: number;
  pages: number;
  link: (page: number) => string;
}) => {
  return (
    <nav
      aria-labelledby="news-pagination"
      class="flex"
    >
      <ol class="flex flex-wrap gap-2 items-center text-blue1">
        {currentPage - 1 > 0 && (
          <li
            class="bg-light-blue w-14 h-11 relative grid place-content-center"
            style="clip-path: url(#form-01)"
          >
            <a
              class="absolute inset-2 grid place-content-center"
              href={link(currentPage - 1)}
            >
              <icons.ChevronLeft />
            </a>
          </li>
        )}
        {Array(pages)
          .fill(null)
          .map((_, index) => {
            const page = index + 1;
            return (
              <>
                {page > currentPage - 3 && page < currentPage + 3 && (
                  <li
                    class={`w-14 h-11 relative grid place-content-center text-xl sm:text-2xl ${
                      currentPage === page
                        ? "bg-blue text-white"
                        : "bg-light-blue"
                    }`}
                    style="clip-path: url(#form-01)"
                  >
                    <a
                      class="absolute inset-2 grid place-content-center"
                      href={link(page)}
                    >
                      {page}
                    </a>
                  </li>
                )}
                {page === currentPage - 3 && (
                  <li
                    class="w-14 h-11 relative grid place-content-center text-xl sm:text-2xl bg-light-blue"
                    style="clip-path: url(#form-01)"
                  >
                    <a
                      class="absolute inset-2 grid place-content-center"
                      href={link(1)}
                    >
                      1
                    </a>
                  </li>
                )}
                {page === pages && currentPage < pages - 2 && (
                  <li
                    class="w-14 h-11 relative grid place-content-center text-xl sm:text-2xl bg-light-blue"
                    style="clip-path: url(#form-01)"
                  >
                    <a
                      class="absolute inset-2 grid place-content-center"
                      href={link(pages)}
                    >
                      {pages}
                    </a>
                  </li>
                )}
                {((page === currentPage + 3 && currentPage + 3 < pages) ||
                  (page === currentPage - 3 && currentPage > 4)) && (
                  <icons.MoreHorizontal />
                )}
              </>
            );
          })}
        {currentPage < pages && (
          <li
            class="bg-light-blue w-14 h-11 relative grid place-content-center"
            style="clip-path: url(#form-01)"
          >
            <a
              class="absolute inset-2 grid place-content-center"
              href={link(currentPage + 1)}
            >
              <icons.ChevronRight />
            </a>
          </li>
        )}
        {/* {% if pagination.href.next %}
 			<li class="bg-light-blue w-14 h-11 relative grid place-content-center" style="clip-path: url(#form-01)">
 				<a class="absolute inset-2 grid place-content-center" href="{{ pagination.href.next }}#news">
 					{% icon {
 							icon: "chevron-right"
 						} %}
 				</a>
 			</li>
 		{% endif %} */}
      </ol>
    </nav>
  );
};
