# Further comments
## npm error in Windows
The package.json file lists all the necessary dependencies that need to be installed. These should be installed after cloning the repository. To perform this installation, you need npm.

However, this could become a problem with Windows, as it was in my case. The following error might occur:

```
npm : The file C:\Program Files\nodejs\npm.ps1 Cannot be loaded because script execution is disabled on this system. For

more information, see about_Execution_Policies at https://go.microsoft.com/fwlink/?LinkID=135170.
```

After searching online, I found [This page offers a possible solution.](https://www.reddit.com/r/node/comments/1h6wer2/npm_not_working_on_windows_after_install_and/?tl=de) (30.04.2026)

Use the following command to solve that problem:

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser 
```