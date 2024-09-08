globalThis.process ??= {}; globalThis.process.env ??= {};
import '../@astrojs_XkseP6bl.mjs';
import { a as createComponent, r as renderTemplate, b as renderComponent } from '../../renderers.mjs';
import '../kleur_BcFxsYqz.mjs';
import { $ as $$Layout } from './_id__D4P___zI.mjs';
import { $ as $$Index } from './index_B9YQ2sj4.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "MovieFinder \u2014 About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "About", $$Index, {})} ` })}`;
}, "/Users/achilan/repositories/astro-movies/src/pages/about.astro", void 0);

const $$file = "/Users/achilan/repositories/astro-movies/src/pages/about.astro";
const $$url = "/movie-finder/about";

export { $$About as default, $$file as file, $$url as url };
