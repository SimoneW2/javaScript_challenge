describe("Menu", function() {

  // beforeEach(function() {
  //   menu = new Menu();
  // });

  it("Should list dishes with prices", function(){
    menu = new Menu();
    menu.print(dishes);
    var dishes = {chicken:3.99, veg:1.99, souffle:2.99};
    var printedMenu = {chicken:3.99, veg:1.99, souffle:2.99};
    expect(menu.print()).toEqual(printedMenu)
  });
});
