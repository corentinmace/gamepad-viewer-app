 
     window.addEventListener("gamepadconnected", (event) => {
            console.log("A gamepad connected:");
            ps4_controller.classList.add("display");
            controller_select.classList.add("display");
            no_controller.classList.remove("display");
            console.log(event.gamepad);
        });

        window.addEventListener("gamepaddisconnected", (event) => {
            console.log("A gamepad disconnected:");
            no_controller.classList.add("display");
            controller_select.classList.remove("display");
            ps4_controller.classList.remove("display");
            xboxone_controller.classList.remove("display");
            console.log(event.gamepad);
        });

        function select_ps4() {
            ps4_controller.classList.add("display")
            xboxone_controller.classList.remove("display")
        }

        function select_xbox_one() {
            ps4_controller.classList.remove("display")
            xboxone_controller.classList.add("display")
        }

        let no_controller = document.getElementById("no-controller")
        let controller_select = document.getElementById("controller-select")
        let ps4_controller = document.getElementById("ps4");
        let xboxone_controller = document.getElementById("xbox-one")
        
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
        
        let backgroundApp = document.getElementById("background")

        setInterval(function checkGamepad()
        {
            let gamepads = navigator.getGamepads();
          for (let i = 0; i < gamepads.length; i++) {
            if (gamepads[i] !== null) {
            //   console.log("")
            //   console.log("%c RELOAD", "color: red; font-size: 30px")
            //   console.log(`Player ${i} : ${gamepads[i].id }`);
               //console.log(`Controller ${i} : ${gamepads[i]}`)
            //   console.log("")
            //   console.log("%c BUTTONS", "color: gold; font-size: 20px; font-weight: bold")
            //   console.log("Button Down", gamepads[i].buttons[0])
            //   console.log("Button Right", gamepads[i].buttons[1])
            //   console.log("Button Up", gamepads[i].buttons[2])
            //   console.log("Button Left", gamepads[i].buttons[3])
            //   console.log("Bumper Left", gamepads[i].buttons[4])
            //   console.log("Bumper Right", gamepads[i].buttons[5])
            //   console.log("Trigger Left", gamepads[i].buttons[6])
            //   console.log("Trigger Right", gamepads[i].buttons[7])
            //   console.log("Start", gamepads[i].buttons[8])
            //   console.log("Select", gamepads[i].buttons[9])
            //   console.log("Left Stick Button", gamepads[i].buttons[10])
            //   console.log("Right Stick Button", gamepads[i].buttons[11])
            //   console.log("(Layout Switch) Home", gamepads[i].buttons[16])
            //   console.log("(Layout Switch) Screenshot", gamepads[i].buttons[17])
            //   console.log("")
            //   console.log("%c D-PAD", "color: gold; font-size: 20px; font-weight: bold")
            //   console.log("D-Pad Up", gamepads[i].buttons[12])
            //   console.log("D-Pad Down", gamepads[i].buttons[13])
            //   console.log("D-Pad Left", gamepads[i].buttons[14])
            //   console.log("D-Pad Right", gamepads[i].buttons[15])
            //   console.log("")
            //   console.log("%c STICKS", "color: gold; font-size: 20px; font-weight: bold")
            //   console.log("(-1 = Left, 0 = Neutral, 1 = Right)")
            //   console.log("(-1 = Up, 0 = Neutral, 1 = Down)")
            //   console.log("Left Stick Horizontal Axis", gamepads[i].axes[0])
            //   console.log("Left Stick Vertical Axis", gamepads[i].axes[1])
            //   console.log("Right Stick Horizontal Axis", gamepads[i].axes[2])
            //   console.log("Left Stick Vertical Axis", gamepads[i].axes[3])
            //   console.log("%c ____________________________", "color: red; font-size: 30px")

            buttons[10][0].style.marginLeft = `${gamepads[0].axes[0] * 22}px`
            buttons[10][0].style.marginTop = `${gamepads[0].axes[1] * 22}px`
            buttons[10][0].style.transform = `rotateY(${gamepads[0].axes[0] * 22}deg) rotateX(${gamepads[0].axes[1] * -22}deg)`

            buttons[11][0].style.marginLeft = `${gamepads[0].axes[2] * 22}px`
            buttons[11][0].style.marginTop = `${gamepads[0].axes[3] * 22}px`
            buttons[11][0].style.transform = `rotateY(${gamepads[0].axes[2] * 22}deg) rotateX(${gamepads[0].axes[3] * -22}deg)`
           
            buttons[10][1].style.marginLeft = `${gamepads[0].axes[0] * 22}px`
            buttons[10][1].style.marginTop = `${gamepads[0].axes[1] * 22}px`
            buttons[10][1].style.transform = `rotateY(${gamepads[0].axes[0] * 22}deg) rotateX(${gamepads[0].axes[1] * -22}deg)`

            buttons[11][1].style.marginLeft = `${gamepads[0].axes[2] * 22}px`
            buttons[11][1].style.marginTop = `${gamepads[0].axes[3] * 22}px`
            buttons[11][1].style.transform = `rotateY(${gamepads[0].axes[2] * 22}deg) rotateX(${gamepads[0].axes[3] * -22}deg)`

            buttons[6][1].style.opacity = gamepads[0].buttons[6].value
            buttons[7][1].style.opacity = gamepads[0].buttons[7].value

            buttons[6][0].style.opacity = gamepads[0].buttons[6].value
            buttons[7][0].style.opacity = gamepads[0].buttons[7].value
            
            for (let j = 0; j < gamepads[0].buttons.length; j++) {

                if (gamepads[0].buttons[j].pressed === true) {
                    buttons[j][0].classList.add("pressed")
                    buttons[j][1].classList.add("pressed")
                } else {
                   buttons[j][0].classList.remove("pressed")
                   buttons[j][1].classList.remove("pressed")
                }
                
             }

            }
            

            }
           backgroundApp.style.backgroundColor = document.getElementById("colorPicker").value
        }, 16.7)
        // 16.7ms = 1 frame
        

