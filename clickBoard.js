function playC4(){
    nodeC4.gain.value = .6;
    setTimeout(function(){
      nodeC4.gain.value = 0; /*The volume of the audio*/
    }, 100);
};

function playD4(){
    nodeD4.gain.value = .5;
    setTimeout(function(){
      nodeD4.gain.value = 0; /*The volume of the audio*/
    }, 100);
};


function playE4(){
    nodeE4.gain.value = .4;
    setTimeout(function(){
      nodeE4.gain.value = 0; /*The volume of the audio*/
    }, 100);
};


function playG4(){
    nodeG4.gain.value = .3;
    setTimeout(function(){
      nodeG4.gain.value = 0; /*The volume of the audio*/
    }, 100);
};

function playA4(){
    nodeA4.gain.value = .2;
    setTimeout(function(){
      nodeA4.gain.value = 0; /*The volume of the audio*/
    }, 100);
};

function playC5(){
    nodeC5.gain.value = .1;
    setTimeout(function(){
      nodeC5.gain.value = 0; /*The volume of the audio*/
    }, 100);
};

function mute(){
  nodeC4.gain.value = 0;
  nodeD4.gain.value = 0;
  nodeE4.gain.value = 0;
  nodeG4.gain.value = 0;
  nodeA4.gain.value = 0;
  nodeC5.gain.value = 0;
}
