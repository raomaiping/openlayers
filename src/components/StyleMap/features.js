import areaGeo from '@/geoJson/china.json'
import { Feature } from 'ol'
import { MultiPolygon, Polygon, Point } from 'ol/geom'
import { Style, Fill, Stroke, Icon } from 'ol/style'
import { fromLonLat } from 'ol/proj'
// 获取边界的经纬度数据
const features = []
let routeFeature = null
areaGeo.forEach((lineData) => {
  if (lineData.geometry.type == "MultiPolygon") {
    routeFeature = new Feature({
      geometry: new MultiPolygon(
        lineData.geometry.coordinates
      ).transform("EPSG:4326", "EPSG:3857")
    });
  } else if (lineData.geometry.type == "Polygon") {
    routeFeature = new Feature({
      geometry: new Polygon(
        lineData.geometry.coordinates
      ).transform("EPSG:4326", "EPSG:3857")
    });
  }
  routeFeature.setStyle(
    // new Style({
    //   fill: new Fill({ color: "#4e98f444" }),
    // })
    // new Style({
    //   // 或者使用rgba格式
    //   fill: new Fill({ color: [178, 99, 37, 0.5] })
    // })
    new Style({
      fill: new Fill({ color: "#4e98f444" }),
      stroke: new Stroke({
        width: 1,
        color: [71, 137, 227, 1]
      })
    })
  );

  features.push(routeFeature)
})

const styleIcon = new Style({
  // 设置图片效果
  image: new Icon({
    src: 'https://openlayers.org/en/latest/examples/data/icon.png',
  })
});

const features1 = []
let routeFeature1 = new Feature({
  geometry: new Point(
    fromLonLat([104.912777, 34.730746])
  ),
});
routeFeature1.setStyle(styleIcon);
features1.push(routeFeature1)

export { features, features1 }