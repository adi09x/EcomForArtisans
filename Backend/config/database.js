// const path = require('path');

// module.exports = ({ env }) => {
//   const client = env('DATABASE_CLIENT', 'sqlite');

//   const connections = {
//     mysql: {
//       connection: {
//         connectionString: env('DATABASE_URL'),
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//       },
//       pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     },
//     postgres: {
//       connection: {
//         connectionString: env('DATABASE_URL'),
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//         schema: env('DATABASE_SCHEMA', 'public'),
//       },
//       pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     },
//     sqlite: {
//       connection: {
//         filename: path.join(
//           __dirname,
//           '..',
//           env('DATABASE_FILENAME', 'data.db')
//         ),
//       },
//       useNullAsDefault: true,
//     },
//   };

//   return {
//     connection: {
//       client,
//       ...connections[client],
//       acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
//     },
//   };
// };

// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env(
//         "DATABASE_HOST",
//         "dpg-cgvqurqut4mc4ka58lcg-a.singapore-postgres.render.com"
//       ),
//       // port: env.int("DATABASE_PORT", 5432),
//       // database: env("DATABASE_NAME", "neondb"),
//       // user: env("DATABASE_USERNAME", "br-proud-lab-876536"),
//       // password: env("DATABASE_PASSWORD", "jk8iSZ4cegzh"),
     
//       schema: env("DATABASE_SCHEMA", "public"), // Not required,
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//       },
//     },
//     debug: true,
//   },
// });

// postgres://artist_user:WwD9htPqWhAEfwFt6pVWJuZhof95EsOv@dpg-cgvqurqut4mc4ka58lcg-a.singapore-postgres.render.com/artist




// new database config for hosting 


const path = require("path");

module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT","postgres");

  const connections = {
    // mysql: {
    //   connection: {
    //     connectionString: env("DATABASE_URL"),
    //     host: env("DATABASE_HOST", "localhost"),
    //     port: env.int("DATABASE_PORT", 3306),
    //     database: env("DATABASE_NAME", "strapi"),
    //     user: env("DATABASE_USERNAME", "strapi"),
    //     password: env("DATABASE_PASSWORD", "strapi"),
    //     ssl: env.bool("DATABASE_SSL", false) && {
    //       key: env("DATABASE_SSL_KEY", undefined),
    //       cert: env("DATABASE_SSL_CERT", undefined),
    //       ca: env("DATABASE_SSL_CA", undefined),
    //       capath: env("DATABASE_SSL_CAPATH", undefined),
    //       cipher: env("DATABASE_SSL_CIPHER", undefined),
    //       rejectUnauthorized: env.bool(
    //         "DATABASE_SSL_REJECT_UNAUTHORIZED",
    //         true
    //       ),
    //     },
    //   },
    //   pool: {
    //     min: env.int("DATABASE_POOL_MIN", 2),
    //     max: env.int("DATABASE_POOL_MAX", 10),
    //   },
    // },
    // mysql2: {
    //   connection: {
    //     host: env("DATABASE_HOST", "localhost"),
    //     port: env.int("DATABASE_PORT", 3306),
    //     database: env("DATABASE_NAME", "strapi"),
    //     user: env("DATABASE_USERNAME", "strapi"),
    //     password: env("DATABASE_PASSWORD", "strapi"),
    //     ssl: env.bool("DATABASE_SSL", false) && {
    //       key: env("DATABASE_SSL_KEY", undefined),
    //       cert: env("DATABASE_SSL_CERT", undefined),
    //       ca: env("DATABASE_SSL_CA", undefined),
    //       capath: env("DATABASE_SSL_CAPATH", undefined),
    //       cipher: env("DATABASE_SSL_CIPHER", undefined),
    //       rejectUnauthorized: env.bool(
    //         "DATABASE_SSL_REJECT_UNAUTHORIZED",
    //         true
    //       ),
    //     },
    //   },
    //   pool: {
    //     min: env.int("DATABASE_POOL_MIN", 2),
    //     max: env.int("DATABASE_POOL_MAX", 10),
    //   },
    // },
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"),
        host: env(
          "DATABASE_HOST",
          "postgres://WrongMice:jk8iSZ4cegzh@ep-curly-smoke-447791.ap-southeast-1.aws.neon.tech/EcomForArtisans"
        ),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "EcomForArtisans"),
        user: env("DATABASE_USERNAME", "WrongMice"),
        password: env("DATABASE_PASSWORD", "jk8iSZ4cegzh"),
        ssl: env.bool("DATABASE_SSL", false) && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
        schema: env("DATABASE_SCHEMA", "public"),
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
    // sqlite: {
    //   connection: {
    //     filename: path.join(
    //       __dirname,
    //       "..",
    //       env("DATABASE_FILENAME", "data.db")
    //     ),
    //   },
    //   useNullAsDefault: true,
    // },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
