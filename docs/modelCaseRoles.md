---
id: modelCaseRoles
title: Modelling the Case Roles
sidebar_label: Modelling the Case Roles
---

**In CMMN**, CaseRoles authorize case workers or teams of case workers to perform HumanTasks, plan based on DiscretionaryItems, and raise user events. Example Roles of a case might be:

* Doctor – A doctor Role may contain one or more participants that are allowed to perform HumanTasks, trigger UserEventListeners, or do planning that requires doctor skills.
* Patient – A Case may provide an interface for patients to do planning that may correspond to scheduling appointments, complete HumanTasks that may correspond to providing information about their health, etc. In a typical application, a Case may limit the patient Role to contain a single participant.
* Nurse – A nurse Role may represent one or more participants with the skills of a nurse care provider.

Assignment of Roles to participants, such as to individuals or teams, is not included in the scope of CMMN. But to Cafienne, we added a method to create users and to relate these users to CMMN-roles.

**In Cafienne**, to create a Role, use the pictogram Add Roles in the blue bar that shows some Menu Items. A Role has a name and description. To add a Role as a performer to a Human Task, use the properties palette of that Task. In CMMN you can also add one or more Authorized Roles to a Discretionary Human Task or a User Event using their properties palette.