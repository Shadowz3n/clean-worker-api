declare global {
  const JWT_SECRET_KEY: string;
  const FAUNADB_API: string;
  const FAUNADB_SECRET: string;
}

export default {
  JWT_SECRET_KEY: JWT_SECRET_KEY || '',
  FAUNADB_API: FAUNADB_API || '',
  FAUNADB_SECRET: FAUNADB_SECRET || 'c2RnZnNkZmdoZnNkaGdmZA',
};
