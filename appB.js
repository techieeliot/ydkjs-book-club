/**
 * 
 Use moment
 Need to use a regex
 const dayStart = "07:30";
 const dayEnd = "17:45";
 let result = true;
 function scheduleMeeting(startTime,durationMinutes) {
     let meetingEnd = startTime + durationMinutes;
     console.log(meetingEnd);
     if(startTime <= dayStart) {
         result = false;
     }
     if (meetingEnd >= dayEnd) {
         result = false;
     }
     return result;
 
     
 }
 
 scheduleMeeting("7:00",15);     // false
 scheduleMeeting("07:15",30);    // false
 scheduleMeeting("7:30",30);     // true
 scheduleMeeting("11:30",60);    // true
 scheduleMeeting("17:00",45);    // true
 scheduleMeeting("17:30",30);    // false
 scheduleMeeting("18:00",15);    // false
 */

function range(start,end) {
    start = Number(start);
    end = Number(end);
    const result = [];
    for (let i = start; i < end; i++) {
        {result.push(i)};
    }
    console.log(result);
    
}

range(3,3);    // [3]
/* 

range(3,8);    // [3,4,5,6,7,8]
range(3,0);    // []

var start3 = range(3);
var start4 = range(4);

start3(3);     // [3]
start3(8);     // [3,4,5,6,7,8]
start3(0);     // []

start4(6);     // [4,5,6]
*/

/*
function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
    symbols: [
        "X", "Y", "Z", "W", "$", "*", "<", "@"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        return this.symbols[this.position];
    }
};

var slotMachine = {
    reels: [
        // this slot machine needs 3 separate reels
        // hint: Object.create(..)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel){
            reel.spin();
        });
    },
    function randMax(max) {
        return Math.trunc(1E9 * Math.random()) % max;
    }
    
    var reel = {
        symbols: [
            "X", "Y", "Z", "W", "$", "*", "<", "@"
        ],
        spin() {
            if (this.position == null) {
                this.position = randMax(
                    this.symbols.length - 1
                );
            }
            this.position = (
                this.position + 100 + randMax(100)
            ) % this.symbols.length;
        },
        display() {
            if (this.position == null) {
                this.position = randMax(
                    this.symbols.length - 1
                );
            }
            return this.symbols[this.position];
        }
    };
    
    var slotMachine = {
        reels: [
            // this slot machine needs 3 separate reels
            // hint: Object.create(..)
        ],
        spin() {
            this.reels.forEach(function spinReel(reel){
                reel.spin();
            });
        },
        display() {
            // TODO
        }
    };
    
    slotMachine.spin();
    slotMachine.display();
    // < | @ | *
    // @ | X | <
    // X | Y | @
    
    slotMachine.spin();
    slotMachine.display();
    // Z | X | W
    // W | Y | $
    // $ | Z | *
*/