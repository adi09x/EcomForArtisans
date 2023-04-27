module.exports = ({ env }) => ({
  host: env("HOST", "ecomforartisans.onrender.com"),
  port: env.int("PORT", 1337),
  url: env("PUBLIC_URL", "https://ecomforartisans.onrender.com/admin"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
