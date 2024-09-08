globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DKQGUwCJ.mjs';
import { c as createExports, b as serverEntrypointModule } from './chunks/@astrojs_XkseP6bl.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./renderers.mjs').then(n => n.h);
const _page1 = () => import('./chunks/about_HknyXybY.mjs');
const _page2 = () => import('./chunks/index_B76FU2Ix.mjs');
const _page3 = () => import('./chunks/_id__Di0DClTQ.mjs');
const _page4 = () => import('./chunks/index_DL_1TQWx.mjs');
const _page5 = () => import('./chunks/_id__CrLJTRmO.mjs');
const _page6 = () => import('./chunks/index_B_VfcHu8.mjs');
const _page7 = () => import('./chunks/_id__Bi_CsAcO.mjs');
const _page8 = () => import('./chunks/index_BZTf9wnn.mjs');
const _page9 = () => import('./chunks/_id__DFRRFnJk.mjs');
const _page10 = () => import('./chunks/_id__DtG8q-b7.mjs');
const _page11 = () => import('./chunks/index_CXNQuJnt.mjs');
const _page12 = () => import('./chunks/_id__BA4SgYVZ.mjs');
const _page13 = () => import('./chunks/index_3a9ZnKP8.mjs');
const _page14 = () => import('./chunks/index_Dacj4RQ4.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/fragments/About/index.astro", _page2],
    ["src/pages/fragments/MovieDetails/[id].astro", _page3],
    ["src/pages/fragments/MovieList/index.astro", _page4],
    ["src/pages/fragments/PersonDetails/[id].astro", _page5],
    ["src/pages/fragments/PersonList/index.astro", _page6],
    ["src/pages/fragments/TvDetails/[id].astro", _page7],
    ["src/pages/fragments/TvList/index.astro", _page8],
    ["src/pages/movies/[id].astro", _page9],
    ["src/pages/people/[id].astro", _page10],
    ["src/pages/people/index.astro", _page11],
    ["src/pages/tv/[id].astro", _page12],
    ["src/pages/tv/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
