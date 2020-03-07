/* eslint-disable no-undef */

const { getFs, getSettings, writeFs, deleteFs } = require("./../lib/firebase");
const { getAssetsData } = require("stackedboost-shopify-assets")

const { expect, assert } = require("chai");
// eslint-disable-next-line no-unused-vars
const should = require("chai").should();

// values
const collecton = "users";


// const token = "05527b4ce9d076a0a8aad6f8857f5e13";


describe("Firestore", () => {
    describe("getSettings()", () => {
        it("Return shop settings from Firestore as a Object", async () => {
            const settings = await getSettings(app);
            assert.isObject(settings, 'Settings is OK!')
            expect(settings.script).to.be.a("string");
        });
    });

    describe("getFs()", () => {
        it("Return Firestore Object with shops data", async () => {
            const shopData = await getFs(app, shop);
            expect(shopData).to.be.a("object");
            const shopDataSpecfic = await getFs(app, shop);
            expect(shopDataSpecfic.email).to.be.a("string");
        });
    });


    describe("writeFs()", () => {
        it("Write to Firestore and return a object with write confirmation", async () => {
            const shopData = await writeFs(app, shop, data);
            assert.isObject(shopData, 'writeFs is OK!')
        });
    });


    describe("deleteFs()", () => {
        it("Write to Firestore and then Delete the data, Return a object with delete confirmation", async () => {
            await writeFs(app, 'mocha-test', data);
            const deleted = await deleteFs(app, 'mocha-test');
            assert.isObject(deleted, 'deleteFs is OK!')
        });
    });
});


