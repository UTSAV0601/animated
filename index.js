const balloon = document.getElementById('air-balloon')        //To select the elements we can use querySelector() to or the getElementId
const cloudOne = document.getElementById('Clouds-one')
const cloudTwo = document.getElementById('Clouds-two')
const cloudThree = document.getElementById('Clouds-three')
const cloudFour = document.getElementById('Clouds-four')
const cloudFive = document.getElementById('Clouds-five')
const cloudSix = document.getElementById('Clouds-six')
const cloudSeven = document.getElementById('Clouds-seven')
const cloudEight = document.getElementById('Clouds-eight')
const cloudNine = document.getElementById('Clouds-nine')
const cloudTen = document.getElementById('Clouds-ten')
const cloudEleven = document.getElementById('Clouds-eleven')
const cloudTwelve = document.getElementById('Clouds-twelve')
const cloudThirteen = document.getElementById('Clouds-thirteen')
const balloonYFromBottom = 10    // to initiate balloon position from 10% from bottom
const aboutSection = document.getElementById('about-me')

balloon.style.bottom = balloonYFromBottom + '%'

function move()      // this function is used to move anything when you perform specific action
{
    const incrementer = window.scrollY

    balloon.style.bottom = 10 + incrementer * 0.1 + '%'

    cloudOne.style.bottom = 75 + incrementer * 0.12 + '%'
    cloudOne.style.marginLeft = 60 + incrementer * 0.1 + '%'

    cloudTwo.style.bottom = 20 + incrementer * 0.14 + '%'
    cloudTwo.style.marginLeft = 60 + incrementer * 0.15 + '%' 
    
    cloudThree.style.bottom = 20 + incrementer * 0.12 + '%'
    cloudThree.style.marginRight = 60 + incrementer * 0.13 + '%'

    cloudFour.style.bottom = 50 + incrementer * 0.14 + '%'
    cloudFour.style.marginLeft = 40 + incrementer * 0.15 + '%'

    cloudFive.style.bottom = 80 + incrementer * 0.12 + '%'
    cloudFive.style.marginRight = 40 + incrementer * 0.14 + '%'

    cloudFive.style.bottom = 80 + incrementer * 0.12 + '%'
    cloudFive.style.marginRight = 40 + incrementer * 0.14 + '%'

    //cloudSix.style.bottom = 75 + incrementer * 0.12 + '%' //
    //cloudSix.style.marginLeft = 20 + incrementer * 0.14 + '%' //

    //cloudSeven.style.bottom = 20 + incrementer * 0.12 + '%'
    //cloudSeven.style.marginLeft = 30 + incrementer * 0.14 + '%'

    //cloudEight.style.bottom = 20 + incrementer * 0.12 + '%'
    //cloudEight.style.marginRight = 60 + incrementer * 0.14 + '%'

    //cloudNine.style.bottom = 50 + incrementer * 0.12 + '%'
    //cloudNine.style.marginRight = 20 + incrementer * 0.14 + '%'

    //cloudTen.style.bottom = 10 + incrementer * 0.12 + '%'
    //cloudTen.style.marginRight = 40 + incrementer * 0.14 + '%'

    //cloudEleven.style.bottom = 50 + incrementer * 0.12 + '%'
    //cloudEleven.style.marginRight = 70 + incrementer * 0.14 + '%'

    //cloudTwelve.style.bottom = 70 + incrementer * 0.12 + '%'
    //cloudTwelve.style.marginLeft = 65 + incrementer * 0.14 + '%'

    //cloudThirteen.style.bottom = 50 + incrementer * 0.12 + '%'
    //cloudThirteen.style.marginLeft = 10 + incrementer * 0.14 + '%' //



}

window.addEventListener('scroll', move)