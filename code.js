// Sorry, the code is kind of messy, but it works!!
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var pencilSounds = ["assets/1.mp3", "assets/2.mp3", "assets/3.mp3", "assets/4.mp3", "assets/5.mp3", "assets/6.mp3", "assets/7.mp3", "assets/8.mp3", "assets/9.mp3", "assets/10.mp3",
"assets/11.mp3", "assets/12.mp3", "assets/13.mp3", "assets/14.mp3", "assets/15.mp3", "assets/16.mp3", "assets/17.mp3", "assets/18.mp3", "assets/19.mp3", "assets/20.mp3"];
var tallLongImg = ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Sour-Patch-Kids.jpg/640px-Sour-Patch-Kids.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/IPhone_14_Pro_vector.svg/640px-IPhone_14_Pro_vector.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/A_Footlong_%2827141370446%29.jpg/640px-A_Footlong_%2827141370446%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Guitar_1.jpg/640px-Guitar_1.jpg", "https://lh3.googleusercontent.com/drive-viewer/AKGpihZP8hCrY-cnRSL6vXOi8imND5WxRiF2y4ZIB3nSy51uzNTOsNzbVljMyw4Lkq7Fmshg3XuZxec9IJ1XQHu00twdaMKI=s2560", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Teletubbies_cake.jpg/640px-Teletubbies_cake.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Leiter_ladder.jpg/640px-Leiter_ladder.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Canoe_and_duck_-_geograph.org.uk_-_949285.jpg/640px-Canoe_and_duck_-_geograph.org.uk_-_949285.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Badminton_at_the_2012_Summer_Olympics_9476.jpg/640px-Badminton_at_the_2012_Summer_Olympics_9476.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Badaling_China_Great-Wall-of-China-01.jpg/640px-Badaling_China_Great-Wall-of-China-01.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/20200512_Mercedes_HYMER_Hymermobil.jpg/640px-20200512_Mercedes_HYMER_Hymermobil.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Newby-McMahon_Building%2C_1919.JPG/375px-Newby-McMahon_Building%2C_1919.JPG", "https://lh3.googleusercontent.com/drive-viewer/AKGpihYmD1dnDgVBayW1OnspZHDNQYT1LT6rXkjE1BlcDtcZFoEcl9sGdVVv_IE45otWD_3lXrEIUgyDWqkPbHtxn698tGjDiA=s2560", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Candlepin-bowling-usa-lanes-rs.jpg/640px-Candlepin-bowling-usa-lanes-rs.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/The_Pentagon%2C_cropped_square.png/360px-The_Pentagon%2C_cropped_square.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Jan_Pawel_2_Elementary_School_in_Gowidlino_-_Playground%2C_Soccer_Field%2C_and_Basketball_Court_%283%29.jpg/640px-Jan_Pawel_2_Elementary_School_in_Gowidlino_-_Playground%2C_Soccer_Field%2C_and_Basketball_Court_%283%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/9/9b/Nagwamatse%2C_10_story_building_kaduna.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Statue_of_Liberty%2C_NY.jpg/640px-Statue_of_Liberty%2C_NY.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg/640px-The_Leaning_Tower_of_Pisa_SB.jpeg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Thai_Airways_International_Boeing_747-4D7_HS-TGP_MUC_2015_03.jpg/640px-Thai_Airways_International_Boeing_747-4D7_HS-TGP_MUC_2015_03.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Capitol_Building_Full_View.jpg/450px-Capitol_Building_Full_View.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/ViewfromHollowRedwoodTree.jpg/640px-ViewfromHollowRedwoodTree.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/640px-International_Space_Station_after_undocking_of_STS-132.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Los_Angeles_City_Hall_%28color%29_edit1.jpg/225px-Los_Angeles_City_Hall_%28color%29_edit1.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/450px-Kheops-Pyramid.jpg", "https://lh3.googleusercontent.com/drive-viewer/AKGpihbhGlt3_OK0QcEkzP6FbQ46RzgvedOVneoU0g6iJ3s7LJeQvHd_QW2ySsPTy8SApueAiWSBQCIjjFrZOPY8HgopDDz7AQ=s2560", "https://en.wikipedia.org/wiki/File:Washington_Monument_2022.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Space_Needle_2011-07-04.jpg/375px-Space_Needle_2011-07-04.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/181_Fremont_2.jpg/80px-181_Fremont_2.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Chicago_%2822505956672%29.jpg/80px-Chicago_%2822505956672%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/4_One_Atlantic_Center_%28cropped%29.jpg/80px-4_One_Atlantic_Center_%28cropped%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/56_Leonard_Street_%28cropped%29.jpg/80px-56_Leonard_Street_%28cropped%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/10_Hudson_Yards_2018-07_jeh.jpg/80px-10_Hudson_Yards_2018-07_jeh.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/RMS_Titanic_3.jpg/640px-RMS_Titanic_3.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/NEMAChicago.jpg/80px-NEMAChicago.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/425_park_avenue_southwest_corner.jpg/106px-425_park_avenue_southwest_corner.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/99_Hudson_St_Jersey_City.jpg/94px-99_Hudson_St_Jersey_City.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Key_Tower_2022.png/80px-Key_Tower_2022.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/375px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2010-07-12_1240x1860_chicago_at%26t_corporate_center.jpg/80px-2010-07-12_1240x1860_chicago_at%26t_corporate_center.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Los_Angeles_Library_Tower_%28small%29_crop.jpg/80px-Los_Angeles_Library_Tower_%28small%29_crop.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/The_Brooklyn_Tower_010.jpg/80px-The_Brooklyn_Tower_010.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Salesforce_Tower_SF_2017.jpg/80px-Salesforce_Tower_SF_2017.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_Trade_Center_January_2019_%28edited%29.jpg/80px-World_Trade_Center_January_2019_%28edited%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/375px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/8/86/Peng_Rui_One_Shenzhen_Bay2021.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Forum_66%2C_Shenyang%2C_Oct2014.png/200px-Forum_66%2C_Shenyang%2C_Oct2014.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Gevora_Hotel.jpg/200px-Gevora_Hotel.jpg", "https://www.archute.com/wp-content/uploads/2016/06/HCT_RE_FULL-TOWER_FINAL-1.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Chicago_20180830_%2818%29.jpg/200px-Chicago_20180830_%2818%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/St_Regis_Chicago.jpg/80px-St_Regis_Chicago.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/BoA_Tower.jpg/80px-BoA_Tower.jpg", "https://images.skyscrapercenter.com/building/Golden-Eagle-Tiandi-Tower-A-Lester-Ali-1574810108204.jpg", "https://images.skyscrapercenter.com/building/logancentury1_rendering-full-night_(c)dennis__lau__and__ng__chun__man__architects__and__engineers.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Diwang_Dasha_25.JPG/200px-Diwang_Dasha_25.JPG", "https://i.imgur.com/0pyiJoq.jpg", "https://images.skyscrapercenter.com/building/gp_nanning-overall.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/IFC%2C_Hong_Kong_Island_%282796343561%29.jpg/200px-IFC%2C_Hong_Kong_Island_%282796343561%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/One_Vanderbilt_April_2021.jpg/80px-One_Vanderbilt_April_2021.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/111_West_57th_Street.png/80px-111_West_57th_Street.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Petronas_Panorama_II.jpg/200px-Petronas_Panorama_II.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CentralParkTowerSep20.jpg/200px-CentralParkTowerSep20.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/One_World_Trade_Center_cropped2.jpg/200px-One_World_Trade_Center_cropped2.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Lotte-tower-close.png/200px-Lotte-tower-close.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/%E5%B9%B3%E5%AE%89%E9%87%91%E8%9E%8D%E4%B8%AD%E5%BF%83_2019-12-23.jpg/200px-%E5%B9%B3%E5%AE%89%E9%87%91%E8%9E%8D%E4%B8%AD%E5%BF%83_2019-12-23.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Abraj-al-Bait-Towers.JPG/200px-Abraj-al-Bait-Towers.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Shanghai_tower_dec_26%2C_2014.jpg/200px-Shanghai_tower_dec_26%2C_2014.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Gocta.jpg/640px-Gocta.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg/640px-St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/200px-Burj_Khalifa.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Sydney_Blue_Mountains_Three_Sisters_01.jpg/640px-Sydney_Blue_Mountains_Three_Sisters_01.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/The_new_LAX_runway_stop_lights_%283701941571%29.jpg/640px-The_new_LAX_runway_stop_lights_%283701941571%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/US_Navy_090622-N-5345W-005_USS_Ponce_%28LPD_15%29_crosses_under_the_Egyptian-Japanese_Friendship_Bridge_in_El_Qantara%2C_Egypt%2C_while_transiting_the_Suez_Canal.jpg/640px-US_Navy_090622-N-5345W-005_USS_Ponce_%28LPD_15%29_crosses_under_the_Egyptian-Japanese_Friendship_Bridge_in_El_Qantara%2C_Egypt%2C_while_transiting_the_Suez_Canal.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Panoramic_Overview_from_Glacier_Point_over_Yosemite_Valley_2013_Alternative.jpg/640px-Panoramic_Overview_from_Glacier_Point_over_Yosemite_Valley_2013_Alternative.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Robert_F._Kennedy_Bridge_to_Randall%27s_Island_%2884464%29.jpg/640px-Robert_F._Kennedy_Bridge_to_Randall%27s_Island_%2884464%29.jpg", "https://lh3.googleusercontent.com/drive-viewer/AKGpihYIqC_m1K0TBqG7MZlCF6Il6mOwMkI3RvgqCBS8_S_jV_5RQXWjOnaFvjT15-vY0o4VQexsAspyFnnUBD_dxcfntdqd-Q=s2560", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Zeeland_bridge_%281%29.jpg/640px-Zeeland_bridge_%281%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mount_Rushmore_detail_view_%28100MP%29.jpg/640px-Mount_Rushmore_detail_view_%28100MP%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Brooklyn_Bridge_Manhattan.jpg/640px-Brooklyn_Bridge_Manhattan.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Grand_Canyon_Hopi_Point_with_rainbow_2013.jpg/640px-Grand_Canyon_Hopi_Point_with_rainbow_2013.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yosemite_20_bg_090404.jpg/640px-Yosemite_20_bg_090404.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/640px-GoldenGateBridge-001.jpg", "https://lh3.googleusercontent.com/drive-viewer/AKGpihbNmKhWnZxt-fnJ95rd8SbMr7hLW8cXPxb1MPsEm4wNAu1F6NKqyL12I4ytmKksuXUEKyQuVXrKDr0-KZnBFwNqj2X7ew=s2560", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Seven_Mile_Bridge%2C_part_of_the_Overseas_Highway.jpg/640px-Seven_Mile_Bridge%2C_part_of_the_Overseas_Highway.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/MtFuji_FujiCity.jpg/640px-MtFuji_FujiCity.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg/640px-Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Kerch_Strait_Bridge%2C_2018-04-14.jpg/640px-Kerch_Strait_Bridge%2C_2018-04-14.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/640px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Mauna_Kea_from_the_ocean.jpg/640px-Mauna_Kea_from_the_ocean.jpg", "https://pbs.twimg.com/media/EYuhB7CX0AAPxFQ.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Airliners_28.07.2009_10-01-28.JPG/640px-Airliners_28.07.2009_10-01-28.JPG", "https://lh3.googleusercontent.com/drive-viewer/AKGpihYaUCm_KpZ5RQfopHdS5kvb1cwuYy0dq6WOySsHlUar2qt1y0zqVQnGZClCdZeb3VP_iwamkQiFv1LMCNxOZSPJTAph=s2560", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Troposphere_CIMG1853.JPG/640px-Troposphere_CIMG1853.JPGG", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/%E6%B8%AD%E5%8D%97%E5%8C%97%E7%AB%99%E4%BE%A7%E9%9D%A2%E8%88%AA%E6%8B%8D.jpg/640px-%E6%B8%AD%E5%8D%97%E5%8C%97%E7%AB%99%E4%BE%A7%E9%9D%A2%E8%88%AA%E6%8B%8D.jpg", "https://lh3.googleusercontent.com/drive-viewer/AKGpihaOtZojfGkFauTp7l9liIOTh1RdZ2FzKNxcEz1V4NygOl3j9JTqLQkeV8X5pCZLqRJ2lrPVkqjpHUgp_jqfO4PxSp3w_Q=s2560", "https://images.indianexpress.com/2018/10/12671860_566516886841818_4123002218236661021_o.jpg?w=600", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Frankfurt_marathon_2004_erster_kilometer.jpg/640px-Frankfurt_marathon_2004_erster_kilometer.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Top_of_Atmosphere.jpg/640px-Top_of_Atmosphere.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/ISS057-E-18606_-_View_of_Earth.jpg/640px-ISS057-E-18606_-_View_of_Earth.jpg", "https://lh3.googleusercontent.com/drive-viewer/AKGpihbPjZxrfV5bH1kY6OT3fyIyDb8C50UxOrF-Ij4mettB6cRHXXFldg1FOM-2kE3P_IleY70-cZRZca-z1kDAsPp8JvmHLg=s2560", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Polarlicht_2.jpg/640px-Polarlicht_2.jpgg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/ISS-59_California%2C_Nevada_and_northern_Mexico.jpg/640px-ISS-59_California%2C_Nevada_and_northern_Mexico.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/City_Lights_of_the_United_States_2012.jpg/640px-City_Lights_of_the_United_States_2012.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/North_America_satellite_orthographic.jpg/640px-North_America_satellite_orthographic.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Russia_87.74494E_66.20034N.jpg/640px-Russia_87.74494E_66.20034N.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Asia_satellite_orthographic.jpg/640px-Asia_satellite_orthographic.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/ISS034E016601_-_Stratocumulus_Clouds_-_Pacific_Ocean.jpg/640px-ISS034E016601_-_Stratocumulus_Clouds_-_Pacific_Ocean.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Africa_and_Europe_from_a_Million_Miles_Away.png/640px-Africa_and_Europe_from_a_Million_Miles_Away.png"];
var tallLongHeight = [0.1, 0.5, 1, 3, 5, 8, 10, 15, 20, 25, 30, 40, 50, 60, 77, 80, 100, 154, 186, 232, 288, 300, 356, 454, 481, 500, 555, 605, 802, 818, 820, 821, 878, 883, 896, 897, 900, 948, 984, 1007, 1018, 1066, 1070, 1079, 1083, 1120, 1150, 1169, 1177, 1191, 1198, 1200, 1208, 1251, 1260, 1316, 1321, 1352, 1401, 1428, 1483, 1550, 1776, 1819, 1965, 1971, 2073, 2530, 2624, 2717, 2952, 3500, 3900, 4000, 4212, 5000, 5022, 5725, 5989, 6000, 8846, 8981, 9842, 10877, 12388, 13200, 18100, 26246, 33481, 40229, 42000, 50000, 63360, 79732, 98425, 105881, 137795, 158400, 491040, 500000, 984252, 4012800, 14784000, 26400000, 29568000, 35904000, 50688000, 131477280];
var tallLongName = ["a sour patch kid", "a cellphone", "subway footlong", "a guitar", "a human", "a teletubby", "a ladder", "a canoe", "a badminton net", "Great Wall of China", "a motorhome", "Newby–McMahon Building,", "10 humans", "a bowling lane", "The Pentagon", "a basketball court", "Nagwamatse", "Statue of Liberty (pedestal)", "Leaning Tower of Pisa", "Boeing 747", "United States Capitol", "Redwood tree", "International Space Station", "Los Angeles City Hall", "Great Pyramid of Giza", "100 humans", "Washington Monument", "Space Needle", "181 Fremont", "The Legacy at Millennium Park", "One Atlantic Center", "56 Leonard Street", "10 Hudson Yards", "Titanic", "NEMA Chicago", "425 Park Avenue", "99 Hudson Street", "Key Tower", "Eiffel Tower", "Franklin Center", "U.S. Bank Tower", "The Brooklyn Tower", "Salesforce Tower", "3 World Trade Center", "Eiffel Tower (tip)", "One Shenzen Bay", "Forum 66 Tower 1", "Gevora Hotel", "Hanking Center", "Vista Tower", "St. Regis Chicago", "Bank of America Tower", "Golden Eagle Tiandi Tower A", "Logan Century Center 1", "Shun Hing Square", "Guiyang Financial Center Tower 1", "Nanning China Resources Tower", "International Finance Centre", "One Vanderbilt", "111 West 57th Street", "Petronas Tower 1", "Central Park Tower", "One World Trade Center", "Lotte World Tower", "Ping An Finance Center", "Abraj Al-Bait Clock Tower", "Shanghai Tower", "Gocta Falls", "Vatican City", "Burj Khalifa", "Three Sisters", "LAX runway", "Suez Canal Bridge", "Yosemite Valley", "Robert F. Kennedy Bridge", "1000 humans", "Zeeland Bridge", "Mount Rushmore", "Brooklyn Bridge", "Grand Canyon", "Half Dome", "Golden Gate Bridge", "100000 sour patch kids", "Seven Mile Bridge", "Mount Fuji", "Central Park", "Kerch Strait Bridge", "Mount Everest", "Mauna Kea", "Kola Superdeep Borehole", "airplane cruising altitude", "10000 humans", "troposphere", "Weinan Weihe Grand Bridge", "1 million sour patch kids", "Cangde Grand Bridge", "a marathon", "stratosphere", "minimum oribtal height", "100000 humans", "aurora borealis", "California", "United States", "North America", "Russia", "Asia", "Pacific Ocean", "Earth"];
var r = randomNumber(128, 255);
var g = randomNumber(128, 255);
var b = randomNumber(128, 255);
var a = (randomNumber(0, 10) / 10);
var ang = randomNumber(0, 360);
var fadeCounter = 0;
var distance = 1;
var soundSpeed = 100;
var discoveredColors = {};
var discoveryAmount = 0;
var travelAmount = 0;
var travelFeet = 0;
var paintAmount = 0;
var index = 0;
var heightLooping = false;

