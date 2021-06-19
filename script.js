
var bookingData = [];
var hotelesData = [];
var kayakData = [];

var dataRecord = [bookingData, hotelesData, kayakData];
var fileNames = ["booking.csv", "hoteles.csv", "kayak.csv"];

let index = 0;

var carousel = document.getElementById("carouselExampleControls");
carousel.addEventListener("slide.bs.carousel", function(e){
    e.direction     // The direction in which the carousel is sliding (either "left" or "right").
    e.relatedTarget // The DOM element that is being slid into place as the active item.
    e.from          // The index of the current item.     
    e.to            // The index of the next item.
    index = e.to;
});

webgazer.setGazeListener((data, timestamp) => {
    if (data) {
        //console.log(data.x, data.y, timestamp)
        dataRecord[index].push([data.x, data.y, timestamp])
    }
}).begin()

var finish = document.getElementById("finish");
finish.onclick = function(e){
    

    fileNames.forEach(function(csvFile, i) {

        //define the heading for each row of the data  
        var csv = 'x,y,timestamp\n';  
        
        dataRecord[i].forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
        });

        //display the created CSV data on the web browser   
        document.write(csv);  
    
        
        var hiddenElement = document.createElement('a');  
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
        hiddenElement.target = '_blank';  
        
        //provide the name for the CSV file to be downloaded  
        hiddenElement.download = csvFile;  
        hiddenElement.click(); 
    }); 
   
     
};