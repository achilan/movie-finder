globalThis.process ??= {}; globalThis.process.env ??= {};
import '../@astrojs_XkseP6bl.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, b as renderComponent } from '../../renderers.mjs';
import '../kleur_BcFxsYqz.mjs';
/* empty css                          */
import { $ as $$Layout } from './_id__D4P___zI.mjs';

const $$Astro$2 = createAstro("https://achilan.github.io");
const $$Index$6 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$6;
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-4 py-16" data-astro-cid-6oz4uzv2> <h1 class="text-5xl mt-4 md:mt-0 mb-6 font-semibold" data-astro-cid-6oz4uzv2>About</h1> <div data-astro-cid-6oz4uzv2> <p data-astro-cid-6oz4uzv2>This site is a demo of an <a href="https://astro.build/" target="_blank" data-astro-cid-6oz4uzv2>Astro</a> MPA using the <a href="https://developer.chrome.com/blog/shared-element-transitions-for-spas/" target="_blank" data-astro-cid-6oz4uzv2>Shared Element Transition API</a>. You can read more about its implementation on <a href="https://www.maxiferreira.com/blog/astro-page-transitions/" target="_blank" data-astro-cid-6oz4uzv2>the blog post</a>.</p> </div> </div> `;
}, "/Users/achilan/repositories/astro-movies/src/pages/fragments/About/index.astro", void 0);

const $$file$6 = "/Users/achilan/repositories/astro-movies/src/pages/fragments/About/index.astro";
const $$url$6 = "/movie-finder/fragments/About";

const index$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$6,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://achilan.github.io");
const $$MovieCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MovieCard;
  const { movie } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-8"> <a${addAttribute(`/movies/${movie.id}`, "href")}> <img${addAttribute(`https://image.tmdb.org/t/p/w500${movie.poster_path}`, "src")}${addAttribute(`${movie.title} Poster`, "alt")} class="thumbnail hover:opacity-75 transition ease-in-out duration-150 rounded-lg shadow-2xl"${addAttribute(`movie-poster-${movie.id}`, "id")}> </a> <div class="mt-2"> <a${addAttribute(`/movies/${movie.id}`, "href")} class="text-lg mt-2 hover:text-gray-300">${movie.title}</a> <div class="flex items-center text-gray-400 text-sm mt-1"> <svg class="fill-current text-orange-500 w-4" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star"></path></g></svg> <span class="ml-1">${movie.vote_average}</span> <span class="mx-2">|</span> <span>${movie.release_date}</span> </div> <div class="text-gray-400 text-sm">${movie.genres}</div> </div> </div>`;
}, "/Users/achilan/repositories/astro-movies/src/components/MovieCard.astro", void 0);

const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const popularMoviesResponse = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=7fb2f37bff2a42d8d4af1d65af218972"
  );
  const popularMoviesData = await popularMoviesResponse.json();
  const popularMovies = popularMoviesData.results;
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-4 pt-16 mb-16"> <div class="popular-movies"> <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">
Popular Movies
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"> ${popularMovies && popularMovies.map((movie) => renderTemplate`${renderComponent($$result, "MovieCard", $$MovieCard, { "movie": movie, "key": movie.id })}`)} </div> </div> <!-- end pouplar-movies --> </div>`;
}, "/Users/achilan/repositories/astro-movies/src/pages/fragments/MovieList/index.astro", void 0);

const $$file$5 = "/Users/achilan/repositories/astro-movies/src/pages/fragments/MovieList/index.astro";
const $$url$5 = "/movie-finder/fragments/MovieList";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$5,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$4 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-4 py-16 flex flex-col md:flex-row"> <h1>Not implemented!</h1> </div>`;
}, "/Users/achilan/repositories/astro-movies/src/pages/fragments/PersonList/index.astro", void 0);

const $$file$4 = "/Users/achilan/repositories/astro-movies/src/pages/fragments/PersonList/index.astro";
const $$url$4 = "/movie-finder/fragments/PersonList";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://achilan.github.io");
const $$TvShowCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TvShowCard;
  const { show } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-8"> <a${addAttribute(`/tv/${show.id}`, "href")}> <img${addAttribute(`https://image.tmdb.org/t/p/w500${show.poster_path}`, "src")}${addAttribute(`${show.name} Poster`, "alt")} class="thumbnail hover:opacity-75 transition ease-in-out duration-150"${addAttribute(`movie-poster-${show.id}`, "id")}> </a> <div class="mt-2"> <a${addAttribute(`/tv/${show.id}`, "href")} class="text-lg mt-2 hover:text-gray-300">${show.name}</a> <div class="flex items-center text-gray-400 text-sm mt-1"> <svg class="fill-current text-orange-500 w-4" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star"></path></g></svg> <span class="ml-1">${show.vote_average}</span> <span class="mx-2">|</span> <span>${show.first_air_date}</span> </div> <div class="text-gray-400 text-sm">${show.genres}</div> </div> </div>`;
}, "/Users/achilan/repositories/astro-movies/src/components/TvShowCard.astro", void 0);

const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const popularShowsResponse = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=7fb2f37bff2a42d8d4af1d65af218972");
  const popularShowsData = await popularShowsResponse.json();
  const popularShows = popularShowsData.results;
  const topRatedResponse = await fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=7fb2f37bff2a42d8d4af1d65af218972");
  const topRatedData = await topRatedResponse.json();
  const topRated = topRatedData.results;
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-4 pt-16"> <div class="popular-tv"> <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">Popular Shows</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"> ${popularShows.map((show) => renderTemplate`${renderComponent($$result, "TvShowCard", $$TvShowCard, { "show": show })}`)} </div> </div> <!-- end popular-tv --> <div class="top-rated-shows py-24"> <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">Top Rated Shows</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"> ${topRated.map((show) => renderTemplate`${renderComponent($$result, "TvShowCard", $$TvShowCard, { "show": show })}`)} </div> </div> <!-- end top-rated-shows --> </div>`;
}, "/Users/achilan/repositories/astro-movies/src/pages/fragments/TvList/index.astro", void 0);
const $$file$3 = "/Users/achilan/repositories/astro-movies/src/pages/fragments/TvList/index.astro";
const $$url$3 = "/movie-finder/fragments/TvList";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "People - MovieFinder" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PersonList", $$Index$4, {})} ` })}`;
}, "/Users/achilan/repositories/astro-movies/src/pages/people/index.astro", void 0);

const $$file$2 = "/Users/achilan/repositories/astro-movies/src/pages/people/index.astro";
const $$url$2 = "/movie-finder/people";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "TV \u2014 MovieFinder" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TvList", $$Index$3, {})} ` })}`;
}, "/Users/achilan/repositories/astro-movies/src/pages/tv/index.astro", void 0);

const $$file$1 = "/Users/achilan/repositories/astro-movies/src/pages/tv/index.astro";
const $$url$1 = "/movie-finder/tv";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "MovieFinder" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MovieList", $$Index$5, {})} ` })}`;
}, "/Users/achilan/repositories/astro-movies/src/pages/index.astro", void 0);

const $$file = "/Users/achilan/repositories/astro-movies/src/pages/index.astro";
const $$url = "/movie-finder";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index$6 as $, index$5 as a, index$4 as b, index$3 as c, index$2 as d, index$1 as e, index as f, index$6 as i };
