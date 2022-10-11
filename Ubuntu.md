## Ubuntu

Basically Linux has divided the directory structure based on the function of what is needed to make the system as secure as possible with the minimum amount of permissions needed. Otherwise someone is bound to have to do alot of avoidable work.

Remember that Unix and Linux where made as multi-user systems and Windows was created for a single user. Everything else can be explained from that idea. You can explain every directory when thinking about it being multi-user and security.

![Screen Shot 2021-11-28 at 2.58.30 PM](/Users/saadshamim/Desktop/Screen Shot 2021-11-28 at 2.58.30 PM.png)

3 examples:

- You will see that files and directories that are admin only are gathered in the same directory: the s in `/sbin` and `/usr/sbin` and `/usr/local/sbin` stands for system. A normal user can not even start programs that are in there. Files a normal user can start are in /bin, /usr/bin, /usr/local/bin based on where it most logically should reside. But if they are admin only they should go to the `s` version of that directory. There is a famous utility called `fuser`. You can kill processes with it. If a normal user could use this (s)he would be able to kill your session.

- The same goes for `/home`: /home/user1 is property of user1. /home/user2 is property of user2. user2 has no business doing stuff in user1's home (and the other way around is also true: user1 has no business doing stuff in user2's home). If all the files would be in /home with no username underneath it you would have to give permissions to every file and asses if someone is allowed to write/remove those files. A nightmare if you have tens of users.

- [Addition](http://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard) regarding libraries.

  `/lib/`, `/usr/lib/`, and `/usr/local/lib/` are the original locations, from before multilib systems existed and the exist to prevent breaking things. `/usr/lib32`, `/usr/lib/64`, `/usr/local/lib32/`, `/usr/local/lib64/` are 32-/64-bit multilib inventions.

![Screen Shot 2021-11-28 at 2.58.19 PM](/Users/saadshamim/Desktop/Screen Shot 2021-11-28 at 2.58.19 PM.png)