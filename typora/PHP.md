## PHP

- PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.
- PHP is an acronym for "PHP: Hypertext Preprocessor"
- PHP is a widely-used, open source scripting language
- PHP scripts are executed on the server
- PHP is free to download and use

```php
<?php
echo "My first PHP script!";
?>
```



**Continous Integration CI:** is the process team members integrate their work continiously in a shared repository. Best acheived using some SCM tools like GIT. Can be daily or as needed. Every integration or checking in the repository is validated by automated build, automated unit or integration tests.

- Build -> Test
- Dev -> QA

**Continious Devilery CD:** After the CI process, deploying on Prod like env and running automation tests to ensure the build is ready for release. Ensure the build is always in a deployable state.

- Build -> Test -> Deploy
- Dev -> QA -> Staging

**Continious Deployment CD:** Automated deployment to Production environment. Every change that passes through Automation Tests is deployed to Production.

- Build -> Test -> Deploy -> Release
- Dev -> QA -> Staging -> Production

Operator uses params to get the tests and the results, tests are not hard coded to the operator
