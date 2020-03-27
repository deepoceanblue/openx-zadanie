import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  findDuplicateValues(arr, prop: string) {
    let isDuplicate = {};
    // simplifies code
    let duplicates: string[];

    for(let item of arr){
      if(isDuplicate.hasOwnProperty(item[prop])) {
        if(isDuplicate[item[prop]] === false) {
          isDuplicate[item[prop]] = true;
          duplicates.push(item[prop]);
        } // przy true item już jest zapisany w duplikatach
      } else {
        isDuplicate[item[prop]] = false;
      }
    }

    return duplicates;
  }

  countPerUser(items): number[] {
    let ipu = []; // items-per-user
    items.forEach( i => { (ipu[i.userId] === undefined) ? ipu[i.userId] = 1 : ipu[i.userId]++; });
    return ipu;
  }

  calculateGeoDistance(pointSet, originIndex: number) {
    // degrees to radians
    const degToRad = (degree) => degree * Math.PI / 180;
    let o = {lat: null, lng: null};
    o.lat = pointSet[originIndex].lat;
    o.lng = pointSet[originIndex].lng;
    // exact haversine not needed as we only need relative differences
    function equirectangularProjection(latitude1, longitude1, latitude2, longitude2) {
      latitude1 = degToRad(latitude1);
      longitude1 = degToRad(longitude1);
      latitude2 = degToRad(latitude2);
      longitude2 = degToRad(longitude2);
      const earthRadius = 6371; // earth radius
      const x = (longitude2 - longitude1) * Math.cos((latitude1 + latitude2) / 2);
      const y = (latitude2 - latitude1);
      return Math.sqrt(x * x + y * y) * earthRadius;
    }

    /* function findNearestGeo(latitude, longitude) { */
    let minDistance = 99999;
    let closest;

    pointSet.forEach(
      (p, i) => {
         if (i != originIndex) {
           const distance = equirectangularProjection(o.lat, o.lng, p.lat, p.lng);
           if (distance < minDistance) {
              closest = i;
              minDistance = distance;
           }
         }
       }
    );
    return closest;
  } // end of calculateDistance()
}
