// Re-export so Nuxt's ESM-based auto-import resolver can locate `usePrimeVue`.
// PrimeVue 3 ships `primevue/config` without an `exports` map (directory entry
// only), which CJS resolves but native ESM does not.
export { usePrimeVue } from 'primevue/config';
