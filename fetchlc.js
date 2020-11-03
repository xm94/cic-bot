const axios = require('axios');
const fs = require('fs');
const data = fs.readFileSync('/Users/xavier/cicbot/lc.json',{encoding:'utf8', flag:'r'});

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
        finalproblems[problem.stat.question__title]=currProblem;
        //console.log(problem.stat)
    }
    console.log(JSON.stringify(finalproblems));
    fs.writeFileSync('lc.json',JSON.stringify(finalproblems));
}

// stat: {
//     question_id: 1773,
//     question__article__live: null,
//     question__article__slug: null,
//     question__title: 'Percentage of Users Attended a Contest',
//     question__title_slug: 'percentage-of-users-attended-a-contest',
//     question__hide: false,
//     total_acs: 702,
//     total_submitted: 957,
//     frontend_question_id: 1633,
//     is_new_question: true
//   },
//   status: null,
//   difficulty: { level: 1 },
//   paid_only: true,
//   is_favor: false,
//   frequency: 0,
//   progress: 0
// }

fetchinfo()