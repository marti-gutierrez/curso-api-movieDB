/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_KEY: string;
  readonly PUBLIC_MOVIEDB_API: string;
  readonly PUBLIC_MDB_IMAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
