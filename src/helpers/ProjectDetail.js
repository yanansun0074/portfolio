import meta1 from "../images/MetaMapper_travel.jpg";
import meta2 from "../images/MetaMapper_select.png";
import meta3 from "../images/MetaMapper_wayfinding.png";
import meta4 from "../images/MetaMapper_scene1.png";
import meta5 from "../images/MetaMapper_scene2.png";
import unmae_find from "../images/CommonUsername_find.gif";
import uname_choose from "../images/CommonUsername_choose.gif";
import uname_search from "../images/CommonUsername_search.gif";
import golf1 from "../images/MiniGolf_image1.png";
import golf2 from "../images/MiniGolf_image2.png";
import food_filter from "../images/ManhattanFood_filters.gif";
import food_rest from "../images/ManhattanFood_showrest.gif";
import home1 from "../images/HomeSweetHome_image2.png";
import home2 from "../images/HomeSweetHome_image3.png";
import lake from "../images/FrozenSea_poster.png";
import lake2 from "../images/FrozenSea_image.png";
import ceval_home from "../images/UNCWebEval_Search+auto.png";
import ceval_class from "../images/UNCWebEval_class.png";
import ceval_cata from "../images/UNCWebEval_Catelog.png";
import ceval_login from "../images/UNCWebEval_login.png";
import squirrel1 from "../images/Squirrel_Map2.gif";
// import squirrel2 from "../images/Squirrel_scatter_hectar2.png";
import icesheet from "../images/IcesheetVR_1.png";
import icesheet1 from "../images/IcesheetVR_2.png";
import icesheet2 from "../images/IcesheetVR_3.png";
import icesheet3 from "../images/IcesheetVR_4.png";
import icesheet4 from "../images/IcesheetVR_5.png";
import icesheet5 from "../images/IcesheetVR_6.png";

