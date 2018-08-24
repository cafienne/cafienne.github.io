---
id: modelOther
title: Other things to model
sidebar_label: Other things to model
---

## Discretionary items
**In CMMN**, a Discretionary Item identifies a Plan Item of which instances can be planned to the “discretion” of a Case worker that is involved in planning. Only Stages, Human Tasks and Case Tasks can be discretionary. You can attach an Authorization Role to an Discretionary Item, being the Roles that can plan the item.

Also, a Discretionary item can be Non Blocking, meaning that it is not waiting for work to complete and completes immediately, upon instantation.

Discretionary items are part of the Planning table of the Stage or Case in which they are modelled. The Planning Table can be restricted by Applicability Rules. Applicability Rules contain a Case File Item and an Expression. 

**In Cafienne**, you can model Human Tasks, Case Tasks, and Stages as Discretionary using the Properties Palette; you can also model it as Non Blocking. Once you modelled a Discreationary Item, the Planning Table icon is shown in its parent Plan Item. Clicking on this icon, you can add an Applicability Rule.

## Sentries
**In CMMN**, a Sentry “watches out” for importants situations to occur (or “events”) which influence the further proceedings of a Case. In CMMN, important situations to occur are a lifecycle transition of a Plan Item or a Case File Item and the triggering of Event Listeners. In this way, a Sentry allows us to describe when a task, stage, or milestone should be available for execution (entry criteria), or when a case (case plan), stage, or task should terminate abnormally (exit criteria).

**In Cafienne**, you can drag Entry and Exit Sentries from one item to another item. In its properties, you can declare an On Part and an If Part. In the On Part you can select an Plan Item and/or a Case File Item and one of their lifecycle transactions. In the If Part you can select a Case File Item and express an Expression​.

Sentries can be used for plan items as follows:
<table>
  <tr>
    <th style="text-align:left;">Sentry</th>
    <th style="text-align:center;">Case</th>
    <th style="text-align:center;">Stage</th>
    <th style="text-align:center;">Task</th>
    <th style="text-align:center;">Milestone</th>
  </tr>
  <tr>
    <td style="text-align:left;">Entry</td>
    <td style="text-align:center;"> </td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;">√</td>
  </tr>
  <tr>
    <td style="text-align:left;">Exit</td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;">√</td>
    <td style="text-align:center;"></td>
  </tr>
</table>


## Expressions

In CMMN, you can add to parameters Expressions. Expressions are String objects. Expressions operate over Properties and Case File Items in the Case File. 

In Cafienne, you can express your Expressions in Spring Expression Language (SpEL).
