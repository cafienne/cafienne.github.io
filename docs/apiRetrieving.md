---
id: apiRetrieving
title: Retrieving cases and tasks
sidebar_label: Retrieving cases and tasks
---

## Cases

For retrieving a list of cases you should call the method get/cases. Because X-AUTH_CAFIENNE is included in the request, get/cases will respond with all cases for which you are assigned as a user, you are part of the case team, or in which you fulfill a role for cases where no case team is set. Your “overall” roles are set to your user account to Cafienne. This request will respond using the JSON-structure:
```ssh
{
 "casefile": "",     --a reference to the whole file (case file, case plan, roles)
 "attachment_casefile": {...}, --a reference to the casefile with casefileitems
 "lastModifiedBy": "",  --the user that performed the most recent task execution
 "planitems": [ ],   --all the actual planned items in the case
 "definition": "",   --the name of te case definition in the case model
 "rootCaseId":"",    --the caseinstanceId, in case of nesting the moste elderly parent
 "team": [ ],        --the case team that is set for executing the case
 "id": "",           --the caseinstanceId that identifies the case instance
 "lastModified": "", --
 "parentCaseId": ""  --the parent ID if there are more than two hierarchical levels
}
```
You can use this call to fill a UI-widget for “my Cases”. Note that for a user there is no meaningfull information to identify a case instance other than its definition. If needed you can extract other meaningful information from attachment_casefile, or otherwise retrieve this from the case file...

You can restrict the retrieved cases using their State and their Definition. Note that you can query the response on CurrentState of the Case on plan items that have the type “CasePlan” which caseInstanceID matches the rootCaseId.

## A case instance

You can Retrieve information on a Case Instance by calling on `get/cases/{caseinstanceID}`. This will respond with JSON structure:

```ssh
{
 "rootCaseID": "",      --the caseInstanceID or when nested the parent CIid
 "team":[{}],           --the users and roles in the rootCase
 "attachment_casefile": {...}, --a reference to the casefile with casefileitems
 "file": {..}           --the case file items and values of their properties
 {
  "isRequired": ...,    --value as designed in model
  "isRepeating": ...,   --value as designed in model
  "caseInstanceId": "", --the identification of a case the task is in
  "name": "",           --the name of task in model
  "id": "",             --the identification of the task
  "lastModified": "",   --the timestamp of latest life cylcle transition 
  "currentState": "",   --the state the latest transition resulted in
  "type": "",           --the type op the taks, eg human task
  "user": "",           --the user that fulfills the designed role, or is assignee 
  "historyState": "",   --the state the latest transition started with
  "transition": "",     --the transition that took place
  "stageId": ""         --the identification of the stage the task is in 
 }
}
```
Basically, this is the same structure as the structure in the response of get/cases. Added to it is file. This lists all Case File Items and their properties.

## Tasks

You can use `get/tasks` or to retrieve a list of tasks. You can restrict the response to a case instance, the case definiton, the assignee, the workflow state of the task, it life cycle state or the owner (but that should be the assignee if the task is assigned). The method responds with the following JSON structure:

```ssh
{
 "planState": "",
 "owner": "",
 "role": "",
 "attachment_taskinputdata": { },
 "dueDate": "",
 "attachment_taskoutputdata": { },
 "caseInstanceId": "",
 "taskInput": { },
 "parentCaseInstanceId": "",
 "taskOutput": {},
 "createdOn": "",
 "caseDefinition": "",
 "rawOutput": {},
 "taskState": "",
 "createdBy": "",
 "modifiedBy": "",
 "rootCaseInstanceId": "",
 "taskName": "",
 "id": "",
 "assignee": "",
 "lastModified": ""
 }
```

If you create a list of “myTasks” that gives a business user an overview of tasks he or she can claim or is assigned to, note that you can us the taskInput to give meaningful information on the specific task.

## A task instance

You can retrieve information on a task instance using `get/tasks/{taskID}`. This will give you additional information on the Assignee, and the mapping of CaseFileItems to input and output parameters. The information on the Assignee helps you controlling the workflow of planned tasks. 

Whenever a PlanItem is planned, Cafienne keeps track of the values added to the CaseFileItem that are input parameters of that PlanItem. Even so, Cafienne keeps the data that are in the output parameters. You can use the information on CaseFileItems and their property for building a UI that help the assignee to execute the task. Also, this information can be used in keeping track of the way the data in your business application are used, for instance in case an audit is being performed.

`get/tasks/{taskID}` will respond the following JSON structure:
```ssh
{
 "id": "",            --identifies the task
 "taskName": "",      --the name given to the task in the case model
 "taskState": "",     --the life cycle state
 "role": "",          --the role that performs the task
 "assignee": "",      --the user that has claimed the task or is assigned to it
 "createdBy": "",     --the user that created (life cycle action) the task
 "createdOn": "",     --timestamp of creation
 "modifiedBy": "",    --the user that last performed a life cycle action
 "lastModified": "",  --timestamp of last life cycle action 
 "taskInput": {...},  --the input CFI and the value in its properties
 "taskOutput": {...}, --the output CFI and the value in its properties
 "attachment_taskinputdata": {...},  --a reference to input CFI stored in ES
 "attachment_taskoutputdata": {...}, --a reference to output CFI stored in ES

 "caseInstanceId": "",         --the case or subcase the task is in
 "rootCaseInstanceId": "",     --caseInstanceID when no nesting of cases exists             
 "parentCaseInstanceId": null, --not the root
 "caseDefinition": "",         --the name in the model of the case instance
 "planState": "",              --the life cycle state of the root

 "taskinputdata": "",  --used in CafienneUI
 "taskoutputdata": "", --used in CafienneUI
 "mappedInput": {...}, --used in CafienneUI
 "rawOutput": {...},   --used in CafienneUI
 "taskModel": {...},   --used in CafienneUI
 "owner": ""           --used in CafienneUI
 "dueDate": "",        --used in CafienneUI
}
```