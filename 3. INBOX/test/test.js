const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("Inbox Contract", function () {
  async function deployInboxContract() {
    const initialMessage = "Hey Frankie";

    const [owner, otherAccount] = await ethers.getSigners();

    const Inbox = await ethers.getContractFactory("Inbox");
    const inbox = await Inbox.deploy(initialMessage);

    return { inbox, initialMessage, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("should set the initial message", async function () {
      const { inbox, initialMessage } = await loadFixture(deployInboxContract);
      expect(await inbox.message()).to.equal(initialMessage);
    });
  });

  describe("setMessage", function () {
    it("should update the message", async function () {
      const { inbox } = await loadFixture(deployInboxContract);
      const newMessage = "How are you doing?";
      await inbox.setMessage(newMessage);
      expect(await inbox.message()).to.equal(newMessage);
    });

    it("should allow any account to set the message", async function () {
      const { inbox, otherAccount } = await loadFixture(deployInboxContract);
      const newMessage = "Message from another account";
      await inbox.connect(otherAccount).setMessage(newMessage);
      expect(await inbox.message()).to.equal(newMessage);
    });
  });
});
