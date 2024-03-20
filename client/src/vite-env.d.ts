/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PB_HOST: string
  readonly VITE_PB_ADMIN_EMAIL: string
  readonly VITE_PB_ADMIN_PASS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
