globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_B9YQ2sj4.mjs').then(n => n.b);

export { page };
