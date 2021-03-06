"use strict";

// This file contains code that we reuse
// between our tests.

const fastify = require("fastify");
const fp = require("fastify-plugin");
const app = require("../app");

// Fill in this config with all the configurations
// needed for testing the application
function config () {
  return {};
}

// automatically build and tear down our instance
function build (t) {
  const fapp = fastify();

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  app.register(fp(fapp), config());

  // tear down our app after we are done
  t.tearDown(app.close.bind(app));

  return app;
}

module.exports = {
  config,
  build
};
