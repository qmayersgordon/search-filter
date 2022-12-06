const yogaPoses = [
    'Tadasana',
    'Vrikshasana',
    'Adho Mukho Svanasana',
    'Trikonasana',
    'Kursiasana',
    'Naukasana',
    'Bhujangasana',
    'Paschimottanasana',
    'Balasana',
    'Sukhasna',
    'Bandha Sarvangasana',
    'Virabhadrasana I',
    'Chaturanga',
    'Utkatasana',
    'Bakasana',
    'Savasana',
  ];

const inputEl = document.getElementById('search');
const poseList = document.getElementById('list-container');

/**Creating and inserting elements */
yogaPoses.forEach(pose => {
    var poseItem = document.createElement('li');
    poseItem.innerText = pose;
    poseItem.style.display = 'none';
    poseList.append(poseItem);
    

})

/**Evaluating and manipulating elements
 * Converting Strings
 */
const poses = document.querySelectorAll('li');
inputEl.addEventListener('input', (event) => {
    var inputValue = inputEl.value.toLowerCase();
    poses.forEach(el => {
        if(el.innerText.includes(inputValue)){
            el.style.display = '';
        }else{
            el.style.display = 'none';
        }
    })

    if(inputValue === ""){
        poseList.style.display = 'none';
    }else{
        poseList.style.display = '';
    }
    
})

/**Event Delegation */
poseList.addEventListener('click', (event) => {
    if(event.target && event.target.closest('li')){
        const textContent = event.target.innerText;
        inputEl.value = textContent;
    }
})





