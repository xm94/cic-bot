const axios = require('axios');
const fs = require('fs');

const difficulties = {1:"Easy",2:"Medium",3:"Hard"}

async function fetchinfo(){
    lc = await axios.get('https://leetcode.com/api/problems/all/');
    finalproblems={}
    problems = lc.data.stat_status_pairs
    //console.log(problems);
    for(problem of problems){
        currProblem={}
        currProblem['question_id']=problem.stat.frontend_question_id;
        currProblem['question__title']=problem.stat.question__title;
        currProblem['question__title_slug']=problem.stat.question__title_slug;
        currProblem['paid_only']=problem.paid_only;
        currProblem['difficulty']=difficulties[problem.difficulty.level]
        finalproblems[problem.stat.frontend_question_id]=currProblem;
        finalproblems[problem.stat.question__title.toLowerCase()]=currProblem;
        //console.log(problem.stat)
    }
    console.log(JSON.stringify(finalproblems));
    fs.writeFileSync('lc.json',JSON.stringify(finalproblems));
}

fetchinfo()