---
id: apiCaseFile
title: CaseFile requests
sidebar_label: Casefile requests
---

## Retrieving the Case File and its Items and properties

`get/cases/{caseinstanceID}/casefile` compared to` get/cases/{caseinstanceID}` basically returns the same information. 

## Create, replace, update or delete a Case File Item

Cafienne allows you to create, replace, update or delete a Case File Item outside the context of a PlanItem. As we have seen, if in the design a Case File Item is used as an input our output parameter of a Task, Cafienne expects in the body of the request `put/tasks/{taskId}/{transition}` a JSON with this Case File Item and its properties. Cafienne interprets this as a life cycle transition on the Case File Item.

Using `post`, `put` or `delete/cases/{caseinstanceId}/casefile/create/{path}` you can perform life cycle transitions on Case File Items outside the context of a task. Path is the name of the Case File Item. If the Case File Item is a child of another Case File Item then this parent should be added to the path.
