
describe("Game", function() {
  var game = new Game();
  it("exists", function() {
    expect(game).toBeDefined();
  });

  it("has a car", function() {
    expect(game.car instanceof Car).toBe(true);
  });

  it("has an array of obstacles", function() {
    expect(game.obstacles).toEqual([]);
  });

  it("has a start time", function() {
    expect(game.startTime).toBeDefined();
  });

  it("has an end time", function() {
    expect(game.endTime).toBeDefined();
  });

  it("has a playing variable", function() {
    expect(game.playing).toBeDefined();
  });

  it("starts", function() {
    game.begin();
    expect(game.isPlaying()).toEqual(true);
  });

  it("ends", function() {
    game.begin();
    game.end();
    expect(game.isPlaying()).toEqual(false);
  });

  it("sets the start time", function(){
    game._setStartTime();
    expect(game.startTime).not.toBe(null);
  });

  it("sets the end time", function(){
    game._setStartTime();
    game._setEndTime();
    expect(game.endTime).not.toBe(null);
  });

  it("calculates the final duration of the game", function(){
    var dummyStartDate = new Date(2017,4,5,10,0,0);
    var dummyEndDate = new Date(2017,4,5,10,0,5);
    var spy = spyOn(window, 'Date').and.returnValue(dummyStartDate);
    game._setStartTime();
    spy.and.returnValue(dummyEndDate);
    game._setEndTime();
    expect(game.getDuration()).toEqual(5000);
  });

  it("calculates the current duration of the game", function(){
    var dummyStartDate = new Date(2017,4,5,10,0,0);
    var dummyEndDate = new Date(2017,4,5,10,0,5);
    var spy = spyOn(window, 'Date').and.returnValue(dummyStartDate);
    game._setStartTime();
    spy.and.returnValue(dummyEndDate);
    expect(game.getCurrentDuration()).toEqual(5000);
  });
});

describe("Game functionality", function(){
  var game = new Game();

  it("starts timing when the game begins", function(){
    game.begin();
    expect(game.startTime).not.toBe(null);
  });

  it("ends timing when the game ends", function(){
    game.begin();
    game.end();
    expect(game.endTime).not.toBe(null);
  });

  it("calculates duration at the end of a game", function(){
    var dummyStartDate = new Date(2017,4,5,10,0,0);
    var dummyEndDate = new Date(2017,4,5,10,0,5);
    var spy = spyOn(window, 'Date').and.returnValue(dummyStartDate);
    game.begin();
    spy.and.returnValue(dummyEndDate);
    expect(game.end()).toEqual(5000);
  });

  it("can add an obstable to an array of obstacles", function(){
    game.addObstacle(1);
    expect(game.obstacles).toEqual([1]);
  });

});
