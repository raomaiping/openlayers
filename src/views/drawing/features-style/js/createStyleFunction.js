import { Text, Fill, Stroke, Style, Circle } from "ol/style";
import { Point, LineString, Polygon } from "ol/geom";
import { Feature } from "ol";
import { Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";

/**
 * 创建文本样式函数
 * @param {ol.Feature} feature 要素
 * @param  textStyleForm 文字表单
 */

const createTextStyle = (feature, textStyleForm) => {
  const {
    align, // 位置
    baseline, // 基线
    rotation, // 旋转角度
    fontStyle, // 字体
    fontWeight, // 字体粗细
    fontSize, // 字体大小
    offsetX, // X偏移量
    offsetY, // Y偏移量
    fillColor, // 字体颜色
    outlineColor, // 文字外框颜色
    outlineWidth, // 文字外框宽度
  } = textStyleForm;
  //返回实例化的文本样式对象（ol.style.Text）
  return new Text({
    //位置
    textAlign: align,
    //基准线
    textBaseline: baseline,
    //文字样式（粗细、大小、字体）
    font: `${fontWeight} ${fontSize}px ${fontStyle}`,
    //文本内容
    text: feature.get("name"),
    //文本填充样式（即文字颜色）
    fill: new Fill({ color: fillColor }),
    //文本外框样式（颜色与宽度）
    stroke: new Stroke({ color: outlineColor, width: outlineWidth }),
    //偏移量X
    offsetX: offsetX,
    //偏移量Y
    offsetY: offsetY,
    //角度
    rotation: rotation,
  });
};

/**
 * 创建点要素样式函数
 * @param {Number} radius 点大小(radius)
 * @param {String} fillColor 填充颜色(color)
 * @param {String} strokeColor 边框样式(color)
 * @param {Number} strokeWidth 边框样式(width)
 * @param {Object} textStyleForm 文字表单
 */
const createPointStyleFunction = ({
  patterningForm: { radius, fillColor, strokeColor, strokeWidth },
  textStyleForm,
}) => {
  return (feature) => {
    const style = new Style({
      image: new Circle({
        radius: radius,
        fill: new Fill({ color: fillColor }),
        stroke: new Stroke({ color: strokeColor, width: strokeWidth }),
      }),
      text: createTextStyle(feature, textStyleForm),
    });
    return [style];
  };
};

/**
 * 创建线要素样式函数
 * @param {String} strokeColor 边框样式(color)
 * @param {Number} strokeWidth 边框样式(width)
 * @param {Object} textStyleForm 文字表单
 */
const createLineStyleFunction = ({
  patterningForm: { strokeColor, strokeWidth },
  textStyleForm,
}) => {
  return (feature) => {
    const style = new Style({
      stroke: new Stroke({
        color: strokeColor,
        width: strokeWidth,
      }),
      text: createTextStyle(feature, textStyleForm),
    });
    return [style];
  };
};

/**
 * 创建区要素样式函数
 * @param {String} fillColor 填充颜色(color)
 * @param {String} strokeColor 边框样式(color)
 * @param {Number} strokeWidth 边框样式(width)
 * @param {Object} textStyleForm 文字表单
 */
const createPolygonStyleFunction = ({
  patterningForm: { fillColor, strokeColor, strokeWidth },
  textStyleForm,
}) => {
  return (feature) => {
    const style = new Style({
      stroke: new Stroke({
        color: strokeColor,
        width: strokeWidth,
      }),
      fill: new Fill({
        color: fillColor,
      }),
      text: createTextStyle(feature, textStyleForm),
    });
    return [style];
  };
};
//绘制的几何图形要素
const pointFeature = new Feature({
  geometry: new Point([114.1947, 30.5255]),
  name: "点",
});

const lineFeature = new Feature({
  geometry: new LineString([
    [114.2218, 30.5695],
    [114.2829, 30.4912],
  ]),
  name: "线",
});

const polygonFeature = new Feature({
  geometry: new Polygon([
    [
      [114.2757, 30.5822],
      [114.3526, 30.5879],
      [114.3608, 30.5367],
      [114.3234, 30.5187],
      [114.2826, 30.553],
    ],
  ]),
  name: "面",
});

//分别实例化点、线、区图层对象
export const vectorPoints = new VectorLayer({
  source: new VectorSource({
    features: [pointFeature],
  }),
});

export const vectorLines = new VectorLayer({
  source: new VectorSource({
    features: [lineFeature],
  }),
});
export const vectorPolygons = new VectorLayer({
  source: new VectorSource({
    features: [polygonFeature],
  }),
});
const createStyleFunction = {
  point: (pointForm) =>
    vectorPoints.setStyle(createPointStyleFunction(pointForm)),
  line: (lineForm) => vectorLines.setStyle(createLineStyleFunction(lineForm)),
  polygon: (polygonForm) =>
    vectorPolygons.setStyle(createPolygonStyleFunction(polygonForm)),
};

export default (type, value) => {
  createStyleFunction[type](value);
};
