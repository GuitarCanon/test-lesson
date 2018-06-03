const axios = require("axios");
const { expect } = require('chai');

// const app = require("./app");
// const supertest = require("supertest");
// function request() {
//     return supertest(app.listen());
// }
describe("后台接口测试", function() {
    it("test接口测试", (done) => {
        // 两种方式
        // 1
        axios.get("http://localhost:3000/test")
        .then(function(res) {
            expect(res.status).to.equal(200);
            if (res.data.data == "Hello World") {
                done();
            } else {
                done(new Error("结果不符合预期"));
            }
        }).catch(function(error) {
            done(error);
        });
        // 2
        // request("http://localhost:3000/test")
        // .expect('Content-Type', /json/)
        // .expect(200)
        // .end(function (response) {
        //     console.log(response);
        //     if (res.data === "Hello World") {
        //         done();
        //     } else {
        //         done(err);
        //     }
        // })
    })
})