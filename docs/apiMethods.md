---
id: apiMethods
title: All API-methods
sidebar_label: All API-methods
---

In this section, we present all API-methods:

<table>
  <tr>
    <th style="text-align:left;">API-method</th>
    <th style="text-align:left;">Use Case</th>
    <th style="text-align:left;">Description</th>
    <th style="text-align:left;">Parameters, body</th>
  </tr>
  <tr>
    <td style="text-align:left;">post/identity/login</td>
    <td style="text-align:left;">As a user I want to login, so I can use the API-methods</td>
    <td style="text-align:left;">Login, responds X-AUTH-CAFIENNE</td>
    <td style="text-align:left;">username, password; authentication not needed of course</td>
  </tr>
  <tr>
    <td style="text-align:left;">get/repository/list</td>
    <td style="text-align:left;">As a user I want a list of available cases, so I can start an case instance</td>
    <td style="text-align:left;">Retrieve a list of deployed models</td>
    <td style="text-align:left;"></td>
  </tr>
  <tr>
    <td style="text-align:left;">post/cases</td>
    <td style="text-align:left;">As a user I want to start a case instance of a specific definition, so we can start working on it</td>
    <td style="text-align:left;">Start a case instance</td>
    <td style="text-align:left;">The case model, Input parameter (a CFI)</td>
  </tr>
  <tr>
    <td style="text-align:left;">post/cases/ {caseinstanceID}/ caseteam</td>
    <td style="text-align:left;">A a case manager, I want to set a specific team, so only these people can work on it and see it</td>
    <td style="text-align:left;">Sets a new caseteam. You can also update and delete team members, using put and delete</td>
    <td style="text-align:left;">caseteam</td>
  </tr>
  <tr>
    <td style="text-align:left;">get/cases/user</td>
    <td style="text-align:left;">As a user, I want to see the cases • if I am in team, • if a task in it assigned to me, • if no team is set and I fulfill user role according to case model</td>
    <td style="text-align:left;">Get a list of current user cases</td>
    <td style="text-align:left;">case model definition, state</td>
  </tr>
  <tr>
    <td style="text-align:left;">get/cases/ {caseinstanceID}</td>
    <td style="text-align:left;">As a user, I want to have a overview of whole case instance</td>
    <td style="text-align:left;">Get a case instance</td>
    <td style="text-align:left;">case model definition, state</td>
  </tr>
  <tr>
    <td style="text-align:left;">get/cases/ {caseinstanceID}/ planitems</td>
    <td style="text-align:left;">As a user, I want a list of tasks in a case instance and their “state”</td>
    <td style="text-align:left;">Get the planitems for a case instance</td>
    <td style="text-align:left;">plan item type, state</td>
  </tr>
  <tr>
    <td style="text-align:left;">get/cases/ {caseinstanceID}/ discretionaryItems</td>
    <td style="text-align:left;">As a user, I want a list of tasks that are at my discretion</td>
    <td style="text-align:left;">Get the currently applicable discretionary items</td>
    <td style="text-align:left;"></td>
  </tr>
  <tr>
    <td style="text-align:left;">post/cases/ {caseinstanceID}/ discretionaryitems/ plan</td>
    <td style="text-align:left;">As a user, I want to plan a task that is at my discretion</td>
    <td style="text-align:left;">Plan a discretionary item</td>
    <td style="text-align:left;">name, planitemID, parentID</td>
  </tr>
  <tr>
    <td style="text-align:left;">get/cases/ {caseinstanceID}/ planitems/ {planitemID}</td>
    <td style="text-align:left;">As a task assignee, I want to see all info on a task</td>
    <td style="text-align:left;">Get one planitem for a case instance. OR get/tasks/{taskID}??????</td>
    <td style="text-align:left;"></td>
  </tr>
  <tr>
    <td style="text-align:left;">put/task/{taskId}/ {action}</td>
    <td style="text-align:left;">As a case worker, I want to claim (revoke, delegate, assign) a planned task</td>
    <td style="text-align:left;">Perform a task action (claim, assign)</td>
    <td style="text-align:left;">assignee</td>
  </tr>
  <tr>
    <td style="text-align:left;">post/task/{taskId}/ {transition}</td>
    <td style="text-align:left;">As a case worker, I want to complete (suspend, terminate) a task that is assigned to me</td>
    <td style="text-align:left;">Apply a transition on a task (complete, suspend)</td>
    <td style="text-align:left;">output parameters</td>
  </tr>
  <tr>
    <td style="text-align:left;">get/cases/{case instanceID}/ casefile</td>
    <td style="text-align:left;">As a case worker I want to see the information (items) in the casefile</td>
    <td style="text-align:left;">Get the case file</td>
    <td style="text-align:left;">case file item, notBefore_lastModified_date</td>
  </tr>
  <tr>
    <td style="text-align:left;">post/cases/{case instanceID}/ casefile/create/ {path}</td>
    <td style="text-align:left;">As a user, I want outside the context of a task, to update the case file</td>
    <td style="text-align:left;">Creates a case file item. There are also methods to update, replace or delete a CFI</td>
    <td style="text-align:left;">JSON of the case file item</td>
  </tr>
  <tr>
    <td style="text-align:left;">post/cases/{case instanceID}/ planitem/ {planitemID}/ {transition}</td>
    <td style="text-align:left;">As a case manager, I want to change the status of a Case instance</td>
    <td style="text-align:left;">Apply a transsition to a plan item; You can use this for PI that have no output parameters?</td>
    <td style="text-align:left;">none</td>
  </tr>
  <tr>
    <td style="text-align:left;">get/users</td>
    <td style="text-align:left;">As a case worker, I want to have an overview of the case team</td>
    <td style="text-align:left;">Get a list of users</td>
    <td style="text-align:left;">??? not very recommendable</td>
  </tr>
  <tr>
    <td style="text-align:left;">post/users</td>
    <td style="text-align:left;">Use Case</td>
    <td style="text-align:left;">As a sys admin, I want to control users of Cafienne</td>
    <td style="text-align:left;">a json structure</td>
  </tr>
  <tr>
    <td style="text-align:left;">get/tasks</td>
    <td style="text-align:left;">As a user, I want an overview of all tasks in any case instance I am assigned to</td>
    <td style="text-align:left;">get a list of task (for one user in X-AUTH)</td>
    <td style="text-align:left;">caseinstance, casedefinition, assignee, state, owner, duedate(?)</td>
  </tr>
  <tr>
    <td style="text-align:left;">get/tasks/ user/count</td>
    <td style="text-align:left;">As a case manager, I want some stats</td>
    <td style="text-align:left;">get number of tasks (for one user in X-AUTH)</td>
    <td style="text-align:left;"></td>
  </tr>
  <tr>
    <td style="text-align:left;">get/cases/stats</td>
    <td style="text-align:left;">As a case manager, I want some stats</td>
    <td style="text-align:left;">get number of tasks (for one user in X-AUTH)</td>
    <td style="text-align:left;">definition, state</td>
  </tr>
  
</table>
