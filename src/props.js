import { MeshToonMaterial, MeshBasicMaterial } from 'three';
import { Power3 } from 'gsap';

import _hasTouch from './util/hasTouch';
import _hasGPU from './util/hasGPU';
import radian from './util/radian';

// GLOBALS
export const HAS_TOUCH = _hasTouch();
export const HAS_GPU = _hasGPU();
export const PADDING_LEFT = HAS_TOUCH ? 35 : 144 * 0.75;
export const PADDING_TOP = HAS_TOUCH ? 60 : 96 * 0.75;

// GSAP TWEEN VARS
// export const elasticEase = Elastic.easeOut.config(0.5, 1);
export const elasticEase = Elastic.easeOut.config(0.3, 0.6);
export const elasticEaseStrong = Elastic.easeOut.config(0.7, 0.6);
export const fadeInFromVars = { opacity: 0, x: 16, y: 78, rotationZ: 15 };
export const fadeInToVars = { opacity: 1, x: 0, y: 0, rotationZ: 0, ease: elasticEase };

export const fadeInFromVarsClassic = { opacity: 0, x: 4, y: 16, rotationZ: 5 };
export const fadeInToVarsClassic = { opacity: 1, x: 0, y: 0, rotationZ: 0, ease: Power3.easeOut };
export const fadeOutToVarsClassic = { ...fadeInFromVarsClassic, ease: Power3.easeIn };

// PHYSICS
export const BOX_OVERFLOWN_FRICTION = 4;

// CUBE
export const CUBE_COLOR = 0xC9F0FF;
export const CUBE_MESH_MATERIAL = HAS_GPU ? MeshToonMaterial : MeshBasicMaterial;
export const CUBE_MATERIAL = new CUBE_MESH_MATERIAL({
  color: CUBE_COLOR,
});
// Physic
export const MASS = 5;
export const FLOATING_LINE = 0.2; // 0.425
export const UV_REDUCTION = 0.2;
// When the cube go up
export const FLOATING_VELOCITY = 0.004;
export const FLOATING_FRICTION = 0.92;
// When the cube come to the basic orientation
export const PITCHING_VELOCITY = 0.008;
export const PITCHING_FRICTION = 0.955;
// When the cube come to the right place
export const TARGETED_POSITION_ATTRACTION = HAS_TOUCH ? 0.5 : 0.3; // 0.5
export const TARGETED_POSITION_ATTRACTION_ON_DRAG = HAS_TOUCH ? 3 : 1.8;
// frictions
export const MOTION_FRICTION = 0.5;
export const SLANT_FRICTION = 0.7;
export const ORIENTATION_FRICTION = 0.05;
// Rotation
export const MIN_ROTATION = radian(5);
export const MAX_ROTATION = radian(25);

// Detached
export const TARGETED_POSITION_ATTRACTION_DETACHED = 0.1;
export const MOTION_FRICTION_DETACHED = 0.1;
export const ORIENTATION_FRICTION_DETACHED = 0;

// CUBE WAVE
export const CUBE_SCALE_MAX = HAS_TOUCH ? 2.5 : 4;
export const CUBE_SCALE_MAX_EXPLOSION = HAS_TOUCH ? 2 : 3.5;
export const CUBE_SCALE_MIN = 0.2;
export const CUBE_SCALE_MIN_EXPLOSION = HAS_TOUCH ? 0.75 : 1;
export const MARGIN = 0.15;
export const RECURCIVE_RANDOM = 0.3;
export const SCALE_REDUCER = HAS_TOUCH ? 0.325 : 0.4;