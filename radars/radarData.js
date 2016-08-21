//This is the title for your window tab, and your Radar
document.title = "Dominik Schlossers Technology Radar (August 2016)";


//This is the concentic circles that want on your radar
var radar_arcs = [
    {'r': 100, 'name': 'Adopt'}
    , {'r': 200, 'name': 'Trial'}
    , {'r': 300, 'name': 'Keep an eye on'}
    , {'r': 400, 'name': 'Dont invest any private time'}
];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    {
        "quadrant": "Techniques",
        "left": 45,
        "top": 18,
        "color": "#8FA227",
        "items": [
            {name: "Test Driven Development (TDD)", pc: {r: 60, t: 130}, movement: "c"},
            {name: "Pomodoro Technique", pc: {r: 80, t: 150}, movement: "c"},
            {name: "Build Pipelines", pc: {r: 90, t: 100}, movement: "c"},
            {name: "Pair Programming", pc: {r: 90, t: 170}, movement: "c"},

            {name: "Machine Learning", pc: {r: 110, t: 133}, movement: 'c'},
            {name: "Personal Kanban", pc: {r: 110, t: 110}, movement: 'c'},
            {name: "CQRS / Event Sourcing", pc: {r: 130, t: 120}, movement: "c"},
            {name: "Single Page Applications", pc: {r: 150, t: 95}, movement: "c"},
            {name: "Git flow / Pull Requests", pc: {r: 170, t: 133}, movement: 'c'},
            {name: "NoSQL Databases", pc: {r: 170, t: 140}, movement: 'c'},

            {name: "Microservices", pc: {r: 210, t: 130}, movement: "c"},
            {name: "Pure Functional Programming", pc: {r: 230, t: 150}, movement: "c"},
            {name: "Big Data", pc: {r: 260, t: 170}, movement: "c"},
        ]
    },
    {
        "quadrant": "Tools",
        "left": w - 200 + 30,
        "top": 18,
        "color": "#587486",
        "items": [

            {name: 'Pomodoro timer', pc: {r: 50, t: 42}, movement: 'c'},
            {name: 'Jenkins as deployment pipeline', pc: {r: 70, t: 55}, movement: 'c'},
            {name: 'Trello', pc: {r: 90, t: 75}, movement: 'c'},

            {name: 'Docker', pc: {r: 110, t: 19}, movement: 'c'},
            {name: 'PowerShell', pc: {r: 110, t: 13}, movement: 'c'},
            {name: 'IntelliJ IDEA', pc: {r: 120, t: 33}, movement: 'c'},
            {name: 'NDepend', pc: {r: 120, t: 36}, movement: 'c'},
            {name: 'SonarGraph', pc: {r: 120, t: 45}, movement: 'c'},
            {name: 'Consul', pc: {r: 120, t: 29}, movement: 'c'},
            {name: 'Apache Kafka', pc: {r: 125, t: 48}, movement: 'c'},
            {name: 'Visual Studio Code', pc: {r: 130, t: 40}, movement: 'c'},
            {name: 'WebStorm', pc: {r: 140, t: 50}, movement: 'c'},
            {name: 'Android Studio', pc: {r: 180, t: 66}, movement: 'c'},

            {name: 'Neo4j', pc: {r: 220, t: 20}, movement: 'c'},
            {name: 'JQAssistant', pc: {r: 220, t: 25}, movement: 'c'},
            {name: 'Chef', pc: {r: 250, t: 34}, movement: 'c'},
            {name: 'Ansible', pc: {r: 250, t: 24}, movement: 'c'},
            {name: 'Vagrant', pc: {r: 280, t: 74}, movement: 'c'},
            {name: 'Xtext', pc: {r: 280, t: 78}, movement: 'c'},
            {name: 'MPS', pc: {r: 280, t: 82}, movement: 'c'},

            {name: 'JDeveloper', pc: {r: 390, t: 29}, movement: 'c'},
        ]
    },
    {
        "quadrant": "Platforms",
        "left": 45,
        "top": (h / 2 + 18),
        "color": "#DC6F1D",
        "items": [
            {name: "AWS", "pc": {"r": 90, "t": 250}, "movement": "c"},
            {name: "Spring", "pc": {"r": 80, "t": 260}, "movement": "c"},
            {name: "Java EE with Docker for CD", "pc": {"r": 80, "t": 190}, "movement": "c"},

            {name: 'MemSQL', pc: {r: 105, t: 220}, movement: 'c'},
            {name: 'Mesos', pc: {r: 110, t: 265}, movement: 'c'},
            {name: 'AWS Lambda', pc: {r: 110, t: 275}, movement: 'c'},
            {name: 'Amazon API Gateway', pc: {r: 110, t: 265}, movement: 'c'},
            {name: 'Marathon', pc: {r: 120, t: 268}, movement: 'c'},
            {name: 'Kubernetes', pc: {r: 120, t: 236}, movement: 'c'},
            {name: "Spark", pc: {r: 130, t: 245}, movement: 'c'},
            {name: "H20 - Predictive Analysis", pc: {r: 130, t: 255}, movement: 'c'},

            {name: 'Node.JS', pc: {r: 220, t: 236}, movement: 'c'},
            {name: 'TensorFlow', pc: {r: 240, t: 210}, movement: 'c'},
            {name: "iOS Development", pc: {r: 250, t: 235}, movement: 'c'},
            {name: "Azure", pc: {r: 290, t: 265}, movement: 'c'},
            {name: "Hadoop", pc: {r: 290, t: 235}, movement: 'c'},

        ]
    },
    {
        "quadrant": "Languages & Frameworks",
        "color": "#B70062",
        "left": (w - 200 + 30),
        "top": (h / 2 + 18),
        "items": [
            {name: 'Javascript EcmaScript 6', pc: {r: 50, t: 320}, movement: 'c'},
            {name: 'Groovy', pc: {r: 50, t: 310}, movement: 'c'},
            {name: 'React.js', pc: {r: 60, t: 290}, movement: 'c'},
            {name: 'Redux', pc: {r: 60, t: 310}, movement: 'c'},
            {name: 'Guice', pc: {r: 60, t: 278}, movement: 'c'},
            {name: 'AngularJS', pc: {r: 60, t: 278}, movement: 'c'},

            {name: 'jOOQ', pc: {r: 110, t: 290}, movement: 'c'},
            {name: 'Kotlin', pc: {r: 130, t: 340}, movement: 'c'},
            {name: 'Hystrix', pc: {r: 150, t: 310}, movement: 'c'},
            {name: 'RxJava', pc: {r: 150, t: 298}, movement: 'c'},
            {name: 'Scala', pc: {r: 150, t: 320}, movement: 'c'},
            {name: 'TypeScript', pc: {r: 170, t: 330}, movement: 'c'},
            {name: '.NET Core', pc: {r: 180, t: 350}, movement: 'c'},

            {name: 'Clojure', pc: {r: 210, t: 320}, movement: 'c'},
            {name: 'Swift', pc: {r: 220, t: 310}, movement: 'c'},
            {name: 'Roslyn', pc: {r: 230, t: 350}, movement: 'c'},

            {"name": "ASP.NET WebForms", "pc": {"r": 375, "t": 330}, "movement": "c"},
            {"name": "Java 6 and earlier", "pc": {"r": 390, "t": 350}, "movement": "c"},
            {"name": "ADF", "pc": {"r": 390, "t": 330}, "movement": "c"},
        ]
    }
];
