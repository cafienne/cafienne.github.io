---
id: apiExecutingCase
title: Executing the case
sidebar_label: Executing the case
---

Executing a case means that all required planned items are completed and that other tasks at least have been available but did not need to be executed according the case team. 

First, you need to know which tasks are avaliable. For this,  retrieve all **discretionary tasks**. Next, you can plan the discretionary task which will become a *planned item*. Then, you can retrieve all **planned items**.

> See for further exploration of retrieving this information [Retrieving cases and tasks](http://localhost:3000/docs/apiRetrieving.html).

On human tasks and planned discretionary items you can perform **workflow actions**. Next you can perform **lifecycle actions** on all planned items. 

## Planning Discretionary tasks

In the case model discretionary human tasks can be designed. This tasks can be planned by the discretion of a case team member. Available discretionary tasks can be retrieved using `get/cases/{caseinstanceId}/discretionaryitems`. 

Next, you can plan at your discretion such a task by calling on `post/cases/{caseinstanceId}/discretionaryitems/plan` using the body
```ssh
{ 
  "name":"...", 
  "definitionId":"...", 
  "parentId":"..." 
}
```
This call will respond with a planitemId. This plan item will also be retrieved by calling again `get/cases/{caseinstanceID}/planitems`. 

## The workflow of planned tasks

Using workflow, a user fulfilling a role in a case instance can claim, revoke or delegate a planned human task. Also, a user fulfilling a “planning role” can assign directly a planned task to a user. There is an sequence in the workflow you have to adhere to. First a task must be assigned. An assigned taks can be claimed. A claimed task can be revoked or delegated. A delegated task can be claimed. A revoked task must be assigned again.

You can orchestrate this workflow of planned human tasks using `put/tasks/{taskId}/{action}`. To this call you add a body that inputs the user.

## The lifecycle of plan items

### Planned human tasks...

Complete, suspend, resume, terminate are the life cycle actions on planned human tasks that can be performed using Cafienne. You can apply this transition using `put/tasks/{taskId}/{transition}`. When you apply complete, you have to add a body that defines the output as modeled with the output parameters, being Case File Items.

Once you request the completion of a task, Cafienne will evaluate which other plan items might be completed, terminated or made available and active. The engine evaluates this by interpreting the designed sentries and milestones and the stages or cases that are the “parent plan item” to the completed human task.

### ...and other plan items

You also can apply life cycle transactions on other plan items as stages, milestones and event listeners. For this, you can use `put/tasks/{taskId}/{transition}` or `post/cases/{caseInstanceId}/planitems/{planItemId}/{transition}`.


