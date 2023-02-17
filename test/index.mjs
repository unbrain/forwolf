import test from "ava";
import request from "superkoa";
import app from "../app.js";

test("GET /", async (t) => {
  // console.log(t);
  const res = await request(app).get("/");
  t.is(res.status, 200);
});

// import test from 'ava';

// test('foo', t => {
// 	t.pass();
// });

// test('bar', async t => {
// 	const bar = Promise.resolve('bar');
// 	t.is(await bar, 'bar');
// });

// test.before.cb((t) => {
//   setTimeout(() => {
//     // body
//     t.end();
//   }, 2000);
// });

// test("#save", (t) => {
//   let user = new User({
//     username: "i5ting",
//     password: "012345",
//   });

//   user.save((err, u) => {
//     if (err) log(err);
//     t.is(u.username);
//   });
// });
