/*Init the AudioContext and webkitAudioContext*/
var synthC4 = new(window.AudioContext || window.webkitAudioContext)();
/*Define oscillator and node*/
var oscillatorC4 = synthC4.createOscillator();
var nodeC4 = synthC4.createGain();
/*Connect the oscillator to the node, and the node to the audio output*/
oscillatorC4.connect(nodeC4);
nodeC4.connect(synthC4.destination);
/*The Waveform of the oscillator, other values are 'saw' or 'square'*/
oscillatorC4.type = 'sine';
/*The Frequeny of the oscillator in hertz, 440 equals an "A4"*/
oscillatorC4.frequency.value = 261.63;
/*The volume of the audio*/
nodeC4.gain.value = 0;
// Start the oscillator now
oscillatorC4.start(synthC4.currentTime);



/*Init the AudioContext and webkitAudioContext*/
var synthD4 = new(window.AudioContext || window.webkitAudioContext)();
/*Define oscillator and node*/
var oscillatorD4 = synthD4.createOscillator();
var nodeD4 = synthD4.createGain();
/*Connect the oscillator to the node, and the node to the audio output*/
oscillatorD4.connect(nodeD4);
nodeD4.connect(synthD4.destination);
/*The Waveform of the oscillator, other values are 'saw' or 'square'*/
oscillatorD4.type = 'sine';
/*The Frequeny of the oscillator in hertz, 440 equals an "A4"*/
oscillatorD4.frequency.value = 294.33;
/*The volume of the audio*/
nodeD4.gain.value = 0;
// Start the oscillator now
oscillatorD4.start(synthD4.currentTime);



/*Init the AudioContext and webkitAudioContext*/
var synthE4 = new(window.AudioContext || window.webkitAudioContext)();
/*Define oscillator and node*/
var oscillatorE4 = synthE4.createOscillator();
var nodeE4 = synthE4.createGain();
/*Connect the oscillator to the node, and the node to the audio output*/
oscillatorE4.connect(nodeE4);
nodeE4.connect(synthE4.destination);
/*The Waveform of the oscillator, other values are 'saw' or 'square'*/
oscillatorE4.type = 'sine';
/*The Frequeny of the oscillator in hertz, 440 equals an "A4"*/
oscillatorE4.frequency.value = 327.03;
/*The volume of the audio*/
nodeE4.gain.value = 0;
// Start the oscillator now
oscillatorE4.start(synthE4.currentTime);



/*Init the AudioContext and webkitAudioContext*/
var synthG4 = new(window.AudioContext || window.webkitAudioContext)();
/*Define oscillator and node*/
var oscillatorG4 = synthG4.createOscillator();
var nodeG4 = synthG4.createGain();
/*Connect the oscillator to the node, and the node to the audio output*/
oscillatorG4.connect(nodeG4);
nodeG4.connect(synthG4.destination);
/*The Waveform of the oscillator, other values are 'saw' or 'square'*/
oscillatorG4.type = 'sine';
/*The Frequeny of the oscillator in hertz, 440 equals an "A4"*/
oscillatorG4.frequency.value = 392.44;
/*The volume of the audio*/
nodeG4.gain.value = 0;
// Start the oscillator now
oscillatorG4.start(synthG4.currentTime);



/*Init the AudioContext and webkitAudioContext*/
var synthA4 = new(window.AudioContext || window.webkitAudioContext)();
/*Define oscillator and node*/
var oscillatorA4 = synthA4.createOscillator();
var nodeA4 = synthA4.createGain();
/*Connect the oscillator to the node, and the node to the audio output*/
oscillatorA4.connect(nodeA4);
nodeA4.connect(synthA4.destination);
/*The Waveform of the oscillator, other values are 'saw' or 'square'*/
oscillatorA4.type = 'sine';
/*The Frequeny of the oscillator in hertz, 440 equals an "A4"*/
oscillatorA4.frequency.value = 436.05;
/*The volume of the audio*/
nodeA4.gain.value = 0;
// Start the oscillator now
oscillatorA4.start(synthA4.currentTime);



/*Init the AudioContext and webkitAudioContext*/
var synthC5 = new(window.AudioContext || window.webkitAudioContext)();
/*Define oscillator and node*/
var oscillatorC5 = synthC5.createOscillator();
var nodeC5 = synthC5.createGain();
/*Connect the oscillator to the node, and the node to the audio output*/
oscillatorC5.connect(nodeC5);
nodeC5.connect(synthC5.destination);
/*The Waveform of the oscillator, other values are 'saw' or 'square'*/
oscillatorC5.type = 'sine';
/*The Frequeny of the oscillator in hertz, 440 equals an "A4"*/
oscillatorC5.frequency.value = 523.25;
/*The volume of the audio*/
nodeC5.gain.value = 0;
// Start the oscillator now
oscillatorC5.start(synthC5.currentTime);
