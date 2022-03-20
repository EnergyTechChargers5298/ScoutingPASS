var config_data =` 
{
  "title":"ETech's Scouting PASS 2022",
  "page_title":"ETech's Rapid React Scouting App",
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
        "defaultValue":"2019NYSU",
        "required":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "p":"Practice Match<br>",
          "qm":"Quals<br>",
          "qf":"Playoff Quarter-Final<br>",
          "sf":"Playoff Semi-Final<br>",
          "f":"Playoff Final"
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
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/Tarmacs.png",
        "required":"false"
      },
      
      "Auto Start Choices":{
        "code" : "asc",
        "title": "Autonomous Start Position Choices",
        "type": "radio",
        "choices":{
          "a": "Position A<br>",
          "b": "Position B<br>",
          "c": "Position C<br>",
          "d": "Position D<br>",
          "e": "Position E<br>",
          "f": "Position F<br>",
          "x": "Robot did not come to match"
        },
        "defaultValue":"x"
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
        "title": "What did the Human Player do with the Cargo?",
        "type":"radio",
        "choices":{
          "yy":"Made shot!<br>",
          "yn":"Missed a shot<br>",
          "rl":"Rolled the Cargo to a robot<br>",
          "no":"Did not do anything with Cargo in Auto"
        },
        "defaultValue":"no"
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
        "title": "Shooting Spot",
        "type":"radio",
        "choices":{
          "S":"Short - On Fender<br>",
          "M":"Middle - Inside Tarmac<br>",
          "L":"Long - Oustide Tarmac"
        }
      }
    },
    "endgame": {
      "Climb Attempt?": {
        "code":"ca",
        "title": "Attempted to Climb?",
        "type":"radio",
        "choices":{
          "cs":"Successful climb<br>",
          "cf":"Failed climb<br>",
          "x":"Did not attempt to climb"
        },
        "defaultValue":"x"
      },
      "Climb Type": {
        "code":"c",
        "title": "Climb Type (if Attempted)",
        "type":"radio",
        "choices":{
          "1":"4 - Low Rung<br>",
          "2":"6 - Mid Rung<br>",
          "3":"10 - High Rung<br>",
          "4":"15 - Traversal Rung"
        }
      },
      "Seconds allocated for climb": {
        "code":"be",
        "title": "Time to Climb",
        "type":"number"
      },
      "Total Alliance climbs": {
        "code":"cn",
        "title": "Alliance Climb Num",
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
