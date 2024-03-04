// Sorry, the code is kind of messy, but it works!!
var pencilSounds = ["assets/1.mp3", "assets/2.mp3", "assets/3.mp3", "assets/4.mp3", "assets/5.mp3", "assets/6.mp3", "assets/7.mp3", "assets/8.mp3", "assets/9.mp3", "assets/10.mp3",
"assets/11.mp3", "assets/12.mp3", "assets/13.mp3", "assets/14.mp3", "assets/15.mp3", "assets/16.mp3", "assets/17.mp3", "assets/18.mp3", "assets/19.mp3", "assets/20.mp3"];
var r = randomNumber(128, 255);
var g = randomNumber(128, 255);
var b = randomNumber(128, 255);
var a = (randomNumber(0, 10) / 10);
var ang = randomNumber(0, 360);
var fadeCounter = 0;
var distance = 1;
var soundSpeed = 100;

var bgMusic = true;
var sfx = true;
var screenWrap = true;
var colorVariation = 2;
var angIntensity = 90;
var start = false;
var inPanel = true;
var diy = false;
var diyX = 0;
var diyY = 0;

onEvent("start", "click", function () {
  start = true;
  init();
  draw();
  hideElement("start");
  showElement("panelButton");
  showElement("pencil");
  showElement("diy");
});

onEvent("diy", "click", function () {
  diy = !diy;
  if(diy)
  {
    diyDraw();
    playSound("assets/category_tap/vibrant_ui_mouse_click_2.mp3", false);
  }
  else if(sfx && !diy)
  {
    draw();
    playSound("assets/category_tap/vibrant_tone_button_8.mp3", false);
  }
});

onEvent("musicCheck", "click", function () {
  bgMusic = !bgMusic;
  (bgMusic) ? playSound("assets/bgmusic.mp3", true) : stopSound("assets/bgmusic.mp3");
  if(sfx) playSound("assets/category_accent/puzzle_game_accent_a_02.mp3", false);
});

onEvent("sfxCheck", "click", function () {
  sfx = !sfx;
  (sfx) ? playSound("assets/scribble_.mp3", true) : stopSound("assets/scribble_.mp3");
  if(sfx) playSound("assets/category_accent/puzzle_game_accent_a_02.mp3", false);
});

onEvent("wrapCheck", "click", function () {
  screenWrap = !screenWrap;
  if(sfx) playSound("assets/category_accent/puzzle_game_accent_a_02.mp3", false);
});

onEvent("panelButton", "click", function() {
  inPanel = !inPanel;
  if(!inPanel)
  {
    showElement("controlPanel");
    showElement("angSlider");
    showElement("colorSlider");
    showElement("distanceSlider");
    showElement("musicCheck");
    showElement("sfxCheck");
    showElement("wrapCheck");
    showElement("restartButton");
    showElement("resetEverything");
    showElement("distance");
    showElement("colorVar");
    showElement("angle");
    showElement("music");
    showElement("sfx");
    showElement("screenwrap");
    showElement("exit");
    if (sfx) playSound("assets/category_tap/puzzle_game_affirmation_dry_metal_ui_button_1.mp3", false);
  }
  else
  {
    hidePanel();
    if (sfx) playSound("assets/category_tap/slight_negative_select_1.mp3", false);
  }
});

onEvent("exit", "click", function() {
  hidePanel();
  inPanel = !inPanel;
  if (sfx) playSound("assets/category_tap/slight_negative_select_1.mp3", false);
});

onEvent("restartButton", "click", function() {
  penRGB(255, 255, 255, 1);
  penWidth(10000);
  moveTo(960, 475);
  moveForward(0.1);
  r = randomNumber(128, 255);
  g = randomNumber(128, 255);
  b = randomNumber(128, 255);
  if(sfx) playSound("assets/category_tap/puzzle_game_organic_wood_block_tone_tap_1.mp3", false);
});

onEvent("resetEverything", "click", function() {
  var play;
  var playfx;
  if(!bgMusic) play = true;
  if(!sfx) play = true;
  var temp = distance;
  distance = 1;
  setProperty("distanceSlider", "value", 4);
  soundSpeed = 100;
  if(distance != temp) {drawingSound();}
  
  setProperty("colorSlider", "value", 2);
  setProperty("angSlider", "value", 90);
  setProperty("musicCheck", "checked", true);
  setProperty("sfxCheck", "checked", true);
  setProperty("wrapCheck", "checked", true);
  colorVariation = 2;
  angIntensity = 90;
  bgMusic = true;
  sfx = true;
  screenWrap = true;
  playSound("assets/category_tap/puzzle_game_organic_wood_block_tone_tap_4_app_click.mp3", false);
  if (play) playSound("assets/bgmusic.mp3", true);
  if (playfx) playSound("assets/scribble_.mp3", true);
});

onEvent("distanceSlider", "input", function() 
{
  var temp = distance;
  if(sfx) playSound("assets/category_tap/puzzle_game_organic_metallic_button_1.mp3", false);
  distance = (getProperty("distanceSlider", "value") / 4);
  soundSpeed = 100 / (distance / 2);
  if(distance != temp) {drawingSound();}
});

