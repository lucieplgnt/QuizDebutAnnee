function score(){
    let q1 = document.question1.choix[0].checked;
    let q2 = document.question2.choix[0].checked;
    let q3 = document.question3.choix[0].checked;
    return q1 + q2 + q3
}

function goToReponse() {
    let score = this.score();
    if(score > 1) {
        window.location.href = "../reponseOK.html"
    }else {
        window.location.href = "../reponseKO.html"
    }
}

function goToQuiz(){
    window.location.href = "../quiz.html"
}