var bgMusic = true;
var sfx = true;
var screenWrap = true;
var colorVariation = 2;
var angIntensity = 90;
var start = false;
var inPanel = true;
var inStats = true;
var diy = false;
var diyX = 0;
var diyY = 0;

hide();
penRGB(255, 255, 255, 1);
penWidth(4406);
moveTo(windowWidth/2, windowHeight/2);
moveForward(0.1);
windowResize();
window.addEventListener('resize', windowResize);

onEvent("saveButton", "click", function ()
{
  if(sfx) playSound("assets/category_accent/puzzle_game_accent_a_02.mp3", false);
});

onEvent("start", "click", function () {
  start = true;
  init();
  draw();
  hideElement("start");
  showElement("panelButton");
  showElement("pencil");
  showElement("statsButton");
  showElement("saveButton");
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
    hideStats();
    if(!inStats) {inStats = true}
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
    showElement("controlExit");
    if (sfx) playSound("assets/category_tap/puzzle_game_affirmation_dry_metal_ui_button_1.mp3", false);
  }
  else
  {
    hidePanel();
    if (sfx) playSound("assets/category_tap/slight_negative_select_1.mp3", false);
  }
});

onEvent("controlExit", "click", function() {
  hidePanel();
  inPanel = !inPanel;
  if (sfx) playSound("assets/category_tap/slight_negative_select_1.mp3", false);
});

