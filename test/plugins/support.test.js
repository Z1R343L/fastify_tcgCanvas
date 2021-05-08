"use strict";

const { test } = require("tap");
const fastify = require("fastify");
const support = require("../../plugins/support");

test("support works standalone", async (t) => {
  const fastify = fastify();
  fastify.register(support);

  await fastify.ready();
  t.equal(fastify.someSupport(), "hugs");
});

// You can also use plugin with opts in fastify v2
//
// test('support works standalone', (t) => {
//   t.plan(2)
//   const fastify = fastify()
//   fastify.register(Support)
//
//   fastify.ready((err) => {
//     t.error(err)
//     t.equal(fastify.someSupport(), 'hugs')
//   })
// })
