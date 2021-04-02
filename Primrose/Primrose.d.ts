import { TypedEvent, TypedEventBase } from "kudzu/events/EventBase";
import { CanvasTypes } from "kudzu/html/canvas";
import { Grammar } from "./grammars";
interface PointXY {
    x: number;
    y: number;
}
interface PointerUVEvent {
    uv: PointXY;
}
interface PointerEventCollection {
    readOverEventUV: () => void;
    readOutEventUV: () => void;
    readDownEventUV: (evt: PointerUVEvent) => void;
    readUpEventUV: (evt: PointerUVEvent) => void;
    readMoveEventUV: (evt: PointerUVEvent) => void;
}
export interface PrimroseOptions {
    readOnly: boolean;
    multiLine: boolean;
    wordWrap: boolean;
    scrollBars: boolean;
    lineNumbers: boolean;
    padding: number;
    fontSize: number;
    fontFamily: string;
    language: string | Grammar;
    scaleFactor: number;
    element: HTMLElement;
    width: number;
    height: number;
}
export declare class Primrose extends TypedEventBase<{
    out: TypedEvent<"out">;
    over: TypedEvent<"over">;
    blur: TypedEvent<"blur">;
    focus: TypedEvent<"focus">;
    change: TypedEvent<"change">;
    update: TypedEvent<"update">;
}> {
    private longPress;
    private tx;
    private ty;
    private vibX;
    private vibY;
    private pressed;
    private dragging;
    private scrolling;
    private lastScrollDX;
    private lastScrollDY;
    private canRender;
    private _value;
    private _padding;
    private _theme;
    private _tabWidth;
    private canv;
    private resized;
    private _hovered;
    private _focused;
    private _fontSize;
    private _fontFamily;
    private _scaleFactor;
    private tabString;
    private _readOnly;
    private _wordWrap;
    private historyIndex;
    private _multiLine;
    private tabPressed;
    private lineCount;
    private lineCountWidth;
    private _element;
    private _language;
    private _showScrollBars;
    private _showLineNumbers;
    private controlType;
    private maxVerticalScroll;
    private lastCharacterHeight;
    private lastCharacterWidth;
    private lastFrontCursor;
    private lastGridBounds;
    private lastBackCursor;
    private lastThemeName;
    private lastPadding;
    private lastFocused;
    private lastScrollX;
    private lastScrollY;
    private lastFont;
    private lastText;
    private history;
    private tokens;
    private rows;
    private scroll;
    private pointer;
    private character;
    private bottomRightGutter;
    private gridBounds;
    private tokenBack;
    private tokenFront;
    private backCursor;
    private frontCursor;
    private os;
    private outEvt;
    private overEvt;
    private blurEvt;
    private focusEvt;
    private changeEvt;
    private updateEvt;
    private context;
    private fg;
    private fgfx;
    private bg;
    private bgfx;
    private tg;
    private tgfx;
    private keyDownCommands;
    private keyPressCommands;
    mouse: PointerEventCollection;
    touch: PointerEventCollection;
    constructor(options: Partial<PrimroseOptions>);
    private render;
    private startSelecting;
    private pointerDown;
    private pointerMove;
    private mouseLikePointerDown;
    private mouseLikePointerUp;
    private mouseLikePointerMove;
    private touchLikePointerDown;
    private touchLikePointerUp;
    private touchLikePointerMove;
    private refreshBuffers;
    private moveCursor;
    private dragScroll;
    private refreshControlType;
    private refreshGutter;
    private fillRect;
    private strokeRect;
    private renderCanvasBackground;
    private renderCanvasForeground;
    private renderCanvasTrim;
    private doRender;
    private setValue;
    private setSelectedText;
    private refreshAllTokens;
    private refreshTokens;
    private minDelta;
    private clampScroll;
    private scrollIntoView;
    private pushUndo;
    private moveInHistory;
    blur(): void;
    focus(): void;
    resize(): void;
    setSize(w: number, h: number): void;
    scrollTo(x: number, y: number): boolean;
    scrollBy(dx: number, dy: number): boolean;
    readKeyDownEvent(evt: KeyboardEvent): void;
    readKeyPressEvent(evt: KeyboardEvent): void;
    private copySelectedText;
    readCopyEvent(evt: ClipboardEvent): void;
    readCutEvent(evt: ClipboardEvent): void;
    readPasteEvent(evt: ClipboardEvent): void;
    readWheelEvent(evt: WheelEvent): void;
    get element(): HTMLElement;
    get isInDocument(): boolean;
    get canvas(): CanvasTypes;
    get hovered(): boolean;
    get focused(): boolean;
    set focused(f: boolean);
    get readOnly(): boolean;
    set readOnly(r: boolean);
    get multiLine(): boolean;
    set multiLine(m: boolean);
    get wordWrap(): boolean;
    set wordWrap(w: boolean);
    get value(): string;
    set value(txt: string);
    get text(): string;
    set text(txt: string);
    get selectedText(): string;
    set selectedText(txt: string);
    get selectionStart(): number;
    set selectionStart(i: number);
    get selectionEnd(): number;
    set selectionEnd(i: number);
    get selectionDirection(): "forward" | "backward";
    get tabWidth(): number;
    set tabWidth(tw: number);
    get theme(): import("./themes").Theme;
    set theme(t: import("./themes").Theme);
    get language(): Grammar;
    set language(l: Grammar);
    get padding(): number;
    set padding(p: number);
    get showLineNumbers(): boolean;
    set showLineNumbers(s: boolean);
    get showScrollBars(): boolean;
    set showScrollBars(s: boolean);
    get fontSize(): number;
    set fontSize(s: number);
    get fontFamily(): string;
    set fontFamily(v: string);
    private refreshFont;
    get scaleFactor(): number;
    set scaleFactor(s: number);
    get width(): number;
    set width(w: number);
    get height(): number;
    set height(h: number);
    static has(key: any): boolean;
    static get(key: any): Primrose;
    static add(key: any, control: Primrose): void;
    static get hoveredControl(): Primrose;
    static get focusedControl(): Primrose;
    static get editors(): Primrose[];
    static get ready(): Promise<void>;
}
export {};
