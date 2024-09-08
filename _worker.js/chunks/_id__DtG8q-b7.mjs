globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => import('./pages/_id__D4P___zI.mjs').then(n => n.d);

export { page };