onEvent("screen", "mousemove", function(event) {
  if(!diy) return;
  diyY = event.y;
  diyX = event.x;
});

onEvent("colorSlider", "input", function() 
{
  colorVariation = getProperty("colorSlider", "value");
  if(sfx) playSound("assets/category_tap/puzzle_game_organic_metallic_button_1.mp3", false);
});

onEvent("angSlider", "input", function() 
{
  angIntensity = getProperty("angSlider", "value");
  if(sfx) playSound("assets/category_tap/puzzle_game_organic_metallic_button_1.mp3", false);
});

function diyDraw()
{
  var diyloop = timedLoop(250, function()
  {
    console.log("g");
    fadeCounter += (0.0001 * distance);
    if(fadeCounter > (0.01 * distance))
    {
      fadeCounter = 0;
    }
    penRGB(255, 255, 255, fadeCounter);
    penWidth(10000);
    moveForward(0.01);
    var diyloop2 = timedLoop(1, function ()
    {
      r += randomNumber(-colorVariation, colorVariation);
      g += randomNumber(-colorVariation, colorVariation);
      b += randomNumber(-colorVariation, colorVariation);
      a += (randomNumber(-1, 1) / 10);
      check();
      penWidth(randomNumber(1, 20));
      penRGB(r, g, b, a);
      
      moveTo(diyX, diyY);
      
      setProperty("pencil", "x", getX()-5);
      setProperty("pencil", "y", getY()-45);
      if(!diy)
      {
        stopTimedLoop(diyloop2);
      }
    });
    if(!diy) stopTimedLoop(diyloop);
  });
}

function draw() 
{
  var drawloop = timedLoop(250, function()
  {
    fadeCounter += (0.0001 * distance);
    if(fadeCounter > (0.01 * distance))
    {
      fadeCounter = 0;
    }
    penRGB(255, 255, 255, fadeCounter);
    penWidth(10000);
    moveForward(0.01);
    var drawloop2 = timedLoop(1, function ()
    {
      var counter = 0;
      r += randomNumber(-colorVariation, colorVariation);
      g += randomNumber(-colorVariation, colorVariation);
      b += randomNumber(-colorVariation, colorVariation);
      a += (randomNumber(-1, 1) / 10);
      ang += randomNumber(angIntensity, -angIntensity);
      check();
      penWidth(randomNumber(1, 10));
      penRGB(r, g, b, a);
      turnTo(ang);
      
      var flip = randomNumber(0, 1);
      (flip == 0) ? moveForward(distance, distance * 2) : moveBackward(distance, distance * 2);
      
      setProperty("pencil", "x", getX()-5);
      setProperty("pencil", "y", getY()-45);
      counter++;
      if(counter >= 20 || diy)
      {
        stopTimedLoop(drawloop2);
      }
    });
    if(diy) stopTimedLoop(drawloop);
  });
}

function drawingSound()
{
  var temp = soundSpeed;
  var time = timedLoop(soundSpeed, function() {
    var sound = pencilSounds[randomNumber(0, pencilSounds.length-1)];
    if(distance >= 1.5 && sfx) {playSound(sound, false);}
    if(temp != soundSpeed)
    {
      stopTimedLoop(time);
    }
  });
}


function check()
{
  if (r > 255)
  {
    r = 255;
  }
  else if(r < 0)
  {
    r = 0;
  }
  if (g > 255)
  {
    g = 255;
  }
  else if(g < 0)
  {
    g = 0;
  }
  if (b > 255)
  {
    b = 255;
  }
  else if(b < 0)
  {
    b = 0;
  }
  if(a > 1)
  {
    a = 1;
  }
  else if(a < 0)
  {
    a = 0;
  }

  if (diy) return;
  if(ang > 360)
  {
    ang = 0;
  }
  else if (ang < 0)
  {
    ang = 360;
  }
  var x = getX();
  var y = getY();
  if(screenWrap)
  {
    penUp();
    if(x > 1930)
    {
      moveTo(-10, y);
    }
    else if(x < -10)
    {
      moveTo(1930, y);
    }
    if(y > 1030)
    {
      moveTo(x, -10);
    }
    else if(y < -10)
    {
      moveTo(x, 1030);
    }
    penDown();
  }
  else
  {
    if(x > 1920)
    {
      moveTo(1920, y);
    }
    else if(x < 0)
    {
      moveTo(0, y);
    }
    if(y > 1080)
    {
      moveTo(x, 1080);
    }
    else if(y < 0)
    {
      moveTo(x, 0);
    }
  }
}

function init()
{
  hide();
  
  playSound("assets/category_notifications/game_notification_81.mp3", false);
  playSound("assets/scribble_.mp3", true);
  playSound("assets/bgmusic.mp3", true);
  
  drawingSound();
}

function hidePanel()
{
  hideElement("controlPanel");
  hideElement("angSlider");
  hideElement("colorSlider");
  hideElement("distanceSlider");
  hideElement("musicCheck");
  hideElement("sfxCheck");
  hideElement("wrapCheck");
  hideElement("restartButton");
  hideElement("resetEverything");
  hideElement("distance");
  hideElement("colorVar");
  hideElement("angle");
  hideElement("music");
  hideElement("sfx");
  hideElement("screenwrap");
  hideElement("exit");
}
