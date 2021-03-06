 let controller_index = 0;
      
 document.getElementById('player_select').addEventListener('change', function() {
    controller_index = this.value
  });

     
     window.addEventListener("gamepadconnected", (event) => {
            console.log("A gamepad connected:");
            ps4_controller.classList.add("display");
            controller_select.classList.add("display");
            no_controller.classList.remove("display");
            console.log(event.gamepad);      

            let option = document.createElement("option");
            option.value = event.gamepad.index
            option.text = `Player ${event.gamepad.index}`
            selectList.appendChild(option);
        });

        
        window.addEventListener("gamepaddisconnected", (event) => {
            console.log("A gamepad disconnected:");
            no_controller.classList.add("display");
            controller_select.classList.remove("display");
            ps4_controller.classList.remove("display");
            xboxone_controller.classList.remove("display");
            console.log(event.gamepad);
        });

        //Controllers variables

        let no_controller = document.getElementById("no-controller")
        let controller_select = document.getElementById("controller-select")
        let ps4_controller = document.getElementById("ps4");
        let xboxone_controller = document.getElementById("xbox-one")
        let gc_controller = document.getElementById("gcc")
        let pro_controller = document.getElementById("procon")
        
        // Buttons Variables 
        
        let button_0 = document.getElementsByName("button-down");
        let button_1 = document.getElementsByName("button-right");
        let button_2 = document.getElementsByName("button-left");
        let button_3 = document.getElementsByName("button-up");
        let button_4 = document.getElementsByName("bumper-left");
        let button_5 = document.getElementsByName("bumper-right");
        let button_6 = document.getElementsByName("trigger-left");
        let button_7 = document.getElementsByName("trigger-right");
        let button_8 = document.getElementsByName("button-select");
        let button_9 = document.getElementsByName("button-start");
        let button_16 = document.getElementsByName("button-meta");
        let button_17 = document.getElementsByName("button-touchpad");
        
        // Sticks Variables
        
        let button_10 = document.getElementsByName("button-ls");
        let button_11 = document.getElementsByName("button-rs");
        
        let ls_horizontal = document.getElementsByName("ls-horizontal");
        let ls_vertical = document.getElementsByName("ls-vertical");
        
        let rs_horizontal = document.getElementsByName("rs-horizontal");
        let rs_vertical = document.getElementsByName("rs-vertical");
        
        // D-Pad Variables
        
        let button_12 = document.getElementsByName("dpad-up");
        let button_13 = document.getElementsByName("dpad-down");
        let button_14 = document.getElementsByName("dpad-left");
        let button_15 = document.getElementsByName("dpad-right");
        
        let buttons = [button_0,button_1,button_2,button_3,button_4,button_5,button_6,button_7,button_8,button_9,button_10,button_11,button_12,button_13,button_14,button_15,button_16,button_17]
       
        let controllers_connected = []
        let selectList = document.getElementById("player_select")
        
        let backgroundApp = document.getElementById("background")
        
        setInterval(function checkGamepad()
        {

            document.getElementById('controllers-selection').addEventListener('changed', function(e){
                switch (iconSelect.getSelectedValue()) {
                    case "ps4":
                        ps4_controller.classList.add("display")
                        xboxone_controller.classList.remove("display")
                        gc_controller.classList.remove("display")
                        pro_controller.classList.remove("display")          
                        break;
                    
                    case "xboxone":
                        xboxone_controller.classList.add("display")
                        ps4_controller.classList.remove("display")
                        gc_controller.classList.remove("display")
                        pro_controller.classList.remove("display")
                        break;

                    case "gcc":
                        gc_controller.classList.add("display") 
                        xboxone_controller.classList.remove("display")
                        ps4_controller.classList.remove("display")
                        pro_controller.classList.remove("display")
                        break;
                    
                    case "procon":
                        pro_controller.classList.add("display")
                        gc_controller.classList.remove("display") 
                        xboxone_controller.classList.remove("display")
                        ps4_controller.classList.remove("display")
                        break;

                    default:
                        break;
                }
            });

            let gamepads = navigator.getGamepads();
         
                    if (gamepads[controller_index] !== null) {
                        //XBOX ONE
                        buttons[10][0].style.marginLeft = `${gamepads[controller_index].axes[0] * 22}px`
                        buttons[10][0].style.marginTop = `${gamepads[controller_index].axes[1] * 22}px`
                        buttons[10][0].style.transform = `rotateY(${gamepads[controller_index].axes[0] * 22}deg) rotateX(${gamepads[controller_index].axes[1] * -22}deg)`
    
                        buttons[11][0].style.marginLeft = `${gamepads[controller_index].axes[2] * 22}px`
                        buttons[11][0].style.marginTop = `${gamepads[controller_index].axes[3] * 22}px`
                        buttons[11][0].style.transform = `rotateY(${gamepads[controller_index].axes[2] * 22}deg) rotateX(${gamepads[controller_index].axes[3] * -22}deg)`
                        
                        buttons[6][0].style.opacity = gamepads[controller_index].buttons[6].value
                        buttons[7][0].style.opacity = gamepads[controller_index].buttons[7].value
                        
                        //PS4
                        buttons[10][1].style.marginLeft = `${gamepads[controller_index].axes[0] * 22}px`
                        buttons[10][1].style.marginTop = `${gamepads[controller_index].axes[1] * 22}px`
                        buttons[10][1].style.transform = `rotateY(${gamepads[controller_index].axes[0] * 22}deg) rotateX(${gamepads[controller_index].axes[1] * -22}deg)`
    
                        buttons[11][1].style.marginLeft = `${gamepads[controller_index].axes[2] * 22}px`
                        buttons[11][1].style.marginTop = `${gamepads[controller_index].axes[3] * 22}px`
                        buttons[11][1].style.transform = `rotateY(${gamepads[controller_index].axes[2] * 22}deg) rotateX(${gamepads[controller_index].axes[3] * -22}deg)`
                        
                        buttons[6][1].style.opacity = gamepads[controller_index].buttons[6].value
                        buttons[7][1].style.opacity = gamepads[controller_index].buttons[7].value

                        //PROCON
                        buttons[10][3].style.marginLeft = `${gamepads[controller_index].axes[0] * 22}px`
                        buttons[10][3].style.marginTop = `${gamepads[controller_index].axes[1] * 22}px`
                        buttons[10][3].style.transform = `rotateY(${gamepads[controller_index].axes[0] * 22}deg) rotateX(${gamepads[controller_index].axes[1] * -22}deg)`
    
                        buttons[11][3].style.marginLeft = `${gamepads[controller_index].axes[2] * 22}px`
                        buttons[11][3].style.marginTop = `${gamepads[controller_index].axes[3] * 22}px`
                        buttons[11][3].style.transform = `rotateY(${gamepads[controller_index].axes[2] * 22}deg) rotateX(${gamepads[controller_index].axes[3] * -22}deg)`
                        
                        buttons[6][3].style.opacity = gamepads[controller_index].buttons[6].value
                        buttons[7][3].style.opacity = gamepads[controller_index].buttons[7].value

                        //GCC
                        buttons[10][2].style.marginLeft = `${gamepads[controller_index].axes[0] * 22}px`
                        buttons[10][2].style.marginTop = `${gamepads[controller_index].axes[1] * 22}px`
                        buttons[10][2].style.transform = `rotateY(${gamepads[controller_index].axes[0] * 22}deg) rotateX(${gamepads[controller_index].axes[1] * -22}deg)`
    
                        buttons[11][2].style.marginLeft = `${gamepads[controller_index].axes[5] * 22}px`
                        buttons[11][2].style.marginTop = `${gamepads[controller_index].axes[2] * 22}px`
                        buttons[11][2].style.transform = `rotateY(${gamepads[controller_index].axes[3] * 22}deg) rotateX(${gamepads[controller_index].axes[5] * -22}deg)`
                    
                        buttons[4][2].style.opacity = gamepads[controller_index].axes[3]
                        buttons[5][2].style.opacity = gamepads[controller_index].axes[4]

                        for (let j = 0; j < gamepads[controller_index].buttons.length; j++) {

                            if (gamepads[controller_index].buttons[j].pressed === true) {
                                buttons[j][0].classList.add("pressed")
                                buttons[j][1].classList.add("pressed")
                                buttons[j][2].classList.add("pressed")
                                buttons[j][3].classList.add("pressed")
                            } else {
                                buttons[j][0].classList.remove("pressed")
                                buttons[j][1].classList.remove("pressed")
                                buttons[j][2].classList.remove("pressed")
                                buttons[j][3].classList.remove("pressed")
                            }   
                        }
                    }

           backgroundApp.style.backgroundColor = document.getElementById("colorPicker").value
        }, 16.7)
        // 16.7ms = 1 frame