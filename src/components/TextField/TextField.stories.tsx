// import { action } from '@storybook/addon-actions';
import React from "react";
import { sizeVariants, shapeVariants } from "../../config";
import "../../styles/init.scss";
import TextField from "./TextField";
import { ReactComponent as LeftIcon } from "../../img/icons/icon-search.svg";
import { ReactComponent as RightIcon } from "../../img/icons/icon-eye.svg";

export default {
  component: TextField,
  title: "TextField",
};

export const sizes = () => (
  <div className="story-container">
    {sizeVariants.map((size: any) => (
      <div key={size} className="story-item">
        <TextField size={size} placeholder="Text field" />
      </div>
    ))}
  </div>
);

export const disabled = () => (
  <div className="story-container">
    {sizeVariants.map((size: any) => (
      <div key={size} className="story-item">
        <TextField size={size} disabled={true} placeholder="Text field" />
      </div>
    ))}
  </div>
);

export const withLeftIcon = () => (
  <div className="story-container">
    {sizeVariants.map((size: any) => (
      <div key={size} className="story-item">
        <TextField
          size={size}
          placeholder="Text field"
          leftIcon={<LeftIcon />}
        />
      </div>
    ))}
  </div>
);

export const withRightIcon = () => (
  <div className="story-container">
    {sizeVariants.map((size: any) => (
      <div key={size} className="story-item">
        <TextField
          type="password"
          size={size}
          placeholder="Text field"
          rightIcon={<RightIcon />}
        />
      </div>
    ))}
  </div>
);

export const shapes = () => (
  <div className="story-container">
    {shapeVariants.map((shape: any) => (
      <div key={shape} className="story-item">
        <TextField shape={shape} placeholder="Text field" />
      </div>
    ))}
  </div>
);
