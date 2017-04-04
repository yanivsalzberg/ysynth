


function playC4(){

  nodeC4.gain.value = .2;


  setTimeout(function(){
  nodeC4.gain.value = 0; /*The volume of the audio*/
}, 1000);



setTimeout(function(){
nodeC4.gain.value = .2; /*The volume of the audio*/
}, 2000);



setTimeout(function(){
nodeC4.gain.value = 0; /*The volume of the audio*/
}, 3000);

}



//  create synth with all the notes playing all the time, then just turn them up and down with
