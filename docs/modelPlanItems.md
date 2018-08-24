---
id: modelPlanItems
title: Modelling other Plan Items
sidebar_label: Modelling other Plan Items
---

In CMMN, Stages, Tasks, EventListeners and Milestones are Plan Items.

## Stage

**In CMMN**, a Stage inherits from Plan Fragment. A Stage serves as building block for Case. A Stage can contain Plan Items, also other Stages, and Sentries. Stages bundle other plan items. When creating our case models, sometimes we have plan items that are closely related and need to be grouped together. These items could be multiple tasks that must be completed before the case can proceed.

**In Cafienne**, there is a Stage but not a Plan Fragment. In Cafienne Case Modeler you can drag the Stage Icon to the canvas and model its properties using the Properties Palette.

## Task

**In CMMN**, a Task is an atomic unit of work. Therefore, a task represents the execution of actual work. CMMN differentiates between Human Tasks, Process Tasks, Case Tasks and Decision Tasks. A Human task requires a user to perform an action. A Process Task will execute a business process modeled in another modelling language or it could call an external service which triggers external actions. A Case Task will execute another case. This case can run standalone or as a child of the current case. This provides a way of breaking down complex case models into smaller, more manageable pieces. A Decision Task can be used to invoke a decision. 

All tasks use parameters to pass information. These parameters refer to Case File Items. A Human Task needs a performer and therefore the Role concept us used. Also, a Human Task can have a Planning Table and therefore Appicability Rules to a Task.

​

## EventListener

**In CMMN**, an event is something that “happens” during the course a Case. Events may trigger life cycle transtions of other Plan Items or of Case File Items and their cause is mostly a life cycle transition of another Plan Item or Case File Item. Elapse of time cannot be captured via these “standard events”. Also, it will often lead to very indirect modeling, when any user event, such as approval or rejection of something, has to be captured through impact on data in the Case File or through transitions in lifcycles of Plan Items.

For this reason, CMMN introduces EventListeners, which specialise into TimerEventListeners and UserEventListeners. This enables CMMN to handle any event in a uniform way, namely as “standard events” that denote transitions in lifecycles. These standard events are handled via Sentries.

**In Cafienne**, you can drag the icons of both EventListeners to the canvas and fill in their properties and attach Sentries from it to other Plan Items. Note that a UserEventListener can only be triggered by a Authorized Role. A TimerEventListener can be triggered by a lifecycle transition on a Plan Item or a Case File Item. 

## Milestones

A Milestone represents an achievable target. They can be used to show that a certain goal has been reached in the case. The conditions that must be met to achieve a milestone can be clearly defined by attaching a sentry to it. A Milestone can also be used as an entry criteria for other plan items. 

Milestones are beneficial plan items in a case, because they allow us to assess a case’s progress. They are not associated with work like a task is, but rather indicate certain conditions have been reached within a case.

## Plan item Properties

### Repeat

**In CMMN**, you can model a Repetition Rule that specifies under which conditions a Plan Item will have repetition. Each repetition is an new instance for it. The first instance is nat considered a repetition.

**In Cafienne**, you can select the property Repeat, and next add the Rule as an expression and add a Case File Item as the context of the Rule. If the Rule is not added, than the Plan Item can be executed infinite, unless the containing Case or Stage is completed or terminated. Default is not repeatable.

### Required

**In CMMN**, you can model a Required Rule. This Rule specifies under which conditions Plan Items will be required to complete or terminate before their containing Stage or Case can complete.

**In Cafienne**, you can select the property Required, and next optionally add the Rule as an expression and add a Case File Item as the context of the Rule. If the Rule is not added, than the Plan Item is 100% required. Default is not required.

### Manual Activation

**In CMMN**, you can model an Manual Activation Rule. This Rule specifies under wich conditions a Plan Item, once enabled, start manually or automatically.

**In Cafienne**, you can select the property Manual Activation, and next optionally add the Rule as an expression and add a Case File Item as the context of the Rule. Default is manual activated.

### Auto Complete

**In CMMN**, if a Plan Item is set to “Auto Complete is false” then it requires a user to manually complete it. This is appropriate for Stages and Cases that contain Discretionary Items or non-required Plan Items. 

If AutoComplete set to true, a Plan Item will complete if there are no active children and all required children are in lifecycle state disabled, completed, terminated or failed. If set to false, it will complete if there are no active children, no Discretionary Items planned, all required tasks are evaluated to true.

**In Cafienne**, you can in the Properties Palette just click AutoComple on or off.

### Plan Item Properties

Various properties can set for plan item:

<table>
  <tr>
    <th style="text-align:left;">Property</th>
    <th style="text-align:center;">Case</th>
    <th style="text-align:center;">Stage</th>
    <th style="text-align:center;">Task</th>
    <th style="text-align:center;">Milestone</th>
  </tr>
  <tr>
    <td style="text-align:left;">Required</td>
    <td style="text-align:center;"> </td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;">√</td>
  </tr>
  <tr>
    <td style="text-align:left;">Repetion</td>
    <td style="text-align:center;"> </td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;">√</td>
  </tr>
  <tr>
    <td style="text-align:left;">Manual Activation</td>
    <td style="text-align:center;"> </td>
    <td style="text-align:center;"></td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;">√</td>
  </tr>
  <tr>
    <td style="text-align:left;">Auto Complete</td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;"></td>
    <td style="text-align:center;"></td>
  </tr>
  <tr>
    <td style="text-align:left;">Applicability</td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;">human</td>
    <td style="text-align:center;"></td>
  </tr>
</table>
