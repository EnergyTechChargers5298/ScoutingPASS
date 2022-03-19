var config_data = `
{
  "title":"Scouting PASS 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"NYLI2",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
          "ef":"Eighth-Final<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      }
    },
    "auton": {
      "Taxi": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
      "Upper Cargo Scored": {
        "code":"au",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Missed": {
        "code":"aum",
        "title": "Upper Cargo Missed",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Missed": {
        "code":"alm",
        "title": "Lower Cargo Missed",
        "type":"counter"
      },
      "Auto Aquired Cargo": {
        "code":"ac",
        "title": "Picked up more cargo?",
        "type":"bool"
      },
      "Human Player Shot": {
        "code":"hs",
        "title": "Did Human Player shoot ball?",
        "type":"radio",
        "choices":{
          "yy":"Yes, shot made<br>",
          "yn":"Yes, shot missed<br>",
          "no":"Human player gave up ball"
        },
        "defaultValue":"no"
        },
      "Auto Start Position": {
        "code":"as",
        "title": "Autonomous Start Position",
        "type": "radio",
        "choices":{
          "a": "Position A",
          "b": "Position B",
          "c": "Position C",
          "d": "Position D",
          "e": "Position E",
          "f": "Position F"
        },
        "required":"true"
        //"filename":"Tarmacs.png",
        //"defaultValue":"g"
      
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Missed": {
        "code":"tm",
        "title": "Upper Cargo Missed",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Missed": {
        "code":"tn",
        "title": "Lower Cargo Missed",
        "type":"counter"
      },
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
        "type":"bool"
      },
      "Cargo Loading": {
        "code":"cl",
        "title": "Pick up Cargo where",
        "type":"radio",
        "choices":{
          "t":"Terminal<br>",
          "g":"Ground<br>",
          "b":"Both<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Range": {
        "code":"ss",
        "title": "Preferred Shooting Spot",
        "type":"radio",
        "choices":{
          "S":"Short - hugging the fender",
          "M":"Middle - inside edge of tarmac",
          "L":"Long - outside of tarmac"
        }
      }
    },
    "endgame": {
      "Climb": {
        "code":"c",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "f":"Attempted but Failed<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Time climb started": {
        "code":"be",
        "title": "How much time remaining did they have when they climbed?",
        "type":"number"
      },
      "Num of Robots Climbed": {
        "code":"cn",
        "title": "# of alliance bots climbed",
        "type":"counter"
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"ds",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Defense Rating": {
        "code":"dr",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Mechanical Problems?": {
        "code":"mp",
        "title": "Mech Problems",
        "type":"text",
        "size":15,
        "maxSize":100
      },
      "Card Foul": {
        "code":"cf",
        "title": "Yellow/Red Card",
        "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      }
    }
  }
}`;