export const projectDetail = [
  {
    name: "Oscar Best Picture in Box Office",
    content: {
      text: "Do Oscar Best Picture Winners Reflect Audience Preferences?",
      text1:
        "The 2025 Academy Award for Best Picture went to <a href='https://www.imdb.com/title/tt28607951/'>Anora</a>, a film that earned only $42.6 million at the box office (by Mar 10, 2025) — making it one of the lowest-grossing winners in recent years. This trend raises an interesting question:",
      text2:
        " <b>👉 Is the Academy’s definition of “best” diverging from public opinion?</b>",
      text3:
        "Box office performance often serves as a proxy for a film’s popularity. Yet, when we look at the box office earnings of Best Picture winners over the years, a clear pattern emerges:",
      list: [
        "Before 2010, many Oscar winners crossed the $500 million mark at the box office.",
        "However, after 2010, adjusted box office earnings for Best Picture winners fell significantly.",
      ],
      text4:
        "Since 2010, most Best Picture winners have struggled to reach $500 million — a stark contrast to earlier years when major box office successes often aligned with the Academy’s picks. The only exception?",
      text5:
        "🎬 <a href='https://www.imdb.com/title/tt15398776/?ref_=nv_sr_srsg_0_tt_1_nm_7_in_0_q_oppen'>Oppenheimer</a> (2023), which grossed nearly <b>$1 billion</b> worldwide, proving that critical acclaim and commercial success can still go hand-in-hand.",

      iframe: [
        "80%",
        "876",
        "0",
        "https://observablehq.com/embed/dfd69442aa1e8ee0@230?cells=viewof+chart&api_key=54f0dd4f9381ed8f3c6700db0dc2f4c4744aa1d3",
      ],
      text6:
        "Data source: <a href='https://en.wikipedia.org/wiki/Academy_Award_for_Best_Picture'>Wikipedia for best pictures</a>, <a href='https://www.boxofficemojo.com/?ref_=bo_nb_tt_mojologo'>Box Office Mojo</a>",
    },
  },
  {
    name: "PrivaSee",
    content: {},
  },
  {
    name: "VR Navigation for Ice Sheets",
    content: {
      text: '"Virtual Reality Navigation for Ice Sheets” aims to Identify, design and implement various navigation methods within the virtual environment for improving user interaction and understanding of the complex polar datasets. In this project, I implement localization and intuitive locomotion methods for a sense of direction of motion and easy movement through the virtual environment respectively.',
      video: "https://www.youtube.com/embed/BxuG7nc1jeY?si=QNWUZOKrDJxlIzet",
      h3: "Project Functions:",
      h4: "1. Locomotion",
      text3:
        "- Moving Up and Down: By pulling the joystick on right controller to right and left, users could move vertically.\n- Teleportation: with left controller joystick (with raycast present) & trigger.\n- Rotate: pulling joystick to left or right on the left controller.\n- Move back: pulling back the joystick on the left controller ",
      image: icesheet,
      h41: "2. Menu:",
      text4:
        "- Open menu: Press the “A” button on the right controller to open the menu. (Sometimes the menu is too close to the user so that it is invisible. Just move back a little bit)\n- Toggle Surface DEM.\n- Toggle Radar Graph.\n- Toggle compass: the red needle always point to the north.",
      image1: icesheet1,
      text5:
        "- Show position bookmark: When it is toggled on, the miniature map will turn into an overview sight. Bookmark positions are in blue while the player's current position is in green. All existing bookmarks are shown on the menu (by default, there is only one “Top view” bookmark.)",
      image2: icesheet2,
      text6:
        "- Clicking on the bookmark button will highlight the corresponding bookmark on the map in red.",
      image3: icesheet3,
      text7:
        "- Add bookmark: Clicking on the “Add bookmark” button on the side will trigger this panel, which shows the current position of users and allows inputs for bookmark names. (Although the input field is not interactable yet and to be implemented in future version)",
      image4: icesheet4,
      text8:
        "Click on “confirm”. A new bookmark is added to the list and shown on the miniature map in blue. ",
      image5: icesheet5,
      text9:
        "- Move to a bookmark: Clicking on the “move to bookmark” button on the side will teleport users to the selected bookmark in red. If no bookmark is selected, user will be teleported to the latest bookmark. ",
      h31: "Limitation & Improvement:",
      text10:
        "We have attempted to add tunneling effects to the camera to address the potential VR sickness during movements like teleportation and vertical movement. But it seems that the VR Tunneling Pro did not work with two cameras (one main and one VR rendered camera) in MRTK. We believed that the cause might be that there are more than one camera. However, the problem still persisted after we tried to disable one of the cameras. ",
    },
  },
  {
    name: "Squirrel Census",
    content: {
      text: "Step into the vibrant world of Central Park, where over 2,000 elusive squirrels play hide-and-seek amidst the towering trees and bustling pathways. Have you ever wondered where and when these furry acrobats make their appearances? Are they high up in the trees, executing daring maneuvers, or are they on the ground, scampering through the urban jungle? Discover their favorite hangouts - be it by the water's edge, along scenic paths, or amidst the hustle and bustle of park-goers. \n",
      text1:
        "This project goes beyond the ordinary with captivating 3D visualizations, providing an immersive experience that unravels the mysteries of Central Park's squirrel community. Explore their secret world and gain insights into their habits, habitats, and the enchanting connections they share with this iconic urban oasis. \n",
      text2:
        "First, let's start with the squirrels' position: the map below shows where they are witnessed by visitors in Central Park. The highest one is estimated to be 180 (unit unknown) above the ground. Such a tree climber! \n",
      image: squirrel1,
      text3:
        "When the winter comes, the lone wolf dies but the pack survives. It’s hard to tell if the same applies to squirrels. But it seems that they enjoyed hanging out in groups, as the bar shows the number of squirrels in a group witnessed by people.",
      // image1: squirrel2,
      // link: {
      //   link_text: "Play with the model here",
      //   link_source: "https://youtu.be/51bT8fCYLBM",
      //   des: "space cleanup",
      // },
      model1: "scatter plot",
      text4:
        "So what do they usually do when they are alone or with companions? You can tell by this bar chart on activities each day.",
      model2: "bar plot",
      text5: "\n",
      text6:
        "This project is made with R Studio (data cleaning) and Blender (3D). You can find:",
      link: {
        link_text: "Github repo for this project",
        link_source: "https://github.com/yanansun0074/squirrel_3D",
        des: "github_squirrel",
      },
      link1: {
        link_text:
          "Data from 2018 Central Park Squirrel Census - Squirrel Data",
        link_source: "https://github.com/yanansun0074/squirrel_3D",
        des: "data source",
      },
    },
  },
  {
    name: "Met(a) Mapper",
    content: {
      text: "Met(a) Mapper is a headset-based 3D map for the Metropolitan Museum of Art that provides immersive experience, essential information about exhibition, and pathfinding.\n\nIn particular, we choose to create four scenes (Arms and Armor, Samurai Artifacts, Chinese Ceramics and Paintings, and Greek Sculptures) and implemented a variety of 3D interaction techniques to enhance the gameplay experience. These include teleportation to navigate through the scenes, artwork selection and manipulation to learn more about its origins and view it from different angles, and a main menu that allows you to easily find a specific artwork and exhibit.",
      video: "https://www.youtube.com/embed/jUBhmyPY8ZE?si=VJC_nlGb-rSnHRM1",
      text1:
        "  Users will be able to move using a joystick, or teleport with arc indicators, with tunneling effects when useful.",
      image: meta1,
      text2:
        "Select works of art using virtual pointers. A menu UI will pop up, and users can rotate a copy of the art with joystick",
      image2: meta2,
      text3:
        "Use the On Display menu to find objects in the scene. Once clicked, waypoint arrow spawns in front of player to show direction, and another arrow above the object will also spawn.",
      image3: meta3,
      text4:
        "You can navigate to other scenes by clicking on labels on the wall.",
      image4: meta4,
      text5:
        "You can also navigate to other scenes by choosing through the Map Selection Menu.",
      image5: meta5,
    },
  },

  {
    name: "Common Usernames",
    content: {
      text: "In this data visualization project on observable, we looked at how quickly common usernames were taken on Github, Twitch, and Reddit.",
      text1:
        'People claim new usernames online every day and every minute, and each of such usernames represent a unique identity. Is there a pattern in taking usernames? How was the "race" on taking common names like when different social platforms were first launched? Generally, we want to examine how quickly common usernames are taken on social platforms and websites.',
      text2:
        "Our hypothesis is that more common names are taken in a faster manner. While our hypothesis appears to be obvious and not debatable, we want to focus on visualizing the trends of common usernames and their creation date, as well as any variations of the common names.",
      text3:
        "See popular names and when they were taken (common first name, fruit, color, funny names!)",
      iframe: [
        "50%",
        "1319",
        "0",
        "https://observablehq.com/embed/368f0750a9cba714?cells=viewof+username_text%2Cviewof+username_type%2Cviewof+companies%2Cline_scatter",
        "line chart",
      ],
      // image2: unmae_find,
      text4: "Explore more names (and their variations) — on a globe.",
      text5:
        "Search for names that you are interested in and their variations. There might be patterns and trends to explore! ",
      iframe1: [
        "60%",
        "909",
        "0",
        "https://observablehq.com/embed/368f0750a9cba714?cells=viewof+username_text_2%2Cviewof+username%2Ccircle_scatter",
        "spherical graph",
      ],
      text6: "Methodology",
      text7:
        "Unfortunately, datasets on usernames are usually not available online, and each platform has its own protocol. This limited our data exploration to websites that provided username information from their public API. For our initial search we explored:",
      list: [
        "Reddit",
        "YouTube",
        "Instagram",
        "Email",
        "Tiktok",
        "Twitter",
        "Steam",
        "Twitch",
        "Website domains",
        "Github",
        "Spotify",
        "Mastodon",
        "Pinterest",
      ],
      text8:
        "Email, website domains, and Steam did not have a public API so there was no way to retrieve that information. Pinterest, Instagram, Youtube, Tiktok, and Spotify had very limited access to user information and only allowed querying user information if you were able to authorize as them. Twitter changed their API policy to be paid. Mastodon is fragmented into several different instances, so there is no central database of users. As such, the only sites we were able to use were <a href='https://www.reddit.com/dev/api/'>Reddit</a>, <a href='https://dev.twitch.tv/docs/api/'>Twitch</a>, and <a href='https://docs.github.com/en/rest'>Github</a>.",
      text9:
        "Furthermore, Each of the APIs did not provide a list of all usernames and user information needed to be queried one at a time. Thus, we needed to create the list of usernames ahead of time to use for the visualization. Based on online searches, we chose lists of usernames that were popular on websites.",

      // image4: uname_search,
    },
  },
  {
    name: "AR/VR Mini-Golf",
    content: {
      text: "This is a phone-based AR application that allows users to create a miniature golf (mini golf) course and a headset-based AR application for Meta Quest 2 in which users can play on the created course",
      video: "https://www.youtube.com/embed/Ira15-aWnME?si=Lmpyk-rUd79Ac3DD",
      text1: "Part One: Phone-Based AR Mini Golf Course Builder",
      image: golf1,
      text2: "Function includes:",
      list: [
        "Drag and drop a object from the row to add it to the scene. Textual and visual feedback will be triggered.",
        "Select an object in the scene.",
        "Press “Rotate” button to rotate the selected object.",
        "Press “Trash” button to delete the selected object.",
        "Drag the selected object to change its position.",
        "Redo and undo by pressing the corresponding buttons.",
        "Remove all existing objects from the scene with “Reset” button.",
        "Save the scene with “Save” button.",
      ],
      text3: "Part Two: Headset-Based AR Mini Golf Game",
      image1: golf2,
      text4: "Here's how user plays in AR:",
      list1: [
        "Press controller's trigger to activate the small map. Hold the small map to match the reference map on the group. The scene will automatically load.",
        "Press controller's trigger to activate the golf club. Use the club to hit the ball.",
        "The interface will track and show the number of hits, until the ball goes to the hole.",
        "To restart, press the trigger on another controller to activate the raycaster. Then click on the “Restart” button on the interface.",
      ],
    },
  },
  {
    name: "Manhattan Food Hunt",
    content: {
      text: "A choropleth map showing restaurants of all zip code areas in Manhattan, implemented with interactive search and filter functions.",
      text1:
        "Play with a cuisine drop-down menu, rating slide bar, price level checkbox to explore Manhattan restaurants.",
      // image1: food_filter,
      text2:
        "And toggle to show zip code-level data or restaurant-specific datapoints.",
      iframe: [
        "50%",
        "900",
        "0",
        "https://observablehq.com/embed/bfb194e77174ebeb?cells=viewof+rating%2Cviewof+price%2Cviewof+cuisine_selected%2Cviewof+breakdown%2Cmap_hover",
        "manhattan food hunt",
      ],
      // image2: food_rest,
      text3:
        "Data source: <a href='https://github.com/rspiro9/NYC-Restaurant-Yelp-and-Inspection-Analysis'>NYC-Restaurant-Yelp-and-Inspection-Analysis</a> by Rachel Spiro",
    },
  },
  {
    name: "Project Space Cleanup",
    content: {
      text: "This is an outer-space cleanup game using touch-based input. Designed and implemented the controls, scene structure, game conditions, obstacles, and user interface.",
      link: {
        link_text: "Youtube Video",
        link_source: "https://youtu.be/51bT8fCYLBM",
        des: "space cleanup",
      },
    },
  },
  {
    name: "Episodes of Onomatopoeia",
    content: {
      text: "Onomatopoeia is an audio production of the Columbia Graduate School of Journalism.",
      text1:
        "“The Rolling Dice” is reported, written, and produced by me in November 2022. It is a profile story of Emma Ma, an esthetician who works, studies, and lives to realize her dream as an immigrant from China.",
      link: {
        link_text: 'Listen "The Rolling Dice" Here',
        link_source:
          "https://onomatopoeia.podcasts.library.columbia.edu/podcast/the-rolling-dice/",
        des: "The rolling dice",
      },
      text2:
        "“Doors Are Open to All” is a audio postcard of the Cathedral of St. John the Divine in Morningside Heights. For a nonreligious, this visit to the biggest cathedral in New York City is special.",
      link2: {
        link_text: 'Listen "Doors Are Open to All" Here',
        link_source:
          "https://onomatopoeia.podcasts.library.columbia.edu/podcast/doors-are-open-to-all/",
        des: "The rolling dice",
      },
    },
  },
  {
    name: "Home Sweet Home",
    content: {
      text: "“Home Sweet Home” is a documentary about two Chinese students in the U.S. facing mental challenges during the COVID-19 pandemics.",
      image: home1,
      image1: home2,
    },
  },
  {
    name: "Frozen Sea",
    content: {
      text: "An environmental documentary about marine pollution in China and a group of college students' commitment to reserve the ocean.",
      image: lake,
      image2: lake2,
    },
  },
  {
    name: "Course Eval for UNC",
    content: {
      text: "This is a website for course evaluation at UNC. The main function of this website is to provide a place for UNC students to publically share their evaluations for classes and show the overall conditions of a class. Our website allows students to create personal accounts and sign up in order to post evaluation for the classes they’ve taken. Users could also voluntarily provide their letter grade in a class. ",
      text1:
        "We keep the homepage of the website intuitive with minimal design and emphasis on functions. Users could search for classes in the search bar that supports auto-completion.",
      image: ceval_home,
      text2:
        "Choosing from the list will lead to the corresponding class page, on which users could see miscellaneous information about that class, post comments, rate the class. (implementation to be completed). ",
      image1: ceval_class,
      text3:
        "The “catalog” page shows all the listed classes and brief descriptions. We scraped the data from Coursicle.",
      image2: ceval_cata,
      text4:
        "Users could also log in / sign up with the buttons in the navigation bar.",
      image3: ceval_login,
    },
  },
  {
    name: "Mid Autumn Festival",
    content: {
      video: "https://www.youtube.com/embed/zuiFfiDk8bs",
    },
  },
  {
    name: "Cat's concert",
    content: {
      video: "https://www.youtube.com/embed/tRdiV_IR7t8",
    },
  },
];
