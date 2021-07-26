        window.addEventListener("gamepadconnected", (event) => {
            console.log("A gamepad connected:");
            console.log(event.gamepad);
        });

        window.addEventListener("gamepaddisconnected", (event) => {
            console.log("A gamepad disconnected:");
            console.log(event.gamepad);
        });

        
        // Buttons Variables 
        
        let button_0 = document.getElementById("button-down");
        let button_1 = document.getElementById("button-right");
        let button_2 = document.getElementById("button-left");
        let button_3 = document.getElementById("button-up");
        let button_4 = document.getElementById("bumper-left");
        let button_5 = document.getElementById("bumper-right");
        let button_6 = document.getElementById("trigger-left");
        let button_7 = document.getElementById("trigger-right");
        let button_8 = document.getElementById("button-select");
        let button_9 = document.getElementById("button-start");
        let button_16 = document.getElementById("button-meta");
        let button_17 = document.getElementById("button-touchpad");
        
        // Sticks Variables
        
        let button_10 = document.getElementById("button-ls");
        let button_11 = document.getElementById("button-rs");
        
        let ls_horizontal = document.getElementById("ls-horizontal");
        let ls_vertical = document.getElementById("ls-vertical");
        
        let rs_horizontal = document.getElementById("rs-horizontal");
        let rs_vertical = document.getElementById("rs-vertical");
        
        // D-Pad Variables
        
        let button_12 = document.getElementById("dpad-up");
        let button_13 = document.getElementById("dpad-down");
        let button_14 = document.getElementById("dpad-left");
        let button_15 = document.getElementById("dpad-right");
        
        
        let buttons = [button_0,button_1,button_2,button_3,button_4,button_5,button_6,button_7,button_8,button_9,button_10,button_11,button_12,button_13,button_14,button_15,button_16,button_17]
        
        setInterval(function checkGamepad()
        {
            let gamepads = navigator.getGamepads();
          for (let i = 0; i < gamepads.length; i++) {
            if (gamepads[i] !== null) {
            //   console.log("")
            //   console.log("%c RELOAD", "color: red; font-size: 30px")
            //   console.log(`Player ${i} : ${gamepads[i].id }`);
            //   //console.log(gamepads[i])
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
            
            // ls_horizontal.textContent = gamepads[i].axes[0]
            // ls_vertical.textContent = gamepads[i].axes[1]
            // rs_horizontal.textContent = gamepads[i].axes[2]
            // rs_vertical.textContent = gamepads[i].axes[3]
            
            for (let j = 0; j < gamepads[i].buttons.length; j++) {

               // console.log(`Button ${j} pressed : ${gamepads[i].buttons[j].pressed}`)

                if (gamepads[i].buttons[j].pressed === true) {
                   // buttons[j].textContent = "Pressed"
                   buttons[j].classList.add("pressed")
                } else {
                   // buttons[j].textContent = "Not Pressed"
                   buttons[j].classList.remove("pressed")
                   
                }
                
             }

            }
            

            }
        }, 16.7)
        // 16.7ms = 1 frame
