$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/cucumber/practice1/first.feature");
formatter.feature({
  "line": 1,
  "name": "Test",
  "description": "",
  "id": "test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Test1",
  "description": "",
  "id": "test;test1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "print one",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "print two",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "print three",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "print four",
  "keyword": "And "
});
formatter.match({
  "location": "steps.print_one()"
});
formatter.result({
  "duration": 122309484,
  "status": "passed"
});
formatter.match({
  "location": "steps.print_two()"
});
formatter.result({
  "duration": 50051,
  "status": "passed"
});
formatter.match({
  "location": "steps2.print_three()"
});
formatter.result({
  "duration": 107487,
  "status": "passed"
});
formatter.match({
  "location": "steps2.print_four()"
});
formatter.result({
  "duration": 82052,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Test2",
  "description": "",
  "id": "test;test2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "print one",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "print two",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "print three",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "print four",
  "keyword": "And "
});
formatter.match({
  "location": "steps.print_one()"
});
formatter.result({
  "duration": 331078,
  "status": "passed"
});
formatter.match({
  "location": "steps.print_two()"
});
formatter.result({
  "duration": 43897,
  "status": "passed"
});
formatter.match({
  "location": "steps2.print_three()"
});
formatter.result({
  "duration": 54565,
  "status": "passed"
});
formatter.match({
  "location": "steps2.print_four()"
});
formatter.result({
  "duration": 41026,
  "status": "passed"
});
});