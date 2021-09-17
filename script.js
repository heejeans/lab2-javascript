// TODO: load the dataset 
let attractions;
fetch('attractions.json')
    .then(response => response.json())
    .then(data => {
        attractions = data;
        console.log(attractions);

let sortedall = attractions.sort(function (a, b){
    return a.Visitors - b.Visitors
});
sortedall.reverse();
let first_5_all = sortedall.slice(0, 5);
console.log(first_5_all);
renderBarChart(first_5_all);

function filterData(category) {
	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
     */
    if (category == "all"){
        let sortedall = attractions.sort(function (a, b){
            return a.Visitors - b.Visitors
        });
        sortedall.reverse();
        let first_5_all = sortedall.slice(0, 5);
        console.log(first_5_all);
        renderBarChart(first_5_all);
    }
    else{
    let categoryarray = attractions.filter(d=>{
        if (d.Category === category){
            console.log(d)
            return d;
        }
    })
    let sortedarray = categoryarray.sort(function (a, b){
        return a.Visitors - b.Visitors
    });
    sortedarray.reverse();
    let first_5_attractions = sortedarray.slice(0, 5);
    
    console.log(first_5_attractions);

	 /*
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 */
	renderBarChart(first_5_attractions);
	 /*
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
    }
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
document.querySelector("#attraction-category").addEventListener('change', (event) =>{
    console.log(event.target.value);
    const category = event.target.value;
    filterData(category)
})

});
