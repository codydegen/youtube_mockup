//alert("hello");
const showMore = document.getElementById("description-expand");
showMore.addEventListener('click', () => {
  // expand text
  const hiddenText = document.getElementById("video-description-hidden");
  hiddenText.classList.toggle('hidden');
  showMore.innerText = hiddenText.classList.contains('hidden') ? 'SHOW MORE' : 'SHOW LESS'; 
  //s
});

// add function and event listeners for mousing over thumbs up comments replacing thumbs with darker thumbs

commentPopulate(6);
suggestedVideosPopulate(5);
function commentPopulate(reps){
  for (let i = 1; i < reps; i++){
    const commentContainer = document.getElementById("comment-container");
    let node = document.createElement('div')
    node.setAttribute('class', 'comment-box');
    commentContainer.appendChild(node);

    // add image
    let img = document.createElement('img');
    img.setAttribute('class', 'commenter-image');
    img.setAttribute('src', 'images/commenter_img.jpg');
    img.setAttribute('alt', 'image of commenter');
    node.appendChild(img);
    //add commenter name
    let name = document.createElement('h5');
    name.setAttribute('class', 'commenter-name');
    name.innerHTML = '<b>Simon</b> 4 years ago';
    node.appendChild(name);
    //add comment content
    let content = document.createElement('p');
    content.setAttribute('class', 'comment-content');
    content.textContent = 'so cool to watch a video where someone gets straight into it, doesn\'t waffle on for 1-2 minutes about nothing and explains the process clearly. good job!';
    node.appendChild(content);
    //add comment response info
    let commentResponse = document.createElement('div');
    commentResponse.setAttribute('class', 'comment-response-info');
    node.appendChild(commentResponse);

    let upBtn = document.createElement('button');
    upBtn.setAttribute('class','comment-thumbs-up');
    upBtn.innerText = 'Up';
    let upBtnNum = document.createElement('h6');
    upBtnNum.setAttribute('class', 'comment-thumbs-up-count');
    upBtnNum.innerText = '22';
    commentResponse.appendChild(upBtn);
    commentResponse.appendChild(upBtnNum);
    let downBtn = document.createElement('button');
    downBtn.setAttribute('class','comment-thumbs-down');
    downBtn.innerText = 'Down';
    let downBtnNum = document.createElement('h6');
    downBtnNum.setAttribute('class', 'comment-thumbs-down-count');
    downBtnNum.innerText = '22';
    commentResponse.appendChild(downBtn);
    commentResponse.appendChild(downBtnNum);
    let replyBtn = document.createElement('button');
    replyBtn.setAttribute('class', 'comment-reply');
    replyBtn.innerText = 'Reply';
    commentResponse.appendChild(replyBtn);
  }
}

function suggestedVideosPopulate(reps){
  for (let i = 1; i < reps; i++){
    const videoContainer = document.getElementById("suggested-videos-container");
    let node = document.createElement('div')
    node.setAttribute('class', 'suggested-videos');
    videoContainer.appendChild(node);

    // add image
    let img = document.createElement('img');
    img.setAttribute('class', 'suggested-videos-thumbnail');
    img.setAttribute('src', 'images/test.jpg');
    img.setAttribute('alt', 'thumbnail image for videos');
    node.appendChild(img);
    //add video name
    let name = document.createElement('h4');
    name.setAttribute('class', 'suggested-videos-title');
    name.innerText = 'placeholder title';
    node.appendChild(name);
    // //add author
    let author = document.createElement('h5');
    author.setAttribute('class', 'suggested-videos-author');
    author.textContent = 'Video Author';
    node.appendChild(author);

    let views = document.createElement('h5');
    views.setAttribute('class', 'suggested-videos-views');
    views.textContent = '16M Views';
    node.appendChild(views);
    
  }
}