onEvent("statsButton", "click", function() {
  inStats = !inStats;
  if(!inStats)
  {
    if(!inPanel) {inPanel = true}
    hidePanel();
    showElement("statsPanel");
    showElement("lengthLabel");
    showElement("lengthText");
    showElement("lengthImage");
    showElement("gallonsText");
    showElement("discoveryText");
    showElement("statsExit");
    if (sfx) playSound("assets/category_tap/puzzle_game_affirmation_dry_metal_ui_button_1.mp3", false);
  }
  else
  {
    hideStats();
    if (sfx) playSound("assets/category_tap/slight_negative_select_1.mp3", false);
  }
});

onEvent("statsExit", "click", function() {
  hideStats();
  inStats = !inStats;
  if (sfx) playSound("assets/category_tap/slight_negative_select_1.mp3", false);
});

onEvent("restartButton", "click", function() {
  penRGB(255, 255, 255, 1);
  penWidth(4406);
  moveTo(windowWidth/2, windowHeight/2);
  moveForward(0.1);
  r = randomNumber(128, 255);
  g = randomNumber(128, 255);
  b = randomNumber(128, 255);
  
  discoveredColors = {};
  discoveryAmount = 0;
  paintAmount = 0;
  travelAmount = 0;
  index = 0;
  var img = document.getElementById("lengthImage");
  img.src = tallLongImg[0];
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

  if (play) playSound("assets/bgmusic.mp3", true);
  if (playfx) playSound("assets/scribble_.mp3", true);

  playSound("assets/category_tap/puzzle_game_organic_wood_block_tone_tap_4_app_click.mp3", false);
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
    fadeCounter += (0.0001 * distance);
    if(fadeCounter > (0.01 * distance))
    {
      fadeCounter = 0;
    }
    penRGB(255, 255, 255, fadeCounter);
    penWidth(4406);
    moveForward(0.01);
    if(!diy) stopTimedLoop(diyloop);
  });
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
    penWidth(4406);
    moveForward(0.01);
    if(diy) stopTimedLoop(drawloop);

    var drawloop2 = timedLoop(1, function ()
    {
      var counter = 0;
      r += randomNumber(-colorVariation, colorVariation);
      g += randomNumber(-colorVariation, colorVariation);
      b += randomNumber(-colorVariation, colorVariation);
      a += (randomNumber(-1, 1) / 10);
      ang += randomNumber(angIntensity, -angIntensity);
      check();
      
      var width = randomNumber(1, 10);
      penWidth(width);
      penRGB(r, g, b, a);
      turnTo(ang);
      
      var moveAmount = randomNumber(distance, distance * 2);
      var flip = randomNumber(0, 1);
      (flip == 0) ? moveForward(moveAmount) : moveBackward(moveAmount);
      
      travelAmount = (travelAmount + moveAmount);
      paintAmount += (moveAmount * width);
      
      var colorKey = r.toString() + g.toString() + b.toString();
      if(!discoveredColors[colorKey]) 
      {
        discoveredColors[colorKey] = true;
        discoveryAmount++;
      }
      
      if(!inStats)
      {
        height();
        if(!heightLooping)
        {
          var img = document.getElementById("lengthImage");
          img.src = tallLongImg[index];
          setProperty("lengthText", "text", tallLongName[index] + " (" + tallLongHeight[index] + " feet)");
        }
        setProperty("discoveryText", "text", "colors discovered:" + (discoveryAmount/16777216).toFixed(6) + "%");
        setProperty("gallonsText", "text", "gallons of paint used: " + (paintAmount/394243200).toFixed(6) + " gal.");
      }
      setProperty("pencil", "x", getX()-5);
      setProperty("pencil", "y", getY()-45);
      counter++;
      if(diy || counter >= 20)
      {
        stopTimedLoop(drawloop2);
      }
    });
  });
}

