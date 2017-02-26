// a key map of allowed keys
var allowedKeys = {
  13: 'enter',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length)
      activateCheats();
  } else
    konamiCodePosition = 0;
});

function activateCheats() {
  // document.body.style.backgroundImage = "url('images/cheatBackground.png')";

  // var audio = new Audio('audio/pling.mp3');
  // audio.play();
    console.log(`%c                                                                                                                                                     
                                                                                                                                                    
   SSSSSSSSSSSSSSS                  lllllll                                                               DDDDDDDDDDDDD      HHHHHHHHH     HHHHHHHHH
 SS:::::::::::::::S                 l:::::l                                                               D::::::::::::DDD   H:::::::H     H:::::::H
S:::::SSSSSS::::::S                 l:::::l                                                               D:::::::::::::::DD H:::::::H     H:::::::H
S:::::S     SSSSSSS                 l:::::l                                                               DDD:::::DDDDD:::::DHH::::::H     H::::::HH
S:::::S               ooooooooooo    l::::l     eeeeeeeeeeee       mmmmmmm    mmmmmmm   nnnn  nnnnnnnn      D:::::D    D:::::D H:::::H     H:::::H  
S:::::S             oo:::::::::::oo  l::::l   ee::::::::::::ee   mm:::::::m  m:::::::mm n:::nn::::::::nn    D:::::D     D:::::DH:::::H     H:::::H  
 S::::SSSS         o:::::::::::::::o l::::l  e::::::eeeee:::::eem::::::::::mm::::::::::mn::::::::::::::nn   D:::::D     D:::::DH::::::HHHHH::::::H  
  SS::::::SSSSS    o:::::ooooo:::::o l::::l e::::::e     e:::::em::::::::::::::::::::::mnn:::::::::::::::n  D:::::D     D:::::DH:::::::::::::::::H  
    SSS::::::::SS  o::::o     o::::o l::::l e:::::::eeeee::::::em:::::mmm::::::mmm:::::m  n:::::nnnn:::::n  D:::::D     D:::::DH:::::::::::::::::H  
       SSSSSS::::S o::::o     o::::o l::::l e:::::::::::::::::e m::::m   m::::m   m::::m  n::::n    n::::n  D:::::D     D:::::DH::::::HHHHH::::::H  
            S:::::So::::o     o::::o l::::l e::::::eeeeeeeeeee  m::::m   m::::m   m::::m  n::::n    n::::n  D:::::D     D:::::DH:::::H     H:::::H  
            S:::::So::::o     o::::o l::::l e:::::::e           m::::m   m::::m   m::::m  n::::n    n::::n  D:::::D    D:::::D H:::::H     H:::::H  
SSSSSSS     S:::::So:::::ooooo:::::ol::::::le::::::::e          m::::m   m::::m   m::::m  n::::n    n::::nDDD:::::DDDDD:::::DHH::::::H     H::::::HH
S::::::SSSSSS:::::So:::::::::::::::ol::::::l e::::::::eeeeeeee  m::::m   m::::m   m::::m  n::::n    n::::nD:::::::::::::::DD H:::::::H     H:::::::H
S:::::::::::::::SS  oo:::::::::::oo l::::::l  ee:::::::::::::e  m::::m   m::::m   m::::m  n::::n    n::::nD::::::::::::DDD   H:::::::H     H:::::::H
 SSSSSSSSSSSSSSS      ooooooooooo   llllllll    eeeeeeeeeeeeee  mmmmmm   mmmmmm   mmmmmm  nnnnnn    nnnnnnDDDDDDDDDDDDD      HHHHHHHHH     HHHHHHHHH`, "font-family:monospace");

}
