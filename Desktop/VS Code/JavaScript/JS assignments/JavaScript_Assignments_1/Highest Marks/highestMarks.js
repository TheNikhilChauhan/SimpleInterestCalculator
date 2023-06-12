let marks = [77, 84, 95, 67, 90];
let topMarks = 0;
let studentIndex;
function highScorer(){
    for (i = 0; i< marks.length; i++){
        if(marks[i]> topMarks){
            studentIndex = `${i+1}`;
        }
        topMarks = (marks[i] > topMarks)? marks[i] : topMarks;
    }
    console.log(`Student ${studentIndex} has the highest marks: ${topMarks}`)
}

highScorer(marks)
