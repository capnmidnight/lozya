import { IPoint, Point } from "./point.js";
import { ISize, Size } from "./Size";
export interface IRectangle {
    point: IPoint;
    size: ISize;
}
export declare class Rectangle implements IRectangle {
    point: Point;
    size: Size;
    constructor(x?: number, y?: number, width?: number, height?: number);
    get x(): number;
    set x(x: number);
    get left(): number;
    set left(x: number);
    get width(): number;
    set width(width: number);
    get right(): number;
    set right(right: number);
    get y(): number;
    set y(y: number);
    get top(): number;
    set top(y: number);
    get height(): number;
    set height(height: number);
    get bottom(): number;
    set bottom(bottom: number);
    get area(): number;
    set(x: number, y: number, width: number, height: number): void;
    copy(r: Rectangle): void;
    clone(): Rectangle;
    overlap(r: Rectangle): Rectangle;
    toString(): string;
}
