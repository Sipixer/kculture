import { mapObject } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const floatConfig = {
transform(props, { map }) {
  const { offset = "0", offsetX = offset, offsetY = offset, placement = "top-end", ...rest } = props;
  return {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    insetBlockStart: map(placement, (v) => {
      const [side] = v.split("-");
      return { top: offsetY, middle: "50%", bottom: "auto" }[side];
    }),
    insetBlockEnd: map(placement, (v) => {
      const [side] = v.split("-");
      return { top: "auto", middle: "50%", bottom: offsetY }[side];
    }),
    insetInlineStart: map(placement, (v) => {
      const [, align] = v.split("-");
      return { start: offsetX, center: "50%", end: "auto" }[align];
    }),
    insetInlineEnd: map(placement, (v) => {
      const [, align] = v.split("-");
      return { start: "auto", center: "50%", end: offsetX }[align];
    }),
    translate: map(placement, (v) => {
      const [side, align] = v.split("-"), mapX = { start: "-50%", center: "-50%", end: "50%" }, mapY = { top: "-50%", middle: "-50%", bottom: "50%" };
      return `${mapX[align]} ${mapY[side]}`;
    }),
    ...rest
  };
}}

export const getFloatStyle = (styles = {}) => floatConfig.transform(styles, { map: mapObject })

export const float = (styles) => css(getFloatStyle(styles))
float.raw = getFloatStyle