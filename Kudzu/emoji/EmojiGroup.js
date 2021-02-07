import { e, Emoji } from "./Emoji";
/**
 * Shorthand for `new EmojiGroup`, which saves significantly on bundle size.
 * @param v - a Unicode sequence.
 * @param d - an English text description of the pictogram.
 * @param r - the emoji that are contained in this group.
 */
export function g(v, d, ...r) {
    return new EmojiGroup(v, d, ...r);
}
/**
 * A shorthand for `new EmojiGroup` that allows for setting optional properties
 * on the EmojiGroup object.
 */
export function G(v, d, o, ...r) {
    const emojis = Object.values(o)
        .filter(oo => oo instanceof Emoji)
        .map(oo => oo)
        .concat(...r);
    return Object.assign(g(v, d, ...emojis), o);
}
export function C(a, b, altDesc = null) {
    if (a instanceof Array) {
        return a.map(c => C(c, b));
    }
    else if (a instanceof EmojiGroup) {
        const { value, desc } = C(e(a.value, a.desc), b);
        return g(value, desc, ...C(a.alts, b));
    }
    else if (b instanceof Array) {
        return b.map(c => C(a, c));
    }
    else {
        return e(a.value + b.value, altDesc || (a.desc + ": " + b.desc));
    }
}
export function J(a, b, altDesc = null) {
    if (a instanceof Array) {
        return a.map(c => J(c, b));
    }
    else if (a instanceof EmojiGroup) {
        const { value, desc } = J(e(a.value, a.desc), b);
        return g(value, desc, ...J(a.alts, b));
    }
    else if (b instanceof Array) {
        return b.map(c => J(a, c));
    }
    else {
        return e(a.value + "\u200D" + b.value, altDesc || (a.desc + ": " + b.desc));
    }
}
export class EmojiGroup extends Emoji {
    /**
     * Groupings of Unicode-standardized pictograms.
     * @param value - a Unicode sequence.
     * @param desc - an English text description of the pictogram.
     * @param ...rest - Emojis in this group.
     */
    constructor(value, desc, ...alts) {
        super(value, desc);
        this.width = null;
        this.alts = alts;
    }
    /**
     * Selects a random emoji out of the collection.
     **/
    random() {
        const idx = Math.floor(Math.random() * this.alts.length);
        if (idx < 0) {
            return null;
        }
        const selection = this.alts[idx];
        if (selection instanceof EmojiGroup) {
            return selection.random();
        }
        else {
            return selection;
        }
    }
    contains(e) {
        if (super.contains(e)) {
            return true;
        }
        else {
            for (const alt of this.alts) {
                if (alt.contains(e)) {
                    return true;
                }
            }
            return false;
        }
    }
}
//# sourceMappingURL=EmojiGroup.js.map