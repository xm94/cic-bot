# CIC Discord Bot

## Current Functions

The bot can currently fetch problems from leetcode, either through its problem ID or Title - !lc 1 and !lc two sum both fetch the problem Two Sum, or a random (non-premium) problem through !lc random, with difficulty problems also available - !lc easy, med/medium, and hard.

The bot can also keep track of member involvement in the discord by monitoring the amount of messages sent. In the future these interactions will be stored in a database, meaning sorting can occur on retrieval. Additional factors needing to be included are:
- disregarding some messages(!lc,!users, etc)
- taking time spent in voice channels also into account
- possibly including contributions to the club's github repos somehow

Additionally, the bot has a few easter eggs, with more potentially on the way.

## Future Functions

- Being able to fetch club member submitted answers to leetcode questions similarly to how it fetches questions currently
- Being able to give simple definitions to tech industry terms : Frontend, Backend, CI/CD, etc
- Club info - who to go to for mock interviews/resume reviews/etc
- Announcements at a set time, maybe through a crawler? Futher discussion on this necessary
- Minigames? This could be a good way to get members to contribute to the bot