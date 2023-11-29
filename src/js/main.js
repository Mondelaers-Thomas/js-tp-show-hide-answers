const showHide = {
    init(){
        document.documentElement.className = 'js-enabled';
        this.questions = document.querySelectorAll('button');
        this.answers = document.querySelectorAll('.desc');
        this.showAnswer();
    },
    showAnswer(){
        for(const bouton of this.questions){
            bouton.addEventListener('focus', (e) => {
                for(const bouton2 of this.questions){
                    bouton2.classList.remove('focus');
                }
                e.currentTarget.classList.add('focus');
            });
            bouton.addEventListener('click', (e) => {
                for(const mPara of this.answers ){
                    if(mPara.id === e.currentTarget.getAttribute('aria-controls') && mPara.style.display !== 'block'){
                        mPara.style.display = 'block';
                    } else {
                        mPara.style.display = 'none';
                    }
                }
            });
        }
    }
}
showHide.init();