const rangeFinder = (index) => {
    let range = '';
     if(index > 0 && index <= 100){
        range = "0-101";
    } else if(index > 100 && index <= 200){
        range = "101-200";
    } else if(index > 200 && index <= 300){
        range = "201-300";
    } else if(index > 300 && index <= 400){
        range = "301-400";
    } else if(index > 400 && index <= 500){
        range = "401-500";
    } else if(index > 500 && index <= 600){
        range = "501-600";
    } else if(index > 600 && index <= 700){
        range = "601-700";
    } else if(index > 700 && index <= 800){
        range = "701-800";
    } else if(index > 800 && index <= 900){
        range = "801-900";
    } else if(index > 900){
        range = "900-above";
    }
    return range;
}

module.exports = rangeFinder;