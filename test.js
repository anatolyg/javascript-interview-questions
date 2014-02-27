// #1

// Given structure in attrStructure:
//  {
//    tag: "",
//    value: "",
//    attr: [
//      {"tag": "", value:""},{"tag":"", "value":""}
//    ]
//  }

// convert into structure that looks like: 
//  {
//    "tag": "value",
//    "attr": {
//      "tag": "value"
//    }
//  }
//  eg. 
//  {
//    "(0008,002A)": "20130318124132"
//  }
var attrStructure = {"tag":"(0008,0018)","value":"1.3.51.0.7.1193286233.9961.33088.48048.47436.15671.21980","attr":[{"tag":"(0008,002A)","value":"20130318124132"},{"tag":"(0008,0020)","value":"20130318"},{"tag":"(0008,0030)","value":"123650"},{"tag":"(0008,0018)","value":"1.3.51.0.7.1193286233.9961.33088.48048.47436.15671.21980"},{"tag":"(0008,0060)","value":"CR"},{"tag":"(0008,103E)","value":"SUNRISE VIEW"},{"tag":"(0018,0015)","value":"KNEE"},{"tag":"(0018,1164)","value":"0.1\\0.1"},{"tag":"(0018,5101)","value":"AP"},{"tag":"(0020,0013)","value":"2"},{"tag":"(0020,0020)","value":"L\\F"},{"tag":"(0028,0030)","value":"0.10000000149011\\0.10000000149011"},{"tag":"(0028,1052)","value":"0"},{"tag":"(0028,1053)","value":"1"},{"tag":"(0028,1054)","value":"LOG_E REL"},{"tag":"(0028,0101)","value":"12"},{"tag":"(0028,0010)","value":"2328"},{"tag":"(0028,0011)","value":"2928"},{"tag":"(0008,1030)","value":"Femur Knee Leg"},{"tag":"(0010,0010)","value":"BEAN^ELENA"},{"tag":"(0010,0020)","value":"690100"},{"tag":"(0010,0030)","value":"19400826"},{"tag":"(0010,0040)","value":"F"},{"tag":"(0010,4000)","value":"L KNEE"}]};

// test that your structure is correct - use qUnit or any other test framework in an external file

// loop through the above data structure and create a tree-like output on the screen. 
// You can use jQuery to attach event handlers for hiding/showing nodes in the tree.


// #2

// given the text in the variable "corpus", write the following:
var corpus = "The ship drew on and had safely passed the strait, which some volcanic shock has made between the Calasareigne and Jaros islands; had doubled Pomegue, and approached the harbor under topsails, jib, and spanker, but so slowly and sedately that the idlers, with that instinct which is the forerunner of evil, asked one another what misfortune could have happened on board. However, those experienced in navigation saw plainly that if any accident had occurred, it was not to the vessel herself, for she bore down with all the evidence of being skilfully handled, the anchor a-cockbill, the jib-boom guys already eased off, and standing by the side of the pilot, who was steering the Pharaon towards the narrow entrance of the inner port, was a young man, who, with activity and vigilant eye, watched every motion of the ship, and repeated each direction of the pilot.";

// 1. calculate word frequency in the input text collection. Separators include [ ,-.?!]
// 2. show word frequency in descending order and ascending order, based on a radio button in index.html
// 3. show words in alphabetical order and reverse alphabetical order, with word frequency, based on a radio button in index.html
// 4. ensure that browser does not block when calculating these frequencies


// #3
//
// the key here is to allow for async, non-blocking processing while executing the callback only once, only once ALL async calls have completed.
// 
// Execute all of the following using JSONP with Jquery (or whatever you wish)

// 1. do a search on google for "twitter patients" (https://www.google.com/search?q=twitter+patients&safe=off)
// 2. for the first 10 of these, retrieve the twitter profile bio from their public profile page (twitter.com/{{handle}})
// 	a. the element to get is ".bio.profile-field"
// 3. as you get each of these, add them to the page, into a table with the following structure:
// 	<th>twitter handle</th>
// 	<th>twitter link</th>
// 	<th>twitter bio</th>
// 4. after all of these are retrieved and displayed, call a function into which you pass in the following data structure (JSON):
// 	a. make sure that the call contains data for all 10 twitter calls.
// 	[{handle: 'twitter handle', link: 'twitter link', bio: 'twitter bio'}, ...]
// 5. ensure that the last call is only called once, and only once all info has been both retrieved and output to the page.
