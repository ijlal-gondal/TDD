

class Streamer {
    constructor() {
        // this.first = first;
        // this.last = last;

    }
    
    getContent() {
        getTime();
        console.log("Hello");
        
    }

    getTime() {

        let request = new XMLHttpRequest();
        request.open("GET", "http://worldtimeapi.org/api/ip");
        request.send();
        request.onload = () => {
          console.log(request);
          if (request.status === 200) {
            // by default the response comes in the string format, we need to parse the data into JSON
            console.log(JSON.parse(request.response));
          } else {
            console.log(`error ${request.status} ${request.statusText}`);
          }
        };
    }
    bla() {
        return "bla";
    }
   
}
let streamer = new Streamer();
 gym = streamer.getTime();
       console.log(gym);
module.exports = Streamer;