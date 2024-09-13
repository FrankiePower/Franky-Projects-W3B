const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TodoContract", function () {
  async function deployTodoContract() {
    const Todo = await ethers.getContractFactory("Todo");
    const todo = await Todo.deploy();

    return { todo };
  }

  describe("Deployment", function () {
    it("should create a Todo", async function () {
      //Deploy the Todo contract for this test
      const { todo } = await loadFixture(deployTodoContract);

      // Create a Todo
      const title = "Cook Breakfast";
      const description = "Bacon, Baked beans and Bread";
      await todo.createTodo(title, description);

      // Retrieve the Created Todo item
      const createdTodo = await todo.getTodo(0);

      // Verify the details of the created Todo item
      expect(createdTodo.title).to.equal(title);
      expect(createdTodo.description).to.equal(description);
      expect(createdTodo.isDone).to.be.false;
    });
  });

  it("should update the status of a Todo", async function () {
    //Deploy the Todo contract for this test
    const { todo } = await loadFixture(deployTodoContract);

    // Create a Todo e.g.
    const title = "Wash Clothes";
    const description = "Soak the whites with bleach first";
    await todo.createTodo(title, description);

    // Retrieve the Created Todo item
    const createdTodo = await todo.getTodo(0);

    // Verify the status the created Todo item
    expect(createdTodo.isDone).to.be.false;

    // Update the status of the Todo
    await todo.updateStatus(0);

    // Verify the status to be updated
    const updatedTodo = await todo.getTodo(0);
    expect(updatedTodo.isDone).to.be.true;
  });

  it("should retrieve all Todos", async function () {
    // Again we deploy an instance of the Todo Contract
    const { todo } = await loadFixture(deployTodoContract);

    // Create 2 todo
    const title1 = "Read for test";
    const description1 = "Read the Ethereum book";
    const title2 = "Chill a bit";
    const description2 = "Watch One Piece";
    await todo.createTodo(title1, description1);
    await todo.createTodo(title2, description2);

    // Lets also update the status for the second todo.
    await todo.updateStatus(1);

    // Remember we are looking to retrieve all the todo items.
    const allTodo = await todo.getTodos();

    // Check the details of the first Todo
    expect(allTodo[0].title).to.equal(title1);
    expect(allTodo[0].description).to.equal(description1);
    expect(allTodo[0].isDone).to.be.false;

    // Before checking the details of the second
    expect(allTodo[1].title).to.equal(title2);
    expect(allTodo[1].description).to.equal(description2);
    expect(allTodo[1].isDone).to.be.true;
  });
});
