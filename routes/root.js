'use strict';

const { resolveImage, Canvas } = require("canvas-constructor");

const cardHight = 342;
const cardWidth = 245;
const cards_url = "https://images.pokemontcg.io/";
const dummyCard = "basep-38";
const def_bg = "https://cdn.discordapp.com/attachments/745028626206031973/840358497110589440/TmNB9Rj.jpg";

function resolveCard(cId) {
  const cs = cId.split('-');
  const curl = cards_url + cs[0] + "/" + cs[1] + ".png";
  return curl;
}

async function drawTable(rq)  {
  let col; if (!rq.col) {col = 5} else {col=rq.col}
  let padding; if (!rq.padding) {padding=15} else {padding=parseInt(rq.padding)}
  let bguri; if(!rq.bg) {bguri = def_bg;} else {bguri = rq.bg}
  let card0; if (!rq.c0) {card0 = dummyCard;} else {card0 = rq.c0;}
  let card1; if (!rq.c1) {card1 = dummyCard;} else {card1 = rq.c1;}
  let card2; if (!rq.c2) {card2 = dummyCard;} else {card2 = rq.c2;}
  let card3; if (!rq.c3) {card3 = dummyCard;} else {card3 = rq.c3;}
  let card4; if (!rq.c4) {card4 = dummyCard;} else {card4 = rq.c4;}
  let card5; if (!rq.c5) {card5 = dummyCard;} else {card5 = rq.c5;}
  let card6; if (!rq.c6) {card6 = dummyCard;} else {card6 = rq.c6;}
  let card7; if (!rq.c7) {card7 = dummyCard;} else {card7 = rq.c7;}
  let card8; if (!rq.c8) {card8 = dummyCard;} else {card8 = rq.c8;}
  let card9; if (!rq.c9) {card9 = dummyCard;} else {card9 = rq.c9;}
  const bgi = await resolveImage(bguri);
  const ci0 = await resolveImage(resolveCard(card0));
  const ci1 = await resolveImage(resolveCard(card1));
  const ci2 = await resolveImage(resolveCard(card2));
  const ci3 = await resolveImage(resolveCard(card3));
  const ci4 = await resolveImage(resolveCard(card4));
  const ci5 = await resolveImage(resolveCard(card5));
  const ci6 = await resolveImage(resolveCard(card6));
  const ci7 = await resolveImage(resolveCard(card7));
  const ci8 = await resolveImage(resolveCard(card8));
  const ci9 = await resolveImage(resolveCard(card9));
  const lin1 = padding;
  const lin2 = lin1 + padding + cardHight;
  const lin3 = lin2 + padding + cardHight;
  const col1 = padding;
  const col2 = col1 + padding + cardWidth;
  const col3 = col2 + padding + cardWidth;
  const col4 = col3 + padding + cardWidth;
  const col5 = col4 + padding + cardWidth;
  let canvas_w;
  let canvas_h;
  let c0col;
  let c0lin;
  let c1col;
  let c1lin;
  let c2col;
  let c2lin;
  let c3col;
  let c3lin;
  let c4col;
  let c4lin;
  let c5col;
  let c5lin;
  let c6col;
  let c6lin;
  let c7col;
  let c7lin;
  let c8col;
  let c8lin;
  let c9col;
  let c9lin;
  if (col === 5) {
    canvas_w = (cardWidth*5) + (padding*6);
    canvas_h = (cardHight*2) + (padding*3);
    c0col = col1;
    c0lin = lin1
    c1col = col2;
    c1lin = lin1;
    c2col = col3;
    c2lin = lin1;
    c3col = col4;
    c3lin = lin1;
    c4col = col5;
    c4lin = lin1;
    c5col = col1;
    c5lin = lin2;
    c6col = col2;
    c6lin = lin2;
    c7col = col3;
    c7lin = lin2;
    c8col = col4;
    c8lin = lin2;
    c9col = col5;
    c9lin = lin2;
  } else {
    canvas_w = (cardWidth*4) + (padding*5);
    canvas_h = (cardHight*3) + (padding*4);
    c0col = col1;
    c0lin = lin1;
    c1col = col2;
    c1lin = lin1;
    c2col = col3;
    c2lin = lin1;
    c3col = col4;
    c3lin = lin1;
    c4col = col1;
    c4lin = lin2;
    c5col = col2;
    c5lin = lin2;
    c6col = col3;
    c6lin = lin2;
    c7col = col4;
    c7lin = lin2;
    c8col = col1;
    c8lin = lin3;
    c9col = col2;
    c9lin = lin3;
  }
  const buffer = await new Canvas(canvas_w, canvas_h)
      .printImage(bgi, 0, 0)
      .printImage(ci0, c0col, c0lin)
      .printImage(ci1, c1col, c1lin)
      .printImage(ci2, c2col, c2lin)
      .printImage(ci3, c3col, c3lin)
      .printImage(ci4, c4col, c4lin)
      .printImage(ci5, c5col, c5lin)
      .printImage(ci6, c6col, c6lin)
      .printImage(ci7, c7col, c7lin)
      .printImage(ci8, c8col, c8lin)
      .printImage(ci9, c9col, c9lin)
      .toBufferAsync();
  return buffer;
}

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    const rq = request.query;
    reply.type("image/png");
    await drawTable(rq).then(b => {
      reply.send(b);
    })
  })
}
