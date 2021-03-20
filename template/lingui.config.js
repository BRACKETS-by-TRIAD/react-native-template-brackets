module.exports = {
  locales: ['en'],
  format: 'po',
  catalogs: [
    {
      path: './app/locales/{locale}/messages',
      include: ['./app'],
    },
  ],
}
