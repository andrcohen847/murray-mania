"use strict";

const db = require("../server/db");
const { User } = require("../server/db/models");
const faker = require("faker");

const generateUsers = async () => {
  for (let i = 0; i < 50; i++) {
    await User.create({
      email: faker.internet.email(),
      password: faker.internet.password()
    });
  }
};

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  // Creates 50 random users
  await Promise.all([generateUsers()]);

  // Creates admin user we can access
  await User.create({
    email: "admin@gmail.com",
    password: "admin",
    isAdmin: true
  });

  // Associate Dummy Product with Dummy order as an Order Item

  console.log(`seeded users`);
  console.log(`seeded products`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