function height()
{
  if(heightLooping) {return}
  travelFeet = (travelAmount/(1152*20));
  var min = Math.abs(travelFeet - tallLongHeight[0]);
  var heightCounter = 0;
  var heightLoop = timedLoop(1, function ()
  {
    heightLooping = true;
    var difference = Math.abs(travelFeet - tallLongHeight[heightCounter]);
    var oldDiff = 9999999999;
    if(heightCounter > 0) {Math.abs(oldDiff = travelFeet - tallLongHeight[heightCounter - 1])}
    
    if(oldDiff < difference)
    {
      index = heightCounter - 1;
      heightLooping = false;
      stopTimedLoop(heightLoop);
    }
    else if(difference < min)
    {
      min = difference;
      index = heightCounter;
    }
    heightCounter++;
    if(heightCounter >= tallLongHeight.length)
    {
      heightLooping = false;
      stopTimedLoop(heightLoop);
    }
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
    if(x > windowWidth + 10)
    {
      moveTo(-10, y);
    }
    else if(x < -10)
    {
      moveTo(windowWidth + 10, y);
    }
    if(y > windowHeight + 10)
    {
      moveTo(x, -10);
    }
    else if(y < -10)
    {
      moveTo(x, windowHeight + 10);
    }
    penDown();
  }
  else
  {
    if(x > windowWidth)
    {
      moveTo(windowWidth, y);
    }
    else if(x < 0)
    {
      moveTo(0, y);
    }
    if(y > windowHeight)
    {
      moveTo(x, windowHeight);
    }
    else if(y < 0)
    {
      moveTo(x, 0);
    }
  }
}

function init()
{
  distance = (getProperty("distanceSlider", "value") / 4);
  colorVariation = getProperty("colorSlider", "value");
  angIntensity = getProperty("angSlider", "value");

  bgMusic = getProperty("musicCheck", "checked");
  sfx = getProperty("sfxCheck", "checked");
  screenWrap = getProperty("wrapCheck", "checked");

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
  hideElement("controlExit");
}

function hideStats()
{
  hideElement("statsPanel");
  hideElement("lengthLabel");
  hideElement("lengthText");
  hideElement("lengthImage");
  hideElement("gallonsText");
  hideElement("discoveryText");
  hideElement("statsExit");
}

function windowResize() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  var div = document.getElementById(`screen`);
  if (screen) {
    div.style.width = windowWidth + 'px';
    div.style.height = windowHeight + 'px';
  }
}
