function calculX(longA, latA, longB, latB){
    return (longB-longA) * Math.cos((latA+latB)/2);
}

function calculY(latA,latB){
    return latB-latA;
}

function calculZ(longA, latA,longB,latB){
    return Math.sqrt((calculX(longA, latA, longB, latB))^2+(calculY(latA,latB))^2);
}

function calculDistance(longA, latA,longB,latB){
    return 1.852*60*calculZ(longA, latA,longB,latB);
}