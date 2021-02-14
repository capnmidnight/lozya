import { Emoji } from "./Emoji";
import { EmojiGroup } from "./EmojiGroup";

export function isSurfer(e: Emoji | string) {
    return allAllSurfingGroupGroup.contains(e)
        || allAllRowingBoatGroupGroup.contains(e)
        || allAllSwimmingGroupGroup.contains(e)
        || allAllMerpersonGroupGroup.contains(e);
}

export const textStyle = new Emoji("\uFE0E", "Variation Selector-15: text style");
export const emojiStyle = new Emoji("\uFE0F", "Variation Selector-16: emoji style");
export const zeroWidthJoiner = new Emoji("\u200D", "Zero Width Joiner");
export const combiningEnclosingKeycap = new Emoji("\u20E3", "Combining Enclosing Keycap");
export const female = new Emoji("\u2640\uFE0F", "Female");
export const male = new Emoji("\u2642\uFE0F", "Male");
export const transgenderSymbol = new Emoji("\u26A7\uFE0F", "Transgender Symbol");
export const allFemale = [
    female,
    male,
    transgenderSymbol
];

export const lightSkinTone = new Emoji("\u{1F3FB}\uDFFB", "Light Skin Tone");
export const mediumLightSkinTone = new Emoji("\u{1F3FC}\uDFFC", "Medium-Light Skin Tone");
export const mediumSkinTone = new Emoji("\u{1F3FD}\uDFFD", "Medium Skin Tone");
export const mediumDarkSkinTone = new Emoji("\u{1F3FE}\uDFFE", "Medium-Dark Skin Tone");
export const darkSkinTone = new Emoji("\u{1F3FF}\uDFFF", "Dark Skin Tone");
export const allLightSkinTone = [
    lightSkinTone,
    mediumLightSkinTone,
    mediumSkinTone,
    mediumDarkSkinTone,
    darkSkinTone
];

export const redHair = new Emoji("\u{1F9B0}\uDDB0", "Red Hair");
export const curlyHair = new Emoji("\u{1F9B1}\uDDB1", "Curly Hair");
export const whiteHair = new Emoji("\u{1F9B3}\uDDB3", "White Hair");
export const bald = new Emoji("\u{1F9B2}\uDDB2", "Bald");
export const allRedHair = [
    redHair,
    curlyHair,
    whiteHair,
    bald
];

export const frowning = new Emoji("\u{1F64D}\uDE4D", "Frowning");
export const frowningLightSkinTone = new Emoji("\u{1F64D}\uDE4D\u{1F3FB}\uDFFB", "Frowning: Light Skin Tone");
export const frowningMediumLightSkinTone = new Emoji("\u{1F64D}\uDE4D\u{1F3FC}\uDFFC", "Frowning: Medium-Light Skin Tone");
export const frowningMediumSkinTone = new Emoji("\u{1F64D}\uDE4D\u{1F3FD}\uDFFD", "Frowning: Medium Skin Tone");
export const frowningMediumDarkSkinTone = new Emoji("\u{1F64D}\uDE4D\u{1F3FE}\uDFFE", "Frowning: Medium-Dark Skin Tone");
export const frowningDarkSkinTone = new Emoji("\u{1F64D}\uDE4D\u{1F3FF}\uDFFF", "Frowning: Dark Skin Tone");
export const allFrowning = [
    frowning,
    frowningLightSkinTone,
    frowningMediumLightSkinTone,
    frowningMediumSkinTone,
    frowningMediumDarkSkinTone,
    frowningDarkSkinTone
];

export const allFrowningGroup = new EmojiGroup("\u{1F64D}\uDE4D", "Frowning", ...allFrowning);

export const frowningMale = new Emoji("\u{1F64D}\uDE4D\u200D\u2642\uFE0F", "Frowning: Male");
export const frowningLightSkinToneMale = new Emoji("\u{1F64D}\uDE4D\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Frowning: Light Skin Tone: Male");
export const frowningMediumLightSkinToneMale = new Emoji("\u{1F64D}\uDE4D\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Frowning: Medium-Light Skin Tone: Male");
export const frowningMediumSkinToneMale = new Emoji("\u{1F64D}\uDE4D\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Frowning: Medium Skin Tone: Male");
export const frowningMediumDarkSkinToneMale = new Emoji("\u{1F64D}\uDE4D\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Frowning: Medium-Dark Skin Tone: Male");
export const frowningDarkSkinToneMale = new Emoji("\u{1F64D}\uDE4D\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Frowning: Dark Skin Tone: Male");
export const allFrowningMale = [
    frowningMale,
    frowningLightSkinToneMale,
    frowningMediumLightSkinToneMale,
    frowningMediumSkinToneMale,
    frowningMediumDarkSkinToneMale,
    frowningDarkSkinToneMale
];

export const allFrowningMaleGroup = new EmojiGroup("\u{1F64D}\uDE4D\u200D\u2642\uFE0F", "Frowning: Male", ...allFrowningMale);

export const frowningFemale = new Emoji("\u{1F64D}\uDE4D\u200D\u2640\uFE0F", "Frowning: Female");
export const frowningLightSkinToneFemale = new Emoji("\u{1F64D}\uDE4D\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Frowning: Light Skin Tone: Female");
export const frowningMediumLightSkinToneFemale = new Emoji("\u{1F64D}\uDE4D\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Frowning: Medium-Light Skin Tone: Female");
export const frowningMediumSkinToneFemale = new Emoji("\u{1F64D}\uDE4D\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Frowning: Medium Skin Tone: Female");
export const frowningMediumDarkSkinToneFemale = new Emoji("\u{1F64D}\uDE4D\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Frowning: Medium-Dark Skin Tone: Female");
export const frowningDarkSkinToneFemale = new Emoji("\u{1F64D}\uDE4D\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Frowning: Dark Skin Tone: Female");
export const allFrowningFemale = [
    frowningFemale,
    frowningLightSkinToneFemale,
    frowningMediumLightSkinToneFemale,
    frowningMediumSkinToneFemale,
    frowningMediumDarkSkinToneFemale,
    frowningDarkSkinToneFemale
];

export const allFrowningFemaleGroup = new EmojiGroup("\u{1F64D}\uDE4D\u200D\u2640\uFE0F", "Frowning: Female", ...allFrowningFemale);

export const allAllFrowningGroup = [
    allFrowningGroup,
    allFrowningMaleGroup,
    allFrowningFemaleGroup
];

export const allAllFrowningGroupGroup = new EmojiGroup("\u{1F64D}\uDE4D", "Frowning", ...allAllFrowningGroup);

export const pouting = new Emoji("\u{1F64E}\uDE4E", "Pouting");
export const poutingLightSkinTone = new Emoji("\u{1F64E}\uDE4E\u{1F3FB}\uDFFB", "Pouting: Light Skin Tone");
export const poutingMediumLightSkinTone = new Emoji("\u{1F64E}\uDE4E\u{1F3FC}\uDFFC", "Pouting: Medium-Light Skin Tone");
export const poutingMediumSkinTone = new Emoji("\u{1F64E}\uDE4E\u{1F3FD}\uDFFD", "Pouting: Medium Skin Tone");
export const poutingMediumDarkSkinTone = new Emoji("\u{1F64E}\uDE4E\u{1F3FE}\uDFFE", "Pouting: Medium-Dark Skin Tone");
export const poutingDarkSkinTone = new Emoji("\u{1F64E}\uDE4E\u{1F3FF}\uDFFF", "Pouting: Dark Skin Tone");
export const allPouting = [
    pouting,
    poutingLightSkinTone,
    poutingMediumLightSkinTone,
    poutingMediumSkinTone,
    poutingMediumDarkSkinTone,
    poutingDarkSkinTone
];

export const allPoutingGroup = new EmojiGroup("\u{1F64E}\uDE4E", "Pouting", ...allPouting);

export const poutingMale = new Emoji("\u{1F64E}\uDE4E\u200D\u2642\uFE0F", "Pouting: Male");
export const poutingLightSkinToneMale = new Emoji("\u{1F64E}\uDE4E\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Pouting: Light Skin Tone: Male");
export const poutingMediumLightSkinToneMale = new Emoji("\u{1F64E}\uDE4E\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Pouting: Medium-Light Skin Tone: Male");
export const poutingMediumSkinToneMale = new Emoji("\u{1F64E}\uDE4E\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Pouting: Medium Skin Tone: Male");
export const poutingMediumDarkSkinToneMale = new Emoji("\u{1F64E}\uDE4E\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Pouting: Medium-Dark Skin Tone: Male");
export const poutingDarkSkinToneMale = new Emoji("\u{1F64E}\uDE4E\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Pouting: Dark Skin Tone: Male");
export const allPoutingMale = [
    poutingMale,
    poutingLightSkinToneMale,
    poutingMediumLightSkinToneMale,
    poutingMediumSkinToneMale,
    poutingMediumDarkSkinToneMale,
    poutingDarkSkinToneMale
];

export const allPoutingMaleGroup = new EmojiGroup("\u{1F64E}\uDE4E\u200D\u2642\uFE0F", "Pouting: Male", ...allPoutingMale);

export const poutingFemale = new Emoji("\u{1F64E}\uDE4E\u200D\u2640\uFE0F", "Pouting: Female");
export const poutingLightSkinToneFemale = new Emoji("\u{1F64E}\uDE4E\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Pouting: Light Skin Tone: Female");
export const poutingMediumLightSkinToneFemale = new Emoji("\u{1F64E}\uDE4E\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Pouting: Medium-Light Skin Tone: Female");
export const poutingMediumSkinToneFemale = new Emoji("\u{1F64E}\uDE4E\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Pouting: Medium Skin Tone: Female");
export const poutingMediumDarkSkinToneFemale = new Emoji("\u{1F64E}\uDE4E\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Pouting: Medium-Dark Skin Tone: Female");
export const poutingDarkSkinToneFemale = new Emoji("\u{1F64E}\uDE4E\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Pouting: Dark Skin Tone: Female");
export const allPoutingFemale = [
    poutingFemale,
    poutingLightSkinToneFemale,
    poutingMediumLightSkinToneFemale,
    poutingMediumSkinToneFemale,
    poutingMediumDarkSkinToneFemale,
    poutingDarkSkinToneFemale
];

export const allPoutingFemaleGroup = new EmojiGroup("\u{1F64E}\uDE4E\u200D\u2640\uFE0F", "Pouting: Female", ...allPoutingFemale);

export const allAllPoutingGroup = [
    allPoutingGroup,
    allPoutingMaleGroup,
    allPoutingFemaleGroup
];

export const allAllPoutingGroupGroup = new EmojiGroup("\u{1F64E}\uDE4E", "Pouting", ...allAllPoutingGroup);

export const gesturingNO = new Emoji("\u{1F645}\uDE45", "Gesturing NO");
export const gesturingNOLightSkinTone = new Emoji("\u{1F645}\uDE45\u{1F3FB}\uDFFB", "Gesturing NO: Light Skin Tone");
export const gesturingNOMediumLightSkinTone = new Emoji("\u{1F645}\uDE45\u{1F3FC}\uDFFC", "Gesturing NO: Medium-Light Skin Tone");
export const gesturingNOMediumSkinTone = new Emoji("\u{1F645}\uDE45\u{1F3FD}\uDFFD", "Gesturing NO: Medium Skin Tone");
export const gesturingNOMediumDarkSkinTone = new Emoji("\u{1F645}\uDE45\u{1F3FE}\uDFFE", "Gesturing NO: Medium-Dark Skin Tone");
export const gesturingNODarkSkinTone = new Emoji("\u{1F645}\uDE45\u{1F3FF}\uDFFF", "Gesturing NO: Dark Skin Tone");
export const allGesturingNO = [
    gesturingNO,
    gesturingNOLightSkinTone,
    gesturingNOMediumLightSkinTone,
    gesturingNOMediumSkinTone,
    gesturingNOMediumDarkSkinTone,
    gesturingNODarkSkinTone
];

export const allGesturingNOGroup = new EmojiGroup("\u{1F645}\uDE45", "Gesturing NO", ...allGesturingNO);

export const gesturingNOMale = new Emoji("\u{1F645}\uDE45\u200D\u2642\uFE0F", "Gesturing NO: Male");
export const gesturingNOLightSkinToneMale = new Emoji("\u{1F645}\uDE45\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Gesturing NO: Light Skin Tone: Male");
export const gesturingNOMediumLightSkinToneMale = new Emoji("\u{1F645}\uDE45\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Gesturing NO: Medium-Light Skin Tone: Male");
export const gesturingNOMediumSkinToneMale = new Emoji("\u{1F645}\uDE45\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Gesturing NO: Medium Skin Tone: Male");
export const gesturingNOMediumDarkSkinToneMale = new Emoji("\u{1F645}\uDE45\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Gesturing NO: Medium-Dark Skin Tone: Male");
export const gesturingNODarkSkinToneMale = new Emoji("\u{1F645}\uDE45\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Gesturing NO: Dark Skin Tone: Male");
export const allGesturingNOMale = [
    gesturingNOMale,
    gesturingNOLightSkinToneMale,
    gesturingNOMediumLightSkinToneMale,
    gesturingNOMediumSkinToneMale,
    gesturingNOMediumDarkSkinToneMale,
    gesturingNODarkSkinToneMale
];

export const allGesturingNOMaleGroup = new EmojiGroup("\u{1F645}\uDE45\u200D\u2642\uFE0F", "Gesturing NO: Male", ...allGesturingNOMale);

export const gesturingNOFemale = new Emoji("\u{1F645}\uDE45\u200D\u2640\uFE0F", "Gesturing NO: Female");
export const gesturingNOLightSkinToneFemale = new Emoji("\u{1F645}\uDE45\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Gesturing NO: Light Skin Tone: Female");
export const gesturingNOMediumLightSkinToneFemale = new Emoji("\u{1F645}\uDE45\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Gesturing NO: Medium-Light Skin Tone: Female");
export const gesturingNOMediumSkinToneFemale = new Emoji("\u{1F645}\uDE45\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Gesturing NO: Medium Skin Tone: Female");
export const gesturingNOMediumDarkSkinToneFemale = new Emoji("\u{1F645}\uDE45\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Gesturing NO: Medium-Dark Skin Tone: Female");
export const gesturingNODarkSkinToneFemale = new Emoji("\u{1F645}\uDE45\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Gesturing NO: Dark Skin Tone: Female");
export const allGesturingNOFemale = [
    gesturingNOFemale,
    gesturingNOLightSkinToneFemale,
    gesturingNOMediumLightSkinToneFemale,
    gesturingNOMediumSkinToneFemale,
    gesturingNOMediumDarkSkinToneFemale,
    gesturingNODarkSkinToneFemale
];

export const allGesturingNOFemaleGroup = new EmojiGroup("\u{1F645}\uDE45\u200D\u2640\uFE0F", "Gesturing NO: Female", ...allGesturingNOFemale);

export const allAllGesturingNOGroup = [
    allGesturingNOGroup,
    allGesturingNOMaleGroup,
    allGesturingNOFemaleGroup
];

export const allAllGesturingNOGroupGroup = new EmojiGroup("\u{1F645}\uDE45", "Gesturing NO", ...allAllGesturingNOGroup);

export const gesturingOK = new Emoji("\u{1F646}\uDE46", "Gesturing OK");
export const gesturingOKLightSkinTone = new Emoji("\u{1F646}\uDE46\u{1F3FB}\uDFFB", "Gesturing OK: Light Skin Tone");
export const gesturingOKMediumLightSkinTone = new Emoji("\u{1F646}\uDE46\u{1F3FC}\uDFFC", "Gesturing OK: Medium-Light Skin Tone");
export const gesturingOKMediumSkinTone = new Emoji("\u{1F646}\uDE46\u{1F3FD}\uDFFD", "Gesturing OK: Medium Skin Tone");
export const gesturingOKMediumDarkSkinTone = new Emoji("\u{1F646}\uDE46\u{1F3FE}\uDFFE", "Gesturing OK: Medium-Dark Skin Tone");
export const gesturingOKDarkSkinTone = new Emoji("\u{1F646}\uDE46\u{1F3FF}\uDFFF", "Gesturing OK: Dark Skin Tone");
export const allGesturingOK = [
    gesturingOK,
    gesturingOKLightSkinTone,
    gesturingOKMediumLightSkinTone,
    gesturingOKMediumSkinTone,
    gesturingOKMediumDarkSkinTone,
    gesturingOKDarkSkinTone
];

export const allGesturingOKGroup = new EmojiGroup("\u{1F646}\uDE46", "Gesturing OK", ...allGesturingOK);

export const gesturingOKMale = new Emoji("\u{1F646}\uDE46\u200D\u2642\uFE0F", "Gesturing OK: Male");
export const gesturingOKLightSkinToneMale = new Emoji("\u{1F646}\uDE46\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Gesturing OK: Light Skin Tone: Male");
export const gesturingOKMediumLightSkinToneMale = new Emoji("\u{1F646}\uDE46\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Gesturing OK: Medium-Light Skin Tone: Male");
export const gesturingOKMediumSkinToneMale = new Emoji("\u{1F646}\uDE46\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Gesturing OK: Medium Skin Tone: Male");
export const gesturingOKMediumDarkSkinToneMale = new Emoji("\u{1F646}\uDE46\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Gesturing OK: Medium-Dark Skin Tone: Male");
export const gesturingOKDarkSkinToneMale = new Emoji("\u{1F646}\uDE46\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Gesturing OK: Dark Skin Tone: Male");
export const allGesturingOKMale = [
    gesturingOKMale,
    gesturingOKLightSkinToneMale,
    gesturingOKMediumLightSkinToneMale,
    gesturingOKMediumSkinToneMale,
    gesturingOKMediumDarkSkinToneMale,
    gesturingOKDarkSkinToneMale
];

export const allGesturingOKMaleGroup = new EmojiGroup("\u{1F646}\uDE46\u200D\u2642\uFE0F", "Gesturing OK: Male", ...allGesturingOKMale);

export const gesturingOKFemale = new Emoji("\u{1F646}\uDE46\u200D\u2640\uFE0F", "Gesturing OK: Female");
export const gesturingOKLightSkinToneFemale = new Emoji("\u{1F646}\uDE46\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Gesturing OK: Light Skin Tone: Female");
export const gesturingOKMediumLightSkinToneFemale = new Emoji("\u{1F646}\uDE46\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Gesturing OK: Medium-Light Skin Tone: Female");
export const gesturingOKMediumSkinToneFemale = new Emoji("\u{1F646}\uDE46\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Gesturing OK: Medium Skin Tone: Female");
export const gesturingOKMediumDarkSkinToneFemale = new Emoji("\u{1F646}\uDE46\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Gesturing OK: Medium-Dark Skin Tone: Female");
export const gesturingOKDarkSkinToneFemale = new Emoji("\u{1F646}\uDE46\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Gesturing OK: Dark Skin Tone: Female");
export const allGesturingOKFemale = [
    gesturingOKFemale,
    gesturingOKLightSkinToneFemale,
    gesturingOKMediumLightSkinToneFemale,
    gesturingOKMediumSkinToneFemale,
    gesturingOKMediumDarkSkinToneFemale,
    gesturingOKDarkSkinToneFemale
];

export const allGesturingOKFemaleGroup = new EmojiGroup("\u{1F646}\uDE46\u200D\u2640\uFE0F", "Gesturing OK: Female", ...allGesturingOKFemale);

export const allAllGesturingOKGroup = [
    allGesturingOKGroup,
    allGesturingOKMaleGroup,
    allGesturingOKFemaleGroup
];

export const allAllGesturingOKGroupGroup = new EmojiGroup("\u{1F646}\uDE46", "Gesturing OK", ...allAllGesturingOKGroup);

export const tippingHand = new Emoji("\u{1F481}\uDC81", "Tipping Hand");
export const tippingHandLightSkinTone = new Emoji("\u{1F481}\uDC81\u{1F3FB}\uDFFB", "Tipping Hand: Light Skin Tone");
export const tippingHandMediumLightSkinTone = new Emoji("\u{1F481}\uDC81\u{1F3FC}\uDFFC", "Tipping Hand: Medium-Light Skin Tone");
export const tippingHandMediumSkinTone = new Emoji("\u{1F481}\uDC81\u{1F3FD}\uDFFD", "Tipping Hand: Medium Skin Tone");
export const tippingHandMediumDarkSkinTone = new Emoji("\u{1F481}\uDC81\u{1F3FE}\uDFFE", "Tipping Hand: Medium-Dark Skin Tone");
export const tippingHandDarkSkinTone = new Emoji("\u{1F481}\uDC81\u{1F3FF}\uDFFF", "Tipping Hand: Dark Skin Tone");
export const allTippingHand = [
    tippingHand,
    tippingHandLightSkinTone,
    tippingHandMediumLightSkinTone,
    tippingHandMediumSkinTone,
    tippingHandMediumDarkSkinTone,
    tippingHandDarkSkinTone
];

export const allTippingHandGroup = new EmojiGroup("\u{1F481}\uDC81", "Tipping Hand", ...allTippingHand);

export const tippingHandMale = new Emoji("\u{1F481}\uDC81\u200D\u2642\uFE0F", "Tipping Hand: Male");
export const tippingHandLightSkinToneMale = new Emoji("\u{1F481}\uDC81\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Tipping Hand: Light Skin Tone: Male");
export const tippingHandMediumLightSkinToneMale = new Emoji("\u{1F481}\uDC81\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Tipping Hand: Medium-Light Skin Tone: Male");
export const tippingHandMediumSkinToneMale = new Emoji("\u{1F481}\uDC81\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Tipping Hand: Medium Skin Tone: Male");
export const tippingHandMediumDarkSkinToneMale = new Emoji("\u{1F481}\uDC81\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Tipping Hand: Medium-Dark Skin Tone: Male");
export const tippingHandDarkSkinToneMale = new Emoji("\u{1F481}\uDC81\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Tipping Hand: Dark Skin Tone: Male");
export const allTippingHandMale = [
    tippingHandMale,
    tippingHandLightSkinToneMale,
    tippingHandMediumLightSkinToneMale,
    tippingHandMediumSkinToneMale,
    tippingHandMediumDarkSkinToneMale,
    tippingHandDarkSkinToneMale
];

export const allTippingHandMaleGroup = new EmojiGroup("\u{1F481}\uDC81\u200D\u2642\uFE0F", "Tipping Hand: Male", ...allTippingHandMale);

export const tippingHandFemale = new Emoji("\u{1F481}\uDC81\u200D\u2640\uFE0F", "Tipping Hand: Female");
export const tippingHandLightSkinToneFemale = new Emoji("\u{1F481}\uDC81\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Tipping Hand: Light Skin Tone: Female");
export const tippingHandMediumLightSkinToneFemale = new Emoji("\u{1F481}\uDC81\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Tipping Hand: Medium-Light Skin Tone: Female");
export const tippingHandMediumSkinToneFemale = new Emoji("\u{1F481}\uDC81\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Tipping Hand: Medium Skin Tone: Female");
export const tippingHandMediumDarkSkinToneFemale = new Emoji("\u{1F481}\uDC81\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Tipping Hand: Medium-Dark Skin Tone: Female");
export const tippingHandDarkSkinToneFemale = new Emoji("\u{1F481}\uDC81\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Tipping Hand: Dark Skin Tone: Female");
export const allTippingHandFemale = [
    tippingHandFemale,
    tippingHandLightSkinToneFemale,
    tippingHandMediumLightSkinToneFemale,
    tippingHandMediumSkinToneFemale,
    tippingHandMediumDarkSkinToneFemale,
    tippingHandDarkSkinToneFemale
];

export const allTippingHandFemaleGroup = new EmojiGroup("\u{1F481}\uDC81\u200D\u2640\uFE0F", "Tipping Hand: Female", ...allTippingHandFemale);

export const allAllTippingHandGroup = [
    allTippingHandGroup,
    allTippingHandMaleGroup,
    allTippingHandFemaleGroup
];

export const allAllTippingHandGroupGroup = new EmojiGroup("\u{1F481}\uDC81", "Tipping Hand", ...allAllTippingHandGroup);

export const raisingHand = new Emoji("\u{1F64B}\uDE4B", "Raising Hand");
export const raisingHandLightSkinTone = new Emoji("\u{1F64B}\uDE4B\u{1F3FB}\uDFFB", "Raising Hand: Light Skin Tone");
export const raisingHandMediumLightSkinTone = new Emoji("\u{1F64B}\uDE4B\u{1F3FC}\uDFFC", "Raising Hand: Medium-Light Skin Tone");
export const raisingHandMediumSkinTone = new Emoji("\u{1F64B}\uDE4B\u{1F3FD}\uDFFD", "Raising Hand: Medium Skin Tone");
export const raisingHandMediumDarkSkinTone = new Emoji("\u{1F64B}\uDE4B\u{1F3FE}\uDFFE", "Raising Hand: Medium-Dark Skin Tone");
export const raisingHandDarkSkinTone = new Emoji("\u{1F64B}\uDE4B\u{1F3FF}\uDFFF", "Raising Hand: Dark Skin Tone");
export const allRaisingHand = [
    raisingHand,
    raisingHandLightSkinTone,
    raisingHandMediumLightSkinTone,
    raisingHandMediumSkinTone,
    raisingHandMediumDarkSkinTone,
    raisingHandDarkSkinTone
];

export const allRaisingHandGroup = new EmojiGroup("\u{1F64B}\uDE4B", "Raising Hand", ...allRaisingHand);

export const raisingHandMale = new Emoji("\u{1F64B}\uDE4B\u200D\u2642\uFE0F", "Raising Hand: Male");
export const raisingHandLightSkinToneMale = new Emoji("\u{1F64B}\uDE4B\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Raising Hand: Light Skin Tone: Male");
export const raisingHandMediumLightSkinToneMale = new Emoji("\u{1F64B}\uDE4B\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Raising Hand: Medium-Light Skin Tone: Male");
export const raisingHandMediumSkinToneMale = new Emoji("\u{1F64B}\uDE4B\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Raising Hand: Medium Skin Tone: Male");
export const raisingHandMediumDarkSkinToneMale = new Emoji("\u{1F64B}\uDE4B\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Raising Hand: Medium-Dark Skin Tone: Male");
export const raisingHandDarkSkinToneMale = new Emoji("\u{1F64B}\uDE4B\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Raising Hand: Dark Skin Tone: Male");
export const allRaisingHandMale = [
    raisingHandMale,
    raisingHandLightSkinToneMale,
    raisingHandMediumLightSkinToneMale,
    raisingHandMediumSkinToneMale,
    raisingHandMediumDarkSkinToneMale,
    raisingHandDarkSkinToneMale
];

export const allRaisingHandMaleGroup = new EmojiGroup("\u{1F64B}\uDE4B\u200D\u2642\uFE0F", "Raising Hand: Male", ...allRaisingHandMale);

export const raisingHandFemale = new Emoji("\u{1F64B}\uDE4B\u200D\u2640\uFE0F", "Raising Hand: Female");
export const raisingHandLightSkinToneFemale = new Emoji("\u{1F64B}\uDE4B\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Raising Hand: Light Skin Tone: Female");
export const raisingHandMediumLightSkinToneFemale = new Emoji("\u{1F64B}\uDE4B\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Raising Hand: Medium-Light Skin Tone: Female");
export const raisingHandMediumSkinToneFemale = new Emoji("\u{1F64B}\uDE4B\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Raising Hand: Medium Skin Tone: Female");
export const raisingHandMediumDarkSkinToneFemale = new Emoji("\u{1F64B}\uDE4B\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Raising Hand: Medium-Dark Skin Tone: Female");
export const raisingHandDarkSkinToneFemale = new Emoji("\u{1F64B}\uDE4B\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Raising Hand: Dark Skin Tone: Female");
export const allRaisingHandFemale = [
    raisingHandFemale,
    raisingHandLightSkinToneFemale,
    raisingHandMediumLightSkinToneFemale,
    raisingHandMediumSkinToneFemale,
    raisingHandMediumDarkSkinToneFemale,
    raisingHandDarkSkinToneFemale
];

export const allRaisingHandFemaleGroup = new EmojiGroup("\u{1F64B}\uDE4B\u200D\u2640\uFE0F", "Raising Hand: Female", ...allRaisingHandFemale);

export const allAllRaisingHandGroup = [
    allRaisingHandGroup,
    allRaisingHandMaleGroup,
    allRaisingHandFemaleGroup
];

export const allAllRaisingHandGroupGroup = new EmojiGroup("\u{1F64B}\uDE4B", "Raising Hand", ...allAllRaisingHandGroup);

export const bowing = new Emoji("\u{1F647}\uDE47", "Bowing");
export const bowingLightSkinTone = new Emoji("\u{1F647}\uDE47\u{1F3FB}\uDFFB", "Bowing: Light Skin Tone");
export const bowingMediumLightSkinTone = new Emoji("\u{1F647}\uDE47\u{1F3FC}\uDFFC", "Bowing: Medium-Light Skin Tone");
export const bowingMediumSkinTone = new Emoji("\u{1F647}\uDE47\u{1F3FD}\uDFFD", "Bowing: Medium Skin Tone");
export const bowingMediumDarkSkinTone = new Emoji("\u{1F647}\uDE47\u{1F3FE}\uDFFE", "Bowing: Medium-Dark Skin Tone");
export const bowingDarkSkinTone = new Emoji("\u{1F647}\uDE47\u{1F3FF}\uDFFF", "Bowing: Dark Skin Tone");
export const allBowing = [
    bowing,
    bowingLightSkinTone,
    bowingMediumLightSkinTone,
    bowingMediumSkinTone,
    bowingMediumDarkSkinTone,
    bowingDarkSkinTone
];

export const allBowingGroup = new EmojiGroup("\u{1F647}\uDE47", "Bowing", ...allBowing);

export const bowingMale = new Emoji("\u{1F647}\uDE47\u200D\u2642\uFE0F", "Bowing: Male");
export const bowingLightSkinToneMale = new Emoji("\u{1F647}\uDE47\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Bowing: Light Skin Tone: Male");
export const bowingMediumLightSkinToneMale = new Emoji("\u{1F647}\uDE47\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Bowing: Medium-Light Skin Tone: Male");
export const bowingMediumSkinToneMale = new Emoji("\u{1F647}\uDE47\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Bowing: Medium Skin Tone: Male");
export const bowingMediumDarkSkinToneMale = new Emoji("\u{1F647}\uDE47\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Bowing: Medium-Dark Skin Tone: Male");
export const bowingDarkSkinToneMale = new Emoji("\u{1F647}\uDE47\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Bowing: Dark Skin Tone: Male");
export const allBowingMale = [
    bowingMale,
    bowingLightSkinToneMale,
    bowingMediumLightSkinToneMale,
    bowingMediumSkinToneMale,
    bowingMediumDarkSkinToneMale,
    bowingDarkSkinToneMale
];

export const allBowingMaleGroup = new EmojiGroup("\u{1F647}\uDE47\u200D\u2642\uFE0F", "Bowing: Male", ...allBowingMale);

export const bowingFemale = new Emoji("\u{1F647}\uDE47\u200D\u2640\uFE0F", "Bowing: Female");
export const bowingLightSkinToneFemale = new Emoji("\u{1F647}\uDE47\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Bowing: Light Skin Tone: Female");
export const bowingMediumLightSkinToneFemale = new Emoji("\u{1F647}\uDE47\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Bowing: Medium-Light Skin Tone: Female");
export const bowingMediumSkinToneFemale = new Emoji("\u{1F647}\uDE47\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Bowing: Medium Skin Tone: Female");
export const bowingMediumDarkSkinToneFemale = new Emoji("\u{1F647}\uDE47\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Bowing: Medium-Dark Skin Tone: Female");
export const bowingDarkSkinToneFemale = new Emoji("\u{1F647}\uDE47\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Bowing: Dark Skin Tone: Female");
export const allBowingFemale = [
    bowingFemale,
    bowingLightSkinToneFemale,
    bowingMediumLightSkinToneFemale,
    bowingMediumSkinToneFemale,
    bowingMediumDarkSkinToneFemale,
    bowingDarkSkinToneFemale
];

export const allBowingFemaleGroup = new EmojiGroup("\u{1F647}\uDE47\u200D\u2640\uFE0F", "Bowing: Female", ...allBowingFemale);

export const allAllBowingGroup = [
    allBowingGroup,
    allBowingMaleGroup,
    allBowingFemaleGroup
];

export const allAllBowingGroupGroup = new EmojiGroup("\u{1F647}\uDE47", "Bowing", ...allAllBowingGroup);

export const facepalming = new Emoji("\u{1F926}\uDD26", "Facepalming");
export const facepalmingLightSkinTone = new Emoji("\u{1F926}\uDD26\u{1F3FB}\uDFFB", "Facepalming: Light Skin Tone");
export const facepalmingMediumLightSkinTone = new Emoji("\u{1F926}\uDD26\u{1F3FC}\uDFFC", "Facepalming: Medium-Light Skin Tone");
export const facepalmingMediumSkinTone = new Emoji("\u{1F926}\uDD26\u{1F3FD}\uDFFD", "Facepalming: Medium Skin Tone");
export const facepalmingMediumDarkSkinTone = new Emoji("\u{1F926}\uDD26\u{1F3FE}\uDFFE", "Facepalming: Medium-Dark Skin Tone");
export const facepalmingDarkSkinTone = new Emoji("\u{1F926}\uDD26\u{1F3FF}\uDFFF", "Facepalming: Dark Skin Tone");
export const allFacepalming = [
    facepalming,
    facepalmingLightSkinTone,
    facepalmingMediumLightSkinTone,
    facepalmingMediumSkinTone,
    facepalmingMediumDarkSkinTone,
    facepalmingDarkSkinTone
];

export const allFacepalmingGroup = new EmojiGroup("\u{1F926}\uDD26", "Facepalming", ...allFacepalming);

export const facepalmingMale = new Emoji("\u{1F926}\uDD26\u200D\u2642\uFE0F", "Facepalming: Male");
export const facepalmingLightSkinToneMale = new Emoji("\u{1F926}\uDD26\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Facepalming: Light Skin Tone: Male");
export const facepalmingMediumLightSkinToneMale = new Emoji("\u{1F926}\uDD26\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Facepalming: Medium-Light Skin Tone: Male");
export const facepalmingMediumSkinToneMale = new Emoji("\u{1F926}\uDD26\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Facepalming: Medium Skin Tone: Male");
export const facepalmingMediumDarkSkinToneMale = new Emoji("\u{1F926}\uDD26\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Facepalming: Medium-Dark Skin Tone: Male");
export const facepalmingDarkSkinToneMale = new Emoji("\u{1F926}\uDD26\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Facepalming: Dark Skin Tone: Male");
export const allFacepalmingMale = [
    facepalmingMale,
    facepalmingLightSkinToneMale,
    facepalmingMediumLightSkinToneMale,
    facepalmingMediumSkinToneMale,
    facepalmingMediumDarkSkinToneMale,
    facepalmingDarkSkinToneMale
];

export const allFacepalmingMaleGroup = new EmojiGroup("\u{1F926}\uDD26\u200D\u2642\uFE0F", "Facepalming: Male", ...allFacepalmingMale);

export const facepalmingFemale = new Emoji("\u{1F926}\uDD26\u200D\u2640\uFE0F", "Facepalming: Female");
export const facepalmingLightSkinToneFemale = new Emoji("\u{1F926}\uDD26\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Facepalming: Light Skin Tone: Female");
export const facepalmingMediumLightSkinToneFemale = new Emoji("\u{1F926}\uDD26\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Facepalming: Medium-Light Skin Tone: Female");
export const facepalmingMediumSkinToneFemale = new Emoji("\u{1F926}\uDD26\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Facepalming: Medium Skin Tone: Female");
export const facepalmingMediumDarkSkinToneFemale = new Emoji("\u{1F926}\uDD26\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Facepalming: Medium-Dark Skin Tone: Female");
export const facepalmingDarkSkinToneFemale = new Emoji("\u{1F926}\uDD26\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Facepalming: Dark Skin Tone: Female");
export const allFacepalmingFemale = [
    facepalmingFemale,
    facepalmingLightSkinToneFemale,
    facepalmingMediumLightSkinToneFemale,
    facepalmingMediumSkinToneFemale,
    facepalmingMediumDarkSkinToneFemale,
    facepalmingDarkSkinToneFemale
];

export const allFacepalmingFemaleGroup = new EmojiGroup("\u{1F926}\uDD26\u200D\u2640\uFE0F", "Facepalming: Female", ...allFacepalmingFemale);

export const allAllFacepalmingGroup = [
    allFacepalmingGroup,
    allFacepalmingMaleGroup,
    allFacepalmingFemaleGroup
];

export const allAllFacepalmingGroupGroup = new EmojiGroup("\u{1F926}\uDD26", "Facepalming", ...allAllFacepalmingGroup);

export const shrugging = new Emoji("\u{1F937}\uDD37", "Shrugging");
export const shruggingLightSkinTone = new Emoji("\u{1F937}\uDD37\u{1F3FB}\uDFFB", "Shrugging: Light Skin Tone");
export const shruggingMediumLightSkinTone = new Emoji("\u{1F937}\uDD37\u{1F3FC}\uDFFC", "Shrugging: Medium-Light Skin Tone");
export const shruggingMediumSkinTone = new Emoji("\u{1F937}\uDD37\u{1F3FD}\uDFFD", "Shrugging: Medium Skin Tone");
export const shruggingMediumDarkSkinTone = new Emoji("\u{1F937}\uDD37\u{1F3FE}\uDFFE", "Shrugging: Medium-Dark Skin Tone");
export const shruggingDarkSkinTone = new Emoji("\u{1F937}\uDD37\u{1F3FF}\uDFFF", "Shrugging: Dark Skin Tone");
export const allShrugging = [
    shrugging,
    shruggingLightSkinTone,
    shruggingMediumLightSkinTone,
    shruggingMediumSkinTone,
    shruggingMediumDarkSkinTone,
    shruggingDarkSkinTone
];

export const allShruggingGroup = new EmojiGroup("\u{1F937}\uDD37", "Shrugging", ...allShrugging);

export const shruggingMale = new Emoji("\u{1F937}\uDD37\u200D\u2642\uFE0F", "Shrugging: Male");
export const shruggingLightSkinToneMale = new Emoji("\u{1F937}\uDD37\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Shrugging: Light Skin Tone: Male");
export const shruggingMediumLightSkinToneMale = new Emoji("\u{1F937}\uDD37\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Shrugging: Medium-Light Skin Tone: Male");
export const shruggingMediumSkinToneMale = new Emoji("\u{1F937}\uDD37\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Shrugging: Medium Skin Tone: Male");
export const shruggingMediumDarkSkinToneMale = new Emoji("\u{1F937}\uDD37\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Shrugging: Medium-Dark Skin Tone: Male");
export const shruggingDarkSkinToneMale = new Emoji("\u{1F937}\uDD37\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Shrugging: Dark Skin Tone: Male");
export const allShruggingMale = [
    shruggingMale,
    shruggingLightSkinToneMale,
    shruggingMediumLightSkinToneMale,
    shruggingMediumSkinToneMale,
    shruggingMediumDarkSkinToneMale,
    shruggingDarkSkinToneMale
];

export const allShruggingMaleGroup = new EmojiGroup("\u{1F937}\uDD37\u200D\u2642\uFE0F", "Shrugging: Male", ...allShruggingMale);

export const shruggingFemale = new Emoji("\u{1F937}\uDD37\u200D\u2640\uFE0F", "Shrugging: Female");
export const shruggingLightSkinToneFemale = new Emoji("\u{1F937}\uDD37\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Shrugging: Light Skin Tone: Female");
export const shruggingMediumLightSkinToneFemale = new Emoji("\u{1F937}\uDD37\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Shrugging: Medium-Light Skin Tone: Female");
export const shruggingMediumSkinToneFemale = new Emoji("\u{1F937}\uDD37\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Shrugging: Medium Skin Tone: Female");
export const shruggingMediumDarkSkinToneFemale = new Emoji("\u{1F937}\uDD37\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Shrugging: Medium-Dark Skin Tone: Female");
export const shruggingDarkSkinToneFemale = new Emoji("\u{1F937}\uDD37\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Shrugging: Dark Skin Tone: Female");
export const allShruggingFemale = [
    shruggingFemale,
    shruggingLightSkinToneFemale,
    shruggingMediumLightSkinToneFemale,
    shruggingMediumSkinToneFemale,
    shruggingMediumDarkSkinToneFemale,
    shruggingDarkSkinToneFemale
];

export const allShruggingFemaleGroup = new EmojiGroup("\u{1F937}\uDD37\u200D\u2640\uFE0F", "Shrugging: Female", ...allShruggingFemale);

export const allAllShruggingGroup = [
    allShruggingGroup,
    allShruggingMaleGroup,
    allShruggingFemaleGroup
];

export const allAllShruggingGroupGroup = new EmojiGroup("\u{1F937}\uDD37", "Shrugging", ...allAllShruggingGroup);

export const canTHear = new Emoji("\u{1F9CF}\uDDCF", "Can't Hear");
export const canTHearLightSkinTone = new Emoji("\u{1F9CF}\uDDCF\u{1F3FB}\uDFFB", "Can't Hear: Light Skin Tone");
export const canTHearMediumLightSkinTone = new Emoji("\u{1F9CF}\uDDCF\u{1F3FC}\uDFFC", "Can't Hear: Medium-Light Skin Tone");
export const canTHearMediumSkinTone = new Emoji("\u{1F9CF}\uDDCF\u{1F3FD}\uDFFD", "Can't Hear: Medium Skin Tone");
export const canTHearMediumDarkSkinTone = new Emoji("\u{1F9CF}\uDDCF\u{1F3FE}\uDFFE", "Can't Hear: Medium-Dark Skin Tone");
export const canTHearDarkSkinTone = new Emoji("\u{1F9CF}\uDDCF\u{1F3FF}\uDFFF", "Can't Hear: Dark Skin Tone");
export const allCanTHear = [
    canTHear,
    canTHearLightSkinTone,
    canTHearMediumLightSkinTone,
    canTHearMediumSkinTone,
    canTHearMediumDarkSkinTone,
    canTHearDarkSkinTone
];

export const allCanTHearGroup = new EmojiGroup("\u{1F9CF}\uDDCF", "Can't Hear", ...allCanTHear);

export const canTHearMale = new Emoji("\u{1F9CF}\uDDCF\u200D\u2642\uFE0F", "Can't Hear: Male");
export const canTHearLightSkinToneMale = new Emoji("\u{1F9CF}\uDDCF\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Can't Hear: Light Skin Tone: Male");
export const canTHearMediumLightSkinToneMale = new Emoji("\u{1F9CF}\uDDCF\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Can't Hear: Medium-Light Skin Tone: Male");
export const canTHearMediumSkinToneMale = new Emoji("\u{1F9CF}\uDDCF\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Can't Hear: Medium Skin Tone: Male");
export const canTHearMediumDarkSkinToneMale = new Emoji("\u{1F9CF}\uDDCF\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Can't Hear: Medium-Dark Skin Tone: Male");
export const canTHearDarkSkinToneMale = new Emoji("\u{1F9CF}\uDDCF\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Can't Hear: Dark Skin Tone: Male");
export const allCanTHearMale = [
    canTHearMale,
    canTHearLightSkinToneMale,
    canTHearMediumLightSkinToneMale,
    canTHearMediumSkinToneMale,
    canTHearMediumDarkSkinToneMale,
    canTHearDarkSkinToneMale
];

export const allCanTHearMaleGroup = new EmojiGroup("\u{1F9CF}\uDDCF\u200D\u2642\uFE0F", "Can't Hear: Male", ...allCanTHearMale);

export const canTHearFemale = new Emoji("\u{1F9CF}\uDDCF\u200D\u2640\uFE0F", "Can't Hear: Female");
export const canTHearLightSkinToneFemale = new Emoji("\u{1F9CF}\uDDCF\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Can't Hear: Light Skin Tone: Female");
export const canTHearMediumLightSkinToneFemale = new Emoji("\u{1F9CF}\uDDCF\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Can't Hear: Medium-Light Skin Tone: Female");
export const canTHearMediumSkinToneFemale = new Emoji("\u{1F9CF}\uDDCF\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Can't Hear: Medium Skin Tone: Female");
export const canTHearMediumDarkSkinToneFemale = new Emoji("\u{1F9CF}\uDDCF\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Can't Hear: Medium-Dark Skin Tone: Female");
export const canTHearDarkSkinToneFemale = new Emoji("\u{1F9CF}\uDDCF\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Can't Hear: Dark Skin Tone: Female");
export const allCanTHearFemale = [
    canTHearFemale,
    canTHearLightSkinToneFemale,
    canTHearMediumLightSkinToneFemale,
    canTHearMediumSkinToneFemale,
    canTHearMediumDarkSkinToneFemale,
    canTHearDarkSkinToneFemale
];

export const allCanTHearFemaleGroup = new EmojiGroup("\u{1F9CF}\uDDCF\u200D\u2640\uFE0F", "Can't Hear: Female", ...allCanTHearFemale);

export const allAllCanTHearGroup = [
    allCanTHearGroup,
    allCanTHearMaleGroup,
    allCanTHearFemaleGroup
];

export const allAllCanTHearGroupGroup = new EmojiGroup("\u{1F9CF}\uDDCF", "Can't Hear", ...allAllCanTHearGroup);

export const gettingMassage = new Emoji("\u{1F486}\uDC86", "Getting Massage");
export const gettingMassageLightSkinTone = new Emoji("\u{1F486}\uDC86\u{1F3FB}\uDFFB", "Getting Massage: Light Skin Tone");
export const gettingMassageMediumLightSkinTone = new Emoji("\u{1F486}\uDC86\u{1F3FC}\uDFFC", "Getting Massage: Medium-Light Skin Tone");
export const gettingMassageMediumSkinTone = new Emoji("\u{1F486}\uDC86\u{1F3FD}\uDFFD", "Getting Massage: Medium Skin Tone");
export const gettingMassageMediumDarkSkinTone = new Emoji("\u{1F486}\uDC86\u{1F3FE}\uDFFE", "Getting Massage: Medium-Dark Skin Tone");
export const gettingMassageDarkSkinTone = new Emoji("\u{1F486}\uDC86\u{1F3FF}\uDFFF", "Getting Massage: Dark Skin Tone");
export const allGettingMassage = [
    gettingMassage,
    gettingMassageLightSkinTone,
    gettingMassageMediumLightSkinTone,
    gettingMassageMediumSkinTone,
    gettingMassageMediumDarkSkinTone,
    gettingMassageDarkSkinTone
];

export const allGettingMassageGroup = new EmojiGroup("\u{1F486}\uDC86", "Getting Massage", ...allGettingMassage);

export const gettingMassageMale = new Emoji("\u{1F486}\uDC86\u200D\u2642\uFE0F", "Getting Massage: Male");
export const gettingMassageLightSkinToneMale = new Emoji("\u{1F486}\uDC86\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Getting Massage: Light Skin Tone: Male");
export const gettingMassageMediumLightSkinToneMale = new Emoji("\u{1F486}\uDC86\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Getting Massage: Medium-Light Skin Tone: Male");
export const gettingMassageMediumSkinToneMale = new Emoji("\u{1F486}\uDC86\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Getting Massage: Medium Skin Tone: Male");
export const gettingMassageMediumDarkSkinToneMale = new Emoji("\u{1F486}\uDC86\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Getting Massage: Medium-Dark Skin Tone: Male");
export const gettingMassageDarkSkinToneMale = new Emoji("\u{1F486}\uDC86\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Getting Massage: Dark Skin Tone: Male");
export const allGettingMassageMale = [
    gettingMassageMale,
    gettingMassageLightSkinToneMale,
    gettingMassageMediumLightSkinToneMale,
    gettingMassageMediumSkinToneMale,
    gettingMassageMediumDarkSkinToneMale,
    gettingMassageDarkSkinToneMale
];

export const allGettingMassageMaleGroup = new EmojiGroup("\u{1F486}\uDC86\u200D\u2642\uFE0F", "Getting Massage: Male", ...allGettingMassageMale);

export const gettingMassageFemale = new Emoji("\u{1F486}\uDC86\u200D\u2640\uFE0F", "Getting Massage: Female");
export const gettingMassageLightSkinToneFemale = new Emoji("\u{1F486}\uDC86\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Getting Massage: Light Skin Tone: Female");
export const gettingMassageMediumLightSkinToneFemale = new Emoji("\u{1F486}\uDC86\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Getting Massage: Medium-Light Skin Tone: Female");
export const gettingMassageMediumSkinToneFemale = new Emoji("\u{1F486}\uDC86\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Getting Massage: Medium Skin Tone: Female");
export const gettingMassageMediumDarkSkinToneFemale = new Emoji("\u{1F486}\uDC86\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Getting Massage: Medium-Dark Skin Tone: Female");
export const gettingMassageDarkSkinToneFemale = new Emoji("\u{1F486}\uDC86\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Getting Massage: Dark Skin Tone: Female");
export const allGettingMassageFemale = [
    gettingMassageFemale,
    gettingMassageLightSkinToneFemale,
    gettingMassageMediumLightSkinToneFemale,
    gettingMassageMediumSkinToneFemale,
    gettingMassageMediumDarkSkinToneFemale,
    gettingMassageDarkSkinToneFemale
];

export const allGettingMassageFemaleGroup = new EmojiGroup("\u{1F486}\uDC86\u200D\u2640\uFE0F", "Getting Massage: Female", ...allGettingMassageFemale);

export const allAllGettingMassageGroup = [
    allGettingMassageGroup,
    allGettingMassageMaleGroup,
    allGettingMassageFemaleGroup
];

export const allAllGettingMassageGroupGroup = new EmojiGroup("\u{1F486}\uDC86", "Getting Massage", ...allAllGettingMassageGroup);

export const gettingHaircut = new Emoji("\u{1F487}\uDC87", "Getting Haircut");
export const gettingHaircutLightSkinTone = new Emoji("\u{1F487}\uDC87\u{1F3FB}\uDFFB", "Getting Haircut: Light Skin Tone");
export const gettingHaircutMediumLightSkinTone = new Emoji("\u{1F487}\uDC87\u{1F3FC}\uDFFC", "Getting Haircut: Medium-Light Skin Tone");
export const gettingHaircutMediumSkinTone = new Emoji("\u{1F487}\uDC87\u{1F3FD}\uDFFD", "Getting Haircut: Medium Skin Tone");
export const gettingHaircutMediumDarkSkinTone = new Emoji("\u{1F487}\uDC87\u{1F3FE}\uDFFE", "Getting Haircut: Medium-Dark Skin Tone");
export const gettingHaircutDarkSkinTone = new Emoji("\u{1F487}\uDC87\u{1F3FF}\uDFFF", "Getting Haircut: Dark Skin Tone");
export const allGettingHaircut = [
    gettingHaircut,
    gettingHaircutLightSkinTone,
    gettingHaircutMediumLightSkinTone,
    gettingHaircutMediumSkinTone,
    gettingHaircutMediumDarkSkinTone,
    gettingHaircutDarkSkinTone
];

export const allGettingHaircutGroup = new EmojiGroup("\u{1F487}\uDC87", "Getting Haircut", ...allGettingHaircut);

export const gettingHaircutMale = new Emoji("\u{1F487}\uDC87\u200D\u2642\uFE0F", "Getting Haircut: Male");
export const gettingHaircutLightSkinToneMale = new Emoji("\u{1F487}\uDC87\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Getting Haircut: Light Skin Tone: Male");
export const gettingHaircutMediumLightSkinToneMale = new Emoji("\u{1F487}\uDC87\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Getting Haircut: Medium-Light Skin Tone: Male");
export const gettingHaircutMediumSkinToneMale = new Emoji("\u{1F487}\uDC87\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Getting Haircut: Medium Skin Tone: Male");
export const gettingHaircutMediumDarkSkinToneMale = new Emoji("\u{1F487}\uDC87\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Getting Haircut: Medium-Dark Skin Tone: Male");
export const gettingHaircutDarkSkinToneMale = new Emoji("\u{1F487}\uDC87\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Getting Haircut: Dark Skin Tone: Male");
export const allGettingHaircutMale = [
    gettingHaircutMale,
    gettingHaircutLightSkinToneMale,
    gettingHaircutMediumLightSkinToneMale,
    gettingHaircutMediumSkinToneMale,
    gettingHaircutMediumDarkSkinToneMale,
    gettingHaircutDarkSkinToneMale
];

export const allGettingHaircutMaleGroup = new EmojiGroup("\u{1F487}\uDC87\u200D\u2642\uFE0F", "Getting Haircut: Male", ...allGettingHaircutMale);

export const gettingHaircutFemale = new Emoji("\u{1F487}\uDC87\u200D\u2640\uFE0F", "Getting Haircut: Female");
export const gettingHaircutLightSkinToneFemale = new Emoji("\u{1F487}\uDC87\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Getting Haircut: Light Skin Tone: Female");
export const gettingHaircutMediumLightSkinToneFemale = new Emoji("\u{1F487}\uDC87\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Getting Haircut: Medium-Light Skin Tone: Female");
export const gettingHaircutMediumSkinToneFemale = new Emoji("\u{1F487}\uDC87\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Getting Haircut: Medium Skin Tone: Female");
export const gettingHaircutMediumDarkSkinToneFemale = new Emoji("\u{1F487}\uDC87\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Getting Haircut: Medium-Dark Skin Tone: Female");
export const gettingHaircutDarkSkinToneFemale = new Emoji("\u{1F487}\uDC87\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Getting Haircut: Dark Skin Tone: Female");
export const allGettingHaircutFemale = [
    gettingHaircutFemale,
    gettingHaircutLightSkinToneFemale,
    gettingHaircutMediumLightSkinToneFemale,
    gettingHaircutMediumSkinToneFemale,
    gettingHaircutMediumDarkSkinToneFemale,
    gettingHaircutDarkSkinToneFemale
];

export const allGettingHaircutFemaleGroup = new EmojiGroup("\u{1F487}\uDC87\u200D\u2640\uFE0F", "Getting Haircut: Female", ...allGettingHaircutFemale);

export const allAllGettingHaircutGroup = [
    allGettingHaircutGroup,
    allGettingHaircutMaleGroup,
    allGettingHaircutFemaleGroup
];

export const allAllGettingHaircutGroupGroup = new EmojiGroup("\u{1F487}\uDC87", "Getting Haircut", ...allAllGettingHaircutGroup);

export const constructionWorker = new Emoji("\u{1F477}\uDC77", "Construction Worker");
export const constructionWorkerLightSkinTone = new Emoji("\u{1F477}\uDC77\u{1F3FB}\uDFFB", "Construction Worker: Light Skin Tone");
export const constructionWorkerMediumLightSkinTone = new Emoji("\u{1F477}\uDC77\u{1F3FC}\uDFFC", "Construction Worker: Medium-Light Skin Tone");
export const constructionWorkerMediumSkinTone = new Emoji("\u{1F477}\uDC77\u{1F3FD}\uDFFD", "Construction Worker: Medium Skin Tone");
export const constructionWorkerMediumDarkSkinTone = new Emoji("\u{1F477}\uDC77\u{1F3FE}\uDFFE", "Construction Worker: Medium-Dark Skin Tone");
export const constructionWorkerDarkSkinTone = new Emoji("\u{1F477}\uDC77\u{1F3FF}\uDFFF", "Construction Worker: Dark Skin Tone");
export const allConstructionWorker = [
    constructionWorker,
    constructionWorkerLightSkinTone,
    constructionWorkerMediumLightSkinTone,
    constructionWorkerMediumSkinTone,
    constructionWorkerMediumDarkSkinTone,
    constructionWorkerDarkSkinTone
];

export const allConstructionWorkerGroup = new EmojiGroup("\u{1F477}\uDC77", "Construction Worker", ...allConstructionWorker);

export const constructionWorkerMale = new Emoji("\u{1F477}\uDC77\u200D\u2642\uFE0F", "Construction Worker: Male");
export const constructionWorkerLightSkinToneMale = new Emoji("\u{1F477}\uDC77\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Construction Worker: Light Skin Tone: Male");
export const constructionWorkerMediumLightSkinToneMale = new Emoji("\u{1F477}\uDC77\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Construction Worker: Medium-Light Skin Tone: Male");
export const constructionWorkerMediumSkinToneMale = new Emoji("\u{1F477}\uDC77\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Construction Worker: Medium Skin Tone: Male");
export const constructionWorkerMediumDarkSkinToneMale = new Emoji("\u{1F477}\uDC77\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Construction Worker: Medium-Dark Skin Tone: Male");
export const constructionWorkerDarkSkinToneMale = new Emoji("\u{1F477}\uDC77\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Construction Worker: Dark Skin Tone: Male");
export const allConstructionWorkerMale = [
    constructionWorkerMale,
    constructionWorkerLightSkinToneMale,
    constructionWorkerMediumLightSkinToneMale,
    constructionWorkerMediumSkinToneMale,
    constructionWorkerMediumDarkSkinToneMale,
    constructionWorkerDarkSkinToneMale
];

export const allConstructionWorkerMaleGroup = new EmojiGroup("\u{1F477}\uDC77\u200D\u2642\uFE0F", "Construction Worker: Male", ...allConstructionWorkerMale);

export const constructionWorkerFemale = new Emoji("\u{1F477}\uDC77\u200D\u2640\uFE0F", "Construction Worker: Female");
export const constructionWorkerLightSkinToneFemale = new Emoji("\u{1F477}\uDC77\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Construction Worker: Light Skin Tone: Female");
export const constructionWorkerMediumLightSkinToneFemale = new Emoji("\u{1F477}\uDC77\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Construction Worker: Medium-Light Skin Tone: Female");
export const constructionWorkerMediumSkinToneFemale = new Emoji("\u{1F477}\uDC77\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Construction Worker: Medium Skin Tone: Female");
export const constructionWorkerMediumDarkSkinToneFemale = new Emoji("\u{1F477}\uDC77\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Construction Worker: Medium-Dark Skin Tone: Female");
export const constructionWorkerDarkSkinToneFemale = new Emoji("\u{1F477}\uDC77\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Construction Worker: Dark Skin Tone: Female");
export const allConstructionWorkerFemale = [
    constructionWorkerFemale,
    constructionWorkerLightSkinToneFemale,
    constructionWorkerMediumLightSkinToneFemale,
    constructionWorkerMediumSkinToneFemale,
    constructionWorkerMediumDarkSkinToneFemale,
    constructionWorkerDarkSkinToneFemale
];

export const allConstructionWorkerFemaleGroup = new EmojiGroup("\u{1F477}\uDC77\u200D\u2640\uFE0F", "Construction Worker: Female", ...allConstructionWorkerFemale);

export const allAllConstructionWorkerGroup = [
    allConstructionWorkerGroup,
    allConstructionWorkerMaleGroup,
    allConstructionWorkerFemaleGroup
];

export const allAllConstructionWorkerGroupGroup = new EmojiGroup("\u{1F477}\uDC77", "Construction Worker", ...allAllConstructionWorkerGroup);

export const guard = new Emoji("\u{1F482}\uDC82", "Guard");
export const guardLightSkinTone = new Emoji("\u{1F482}\uDC82\u{1F3FB}\uDFFB", "Guard: Light Skin Tone");
export const guardMediumLightSkinTone = new Emoji("\u{1F482}\uDC82\u{1F3FC}\uDFFC", "Guard: Medium-Light Skin Tone");
export const guardMediumSkinTone = new Emoji("\u{1F482}\uDC82\u{1F3FD}\uDFFD", "Guard: Medium Skin Tone");
export const guardMediumDarkSkinTone = new Emoji("\u{1F482}\uDC82\u{1F3FE}\uDFFE", "Guard: Medium-Dark Skin Tone");
export const guardDarkSkinTone = new Emoji("\u{1F482}\uDC82\u{1F3FF}\uDFFF", "Guard: Dark Skin Tone");
export const allGuard = [
    guard,
    guardLightSkinTone,
    guardMediumLightSkinTone,
    guardMediumSkinTone,
    guardMediumDarkSkinTone,
    guardDarkSkinTone
];

export const allGuardGroup = new EmojiGroup("\u{1F482}\uDC82", "Guard", ...allGuard);

export const guardMale = new Emoji("\u{1F482}\uDC82\u200D\u2642\uFE0F", "Guard: Male");
export const guardLightSkinToneMale = new Emoji("\u{1F482}\uDC82\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Guard: Light Skin Tone: Male");
export const guardMediumLightSkinToneMale = new Emoji("\u{1F482}\uDC82\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Guard: Medium-Light Skin Tone: Male");
export const guardMediumSkinToneMale = new Emoji("\u{1F482}\uDC82\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Guard: Medium Skin Tone: Male");
export const guardMediumDarkSkinToneMale = new Emoji("\u{1F482}\uDC82\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Guard: Medium-Dark Skin Tone: Male");
export const guardDarkSkinToneMale = new Emoji("\u{1F482}\uDC82\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Guard: Dark Skin Tone: Male");
export const allGuardMale = [
    guardMale,
    guardLightSkinToneMale,
    guardMediumLightSkinToneMale,
    guardMediumSkinToneMale,
    guardMediumDarkSkinToneMale,
    guardDarkSkinToneMale
];

export const allGuardMaleGroup = new EmojiGroup("\u{1F482}\uDC82\u200D\u2642\uFE0F", "Guard: Male", ...allGuardMale);

export const guardFemale = new Emoji("\u{1F482}\uDC82\u200D\u2640\uFE0F", "Guard: Female");
export const guardLightSkinToneFemale = new Emoji("\u{1F482}\uDC82\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Guard: Light Skin Tone: Female");
export const guardMediumLightSkinToneFemale = new Emoji("\u{1F482}\uDC82\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Guard: Medium-Light Skin Tone: Female");
export const guardMediumSkinToneFemale = new Emoji("\u{1F482}\uDC82\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Guard: Medium Skin Tone: Female");
export const guardMediumDarkSkinToneFemale = new Emoji("\u{1F482}\uDC82\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Guard: Medium-Dark Skin Tone: Female");
export const guardDarkSkinToneFemale = new Emoji("\u{1F482}\uDC82\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Guard: Dark Skin Tone: Female");
export const allGuardFemale = [
    guardFemale,
    guardLightSkinToneFemale,
    guardMediumLightSkinToneFemale,
    guardMediumSkinToneFemale,
    guardMediumDarkSkinToneFemale,
    guardDarkSkinToneFemale
];

export const allGuardFemaleGroup = new EmojiGroup("\u{1F482}\uDC82\u200D\u2640\uFE0F", "Guard: Female", ...allGuardFemale);

export const allAllGuardGroup = [
    allGuardGroup,
    allGuardMaleGroup,
    allGuardFemaleGroup
];

export const allAllGuardGroupGroup = new EmojiGroup("\u{1F482}\uDC82", "Guard", ...allAllGuardGroup);

export const spy = new Emoji("\u{1F575}\uDD75", "Spy");
export const spyLightSkinTone = new Emoji("\u{1F575}\uDD75\u{1F3FB}\uDFFB", "Spy: Light Skin Tone");
export const spyMediumLightSkinTone = new Emoji("\u{1F575}\uDD75\u{1F3FC}\uDFFC", "Spy: Medium-Light Skin Tone");
export const spyMediumSkinTone = new Emoji("\u{1F575}\uDD75\u{1F3FD}\uDFFD", "Spy: Medium Skin Tone");
export const spyMediumDarkSkinTone = new Emoji("\u{1F575}\uDD75\u{1F3FE}\uDFFE", "Spy: Medium-Dark Skin Tone");
export const spyDarkSkinTone = new Emoji("\u{1F575}\uDD75\u{1F3FF}\uDFFF", "Spy: Dark Skin Tone");
export const allSpy = [
    spy,
    spyLightSkinTone,
    spyMediumLightSkinTone,
    spyMediumSkinTone,
    spyMediumDarkSkinTone,
    spyDarkSkinTone
];

export const allSpyGroup = new EmojiGroup("\u{1F575}\uDD75", "Spy", ...allSpy);

export const spyMale = new Emoji("\u{1F575}\uDD75\u200D\u2642\uFE0F", "Spy: Male");
export const spyLightSkinToneMale = new Emoji("\u{1F575}\uDD75\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Spy: Light Skin Tone: Male");
export const spyMediumLightSkinToneMale = new Emoji("\u{1F575}\uDD75\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Spy: Medium-Light Skin Tone: Male");
export const spyMediumSkinToneMale = new Emoji("\u{1F575}\uDD75\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Spy: Medium Skin Tone: Male");
export const spyMediumDarkSkinToneMale = new Emoji("\u{1F575}\uDD75\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Spy: Medium-Dark Skin Tone: Male");
export const spyDarkSkinToneMale = new Emoji("\u{1F575}\uDD75\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Spy: Dark Skin Tone: Male");
export const allSpyMale = [
    spyMale,
    spyLightSkinToneMale,
    spyMediumLightSkinToneMale,
    spyMediumSkinToneMale,
    spyMediumDarkSkinToneMale,
    spyDarkSkinToneMale
];

export const allSpyMaleGroup = new EmojiGroup("\u{1F575}\uDD75\u200D\u2642\uFE0F", "Spy: Male", ...allSpyMale);

export const spyFemale = new Emoji("\u{1F575}\uDD75\u200D\u2640\uFE0F", "Spy: Female");
export const spyLightSkinToneFemale = new Emoji("\u{1F575}\uDD75\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Spy: Light Skin Tone: Female");
export const spyMediumLightSkinToneFemale = new Emoji("\u{1F575}\uDD75\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Spy: Medium-Light Skin Tone: Female");
export const spyMediumSkinToneFemale = new Emoji("\u{1F575}\uDD75\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Spy: Medium Skin Tone: Female");
export const spyMediumDarkSkinToneFemale = new Emoji("\u{1F575}\uDD75\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Spy: Medium-Dark Skin Tone: Female");
export const spyDarkSkinToneFemale = new Emoji("\u{1F575}\uDD75\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Spy: Dark Skin Tone: Female");
export const allSpyFemale = [
    spyFemale,
    spyLightSkinToneFemale,
    spyMediumLightSkinToneFemale,
    spyMediumSkinToneFemale,
    spyMediumDarkSkinToneFemale,
    spyDarkSkinToneFemale
];

export const allSpyFemaleGroup = new EmojiGroup("\u{1F575}\uDD75\u200D\u2640\uFE0F", "Spy: Female", ...allSpyFemale);

export const allAllSpyGroup = [
    allSpyGroup,
    allSpyMaleGroup,
    allSpyFemaleGroup
];

export const allAllSpyGroupGroup = new EmojiGroup("\u{1F575}\uDD75", "Spy", ...allAllSpyGroup);

export const police = new Emoji("\u{1F46E}\uDC6E", "Police");
export const policeLightSkinTone = new Emoji("\u{1F46E}\uDC6E\u{1F3FB}\uDFFB", "Police: Light Skin Tone");
export const policeMediumLightSkinTone = new Emoji("\u{1F46E}\uDC6E\u{1F3FC}\uDFFC", "Police: Medium-Light Skin Tone");
export const policeMediumSkinTone = new Emoji("\u{1F46E}\uDC6E\u{1F3FD}\uDFFD", "Police: Medium Skin Tone");
export const policeMediumDarkSkinTone = new Emoji("\u{1F46E}\uDC6E\u{1F3FE}\uDFFE", "Police: Medium-Dark Skin Tone");
export const policeDarkSkinTone = new Emoji("\u{1F46E}\uDC6E\u{1F3FF}\uDFFF", "Police: Dark Skin Tone");
export const allPolice = [
    police,
    policeLightSkinTone,
    policeMediumLightSkinTone,
    policeMediumSkinTone,
    policeMediumDarkSkinTone,
    policeDarkSkinTone
];

export const allPoliceGroup = new EmojiGroup("\u{1F46E}\uDC6E", "Police", ...allPolice);

export const policeMale = new Emoji("\u{1F46E}\uDC6E\u200D\u2642\uFE0F", "Police: Male");
export const policeLightSkinToneMale = new Emoji("\u{1F46E}\uDC6E\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Police: Light Skin Tone: Male");
export const policeMediumLightSkinToneMale = new Emoji("\u{1F46E}\uDC6E\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Police: Medium-Light Skin Tone: Male");
export const policeMediumSkinToneMale = new Emoji("\u{1F46E}\uDC6E\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Police: Medium Skin Tone: Male");
export const policeMediumDarkSkinToneMale = new Emoji("\u{1F46E}\uDC6E\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Police: Medium-Dark Skin Tone: Male");
export const policeDarkSkinToneMale = new Emoji("\u{1F46E}\uDC6E\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Police: Dark Skin Tone: Male");
export const allPoliceMale = [
    policeMale,
    policeLightSkinToneMale,
    policeMediumLightSkinToneMale,
    policeMediumSkinToneMale,
    policeMediumDarkSkinToneMale,
    policeDarkSkinToneMale
];

export const allPoliceMaleGroup = new EmojiGroup("\u{1F46E}\uDC6E\u200D\u2642\uFE0F", "Police: Male", ...allPoliceMale);

export const policeFemale = new Emoji("\u{1F46E}\uDC6E\u200D\u2640\uFE0F", "Police: Female");
export const policeLightSkinToneFemale = new Emoji("\u{1F46E}\uDC6E\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Police: Light Skin Tone: Female");
export const policeMediumLightSkinToneFemale = new Emoji("\u{1F46E}\uDC6E\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Police: Medium-Light Skin Tone: Female");
export const policeMediumSkinToneFemale = new Emoji("\u{1F46E}\uDC6E\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Police: Medium Skin Tone: Female");
export const policeMediumDarkSkinToneFemale = new Emoji("\u{1F46E}\uDC6E\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Police: Medium-Dark Skin Tone: Female");
export const policeDarkSkinToneFemale = new Emoji("\u{1F46E}\uDC6E\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Police: Dark Skin Tone: Female");
export const allPoliceFemale = [
    policeFemale,
    policeLightSkinToneFemale,
    policeMediumLightSkinToneFemale,
    policeMediumSkinToneFemale,
    policeMediumDarkSkinToneFemale,
    policeDarkSkinToneFemale
];

export const allPoliceFemaleGroup = new EmojiGroup("\u{1F46E}\uDC6E\u200D\u2640\uFE0F", "Police: Female", ...allPoliceFemale);

export const allAllPoliceGroup = [
    allPoliceGroup,
    allPoliceMaleGroup,
    allPoliceFemaleGroup
];

export const allAllPoliceGroupGroup = new EmojiGroup("\u{1F46E}\uDC6E", "Police", ...allAllPoliceGroup);

export const wearingTurban = new Emoji("\u{1F473}\uDC73", "Wearing Turban");
export const wearingTurbanLightSkinTone = new Emoji("\u{1F473}\uDC73\u{1F3FB}\uDFFB", "Wearing Turban: Light Skin Tone");
export const wearingTurbanMediumLightSkinTone = new Emoji("\u{1F473}\uDC73\u{1F3FC}\uDFFC", "Wearing Turban: Medium-Light Skin Tone");
export const wearingTurbanMediumSkinTone = new Emoji("\u{1F473}\uDC73\u{1F3FD}\uDFFD", "Wearing Turban: Medium Skin Tone");
export const wearingTurbanMediumDarkSkinTone = new Emoji("\u{1F473}\uDC73\u{1F3FE}\uDFFE", "Wearing Turban: Medium-Dark Skin Tone");
export const wearingTurbanDarkSkinTone = new Emoji("\u{1F473}\uDC73\u{1F3FF}\uDFFF", "Wearing Turban: Dark Skin Tone");
export const allWearingTurban = [
    wearingTurban,
    wearingTurbanLightSkinTone,
    wearingTurbanMediumLightSkinTone,
    wearingTurbanMediumSkinTone,
    wearingTurbanMediumDarkSkinTone,
    wearingTurbanDarkSkinTone
];

export const allWearingTurbanGroup = new EmojiGroup("\u{1F473}\uDC73", "Wearing Turban", ...allWearingTurban);

export const wearingTurbanMale = new Emoji("\u{1F473}\uDC73\u200D\u2642\uFE0F", "Wearing Turban: Male");
export const wearingTurbanLightSkinToneMale = new Emoji("\u{1F473}\uDC73\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Wearing Turban: Light Skin Tone: Male");
export const wearingTurbanMediumLightSkinToneMale = new Emoji("\u{1F473}\uDC73\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Wearing Turban: Medium-Light Skin Tone: Male");
export const wearingTurbanMediumSkinToneMale = new Emoji("\u{1F473}\uDC73\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Wearing Turban: Medium Skin Tone: Male");
export const wearingTurbanMediumDarkSkinToneMale = new Emoji("\u{1F473}\uDC73\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Wearing Turban: Medium-Dark Skin Tone: Male");
export const wearingTurbanDarkSkinToneMale = new Emoji("\u{1F473}\uDC73\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Wearing Turban: Dark Skin Tone: Male");
export const allWearingTurbanMale = [
    wearingTurbanMale,
    wearingTurbanLightSkinToneMale,
    wearingTurbanMediumLightSkinToneMale,
    wearingTurbanMediumSkinToneMale,
    wearingTurbanMediumDarkSkinToneMale,
    wearingTurbanDarkSkinToneMale
];

export const allWearingTurbanMaleGroup = new EmojiGroup("\u{1F473}\uDC73\u200D\u2642\uFE0F", "Wearing Turban: Male", ...allWearingTurbanMale);

export const wearingTurbanFemale = new Emoji("\u{1F473}\uDC73\u200D\u2640\uFE0F", "Wearing Turban: Female");
export const wearingTurbanLightSkinToneFemale = new Emoji("\u{1F473}\uDC73\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Wearing Turban: Light Skin Tone: Female");
export const wearingTurbanMediumLightSkinToneFemale = new Emoji("\u{1F473}\uDC73\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Wearing Turban: Medium-Light Skin Tone: Female");
export const wearingTurbanMediumSkinToneFemale = new Emoji("\u{1F473}\uDC73\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Wearing Turban: Medium Skin Tone: Female");
export const wearingTurbanMediumDarkSkinToneFemale = new Emoji("\u{1F473}\uDC73\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Wearing Turban: Medium-Dark Skin Tone: Female");
export const wearingTurbanDarkSkinToneFemale = new Emoji("\u{1F473}\uDC73\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Wearing Turban: Dark Skin Tone: Female");
export const allWearingTurbanFemale = [
    wearingTurbanFemale,
    wearingTurbanLightSkinToneFemale,
    wearingTurbanMediumLightSkinToneFemale,
    wearingTurbanMediumSkinToneFemale,
    wearingTurbanMediumDarkSkinToneFemale,
    wearingTurbanDarkSkinToneFemale
];

export const allWearingTurbanFemaleGroup = new EmojiGroup("\u{1F473}\uDC73\u200D\u2640\uFE0F", "Wearing Turban: Female", ...allWearingTurbanFemale);

export const allAllWearingTurbanGroup = [
    allWearingTurbanGroup,
    allWearingTurbanMaleGroup,
    allWearingTurbanFemaleGroup
];

export const allAllWearingTurbanGroupGroup = new EmojiGroup("\u{1F473}\uDC73", "Wearing Turban", ...allAllWearingTurbanGroup);

export const superhero = new Emoji("\u{1F9B8}\uDDB8", "Superhero");
export const superheroLightSkinTone = new Emoji("\u{1F9B8}\uDDB8\u{1F3FB}\uDFFB", "Superhero: Light Skin Tone");
export const superheroMediumLightSkinTone = new Emoji("\u{1F9B8}\uDDB8\u{1F3FC}\uDFFC", "Superhero: Medium-Light Skin Tone");
export const superheroMediumSkinTone = new Emoji("\u{1F9B8}\uDDB8\u{1F3FD}\uDFFD", "Superhero: Medium Skin Tone");
export const superheroMediumDarkSkinTone = new Emoji("\u{1F9B8}\uDDB8\u{1F3FE}\uDFFE", "Superhero: Medium-Dark Skin Tone");
export const superheroDarkSkinTone = new Emoji("\u{1F9B8}\uDDB8\u{1F3FF}\uDFFF", "Superhero: Dark Skin Tone");
export const allSuperhero = [
    superhero,
    superheroLightSkinTone,
    superheroMediumLightSkinTone,
    superheroMediumSkinTone,
    superheroMediumDarkSkinTone,
    superheroDarkSkinTone
];

export const allSuperheroGroup = new EmojiGroup("\u{1F9B8}\uDDB8", "Superhero", ...allSuperhero);

export const superheroMale = new Emoji("\u{1F9B8}\uDDB8\u200D\u2642\uFE0F", "Superhero: Male");
export const superheroLightSkinToneMale = new Emoji("\u{1F9B8}\uDDB8\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Superhero: Light Skin Tone: Male");
export const superheroMediumLightSkinToneMale = new Emoji("\u{1F9B8}\uDDB8\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Superhero: Medium-Light Skin Tone: Male");
export const superheroMediumSkinToneMale = new Emoji("\u{1F9B8}\uDDB8\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Superhero: Medium Skin Tone: Male");
export const superheroMediumDarkSkinToneMale = new Emoji("\u{1F9B8}\uDDB8\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Superhero: Medium-Dark Skin Tone: Male");
export const superheroDarkSkinToneMale = new Emoji("\u{1F9B8}\uDDB8\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Superhero: Dark Skin Tone: Male");
export const allSuperheroMale = [
    superheroMale,
    superheroLightSkinToneMale,
    superheroMediumLightSkinToneMale,
    superheroMediumSkinToneMale,
    superheroMediumDarkSkinToneMale,
    superheroDarkSkinToneMale
];

export const allSuperheroMaleGroup = new EmojiGroup("\u{1F9B8}\uDDB8\u200D\u2642\uFE0F", "Superhero: Male", ...allSuperheroMale);

export const superheroFemale = new Emoji("\u{1F9B8}\uDDB8\u200D\u2640\uFE0F", "Superhero: Female");
export const superheroLightSkinToneFemale = new Emoji("\u{1F9B8}\uDDB8\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Superhero: Light Skin Tone: Female");
export const superheroMediumLightSkinToneFemale = new Emoji("\u{1F9B8}\uDDB8\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Superhero: Medium-Light Skin Tone: Female");
export const superheroMediumSkinToneFemale = new Emoji("\u{1F9B8}\uDDB8\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Superhero: Medium Skin Tone: Female");
export const superheroMediumDarkSkinToneFemale = new Emoji("\u{1F9B8}\uDDB8\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Superhero: Medium-Dark Skin Tone: Female");
export const superheroDarkSkinToneFemale = new Emoji("\u{1F9B8}\uDDB8\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Superhero: Dark Skin Tone: Female");
export const allSuperheroFemale = [
    superheroFemale,
    superheroLightSkinToneFemale,
    superheroMediumLightSkinToneFemale,
    superheroMediumSkinToneFemale,
    superheroMediumDarkSkinToneFemale,
    superheroDarkSkinToneFemale
];

export const allSuperheroFemaleGroup = new EmojiGroup("\u{1F9B8}\uDDB8\u200D\u2640\uFE0F", "Superhero: Female", ...allSuperheroFemale);

export const allAllSuperheroGroup = [
    allSuperheroGroup,
    allSuperheroMaleGroup,
    allSuperheroFemaleGroup
];

export const allAllSuperheroGroupGroup = new EmojiGroup("\u{1F9B8}\uDDB8", "Superhero", ...allAllSuperheroGroup);

export const supervillain = new Emoji("\u{1F9B9}\uDDB9", "Supervillain");
export const supervillainLightSkinTone = new Emoji("\u{1F9B9}\uDDB9\u{1F3FB}\uDFFB", "Supervillain: Light Skin Tone");
export const supervillainMediumLightSkinTone = new Emoji("\u{1F9B9}\uDDB9\u{1F3FC}\uDFFC", "Supervillain: Medium-Light Skin Tone");
export const supervillainMediumSkinTone = new Emoji("\u{1F9B9}\uDDB9\u{1F3FD}\uDFFD", "Supervillain: Medium Skin Tone");
export const supervillainMediumDarkSkinTone = new Emoji("\u{1F9B9}\uDDB9\u{1F3FE}\uDFFE", "Supervillain: Medium-Dark Skin Tone");
export const supervillainDarkSkinTone = new Emoji("\u{1F9B9}\uDDB9\u{1F3FF}\uDFFF", "Supervillain: Dark Skin Tone");
export const allSupervillain = [
    supervillain,
    supervillainLightSkinTone,
    supervillainMediumLightSkinTone,
    supervillainMediumSkinTone,
    supervillainMediumDarkSkinTone,
    supervillainDarkSkinTone
];

export const allSupervillainGroup = new EmojiGroup("\u{1F9B9}\uDDB9", "Supervillain", ...allSupervillain);

export const supervillainMale = new Emoji("\u{1F9B9}\uDDB9\u200D\u2642\uFE0F", "Supervillain: Male");
export const supervillainLightSkinToneMale = new Emoji("\u{1F9B9}\uDDB9\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Supervillain: Light Skin Tone: Male");
export const supervillainMediumLightSkinToneMale = new Emoji("\u{1F9B9}\uDDB9\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Supervillain: Medium-Light Skin Tone: Male");
export const supervillainMediumSkinToneMale = new Emoji("\u{1F9B9}\uDDB9\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Supervillain: Medium Skin Tone: Male");
export const supervillainMediumDarkSkinToneMale = new Emoji("\u{1F9B9}\uDDB9\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Supervillain: Medium-Dark Skin Tone: Male");
export const supervillainDarkSkinToneMale = new Emoji("\u{1F9B9}\uDDB9\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Supervillain: Dark Skin Tone: Male");
export const allSupervillainMale = [
    supervillainMale,
    supervillainLightSkinToneMale,
    supervillainMediumLightSkinToneMale,
    supervillainMediumSkinToneMale,
    supervillainMediumDarkSkinToneMale,
    supervillainDarkSkinToneMale
];

export const allSupervillainMaleGroup = new EmojiGroup("\u{1F9B9}\uDDB9\u200D\u2642\uFE0F", "Supervillain: Male", ...allSupervillainMale);

export const supervillainFemale = new Emoji("\u{1F9B9}\uDDB9\u200D\u2640\uFE0F", "Supervillain: Female");
export const supervillainLightSkinToneFemale = new Emoji("\u{1F9B9}\uDDB9\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Supervillain: Light Skin Tone: Female");
export const supervillainMediumLightSkinToneFemale = new Emoji("\u{1F9B9}\uDDB9\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Supervillain: Medium-Light Skin Tone: Female");
export const supervillainMediumSkinToneFemale = new Emoji("\u{1F9B9}\uDDB9\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Supervillain: Medium Skin Tone: Female");
export const supervillainMediumDarkSkinToneFemale = new Emoji("\u{1F9B9}\uDDB9\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Supervillain: Medium-Dark Skin Tone: Female");
export const supervillainDarkSkinToneFemale = new Emoji("\u{1F9B9}\uDDB9\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Supervillain: Dark Skin Tone: Female");
export const allSupervillainFemale = [
    supervillainFemale,
    supervillainLightSkinToneFemale,
    supervillainMediumLightSkinToneFemale,
    supervillainMediumSkinToneFemale,
    supervillainMediumDarkSkinToneFemale,
    supervillainDarkSkinToneFemale
];

export const allSupervillainFemaleGroup = new EmojiGroup("\u{1F9B9}\uDDB9\u200D\u2640\uFE0F", "Supervillain: Female", ...allSupervillainFemale);

export const allAllSupervillainGroup = [
    allSupervillainGroup,
    allSupervillainMaleGroup,
    allSupervillainFemaleGroup
];

export const allAllSupervillainGroupGroup = new EmojiGroup("\u{1F9B9}\uDDB9", "Supervillain", ...allAllSupervillainGroup);

export const mage = new Emoji("\u{1F9D9}\uDDD9", "Mage");
export const mageLightSkinTone = new Emoji("\u{1F9D9}\uDDD9\u{1F3FB}\uDFFB", "Mage: Light Skin Tone");
export const mageMediumLightSkinTone = new Emoji("\u{1F9D9}\uDDD9\u{1F3FC}\uDFFC", "Mage: Medium-Light Skin Tone");
export const mageMediumSkinTone = new Emoji("\u{1F9D9}\uDDD9\u{1F3FD}\uDFFD", "Mage: Medium Skin Tone");
export const mageMediumDarkSkinTone = new Emoji("\u{1F9D9}\uDDD9\u{1F3FE}\uDFFE", "Mage: Medium-Dark Skin Tone");
export const mageDarkSkinTone = new Emoji("\u{1F9D9}\uDDD9\u{1F3FF}\uDFFF", "Mage: Dark Skin Tone");
export const allMage = [
    mage,
    mageLightSkinTone,
    mageMediumLightSkinTone,
    mageMediumSkinTone,
    mageMediumDarkSkinTone,
    mageDarkSkinTone
];

export const allMageGroup = new EmojiGroup("\u{1F9D9}\uDDD9", "Mage", ...allMage);

export const mageMale = new Emoji("\u{1F9D9}\uDDD9\u200D\u2642\uFE0F", "Mage: Male");
export const mageLightSkinToneMale = new Emoji("\u{1F9D9}\uDDD9\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Mage: Light Skin Tone: Male");
export const mageMediumLightSkinToneMale = new Emoji("\u{1F9D9}\uDDD9\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Mage: Medium-Light Skin Tone: Male");
export const mageMediumSkinToneMale = new Emoji("\u{1F9D9}\uDDD9\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Mage: Medium Skin Tone: Male");
export const mageMediumDarkSkinToneMale = new Emoji("\u{1F9D9}\uDDD9\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Mage: Medium-Dark Skin Tone: Male");
export const mageDarkSkinToneMale = new Emoji("\u{1F9D9}\uDDD9\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Mage: Dark Skin Tone: Male");
export const allMageMale = [
    mageMale,
    mageLightSkinToneMale,
    mageMediumLightSkinToneMale,
    mageMediumSkinToneMale,
    mageMediumDarkSkinToneMale,
    mageDarkSkinToneMale
];

export const allMageMaleGroup = new EmojiGroup("\u{1F9D9}\uDDD9\u200D\u2642\uFE0F", "Mage: Male", ...allMageMale);

export const mageFemale = new Emoji("\u{1F9D9}\uDDD9\u200D\u2640\uFE0F", "Mage: Female");
export const mageLightSkinToneFemale = new Emoji("\u{1F9D9}\uDDD9\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Mage: Light Skin Tone: Female");
export const mageMediumLightSkinToneFemale = new Emoji("\u{1F9D9}\uDDD9\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Mage: Medium-Light Skin Tone: Female");
export const mageMediumSkinToneFemale = new Emoji("\u{1F9D9}\uDDD9\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Mage: Medium Skin Tone: Female");
export const mageMediumDarkSkinToneFemale = new Emoji("\u{1F9D9}\uDDD9\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Mage: Medium-Dark Skin Tone: Female");
export const mageDarkSkinToneFemale = new Emoji("\u{1F9D9}\uDDD9\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Mage: Dark Skin Tone: Female");
export const allMageFemale = [
    mageFemale,
    mageLightSkinToneFemale,
    mageMediumLightSkinToneFemale,
    mageMediumSkinToneFemale,
    mageMediumDarkSkinToneFemale,
    mageDarkSkinToneFemale
];

export const allMageFemaleGroup = new EmojiGroup("\u{1F9D9}\uDDD9\u200D\u2640\uFE0F", "Mage: Female", ...allMageFemale);

export const allAllMageGroup = [
    allMageGroup,
    allMageMaleGroup,
    allMageFemaleGroup
];

export const allAllMageGroupGroup = new EmojiGroup("\u{1F9D9}\uDDD9", "Mage", ...allAllMageGroup);

export const fairy = new Emoji("\u{1F9DA}\uDDDA", "Fairy");
export const fairyLightSkinTone = new Emoji("\u{1F9DA}\uDDDA\u{1F3FB}\uDFFB", "Fairy: Light Skin Tone");
export const fairyMediumLightSkinTone = new Emoji("\u{1F9DA}\uDDDA\u{1F3FC}\uDFFC", "Fairy: Medium-Light Skin Tone");
export const fairyMediumSkinTone = new Emoji("\u{1F9DA}\uDDDA\u{1F3FD}\uDFFD", "Fairy: Medium Skin Tone");
export const fairyMediumDarkSkinTone = new Emoji("\u{1F9DA}\uDDDA\u{1F3FE}\uDFFE", "Fairy: Medium-Dark Skin Tone");
export const fairyDarkSkinTone = new Emoji("\u{1F9DA}\uDDDA\u{1F3FF}\uDFFF", "Fairy: Dark Skin Tone");
export const allFairy = [
    fairy,
    fairyLightSkinTone,
    fairyMediumLightSkinTone,
    fairyMediumSkinTone,
    fairyMediumDarkSkinTone,
    fairyDarkSkinTone
];

export const allFairyGroup = new EmojiGroup("\u{1F9DA}\uDDDA", "Fairy", ...allFairy);

export const fairyMale = new Emoji("\u{1F9DA}\uDDDA\u200D\u2642\uFE0F", "Fairy: Male");
export const fairyLightSkinToneMale = new Emoji("\u{1F9DA}\uDDDA\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Fairy: Light Skin Tone: Male");
export const fairyMediumLightSkinToneMale = new Emoji("\u{1F9DA}\uDDDA\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Fairy: Medium-Light Skin Tone: Male");
export const fairyMediumSkinToneMale = new Emoji("\u{1F9DA}\uDDDA\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Fairy: Medium Skin Tone: Male");
export const fairyMediumDarkSkinToneMale = new Emoji("\u{1F9DA}\uDDDA\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Fairy: Medium-Dark Skin Tone: Male");
export const fairyDarkSkinToneMale = new Emoji("\u{1F9DA}\uDDDA\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Fairy: Dark Skin Tone: Male");
export const allFairyMale = [
    fairyMale,
    fairyLightSkinToneMale,
    fairyMediumLightSkinToneMale,
    fairyMediumSkinToneMale,
    fairyMediumDarkSkinToneMale,
    fairyDarkSkinToneMale
];

export const allFairyMaleGroup = new EmojiGroup("\u{1F9DA}\uDDDA\u200D\u2642\uFE0F", "Fairy: Male", ...allFairyMale);

export const fairyFemale = new Emoji("\u{1F9DA}\uDDDA\u200D\u2640\uFE0F", "Fairy: Female");
export const fairyLightSkinToneFemale = new Emoji("\u{1F9DA}\uDDDA\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Fairy: Light Skin Tone: Female");
export const fairyMediumLightSkinToneFemale = new Emoji("\u{1F9DA}\uDDDA\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Fairy: Medium-Light Skin Tone: Female");
export const fairyMediumSkinToneFemale = new Emoji("\u{1F9DA}\uDDDA\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Fairy: Medium Skin Tone: Female");
export const fairyMediumDarkSkinToneFemale = new Emoji("\u{1F9DA}\uDDDA\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Fairy: Medium-Dark Skin Tone: Female");
export const fairyDarkSkinToneFemale = new Emoji("\u{1F9DA}\uDDDA\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Fairy: Dark Skin Tone: Female");
export const allFairyFemale = [
    fairyFemale,
    fairyLightSkinToneFemale,
    fairyMediumLightSkinToneFemale,
    fairyMediumSkinToneFemale,
    fairyMediumDarkSkinToneFemale,
    fairyDarkSkinToneFemale
];

export const allFairyFemaleGroup = new EmojiGroup("\u{1F9DA}\uDDDA\u200D\u2640\uFE0F", "Fairy: Female", ...allFairyFemale);

export const allAllFairyGroup = [
    allFairyGroup,
    allFairyMaleGroup,
    allFairyFemaleGroup
];

export const allAllFairyGroupGroup = new EmojiGroup("\u{1F9DA}\uDDDA", "Fairy", ...allAllFairyGroup);

export const vampire = new Emoji("\u{1F9DB}\uDDDB", "Vampire");
export const vampireLightSkinTone = new Emoji("\u{1F9DB}\uDDDB\u{1F3FB}\uDFFB", "Vampire: Light Skin Tone");
export const vampireMediumLightSkinTone = new Emoji("\u{1F9DB}\uDDDB\u{1F3FC}\uDFFC", "Vampire: Medium-Light Skin Tone");
export const vampireMediumSkinTone = new Emoji("\u{1F9DB}\uDDDB\u{1F3FD}\uDFFD", "Vampire: Medium Skin Tone");
export const vampireMediumDarkSkinTone = new Emoji("\u{1F9DB}\uDDDB\u{1F3FE}\uDFFE", "Vampire: Medium-Dark Skin Tone");
export const vampireDarkSkinTone = new Emoji("\u{1F9DB}\uDDDB\u{1F3FF}\uDFFF", "Vampire: Dark Skin Tone");
export const allVampire = [
    vampire,
    vampireLightSkinTone,
    vampireMediumLightSkinTone,
    vampireMediumSkinTone,
    vampireMediumDarkSkinTone,
    vampireDarkSkinTone
];

export const allVampireGroup = new EmojiGroup("\u{1F9DB}\uDDDB", "Vampire", ...allVampire);

export const vampireMale = new Emoji("\u{1F9DB}\uDDDB\u200D\u2642\uFE0F", "Vampire: Male");
export const vampireLightSkinToneMale = new Emoji("\u{1F9DB}\uDDDB\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Vampire: Light Skin Tone: Male");
export const vampireMediumLightSkinToneMale = new Emoji("\u{1F9DB}\uDDDB\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Vampire: Medium-Light Skin Tone: Male");
export const vampireMediumSkinToneMale = new Emoji("\u{1F9DB}\uDDDB\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Vampire: Medium Skin Tone: Male");
export const vampireMediumDarkSkinToneMale = new Emoji("\u{1F9DB}\uDDDB\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Vampire: Medium-Dark Skin Tone: Male");
export const vampireDarkSkinToneMale = new Emoji("\u{1F9DB}\uDDDB\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Vampire: Dark Skin Tone: Male");
export const allVampireMale = [
    vampireMale,
    vampireLightSkinToneMale,
    vampireMediumLightSkinToneMale,
    vampireMediumSkinToneMale,
    vampireMediumDarkSkinToneMale,
    vampireDarkSkinToneMale
];

export const allVampireMaleGroup = new EmojiGroup("\u{1F9DB}\uDDDB\u200D\u2642\uFE0F", "Vampire: Male", ...allVampireMale);

export const vampireFemale = new Emoji("\u{1F9DB}\uDDDB\u200D\u2640\uFE0F", "Vampire: Female");
export const vampireLightSkinToneFemale = new Emoji("\u{1F9DB}\uDDDB\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Vampire: Light Skin Tone: Female");
export const vampireMediumLightSkinToneFemale = new Emoji("\u{1F9DB}\uDDDB\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Vampire: Medium-Light Skin Tone: Female");
export const vampireMediumSkinToneFemale = new Emoji("\u{1F9DB}\uDDDB\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Vampire: Medium Skin Tone: Female");
export const vampireMediumDarkSkinToneFemale = new Emoji("\u{1F9DB}\uDDDB\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Vampire: Medium-Dark Skin Tone: Female");
export const vampireDarkSkinToneFemale = new Emoji("\u{1F9DB}\uDDDB\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Vampire: Dark Skin Tone: Female");
export const allVampireFemale = [
    vampireFemale,
    vampireLightSkinToneFemale,
    vampireMediumLightSkinToneFemale,
    vampireMediumSkinToneFemale,
    vampireMediumDarkSkinToneFemale,
    vampireDarkSkinToneFemale
];

export const allVampireFemaleGroup = new EmojiGroup("\u{1F9DB}\uDDDB\u200D\u2640\uFE0F", "Vampire: Female", ...allVampireFemale);

export const allAllVampireGroup = [
    allVampireGroup,
    allVampireMaleGroup,
    allVampireFemaleGroup
];

export const allAllVampireGroupGroup = new EmojiGroup("\u{1F9DB}\uDDDB", "Vampire", ...allAllVampireGroup);

export const merperson = new Emoji("\u{1F9DC}\uDDDC", "Merperson");
export const merpersonLightSkinTone = new Emoji("\u{1F9DC}\uDDDC\u{1F3FB}\uDFFB", "Merperson: Light Skin Tone");
export const merpersonMediumLightSkinTone = new Emoji("\u{1F9DC}\uDDDC\u{1F3FC}\uDFFC", "Merperson: Medium-Light Skin Tone");
export const merpersonMediumSkinTone = new Emoji("\u{1F9DC}\uDDDC\u{1F3FD}\uDFFD", "Merperson: Medium Skin Tone");
export const merpersonMediumDarkSkinTone = new Emoji("\u{1F9DC}\uDDDC\u{1F3FE}\uDFFE", "Merperson: Medium-Dark Skin Tone");
export const merpersonDarkSkinTone = new Emoji("\u{1F9DC}\uDDDC\u{1F3FF}\uDFFF", "Merperson: Dark Skin Tone");
export const allMerperson = [
    merperson,
    merpersonLightSkinTone,
    merpersonMediumLightSkinTone,
    merpersonMediumSkinTone,
    merpersonMediumDarkSkinTone,
    merpersonDarkSkinTone
];

export const allMerpersonGroup = new EmojiGroup("\u{1F9DC}\uDDDC", "Merperson", ...allMerperson);

export const merpersonMale = new Emoji("\u{1F9DC}\uDDDC\u200D\u2642\uFE0F", "Merperson: Male");
export const merpersonLightSkinToneMale = new Emoji("\u{1F9DC}\uDDDC\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Merperson: Light Skin Tone: Male");
export const merpersonMediumLightSkinToneMale = new Emoji("\u{1F9DC}\uDDDC\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Merperson: Medium-Light Skin Tone: Male");
export const merpersonMediumSkinToneMale = new Emoji("\u{1F9DC}\uDDDC\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Merperson: Medium Skin Tone: Male");
export const merpersonMediumDarkSkinToneMale = new Emoji("\u{1F9DC}\uDDDC\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Merperson: Medium-Dark Skin Tone: Male");
export const merpersonDarkSkinToneMale = new Emoji("\u{1F9DC}\uDDDC\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Merperson: Dark Skin Tone: Male");
export const allMerpersonMale = [
    merpersonMale,
    merpersonLightSkinToneMale,
    merpersonMediumLightSkinToneMale,
    merpersonMediumSkinToneMale,
    merpersonMediumDarkSkinToneMale,
    merpersonDarkSkinToneMale
];

export const allMerpersonMaleGroup = new EmojiGroup("\u{1F9DC}\uDDDC\u200D\u2642\uFE0F", "Merperson: Male", ...allMerpersonMale);

export const merpersonFemale = new Emoji("\u{1F9DC}\uDDDC\u200D\u2640\uFE0F", "Merperson: Female");
export const merpersonLightSkinToneFemale = new Emoji("\u{1F9DC}\uDDDC\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Merperson: Light Skin Tone: Female");
export const merpersonMediumLightSkinToneFemale = new Emoji("\u{1F9DC}\uDDDC\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Merperson: Medium-Light Skin Tone: Female");
export const merpersonMediumSkinToneFemale = new Emoji("\u{1F9DC}\uDDDC\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Merperson: Medium Skin Tone: Female");
export const merpersonMediumDarkSkinToneFemale = new Emoji("\u{1F9DC}\uDDDC\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Merperson: Medium-Dark Skin Tone: Female");
export const merpersonDarkSkinToneFemale = new Emoji("\u{1F9DC}\uDDDC\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Merperson: Dark Skin Tone: Female");
export const allMerpersonFemale = [
    merpersonFemale,
    merpersonLightSkinToneFemale,
    merpersonMediumLightSkinToneFemale,
    merpersonMediumSkinToneFemale,
    merpersonMediumDarkSkinToneFemale,
    merpersonDarkSkinToneFemale
];

export const allMerpersonFemaleGroup = new EmojiGroup("\u{1F9DC}\uDDDC\u200D\u2640\uFE0F", "Merperson: Female", ...allMerpersonFemale);

export const allAllMerpersonGroup = [
    allMerpersonGroup,
    allMerpersonMaleGroup,
    allMerpersonFemaleGroup
];

export const allAllMerpersonGroupGroup = new EmojiGroup("\u{1F9DC}\uDDDC", "Merperson", ...allAllMerpersonGroup);

export const elf = new Emoji("\u{1F9DD}\uDDDD", "Elf");
export const elfLightSkinTone = new Emoji("\u{1F9DD}\uDDDD\u{1F3FB}\uDFFB", "Elf: Light Skin Tone");
export const elfMediumLightSkinTone = new Emoji("\u{1F9DD}\uDDDD\u{1F3FC}\uDFFC", "Elf: Medium-Light Skin Tone");
export const elfMediumSkinTone = new Emoji("\u{1F9DD}\uDDDD\u{1F3FD}\uDFFD", "Elf: Medium Skin Tone");
export const elfMediumDarkSkinTone = new Emoji("\u{1F9DD}\uDDDD\u{1F3FE}\uDFFE", "Elf: Medium-Dark Skin Tone");
export const elfDarkSkinTone = new Emoji("\u{1F9DD}\uDDDD\u{1F3FF}\uDFFF", "Elf: Dark Skin Tone");
export const allElf = [
    elf,
    elfLightSkinTone,
    elfMediumLightSkinTone,
    elfMediumSkinTone,
    elfMediumDarkSkinTone,
    elfDarkSkinTone
];

export const allElfGroup = new EmojiGroup("\u{1F9DD}\uDDDD", "Elf", ...allElf);

export const elfMale = new Emoji("\u{1F9DD}\uDDDD\u200D\u2642\uFE0F", "Elf: Male");
export const elfLightSkinToneMale = new Emoji("\u{1F9DD}\uDDDD\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Elf: Light Skin Tone: Male");
export const elfMediumLightSkinToneMale = new Emoji("\u{1F9DD}\uDDDD\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Elf: Medium-Light Skin Tone: Male");
export const elfMediumSkinToneMale = new Emoji("\u{1F9DD}\uDDDD\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Elf: Medium Skin Tone: Male");
export const elfMediumDarkSkinToneMale = new Emoji("\u{1F9DD}\uDDDD\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Elf: Medium-Dark Skin Tone: Male");
export const elfDarkSkinToneMale = new Emoji("\u{1F9DD}\uDDDD\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Elf: Dark Skin Tone: Male");
export const allElfMale = [
    elfMale,
    elfLightSkinToneMale,
    elfMediumLightSkinToneMale,
    elfMediumSkinToneMale,
    elfMediumDarkSkinToneMale,
    elfDarkSkinToneMale
];

export const allElfMaleGroup = new EmojiGroup("\u{1F9DD}\uDDDD\u200D\u2642\uFE0F", "Elf: Male", ...allElfMale);

export const elfFemale = new Emoji("\u{1F9DD}\uDDDD\u200D\u2640\uFE0F", "Elf: Female");
export const elfLightSkinToneFemale = new Emoji("\u{1F9DD}\uDDDD\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Elf: Light Skin Tone: Female");
export const elfMediumLightSkinToneFemale = new Emoji("\u{1F9DD}\uDDDD\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Elf: Medium-Light Skin Tone: Female");
export const elfMediumSkinToneFemale = new Emoji("\u{1F9DD}\uDDDD\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Elf: Medium Skin Tone: Female");
export const elfMediumDarkSkinToneFemale = new Emoji("\u{1F9DD}\uDDDD\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Elf: Medium-Dark Skin Tone: Female");
export const elfDarkSkinToneFemale = new Emoji("\u{1F9DD}\uDDDD\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Elf: Dark Skin Tone: Female");
export const allElfFemale = [
    elfFemale,
    elfLightSkinToneFemale,
    elfMediumLightSkinToneFemale,
    elfMediumSkinToneFemale,
    elfMediumDarkSkinToneFemale,
    elfDarkSkinToneFemale
];

export const allElfFemaleGroup = new EmojiGroup("\u{1F9DD}\uDDDD\u200D\u2640\uFE0F", "Elf: Female", ...allElfFemale);

export const allAllElfGroup = [
    allElfGroup,
    allElfMaleGroup,
    allElfFemaleGroup
];

export const allAllElfGroupGroup = new EmojiGroup("\u{1F9DD}\uDDDD", "Elf", ...allAllElfGroup);

export const walking = new Emoji("\u{1F6B6}\uDEB6", "Walking");
export const walkingLightSkinTone = new Emoji("\u{1F6B6}\uDEB6\u{1F3FB}\uDFFB", "Walking: Light Skin Tone");
export const walkingMediumLightSkinTone = new Emoji("\u{1F6B6}\uDEB6\u{1F3FC}\uDFFC", "Walking: Medium-Light Skin Tone");
export const walkingMediumSkinTone = new Emoji("\u{1F6B6}\uDEB6\u{1F3FD}\uDFFD", "Walking: Medium Skin Tone");
export const walkingMediumDarkSkinTone = new Emoji("\u{1F6B6}\uDEB6\u{1F3FE}\uDFFE", "Walking: Medium-Dark Skin Tone");
export const walkingDarkSkinTone = new Emoji("\u{1F6B6}\uDEB6\u{1F3FF}\uDFFF", "Walking: Dark Skin Tone");
export const allWalking = [
    walking,
    walkingLightSkinTone,
    walkingMediumLightSkinTone,
    walkingMediumSkinTone,
    walkingMediumDarkSkinTone,
    walkingDarkSkinTone
];

export const allWalkingGroup = new EmojiGroup("\u{1F6B6}\uDEB6", "Walking", ...allWalking);

export const walkingMale = new Emoji("\u{1F6B6}\uDEB6\u200D\u2642\uFE0F", "Walking: Male");
export const walkingLightSkinToneMale = new Emoji("\u{1F6B6}\uDEB6\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Walking: Light Skin Tone: Male");
export const walkingMediumLightSkinToneMale = new Emoji("\u{1F6B6}\uDEB6\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Walking: Medium-Light Skin Tone: Male");
export const walkingMediumSkinToneMale = new Emoji("\u{1F6B6}\uDEB6\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Walking: Medium Skin Tone: Male");
export const walkingMediumDarkSkinToneMale = new Emoji("\u{1F6B6}\uDEB6\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Walking: Medium-Dark Skin Tone: Male");
export const walkingDarkSkinToneMale = new Emoji("\u{1F6B6}\uDEB6\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Walking: Dark Skin Tone: Male");
export const allWalkingMale = [
    walkingMale,
    walkingLightSkinToneMale,
    walkingMediumLightSkinToneMale,
    walkingMediumSkinToneMale,
    walkingMediumDarkSkinToneMale,
    walkingDarkSkinToneMale
];

export const allWalkingMaleGroup = new EmojiGroup("\u{1F6B6}\uDEB6\u200D\u2642\uFE0F", "Walking: Male", ...allWalkingMale);

export const walkingFemale = new Emoji("\u{1F6B6}\uDEB6\u200D\u2640\uFE0F", "Walking: Female");
export const walkingLightSkinToneFemale = new Emoji("\u{1F6B6}\uDEB6\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Walking: Light Skin Tone: Female");
export const walkingMediumLightSkinToneFemale = new Emoji("\u{1F6B6}\uDEB6\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Walking: Medium-Light Skin Tone: Female");
export const walkingMediumSkinToneFemale = new Emoji("\u{1F6B6}\uDEB6\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Walking: Medium Skin Tone: Female");
export const walkingMediumDarkSkinToneFemale = new Emoji("\u{1F6B6}\uDEB6\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Walking: Medium-Dark Skin Tone: Female");
export const walkingDarkSkinToneFemale = new Emoji("\u{1F6B6}\uDEB6\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Walking: Dark Skin Tone: Female");
export const allWalkingFemale = [
    walkingFemale,
    walkingLightSkinToneFemale,
    walkingMediumLightSkinToneFemale,
    walkingMediumSkinToneFemale,
    walkingMediumDarkSkinToneFemale,
    walkingDarkSkinToneFemale
];

export const allWalkingFemaleGroup = new EmojiGroup("\u{1F6B6}\uDEB6\u200D\u2640\uFE0F", "Walking: Female", ...allWalkingFemale);

export const allAllWalkingGroup = [
    allWalkingGroup,
    allWalkingMaleGroup,
    allWalkingFemaleGroup
];

export const allAllWalkingGroupGroup = new EmojiGroup("\u{1F6B6}\uDEB6", "Walking", ...allAllWalkingGroup);

export const standing = new Emoji("\u{1F9CD}\uDDCD", "Standing");
export const standingLightSkinTone = new Emoji("\u{1F9CD}\uDDCD\u{1F3FB}\uDFFB", "Standing: Light Skin Tone");
export const standingMediumLightSkinTone = new Emoji("\u{1F9CD}\uDDCD\u{1F3FC}\uDFFC", "Standing: Medium-Light Skin Tone");
export const standingMediumSkinTone = new Emoji("\u{1F9CD}\uDDCD\u{1F3FD}\uDFFD", "Standing: Medium Skin Tone");
export const standingMediumDarkSkinTone = new Emoji("\u{1F9CD}\uDDCD\u{1F3FE}\uDFFE", "Standing: Medium-Dark Skin Tone");
export const standingDarkSkinTone = new Emoji("\u{1F9CD}\uDDCD\u{1F3FF}\uDFFF", "Standing: Dark Skin Tone");
export const allStanding = [
    standing,
    standingLightSkinTone,
    standingMediumLightSkinTone,
    standingMediumSkinTone,
    standingMediumDarkSkinTone,
    standingDarkSkinTone
];

export const allStandingGroup = new EmojiGroup("\u{1F9CD}\uDDCD", "Standing", ...allStanding);

export const standingMale = new Emoji("\u{1F9CD}\uDDCD\u200D\u2642\uFE0F", "Standing: Male");
export const standingLightSkinToneMale = new Emoji("\u{1F9CD}\uDDCD\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Standing: Light Skin Tone: Male");
export const standingMediumLightSkinToneMale = new Emoji("\u{1F9CD}\uDDCD\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Standing: Medium-Light Skin Tone: Male");
export const standingMediumSkinToneMale = new Emoji("\u{1F9CD}\uDDCD\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Standing: Medium Skin Tone: Male");
export const standingMediumDarkSkinToneMale = new Emoji("\u{1F9CD}\uDDCD\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Standing: Medium-Dark Skin Tone: Male");
export const standingDarkSkinToneMale = new Emoji("\u{1F9CD}\uDDCD\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Standing: Dark Skin Tone: Male");
export const allStandingMale = [
    standingMale,
    standingLightSkinToneMale,
    standingMediumLightSkinToneMale,
    standingMediumSkinToneMale,
    standingMediumDarkSkinToneMale,
    standingDarkSkinToneMale
];

export const allStandingMaleGroup = new EmojiGroup("\u{1F9CD}\uDDCD\u200D\u2642\uFE0F", "Standing: Male", ...allStandingMale);

export const standingFemale = new Emoji("\u{1F9CD}\uDDCD\u200D\u2640\uFE0F", "Standing: Female");
export const standingLightSkinToneFemale = new Emoji("\u{1F9CD}\uDDCD\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Standing: Light Skin Tone: Female");
export const standingMediumLightSkinToneFemale = new Emoji("\u{1F9CD}\uDDCD\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Standing: Medium-Light Skin Tone: Female");
export const standingMediumSkinToneFemale = new Emoji("\u{1F9CD}\uDDCD\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Standing: Medium Skin Tone: Female");
export const standingMediumDarkSkinToneFemale = new Emoji("\u{1F9CD}\uDDCD\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Standing: Medium-Dark Skin Tone: Female");
export const standingDarkSkinToneFemale = new Emoji("\u{1F9CD}\uDDCD\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Standing: Dark Skin Tone: Female");
export const allStandingFemale = [
    standingFemale,
    standingLightSkinToneFemale,
    standingMediumLightSkinToneFemale,
    standingMediumSkinToneFemale,
    standingMediumDarkSkinToneFemale,
    standingDarkSkinToneFemale
];

export const allStandingFemaleGroup = new EmojiGroup("\u{1F9CD}\uDDCD\u200D\u2640\uFE0F", "Standing: Female", ...allStandingFemale);

export const allAllStandingGroup = [
    allStandingGroup,
    allStandingMaleGroup,
    allStandingFemaleGroup
];

export const allAllStandingGroupGroup = new EmojiGroup("\u{1F9CD}\uDDCD", "Standing", ...allAllStandingGroup);

export const kneeling = new Emoji("\u{1F9CE}\uDDCE", "Kneeling");
export const kneelingLightSkinTone = new Emoji("\u{1F9CE}\uDDCE\u{1F3FB}\uDFFB", "Kneeling: Light Skin Tone");
export const kneelingMediumLightSkinTone = new Emoji("\u{1F9CE}\uDDCE\u{1F3FC}\uDFFC", "Kneeling: Medium-Light Skin Tone");
export const kneelingMediumSkinTone = new Emoji("\u{1F9CE}\uDDCE\u{1F3FD}\uDFFD", "Kneeling: Medium Skin Tone");
export const kneelingMediumDarkSkinTone = new Emoji("\u{1F9CE}\uDDCE\u{1F3FE}\uDFFE", "Kneeling: Medium-Dark Skin Tone");
export const kneelingDarkSkinTone = new Emoji("\u{1F9CE}\uDDCE\u{1F3FF}\uDFFF", "Kneeling: Dark Skin Tone");
export const allKneeling = [
    kneeling,
    kneelingLightSkinTone,
    kneelingMediumLightSkinTone,
    kneelingMediumSkinTone,
    kneelingMediumDarkSkinTone,
    kneelingDarkSkinTone
];

export const allKneelingGroup = new EmojiGroup("\u{1F9CE}\uDDCE", "Kneeling", ...allKneeling);

export const kneelingMale = new Emoji("\u{1F9CE}\uDDCE\u200D\u2642\uFE0F", "Kneeling: Male");
export const kneelingLightSkinToneMale = new Emoji("\u{1F9CE}\uDDCE\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Kneeling: Light Skin Tone: Male");
export const kneelingMediumLightSkinToneMale = new Emoji("\u{1F9CE}\uDDCE\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Kneeling: Medium-Light Skin Tone: Male");
export const kneelingMediumSkinToneMale = new Emoji("\u{1F9CE}\uDDCE\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Kneeling: Medium Skin Tone: Male");
export const kneelingMediumDarkSkinToneMale = new Emoji("\u{1F9CE}\uDDCE\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Kneeling: Medium-Dark Skin Tone: Male");
export const kneelingDarkSkinToneMale = new Emoji("\u{1F9CE}\uDDCE\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Kneeling: Dark Skin Tone: Male");
export const allKneelingMale = [
    kneelingMale,
    kneelingLightSkinToneMale,
    kneelingMediumLightSkinToneMale,
    kneelingMediumSkinToneMale,
    kneelingMediumDarkSkinToneMale,
    kneelingDarkSkinToneMale
];

export const allKneelingMaleGroup = new EmojiGroup("\u{1F9CE}\uDDCE\u200D\u2642\uFE0F", "Kneeling: Male", ...allKneelingMale);

export const kneelingFemale = new Emoji("\u{1F9CE}\uDDCE\u200D\u2640\uFE0F", "Kneeling: Female");
export const kneelingLightSkinToneFemale = new Emoji("\u{1F9CE}\uDDCE\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Kneeling: Light Skin Tone: Female");
export const kneelingMediumLightSkinToneFemale = new Emoji("\u{1F9CE}\uDDCE\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Kneeling: Medium-Light Skin Tone: Female");
export const kneelingMediumSkinToneFemale = new Emoji("\u{1F9CE}\uDDCE\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Kneeling: Medium Skin Tone: Female");
export const kneelingMediumDarkSkinToneFemale = new Emoji("\u{1F9CE}\uDDCE\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Kneeling: Medium-Dark Skin Tone: Female");
export const kneelingDarkSkinToneFemale = new Emoji("\u{1F9CE}\uDDCE\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Kneeling: Dark Skin Tone: Female");
export const allKneelingFemale = [
    kneelingFemale,
    kneelingLightSkinToneFemale,
    kneelingMediumLightSkinToneFemale,
    kneelingMediumSkinToneFemale,
    kneelingMediumDarkSkinToneFemale,
    kneelingDarkSkinToneFemale
];

export const allKneelingFemaleGroup = new EmojiGroup("\u{1F9CE}\uDDCE\u200D\u2640\uFE0F", "Kneeling: Female", ...allKneelingFemale);

export const allAllKneelingGroup = [
    allKneelingGroup,
    allKneelingMaleGroup,
    allKneelingFemaleGroup
];

export const allAllKneelingGroupGroup = new EmojiGroup("\u{1F9CE}\uDDCE", "Kneeling", ...allAllKneelingGroup);

export const running = new Emoji("\u{1F3C3}\uDFC3", "Running");
export const runningLightSkinTone = new Emoji("\u{1F3C3}\uDFC3\u{1F3FB}\uDFFB", "Running: Light Skin Tone");
export const runningMediumLightSkinTone = new Emoji("\u{1F3C3}\uDFC3\u{1F3FC}\uDFFC", "Running: Medium-Light Skin Tone");
export const runningMediumSkinTone = new Emoji("\u{1F3C3}\uDFC3\u{1F3FD}\uDFFD", "Running: Medium Skin Tone");
export const runningMediumDarkSkinTone = new Emoji("\u{1F3C3}\uDFC3\u{1F3FE}\uDFFE", "Running: Medium-Dark Skin Tone");
export const runningDarkSkinTone = new Emoji("\u{1F3C3}\uDFC3\u{1F3FF}\uDFFF", "Running: Dark Skin Tone");
export const allRunning = [
    running,
    runningLightSkinTone,
    runningMediumLightSkinTone,
    runningMediumSkinTone,
    runningMediumDarkSkinTone,
    runningDarkSkinTone
];

export const allRunningGroup = new EmojiGroup("\u{1F3C3}\uDFC3", "Running", ...allRunning);

export const runningMale = new Emoji("\u{1F3C3}\uDFC3\u200D\u2642\uFE0F", "Running: Male");
export const runningLightSkinToneMale = new Emoji("\u{1F3C3}\uDFC3\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Running: Light Skin Tone: Male");
export const runningMediumLightSkinToneMale = new Emoji("\u{1F3C3}\uDFC3\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Running: Medium-Light Skin Tone: Male");
export const runningMediumSkinToneMale = new Emoji("\u{1F3C3}\uDFC3\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Running: Medium Skin Tone: Male");
export const runningMediumDarkSkinToneMale = new Emoji("\u{1F3C3}\uDFC3\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Running: Medium-Dark Skin Tone: Male");
export const runningDarkSkinToneMale = new Emoji("\u{1F3C3}\uDFC3\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Running: Dark Skin Tone: Male");
export const allRunningMale = [
    runningMale,
    runningLightSkinToneMale,
    runningMediumLightSkinToneMale,
    runningMediumSkinToneMale,
    runningMediumDarkSkinToneMale,
    runningDarkSkinToneMale
];

export const allRunningMaleGroup = new EmojiGroup("\u{1F3C3}\uDFC3\u200D\u2642\uFE0F", "Running: Male", ...allRunningMale);

export const runningFemale = new Emoji("\u{1F3C3}\uDFC3\u200D\u2640\uFE0F", "Running: Female");
export const runningLightSkinToneFemale = new Emoji("\u{1F3C3}\uDFC3\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Running: Light Skin Tone: Female");
export const runningMediumLightSkinToneFemale = new Emoji("\u{1F3C3}\uDFC3\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Running: Medium-Light Skin Tone: Female");
export const runningMediumSkinToneFemale = new Emoji("\u{1F3C3}\uDFC3\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Running: Medium Skin Tone: Female");
export const runningMediumDarkSkinToneFemale = new Emoji("\u{1F3C3}\uDFC3\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Running: Medium-Dark Skin Tone: Female");
export const runningDarkSkinToneFemale = new Emoji("\u{1F3C3}\uDFC3\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Running: Dark Skin Tone: Female");
export const allRunningFemale = [
    runningFemale,
    runningLightSkinToneFemale,
    runningMediumLightSkinToneFemale,
    runningMediumSkinToneFemale,
    runningMediumDarkSkinToneFemale,
    runningDarkSkinToneFemale
];

export const allRunningFemaleGroup = new EmojiGroup("\u{1F3C3}\uDFC3\u200D\u2640\uFE0F", "Running: Female", ...allRunningFemale);

export const allAllRunningGroup = [
    allRunningGroup,
    allRunningMaleGroup,
    allRunningFemaleGroup
];

export const allAllRunningGroupGroup = new EmojiGroup("\u{1F3C3}\uDFC3", "Running", ...allAllRunningGroup);

export const allAllAllFrowningGroupGroup = [
    allAllFrowningGroupGroup,
    allAllPoutingGroupGroup,
    allAllGesturingNOGroupGroup,
    allAllGesturingOKGroupGroup,
    allAllTippingHandGroupGroup,
    allAllRaisingHandGroupGroup,
    allAllBowingGroupGroup,
    allAllFacepalmingGroupGroup,
    allAllShruggingGroupGroup,
    allAllCanTHearGroupGroup,
    allAllGettingMassageGroupGroup,
    allAllGettingHaircutGroupGroup
];

export const allAllAllFrowningGroupGroupGroup = new EmojiGroup("\u0047\u0065\u0073\u0074\u0075\u0072\u0065\u0073", "Gestures", ...allAllAllFrowningGroupGroup);

export const baby = new Emoji("\u{1F476}\uDC76", "Baby");
export const babyLightSkinTone = new Emoji("\u{1F476}\uDC76\u{1F3FB}\uDFFB", "Baby: Light Skin Tone");
export const babyMediumLightSkinTone = new Emoji("\u{1F476}\uDC76\u{1F3FC}\uDFFC", "Baby: Medium-Light Skin Tone");
export const babyMediumSkinTone = new Emoji("\u{1F476}\uDC76\u{1F3FD}\uDFFD", "Baby: Medium Skin Tone");
export const babyMediumDarkSkinTone = new Emoji("\u{1F476}\uDC76\u{1F3FE}\uDFFE", "Baby: Medium-Dark Skin Tone");
export const babyDarkSkinTone = new Emoji("\u{1F476}\uDC76\u{1F3FF}\uDFFF", "Baby: Dark Skin Tone");
export const allBaby = [
    baby,
    babyLightSkinTone,
    babyMediumLightSkinTone,
    babyMediumSkinTone,
    babyMediumDarkSkinTone,
    babyDarkSkinTone
];

export const allBabyGroup = new EmojiGroup("\u{1F476}\uDC76", "Baby", ...allBaby);

export const child = new Emoji("\u{1F9D2}\uDDD2", "Child");
export const childLightSkinTone = new Emoji("\u{1F9D2}\uDDD2\u{1F3FB}\uDFFB", "Child: Light Skin Tone");
export const childMediumLightSkinTone = new Emoji("\u{1F9D2}\uDDD2\u{1F3FC}\uDFFC", "Child: Medium-Light Skin Tone");
export const childMediumSkinTone = new Emoji("\u{1F9D2}\uDDD2\u{1F3FD}\uDFFD", "Child: Medium Skin Tone");
export const childMediumDarkSkinTone = new Emoji("\u{1F9D2}\uDDD2\u{1F3FE}\uDFFE", "Child: Medium-Dark Skin Tone");
export const childDarkSkinTone = new Emoji("\u{1F9D2}\uDDD2\u{1F3FF}\uDFFF", "Child: Dark Skin Tone");
export const allChild = [
    child,
    childLightSkinTone,
    childMediumLightSkinTone,
    childMediumSkinTone,
    childMediumDarkSkinTone,
    childDarkSkinTone
];

export const allChildGroup = new EmojiGroup("\u{1F9D2}\uDDD2", "Child", ...allChild);

export const boy = new Emoji("\u{1F466}\uDC66", "Boy");
export const boyLightSkinTone = new Emoji("\u{1F466}\uDC66\u{1F3FB}\uDFFB", "Boy: Light Skin Tone");
export const boyMediumLightSkinTone = new Emoji("\u{1F466}\uDC66\u{1F3FC}\uDFFC", "Boy: Medium-Light Skin Tone");
export const boyMediumSkinTone = new Emoji("\u{1F466}\uDC66\u{1F3FD}\uDFFD", "Boy: Medium Skin Tone");
export const boyMediumDarkSkinTone = new Emoji("\u{1F466}\uDC66\u{1F3FE}\uDFFE", "Boy: Medium-Dark Skin Tone");
export const boyDarkSkinTone = new Emoji("\u{1F466}\uDC66\u{1F3FF}\uDFFF", "Boy: Dark Skin Tone");
export const allBoy = [
    boy,
    boyLightSkinTone,
    boyMediumLightSkinTone,
    boyMediumSkinTone,
    boyMediumDarkSkinTone,
    boyDarkSkinTone
];

export const allBoyGroup = new EmojiGroup("\u{1F466}\uDC66", "Boy", ...allBoy);

export const girl = new Emoji("\u{1F467}\uDC67", "Girl");
export const girlLightSkinTone = new Emoji("\u{1F467}\uDC67\u{1F3FB}\uDFFB", "Girl: Light Skin Tone");
export const girlMediumLightSkinTone = new Emoji("\u{1F467}\uDC67\u{1F3FC}\uDFFC", "Girl: Medium-Light Skin Tone");
export const girlMediumSkinTone = new Emoji("\u{1F467}\uDC67\u{1F3FD}\uDFFD", "Girl: Medium Skin Tone");
export const girlMediumDarkSkinTone = new Emoji("\u{1F467}\uDC67\u{1F3FE}\uDFFE", "Girl: Medium-Dark Skin Tone");
export const girlDarkSkinTone = new Emoji("\u{1F467}\uDC67\u{1F3FF}\uDFFF", "Girl: Dark Skin Tone");
export const allGirl = [
    girl,
    girlLightSkinTone,
    girlMediumLightSkinTone,
    girlMediumSkinTone,
    girlMediumDarkSkinTone,
    girlDarkSkinTone
];

export const allGirlGroup = new EmojiGroup("\u{1F467}\uDC67", "Girl", ...allGirl);

export const allAllChildGroup = [
    allChildGroup,
    allBoyGroup,
    allGirlGroup
];

export const allAllChildGroupGroup = new EmojiGroup("\u{1F9D2}\uDDD2", "Child", ...allAllChildGroup);

export const blondPerson = new Emoji("\u{1F471}\uDC71", "Blond Person");
export const blondPersonLightSkinTone = new Emoji("\u{1F471}\uDC71\u{1F3FB}\uDFFB", "Blond Person: Light Skin Tone");
export const blondPersonMediumLightSkinTone = new Emoji("\u{1F471}\uDC71\u{1F3FC}\uDFFC", "Blond Person: Medium-Light Skin Tone");
export const blondPersonMediumSkinTone = new Emoji("\u{1F471}\uDC71\u{1F3FD}\uDFFD", "Blond Person: Medium Skin Tone");
export const blondPersonMediumDarkSkinTone = new Emoji("\u{1F471}\uDC71\u{1F3FE}\uDFFE", "Blond Person: Medium-Dark Skin Tone");
export const blondPersonDarkSkinTone = new Emoji("\u{1F471}\uDC71\u{1F3FF}\uDFFF", "Blond Person: Dark Skin Tone");
export const allBlondPerson = [
    blondPerson,
    blondPersonLightSkinTone,
    blondPersonMediumLightSkinTone,
    blondPersonMediumSkinTone,
    blondPersonMediumDarkSkinTone,
    blondPersonDarkSkinTone
];

export const allBlondPersonGroup = new EmojiGroup("\u{1F471}\uDC71", "Blond Person", ...allBlondPerson);

export const blondPersonMale = new Emoji("\u{1F471}\uDC71\u200D\u2642\uFE0F", "Blond Person: Male");
export const blondPersonLightSkinToneMale = new Emoji("\u{1F471}\uDC71\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Blond Person: Light Skin Tone: Male");
export const blondPersonMediumLightSkinToneMale = new Emoji("\u{1F471}\uDC71\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Blond Person: Medium-Light Skin Tone: Male");
export const blondPersonMediumSkinToneMale = new Emoji("\u{1F471}\uDC71\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Blond Person: Medium Skin Tone: Male");
export const blondPersonMediumDarkSkinToneMale = new Emoji("\u{1F471}\uDC71\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Blond Person: Medium-Dark Skin Tone: Male");
export const blondPersonDarkSkinToneMale = new Emoji("\u{1F471}\uDC71\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Blond Person: Dark Skin Tone: Male");
export const allBlondPersonMale = [
    blondPersonMale,
    blondPersonLightSkinToneMale,
    blondPersonMediumLightSkinToneMale,
    blondPersonMediumSkinToneMale,
    blondPersonMediumDarkSkinToneMale,
    blondPersonDarkSkinToneMale
];

export const allBlondPersonMaleGroup = new EmojiGroup("\u{1F471}\uDC71\u200D\u2642\uFE0F", "Blond Person: Male", ...allBlondPersonMale);

export const blondPersonFemale = new Emoji("\u{1F471}\uDC71\u200D\u2640\uFE0F", "Blond Person: Female");
export const blondPersonLightSkinToneFemale = new Emoji("\u{1F471}\uDC71\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Blond Person: Light Skin Tone: Female");
export const blondPersonMediumLightSkinToneFemale = new Emoji("\u{1F471}\uDC71\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Blond Person: Medium-Light Skin Tone: Female");
export const blondPersonMediumSkinToneFemale = new Emoji("\u{1F471}\uDC71\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Blond Person: Medium Skin Tone: Female");
export const blondPersonMediumDarkSkinToneFemale = new Emoji("\u{1F471}\uDC71\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Blond Person: Medium-Dark Skin Tone: Female");
export const blondPersonDarkSkinToneFemale = new Emoji("\u{1F471}\uDC71\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Blond Person: Dark Skin Tone: Female");
export const allBlondPersonFemale = [
    blondPersonFemale,
    blondPersonLightSkinToneFemale,
    blondPersonMediumLightSkinToneFemale,
    blondPersonMediumSkinToneFemale,
    blondPersonMediumDarkSkinToneFemale,
    blondPersonDarkSkinToneFemale
];

export const allBlondPersonFemaleGroup = new EmojiGroup("\u{1F471}\uDC71\u200D\u2640\uFE0F", "Blond Person: Female", ...allBlondPersonFemale);

export const allAllBlondPersonGroup = [
    allBlondPersonGroup,
    allBlondPersonMaleGroup,
    allBlondPersonFemaleGroup
];

export const allAllBlondPersonGroupGroup = new EmojiGroup("\u{1F471}\uDC71", "Blond Person", ...allAllBlondPersonGroup);

export const person = new Emoji("\u{1F9D1}\uDDD1", "Person");
export const personLightSkinTone = new Emoji("\u{1F9D1}\uDDD1\u{1F3FB}\uDFFB", "Person: Light Skin Tone");
export const personMediumLightSkinTone = new Emoji("\u{1F9D1}\uDDD1\u{1F3FC}\uDFFC", "Person: Medium-Light Skin Tone");
export const personMediumSkinTone = new Emoji("\u{1F9D1}\uDDD1\u{1F3FD}\uDFFD", "Person: Medium Skin Tone");
export const personMediumDarkSkinTone = new Emoji("\u{1F9D1}\uDDD1\u{1F3FE}\uDFFE", "Person: Medium-Dark Skin Tone");
export const personDarkSkinTone = new Emoji("\u{1F9D1}\uDDD1\u{1F3FF}\uDFFF", "Person: Dark Skin Tone");
export const allPerson = [
    person,
    personLightSkinTone,
    personMediumLightSkinTone,
    personMediumSkinTone,
    personMediumDarkSkinTone,
    personDarkSkinTone,
    allBlondPersonGroup,
    allWearingTurbanGroup
];

export const allPersonGroup = new EmojiGroup("\u{1F9D1}\uDDD1", "Person", ...allPerson);

export const beardedMan = new Emoji("\u{1F9D4}\uDDD4", "Bearded Man");
export const beardedManLightSkinTone = new Emoji("\u{1F9D4}\uDDD4\u{1F3FB}\uDFFB", "Bearded Man: Light Skin Tone");
export const beardedManMediumLightSkinTone = new Emoji("\u{1F9D4}\uDDD4\u{1F3FC}\uDFFC", "Bearded Man: Medium-Light Skin Tone");
export const beardedManMediumSkinTone = new Emoji("\u{1F9D4}\uDDD4\u{1F3FD}\uDFFD", "Bearded Man: Medium Skin Tone");
export const beardedManMediumDarkSkinTone = new Emoji("\u{1F9D4}\uDDD4\u{1F3FE}\uDFFE", "Bearded Man: Medium-Dark Skin Tone");
export const beardedManDarkSkinTone = new Emoji("\u{1F9D4}\uDDD4\u{1F3FF}\uDFFF", "Bearded Man: Dark Skin Tone");
export const allBeardedMan = [
    beardedMan,
    beardedManLightSkinTone,
    beardedManMediumLightSkinTone,
    beardedManMediumSkinTone,
    beardedManMediumDarkSkinTone,
    beardedManDarkSkinTone
];

export const allBeardedManGroup = new EmojiGroup("\u{1F9D4}\uDDD4", "Bearded Man", ...allBeardedMan);

export const manInSuitLevitating = new Emoji("\u{1F574}\uDD74\uFE0F", "Man in Suit, Levitating");
export const manWithChineseCap = new Emoji("\u{1F472}\uDC72", "Man With Chinese Cap");
export const manWithChineseCapLightSkinTone = new Emoji("\u{1F472}\uDC72\u{1F3FB}\uDFFB", "Man With Chinese Cap: Light Skin Tone");
export const manWithChineseCapMediumLightSkinTone = new Emoji("\u{1F472}\uDC72\u{1F3FC}\uDFFC", "Man With Chinese Cap: Medium-Light Skin Tone");
export const manWithChineseCapMediumSkinTone = new Emoji("\u{1F472}\uDC72\u{1F3FD}\uDFFD", "Man With Chinese Cap: Medium Skin Tone");
export const manWithChineseCapMediumDarkSkinTone = new Emoji("\u{1F472}\uDC72\u{1F3FE}\uDFFE", "Man With Chinese Cap: Medium-Dark Skin Tone");
export const manWithChineseCapDarkSkinTone = new Emoji("\u{1F472}\uDC72\u{1F3FF}\uDFFF", "Man With Chinese Cap: Dark Skin Tone");
export const allManWithChineseCap = [
    manWithChineseCap,
    manWithChineseCapLightSkinTone,
    manWithChineseCapMediumLightSkinTone,
    manWithChineseCapMediumSkinTone,
    manWithChineseCapMediumDarkSkinTone,
    manWithChineseCapDarkSkinTone
];

export const allManWithChineseCapGroup = new EmojiGroup("\u{1F472}\uDC72", "Man With Chinese Cap", ...allManWithChineseCap);

export const manInTuxedo = new Emoji("\u{1F935}\uDD35", "Man in Tuxedo");
export const manInTuxedoLightSkinTone = new Emoji("\u{1F935}\uDD35\u{1F3FB}\uDFFB", "Man in Tuxedo: Light Skin Tone");
export const manInTuxedoMediumLightSkinTone = new Emoji("\u{1F935}\uDD35\u{1F3FC}\uDFFC", "Man in Tuxedo: Medium-Light Skin Tone");
export const manInTuxedoMediumSkinTone = new Emoji("\u{1F935}\uDD35\u{1F3FD}\uDFFD", "Man in Tuxedo: Medium Skin Tone");
export const manInTuxedoMediumDarkSkinTone = new Emoji("\u{1F935}\uDD35\u{1F3FE}\uDFFE", "Man in Tuxedo: Medium-Dark Skin Tone");
export const manInTuxedoDarkSkinTone = new Emoji("\u{1F935}\uDD35\u{1F3FF}\uDFFF", "Man in Tuxedo: Dark Skin Tone");
export const allManInTuxedo = [
    manInTuxedo,
    manInTuxedoLightSkinTone,
    manInTuxedoMediumLightSkinTone,
    manInTuxedoMediumSkinTone,
    manInTuxedoMediumDarkSkinTone,
    manInTuxedoDarkSkinTone
];

export const allManInTuxedoGroup = new EmojiGroup("\u{1F935}\uDD35", "Man in Tuxedo", ...allManInTuxedo);

export const man = new Emoji("\u{1F468}\uDC68", "Man");
export const manLightSkinTone = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB", "Man: Light Skin Tone");
export const manMediumLightSkinTone = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC", "Man: Medium-Light Skin Tone");
export const manMediumSkinTone = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD", "Man: Medium Skin Tone");
export const manMediumDarkSkinTone = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE", "Man: Medium-Dark Skin Tone");
export const manDarkSkinTone = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF", "Man: Dark Skin Tone");
export const allMan = [
    man,
    manLightSkinTone,
    manMediumLightSkinTone,
    manMediumSkinTone,
    manMediumDarkSkinTone,
    manDarkSkinTone
];

export const allManGroup = new EmojiGroup("\u{1F468}\uDC68", "Man", ...allMan);

export const manRedHair = new Emoji("\u{1F468}\uDC68\u200D\u{1F9B0}\uDDB0", "Man: Red Hair");
export const manLightSkinToneRedHair = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F9B0}\uDDB0", "Man: Light Skin Tone: Red Hair");
export const manMediumLightSkinToneRedHair = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F9B0}\uDDB0", "Man: Medium-Light Skin Tone: Red Hair");
export const manMediumSkinToneRedHair = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F9B0}\uDDB0", "Man: Medium Skin Tone: Red Hair");
export const manMediumDarkSkinToneRedHair = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F9B0}\uDDB0", "Man: Medium-Dark Skin Tone: Red Hair");
export const manDarkSkinToneRedHair = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F9B0}\uDDB0", "Man: Dark Skin Tone: Red Hair");
export const allManRedHair = [
    manRedHair,
    manLightSkinToneRedHair,
    manMediumLightSkinToneRedHair,
    manMediumSkinToneRedHair,
    manMediumDarkSkinToneRedHair,
    manDarkSkinToneRedHair
];

export const allManRedHairGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F9B0}\uDDB0", "Man: Red Hair", ...allManRedHair);

export const manCurlyHair = new Emoji("\u{1F468}\uDC68\u200D\u{1F9B1}\uDDB1", "Man: Curly Hair");
export const manLightSkinToneCurlyHair = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F9B1}\uDDB1", "Man: Light Skin Tone: Curly Hair");
export const manMediumLightSkinToneCurlyHair = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F9B1}\uDDB1", "Man: Medium-Light Skin Tone: Curly Hair");
export const manMediumSkinToneCurlyHair = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F9B1}\uDDB1", "Man: Medium Skin Tone: Curly Hair");
export const manMediumDarkSkinToneCurlyHair = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F9B1}\uDDB1", "Man: Medium-Dark Skin Tone: Curly Hair");
export const manDarkSkinToneCurlyHair = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F9B1}\uDDB1", "Man: Dark Skin Tone: Curly Hair");
export const allManCurlyHair = [
    manCurlyHair,
    manLightSkinToneCurlyHair,
    manMediumLightSkinToneCurlyHair,
    manMediumSkinToneCurlyHair,
    manMediumDarkSkinToneCurlyHair,
    manDarkSkinToneCurlyHair
];

export const allManCurlyHairGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F9B1}\uDDB1", "Man: Curly Hair", ...allManCurlyHair);

export const manWhiteHair = new Emoji("\u{1F468}\uDC68\u200D\u{1F9B3}\uDDB3", "Man: White Hair");
export const manLightSkinToneWhiteHair = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F9B3}\uDDB3", "Man: Light Skin Tone: White Hair");
export const manMediumLightSkinToneWhiteHair = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F9B3}\uDDB3", "Man: Medium-Light Skin Tone: White Hair");
export const manMediumSkinToneWhiteHair = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F9B3}\uDDB3", "Man: Medium Skin Tone: White Hair");
export const manMediumDarkSkinToneWhiteHair = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F9B3}\uDDB3", "Man: Medium-Dark Skin Tone: White Hair");
export const manDarkSkinToneWhiteHair = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F9B3}\uDDB3", "Man: Dark Skin Tone: White Hair");
export const allManWhiteHair = [
    manWhiteHair,
    manLightSkinToneWhiteHair,
    manMediumLightSkinToneWhiteHair,
    manMediumSkinToneWhiteHair,
    manMediumDarkSkinToneWhiteHair,
    manDarkSkinToneWhiteHair
];

export const allManWhiteHairGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F9B3}\uDDB3", "Man: White Hair", ...allManWhiteHair);

export const manBald = new Emoji("\u{1F468}\uDC68\u200D\u{1F9B2}\uDDB2", "Man: Bald");
export const manLightSkinToneBald = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F9B2}\uDDB2", "Man: Light Skin Tone: Bald");
export const manMediumLightSkinToneBald = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F9B2}\uDDB2", "Man: Medium-Light Skin Tone: Bald");
export const manMediumSkinToneBald = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F9B2}\uDDB2", "Man: Medium Skin Tone: Bald");
export const manMediumDarkSkinToneBald = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F9B2}\uDDB2", "Man: Medium-Dark Skin Tone: Bald");
export const manDarkSkinToneBald = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F9B2}\uDDB2", "Man: Dark Skin Tone: Bald");
export const allManBald = [
    manBald,
    manLightSkinToneBald,
    manMediumLightSkinToneBald,
    manMediumSkinToneBald,
    manMediumDarkSkinToneBald,
    manDarkSkinToneBald
];

export const allManBaldGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F9B2}\uDDB2", "Man: Bald", ...allManBald);

export const allAllManGroup = [
    allManGroup,
    allManRedHairGroup,
    allManCurlyHairGroup,
    allManWhiteHairGroup,
    allManBaldGroup,
    allBlondPersonMaleGroup,
    allBeardedManGroup,
    manInSuitLevitating,
    allManWithChineseCapGroup,
    allWearingTurbanMaleGroup,
    allManInTuxedoGroup
];

export const allAllManGroupGroup = new EmojiGroup("\u{1F468}\uDC68", "Man", ...allAllManGroup);

export const pregnantWoman = new Emoji("\u{1F930}\uDD30", "Pregnant Woman");
export const pregnantWomanLightSkinTone = new Emoji("\u{1F930}\uDD30\u{1F3FB}\uDFFB", "Pregnant Woman: Light Skin Tone");
export const pregnantWomanMediumLightSkinTone = new Emoji("\u{1F930}\uDD30\u{1F3FC}\uDFFC", "Pregnant Woman: Medium-Light Skin Tone");
export const pregnantWomanMediumSkinTone = new Emoji("\u{1F930}\uDD30\u{1F3FD}\uDFFD", "Pregnant Woman: Medium Skin Tone");
export const pregnantWomanMediumDarkSkinTone = new Emoji("\u{1F930}\uDD30\u{1F3FE}\uDFFE", "Pregnant Woman: Medium-Dark Skin Tone");
export const pregnantWomanDarkSkinTone = new Emoji("\u{1F930}\uDD30\u{1F3FF}\uDFFF", "Pregnant Woman: Dark Skin Tone");
export const allPregnantWoman = [
    pregnantWoman,
    pregnantWomanLightSkinTone,
    pregnantWomanMediumLightSkinTone,
    pregnantWomanMediumSkinTone,
    pregnantWomanMediumDarkSkinTone,
    pregnantWomanDarkSkinTone
];

export const allPregnantWomanGroup = new EmojiGroup("\u{1F930}\uDD30", "Pregnant Woman", ...allPregnantWoman);

export const breastFeeding = new Emoji("\u{1F931}\uDD31", "Breast-Feeding");
export const breastFeedingLightSkinTone = new Emoji("\u{1F931}\uDD31\u{1F3FB}\uDFFB", "Breast-Feeding: Light Skin Tone");
export const breastFeedingMediumLightSkinTone = new Emoji("\u{1F931}\uDD31\u{1F3FC}\uDFFC", "Breast-Feeding: Medium-Light Skin Tone");
export const breastFeedingMediumSkinTone = new Emoji("\u{1F931}\uDD31\u{1F3FD}\uDFFD", "Breast-Feeding: Medium Skin Tone");
export const breastFeedingMediumDarkSkinTone = new Emoji("\u{1F931}\uDD31\u{1F3FE}\uDFFE", "Breast-Feeding: Medium-Dark Skin Tone");
export const breastFeedingDarkSkinTone = new Emoji("\u{1F931}\uDD31\u{1F3FF}\uDFFF", "Breast-Feeding: Dark Skin Tone");
export const allBreastFeeding = [
    breastFeeding,
    breastFeedingLightSkinTone,
    breastFeedingMediumLightSkinTone,
    breastFeedingMediumSkinTone,
    breastFeedingMediumDarkSkinTone,
    breastFeedingDarkSkinTone
];

export const allBreastFeedingGroup = new EmojiGroup("\u{1F931}\uDD31", "Breast-Feeding", ...allBreastFeeding);

export const womanWithHeadscarf = new Emoji("\u{1F9D5}\uDDD5", "Woman With Headscarf");
export const womanWithHeadscarfLightSkinTone = new Emoji("\u{1F9D5}\uDDD5\u{1F3FB}\uDFFB", "Woman With Headscarf: Light Skin Tone");
export const womanWithHeadscarfMediumLightSkinTone = new Emoji("\u{1F9D5}\uDDD5\u{1F3FC}\uDFFC", "Woman With Headscarf: Medium-Light Skin Tone");
export const womanWithHeadscarfMediumSkinTone = new Emoji("\u{1F9D5}\uDDD5\u{1F3FD}\uDFFD", "Woman With Headscarf: Medium Skin Tone");
export const womanWithHeadscarfMediumDarkSkinTone = new Emoji("\u{1F9D5}\uDDD5\u{1F3FE}\uDFFE", "Woman With Headscarf: Medium-Dark Skin Tone");
export const womanWithHeadscarfDarkSkinTone = new Emoji("\u{1F9D5}\uDDD5\u{1F3FF}\uDFFF", "Woman With Headscarf: Dark Skin Tone");
export const allWomanWithHeadscarf = [
    womanWithHeadscarf,
    womanWithHeadscarfLightSkinTone,
    womanWithHeadscarfMediumLightSkinTone,
    womanWithHeadscarfMediumSkinTone,
    womanWithHeadscarfMediumDarkSkinTone,
    womanWithHeadscarfDarkSkinTone
];

export const allWomanWithHeadscarfGroup = new EmojiGroup("\u{1F9D5}\uDDD5", "Woman With Headscarf", ...allWomanWithHeadscarf);

export const brideWithVeil = new Emoji("\u{1F470}\uDC70", "Bride With Veil");
export const brideWithVeilLightSkinTone = new Emoji("\u{1F470}\uDC70\u{1F3FB}\uDFFB", "Bride With Veil: Light Skin Tone");
export const brideWithVeilMediumLightSkinTone = new Emoji("\u{1F470}\uDC70\u{1F3FC}\uDFFC", "Bride With Veil: Medium-Light Skin Tone");
export const brideWithVeilMediumSkinTone = new Emoji("\u{1F470}\uDC70\u{1F3FD}\uDFFD", "Bride With Veil: Medium Skin Tone");
export const brideWithVeilMediumDarkSkinTone = new Emoji("\u{1F470}\uDC70\u{1F3FE}\uDFFE", "Bride With Veil: Medium-Dark Skin Tone");
export const brideWithVeilDarkSkinTone = new Emoji("\u{1F470}\uDC70\u{1F3FF}\uDFFF", "Bride With Veil: Dark Skin Tone");
export const allBrideWithVeil = [
    brideWithVeil,
    brideWithVeilLightSkinTone,
    brideWithVeilMediumLightSkinTone,
    brideWithVeilMediumSkinTone,
    brideWithVeilMediumDarkSkinTone,
    brideWithVeilDarkSkinTone
];

export const allBrideWithVeilGroup = new EmojiGroup("\u{1F470}\uDC70", "Bride With Veil", ...allBrideWithVeil);

export const woman = new Emoji("\u{1F469}\uDC69", "Woman");
export const womanLightSkinTone = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB", "Woman: Light Skin Tone");
export const womanMediumLightSkinTone = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC", "Woman: Medium-Light Skin Tone");
export const womanMediumSkinTone = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD", "Woman: Medium Skin Tone");
export const womanMediumDarkSkinTone = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE", "Woman: Medium-Dark Skin Tone");
export const womanDarkSkinTone = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF", "Woman: Dark Skin Tone");
export const allWoman = [
    woman,
    womanLightSkinTone,
    womanMediumLightSkinTone,
    womanMediumSkinTone,
    womanMediumDarkSkinTone,
    womanDarkSkinTone
];

export const allWomanGroup = new EmojiGroup("\u{1F469}\uDC69", "Woman", ...allWoman);

export const womanRedHair = new Emoji("\u{1F469}\uDC69\u200D\u{1F9B0}\uDDB0", "Woman: Red Hair");
export const womanLightSkinToneRedHair = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F9B0}\uDDB0", "Woman: Light Skin Tone: Red Hair");
export const womanMediumLightSkinToneRedHair = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F9B0}\uDDB0", "Woman: Medium-Light Skin Tone: Red Hair");
export const womanMediumSkinToneRedHair = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F9B0}\uDDB0", "Woman: Medium Skin Tone: Red Hair");
export const womanMediumDarkSkinToneRedHair = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F9B0}\uDDB0", "Woman: Medium-Dark Skin Tone: Red Hair");
export const womanDarkSkinToneRedHair = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F9B0}\uDDB0", "Woman: Dark Skin Tone: Red Hair");
export const allWomanRedHair = [
    womanRedHair,
    womanLightSkinToneRedHair,
    womanMediumLightSkinToneRedHair,
    womanMediumSkinToneRedHair,
    womanMediumDarkSkinToneRedHair,
    womanDarkSkinToneRedHair
];

export const allWomanRedHairGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F9B0}\uDDB0", "Woman: Red Hair", ...allWomanRedHair);

export const womanCurlyHair = new Emoji("\u{1F469}\uDC69\u200D\u{1F9B1}\uDDB1", "Woman: Curly Hair");
export const womanLightSkinToneCurlyHair = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F9B1}\uDDB1", "Woman: Light Skin Tone: Curly Hair");
export const womanMediumLightSkinToneCurlyHair = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F9B1}\uDDB1", "Woman: Medium-Light Skin Tone: Curly Hair");
export const womanMediumSkinToneCurlyHair = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F9B1}\uDDB1", "Woman: Medium Skin Tone: Curly Hair");
export const womanMediumDarkSkinToneCurlyHair = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F9B1}\uDDB1", "Woman: Medium-Dark Skin Tone: Curly Hair");
export const womanDarkSkinToneCurlyHair = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F9B1}\uDDB1", "Woman: Dark Skin Tone: Curly Hair");
export const allWomanCurlyHair = [
    womanCurlyHair,
    womanLightSkinToneCurlyHair,
    womanMediumLightSkinToneCurlyHair,
    womanMediumSkinToneCurlyHair,
    womanMediumDarkSkinToneCurlyHair,
    womanDarkSkinToneCurlyHair
];

export const allWomanCurlyHairGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F9B1}\uDDB1", "Woman: Curly Hair", ...allWomanCurlyHair);

export const womanWhiteHair = new Emoji("\u{1F469}\uDC69\u200D\u{1F9B3}\uDDB3", "Woman: White Hair");
export const womanLightSkinToneWhiteHair = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F9B3}\uDDB3", "Woman: Light Skin Tone: White Hair");
export const womanMediumLightSkinToneWhiteHair = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F9B3}\uDDB3", "Woman: Medium-Light Skin Tone: White Hair");
export const womanMediumSkinToneWhiteHair = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F9B3}\uDDB3", "Woman: Medium Skin Tone: White Hair");
export const womanMediumDarkSkinToneWhiteHair = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F9B3}\uDDB3", "Woman: Medium-Dark Skin Tone: White Hair");
export const womanDarkSkinToneWhiteHair = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F9B3}\uDDB3", "Woman: Dark Skin Tone: White Hair");
export const allWomanWhiteHair = [
    womanWhiteHair,
    womanLightSkinToneWhiteHair,
    womanMediumLightSkinToneWhiteHair,
    womanMediumSkinToneWhiteHair,
    womanMediumDarkSkinToneWhiteHair,
    womanDarkSkinToneWhiteHair
];

export const allWomanWhiteHairGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F9B3}\uDDB3", "Woman: White Hair", ...allWomanWhiteHair);

export const womanBald = new Emoji("\u{1F469}\uDC69\u200D\u{1F9B2}\uDDB2", "Woman: Bald");
export const womanLightSkinToneBald = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F9B2}\uDDB2", "Woman: Light Skin Tone: Bald");
export const womanMediumLightSkinToneBald = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F9B2}\uDDB2", "Woman: Medium-Light Skin Tone: Bald");
export const womanMediumSkinToneBald = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F9B2}\uDDB2", "Woman: Medium Skin Tone: Bald");
export const womanMediumDarkSkinToneBald = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F9B2}\uDDB2", "Woman: Medium-Dark Skin Tone: Bald");
export const womanDarkSkinToneBald = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F9B2}\uDDB2", "Woman: Dark Skin Tone: Bald");
export const allWomanBald = [
    womanBald,
    womanLightSkinToneBald,
    womanMediumLightSkinToneBald,
    womanMediumSkinToneBald,
    womanMediumDarkSkinToneBald,
    womanDarkSkinToneBald
];

export const allWomanBaldGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F9B2}\uDDB2", "Woman: Bald", ...allWomanBald);

export const allAllWomanGroup = [
    allWomanGroup,
    allWomanRedHairGroup,
    allWomanCurlyHairGroup,
    allWomanWhiteHairGroup,
    allWomanBaldGroup,
    allBlondPersonFemaleGroup,
    allPregnantWomanGroup,
    allBreastFeedingGroup,
    allWomanWithHeadscarfGroup,
    allWearingTurbanFemaleGroup,
    allBrideWithVeilGroup
];

export const allAllWomanGroupGroup = new EmojiGroup("\u{1F469}\uDC69", "Woman", ...allAllWomanGroup);

export const allAllPersonGroup = [
    allPersonGroup,
    allAllManGroupGroup,
    allAllWomanGroupGroup
];

export const allAllPersonGroupGroup = new EmojiGroup("\u{1F9D1}\uDDD1", "Adult", ...allAllPersonGroup);

export const olderPerson = new Emoji("\u{1F9D3}\uDDD3", "Older Person");
export const olderPersonLightSkinTone = new Emoji("\u{1F9D3}\uDDD3\u{1F3FB}\uDFFB", "Older Person: Light Skin Tone");
export const olderPersonMediumLightSkinTone = new Emoji("\u{1F9D3}\uDDD3\u{1F3FC}\uDFFC", "Older Person: Medium-Light Skin Tone");
export const olderPersonMediumSkinTone = new Emoji("\u{1F9D3}\uDDD3\u{1F3FD}\uDFFD", "Older Person: Medium Skin Tone");
export const olderPersonMediumDarkSkinTone = new Emoji("\u{1F9D3}\uDDD3\u{1F3FE}\uDFFE", "Older Person: Medium-Dark Skin Tone");
export const olderPersonDarkSkinTone = new Emoji("\u{1F9D3}\uDDD3\u{1F3FF}\uDFFF", "Older Person: Dark Skin Tone");
export const allOlderPerson = [
    olderPerson,
    olderPersonLightSkinTone,
    olderPersonMediumLightSkinTone,
    olderPersonMediumSkinTone,
    olderPersonMediumDarkSkinTone,
    olderPersonDarkSkinTone
];

export const allOlderPersonGroup = new EmojiGroup("\u{1F9D3}\uDDD3", "Older Person", ...allOlderPerson);

export const oldMan = new Emoji("\u{1F474}\uDC74", "Old Man");
export const oldManLightSkinTone = new Emoji("\u{1F474}\uDC74\u{1F3FB}\uDFFB", "Old Man: Light Skin Tone");
export const oldManMediumLightSkinTone = new Emoji("\u{1F474}\uDC74\u{1F3FC}\uDFFC", "Old Man: Medium-Light Skin Tone");
export const oldManMediumSkinTone = new Emoji("\u{1F474}\uDC74\u{1F3FD}\uDFFD", "Old Man: Medium Skin Tone");
export const oldManMediumDarkSkinTone = new Emoji("\u{1F474}\uDC74\u{1F3FE}\uDFFE", "Old Man: Medium-Dark Skin Tone");
export const oldManDarkSkinTone = new Emoji("\u{1F474}\uDC74\u{1F3FF}\uDFFF", "Old Man: Dark Skin Tone");
export const allOldMan = [
    oldMan,
    oldManLightSkinTone,
    oldManMediumLightSkinTone,
    oldManMediumSkinTone,
    oldManMediumDarkSkinTone,
    oldManDarkSkinTone
];

export const allOldManGroup = new EmojiGroup("\u{1F474}\uDC74", "Old Man", ...allOldMan);

export const oldWoman = new Emoji("\u{1F475}\uDC75", "Old Woman");
export const oldWomanLightSkinTone = new Emoji("\u{1F475}\uDC75\u{1F3FB}\uDFFB", "Old Woman: Light Skin Tone");
export const oldWomanMediumLightSkinTone = new Emoji("\u{1F475}\uDC75\u{1F3FC}\uDFFC", "Old Woman: Medium-Light Skin Tone");
export const oldWomanMediumSkinTone = new Emoji("\u{1F475}\uDC75\u{1F3FD}\uDFFD", "Old Woman: Medium Skin Tone");
export const oldWomanMediumDarkSkinTone = new Emoji("\u{1F475}\uDC75\u{1F3FE}\uDFFE", "Old Woman: Medium-Dark Skin Tone");
export const oldWomanDarkSkinTone = new Emoji("\u{1F475}\uDC75\u{1F3FF}\uDFFF", "Old Woman: Dark Skin Tone");
export const allOldWoman = [
    oldWoman,
    oldWomanLightSkinTone,
    oldWomanMediumLightSkinTone,
    oldWomanMediumSkinTone,
    oldWomanMediumDarkSkinTone,
    oldWomanDarkSkinTone
];

export const allOldWomanGroup = new EmojiGroup("\u{1F475}\uDC75", "Old Woman", ...allOldWoman);

export const allAllOlderPersonGroup = [
    allOlderPersonGroup,
    allOldManGroup,
    allOldWomanGroup
];

export const allAllOlderPersonGroupGroup = new EmojiGroup("\u{1F9D3}\uDDD3", "Older Person", ...allAllOlderPersonGroup);

export const medical = new Emoji("\u2695\uFE0F", "Medical");
export const manHealthCare = new Emoji("\u{1F468}\uDC68\u200D\u2695\uFE0F", "Man: Health Care");
export const manLightSkinToneHealthCare = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u2695\uFE0F", "Man: Light Skin Tone: Health Care");
export const manMediumLightSkinToneHealthCare = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u2695\uFE0F", "Man: Medium-Light Skin Tone: Health Care");
export const manMediumSkinToneHealthCare = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u2695\uFE0F", "Man: Medium Skin Tone: Health Care");
export const manMediumDarkSkinToneHealthCare = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u2695\uFE0F", "Man: Medium-Dark Skin Tone: Health Care");
export const manDarkSkinToneHealthCare = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u2695\uFE0F", "Man: Dark Skin Tone: Health Care");
export const allManHealthCare = [
    manHealthCare,
    manLightSkinToneHealthCare,
    manMediumLightSkinToneHealthCare,
    manMediumSkinToneHealthCare,
    manMediumDarkSkinToneHealthCare,
    manDarkSkinToneHealthCare
];

export const allManHealthCareGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u2695\uFE0F", "Man: Health Care", ...allManHealthCare);

export const womanHealthCare = new Emoji("\u{1F469}\uDC69\u200D\u2695\uFE0F", "Woman: Health Care");
export const womanLightSkinToneHealthCare = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u2695\uFE0F", "Woman: Light Skin Tone: Health Care");
export const womanMediumLightSkinToneHealthCare = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u2695\uFE0F", "Woman: Medium-Light Skin Tone: Health Care");
export const womanMediumSkinToneHealthCare = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u2695\uFE0F", "Woman: Medium Skin Tone: Health Care");
export const womanMediumDarkSkinToneHealthCare = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u2695\uFE0F", "Woman: Medium-Dark Skin Tone: Health Care");
export const womanDarkSkinToneHealthCare = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u2695\uFE0F", "Woman: Dark Skin Tone: Health Care");
export const allWomanHealthCare = [
    womanHealthCare,
    womanLightSkinToneHealthCare,
    womanMediumLightSkinToneHealthCare,
    womanMediumSkinToneHealthCare,
    womanMediumDarkSkinToneHealthCare,
    womanDarkSkinToneHealthCare
];

export const allWomanHealthCareGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u2695\uFE0F", "Woman: Health Care", ...allWomanHealthCare);

export const allMedical = [
    medical,
    allManHealthCareGroup,
    allWomanHealthCareGroup
];

export const allMedicalGroup = new EmojiGroup("\u2695\uFE0F", "Medical", ...allMedical);

export const graduationCap = new Emoji("\u{1F393}\uDF93", "Graduation Cap");
export const manStudent = new Emoji("\u{1F468}\uDC68\u200D\u{1F393}\uDF93", "Man: Student");
export const manLightSkinToneStudent = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F393}\uDF93", "Man: Light Skin Tone: Student");
export const manMediumLightSkinToneStudent = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F393}\uDF93", "Man: Medium-Light Skin Tone: Student");
export const manMediumSkinToneStudent = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F393}\uDF93", "Man: Medium Skin Tone: Student");
export const manMediumDarkSkinToneStudent = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F393}\uDF93", "Man: Medium-Dark Skin Tone: Student");
export const manDarkSkinToneStudent = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F393}\uDF93", "Man: Dark Skin Tone: Student");
export const allManStudent = [
    manStudent,
    manLightSkinToneStudent,
    manMediumLightSkinToneStudent,
    manMediumSkinToneStudent,
    manMediumDarkSkinToneStudent,
    manDarkSkinToneStudent
];

export const allManStudentGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F393}\uDF93", "Man: Student", ...allManStudent);

export const womanStudent = new Emoji("\u{1F469}\uDC69\u200D\u{1F393}\uDF93", "Woman: Student");
export const womanLightSkinToneStudent = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F393}\uDF93", "Woman: Light Skin Tone: Student");
export const womanMediumLightSkinToneStudent = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F393}\uDF93", "Woman: Medium-Light Skin Tone: Student");
export const womanMediumSkinToneStudent = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F393}\uDF93", "Woman: Medium Skin Tone: Student");
export const womanMediumDarkSkinToneStudent = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F393}\uDF93", "Woman: Medium-Dark Skin Tone: Student");
export const womanDarkSkinToneStudent = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F393}\uDF93", "Woman: Dark Skin Tone: Student");
export const allWomanStudent = [
    womanStudent,
    womanLightSkinToneStudent,
    womanMediumLightSkinToneStudent,
    womanMediumSkinToneStudent,
    womanMediumDarkSkinToneStudent,
    womanDarkSkinToneStudent
];

export const allWomanStudentGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F393}\uDF93", "Woman: Student", ...allWomanStudent);

export const allGraduationCap = [
    graduationCap,
    allManStudentGroup,
    allWomanStudentGroup
];

export const allGraduationCapGroup = new EmojiGroup("\u{1F393}\uDF93", "Graduation Cap", ...allGraduationCap);

export const school = new Emoji("\u{1F3EB}\uDFEB", "School");
export const manTeacher = new Emoji("\u{1F468}\uDC68\u200D\u{1F3EB}\uDFEB", "Man: Teacher");
export const manLightSkinToneTeacher = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F3EB}\uDFEB", "Man: Light Skin Tone: Teacher");
export const manMediumLightSkinToneTeacher = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F3EB}\uDFEB", "Man: Medium-Light Skin Tone: Teacher");
export const manMediumSkinToneTeacher = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F3EB}\uDFEB", "Man: Medium Skin Tone: Teacher");
export const manMediumDarkSkinToneTeacher = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F3EB}\uDFEB", "Man: Medium-Dark Skin Tone: Teacher");
export const manDarkSkinToneTeacher = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F3EB}\uDFEB", "Man: Dark Skin Tone: Teacher");
export const allManTeacher = [
    manTeacher,
    manLightSkinToneTeacher,
    manMediumLightSkinToneTeacher,
    manMediumSkinToneTeacher,
    manMediumDarkSkinToneTeacher,
    manDarkSkinToneTeacher
];

export const allManTeacherGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F3EB}\uDFEB", "Man: Teacher", ...allManTeacher);

export const womanTeacher = new Emoji("\u{1F469}\uDC69\u200D\u{1F3EB}\uDFEB", "Woman: Teacher");
export const womanLightSkinToneTeacher = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F3EB}\uDFEB", "Woman: Light Skin Tone: Teacher");
export const womanMediumLightSkinToneTeacher = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F3EB}\uDFEB", "Woman: Medium-Light Skin Tone: Teacher");
export const womanMediumSkinToneTeacher = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F3EB}\uDFEB", "Woman: Medium Skin Tone: Teacher");
export const womanMediumDarkSkinToneTeacher = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F3EB}\uDFEB", "Woman: Medium-Dark Skin Tone: Teacher");
export const womanDarkSkinToneTeacher = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F3EB}\uDFEB", "Woman: Dark Skin Tone: Teacher");
export const allWomanTeacher = [
    womanTeacher,
    womanLightSkinToneTeacher,
    womanMediumLightSkinToneTeacher,
    womanMediumSkinToneTeacher,
    womanMediumDarkSkinToneTeacher,
    womanDarkSkinToneTeacher
];

export const allWomanTeacherGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F3EB}\uDFEB", "Woman: Teacher", ...allWomanTeacher);

export const allSchool = [
    school,
    allManTeacherGroup,
    allWomanTeacherGroup
];

export const allSchoolGroup = new EmojiGroup("\u{1F3EB}\uDFEB", "School", ...allSchool);

export const balanceScale = new Emoji("\u2696\uFE0F", "Balance Scale");
export const manJudge = new Emoji("\u{1F468}\uDC68\u200D\u2696\uFE0F", "Man: Judge");
export const manLightSkinToneJudge = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u2696\uFE0F", "Man: Light Skin Tone: Judge");
export const manMediumLightSkinToneJudge = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u2696\uFE0F", "Man: Medium-Light Skin Tone: Judge");
export const manMediumSkinToneJudge = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u2696\uFE0F", "Man: Medium Skin Tone: Judge");
export const manMediumDarkSkinToneJudge = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u2696\uFE0F", "Man: Medium-Dark Skin Tone: Judge");
export const manDarkSkinToneJudge = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u2696\uFE0F", "Man: Dark Skin Tone: Judge");
export const allManJudge = [
    manJudge,
    manLightSkinToneJudge,
    manMediumLightSkinToneJudge,
    manMediumSkinToneJudge,
    manMediumDarkSkinToneJudge,
    manDarkSkinToneJudge
];

export const allManJudgeGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u2696\uFE0F", "Man: Judge", ...allManJudge);

export const womanJudge = new Emoji("\u{1F469}\uDC69\u200D\u2696\uFE0F", "Woman: Judge");
export const womanLightSkinToneJudge = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u2696\uFE0F", "Woman: Light Skin Tone: Judge");
export const womanMediumLightSkinToneJudge = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u2696\uFE0F", "Woman: Medium-Light Skin Tone: Judge");
export const womanMediumSkinToneJudge = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u2696\uFE0F", "Woman: Medium Skin Tone: Judge");
export const womanMediumDarkSkinToneJudge = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u2696\uFE0F", "Woman: Medium-Dark Skin Tone: Judge");
export const womanDarkSkinToneJudge = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u2696\uFE0F", "Woman: Dark Skin Tone: Judge");
export const allWomanJudge = [
    womanJudge,
    womanLightSkinToneJudge,
    womanMediumLightSkinToneJudge,
    womanMediumSkinToneJudge,
    womanMediumDarkSkinToneJudge,
    womanDarkSkinToneJudge
];

export const allWomanJudgeGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u2696\uFE0F", "Woman: Judge", ...allWomanJudge);

export const allBalanceScale = [
    balanceScale,
    allManJudgeGroup,
    allWomanJudgeGroup
];

export const allBalanceScaleGroup = new EmojiGroup("\u2696\uFE0F", "Balance Scale", ...allBalanceScale);

export const sheafOfRice = new Emoji("\u{1F33E}\uDF3E", "Sheaf of Rice");
export const manFarmer = new Emoji("\u{1F468}\uDC68\u200D\u{1F33E}\uDF3E", "Man: Farmer");
export const manLightSkinToneFarmer = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F33E}\uDF3E", "Man: Light Skin Tone: Farmer");
export const manMediumLightSkinToneFarmer = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F33E}\uDF3E", "Man: Medium-Light Skin Tone: Farmer");
export const manMediumSkinToneFarmer = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F33E}\uDF3E", "Man: Medium Skin Tone: Farmer");
export const manMediumDarkSkinToneFarmer = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F33E}\uDF3E", "Man: Medium-Dark Skin Tone: Farmer");
export const manDarkSkinToneFarmer = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F33E}\uDF3E", "Man: Dark Skin Tone: Farmer");
export const allManFarmer = [
    manFarmer,
    manLightSkinToneFarmer,
    manMediumLightSkinToneFarmer,
    manMediumSkinToneFarmer,
    manMediumDarkSkinToneFarmer,
    manDarkSkinToneFarmer
];

export const allManFarmerGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F33E}\uDF3E", "Man: Farmer", ...allManFarmer);

export const womanFarmer = new Emoji("\u{1F469}\uDC69\u200D\u{1F33E}\uDF3E", "Woman: Farmer");
export const womanLightSkinToneFarmer = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F33E}\uDF3E", "Woman: Light Skin Tone: Farmer");
export const womanMediumLightSkinToneFarmer = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F33E}\uDF3E", "Woman: Medium-Light Skin Tone: Farmer");
export const womanMediumSkinToneFarmer = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F33E}\uDF3E", "Woman: Medium Skin Tone: Farmer");
export const womanMediumDarkSkinToneFarmer = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F33E}\uDF3E", "Woman: Medium-Dark Skin Tone: Farmer");
export const womanDarkSkinToneFarmer = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F33E}\uDF3E", "Woman: Dark Skin Tone: Farmer");
export const allWomanFarmer = [
    womanFarmer,
    womanLightSkinToneFarmer,
    womanMediumLightSkinToneFarmer,
    womanMediumSkinToneFarmer,
    womanMediumDarkSkinToneFarmer,
    womanDarkSkinToneFarmer
];

export const allWomanFarmerGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F33E}\uDF3E", "Woman: Farmer", ...allWomanFarmer);

export const allSheafOfRice = [
    sheafOfRice,
    allManFarmerGroup,
    allWomanFarmerGroup
];

export const allSheafOfRiceGroup = new EmojiGroup("\u{1F33E}\uDF3E", "Sheaf of Rice", ...allSheafOfRice);

export const cooking = new Emoji("\u{1F373}\uDF73", "Cooking");
export const manCook = new Emoji("\u{1F468}\uDC68\u200D\u{1F373}\uDF73", "Man: Cook");
export const manLightSkinToneCook = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F373}\uDF73", "Man: Light Skin Tone: Cook");
export const manMediumLightSkinToneCook = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F373}\uDF73", "Man: Medium-Light Skin Tone: Cook");
export const manMediumSkinToneCook = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F373}\uDF73", "Man: Medium Skin Tone: Cook");
export const manMediumDarkSkinToneCook = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F373}\uDF73", "Man: Medium-Dark Skin Tone: Cook");
export const manDarkSkinToneCook = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F373}\uDF73", "Man: Dark Skin Tone: Cook");
export const allManCook = [
    manCook,
    manLightSkinToneCook,
    manMediumLightSkinToneCook,
    manMediumSkinToneCook,
    manMediumDarkSkinToneCook,
    manDarkSkinToneCook
];

export const allManCookGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F373}\uDF73", "Man: Cook", ...allManCook);

export const womanCook = new Emoji("\u{1F469}\uDC69\u200D\u{1F373}\uDF73", "Woman: Cook");
export const womanLightSkinToneCook = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F373}\uDF73", "Woman: Light Skin Tone: Cook");
export const womanMediumLightSkinToneCook = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F373}\uDF73", "Woman: Medium-Light Skin Tone: Cook");
export const womanMediumSkinToneCook = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F373}\uDF73", "Woman: Medium Skin Tone: Cook");
export const womanMediumDarkSkinToneCook = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F373}\uDF73", "Woman: Medium-Dark Skin Tone: Cook");
export const womanDarkSkinToneCook = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F373}\uDF73", "Woman: Dark Skin Tone: Cook");
export const allWomanCook = [
    womanCook,
    womanLightSkinToneCook,
    womanMediumLightSkinToneCook,
    womanMediumSkinToneCook,
    womanMediumDarkSkinToneCook,
    womanDarkSkinToneCook
];

export const allWomanCookGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F373}\uDF73", "Woman: Cook", ...allWomanCook);

export const allCooking = [
    cooking,
    allManCookGroup,
    allWomanCookGroup
];

export const allCookingGroup = new EmojiGroup("\u{1F373}\uDF73", "Cooking", ...allCooking);

export const wrench = new Emoji("\u{1F527}\uDD27", "Wrench");
export const manMechanic = new Emoji("\u{1F468}\uDC68\u200D\u{1F527}\uDD27", "Man: Mechanic");
export const manLightSkinToneMechanic = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F527}\uDD27", "Man: Light Skin Tone: Mechanic");
export const manMediumLightSkinToneMechanic = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F527}\uDD27", "Man: Medium-Light Skin Tone: Mechanic");
export const manMediumSkinToneMechanic = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F527}\uDD27", "Man: Medium Skin Tone: Mechanic");
export const manMediumDarkSkinToneMechanic = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F527}\uDD27", "Man: Medium-Dark Skin Tone: Mechanic");
export const manDarkSkinToneMechanic = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F527}\uDD27", "Man: Dark Skin Tone: Mechanic");
export const allManMechanic = [
    manMechanic,
    manLightSkinToneMechanic,
    manMediumLightSkinToneMechanic,
    manMediumSkinToneMechanic,
    manMediumDarkSkinToneMechanic,
    manDarkSkinToneMechanic
];

export const allManMechanicGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F527}\uDD27", "Man: Mechanic", ...allManMechanic);

export const womanMechanic = new Emoji("\u{1F469}\uDC69\u200D\u{1F527}\uDD27", "Woman: Mechanic");
export const womanLightSkinToneMechanic = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F527}\uDD27", "Woman: Light Skin Tone: Mechanic");
export const womanMediumLightSkinToneMechanic = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F527}\uDD27", "Woman: Medium-Light Skin Tone: Mechanic");
export const womanMediumSkinToneMechanic = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F527}\uDD27", "Woman: Medium Skin Tone: Mechanic");
export const womanMediumDarkSkinToneMechanic = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F527}\uDD27", "Woman: Medium-Dark Skin Tone: Mechanic");
export const womanDarkSkinToneMechanic = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F527}\uDD27", "Woman: Dark Skin Tone: Mechanic");
export const allWomanMechanic = [
    womanMechanic,
    womanLightSkinToneMechanic,
    womanMediumLightSkinToneMechanic,
    womanMediumSkinToneMechanic,
    womanMediumDarkSkinToneMechanic,
    womanDarkSkinToneMechanic
];

export const allWomanMechanicGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F527}\uDD27", "Woman: Mechanic", ...allWomanMechanic);

export const allWrench = [
    wrench,
    allManMechanicGroup,
    allWomanMechanicGroup
];

export const allWrenchGroup = new EmojiGroup("\u{1F527}\uDD27", "Wrench", ...allWrench);

export const factory = new Emoji("\u{1F3ED}\uDFED", "Factory");
export const manFactoryWorker = new Emoji("\u{1F468}\uDC68\u200D\u{1F3ED}\uDFED", "Man: Factory Worker");
export const manLightSkinToneFactoryWorker = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F3ED}\uDFED", "Man: Light Skin Tone: Factory Worker");
export const manMediumLightSkinToneFactoryWorker = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F3ED}\uDFED", "Man: Medium-Light Skin Tone: Factory Worker");
export const manMediumSkinToneFactoryWorker = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F3ED}\uDFED", "Man: Medium Skin Tone: Factory Worker");
export const manMediumDarkSkinToneFactoryWorker = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F3ED}\uDFED", "Man: Medium-Dark Skin Tone: Factory Worker");
export const manDarkSkinToneFactoryWorker = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F3ED}\uDFED", "Man: Dark Skin Tone: Factory Worker");
export const allManFactoryWorker = [
    manFactoryWorker,
    manLightSkinToneFactoryWorker,
    manMediumLightSkinToneFactoryWorker,
    manMediumSkinToneFactoryWorker,
    manMediumDarkSkinToneFactoryWorker,
    manDarkSkinToneFactoryWorker
];

export const allManFactoryWorkerGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F3ED}\uDFED", "Man: Factory Worker", ...allManFactoryWorker);

export const womanFactoryWorker = new Emoji("\u{1F469}\uDC69\u200D\u{1F3ED}\uDFED", "Woman: Factory Worker");
export const womanLightSkinToneFactoryWorker = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F3ED}\uDFED", "Woman: Light Skin Tone: Factory Worker");
export const womanMediumLightSkinToneFactoryWorker = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F3ED}\uDFED", "Woman: Medium-Light Skin Tone: Factory Worker");
export const womanMediumSkinToneFactoryWorker = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F3ED}\uDFED", "Woman: Medium Skin Tone: Factory Worker");
export const womanMediumDarkSkinToneFactoryWorker = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F3ED}\uDFED", "Woman: Medium-Dark Skin Tone: Factory Worker");
export const womanDarkSkinToneFactoryWorker = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F3ED}\uDFED", "Woman: Dark Skin Tone: Factory Worker");
export const allWomanFactoryWorker = [
    womanFactoryWorker,
    womanLightSkinToneFactoryWorker,
    womanMediumLightSkinToneFactoryWorker,
    womanMediumSkinToneFactoryWorker,
    womanMediumDarkSkinToneFactoryWorker,
    womanDarkSkinToneFactoryWorker
];

export const allWomanFactoryWorkerGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F3ED}\uDFED", "Woman: Factory Worker", ...allWomanFactoryWorker);

export const allFactory = [
    factory,
    allManFactoryWorkerGroup,
    allWomanFactoryWorkerGroup
];

export const allFactoryGroup = new EmojiGroup("\u{1F3ED}\uDFED", "Factory", ...allFactory);

export const briefcase = new Emoji("\u{1F4BC}\uDCBC", "Briefcase");
export const manOfficeWorker = new Emoji("\u{1F468}\uDC68\u200D\u{1F4BC}\uDCBC", "Man: Office Worker");
export const manLightSkinToneOfficeWorker = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F4BC}\uDCBC", "Man: Light Skin Tone: Office Worker");
export const manMediumLightSkinToneOfficeWorker = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F4BC}\uDCBC", "Man: Medium-Light Skin Tone: Office Worker");
export const manMediumSkinToneOfficeWorker = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F4BC}\uDCBC", "Man: Medium Skin Tone: Office Worker");
export const manMediumDarkSkinToneOfficeWorker = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F4BC}\uDCBC", "Man: Medium-Dark Skin Tone: Office Worker");
export const manDarkSkinToneOfficeWorker = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F4BC}\uDCBC", "Man: Dark Skin Tone: Office Worker");
export const allManOfficeWorker = [
    manOfficeWorker,
    manLightSkinToneOfficeWorker,
    manMediumLightSkinToneOfficeWorker,
    manMediumSkinToneOfficeWorker,
    manMediumDarkSkinToneOfficeWorker,
    manDarkSkinToneOfficeWorker
];

export const allManOfficeWorkerGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F4BC}\uDCBC", "Man: Office Worker", ...allManOfficeWorker);

export const womanOfficeWorker = new Emoji("\u{1F469}\uDC69\u200D\u{1F4BC}\uDCBC", "Woman: Office Worker");
export const womanLightSkinToneOfficeWorker = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F4BC}\uDCBC", "Woman: Light Skin Tone: Office Worker");
export const womanMediumLightSkinToneOfficeWorker = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F4BC}\uDCBC", "Woman: Medium-Light Skin Tone: Office Worker");
export const womanMediumSkinToneOfficeWorker = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F4BC}\uDCBC", "Woman: Medium Skin Tone: Office Worker");
export const womanMediumDarkSkinToneOfficeWorker = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F4BC}\uDCBC", "Woman: Medium-Dark Skin Tone: Office Worker");
export const womanDarkSkinToneOfficeWorker = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F4BC}\uDCBC", "Woman: Dark Skin Tone: Office Worker");
export const allWomanOfficeWorker = [
    womanOfficeWorker,
    womanLightSkinToneOfficeWorker,
    womanMediumLightSkinToneOfficeWorker,
    womanMediumSkinToneOfficeWorker,
    womanMediumDarkSkinToneOfficeWorker,
    womanDarkSkinToneOfficeWorker
];

export const allWomanOfficeWorkerGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F4BC}\uDCBC", "Woman: Office Worker", ...allWomanOfficeWorker);

export const allBriefcase = [
    briefcase,
    allManOfficeWorkerGroup,
    allWomanOfficeWorkerGroup
];

export const allBriefcaseGroup = new EmojiGroup("\u{1F4BC}\uDCBC", "Briefcase", ...allBriefcase);

export const fireEngine = new Emoji("\u{1F692}\uDE92", "Fire Engine");
export const manFireFighter = new Emoji("\u{1F468}\uDC68\u200D\u{1F692}\uDE92", "Man: Fire Fighter");
export const manLightSkinToneFireFighter = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F692}\uDE92", "Man: Light Skin Tone: Fire Fighter");
export const manMediumLightSkinToneFireFighter = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F692}\uDE92", "Man: Medium-Light Skin Tone: Fire Fighter");
export const manMediumSkinToneFireFighter = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F692}\uDE92", "Man: Medium Skin Tone: Fire Fighter");
export const manMediumDarkSkinToneFireFighter = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F692}\uDE92", "Man: Medium-Dark Skin Tone: Fire Fighter");
export const manDarkSkinToneFireFighter = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F692}\uDE92", "Man: Dark Skin Tone: Fire Fighter");
export const allManFireFighter = [
    manFireFighter,
    manLightSkinToneFireFighter,
    manMediumLightSkinToneFireFighter,
    manMediumSkinToneFireFighter,
    manMediumDarkSkinToneFireFighter,
    manDarkSkinToneFireFighter
];

export const allManFireFighterGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F692}\uDE92", "Man: Fire Fighter", ...allManFireFighter);

export const womanFireFighter = new Emoji("\u{1F469}\uDC69\u200D\u{1F692}\uDE92", "Woman: Fire Fighter");
export const womanLightSkinToneFireFighter = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F692}\uDE92", "Woman: Light Skin Tone: Fire Fighter");
export const womanMediumLightSkinToneFireFighter = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F692}\uDE92", "Woman: Medium-Light Skin Tone: Fire Fighter");
export const womanMediumSkinToneFireFighter = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F692}\uDE92", "Woman: Medium Skin Tone: Fire Fighter");
export const womanMediumDarkSkinToneFireFighter = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F692}\uDE92", "Woman: Medium-Dark Skin Tone: Fire Fighter");
export const womanDarkSkinToneFireFighter = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F692}\uDE92", "Woman: Dark Skin Tone: Fire Fighter");
export const allWomanFireFighter = [
    womanFireFighter,
    womanLightSkinToneFireFighter,
    womanMediumLightSkinToneFireFighter,
    womanMediumSkinToneFireFighter,
    womanMediumDarkSkinToneFireFighter,
    womanDarkSkinToneFireFighter
];

export const allWomanFireFighterGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F692}\uDE92", "Woman: Fire Fighter", ...allWomanFireFighter);

export const allFireEngine = [
    fireEngine,
    allManFireFighterGroup,
    allWomanFireFighterGroup
];

export const allFireEngineGroup = new EmojiGroup("\u{1F692}\uDE92", "Fire Engine", ...allFireEngine);

export const rocket = new Emoji("\u{1F680}\uDE80", "Rocket");
export const manAstronaut = new Emoji("\u{1F468}\uDC68\u200D\u{1F680}\uDE80", "Man: Astronaut");
export const manLightSkinToneAstronaut = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F680}\uDE80", "Man: Light Skin Tone: Astronaut");
export const manMediumLightSkinToneAstronaut = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F680}\uDE80", "Man: Medium-Light Skin Tone: Astronaut");
export const manMediumSkinToneAstronaut = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F680}\uDE80", "Man: Medium Skin Tone: Astronaut");
export const manMediumDarkSkinToneAstronaut = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F680}\uDE80", "Man: Medium-Dark Skin Tone: Astronaut");
export const manDarkSkinToneAstronaut = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F680}\uDE80", "Man: Dark Skin Tone: Astronaut");
export const allManAstronaut = [
    manAstronaut,
    manLightSkinToneAstronaut,
    manMediumLightSkinToneAstronaut,
    manMediumSkinToneAstronaut,
    manMediumDarkSkinToneAstronaut,
    manDarkSkinToneAstronaut
];

export const allManAstronautGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F680}\uDE80", "Man: Astronaut", ...allManAstronaut);

export const womanAstronaut = new Emoji("\u{1F469}\uDC69\u200D\u{1F680}\uDE80", "Woman: Astronaut");
export const womanLightSkinToneAstronaut = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F680}\uDE80", "Woman: Light Skin Tone: Astronaut");
export const womanMediumLightSkinToneAstronaut = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F680}\uDE80", "Woman: Medium-Light Skin Tone: Astronaut");
export const womanMediumSkinToneAstronaut = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F680}\uDE80", "Woman: Medium Skin Tone: Astronaut");
export const womanMediumDarkSkinToneAstronaut = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F680}\uDE80", "Woman: Medium-Dark Skin Tone: Astronaut");
export const womanDarkSkinToneAstronaut = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F680}\uDE80", "Woman: Dark Skin Tone: Astronaut");
export const allWomanAstronaut = [
    womanAstronaut,
    womanLightSkinToneAstronaut,
    womanMediumLightSkinToneAstronaut,
    womanMediumSkinToneAstronaut,
    womanMediumDarkSkinToneAstronaut,
    womanDarkSkinToneAstronaut
];

export const allWomanAstronautGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F680}\uDE80", "Woman: Astronaut", ...allWomanAstronaut);

export const allRocket = [
    rocket,
    allManAstronautGroup,
    allWomanAstronautGroup
];

export const allRocketGroup = new EmojiGroup("\u{1F680}\uDE80", "Rocket", ...allRocket);

export const airplane = new Emoji("\u2708\uFE0F", "Airplane");
export const manPilot = new Emoji("\u{1F468}\uDC68\u200D\u2708\uFE0F", "Man: Pilot");
export const manLightSkinTonePilot = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u2708\uFE0F", "Man: Light Skin Tone: Pilot");
export const manMediumLightSkinTonePilot = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u2708\uFE0F", "Man: Medium-Light Skin Tone: Pilot");
export const manMediumSkinTonePilot = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u2708\uFE0F", "Man: Medium Skin Tone: Pilot");
export const manMediumDarkSkinTonePilot = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u2708\uFE0F", "Man: Medium-Dark Skin Tone: Pilot");
export const manDarkSkinTonePilot = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u2708\uFE0F", "Man: Dark Skin Tone: Pilot");
export const allManPilot = [
    manPilot,
    manLightSkinTonePilot,
    manMediumLightSkinTonePilot,
    manMediumSkinTonePilot,
    manMediumDarkSkinTonePilot,
    manDarkSkinTonePilot
];

export const allManPilotGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u2708\uFE0F", "Man: Pilot", ...allManPilot);

export const womanPilot = new Emoji("\u{1F469}\uDC69\u200D\u2708\uFE0F", "Woman: Pilot");
export const womanLightSkinTonePilot = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u2708\uFE0F", "Woman: Light Skin Tone: Pilot");
export const womanMediumLightSkinTonePilot = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u2708\uFE0F", "Woman: Medium-Light Skin Tone: Pilot");
export const womanMediumSkinTonePilot = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u2708\uFE0F", "Woman: Medium Skin Tone: Pilot");
export const womanMediumDarkSkinTonePilot = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u2708\uFE0F", "Woman: Medium-Dark Skin Tone: Pilot");
export const womanDarkSkinTonePilot = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u2708\uFE0F", "Woman: Dark Skin Tone: Pilot");
export const allWomanPilot = [
    womanPilot,
    womanLightSkinTonePilot,
    womanMediumLightSkinTonePilot,
    womanMediumSkinTonePilot,
    womanMediumDarkSkinTonePilot,
    womanDarkSkinTonePilot
];

export const allWomanPilotGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u2708\uFE0F", "Woman: Pilot", ...allWomanPilot);

export const allAirplane = [
    airplane,
    allManPilotGroup,
    allWomanPilotGroup
];

export const allAirplaneGroup = new EmojiGroup("\u2708\uFE0F", "Airplane", ...allAirplane);

export const artistPalette = new Emoji("\u{1F3A8}\uDFA8", "Artist Palette");
export const manArtist = new Emoji("\u{1F468}\uDC68\u200D\u{1F3A8}\uDFA8", "Man: Artist");
export const manLightSkinToneArtist = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F3A8}\uDFA8", "Man: Light Skin Tone: Artist");
export const manMediumLightSkinToneArtist = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F3A8}\uDFA8", "Man: Medium-Light Skin Tone: Artist");
export const manMediumSkinToneArtist = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F3A8}\uDFA8", "Man: Medium Skin Tone: Artist");
export const manMediumDarkSkinToneArtist = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F3A8}\uDFA8", "Man: Medium-Dark Skin Tone: Artist");
export const manDarkSkinToneArtist = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F3A8}\uDFA8", "Man: Dark Skin Tone: Artist");
export const allManArtist = [
    manArtist,
    manLightSkinToneArtist,
    manMediumLightSkinToneArtist,
    manMediumSkinToneArtist,
    manMediumDarkSkinToneArtist,
    manDarkSkinToneArtist
];

export const allManArtistGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F3A8}\uDFA8", "Man: Artist", ...allManArtist);

export const womanArtist = new Emoji("\u{1F469}\uDC69\u200D\u{1F3A8}\uDFA8", "Woman: Artist");
export const womanLightSkinToneArtist = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F3A8}\uDFA8", "Woman: Light Skin Tone: Artist");
export const womanMediumLightSkinToneArtist = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F3A8}\uDFA8", "Woman: Medium-Light Skin Tone: Artist");
export const womanMediumSkinToneArtist = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F3A8}\uDFA8", "Woman: Medium Skin Tone: Artist");
export const womanMediumDarkSkinToneArtist = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F3A8}\uDFA8", "Woman: Medium-Dark Skin Tone: Artist");
export const womanDarkSkinToneArtist = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F3A8}\uDFA8", "Woman: Dark Skin Tone: Artist");
export const allWomanArtist = [
    womanArtist,
    womanLightSkinToneArtist,
    womanMediumLightSkinToneArtist,
    womanMediumSkinToneArtist,
    womanMediumDarkSkinToneArtist,
    womanDarkSkinToneArtist
];

export const allWomanArtistGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F3A8}\uDFA8", "Woman: Artist", ...allWomanArtist);

export const allArtistPalette = [
    artistPalette,
    allManArtistGroup,
    allWomanArtistGroup
];

export const allArtistPaletteGroup = new EmojiGroup("\u{1F3A8}\uDFA8", "Artist Palette", ...allArtistPalette);

export const microphone = new Emoji("\u{1F3A4}\uDFA4", "Microphone");
export const manSinger = new Emoji("\u{1F468}\uDC68\u200D\u{1F3A4}\uDFA4", "Man: Singer");
export const manLightSkinToneSinger = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F3A4}\uDFA4", "Man: Light Skin Tone: Singer");
export const manMediumLightSkinToneSinger = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F3A4}\uDFA4", "Man: Medium-Light Skin Tone: Singer");
export const manMediumSkinToneSinger = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F3A4}\uDFA4", "Man: Medium Skin Tone: Singer");
export const manMediumDarkSkinToneSinger = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F3A4}\uDFA4", "Man: Medium-Dark Skin Tone: Singer");
export const manDarkSkinToneSinger = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F3A4}\uDFA4", "Man: Dark Skin Tone: Singer");
export const allManSinger = [
    manSinger,
    manLightSkinToneSinger,
    manMediumLightSkinToneSinger,
    manMediumSkinToneSinger,
    manMediumDarkSkinToneSinger,
    manDarkSkinToneSinger
];

export const allManSingerGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F3A4}\uDFA4", "Man: Singer", ...allManSinger);

export const womanSinger = new Emoji("\u{1F469}\uDC69\u200D\u{1F3A4}\uDFA4", "Woman: Singer");
export const womanLightSkinToneSinger = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F3A4}\uDFA4", "Woman: Light Skin Tone: Singer");
export const womanMediumLightSkinToneSinger = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F3A4}\uDFA4", "Woman: Medium-Light Skin Tone: Singer");
export const womanMediumSkinToneSinger = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F3A4}\uDFA4", "Woman: Medium Skin Tone: Singer");
export const womanMediumDarkSkinToneSinger = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F3A4}\uDFA4", "Woman: Medium-Dark Skin Tone: Singer");
export const womanDarkSkinToneSinger = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F3A4}\uDFA4", "Woman: Dark Skin Tone: Singer");
export const allWomanSinger = [
    womanSinger,
    womanLightSkinToneSinger,
    womanMediumLightSkinToneSinger,
    womanMediumSkinToneSinger,
    womanMediumDarkSkinToneSinger,
    womanDarkSkinToneSinger
];

export const allWomanSingerGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F3A4}\uDFA4", "Woman: Singer", ...allWomanSinger);

export const allMicrophone = [
    microphone,
    allManSingerGroup,
    allWomanSingerGroup
];

export const allMicrophoneGroup = new EmojiGroup("\u{1F3A4}\uDFA4", "Microphone", ...allMicrophone);

export const laptop = new Emoji("\u{1F4BB}\uDCBB", "Laptop");
export const manTechnologist = new Emoji("\u{1F468}\uDC68\u200D\u{1F4BB}\uDCBB", "Man: Technologist");
export const manLightSkinToneTechnologist = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F4BB}\uDCBB", "Man: Light Skin Tone: Technologist");
export const manMediumLightSkinToneTechnologist = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F4BB}\uDCBB", "Man: Medium-Light Skin Tone: Technologist");
export const manMediumSkinToneTechnologist = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F4BB}\uDCBB", "Man: Medium Skin Tone: Technologist");
export const manMediumDarkSkinToneTechnologist = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F4BB}\uDCBB", "Man: Medium-Dark Skin Tone: Technologist");
export const manDarkSkinToneTechnologist = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F4BB}\uDCBB", "Man: Dark Skin Tone: Technologist");
export const allManTechnologist = [
    manTechnologist,
    manLightSkinToneTechnologist,
    manMediumLightSkinToneTechnologist,
    manMediumSkinToneTechnologist,
    manMediumDarkSkinToneTechnologist,
    manDarkSkinToneTechnologist
];

export const allManTechnologistGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F4BB}\uDCBB", "Man: Technologist", ...allManTechnologist);

export const womanTechnologist = new Emoji("\u{1F469}\uDC69\u200D\u{1F4BB}\uDCBB", "Woman: Technologist");
export const womanLightSkinToneTechnologist = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F4BB}\uDCBB", "Woman: Light Skin Tone: Technologist");
export const womanMediumLightSkinToneTechnologist = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F4BB}\uDCBB", "Woman: Medium-Light Skin Tone: Technologist");
export const womanMediumSkinToneTechnologist = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F4BB}\uDCBB", "Woman: Medium Skin Tone: Technologist");
export const womanMediumDarkSkinToneTechnologist = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F4BB}\uDCBB", "Woman: Medium-Dark Skin Tone: Technologist");
export const womanDarkSkinToneTechnologist = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F4BB}\uDCBB", "Woman: Dark Skin Tone: Technologist");
export const allWomanTechnologist = [
    womanTechnologist,
    womanLightSkinToneTechnologist,
    womanMediumLightSkinToneTechnologist,
    womanMediumSkinToneTechnologist,
    womanMediumDarkSkinToneTechnologist,
    womanDarkSkinToneTechnologist
];

export const allWomanTechnologistGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F4BB}\uDCBB", "Woman: Technologist", ...allWomanTechnologist);

export const allLaptop = [
    laptop,
    allManTechnologistGroup,
    allWomanTechnologistGroup
];

export const allLaptopGroup = new EmojiGroup("\u{1F4BB}\uDCBB", "Laptop", ...allLaptop);

export const microscope = new Emoji("\u{1F52C}\uDD2C", "Microscope");
export const manScientist = new Emoji("\u{1F468}\uDC68\u200D\u{1F52C}\uDD2C", "Man: Scientist");
export const manLightSkinToneScientist = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F52C}\uDD2C", "Man: Light Skin Tone: Scientist");
export const manMediumLightSkinToneScientist = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F52C}\uDD2C", "Man: Medium-Light Skin Tone: Scientist");
export const manMediumSkinToneScientist = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F52C}\uDD2C", "Man: Medium Skin Tone: Scientist");
export const manMediumDarkSkinToneScientist = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F52C}\uDD2C", "Man: Medium-Dark Skin Tone: Scientist");
export const manDarkSkinToneScientist = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F52C}\uDD2C", "Man: Dark Skin Tone: Scientist");
export const allManScientist = [
    manScientist,
    manLightSkinToneScientist,
    manMediumLightSkinToneScientist,
    manMediumSkinToneScientist,
    manMediumDarkSkinToneScientist,
    manDarkSkinToneScientist
];

export const allManScientistGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F52C}\uDD2C", "Man: Scientist", ...allManScientist);

export const womanScientist = new Emoji("\u{1F469}\uDC69\u200D\u{1F52C}\uDD2C", "Woman: Scientist");
export const womanLightSkinToneScientist = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F52C}\uDD2C", "Woman: Light Skin Tone: Scientist");
export const womanMediumLightSkinToneScientist = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F52C}\uDD2C", "Woman: Medium-Light Skin Tone: Scientist");
export const womanMediumSkinToneScientist = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F52C}\uDD2C", "Woman: Medium Skin Tone: Scientist");
export const womanMediumDarkSkinToneScientist = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F52C}\uDD2C", "Woman: Medium-Dark Skin Tone: Scientist");
export const womanDarkSkinToneScientist = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F52C}\uDD2C", "Woman: Dark Skin Tone: Scientist");
export const allWomanScientist = [
    womanScientist,
    womanLightSkinToneScientist,
    womanMediumLightSkinToneScientist,
    womanMediumSkinToneScientist,
    womanMediumDarkSkinToneScientist,
    womanDarkSkinToneScientist
];

export const allWomanScientistGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F52C}\uDD2C", "Woman: Scientist", ...allWomanScientist);

export const allMicroscope = [
    microscope,
    allManScientistGroup,
    allWomanScientistGroup
];

export const allMicroscopeGroup = new EmojiGroup("\u{1F52C}\uDD2C", "Microscope", ...allMicroscope);

export const crown = new Emoji("\u{1F451}\uDC51", "Crown");
export const genie = new Emoji("\u{1F9DE}\uDDDE", "Genie");
export const zombie = new Emoji("\u{1F9DF}\uDDDF", "Zombie");
export const safetyVest = new Emoji("\u{1F9BA}\uDDBA", "Safety Vest");
export const probingCane = new Emoji("\u{1F9AF}\uDDAF", "Probing Cane");
export const motorizedWheelchair = new Emoji("\u{1F9BC}\uDDBC", "Motorized Wheelchair");
export const manualWheelchair = new Emoji("\u{1F9BD}\uDDBD", "Manual Wheelchair");
export const fencer = new Emoji("\u{1F93A}\uDD3A", "Fencer");
export const skier = new Emoji("\u26F7\uFE0F", "Skier");
export const princes = new Emoji("\u{1F934}\uDD34", "Princes");
export const princesLightSkinTone = new Emoji("\u{1F934}\uDD34\u{1F3FB}\uDFFB", "Princes: Light Skin Tone");
export const princesMediumLightSkinTone = new Emoji("\u{1F934}\uDD34\u{1F3FC}\uDFFC", "Princes: Medium-Light Skin Tone");
export const princesMediumSkinTone = new Emoji("\u{1F934}\uDD34\u{1F3FD}\uDFFD", "Princes: Medium Skin Tone");
export const princesMediumDarkSkinTone = new Emoji("\u{1F934}\uDD34\u{1F3FE}\uDFFE", "Princes: Medium-Dark Skin Tone");
export const princesDarkSkinTone = new Emoji("\u{1F934}\uDD34\u{1F3FF}\uDFFF", "Princes: Dark Skin Tone");
export const allPrinces = [
    princes,
    princesLightSkinTone,
    princesMediumLightSkinTone,
    princesMediumSkinTone,
    princesMediumDarkSkinTone,
    princesDarkSkinTone
];

export const allPrincesGroup = new EmojiGroup("\u{1F934}\uDD34", "Princes", ...allPrinces);

export const princesses = new Emoji("\u{1F478}\uDC78", "Princesses");
export const princessesLightSkinTone = new Emoji("\u{1F478}\uDC78\u{1F3FB}\uDFFB", "Princesses: Light Skin Tone");
export const princessesMediumLightSkinTone = new Emoji("\u{1F478}\uDC78\u{1F3FC}\uDFFC", "Princesses: Medium-Light Skin Tone");
export const princessesMediumSkinTone = new Emoji("\u{1F478}\uDC78\u{1F3FD}\uDFFD", "Princesses: Medium Skin Tone");
export const princessesMediumDarkSkinTone = new Emoji("\u{1F478}\uDC78\u{1F3FE}\uDFFE", "Princesses: Medium-Dark Skin Tone");
export const princessesDarkSkinTone = new Emoji("\u{1F478}\uDC78\u{1F3FF}\uDFFF", "Princesses: Dark Skin Tone");
export const allPrincesses = [
    princesses,
    princessesLightSkinTone,
    princessesMediumLightSkinTone,
    princessesMediumSkinTone,
    princessesMediumDarkSkinTone,
    princessesDarkSkinTone
];

export const allPrincessesGroup = new EmojiGroup("\u{1F478}\uDC78", "Princesses", ...allPrincesses);

export const allCrown = [
    crown,
    allPrincesGroup,
    allPrincessesGroup
];

export const allCrownGroup = new EmojiGroup("\u{1F451}\uDC51", "Crown", ...allCrown);

export const allAllMedicalGroup = [
    allMedicalGroup,
    allGraduationCapGroup,
    allSchoolGroup,
    allBalanceScaleGroup,
    allSheafOfRiceGroup,
    allCookingGroup,
    allWrenchGroup,
    allFactoryGroup,
    allBriefcaseGroup,
    allMicroscopeGroup,
    allLaptopGroup,
    allMicrophoneGroup,
    allArtistPaletteGroup,
    allAirplaneGroup,
    allRocketGroup,
    allFireEngineGroup,
    allAllSpyGroupGroup,
    allAllGuardGroupGroup,
    allAllConstructionWorkerGroupGroup,
    allCrownGroup
];

export const allAllMedicalGroupGroup = new EmojiGroup("\u0052\u006F\u006C\u0065\u0073", "Depictions of people working", ...allAllMedicalGroup);

export const cherub = new Emoji("\u{1F47C}\uDC7C", "Cherub");
export const cherubLightSkinTone = new Emoji("\u{1F47C}\uDC7C\u{1F3FB}\uDFFB", "Cherub: Light Skin Tone");
export const cherubMediumLightSkinTone = new Emoji("\u{1F47C}\uDC7C\u{1F3FC}\uDFFC", "Cherub: Medium-Light Skin Tone");
export const cherubMediumSkinTone = new Emoji("\u{1F47C}\uDC7C\u{1F3FD}\uDFFD", "Cherub: Medium Skin Tone");
export const cherubMediumDarkSkinTone = new Emoji("\u{1F47C}\uDC7C\u{1F3FE}\uDFFE", "Cherub: Medium-Dark Skin Tone");
export const cherubDarkSkinTone = new Emoji("\u{1F47C}\uDC7C\u{1F3FF}\uDFFF", "Cherub: Dark Skin Tone");
export const allCherub = [
    cherub,
    cherubLightSkinTone,
    cherubMediumLightSkinTone,
    cherubMediumSkinTone,
    cherubMediumDarkSkinTone,
    cherubDarkSkinTone
];

export const allCherubGroup = new EmojiGroup("\u{1F47C}\uDC7C", "Cherub", ...allCherub);

export const santaClaus = new Emoji("\u{1F385}\uDF85", "Santa Claus");
export const santaClausLightSkinTone = new Emoji("\u{1F385}\uDF85\u{1F3FB}\uDFFB", "Santa Claus: Light Skin Tone");
export const santaClausMediumLightSkinTone = new Emoji("\u{1F385}\uDF85\u{1F3FC}\uDFFC", "Santa Claus: Medium-Light Skin Tone");
export const santaClausMediumSkinTone = new Emoji("\u{1F385}\uDF85\u{1F3FD}\uDFFD", "Santa Claus: Medium Skin Tone");
export const santaClausMediumDarkSkinTone = new Emoji("\u{1F385}\uDF85\u{1F3FE}\uDFFE", "Santa Claus: Medium-Dark Skin Tone");
export const santaClausDarkSkinTone = new Emoji("\u{1F385}\uDF85\u{1F3FF}\uDFFF", "Santa Claus: Dark Skin Tone");
export const allSantaClaus = [
    santaClaus,
    santaClausLightSkinTone,
    santaClausMediumLightSkinTone,
    santaClausMediumSkinTone,
    santaClausMediumDarkSkinTone,
    santaClausDarkSkinTone
];

export const allSantaClausGroup = new EmojiGroup("\u{1F385}\uDF85", "Santa Claus", ...allSantaClaus);

export const mrsClaus = new Emoji("\u{1F936}\uDD36", "Mrs. Claus");
export const mrsClausLightSkinTone = new Emoji("\u{1F936}\uDD36\u{1F3FB}\uDFFB", "Mrs. Claus: Light Skin Tone");
export const mrsClausMediumLightSkinTone = new Emoji("\u{1F936}\uDD36\u{1F3FC}\uDFFC", "Mrs. Claus: Medium-Light Skin Tone");
export const mrsClausMediumSkinTone = new Emoji("\u{1F936}\uDD36\u{1F3FD}\uDFFD", "Mrs. Claus: Medium Skin Tone");
export const mrsClausMediumDarkSkinTone = new Emoji("\u{1F936}\uDD36\u{1F3FE}\uDFFE", "Mrs. Claus: Medium-Dark Skin Tone");
export const mrsClausDarkSkinTone = new Emoji("\u{1F936}\uDD36\u{1F3FF}\uDFFF", "Mrs. Claus: Dark Skin Tone");
export const allMrsClaus = [
    mrsClaus,
    mrsClausLightSkinTone,
    mrsClausMediumLightSkinTone,
    mrsClausMediumSkinTone,
    mrsClausMediumDarkSkinTone,
    mrsClausDarkSkinTone
];

export const allMrsClausGroup = new EmojiGroup("\u{1F936}\uDD36", "Mrs. Claus", ...allMrsClaus);

export const genieMale = new Emoji("\u{1F9DE}\uDDDE\u200D\u2642\uFE0F", "Genie: Male");
export const genieFemale = new Emoji("\u{1F9DE}\uDDDE\u200D\u2640\uFE0F", "Genie: Female");
export const allGenie = [
    genie,
    genieMale,
    genieFemale
];

export const allGenieGroup = new EmojiGroup("\u{1F9DE}\uDDDE", "Genie", ...allGenie);

export const zombieMale = new Emoji("\u{1F9DF}\uDDDF\u200D\u2642\uFE0F", "Zombie: Male");
export const zombieFemale = new Emoji("\u{1F9DF}\uDDDF\u200D\u2640\uFE0F", "Zombie: Female");
export const allZombie = [
    zombie,
    zombieMale,
    zombieFemale
];

export const allZombieGroup = new EmojiGroup("\u{1F9DF}\uDDDF", "Zombie", ...allZombie);

export const allAllCherubGroup = [
    allCherubGroup,
    allSantaClausGroup,
    allMrsClausGroup,
    allAllSuperheroGroupGroup,
    allAllSupervillainGroupGroup,
    allAllMageGroupGroup,
    allAllFairyGroupGroup,
    allAllVampireGroupGroup,
    allAllMerpersonGroupGroup,
    allAllElfGroupGroup,
    allGenieGroup,
    allZombieGroup
];

export const allAllCherubGroupGroup = new EmojiGroup("\u0046\u0061\u006E\u0074\u0061\u0073\u0079", "Depictions of fantasy characters", ...allAllCherubGroup);

export const manProbing = new Emoji("\u{1F468}\uDC68\u200D\u{1F9AF}\uDDAF", "Man: Probing");
export const manLightSkinToneProbing = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F9AF}\uDDAF", "Man: Light Skin Tone: Probing");
export const manMediumLightSkinToneProbing = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F9AF}\uDDAF", "Man: Medium-Light Skin Tone: Probing");
export const manMediumSkinToneProbing = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F9AF}\uDDAF", "Man: Medium Skin Tone: Probing");
export const manMediumDarkSkinToneProbing = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F9AF}\uDDAF", "Man: Medium-Dark Skin Tone: Probing");
export const manDarkSkinToneProbing = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F9AF}\uDDAF", "Man: Dark Skin Tone: Probing");
export const allManProbing = [
    manProbing,
    manLightSkinToneProbing,
    manMediumLightSkinToneProbing,
    manMediumSkinToneProbing,
    manMediumDarkSkinToneProbing,
    manDarkSkinToneProbing
];

export const allManProbingGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F9AF}\uDDAF", "Man: Probing", ...allManProbing);

export const womanProbing = new Emoji("\u{1F469}\uDC69\u200D\u{1F9AF}\uDDAF", "Woman: Probing");
export const womanLightSkinToneProbing = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F9AF}\uDDAF", "Woman: Light Skin Tone: Probing");
export const womanMediumLightSkinToneProbing = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F9AF}\uDDAF", "Woman: Medium-Light Skin Tone: Probing");
export const womanMediumSkinToneProbing = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F9AF}\uDDAF", "Woman: Medium Skin Tone: Probing");
export const womanMediumDarkSkinToneProbing = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F9AF}\uDDAF", "Woman: Medium-Dark Skin Tone: Probing");
export const womanDarkSkinToneProbing = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F9AF}\uDDAF", "Woman: Dark Skin Tone: Probing");
export const allWomanProbing = [
    womanProbing,
    womanLightSkinToneProbing,
    womanMediumLightSkinToneProbing,
    womanMediumSkinToneProbing,
    womanMediumDarkSkinToneProbing,
    womanDarkSkinToneProbing
];

export const allWomanProbingGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F9AF}\uDDAF", "Woman: Probing", ...allWomanProbing);

export const allProbingCane = [
    probingCane,
    allManProbingGroup,
    allWomanProbingGroup
];

export const allProbingCaneGroup = new EmojiGroup("\u{1F9AF}\uDDAF", "Probing Cane", ...allProbingCane);

export const manInMotorizedWheelchair = new Emoji("\u{1F468}\uDC68\u200D\u{1F9BC}\uDDBC", "Man: In Motorized Wheelchair");
export const manLightSkinToneInMotorizedWheelchair = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F9BC}\uDDBC", "Man: Light Skin Tone: In Motorized Wheelchair");
export const manMediumLightSkinToneInMotorizedWheelchair = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F9BC}\uDDBC", "Man: Medium-Light Skin Tone: In Motorized Wheelchair");
export const manMediumSkinToneInMotorizedWheelchair = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F9BC}\uDDBC", "Man: Medium Skin Tone: In Motorized Wheelchair");
export const manMediumDarkSkinToneInMotorizedWheelchair = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F9BC}\uDDBC", "Man: Medium-Dark Skin Tone: In Motorized Wheelchair");
export const manDarkSkinToneInMotorizedWheelchair = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F9BC}\uDDBC", "Man: Dark Skin Tone: In Motorized Wheelchair");
export const allManInMotorizedWheelchair = [
    manInMotorizedWheelchair,
    manLightSkinToneInMotorizedWheelchair,
    manMediumLightSkinToneInMotorizedWheelchair,
    manMediumSkinToneInMotorizedWheelchair,
    manMediumDarkSkinToneInMotorizedWheelchair,
    manDarkSkinToneInMotorizedWheelchair
];

export const allManInMotorizedWheelchairGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F9BC}\uDDBC", "Man: In Motorized Wheelchair", ...allManInMotorizedWheelchair);

export const womanInMotorizedWheelchair = new Emoji("\u{1F469}\uDC69\u200D\u{1F9BC}\uDDBC", "Woman: In Motorized Wheelchair");
export const womanLightSkinToneInMotorizedWheelchair = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F9BC}\uDDBC", "Woman: Light Skin Tone: In Motorized Wheelchair");
export const womanMediumLightSkinToneInMotorizedWheelchair = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F9BC}\uDDBC", "Woman: Medium-Light Skin Tone: In Motorized Wheelchair");
export const womanMediumSkinToneInMotorizedWheelchair = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F9BC}\uDDBC", "Woman: Medium Skin Tone: In Motorized Wheelchair");
export const womanMediumDarkSkinToneInMotorizedWheelchair = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F9BC}\uDDBC", "Woman: Medium-Dark Skin Tone: In Motorized Wheelchair");
export const womanDarkSkinToneInMotorizedWheelchair = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F9BC}\uDDBC", "Woman: Dark Skin Tone: In Motorized Wheelchair");
export const allWomanInMotorizedWheelchair = [
    womanInMotorizedWheelchair,
    womanLightSkinToneInMotorizedWheelchair,
    womanMediumLightSkinToneInMotorizedWheelchair,
    womanMediumSkinToneInMotorizedWheelchair,
    womanMediumDarkSkinToneInMotorizedWheelchair,
    womanDarkSkinToneInMotorizedWheelchair
];

export const allWomanInMotorizedWheelchairGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F9BC}\uDDBC", "Woman: In Motorized Wheelchair", ...allWomanInMotorizedWheelchair);

export const allMotorizedWheelchair = [
    motorizedWheelchair,
    allManInMotorizedWheelchairGroup,
    allWomanInMotorizedWheelchairGroup
];

export const allMotorizedWheelchairGroup = new EmojiGroup("\u{1F9BC}\uDDBC", "Motorized Wheelchair", ...allMotorizedWheelchair);

export const manInManualWheelchair = new Emoji("\u{1F468}\uDC68\u200D\u{1F9BD}\uDDBD", "Man: In Manual Wheelchair");
export const manLightSkinToneInManualWheelchair = new Emoji("\u{1F468}\uDC68\u{1F3FB}\uDFFB\u200D\u{1F9BD}\uDDBD", "Man: Light Skin Tone: In Manual Wheelchair");
export const manMediumLightSkinToneInManualWheelchair = new Emoji("\u{1F468}\uDC68\u{1F3FC}\uDFFC\u200D\u{1F9BD}\uDDBD", "Man: Medium-Light Skin Tone: In Manual Wheelchair");
export const manMediumSkinToneInManualWheelchair = new Emoji("\u{1F468}\uDC68\u{1F3FD}\uDFFD\u200D\u{1F9BD}\uDDBD", "Man: Medium Skin Tone: In Manual Wheelchair");
export const manMediumDarkSkinToneInManualWheelchair = new Emoji("\u{1F468}\uDC68\u{1F3FE}\uDFFE\u200D\u{1F9BD}\uDDBD", "Man: Medium-Dark Skin Tone: In Manual Wheelchair");
export const manDarkSkinToneInManualWheelchair = new Emoji("\u{1F468}\uDC68\u{1F3FF}\uDFFF\u200D\u{1F9BD}\uDDBD", "Man: Dark Skin Tone: In Manual Wheelchair");
export const allManInManualWheelchair = [
    manInManualWheelchair,
    manLightSkinToneInManualWheelchair,
    manMediumLightSkinToneInManualWheelchair,
    manMediumSkinToneInManualWheelchair,
    manMediumDarkSkinToneInManualWheelchair,
    manDarkSkinToneInManualWheelchair
];

export const allManInManualWheelchairGroup = new EmojiGroup("\u{1F468}\uDC68\u200D\u{1F9BD}\uDDBD", "Man: In Manual Wheelchair", ...allManInManualWheelchair);

export const womanInManualWheelchair = new Emoji("\u{1F469}\uDC69\u200D\u{1F9BD}\uDDBD", "Woman: In Manual Wheelchair");
export const womanLightSkinToneInManualWheelchair = new Emoji("\u{1F469}\uDC69\u{1F3FB}\uDFFB\u200D\u{1F9BD}\uDDBD", "Woman: Light Skin Tone: In Manual Wheelchair");
export const womanMediumLightSkinToneInManualWheelchair = new Emoji("\u{1F469}\uDC69\u{1F3FC}\uDFFC\u200D\u{1F9BD}\uDDBD", "Woman: Medium-Light Skin Tone: In Manual Wheelchair");
export const womanMediumSkinToneInManualWheelchair = new Emoji("\u{1F469}\uDC69\u{1F3FD}\uDFFD\u200D\u{1F9BD}\uDDBD", "Woman: Medium Skin Tone: In Manual Wheelchair");
export const womanMediumDarkSkinToneInManualWheelchair = new Emoji("\u{1F469}\uDC69\u{1F3FE}\uDFFE\u200D\u{1F9BD}\uDDBD", "Woman: Medium-Dark Skin Tone: In Manual Wheelchair");
export const womanDarkSkinToneInManualWheelchair = new Emoji("\u{1F469}\uDC69\u{1F3FF}\uDFFF\u200D\u{1F9BD}\uDDBD", "Woman: Dark Skin Tone: In Manual Wheelchair");
export const allWomanInManualWheelchair = [
    womanInManualWheelchair,
    womanLightSkinToneInManualWheelchair,
    womanMediumLightSkinToneInManualWheelchair,
    womanMediumSkinToneInManualWheelchair,
    womanMediumDarkSkinToneInManualWheelchair,
    womanDarkSkinToneInManualWheelchair
];

export const allWomanInManualWheelchairGroup = new EmojiGroup("\u{1F469}\uDC69\u200D\u{1F9BD}\uDDBD", "Woman: In Manual Wheelchair", ...allWomanInManualWheelchair);

export const allManualWheelchair = [
    manualWheelchair,
    allManInManualWheelchairGroup,
    allWomanInManualWheelchairGroup
];

export const allManualWheelchairGroup = new EmojiGroup("\u{1F9BD}\uDDBD", "Manual Wheelchair", ...allManualWheelchair);

export const manDancing = new Emoji("\u{1F57A}\uDD7A", "Man Dancing");
export const manDancingLightSkinTone = new Emoji("\u{1F57A}\uDD7A\u{1F3FB}\uDFFB", "Man Dancing: Light Skin Tone");
export const manDancingMediumLightSkinTone = new Emoji("\u{1F57A}\uDD7A\u{1F3FC}\uDFFC", "Man Dancing: Medium-Light Skin Tone");
export const manDancingMediumSkinTone = new Emoji("\u{1F57A}\uDD7A\u{1F3FD}\uDFFD", "Man Dancing: Medium Skin Tone");
export const manDancingMediumDarkSkinTone = new Emoji("\u{1F57A}\uDD7A\u{1F3FE}\uDFFE", "Man Dancing: Medium-Dark Skin Tone");
export const manDancingDarkSkinTone = new Emoji("\u{1F57A}\uDD7A\u{1F3FF}\uDFFF", "Man Dancing: Dark Skin Tone");
export const allManDancing = [
    manDancing,
    manDancingLightSkinTone,
    manDancingMediumLightSkinTone,
    manDancingMediumSkinTone,
    manDancingMediumDarkSkinTone,
    manDancingDarkSkinTone
];

export const allManDancingGroup = new EmojiGroup("\u{1F57A}\uDD7A", "Man Dancing", ...allManDancing);

export const womanDancing = new Emoji("\u{1F483}\uDC83", "Woman Dancing");
export const womanDancingLightSkinTone = new Emoji("\u{1F483}\uDC83\u{1F3FB}\uDFFB", "Woman Dancing: Light Skin Tone");
export const womanDancingMediumLightSkinTone = new Emoji("\u{1F483}\uDC83\u{1F3FC}\uDFFC", "Woman Dancing: Medium-Light Skin Tone");
export const womanDancingMediumSkinTone = new Emoji("\u{1F483}\uDC83\u{1F3FD}\uDFFD", "Woman Dancing: Medium Skin Tone");
export const womanDancingMediumDarkSkinTone = new Emoji("\u{1F483}\uDC83\u{1F3FE}\uDFFE", "Woman Dancing: Medium-Dark Skin Tone");
export const womanDancingDarkSkinTone = new Emoji("\u{1F483}\uDC83\u{1F3FF}\uDFFF", "Woman Dancing: Dark Skin Tone");
export const allWomanDancing = [
    womanDancing,
    womanDancingLightSkinTone,
    womanDancingMediumLightSkinTone,
    womanDancingMediumSkinTone,
    womanDancingMediumDarkSkinTone,
    womanDancingDarkSkinTone
];

export const allWomanDancingGroup = new EmojiGroup("\u{1F483}\uDC83", "Woman Dancing", ...allWomanDancing);

export const allAllManDancingGroup = [
    allManDancingGroup,
    allWomanDancingGroup
];

export const allAllManDancingGroupGroup = new EmojiGroup("\u{1F57A}\uDD7A", "Dancing", ...allAllManDancingGroup);

export const juggler = new Emoji("\u{1F939}\uDD39", "Juggler");
export const jugglerLightSkinTone = new Emoji("\u{1F939}\uDD39\u{1F3FB}\uDFFB", "Juggler: Light Skin Tone");
export const jugglerMediumLightSkinTone = new Emoji("\u{1F939}\uDD39\u{1F3FC}\uDFFC", "Juggler: Medium-Light Skin Tone");
export const jugglerMediumSkinTone = new Emoji("\u{1F939}\uDD39\u{1F3FD}\uDFFD", "Juggler: Medium Skin Tone");
export const jugglerMediumDarkSkinTone = new Emoji("\u{1F939}\uDD39\u{1F3FE}\uDFFE", "Juggler: Medium-Dark Skin Tone");
export const jugglerDarkSkinTone = new Emoji("\u{1F939}\uDD39\u{1F3FF}\uDFFF", "Juggler: Dark Skin Tone");
export const allJuggler = [
    juggler,
    jugglerLightSkinTone,
    jugglerMediumLightSkinTone,
    jugglerMediumSkinTone,
    jugglerMediumDarkSkinTone,
    jugglerDarkSkinTone
];

export const allJugglerGroup = new EmojiGroup("\u{1F939}\uDD39", "Juggler", ...allJuggler);

export const jugglerMale = new Emoji("\u{1F939}\uDD39\u200D\u2642\uFE0F", "Juggler: Male");
export const jugglerLightSkinToneMale = new Emoji("\u{1F939}\uDD39\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Juggler: Light Skin Tone: Male");
export const jugglerMediumLightSkinToneMale = new Emoji("\u{1F939}\uDD39\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Juggler: Medium-Light Skin Tone: Male");
export const jugglerMediumSkinToneMale = new Emoji("\u{1F939}\uDD39\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Juggler: Medium Skin Tone: Male");
export const jugglerMediumDarkSkinToneMale = new Emoji("\u{1F939}\uDD39\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Juggler: Medium-Dark Skin Tone: Male");
export const jugglerDarkSkinToneMale = new Emoji("\u{1F939}\uDD39\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Juggler: Dark Skin Tone: Male");
export const allJugglerMale = [
    jugglerMale,
    jugglerLightSkinToneMale,
    jugglerMediumLightSkinToneMale,
    jugglerMediumSkinToneMale,
    jugglerMediumDarkSkinToneMale,
    jugglerDarkSkinToneMale
];

export const allJugglerMaleGroup = new EmojiGroup("\u{1F939}\uDD39\u200D\u2642\uFE0F", "Juggler: Male", ...allJugglerMale);

export const jugglerFemale = new Emoji("\u{1F939}\uDD39\u200D\u2640\uFE0F", "Juggler: Female");
export const jugglerLightSkinToneFemale = new Emoji("\u{1F939}\uDD39\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Juggler: Light Skin Tone: Female");
export const jugglerMediumLightSkinToneFemale = new Emoji("\u{1F939}\uDD39\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Juggler: Medium-Light Skin Tone: Female");
export const jugglerMediumSkinToneFemale = new Emoji("\u{1F939}\uDD39\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Juggler: Medium Skin Tone: Female");
export const jugglerMediumDarkSkinToneFemale = new Emoji("\u{1F939}\uDD39\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Juggler: Medium-Dark Skin Tone: Female");
export const jugglerDarkSkinToneFemale = new Emoji("\u{1F939}\uDD39\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Juggler: Dark Skin Tone: Female");
export const allJugglerFemale = [
    jugglerFemale,
    jugglerLightSkinToneFemale,
    jugglerMediumLightSkinToneFemale,
    jugglerMediumSkinToneFemale,
    jugglerMediumDarkSkinToneFemale,
    jugglerDarkSkinToneFemale
];

export const allJugglerFemaleGroup = new EmojiGroup("\u{1F939}\uDD39\u200D\u2640\uFE0F", "Juggler: Female", ...allJugglerFemale);

export const allAllJugglerGroup = [
    allJugglerGroup,
    allJugglerMaleGroup,
    allJugglerFemaleGroup
];

export const allAllJugglerGroupGroup = new EmojiGroup("\u{1F939}\uDD39", "Juggler", ...allAllJugglerGroup);

export const climber = new Emoji("\u{1F9D7}\uDDD7", "Climber");
export const climberLightSkinTone = new Emoji("\u{1F9D7}\uDDD7\u{1F3FB}\uDFFB", "Climber: Light Skin Tone");
export const climberMediumLightSkinTone = new Emoji("\u{1F9D7}\uDDD7\u{1F3FC}\uDFFC", "Climber: Medium-Light Skin Tone");
export const climberMediumSkinTone = new Emoji("\u{1F9D7}\uDDD7\u{1F3FD}\uDFFD", "Climber: Medium Skin Tone");
export const climberMediumDarkSkinTone = new Emoji("\u{1F9D7}\uDDD7\u{1F3FE}\uDFFE", "Climber: Medium-Dark Skin Tone");
export const climberDarkSkinTone = new Emoji("\u{1F9D7}\uDDD7\u{1F3FF}\uDFFF", "Climber: Dark Skin Tone");
export const allClimber = [
    climber,
    climberLightSkinTone,
    climberMediumLightSkinTone,
    climberMediumSkinTone,
    climberMediumDarkSkinTone,
    climberDarkSkinTone
];

export const allClimberGroup = new EmojiGroup("\u{1F9D7}\uDDD7", "Climber", ...allClimber);

export const climberMale = new Emoji("\u{1F9D7}\uDDD7\u200D\u2642\uFE0F", "Climber: Male");
export const climberLightSkinToneMale = new Emoji("\u{1F9D7}\uDDD7\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Climber: Light Skin Tone: Male");
export const climberMediumLightSkinToneMale = new Emoji("\u{1F9D7}\uDDD7\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Climber: Medium-Light Skin Tone: Male");
export const climberMediumSkinToneMale = new Emoji("\u{1F9D7}\uDDD7\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Climber: Medium Skin Tone: Male");
export const climberMediumDarkSkinToneMale = new Emoji("\u{1F9D7}\uDDD7\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Climber: Medium-Dark Skin Tone: Male");
export const climberDarkSkinToneMale = new Emoji("\u{1F9D7}\uDDD7\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Climber: Dark Skin Tone: Male");
export const allClimberMale = [
    climberMale,
    climberLightSkinToneMale,
    climberMediumLightSkinToneMale,
    climberMediumSkinToneMale,
    climberMediumDarkSkinToneMale,
    climberDarkSkinToneMale
];

export const allClimberMaleGroup = new EmojiGroup("\u{1F9D7}\uDDD7\u200D\u2642\uFE0F", "Climber: Male", ...allClimberMale);

export const climberFemale = new Emoji("\u{1F9D7}\uDDD7\u200D\u2640\uFE0F", "Climber: Female");
export const climberLightSkinToneFemale = new Emoji("\u{1F9D7}\uDDD7\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Climber: Light Skin Tone: Female");
export const climberMediumLightSkinToneFemale = new Emoji("\u{1F9D7}\uDDD7\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Climber: Medium-Light Skin Tone: Female");
export const climberMediumSkinToneFemale = new Emoji("\u{1F9D7}\uDDD7\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Climber: Medium Skin Tone: Female");
export const climberMediumDarkSkinToneFemale = new Emoji("\u{1F9D7}\uDDD7\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Climber: Medium-Dark Skin Tone: Female");
export const climberDarkSkinToneFemale = new Emoji("\u{1F9D7}\uDDD7\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Climber: Dark Skin Tone: Female");
export const allClimberFemale = [
    climberFemale,
    climberLightSkinToneFemale,
    climberMediumLightSkinToneFemale,
    climberMediumSkinToneFemale,
    climberMediumDarkSkinToneFemale,
    climberDarkSkinToneFemale
];

export const allClimberFemaleGroup = new EmojiGroup("\u{1F9D7}\uDDD7\u200D\u2640\uFE0F", "Climber: Female", ...allClimberFemale);

export const allAllClimberGroup = [
    allClimberGroup,
    allClimberMaleGroup,
    allClimberFemaleGroup
];

export const allAllClimberGroupGroup = new EmojiGroup("\u{1F9D7}\uDDD7", "Climber", ...allAllClimberGroup);

export const jockey = new Emoji("\u{1F3C7}\uDFC7", "Jockey");
export const jockeyLightSkinTone = new Emoji("\u{1F3C7}\uDFC7\u{1F3FB}\uDFFB", "Jockey: Light Skin Tone");
export const jockeyMediumLightSkinTone = new Emoji("\u{1F3C7}\uDFC7\u{1F3FC}\uDFFC", "Jockey: Medium-Light Skin Tone");
export const jockeyMediumSkinTone = new Emoji("\u{1F3C7}\uDFC7\u{1F3FD}\uDFFD", "Jockey: Medium Skin Tone");
export const jockeyMediumDarkSkinTone = new Emoji("\u{1F3C7}\uDFC7\u{1F3FE}\uDFFE", "Jockey: Medium-Dark Skin Tone");
export const jockeyDarkSkinTone = new Emoji("\u{1F3C7}\uDFC7\u{1F3FF}\uDFFF", "Jockey: Dark Skin Tone");
export const allJockey = [
    jockey,
    jockeyLightSkinTone,
    jockeyMediumLightSkinTone,
    jockeyMediumSkinTone,
    jockeyMediumDarkSkinTone,
    jockeyDarkSkinTone
];

export const allJockeyGroup = new EmojiGroup("\u{1F3C7}\uDFC7", "Jockey", ...allJockey);

export const snowboarder = new Emoji("\u{1F3C2}\uDFC2", "Snowboarder");
export const snowboarderLightSkinTone = new Emoji("\u{1F3C2}\uDFC2\u{1F3FB}\uDFFB", "Snowboarder: Light Skin Tone");
export const snowboarderMediumLightSkinTone = new Emoji("\u{1F3C2}\uDFC2\u{1F3FC}\uDFFC", "Snowboarder: Medium-Light Skin Tone");
export const snowboarderMediumSkinTone = new Emoji("\u{1F3C2}\uDFC2\u{1F3FD}\uDFFD", "Snowboarder: Medium Skin Tone");
export const snowboarderMediumDarkSkinTone = new Emoji("\u{1F3C2}\uDFC2\u{1F3FE}\uDFFE", "Snowboarder: Medium-Dark Skin Tone");
export const snowboarderDarkSkinTone = new Emoji("\u{1F3C2}\uDFC2\u{1F3FF}\uDFFF", "Snowboarder: Dark Skin Tone");
export const allSnowboarder = [
    snowboarder,
    snowboarderLightSkinTone,
    snowboarderMediumLightSkinTone,
    snowboarderMediumSkinTone,
    snowboarderMediumDarkSkinTone,
    snowboarderDarkSkinTone
];

export const allSnowboarderGroup = new EmojiGroup("\u{1F3C2}\uDFC2", "Snowboarder", ...allSnowboarder);

export const golfer = new Emoji("\u{1F3CC}\uDFCC\uFE0F", "Golfer");
export const golferLightSkinTone = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FB}\uDFFB", "Golfer: Light Skin Tone");
export const golferMediumLightSkinTone = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FC}\uDFFC", "Golfer: Medium-Light Skin Tone");
export const golferMediumSkinTone = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FD}\uDFFD", "Golfer: Medium Skin Tone");
export const golferMediumDarkSkinTone = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FE}\uDFFE", "Golfer: Medium-Dark Skin Tone");
export const golferDarkSkinTone = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FF}\uDFFF", "Golfer: Dark Skin Tone");
export const allGolfer = [
    golfer,
    golferLightSkinTone,
    golferMediumLightSkinTone,
    golferMediumSkinTone,
    golferMediumDarkSkinTone,
    golferDarkSkinTone
];

export const allGolferGroup = new EmojiGroup("\u{1F3CC}\uDFCC\uFE0F", "Golfer", ...allGolfer);

export const golferMale = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u200D\u2642\uFE0F", "Golfer: Male");
export const golferLightSkinToneMale = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Golfer: Light Skin Tone: Male");
export const golferMediumLightSkinToneMale = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Golfer: Medium-Light Skin Tone: Male");
export const golferMediumSkinToneMale = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Golfer: Medium Skin Tone: Male");
export const golferMediumDarkSkinToneMale = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Golfer: Medium-Dark Skin Tone: Male");
export const golferDarkSkinToneMale = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Golfer: Dark Skin Tone: Male");
export const allGolferMale = [
    golferMale,
    golferLightSkinToneMale,
    golferMediumLightSkinToneMale,
    golferMediumSkinToneMale,
    golferMediumDarkSkinToneMale,
    golferDarkSkinToneMale
];

export const allGolferMaleGroup = new EmojiGroup("\u{1F3CC}\uDFCC\uFE0F\u200D\u2642\uFE0F", "Golfer: Male", ...allGolferMale);

export const golferFemale = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u200D\u2640\uFE0F", "Golfer: Female");
export const golferLightSkinToneFemale = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Golfer: Light Skin Tone: Female");
export const golferMediumLightSkinToneFemale = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Golfer: Medium-Light Skin Tone: Female");
export const golferMediumSkinToneFemale = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Golfer: Medium Skin Tone: Female");
export const golferMediumDarkSkinToneFemale = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Golfer: Medium-Dark Skin Tone: Female");
export const golferDarkSkinToneFemale = new Emoji("\u{1F3CC}\uDFCC\uFE0F\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Golfer: Dark Skin Tone: Female");
export const allGolferFemale = [
    golferFemale,
    golferLightSkinToneFemale,
    golferMediumLightSkinToneFemale,
    golferMediumSkinToneFemale,
    golferMediumDarkSkinToneFemale,
    golferDarkSkinToneFemale
];

export const allGolferFemaleGroup = new EmojiGroup("\u{1F3CC}\uDFCC\uFE0F\u200D\u2640\uFE0F", "Golfer: Female", ...allGolferFemale);

export const allAllGolferGroup = [
    allGolferGroup,
    allGolferMaleGroup,
    allGolferFemaleGroup
];

export const allAllGolferGroupGroup = new EmojiGroup("\u{1F3CC}\uDFCC\uFE0F", "Golfer", ...allAllGolferGroup);

export const surfing = new Emoji("\u{1F3C4}\uDFC4", "Surfing");
export const surfingLightSkinTone = new Emoji("\u{1F3C4}\uDFC4\u{1F3FB}\uDFFB", "Surfing: Light Skin Tone");
export const surfingMediumLightSkinTone = new Emoji("\u{1F3C4}\uDFC4\u{1F3FC}\uDFFC", "Surfing: Medium-Light Skin Tone");
export const surfingMediumSkinTone = new Emoji("\u{1F3C4}\uDFC4\u{1F3FD}\uDFFD", "Surfing: Medium Skin Tone");
export const surfingMediumDarkSkinTone = new Emoji("\u{1F3C4}\uDFC4\u{1F3FE}\uDFFE", "Surfing: Medium-Dark Skin Tone");
export const surfingDarkSkinTone = new Emoji("\u{1F3C4}\uDFC4\u{1F3FF}\uDFFF", "Surfing: Dark Skin Tone");
export const allSurfing = [
    surfing,
    surfingLightSkinTone,
    surfingMediumLightSkinTone,
    surfingMediumSkinTone,
    surfingMediumDarkSkinTone,
    surfingDarkSkinTone
];

export const allSurfingGroup = new EmojiGroup("\u{1F3C4}\uDFC4", "Surfing", ...allSurfing);

export const surfingMale = new Emoji("\u{1F3C4}\uDFC4\u200D\u2642\uFE0F", "Surfing: Male");
export const surfingLightSkinToneMale = new Emoji("\u{1F3C4}\uDFC4\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Surfing: Light Skin Tone: Male");
export const surfingMediumLightSkinToneMale = new Emoji("\u{1F3C4}\uDFC4\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Surfing: Medium-Light Skin Tone: Male");
export const surfingMediumSkinToneMale = new Emoji("\u{1F3C4}\uDFC4\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Surfing: Medium Skin Tone: Male");
export const surfingMediumDarkSkinToneMale = new Emoji("\u{1F3C4}\uDFC4\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Surfing: Medium-Dark Skin Tone: Male");
export const surfingDarkSkinToneMale = new Emoji("\u{1F3C4}\uDFC4\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Surfing: Dark Skin Tone: Male");
export const allSurfingMale = [
    surfingMale,
    surfingLightSkinToneMale,
    surfingMediumLightSkinToneMale,
    surfingMediumSkinToneMale,
    surfingMediumDarkSkinToneMale,
    surfingDarkSkinToneMale
];

export const allSurfingMaleGroup = new EmojiGroup("\u{1F3C4}\uDFC4\u200D\u2642\uFE0F", "Surfing: Male", ...allSurfingMale);

export const surfingFemale = new Emoji("\u{1F3C4}\uDFC4\u200D\u2640\uFE0F", "Surfing: Female");
export const surfingLightSkinToneFemale = new Emoji("\u{1F3C4}\uDFC4\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Surfing: Light Skin Tone: Female");
export const surfingMediumLightSkinToneFemale = new Emoji("\u{1F3C4}\uDFC4\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Surfing: Medium-Light Skin Tone: Female");
export const surfingMediumSkinToneFemale = new Emoji("\u{1F3C4}\uDFC4\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Surfing: Medium Skin Tone: Female");
export const surfingMediumDarkSkinToneFemale = new Emoji("\u{1F3C4}\uDFC4\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Surfing: Medium-Dark Skin Tone: Female");
export const surfingDarkSkinToneFemale = new Emoji("\u{1F3C4}\uDFC4\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Surfing: Dark Skin Tone: Female");
export const allSurfingFemale = [
    surfingFemale,
    surfingLightSkinToneFemale,
    surfingMediumLightSkinToneFemale,
    surfingMediumSkinToneFemale,
    surfingMediumDarkSkinToneFemale,
    surfingDarkSkinToneFemale
];

export const allSurfingFemaleGroup = new EmojiGroup("\u{1F3C4}\uDFC4\u200D\u2640\uFE0F", "Surfing: Female", ...allSurfingFemale);

export const allAllSurfingGroup = [
    allSurfingGroup,
    allSurfingMaleGroup,
    allSurfingFemaleGroup
];

export const allAllSurfingGroupGroup = new EmojiGroup("\u{1F3C4}\uDFC4", "Surfing", ...allAllSurfingGroup);

export const rowingBoat = new Emoji("\u{1F6A3}\uDEA3", "Rowing Boat");
export const rowingBoatLightSkinTone = new Emoji("\u{1F6A3}\uDEA3\u{1F3FB}\uDFFB", "Rowing Boat: Light Skin Tone");
export const rowingBoatMediumLightSkinTone = new Emoji("\u{1F6A3}\uDEA3\u{1F3FC}\uDFFC", "Rowing Boat: Medium-Light Skin Tone");
export const rowingBoatMediumSkinTone = new Emoji("\u{1F6A3}\uDEA3\u{1F3FD}\uDFFD", "Rowing Boat: Medium Skin Tone");
export const rowingBoatMediumDarkSkinTone = new Emoji("\u{1F6A3}\uDEA3\u{1F3FE}\uDFFE", "Rowing Boat: Medium-Dark Skin Tone");
export const rowingBoatDarkSkinTone = new Emoji("\u{1F6A3}\uDEA3\u{1F3FF}\uDFFF", "Rowing Boat: Dark Skin Tone");
export const allRowingBoat = [
    rowingBoat,
    rowingBoatLightSkinTone,
    rowingBoatMediumLightSkinTone,
    rowingBoatMediumSkinTone,
    rowingBoatMediumDarkSkinTone,
    rowingBoatDarkSkinTone
];

export const allRowingBoatGroup = new EmojiGroup("\u{1F6A3}\uDEA3", "Rowing Boat", ...allRowingBoat);

export const rowingBoatMale = new Emoji("\u{1F6A3}\uDEA3\u200D\u2642\uFE0F", "Rowing Boat: Male");
export const rowingBoatLightSkinToneMale = new Emoji("\u{1F6A3}\uDEA3\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Rowing Boat: Light Skin Tone: Male");
export const rowingBoatMediumLightSkinToneMale = new Emoji("\u{1F6A3}\uDEA3\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Rowing Boat: Medium-Light Skin Tone: Male");
export const rowingBoatMediumSkinToneMale = new Emoji("\u{1F6A3}\uDEA3\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Rowing Boat: Medium Skin Tone: Male");
export const rowingBoatMediumDarkSkinToneMale = new Emoji("\u{1F6A3}\uDEA3\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Rowing Boat: Medium-Dark Skin Tone: Male");
export const rowingBoatDarkSkinToneMale = new Emoji("\u{1F6A3}\uDEA3\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Rowing Boat: Dark Skin Tone: Male");
export const allRowingBoatMale = [
    rowingBoatMale,
    rowingBoatLightSkinToneMale,
    rowingBoatMediumLightSkinToneMale,
    rowingBoatMediumSkinToneMale,
    rowingBoatMediumDarkSkinToneMale,
    rowingBoatDarkSkinToneMale
];

export const allRowingBoatMaleGroup = new EmojiGroup("\u{1F6A3}\uDEA3\u200D\u2642\uFE0F", "Rowing Boat: Male", ...allRowingBoatMale);

export const rowingBoatFemale = new Emoji("\u{1F6A3}\uDEA3\u200D\u2640\uFE0F", "Rowing Boat: Female");
export const rowingBoatLightSkinToneFemale = new Emoji("\u{1F6A3}\uDEA3\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Rowing Boat: Light Skin Tone: Female");
export const rowingBoatMediumLightSkinToneFemale = new Emoji("\u{1F6A3}\uDEA3\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Rowing Boat: Medium-Light Skin Tone: Female");
export const rowingBoatMediumSkinToneFemale = new Emoji("\u{1F6A3}\uDEA3\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Rowing Boat: Medium Skin Tone: Female");
export const rowingBoatMediumDarkSkinToneFemale = new Emoji("\u{1F6A3}\uDEA3\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Rowing Boat: Medium-Dark Skin Tone: Female");
export const rowingBoatDarkSkinToneFemale = new Emoji("\u{1F6A3}\uDEA3\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Rowing Boat: Dark Skin Tone: Female");
export const allRowingBoatFemale = [
    rowingBoatFemale,
    rowingBoatLightSkinToneFemale,
    rowingBoatMediumLightSkinToneFemale,
    rowingBoatMediumSkinToneFemale,
    rowingBoatMediumDarkSkinToneFemale,
    rowingBoatDarkSkinToneFemale
];

export const allRowingBoatFemaleGroup = new EmojiGroup("\u{1F6A3}\uDEA3\u200D\u2640\uFE0F", "Rowing Boat: Female", ...allRowingBoatFemale);

export const allAllRowingBoatGroup = [
    allRowingBoatGroup,
    allRowingBoatMaleGroup,
    allRowingBoatFemaleGroup
];

export const allAllRowingBoatGroupGroup = new EmojiGroup("\u{1F6A3}\uDEA3", "Rowing Boat", ...allAllRowingBoatGroup);

export const swimming = new Emoji("\u{1F3CA}\uDFCA", "Swimming");
export const swimmingLightSkinTone = new Emoji("\u{1F3CA}\uDFCA\u{1F3FB}\uDFFB", "Swimming: Light Skin Tone");
export const swimmingMediumLightSkinTone = new Emoji("\u{1F3CA}\uDFCA\u{1F3FC}\uDFFC", "Swimming: Medium-Light Skin Tone");
export const swimmingMediumSkinTone = new Emoji("\u{1F3CA}\uDFCA\u{1F3FD}\uDFFD", "Swimming: Medium Skin Tone");
export const swimmingMediumDarkSkinTone = new Emoji("\u{1F3CA}\uDFCA\u{1F3FE}\uDFFE", "Swimming: Medium-Dark Skin Tone");
export const swimmingDarkSkinTone = new Emoji("\u{1F3CA}\uDFCA\u{1F3FF}\uDFFF", "Swimming: Dark Skin Tone");
export const allSwimming = [
    swimming,
    swimmingLightSkinTone,
    swimmingMediumLightSkinTone,
    swimmingMediumSkinTone,
    swimmingMediumDarkSkinTone,
    swimmingDarkSkinTone
];

export const allSwimmingGroup = new EmojiGroup("\u{1F3CA}\uDFCA", "Swimming", ...allSwimming);

export const swimmingMale = new Emoji("\u{1F3CA}\uDFCA\u200D\u2642\uFE0F", "Swimming: Male");
export const swimmingLightSkinToneMale = new Emoji("\u{1F3CA}\uDFCA\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Swimming: Light Skin Tone: Male");
export const swimmingMediumLightSkinToneMale = new Emoji("\u{1F3CA}\uDFCA\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Swimming: Medium-Light Skin Tone: Male");
export const swimmingMediumSkinToneMale = new Emoji("\u{1F3CA}\uDFCA\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Swimming: Medium Skin Tone: Male");
export const swimmingMediumDarkSkinToneMale = new Emoji("\u{1F3CA}\uDFCA\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Swimming: Medium-Dark Skin Tone: Male");
export const swimmingDarkSkinToneMale = new Emoji("\u{1F3CA}\uDFCA\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Swimming: Dark Skin Tone: Male");
export const allSwimmingMale = [
    swimmingMale,
    swimmingLightSkinToneMale,
    swimmingMediumLightSkinToneMale,
    swimmingMediumSkinToneMale,
    swimmingMediumDarkSkinToneMale,
    swimmingDarkSkinToneMale
];

export const allSwimmingMaleGroup = new EmojiGroup("\u{1F3CA}\uDFCA\u200D\u2642\uFE0F", "Swimming: Male", ...allSwimmingMale);

export const swimmingFemale = new Emoji("\u{1F3CA}\uDFCA\u200D\u2640\uFE0F", "Swimming: Female");
export const swimmingLightSkinToneFemale = new Emoji("\u{1F3CA}\uDFCA\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Swimming: Light Skin Tone: Female");
export const swimmingMediumLightSkinToneFemale = new Emoji("\u{1F3CA}\uDFCA\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Swimming: Medium-Light Skin Tone: Female");
export const swimmingMediumSkinToneFemale = new Emoji("\u{1F3CA}\uDFCA\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Swimming: Medium Skin Tone: Female");
export const swimmingMediumDarkSkinToneFemale = new Emoji("\u{1F3CA}\uDFCA\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Swimming: Medium-Dark Skin Tone: Female");
export const swimmingDarkSkinToneFemale = new Emoji("\u{1F3CA}\uDFCA\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Swimming: Dark Skin Tone: Female");
export const allSwimmingFemale = [
    swimmingFemale,
    swimmingLightSkinToneFemale,
    swimmingMediumLightSkinToneFemale,
    swimmingMediumSkinToneFemale,
    swimmingMediumDarkSkinToneFemale,
    swimmingDarkSkinToneFemale
];

export const allSwimmingFemaleGroup = new EmojiGroup("\u{1F3CA}\uDFCA\u200D\u2640\uFE0F", "Swimming: Female", ...allSwimmingFemale);

export const allAllSwimmingGroup = [
    allSwimmingGroup,
    allSwimmingMaleGroup,
    allSwimmingFemaleGroup
];

export const allAllSwimmingGroupGroup = new EmojiGroup("\u{1F3CA}\uDFCA", "Swimming", ...allAllSwimmingGroup);

export const basketBaller = new Emoji("\u26F9\uFE0F", "Basket Baller");
export const basketBallerLightSkinTone = new Emoji("\u26F9\uFE0F\u{1F3FB}\uDFFB", "Basket Baller: Light Skin Tone");
export const basketBallerMediumLightSkinTone = new Emoji("\u26F9\uFE0F\u{1F3FC}\uDFFC", "Basket Baller: Medium-Light Skin Tone");
export const basketBallerMediumSkinTone = new Emoji("\u26F9\uFE0F\u{1F3FD}\uDFFD", "Basket Baller: Medium Skin Tone");
export const basketBallerMediumDarkSkinTone = new Emoji("\u26F9\uFE0F\u{1F3FE}\uDFFE", "Basket Baller: Medium-Dark Skin Tone");
export const basketBallerDarkSkinTone = new Emoji("\u26F9\uFE0F\u{1F3FF}\uDFFF", "Basket Baller: Dark Skin Tone");
export const allBasketBaller = [
    basketBaller,
    basketBallerLightSkinTone,
    basketBallerMediumLightSkinTone,
    basketBallerMediumSkinTone,
    basketBallerMediumDarkSkinTone,
    basketBallerDarkSkinTone
];

export const allBasketBallerGroup = new EmojiGroup("\u26F9\uFE0F", "Basket Baller", ...allBasketBaller);

export const basketBallerMale = new Emoji("\u26F9\uFE0F\u200D\u2642\uFE0F", "Basket Baller: Male");
export const basketBallerLightSkinToneMale = new Emoji("\u26F9\uFE0F\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Basket Baller: Light Skin Tone: Male");
export const basketBallerMediumLightSkinToneMale = new Emoji("\u26F9\uFE0F\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Basket Baller: Medium-Light Skin Tone: Male");
export const basketBallerMediumSkinToneMale = new Emoji("\u26F9\uFE0F\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Basket Baller: Medium Skin Tone: Male");
export const basketBallerMediumDarkSkinToneMale = new Emoji("\u26F9\uFE0F\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Basket Baller: Medium-Dark Skin Tone: Male");
export const basketBallerDarkSkinToneMale = new Emoji("\u26F9\uFE0F\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Basket Baller: Dark Skin Tone: Male");
export const allBasketBallerMale = [
    basketBallerMale,
    basketBallerLightSkinToneMale,
    basketBallerMediumLightSkinToneMale,
    basketBallerMediumSkinToneMale,
    basketBallerMediumDarkSkinToneMale,
    basketBallerDarkSkinToneMale
];

export const allBasketBallerMaleGroup = new EmojiGroup("\u26F9\uFE0F\u200D\u2642\uFE0F", "Basket Baller: Male", ...allBasketBallerMale);

export const basketBallerFemale = new Emoji("\u26F9\uFE0F\u200D\u2640\uFE0F", "Basket Baller: Female");
export const basketBallerLightSkinToneFemale = new Emoji("\u26F9\uFE0F\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Basket Baller: Light Skin Tone: Female");
export const basketBallerMediumLightSkinToneFemale = new Emoji("\u26F9\uFE0F\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Basket Baller: Medium-Light Skin Tone: Female");
export const basketBallerMediumSkinToneFemale = new Emoji("\u26F9\uFE0F\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Basket Baller: Medium Skin Tone: Female");
export const basketBallerMediumDarkSkinToneFemale = new Emoji("\u26F9\uFE0F\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Basket Baller: Medium-Dark Skin Tone: Female");
export const basketBallerDarkSkinToneFemale = new Emoji("\u26F9\uFE0F\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Basket Baller: Dark Skin Tone: Female");
export const allBasketBallerFemale = [
    basketBallerFemale,
    basketBallerLightSkinToneFemale,
    basketBallerMediumLightSkinToneFemale,
    basketBallerMediumSkinToneFemale,
    basketBallerMediumDarkSkinToneFemale,
    basketBallerDarkSkinToneFemale
];

export const allBasketBallerFemaleGroup = new EmojiGroup("\u26F9\uFE0F\u200D\u2640\uFE0F", "Basket Baller: Female", ...allBasketBallerFemale);

export const allAllBasketBallerGroup = [
    allBasketBallerGroup,
    allBasketBallerMaleGroup,
    allBasketBallerFemaleGroup
];

export const allAllBasketBallerGroupGroup = new EmojiGroup("\u26F9\uFE0F", "Basket Baller", ...allAllBasketBallerGroup);

export const weightLifter = new Emoji("\u{1F3CB}\uDFCB\uFE0F", "Weight Lifter");
export const weightLifterLightSkinTone = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FB}\uDFFB", "Weight Lifter: Light Skin Tone");
export const weightLifterMediumLightSkinTone = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FC}\uDFFC", "Weight Lifter: Medium-Light Skin Tone");
export const weightLifterMediumSkinTone = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FD}\uDFFD", "Weight Lifter: Medium Skin Tone");
export const weightLifterMediumDarkSkinTone = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FE}\uDFFE", "Weight Lifter: Medium-Dark Skin Tone");
export const weightLifterDarkSkinTone = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FF}\uDFFF", "Weight Lifter: Dark Skin Tone");
export const allWeightLifter = [
    weightLifter,
    weightLifterLightSkinTone,
    weightLifterMediumLightSkinTone,
    weightLifterMediumSkinTone,
    weightLifterMediumDarkSkinTone,
    weightLifterDarkSkinTone
];

export const allWeightLifterGroup = new EmojiGroup("\u{1F3CB}\uDFCB\uFE0F", "Weight Lifter", ...allWeightLifter);

export const weightLifterMale = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u200D\u2642\uFE0F", "Weight Lifter: Male");
export const weightLifterLightSkinToneMale = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Weight Lifter: Light Skin Tone: Male");
export const weightLifterMediumLightSkinToneMale = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Weight Lifter: Medium-Light Skin Tone: Male");
export const weightLifterMediumSkinToneMale = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Weight Lifter: Medium Skin Tone: Male");
export const weightLifterMediumDarkSkinToneMale = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Weight Lifter: Medium-Dark Skin Tone: Male");
export const weightLifterDarkSkinToneMale = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Weight Lifter: Dark Skin Tone: Male");
export const allWeightLifterMale = [
    weightLifterMale,
    weightLifterLightSkinToneMale,
    weightLifterMediumLightSkinToneMale,
    weightLifterMediumSkinToneMale,
    weightLifterMediumDarkSkinToneMale,
    weightLifterDarkSkinToneMale
];

export const allWeightLifterMaleGroup = new EmojiGroup("\u{1F3CB}\uDFCB\uFE0F\u200D\u2642\uFE0F", "Weight Lifter: Male", ...allWeightLifterMale);

export const weightLifterFemale = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u200D\u2640\uFE0F", "Weight Lifter: Female");
export const weightLifterLightSkinToneFemale = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Weight Lifter: Light Skin Tone: Female");
export const weightLifterMediumLightSkinToneFemale = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Weight Lifter: Medium-Light Skin Tone: Female");
export const weightLifterMediumSkinToneFemale = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Weight Lifter: Medium Skin Tone: Female");
export const weightLifterMediumDarkSkinToneFemale = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Weight Lifter: Medium-Dark Skin Tone: Female");
export const weightLifterDarkSkinToneFemale = new Emoji("\u{1F3CB}\uDFCB\uFE0F\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Weight Lifter: Dark Skin Tone: Female");
export const allWeightLifterFemale = [
    weightLifterFemale,
    weightLifterLightSkinToneFemale,
    weightLifterMediumLightSkinToneFemale,
    weightLifterMediumSkinToneFemale,
    weightLifterMediumDarkSkinToneFemale,
    weightLifterDarkSkinToneFemale
];

export const allWeightLifterFemaleGroup = new EmojiGroup("\u{1F3CB}\uDFCB\uFE0F\u200D\u2640\uFE0F", "Weight Lifter: Female", ...allWeightLifterFemale);

export const allAllWeightLifterGroup = [
    allWeightLifterGroup,
    allWeightLifterMaleGroup,
    allWeightLifterFemaleGroup
];

export const allAllWeightLifterGroupGroup = new EmojiGroup("\u{1F3CB}\uDFCB\uFE0F", "Weight Lifter", ...allAllWeightLifterGroup);

export const biker = new Emoji("\u{1F6B4}\uDEB4", "Biker");
export const bikerLightSkinTone = new Emoji("\u{1F6B4}\uDEB4\u{1F3FB}\uDFFB", "Biker: Light Skin Tone");
export const bikerMediumLightSkinTone = new Emoji("\u{1F6B4}\uDEB4\u{1F3FC}\uDFFC", "Biker: Medium-Light Skin Tone");
export const bikerMediumSkinTone = new Emoji("\u{1F6B4}\uDEB4\u{1F3FD}\uDFFD", "Biker: Medium Skin Tone");
export const bikerMediumDarkSkinTone = new Emoji("\u{1F6B4}\uDEB4\u{1F3FE}\uDFFE", "Biker: Medium-Dark Skin Tone");
export const bikerDarkSkinTone = new Emoji("\u{1F6B4}\uDEB4\u{1F3FF}\uDFFF", "Biker: Dark Skin Tone");
export const allBiker = [
    biker,
    bikerLightSkinTone,
    bikerMediumLightSkinTone,
    bikerMediumSkinTone,
    bikerMediumDarkSkinTone,
    bikerDarkSkinTone
];

export const allBikerGroup = new EmojiGroup("\u{1F6B4}\uDEB4", "Biker", ...allBiker);

export const bikerMale = new Emoji("\u{1F6B4}\uDEB4\u200D\u2642\uFE0F", "Biker: Male");
export const bikerLightSkinToneMale = new Emoji("\u{1F6B4}\uDEB4\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Biker: Light Skin Tone: Male");
export const bikerMediumLightSkinToneMale = new Emoji("\u{1F6B4}\uDEB4\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Biker: Medium-Light Skin Tone: Male");
export const bikerMediumSkinToneMale = new Emoji("\u{1F6B4}\uDEB4\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Biker: Medium Skin Tone: Male");
export const bikerMediumDarkSkinToneMale = new Emoji("\u{1F6B4}\uDEB4\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Biker: Medium-Dark Skin Tone: Male");
export const bikerDarkSkinToneMale = new Emoji("\u{1F6B4}\uDEB4\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Biker: Dark Skin Tone: Male");
export const allBikerMale = [
    bikerMale,
    bikerLightSkinToneMale,
    bikerMediumLightSkinToneMale,
    bikerMediumSkinToneMale,
    bikerMediumDarkSkinToneMale,
    bikerDarkSkinToneMale
];

export const allBikerMaleGroup = new EmojiGroup("\u{1F6B4}\uDEB4\u200D\u2642\uFE0F", "Biker: Male", ...allBikerMale);

export const bikerFemale = new Emoji("\u{1F6B4}\uDEB4\u200D\u2640\uFE0F", "Biker: Female");
export const bikerLightSkinToneFemale = new Emoji("\u{1F6B4}\uDEB4\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Biker: Light Skin Tone: Female");
export const bikerMediumLightSkinToneFemale = new Emoji("\u{1F6B4}\uDEB4\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Biker: Medium-Light Skin Tone: Female");
export const bikerMediumSkinToneFemale = new Emoji("\u{1F6B4}\uDEB4\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Biker: Medium Skin Tone: Female");
export const bikerMediumDarkSkinToneFemale = new Emoji("\u{1F6B4}\uDEB4\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Biker: Medium-Dark Skin Tone: Female");
export const bikerDarkSkinToneFemale = new Emoji("\u{1F6B4}\uDEB4\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Biker: Dark Skin Tone: Female");
export const allBikerFemale = [
    bikerFemale,
    bikerLightSkinToneFemale,
    bikerMediumLightSkinToneFemale,
    bikerMediumSkinToneFemale,
    bikerMediumDarkSkinToneFemale,
    bikerDarkSkinToneFemale
];

export const allBikerFemaleGroup = new EmojiGroup("\u{1F6B4}\uDEB4\u200D\u2640\uFE0F", "Biker: Female", ...allBikerFemale);

export const allAllBikerGroup = [
    allBikerGroup,
    allBikerMaleGroup,
    allBikerFemaleGroup
];

export const allAllBikerGroupGroup = new EmojiGroup("\u{1F6B4}\uDEB4", "Biker", ...allAllBikerGroup);

export const mountainBiker = new Emoji("\u{1F6B5}\uDEB5", "Mountain Biker");
export const mountainBikerLightSkinTone = new Emoji("\u{1F6B5}\uDEB5\u{1F3FB}\uDFFB", "Mountain Biker: Light Skin Tone");
export const mountainBikerMediumLightSkinTone = new Emoji("\u{1F6B5}\uDEB5\u{1F3FC}\uDFFC", "Mountain Biker: Medium-Light Skin Tone");
export const mountainBikerMediumSkinTone = new Emoji("\u{1F6B5}\uDEB5\u{1F3FD}\uDFFD", "Mountain Biker: Medium Skin Tone");
export const mountainBikerMediumDarkSkinTone = new Emoji("\u{1F6B5}\uDEB5\u{1F3FE}\uDFFE", "Mountain Biker: Medium-Dark Skin Tone");
export const mountainBikerDarkSkinTone = new Emoji("\u{1F6B5}\uDEB5\u{1F3FF}\uDFFF", "Mountain Biker: Dark Skin Tone");
export const allMountainBiker = [
    mountainBiker,
    mountainBikerLightSkinTone,
    mountainBikerMediumLightSkinTone,
    mountainBikerMediumSkinTone,
    mountainBikerMediumDarkSkinTone,
    mountainBikerDarkSkinTone
];

export const allMountainBikerGroup = new EmojiGroup("\u{1F6B5}\uDEB5", "Mountain Biker", ...allMountainBiker);

export const mountainBikerMale = new Emoji("\u{1F6B5}\uDEB5\u200D\u2642\uFE0F", "Mountain Biker: Male");
export const mountainBikerLightSkinToneMale = new Emoji("\u{1F6B5}\uDEB5\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Mountain Biker: Light Skin Tone: Male");
export const mountainBikerMediumLightSkinToneMale = new Emoji("\u{1F6B5}\uDEB5\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Mountain Biker: Medium-Light Skin Tone: Male");
export const mountainBikerMediumSkinToneMale = new Emoji("\u{1F6B5}\uDEB5\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Mountain Biker: Medium Skin Tone: Male");
export const mountainBikerMediumDarkSkinToneMale = new Emoji("\u{1F6B5}\uDEB5\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Mountain Biker: Medium-Dark Skin Tone: Male");
export const mountainBikerDarkSkinToneMale = new Emoji("\u{1F6B5}\uDEB5\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Mountain Biker: Dark Skin Tone: Male");
export const allMountainBikerMale = [
    mountainBikerMale,
    mountainBikerLightSkinToneMale,
    mountainBikerMediumLightSkinToneMale,
    mountainBikerMediumSkinToneMale,
    mountainBikerMediumDarkSkinToneMale,
    mountainBikerDarkSkinToneMale
];

export const allMountainBikerMaleGroup = new EmojiGroup("\u{1F6B5}\uDEB5\u200D\u2642\uFE0F", "Mountain Biker: Male", ...allMountainBikerMale);

export const mountainBikerFemale = new Emoji("\u{1F6B5}\uDEB5\u200D\u2640\uFE0F", "Mountain Biker: Female");
export const mountainBikerLightSkinToneFemale = new Emoji("\u{1F6B5}\uDEB5\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Mountain Biker: Light Skin Tone: Female");
export const mountainBikerMediumLightSkinToneFemale = new Emoji("\u{1F6B5}\uDEB5\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Mountain Biker: Medium-Light Skin Tone: Female");
export const mountainBikerMediumSkinToneFemale = new Emoji("\u{1F6B5}\uDEB5\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Mountain Biker: Medium Skin Tone: Female");
export const mountainBikerMediumDarkSkinToneFemale = new Emoji("\u{1F6B5}\uDEB5\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Mountain Biker: Medium-Dark Skin Tone: Female");
export const mountainBikerDarkSkinToneFemale = new Emoji("\u{1F6B5}\uDEB5\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Mountain Biker: Dark Skin Tone: Female");
export const allMountainBikerFemale = [
    mountainBikerFemale,
    mountainBikerLightSkinToneFemale,
    mountainBikerMediumLightSkinToneFemale,
    mountainBikerMediumSkinToneFemale,
    mountainBikerMediumDarkSkinToneFemale,
    mountainBikerDarkSkinToneFemale
];

export const allMountainBikerFemaleGroup = new EmojiGroup("\u{1F6B5}\uDEB5\u200D\u2640\uFE0F", "Mountain Biker: Female", ...allMountainBikerFemale);

export const allAllMountainBikerGroup = [
    allMountainBikerGroup,
    allMountainBikerMaleGroup,
    allMountainBikerFemaleGroup
];

export const allAllMountainBikerGroupGroup = new EmojiGroup("\u{1F6B5}\uDEB5", "Mountain Biker", ...allAllMountainBikerGroup);

export const cartwheeler = new Emoji("\u{1F938}\uDD38", "Cartwheeler");
export const cartwheelerLightSkinTone = new Emoji("\u{1F938}\uDD38\u{1F3FB}\uDFFB", "Cartwheeler: Light Skin Tone");
export const cartwheelerMediumLightSkinTone = new Emoji("\u{1F938}\uDD38\u{1F3FC}\uDFFC", "Cartwheeler: Medium-Light Skin Tone");
export const cartwheelerMediumSkinTone = new Emoji("\u{1F938}\uDD38\u{1F3FD}\uDFFD", "Cartwheeler: Medium Skin Tone");
export const cartwheelerMediumDarkSkinTone = new Emoji("\u{1F938}\uDD38\u{1F3FE}\uDFFE", "Cartwheeler: Medium-Dark Skin Tone");
export const cartwheelerDarkSkinTone = new Emoji("\u{1F938}\uDD38\u{1F3FF}\uDFFF", "Cartwheeler: Dark Skin Tone");
export const allCartwheeler = [
    cartwheeler,
    cartwheelerLightSkinTone,
    cartwheelerMediumLightSkinTone,
    cartwheelerMediumSkinTone,
    cartwheelerMediumDarkSkinTone,
    cartwheelerDarkSkinTone
];

export const allCartwheelerGroup = new EmojiGroup("\u{1F938}\uDD38", "Cartwheeler", ...allCartwheeler);

export const cartwheelerMale = new Emoji("\u{1F938}\uDD38\u200D\u2642\uFE0F", "Cartwheeler: Male");
export const cartwheelerLightSkinToneMale = new Emoji("\u{1F938}\uDD38\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Cartwheeler: Light Skin Tone: Male");
export const cartwheelerMediumLightSkinToneMale = new Emoji("\u{1F938}\uDD38\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Cartwheeler: Medium-Light Skin Tone: Male");
export const cartwheelerMediumSkinToneMale = new Emoji("\u{1F938}\uDD38\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Cartwheeler: Medium Skin Tone: Male");
export const cartwheelerMediumDarkSkinToneMale = new Emoji("\u{1F938}\uDD38\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Cartwheeler: Medium-Dark Skin Tone: Male");
export const cartwheelerDarkSkinToneMale = new Emoji("\u{1F938}\uDD38\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Cartwheeler: Dark Skin Tone: Male");
export const allCartwheelerMale = [
    cartwheelerMale,
    cartwheelerLightSkinToneMale,
    cartwheelerMediumLightSkinToneMale,
    cartwheelerMediumSkinToneMale,
    cartwheelerMediumDarkSkinToneMale,
    cartwheelerDarkSkinToneMale
];

export const allCartwheelerMaleGroup = new EmojiGroup("\u{1F938}\uDD38\u200D\u2642\uFE0F", "Cartwheeler: Male", ...allCartwheelerMale);

export const cartwheelerFemale = new Emoji("\u{1F938}\uDD38\u200D\u2640\uFE0F", "Cartwheeler: Female");
export const cartwheelerLightSkinToneFemale = new Emoji("\u{1F938}\uDD38\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Cartwheeler: Light Skin Tone: Female");
export const cartwheelerMediumLightSkinToneFemale = new Emoji("\u{1F938}\uDD38\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Cartwheeler: Medium-Light Skin Tone: Female");
export const cartwheelerMediumSkinToneFemale = new Emoji("\u{1F938}\uDD38\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Cartwheeler: Medium Skin Tone: Female");
export const cartwheelerMediumDarkSkinToneFemale = new Emoji("\u{1F938}\uDD38\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Cartwheeler: Medium-Dark Skin Tone: Female");
export const cartwheelerDarkSkinToneFemale = new Emoji("\u{1F938}\uDD38\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Cartwheeler: Dark Skin Tone: Female");
export const allCartwheelerFemale = [
    cartwheelerFemale,
    cartwheelerLightSkinToneFemale,
    cartwheelerMediumLightSkinToneFemale,
    cartwheelerMediumSkinToneFemale,
    cartwheelerMediumDarkSkinToneFemale,
    cartwheelerDarkSkinToneFemale
];

export const allCartwheelerFemaleGroup = new EmojiGroup("\u{1F938}\uDD38\u200D\u2640\uFE0F", "Cartwheeler: Female", ...allCartwheelerFemale);

export const allAllCartwheelerGroup = [
    allCartwheelerGroup,
    allCartwheelerMaleGroup,
    allCartwheelerFemaleGroup
];

export const allAllCartwheelerGroupGroup = new EmojiGroup("\u{1F938}\uDD38", "Cartwheeler", ...allAllCartwheelerGroup);

export const wrestler = new Emoji("\u{1F93C}\uDD3C", "Wrestler");
export const wrestlerMale = new Emoji("\u{1F93C}\uDD3C\u200D\u2642\uFE0F", "Wrestler: Male");
export const wrestlerFemale = new Emoji("\u{1F93C}\uDD3C\u200D\u2640\uFE0F", "Wrestler: Female");
export const allWrestler = [
    wrestler,
    wrestlerMale,
    wrestlerFemale
];

export const allWrestlerGroup = new EmojiGroup("\u{1F93C}\uDD3C", "Wrestler", ...allWrestler);

export const waterPoloPlayer = new Emoji("\u{1F93D}\uDD3D", "Water Polo Player");
export const waterPoloPlayerLightSkinTone = new Emoji("\u{1F93D}\uDD3D\u{1F3FB}\uDFFB", "Water Polo Player: Light Skin Tone");
export const waterPoloPlayerMediumLightSkinTone = new Emoji("\u{1F93D}\uDD3D\u{1F3FC}\uDFFC", "Water Polo Player: Medium-Light Skin Tone");
export const waterPoloPlayerMediumSkinTone = new Emoji("\u{1F93D}\uDD3D\u{1F3FD}\uDFFD", "Water Polo Player: Medium Skin Tone");
export const waterPoloPlayerMediumDarkSkinTone = new Emoji("\u{1F93D}\uDD3D\u{1F3FE}\uDFFE", "Water Polo Player: Medium-Dark Skin Tone");
export const waterPoloPlayerDarkSkinTone = new Emoji("\u{1F93D}\uDD3D\u{1F3FF}\uDFFF", "Water Polo Player: Dark Skin Tone");
export const allWaterPoloPlayer = [
    waterPoloPlayer,
    waterPoloPlayerLightSkinTone,
    waterPoloPlayerMediumLightSkinTone,
    waterPoloPlayerMediumSkinTone,
    waterPoloPlayerMediumDarkSkinTone,
    waterPoloPlayerDarkSkinTone
];

export const allWaterPoloPlayerGroup = new EmojiGroup("\u{1F93D}\uDD3D", "Water Polo Player", ...allWaterPoloPlayer);

export const waterPoloPlayerMale = new Emoji("\u{1F93D}\uDD3D\u200D\u2642\uFE0F", "Water Polo Player: Male");
export const waterPoloPlayerLightSkinToneMale = new Emoji("\u{1F93D}\uDD3D\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Water Polo Player: Light Skin Tone: Male");
export const waterPoloPlayerMediumLightSkinToneMale = new Emoji("\u{1F93D}\uDD3D\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Water Polo Player: Medium-Light Skin Tone: Male");
export const waterPoloPlayerMediumSkinToneMale = new Emoji("\u{1F93D}\uDD3D\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Water Polo Player: Medium Skin Tone: Male");
export const waterPoloPlayerMediumDarkSkinToneMale = new Emoji("\u{1F93D}\uDD3D\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Water Polo Player: Medium-Dark Skin Tone: Male");
export const waterPoloPlayerDarkSkinToneMale = new Emoji("\u{1F93D}\uDD3D\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Water Polo Player: Dark Skin Tone: Male");
export const allWaterPoloPlayerMale = [
    waterPoloPlayerMale,
    waterPoloPlayerLightSkinToneMale,
    waterPoloPlayerMediumLightSkinToneMale,
    waterPoloPlayerMediumSkinToneMale,
    waterPoloPlayerMediumDarkSkinToneMale,
    waterPoloPlayerDarkSkinToneMale
];

export const allWaterPoloPlayerMaleGroup = new EmojiGroup("\u{1F93D}\uDD3D\u200D\u2642\uFE0F", "Water Polo Player: Male", ...allWaterPoloPlayerMale);

export const waterPoloPlayerFemale = new Emoji("\u{1F93D}\uDD3D\u200D\u2640\uFE0F", "Water Polo Player: Female");
export const waterPoloPlayerLightSkinToneFemale = new Emoji("\u{1F93D}\uDD3D\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Water Polo Player: Light Skin Tone: Female");
export const waterPoloPlayerMediumLightSkinToneFemale = new Emoji("\u{1F93D}\uDD3D\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Water Polo Player: Medium-Light Skin Tone: Female");
export const waterPoloPlayerMediumSkinToneFemale = new Emoji("\u{1F93D}\uDD3D\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Water Polo Player: Medium Skin Tone: Female");
export const waterPoloPlayerMediumDarkSkinToneFemale = new Emoji("\u{1F93D}\uDD3D\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Water Polo Player: Medium-Dark Skin Tone: Female");
export const waterPoloPlayerDarkSkinToneFemale = new Emoji("\u{1F93D}\uDD3D\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Water Polo Player: Dark Skin Tone: Female");
export const allWaterPoloPlayerFemale = [
    waterPoloPlayerFemale,
    waterPoloPlayerLightSkinToneFemale,
    waterPoloPlayerMediumLightSkinToneFemale,
    waterPoloPlayerMediumSkinToneFemale,
    waterPoloPlayerMediumDarkSkinToneFemale,
    waterPoloPlayerDarkSkinToneFemale
];

export const allWaterPoloPlayerFemaleGroup = new EmojiGroup("\u{1F93D}\uDD3D\u200D\u2640\uFE0F", "Water Polo Player: Female", ...allWaterPoloPlayerFemale);

export const allAllWaterPoloPlayerGroup = [
    allWaterPoloPlayerGroup,
    allWaterPoloPlayerMaleGroup,
    allWaterPoloPlayerFemaleGroup
];

export const allAllWaterPoloPlayerGroupGroup = new EmojiGroup("\u{1F93D}\uDD3D", "Water Polo Player", ...allAllWaterPoloPlayerGroup);

export const handBaller = new Emoji("\u{1F93E}\uDD3E", "Hand Baller");
export const handBallerLightSkinTone = new Emoji("\u{1F93E}\uDD3E\u{1F3FB}\uDFFB", "Hand Baller: Light Skin Tone");
export const handBallerMediumLightSkinTone = new Emoji("\u{1F93E}\uDD3E\u{1F3FC}\uDFFC", "Hand Baller: Medium-Light Skin Tone");
export const handBallerMediumSkinTone = new Emoji("\u{1F93E}\uDD3E\u{1F3FD}\uDFFD", "Hand Baller: Medium Skin Tone");
export const handBallerMediumDarkSkinTone = new Emoji("\u{1F93E}\uDD3E\u{1F3FE}\uDFFE", "Hand Baller: Medium-Dark Skin Tone");
export const handBallerDarkSkinTone = new Emoji("\u{1F93E}\uDD3E\u{1F3FF}\uDFFF", "Hand Baller: Dark Skin Tone");
export const allHandBaller = [
    handBaller,
    handBallerLightSkinTone,
    handBallerMediumLightSkinTone,
    handBallerMediumSkinTone,
    handBallerMediumDarkSkinTone,
    handBallerDarkSkinTone
];

export const allHandBallerGroup = new EmojiGroup("\u{1F93E}\uDD3E", "Hand Baller", ...allHandBaller);

export const handBallerMale = new Emoji("\u{1F93E}\uDD3E\u200D\u2642\uFE0F", "Hand Baller: Male");
export const handBallerLightSkinToneMale = new Emoji("\u{1F93E}\uDD3E\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "Hand Baller: Light Skin Tone: Male");
export const handBallerMediumLightSkinToneMale = new Emoji("\u{1F93E}\uDD3E\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "Hand Baller: Medium-Light Skin Tone: Male");
export const handBallerMediumSkinToneMale = new Emoji("\u{1F93E}\uDD3E\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "Hand Baller: Medium Skin Tone: Male");
export const handBallerMediumDarkSkinToneMale = new Emoji("\u{1F93E}\uDD3E\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "Hand Baller: Medium-Dark Skin Tone: Male");
export const handBallerDarkSkinToneMale = new Emoji("\u{1F93E}\uDD3E\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "Hand Baller: Dark Skin Tone: Male");
export const allHandBallerMale = [
    handBallerMale,
    handBallerLightSkinToneMale,
    handBallerMediumLightSkinToneMale,
    handBallerMediumSkinToneMale,
    handBallerMediumDarkSkinToneMale,
    handBallerDarkSkinToneMale
];

export const allHandBallerMaleGroup = new EmojiGroup("\u{1F93E}\uDD3E\u200D\u2642\uFE0F", "Hand Baller: Male", ...allHandBallerMale);

export const handBallerFemale = new Emoji("\u{1F93E}\uDD3E\u200D\u2640\uFE0F", "Hand Baller: Female");
export const handBallerLightSkinToneFemale = new Emoji("\u{1F93E}\uDD3E\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "Hand Baller: Light Skin Tone: Female");
export const handBallerMediumLightSkinToneFemale = new Emoji("\u{1F93E}\uDD3E\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "Hand Baller: Medium-Light Skin Tone: Female");
export const handBallerMediumSkinToneFemale = new Emoji("\u{1F93E}\uDD3E\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "Hand Baller: Medium Skin Tone: Female");
export const handBallerMediumDarkSkinToneFemale = new Emoji("\u{1F93E}\uDD3E\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "Hand Baller: Medium-Dark Skin Tone: Female");
export const handBallerDarkSkinToneFemale = new Emoji("\u{1F93E}\uDD3E\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "Hand Baller: Dark Skin Tone: Female");
export const allHandBallerFemale = [
    handBallerFemale,
    handBallerLightSkinToneFemale,
    handBallerMediumLightSkinToneFemale,
    handBallerMediumSkinToneFemale,
    handBallerMediumDarkSkinToneFemale,
    handBallerDarkSkinToneFemale
];

export const allHandBallerFemaleGroup = new EmojiGroup("\u{1F93E}\uDD3E\u200D\u2640\uFE0F", "Hand Baller: Female", ...allHandBallerFemale);

export const allAllHandBallerGroup = [
    allHandBallerGroup,
    allHandBallerMaleGroup,
    allHandBallerFemaleGroup
];

export const allAllHandBallerGroupGroup = new EmojiGroup("\u{1F93E}\uDD3E", "Hand Baller", ...allAllHandBallerGroup);

export const allAllAllWalkingGroupGroup = [
    allAllWalkingGroupGroup,
    allAllStandingGroupGroup,
    allAllKneelingGroupGroup,
    allProbingCaneGroup,
    allMotorizedWheelchairGroup,
    allManualWheelchairGroup,
    allAllManDancingGroupGroup,
    allAllJugglerGroupGroup,
    allAllClimberGroupGroup,
    fencer,
    allJockeyGroup,
    skier,
    allSnowboarderGroup,
    allAllGolferGroupGroup,
    allAllSurfingGroupGroup,
    allAllRowingBoatGroupGroup,
    allAllSwimmingGroupGroup,
    allAllRunningGroupGroup,
    allAllBasketBallerGroupGroup,
    allAllWeightLifterGroupGroup,
    allAllBikerGroupGroup,
    allAllMountainBikerGroupGroup,
    allAllCartwheelerGroupGroup,
    allWrestlerGroup,
    allAllWaterPoloPlayerGroupGroup,
    allAllHandBallerGroupGroup
];

export const allAllAllWalkingGroupGroupGroup = new EmojiGroup("\u0049\u006E\u0020\u004D\u006F\u0074\u0069\u006F\u006E", "Depictions of people in motion", ...allAllAllWalkingGroupGroup);

export const inLotusPosition = new Emoji("\u{1F9D8}\uDDD8", "In Lotus Position");
export const inLotusPositionLightSkinTone = new Emoji("\u{1F9D8}\uDDD8\u{1F3FB}\uDFFB", "In Lotus Position: Light Skin Tone");
export const inLotusPositionMediumLightSkinTone = new Emoji("\u{1F9D8}\uDDD8\u{1F3FC}\uDFFC", "In Lotus Position: Medium-Light Skin Tone");
export const inLotusPositionMediumSkinTone = new Emoji("\u{1F9D8}\uDDD8\u{1F3FD}\uDFFD", "In Lotus Position: Medium Skin Tone");
export const inLotusPositionMediumDarkSkinTone = new Emoji("\u{1F9D8}\uDDD8\u{1F3FE}\uDFFE", "In Lotus Position: Medium-Dark Skin Tone");
export const inLotusPositionDarkSkinTone = new Emoji("\u{1F9D8}\uDDD8\u{1F3FF}\uDFFF", "In Lotus Position: Dark Skin Tone");
export const allInLotusPosition = [
    inLotusPosition,
    inLotusPositionLightSkinTone,
    inLotusPositionMediumLightSkinTone,
    inLotusPositionMediumSkinTone,
    inLotusPositionMediumDarkSkinTone,
    inLotusPositionDarkSkinTone
];

export const allInLotusPositionGroup = new EmojiGroup("\u{1F9D8}\uDDD8", "In Lotus Position", ...allInLotusPosition);

export const inLotusPositionMale = new Emoji("\u{1F9D8}\uDDD8\u200D\u2642\uFE0F", "In Lotus Position: Male");
export const inLotusPositionLightSkinToneMale = new Emoji("\u{1F9D8}\uDDD8\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "In Lotus Position: Light Skin Tone: Male");
export const inLotusPositionMediumLightSkinToneMale = new Emoji("\u{1F9D8}\uDDD8\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "In Lotus Position: Medium-Light Skin Tone: Male");
export const inLotusPositionMediumSkinToneMale = new Emoji("\u{1F9D8}\uDDD8\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "In Lotus Position: Medium Skin Tone: Male");
export const inLotusPositionMediumDarkSkinToneMale = new Emoji("\u{1F9D8}\uDDD8\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "In Lotus Position: Medium-Dark Skin Tone: Male");
export const inLotusPositionDarkSkinToneMale = new Emoji("\u{1F9D8}\uDDD8\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "In Lotus Position: Dark Skin Tone: Male");
export const allInLotusPositionMale = [
    inLotusPositionMale,
    inLotusPositionLightSkinToneMale,
    inLotusPositionMediumLightSkinToneMale,
    inLotusPositionMediumSkinToneMale,
    inLotusPositionMediumDarkSkinToneMale,
    inLotusPositionDarkSkinToneMale
];

export const allInLotusPositionMaleGroup = new EmojiGroup("\u{1F9D8}\uDDD8\u200D\u2642\uFE0F", "In Lotus Position: Male", ...allInLotusPositionMale);

export const inLotusPositionFemale = new Emoji("\u{1F9D8}\uDDD8\u200D\u2640\uFE0F", "In Lotus Position: Female");
export const inLotusPositionLightSkinToneFemale = new Emoji("\u{1F9D8}\uDDD8\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "In Lotus Position: Light Skin Tone: Female");
export const inLotusPositionMediumLightSkinToneFemale = new Emoji("\u{1F9D8}\uDDD8\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "In Lotus Position: Medium-Light Skin Tone: Female");
export const inLotusPositionMediumSkinToneFemale = new Emoji("\u{1F9D8}\uDDD8\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "In Lotus Position: Medium Skin Tone: Female");
export const inLotusPositionMediumDarkSkinToneFemale = new Emoji("\u{1F9D8}\uDDD8\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "In Lotus Position: Medium-Dark Skin Tone: Female");
export const inLotusPositionDarkSkinToneFemale = new Emoji("\u{1F9D8}\uDDD8\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "In Lotus Position: Dark Skin Tone: Female");
export const allInLotusPositionFemale = [
    inLotusPositionFemale,
    inLotusPositionLightSkinToneFemale,
    inLotusPositionMediumLightSkinToneFemale,
    inLotusPositionMediumSkinToneFemale,
    inLotusPositionMediumDarkSkinToneFemale,
    inLotusPositionDarkSkinToneFemale
];

export const allInLotusPositionFemaleGroup = new EmojiGroup("\u{1F9D8}\uDDD8\u200D\u2640\uFE0F", "In Lotus Position: Female", ...allInLotusPositionFemale);

export const allAllInLotusPositionGroup = [
    allInLotusPositionGroup,
    allInLotusPositionMaleGroup,
    allInLotusPositionFemaleGroup
];

export const allAllInLotusPositionGroupGroup = new EmojiGroup("\u{1F9D8}\uDDD8", "In Lotus Position", ...allAllInLotusPositionGroup);

export const inBath = new Emoji("\u{1F6C0}\uDEC0", "In Bath");
export const inBathLightSkinTone = new Emoji("\u{1F6C0}\uDEC0\u{1F3FB}\uDFFB", "In Bath: Light Skin Tone");
export const inBathMediumLightSkinTone = new Emoji("\u{1F6C0}\uDEC0\u{1F3FC}\uDFFC", "In Bath: Medium-Light Skin Tone");
export const inBathMediumSkinTone = new Emoji("\u{1F6C0}\uDEC0\u{1F3FD}\uDFFD", "In Bath: Medium Skin Tone");
export const inBathMediumDarkSkinTone = new Emoji("\u{1F6C0}\uDEC0\u{1F3FE}\uDFFE", "In Bath: Medium-Dark Skin Tone");
export const inBathDarkSkinTone = new Emoji("\u{1F6C0}\uDEC0\u{1F3FF}\uDFFF", "In Bath: Dark Skin Tone");
export const allInBath = [
    inBath,
    inBathLightSkinTone,
    inBathMediumLightSkinTone,
    inBathMediumSkinTone,
    inBathMediumDarkSkinTone,
    inBathDarkSkinTone
];

export const allInBathGroup = new EmojiGroup("\u{1F6C0}\uDEC0", "In Bath", ...allInBath);

export const inBed = new Emoji("\u{1F6CC}\uDECC", "In Bed");
export const inBedLightSkinTone = new Emoji("\u{1F6CC}\uDECC\u{1F3FB}\uDFFB", "In Bed: Light Skin Tone");
export const inBedMediumLightSkinTone = new Emoji("\u{1F6CC}\uDECC\u{1F3FC}\uDFFC", "In Bed: Medium-Light Skin Tone");
export const inBedMediumSkinTone = new Emoji("\u{1F6CC}\uDECC\u{1F3FD}\uDFFD", "In Bed: Medium Skin Tone");
export const inBedMediumDarkSkinTone = new Emoji("\u{1F6CC}\uDECC\u{1F3FE}\uDFFE", "In Bed: Medium-Dark Skin Tone");
export const inBedDarkSkinTone = new Emoji("\u{1F6CC}\uDECC\u{1F3FF}\uDFFF", "In Bed: Dark Skin Tone");
export const allInBed = [
    inBed,
    inBedLightSkinTone,
    inBedMediumLightSkinTone,
    inBedMediumSkinTone,
    inBedMediumDarkSkinTone,
    inBedDarkSkinTone
];

export const allInBedGroup = new EmojiGroup("\u{1F6CC}\uDECC", "In Bed", ...allInBed);

export const inSauna = new Emoji("\u{1F9D6}\uDDD6", "In Sauna");
export const inSaunaLightSkinTone = new Emoji("\u{1F9D6}\uDDD6\u{1F3FB}\uDFFB", "In Sauna: Light Skin Tone");
export const inSaunaMediumLightSkinTone = new Emoji("\u{1F9D6}\uDDD6\u{1F3FC}\uDFFC", "In Sauna: Medium-Light Skin Tone");
export const inSaunaMediumSkinTone = new Emoji("\u{1F9D6}\uDDD6\u{1F3FD}\uDFFD", "In Sauna: Medium Skin Tone");
export const inSaunaMediumDarkSkinTone = new Emoji("\u{1F9D6}\uDDD6\u{1F3FE}\uDFFE", "In Sauna: Medium-Dark Skin Tone");
export const inSaunaDarkSkinTone = new Emoji("\u{1F9D6}\uDDD6\u{1F3FF}\uDFFF", "In Sauna: Dark Skin Tone");
export const allInSauna = [
    inSauna,
    inSaunaLightSkinTone,
    inSaunaMediumLightSkinTone,
    inSaunaMediumSkinTone,
    inSaunaMediumDarkSkinTone,
    inSaunaDarkSkinTone
];

export const allInSaunaGroup = new EmojiGroup("\u{1F9D6}\uDDD6", "In Sauna", ...allInSauna);

export const inSaunaMale = new Emoji("\u{1F9D6}\uDDD6\u200D\u2642\uFE0F", "In Sauna: Male");
export const inSaunaLightSkinToneMale = new Emoji("\u{1F9D6}\uDDD6\u{1F3FB}\uDFFB\u200D\u2642\uFE0F", "In Sauna: Light Skin Tone: Male");
export const inSaunaMediumLightSkinToneMale = new Emoji("\u{1F9D6}\uDDD6\u{1F3FC}\uDFFC\u200D\u2642\uFE0F", "In Sauna: Medium-Light Skin Tone: Male");
export const inSaunaMediumSkinToneMale = new Emoji("\u{1F9D6}\uDDD6\u{1F3FD}\uDFFD\u200D\u2642\uFE0F", "In Sauna: Medium Skin Tone: Male");
export const inSaunaMediumDarkSkinToneMale = new Emoji("\u{1F9D6}\uDDD6\u{1F3FE}\uDFFE\u200D\u2642\uFE0F", "In Sauna: Medium-Dark Skin Tone: Male");
export const inSaunaDarkSkinToneMale = new Emoji("\u{1F9D6}\uDDD6\u{1F3FF}\uDFFF\u200D\u2642\uFE0F", "In Sauna: Dark Skin Tone: Male");
export const allInSaunaMale = [
    inSaunaMale,
    inSaunaLightSkinToneMale,
    inSaunaMediumLightSkinToneMale,
    inSaunaMediumSkinToneMale,
    inSaunaMediumDarkSkinToneMale,
    inSaunaDarkSkinToneMale
];

export const allInSaunaMaleGroup = new EmojiGroup("\u{1F9D6}\uDDD6\u200D\u2642\uFE0F", "In Sauna: Male", ...allInSaunaMale);

export const inSaunaFemale = new Emoji("\u{1F9D6}\uDDD6\u200D\u2640\uFE0F", "In Sauna: Female");
export const inSaunaLightSkinToneFemale = new Emoji("\u{1F9D6}\uDDD6\u{1F3FB}\uDFFB\u200D\u2640\uFE0F", "In Sauna: Light Skin Tone: Female");
export const inSaunaMediumLightSkinToneFemale = new Emoji("\u{1F9D6}\uDDD6\u{1F3FC}\uDFFC\u200D\u2640\uFE0F", "In Sauna: Medium-Light Skin Tone: Female");
export const inSaunaMediumSkinToneFemale = new Emoji("\u{1F9D6}\uDDD6\u{1F3FD}\uDFFD\u200D\u2640\uFE0F", "In Sauna: Medium Skin Tone: Female");
export const inSaunaMediumDarkSkinToneFemale = new Emoji("\u{1F9D6}\uDDD6\u{1F3FE}\uDFFE\u200D\u2640\uFE0F", "In Sauna: Medium-Dark Skin Tone: Female");
export const inSaunaDarkSkinToneFemale = new Emoji("\u{1F9D6}\uDDD6\u{1F3FF}\uDFFF\u200D\u2640\uFE0F", "In Sauna: Dark Skin Tone: Female");
export const allInSaunaFemale = [
    inSaunaFemale,
    inSaunaLightSkinToneFemale,
    inSaunaMediumLightSkinToneFemale,
    inSaunaMediumSkinToneFemale,
    inSaunaMediumDarkSkinToneFemale,
    inSaunaDarkSkinToneFemale
];

export const allInSaunaFemaleGroup = new EmojiGroup("\u{1F9D6}\uDDD6\u200D\u2640\uFE0F", "In Sauna: Female", ...allInSaunaFemale);

export const allAllInSaunaGroup = [
    allInSaunaGroup,
    allInSaunaMaleGroup,
    allInSaunaFemaleGroup
];

export const allAllInSaunaGroupGroup = new EmojiGroup("\u{1F9D6}\uDDD6", "In Sauna", ...allAllInSaunaGroup);

export const allAllAllInLotusPositionGroupGroup = [
    allAllInLotusPositionGroupGroup,
    allInBathGroup,
    allInBedGroup,
    allAllInSaunaGroupGroup
];

export const allAllAllInLotusPositionGroupGroupGroup = new EmojiGroup("\u0052\u0065\u0073\u0074\u0069\u006E\u0067", "Depictions of people at rest", ...allAllAllInLotusPositionGroupGroup);

export const allAllBabyGroup = [
    allBabyGroup,
    allCherubGroup
];

export const allAllBabyGroupGroup = new EmojiGroup("\u{1F476}\uDC76", "Baby", ...allAllBabyGroup);

export const allAllAllBabyGroupGroup = [
    allAllBabyGroupGroup,
    allAllChildGroupGroup,
    allAllPersonGroupGroup,
    allAllOlderPersonGroupGroup
];

export const allAllAllBabyGroupGroupGroup = new EmojiGroup("\u0050\u0065\u006F\u0070\u006C\u0065", "People", ...allAllAllBabyGroupGroup);

export const allAllAllAllBabyGroupGroupGroup = [
    allAllAllBabyGroupGroupGroup,
    allAllAllFrowningGroupGroupGroup,
    allAllAllWalkingGroupGroupGroup,
    allAllAllInLotusPositionGroupGroupGroup,
    allAllMedicalGroupGroup,
    allAllCherubGroupGroup
];

export const allAllAllAllBabyGroupGroupGroupGroup = new EmojiGroup("\u0041\u006C\u006C\u0020\u0050\u0065\u006F\u0070\u006C\u0065", "All People", ...allAllAllAllBabyGroupGroupGroup);

export const ogre = new Emoji("\u{1F479}\uDC79", "Ogre");
export const goblin = new Emoji("\u{1F47A}\uDC7A", "Goblin");
export const ghost = new Emoji("\u{1F47B}\uDC7B", "Ghost");
export const alien = new Emoji("\u{1F47D}\uDC7D", "Alien");
export const alienMonster = new Emoji("\u{1F47E}\uDC7E", "Alien Monster");
export const angryFaceWithHorns = new Emoji("\u{1F47F}\uDC7F", "Angry Face with Horns");
export const skull = new Emoji("\u{1F480}\uDC80", "Skull");
export const pileOfPoo = new Emoji("\u{1F4A9}\uDCA9", "Pile of Poo");
export const grinningFace = new Emoji("\u{1F600}\uDE00", "Grinning Face");
export const beamingFaceWithSmilingEyes = new Emoji("\u{1F601}\uDE01", "Beaming Face with Smiling Eyes");
export const faceWithTearsOfJoy = new Emoji("\u{1F602}\uDE02", "Face with Tears of Joy");
export const grinningFaceWithBigEyes = new Emoji("\u{1F603}\uDE03", "Grinning Face with Big Eyes");
export const grinningFaceWithSmilingEyes = new Emoji("\u{1F604}\uDE04", "Grinning Face with Smiling Eyes");
export const grinningFaceWithSweat = new Emoji("\u{1F605}\uDE05", "Grinning Face with Sweat");
export const grinningSquintingFace = new Emoji("\u{1F606}\uDE06", "Grinning Squinting Face");
export const smilingFaceWithHalo = new Emoji("\u{1F607}\uDE07", "Smiling Face with Halo");
export const smilingFaceWithHorns = new Emoji("\u{1F608}\uDE08", "Smiling Face with Horns");
export const winkingFace = new Emoji("\u{1F609}\uDE09", "Winking Face");
export const smilingFaceWithSmilingEyes = new Emoji("\u{1F60A}\uDE0A", "Smiling Face with Smiling Eyes");
export const faceSavoringFood = new Emoji("\u{1F60B}\uDE0B", "Face Savoring Food");
export const relievedFace = new Emoji("\u{1F60C}\uDE0C", "Relieved Face");
export const smilingFaceWithHeartEyes = new Emoji("\u{1F60D}\uDE0D", "Smiling Face with Heart-Eyes");
export const smilingFaceWithSunglasses = new Emoji("\u{1F60E}\uDE0E", "Smiling Face with Sunglasses");
export const smirkingFace = new Emoji("\u{1F60F}\uDE0F", "Smirking Face");
export const neutralFace = new Emoji("\u{1F610}\uDE10", "Neutral Face");
export const expressionlessFace = new Emoji("\u{1F611}\uDE11", "Expressionless Face");
export const unamusedFace = new Emoji("\u{1F612}\uDE12", "Unamused Face");
export const downcastFaceWithSweat = new Emoji("\u{1F613}\uDE13", "Downcast Face with Sweat");
export const pensiveFace = new Emoji("\u{1F614}\uDE14", "Pensive Face");
export const confusedFace = new Emoji("\u{1F615}\uDE15", "Confused Face");
export const confoundedFace = new Emoji("\u{1F616}\uDE16", "Confounded Face");
export const kissingFace = new Emoji("\u{1F617}\uDE17", "Kissing Face");
export const faceBlowingAKiss = new Emoji("\u{1F618}\uDE18", "Face Blowing a Kiss");
export const kissingFaceWithSmilingEyes = new Emoji("\u{1F619}\uDE19", "Kissing Face with Smiling Eyes");
export const kissingFaceWithClosedEyes = new Emoji("\u{1F61A}\uDE1A", "Kissing Face with Closed Eyes");
export const faceWithTongue = new Emoji("\u{1F61B}\uDE1B", "Face with Tongue");
export const winkingFaceWithTongue = new Emoji("\u{1F61C}\uDE1C", "Winking Face with Tongue");
export const squintingFaceWithTongue = new Emoji("\u{1F61D}\uDE1D", "Squinting Face with Tongue");
export const disappointedFace = new Emoji("\u{1F61E}\uDE1E", "Disappointed Face");
export const worriedFace = new Emoji("\u{1F61F}\uDE1F", "Worried Face");
export const angryFace = new Emoji("\u{1F620}\uDE20", "Angry Face");
export const poutingFace = new Emoji("\u{1F621}\uDE21", "Pouting Face");
export const cryingFace = new Emoji("\u{1F622}\uDE22", "Crying Face");
export const perseveringFace = new Emoji("\u{1F623}\uDE23", "Persevering Face");
export const faceWithSteamFromNose = new Emoji("\u{1F624}\uDE24", "Face with Steam From Nose");
export const sadButRelievedFace = new Emoji("\u{1F625}\uDE25", "Sad but Relieved Face");
export const frowningFaceWithOpenMouth = new Emoji("\u{1F626}\uDE26", "Frowning Face with Open Mouth");
export const anguishedFace = new Emoji("\u{1F627}\uDE27", "Anguished Face");
export const fearfulFace = new Emoji("\u{1F628}\uDE28", "Fearful Face");
export const wearyFace = new Emoji("\u{1F629}\uDE29", "Weary Face");
export const sleepyFace = new Emoji("\u{1F62A}\uDE2A", "Sleepy Face");
export const tiredFace = new Emoji("\u{1F62B}\uDE2B", "Tired Face");
export const grimacingFace = new Emoji("\u{1F62C}\uDE2C", "Grimacing Face");
export const loudlyCryingFace = new Emoji("\u{1F62D}\uDE2D", "Loudly Crying Face");
export const faceWithOpenMouth = new Emoji("\u{1F62E}\uDE2E", "Face with Open Mouth");
export const hushedFace = new Emoji("\u{1F62F}\uDE2F", "Hushed Face");
export const anxiousFaceWithSweat = new Emoji("\u{1F630}\uDE30", "Anxious Face with Sweat");
export const faceScreamingInFear = new Emoji("\u{1F631}\uDE31", "Face Screaming in Fear");
export const astonishedFace = new Emoji("\u{1F632}\uDE32", "Astonished Face");
export const flushedFace = new Emoji("\u{1F633}\uDE33", "Flushed Face");
export const sleepingFace = new Emoji("\u{1F634}\uDE34", "Sleeping Face");
export const dizzyFace = new Emoji("\u{1F635}\uDE35", "Dizzy Face");
export const faceWithoutMouth = new Emoji("\u{1F636}\uDE36", "Face Without Mouth");
export const faceWithMedicalMask = new Emoji("\u{1F637}\uDE37", "Face with Medical Mask");
export const grinningCatWithSmilingEyes = new Emoji("\u{1F638}\uDE38", "Grinning Cat with Smiling Eyes");
export const catWithTearsOfJoy = new Emoji("\u{1F639}\uDE39", "Cat with Tears of Joy");
export const grinningCat = new Emoji("\u{1F63A}\uDE3A", "Grinning Cat");
export const smilingCatWithHeartEyes = new Emoji("\u{1F63B}\uDE3B", "Smiling Cat with Heart-Eyes");
export const catWithWrySmile = new Emoji("\u{1F63C}\uDE3C", "Cat with Wry Smile");
export const kissingCat = new Emoji("\u{1F63D}\uDE3D", "Kissing Cat");
export const poutingCat = new Emoji("\u{1F63E}\uDE3E", "Pouting Cat");
export const cryingCat = new Emoji("\u{1F63F}\uDE3F", "Crying Cat");
export const wearyCat = new Emoji("\u{1F640}\uDE40", "Weary Cat");
export const slightlyFrowningFace = new Emoji("\u{1F641}\uDE41", "Slightly Frowning Face");
export const slightlySmilingFace = new Emoji("\u{1F642}\uDE42", "Slightly Smiling Face");
export const upsideDownFace = new Emoji("\u{1F643}\uDE43", "Upside-Down Face");
export const faceWithRollingEyes = new Emoji("\u{1F644}\uDE44", "Face with Rolling Eyes");
export const seeNoEvilMonkey = new Emoji("\u{1F648}\uDE48", "See-No-Evil Monkey");
export const hearNoEvilMonkey = new Emoji("\u{1F649}\uDE49", "Hear-No-Evil Monkey");
export const speakNoEvilMonkey = new Emoji("\u{1F64A}\uDE4A", "Speak-No-Evil Monkey");
export const zipperMouthFace = new Emoji("\u{1F910}\uDD10", "Zipper-Mouth Face");
export const moneyMouthFace = new Emoji("\u{1F911}\uDD11", "Money-Mouth Face");
export const faceWithThermometer = new Emoji("\u{1F912}\uDD12", "Face with Thermometer");
export const nerdFace = new Emoji("\u{1F913}\uDD13", "Nerd Face");
export const thinkingFace = new Emoji("\u{1F914}\uDD14", "Thinking Face");
export const faceWithHeadBandage = new Emoji("\u{1F915}\uDD15", "Face with Head-Bandage");
export const robot = new Emoji("\u{1F916}\uDD16", "Robot");
export const huggingFace = new Emoji("\u{1F917}\uDD17", "Hugging Face");
export const cowboyHatFace = new Emoji("\u{1F920}\uDD20", "Cowboy Hat Face");
export const clownFace = new Emoji("\u{1F921}\uDD21", "Clown Face");
export const nauseatedFace = new Emoji("\u{1F922}\uDD22", "Nauseated Face");
export const rollingOnTheFloorLaughing = new Emoji("\u{1F923}\uDD23", "Rolling on the Floor Laughing");
export const droolingFace = new Emoji("\u{1F924}\uDD24", "Drooling Face");
export const lyingFace = new Emoji("\u{1F925}\uDD25", "Lying Face");
export const sneezingFace = new Emoji("\u{1F927}\uDD27", "Sneezing Face");
export const faceWithRaisedEyebrow = new Emoji("\u{1F928}\uDD28", "Face with Raised Eyebrow");
export const starStruck = new Emoji("\u{1F929}\uDD29", "Star-Struck");
export const zanyFace = new Emoji("\u{1F92A}\uDD2A", "Zany Face");
export const shushingFace = new Emoji("\u{1F92B}\uDD2B", "Shushing Face");
export const faceWithSymbolsOnMouth = new Emoji("\u{1F92C}\uDD2C", "Face with Symbols on Mouth");
export const faceWithHandOverMouth = new Emoji("\u{1F92D}\uDD2D", "Face with Hand Over Mouth");
export const faceVomiting = new Emoji("\u{1F92E}\uDD2E", "Face Vomiting");
export const explodingHead = new Emoji("\u{1F92F}\uDD2F", "Exploding Head");
export const smilingFaceWithHearts = new Emoji("\u{1F970}\uDD70", "Smiling Face with Hearts");
export const yawningFace = new Emoji("\u{1F971}\uDD71", "Yawning Face");
export const smilingFaceWithTear = new Emoji("\u{1F972}\uDD72", "Smiling Face with Tear");
export const partyingFace = new Emoji("\u{1F973}\uDD73", "Partying Face");
export const woozyFace = new Emoji("\u{1F974}\uDD74", "Woozy Face");
export const hotFace = new Emoji("\u{1F975}\uDD75", "Hot Face");
export const coldFace = new Emoji("\u{1F976}\uDD76", "Cold Face");
export const disguisedFace = new Emoji("\u{1F978}\uDD78", "Disguised Face");
export const pleadingFace = new Emoji("\u{1F97A}\uDD7A", "Pleading Face");
export const faceWithMonocle = new Emoji("\u{1F9D0}\uDDD0", "Face with Monocle");
export const skullAndCrossbones = new Emoji("\u2620\uFE0F", "Skull and Crossbones");
export const frowningFace = new Emoji("\u2639\uFE0F", "Frowning Face");
export const smilingFace = new Emoji("\u263A\uFE0F", "Smiling Face");
export const speakingHead = new Emoji("\u{1F5E3}\uDDE3\uFE0F", "Speaking Head");
export const bustInSilhouette = new Emoji("\u{1F464}\uDC64", "Bust in Silhouette");
export const kissMark = new Emoji("\u{1F48B}\uDC8B", "Kiss Mark");
export const loveLetter = new Emoji("\u{1F48C}\uDC8C", "Love Letter");
export const beatingHeart = new Emoji("\u{1F493}\uDC93", "Beating Heart");
export const brokenHeart = new Emoji("\u{1F494}\uDC94", "Broken Heart");
export const twoHearts = new Emoji("\u{1F495}\uDC95", "Two Hearts");
export const sparklingHeart = new Emoji("\u{1F496}\uDC96", "Sparkling Heart");
export const growingHeart = new Emoji("\u{1F497}\uDC97", "Growing Heart");
export const heartWithArrow = new Emoji("\u{1F498}\uDC98", "Heart with Arrow");
export const blueHeart = new Emoji("\u{1F499}\uDC99", "Blue Heart");
export const greenHeart = new Emoji("\u{1F49A}\uDC9A", "Green Heart");
export const yellowHeart = new Emoji("\u{1F49B}\uDC9B", "Yellow Heart");
export const purpleHeart = new Emoji("\u{1F49C}\uDC9C", "Purple Heart");
export const heartWithRibbon = new Emoji("\u{1F49D}\uDC9D", "Heart with Ribbon");
export const revolvingHearts = new Emoji("\u{1F49E}\uDC9E", "Revolving Hearts");
export const heartDecoration = new Emoji("\u{1F49F}\uDC9F", "Heart Decoration");
export const blackHeart = new Emoji("\u{1F5A4}\uDDA4", "Black Heart");
export const whiteHeart = new Emoji("\u{1F90D}\uDD0D", "White Heart");
export const brownHeart = new Emoji("\u{1F90E}\uDD0E", "Brown Heart");
export const orangeHeart = new Emoji("\u{1F9E1}\uDDE1", "Orange Heart");
export const heartExclamation = new Emoji("\u2763\uFE0F", "Heart Exclamation");
export const redHeart = new Emoji("\u2764\uFE0F", "Red Heart");
export const angerSymbol = new Emoji("\u{1F4A2}\uDCA2", "Anger Symbol");
export const bomb = new Emoji("\u{1F4A3}\uDCA3", "Bomb");
export const zzz = new Emoji("\u{1F4A4}\uDCA4", "Zzz");
export const collision = new Emoji("\u{1F4A5}\uDCA5", "Collision");
export const sweatDroplets = new Emoji("\u{1F4A6}\uDCA6", "Sweat Droplets");
export const dashingAway = new Emoji("\u{1F4A8}\uDCA8", "Dashing Away");
export const dizzy = new Emoji("\u{1F4AB}\uDCAB", "Dizzy");
export const speechBalloon = new Emoji("\u{1F4AC}\uDCAC", "Speech Balloon");
export const thoughtBalloon = new Emoji("\u{1F4AD}\uDCAD", "Thought Balloon");
export const hundredPoints = new Emoji("\u{1F4AF}\uDCAF", "Hundred Points");
export const hole = new Emoji("\u{1F573}\uDD73\uFE0F", "Hole");
export const leftSpeechBubble = new Emoji("\u{1F5E8}\uDDE8\uFE0F", "Left Speech Bubble");
export const rightSpeechBubble = new Emoji("\u{1F5E9}\uDDE9\uFE0F", "Right Speech Bubble");
export const conversationBubbles2 = new Emoji("\u{1F5EA}\uDDEA\uFE0F", "Conversation Bubbles 2");
export const conversationBubbles3 = new Emoji("\u{1F5EB}\uDDEB\uFE0F", "Conversation Bubbles 3");
export const leftThoughtBubble = new Emoji("\u{1F5EC}\uDDEC\uFE0F", "Left Thought Bubble");
export const rightThoughtBubble = new Emoji("\u{1F5ED}\uDDED\uFE0F", "Right Thought Bubble");
export const leftAngerBubble = new Emoji("\u{1F5EE}\uDDEE\uFE0F", "Left Anger Bubble");
export const rightAngerBubble = new Emoji("\u{1F5EF}\uDDEF\uFE0F", "Right Anger Bubble");
export const angerBubble = new Emoji("\u{1F5F0}\uDDF0\uFE0F", "Anger Bubble");
export const angerBubbleLightning = new Emoji("\u{1F5F1}\uDDF1\uFE0F", "Anger Bubble Lightning");
export const lightningBolt = new Emoji("\u{1F5F2}\uDDF2\uFE0F", "Lightning Bolt");
export const backhandIndexPointingUp = new Emoji("\u{1F446}\uDC46", "Backhand Index Pointing Up");
export const backhandIndexPointingDown = new Emoji("\u{1F447}\uDC47", "Backhand Index Pointing Down");
export const backhandIndexPointingLeft = new Emoji("\u{1F448}\uDC48", "Backhand Index Pointing Left");
export const backhandIndexPointingRight = new Emoji("\u{1F449}\uDC49", "Backhand Index Pointing Right");
export const oncomingFist = new Emoji("\u{1F44A}\uDC4A", "Oncoming Fist");
export const wavingHand = new Emoji("\u{1F44B}\uDC4B", "Waving Hand");
export const oKHand = new Emoji("\u{1F58F}\uDD8F", "OK Hand");
export const thumbsUp = new Emoji("\u{1F44D}\uDC4D", "Thumbs Up");
export const thumbsDown = new Emoji("\u{1F44E}\uDC4E", "Thumbs Down");
export const clappingHands = new Emoji("\u{1F44F}\uDC4F", "Clapping Hands");
export const openHands = new Emoji("\u{1F450}\uDC50", "Open Hands");
export const nailPolish = new Emoji("\u{1F485}\uDC85", "Nail Polish");
export const handWithFingersSplayed = new Emoji("\u{1F590}\uDD90\uFE0F", "Hand with Fingers Splayed");
export const handWithFingersSplayed2 = new Emoji("\u{1F591}\uDD91\uFE0F", "Hand with Fingers Splayed 2");
export const thumbsUp2 = new Emoji("\u{1F592}\uDD92", "Thumbs Up 2");
export const thumbsDown2 = new Emoji("\u{1F593}\uDD93", "Thumbs Down 2");
export const peaceFingers = new Emoji("\u{1F594}\uDD94", "Peace Fingers");
export const middleFinger = new Emoji("\u{1F595}\uDD95", "Middle Finger");
export const vulcanSalute = new Emoji("\u{1F596}\uDD96", "Vulcan Salute");
export const handPointingDown = new Emoji("\u{1F597}\uDD97", "Hand Pointing Down");
export const handPointingLeft = new Emoji("\u{1F598}\uDD98", "Hand Pointing Left");
export const handPointingRight = new Emoji("\u{1F599}\uDD99", "Hand Pointing Right");
export const handPointingLeft2 = new Emoji("\u{1F59A}\uDD9A", "Hand Pointing Left 2");
export const handPointingRight2 = new Emoji("\u{1F59B}\uDD9B", "Hand Pointing Right 2");
export const indexPointingLeft = new Emoji("\u{1F59C}\uDD9C", "Index Pointing Left");
export const indexPointingRight = new Emoji("\u{1F59D}\uDD9D", "Index Pointing Right");
export const indexPointingUp = new Emoji("\u{1F59E}\uDD9E", "Index Pointing Up");
export const indexPointingDown = new Emoji("\u{1F59F}\uDD9F", "Index Pointing Down");
export const indexPointingUp2 = new Emoji("\u{1F5A0}\uDDA0", "Index Pointing Up 2");
export const indexPointingDown2 = new Emoji("\u{1F5A1}\uDDA1", "Index Pointing Down 2");
export const indexPointingUp3 = new Emoji("\u{1F5A2}\uDDA2", "Index Pointing Up 3");
export const indexPointingDown3 = new Emoji("\u{1F5A3}\uDDA3", "Index Pointing Down 3");
export const raisingHands = new Emoji("\u{1F64C}\uDE4C", "Raising Hands");
export const foldedHands = new Emoji("\u{1F64F}\uDE4F", "Folded Hands");
export const pinchedFingers = new Emoji("\u{1F90C}\uDD0C", "Pinched Fingers");
export const pinchingHand = new Emoji("\u{1F90F}\uDD0F", "Pinching Hand");
export const signOfTheHorns = new Emoji("\u{1F918}\uDD18", "Sign of the Horns");
export const callMeHand = new Emoji("\u{1F919}\uDD19", "Call Me Hand");
export const raisedBackOfHand = new Emoji("\u{1F91A}\uDD1A", "Raised Back of Hand");
export const leftFacingFist = new Emoji("\u{1F91B}\uDD1B", "Left-Facing Fist");
export const rightFacingFist = new Emoji("\u{1F91C}\uDD1C", "Right-Facing Fist");
export const handshake = new Emoji("\u{1F91D}\uDD1D", "Handshake");
export const crossedFingers = new Emoji("\u{1F91E}\uDD1E", "Crossed Fingers");
export const loveYouGesture = new Emoji("\u{1F91F}\uDD1F", "Love-You Gesture");
export const palmsUpTogether = new Emoji("\u{1F932}\uDD32", "Palms Up Together");
export const indexPointingUp4 = new Emoji("\u261D\uFE0F", "Index Pointing Up 4");
export const raisedFist = new Emoji("\u270A", "Raised Fist");
export const raisedHand = new Emoji("\u270B", "Raised Hand");
export const victoryHand = new Emoji("\u270C\uFE0F", "Victory Hand");
export const writingHand = new Emoji("\u270D\uFE0F", "Writing Hand");
export const redCircle = new Emoji("\u{1F534}\uDD34", "Red Circle");
export const blueCircle = new Emoji("\u{1F535}\uDD35", "Blue Circle");
export const largeOrangeDiamond = new Emoji("\u{1F536}\uDD36", "Large Orange Diamond");
export const largeBlueDiamond = new Emoji("\u{1F537}\uDD37", "Large Blue Diamond");
export const smallOrangeDiamond = new Emoji("\u{1F538}\uDD38", "Small Orange Diamond");
export const smallBlueDiamond = new Emoji("\u{1F539}\uDD39", "Small Blue Diamond");
export const redTrianglePointedUp = new Emoji("\u{1F53A}\uDD3A", "Red Triangle Pointed Up");
export const redTrianglePointedDown = new Emoji("\u{1F53B}\uDD3B", "Red Triangle Pointed Down");
export const orangeCircle = new Emoji("\u{1F7E0}\uDFE0", "Orange Circle");
export const yellowCircle = new Emoji("\u{1F7E1}\uDFE1", "Yellow Circle");
export const greenCircle = new Emoji("\u{1F7E2}\uDFE2", "Green Circle");
export const purpleCircle = new Emoji("\u{1F7E3}\uDFE3", "Purple Circle");
export const brownCircle = new Emoji("\u{1F7E4}\uDFE4", "Brown Circle");
export const hollowRedCircle = new Emoji("\u2B55", "Hollow Red Circle");
export const whiteCircle = new Emoji("\u26AA", "White Circle");
export const blackCircle = new Emoji("\u26AB", "Black Circle");
export const redSquare = new Emoji("\u{1F7E5}\uDFE5", "Red Square");
export const blueSquare = new Emoji("\u{1F7E6}\uDFE6", "Blue Square");
export const orangeSquare = new Emoji("\u{1F7E7}\uDFE7", "Orange Square");
export const yellowSquare = new Emoji("\u{1F7E8}\uDFE8", "Yellow Square");
export const greenSquare = new Emoji("\u{1F7E9}\uDFE9", "Green Square");
export const purpleSquare = new Emoji("\u{1F7EA}\uDFEA", "Purple Square");
export const brownSquare = new Emoji("\u{1F7EB}\uDFEB", "Brown Square");
export const blackSquareButton = new Emoji("\u{1F532}\uDD32", "Black Square Button");
export const whiteSquareButton = new Emoji("\u{1F533}\uDD33", "White Square Button");
export const blackSmallSquare = new Emoji("\u25AA\uFE0F", "Black Small Square");
export const whiteSmallSquare = new Emoji("\u25AB\uFE0F", "White Small Square");
export const whiteMediumSmallSquare = new Emoji("\u25FD", "White Medium-Small Square");
export const blackMediumSmallSquare = new Emoji("\u25FE", "Black Medium-Small Square");
export const whiteMediumSquare = new Emoji("\u25FB\uFE0F", "White Medium Square");
export const blackMediumSquare = new Emoji("\u25FC\uFE0F", "Black Medium Square");
export const blackLargeSquare = new Emoji("\u2B1B", "Black Large Square");
export const whiteLargeSquare = new Emoji("\u2B1C", "White Large Square");
export const star = new Emoji("\u2B50", "Star");
export const diamondWithADot = new Emoji("\u{1F4A0}\uDCA0", "Diamond with a Dot");
export const eye = new Emoji("\u{1F441}\uDC41\uFE0F", "Eye");
export const eyeInSpeechBubble = new Emoji("\u{1F441}\uDC41\uFE0F\u200D\u{1F5E8}\uDDE8\uFE0F", "Eye in Speech Bubble");
export const eyes = new Emoji("\u{1F440}\uDC40", "Eyes");
export const ear = new Emoji("\u{1F442}\uDC42", "Ear");
export const nose = new Emoji("\u{1F443}\uDC43", "Nose");
export const mouth = new Emoji("\u{1F444}\uDC44", "Mouth");
export const tongue = new Emoji("\u{1F445}\uDC45", "Tongue");
export const flexedBiceps = new Emoji("\u{1F4AA}\uDCAA", "Flexed Biceps");
export const selfie = new Emoji("\u{1F933}\uDD33", "Selfie");
export const bone = new Emoji("\u{1F9B4}\uDDB4", "Bone");
export const leg = new Emoji("\u{1F9B5}\uDDB5", "Leg");
export const foot = new Emoji("\u{1F9B6}\uDDB6", "Foot");
export const tooth = new Emoji("\u{1F9B7}\uDDB7", "Tooth");
export const earWithHearingAid = new Emoji("\u{1F9BB}\uDDBB", "Ear with Hearing Aid");
export const mechanicalArm = new Emoji("\u{1F9BE}\uDDBE", "Mechanical Arm");
export const mechanicalLeg = new Emoji("\u{1F9BF}\uDDBF", "Mechanical Leg");
export const anatomicalHeart = new Emoji("\u{1FAC0}\uDEC0", "Anatomical Heart");
export const lungs = new Emoji("\u{1FAC1}\uDEC1", "Lungs");
export const brain = new Emoji("\u{1F9E0}\uDDE0", "Brain");
export const snowflake = new Emoji("\u2744\uFE0F", "Snowflake");
export const rainbow = new Emoji("\u{1F308}\uDF08", "Rainbow");
export const sunriseOverMountains = new Emoji("\u{1F304}\uDF04", "Sunrise Over Mountains");
export const sunrise = new Emoji("\u{1F305}\uDF05", "Sunrise");
export const cityscapeAtDusk = new Emoji("\u{1F306}\uDF06", "Cityscape at Dusk");
export const sunset = new Emoji("\u{1F307}\uDF07", "Sunset");
export const nightWithStars = new Emoji("\u{1F303}\uDF03", "Night with Stars");
export const closedUmbrella = new Emoji("\u{1F302}\uDF02", "Closed Umbrella");
export const umbrella = new Emoji("\u2602\uFE0F", "Umbrella");
export const umbrellaWithRainDrops = new Emoji("\u2614\uFE0F", "Umbrella with Rain Drops");
export const snowman = new Emoji("\u2603\uFE0F", "Snowman");
export const snowmanWithoutSnow = new Emoji("\u26C4", "Snowman Without Snow");
export const sun = new Emoji("\u2600\uFE0F", "Sun");
export const cloud = new Emoji("\u2601\uFE0F", "Cloud");
export const sunBehindSmallCloud = new Emoji("\u{1F324}\uDF24\uFE0F", "Sun Behind Small Cloud");
export const sunBehindCloud = new Emoji("\u26C5", "Sun Behind Cloud");
export const sunBehindLargeCloud = new Emoji("\u{1F325}\uDF25\uFE0F", "Sun Behind Large Cloud");
export const sunBehindRainCloud = new Emoji("\u{1F326}\uDF26\uFE0F", "Sun Behind Rain Cloud");
export const cloudWithRain = new Emoji("\u{1F327}\uDF27\uFE0F", "Cloud with Rain");
export const cloudWithSnow = new Emoji("\u{1F328}\uDF28\uFE0F", "Cloud with Snow");
export const cloudWithLightning = new Emoji("\u{1F329}\uDF29\uFE0F", "Cloud with Lightning");
export const cloudWithLightningAndRain = new Emoji("\u26C8\uFE0F", "Cloud with Lightning and Rain");
export const cyclone = new Emoji("\u{1F300}\uDF00", "Cyclone");
export const tornado = new Emoji("\u{1F32A}\uDF2A\uFE0F", "Tornado");
export const windFace = new Emoji("\u{1F32C}\uDF2C\uFE0F", "Wind Face");
export const waterWave = new Emoji("\u{1F30A}\uDF0A", "Water Wave");
export const fog = new Emoji("\u{1F32B}\uDF2B\uFE0F", "Fog");
export const foggy = new Emoji("\u{1F301}\uDF01", "Foggy");
export const thermometer = new Emoji("\u{1F321}\uDF21\uFE0F", "Thermometer");
export const cat = new Emoji("\u{1F408}\uDC08", "Cat");
export const blackCat = new Emoji("\u{1F408}\uDC08\u200D\u2B1B", "Black Cat");
export const dog = new Emoji("\u{1F415}\uDC15", "Dog");
export const serviceDog = new Emoji("\u{1F415}\uDC15\u200D\u{1F9BA}\uDDBA", "Service Dog");
export const bear = new Emoji("\u{1F43B}\uDC3B", "Bear");
export const polarBear = new Emoji("\u{1F43B}\uDC3B\u200D\u2744\uFE0F", "Polar Bear");
export const rat = new Emoji("\u{1F400}\uDC00", "Rat");
export const mouse = new Emoji("\u{1F401}\uDC01", "Mouse");
export const ox = new Emoji("\u{1F402}\uDC02", "Ox");
export const waterBuffalo = new Emoji("\u{1F403}\uDC03", "Water Buffalo");
export const cow = new Emoji("\u{1F404}\uDC04", "Cow");
export const tiger = new Emoji("\u{1F405}\uDC05", "Tiger");
export const leopard = new Emoji("\u{1F406}\uDC06", "Leopard");
export const rabbit = new Emoji("\u{1F407}\uDC07", "Rabbit");
export const dragon = new Emoji("\u{1F409}\uDC09", "Dragon");
export const crocodile = new Emoji("\u{1F40A}\uDC0A", "Crocodile");
export const whale = new Emoji("\u{1F40B}\uDC0B", "Whale");
export const snail = new Emoji("\u{1F40C}\uDC0C", "Snail");
export const snake = new Emoji("\u{1F40D}\uDC0D", "Snake");
export const horse = new Emoji("\u{1F40E}\uDC0E", "Horse");
export const ram = new Emoji("\u{1F40F}\uDC0F", "Ram");
export const goat = new Emoji("\u{1F410}\uDC10", "Goat");
export const ewe = new Emoji("\u{1F411}\uDC11", "Ewe");
export const monkey = new Emoji("\u{1F412}\uDC12", "Monkey");
export const rooster = new Emoji("\u{1F413}\uDC13", "Rooster");
export const chicken = new Emoji("\u{1F414}\uDC14", "Chicken");
export const pig = new Emoji("\u{1F416}\uDC16", "Pig");
export const boar = new Emoji("\u{1F417}\uDC17", "Boar");
export const elephant = new Emoji("\u{1F418}\uDC18", "Elephant");
export const octopus = new Emoji("\u{1F419}\uDC19", "Octopus");
export const spiralShell = new Emoji("\u{1F41A}\uDC1A", "Spiral Shell");
export const bug = new Emoji("\u{1F41B}\uDC1B", "Bug");
export const ant = new Emoji("\u{1F41C}\uDC1C", "Ant");
export const honeybee = new Emoji("\u{1F41D}\uDC1D", "Honeybee");
export const ladyBeetle = new Emoji("\u{1F41E}\uDC1E", "Lady Beetle");
export const fish = new Emoji("\u{1F41F}\uDC1F", "Fish");
export const tropicalFish = new Emoji("\u{1F420}\uDC20", "Tropical Fish");
export const blowfish = new Emoji("\u{1F421}\uDC21", "Blowfish");
export const turtle = new Emoji("\u{1F422}\uDC22", "Turtle");
export const hatchingChick = new Emoji("\u{1F423}\uDC23", "Hatching Chick");
export const babyChick = new Emoji("\u{1F424}\uDC24", "Baby Chick");
export const frontFacingBabyChick = new Emoji("\u{1F425}\uDC25", "Front-Facing Baby Chick");
export const bird = new Emoji("\u{1F426}\uDC26", "Bird");
export const penguin = new Emoji("\u{1F427}\uDC27", "Penguin");
export const koala = new Emoji("\u{1F428}\uDC28", "Koala");
export const poodle = new Emoji("\u{1F429}\uDC29", "Poodle");
export const camel = new Emoji("\u{1F42A}\uDC2A", "Camel");
export const twoHumpCamel = new Emoji("\u{1F42B}\uDC2B", "Two-Hump Camel");
export const dolphin = new Emoji("\u{1F42C}\uDC2C", "Dolphin");
export const mouseFace = new Emoji("\u{1F42D}\uDC2D", "Mouse Face");
export const cowFace = new Emoji("\u{1F42E}\uDC2E", "Cow Face");
export const tigerFace = new Emoji("\u{1F42F}\uDC2F", "Tiger Face");
export const rabbitFace = new Emoji("\u{1F430}\uDC30", "Rabbit Face");
export const catFace = new Emoji("\u{1F431}\uDC31", "Cat Face");
export const dragonFace = new Emoji("\u{1F432}\uDC32", "Dragon Face");
export const spoutingWhale = new Emoji("\u{1F433}\uDC33", "Spouting Whale");
export const horseFace = new Emoji("\u{1F434}\uDC34", "Horse Face");
export const monkeyFace = new Emoji("\u{1F435}\uDC35", "Monkey Face");
export const dogFace = new Emoji("\u{1F436}\uDC36", "Dog Face");
export const pigFace = new Emoji("\u{1F437}\uDC37", "Pig Face");
export const frog = new Emoji("\u{1F438}\uDC38", "Frog");
export const hamster = new Emoji("\u{1F439}\uDC39", "Hamster");
export const wolf = new Emoji("\u{1F43A}\uDC3A", "Wolf");
export const panda = new Emoji("\u{1F43C}\uDC3C", "Panda");
export const pigNose = new Emoji("\u{1F43D}\uDC3D", "Pig Nose");
export const pawPrints = new Emoji("\u{1F43E}\uDC3E", "Paw Prints");
export const chipmunk = new Emoji("\u{1F43F}\uDC3F\uFE0F", "Chipmunk");
export const dove = new Emoji("\u{1F54A}\uDD4A\uFE0F", "Dove");
export const spider = new Emoji("\u{1F577}\uDD77\uFE0F", "Spider");
export const spiderWeb = new Emoji("\u{1F578}\uDD78\uFE0F", "Spider Web");
export const lion = new Emoji("\u{1F981}\uDD81", "Lion");
export const scorpion = new Emoji("\u{1F982}\uDD82", "Scorpion");
export const turkey = new Emoji("\u{1F983}\uDD83", "Turkey");
export const unicorn = new Emoji("\u{1F984}\uDD84", "Unicorn");
export const eagle = new Emoji("\u{1F985}\uDD85", "Eagle");
export const duck = new Emoji("\u{1F986}\uDD86", "Duck");
export const bat = new Emoji("\u{1F987}\uDD87", "Bat");
export const shark = new Emoji("\u{1F988}\uDD88", "Shark");
export const owl = new Emoji("\u{1F989}\uDD89", "Owl");
export const fox = new Emoji("\u{1F98A}\uDD8A", "Fox");
export const butterfly = new Emoji("\u{1F98B}\uDD8B", "Butterfly");
export const deer = new Emoji("\u{1F98C}\uDD8C", "Deer");
export const gorilla = new Emoji("\u{1F98D}\uDD8D", "Gorilla");
export const lizard = new Emoji("\u{1F98E}\uDD8E", "Lizard");
export const rhinoceros = new Emoji("\u{1F98F}\uDD8F", "Rhinoceros");
export const giraffe = new Emoji("\u{1F992}\uDD92", "Giraffe");
export const zebra = new Emoji("\u{1F993}\uDD93", "Zebra");
export const hedgehog = new Emoji("\u{1F994}\uDD94", "Hedgehog");
export const sauropod = new Emoji("\u{1F995}\uDD95", "Sauropod");
export const tRex = new Emoji("\u{1F996}\uDD96", "T-Rex");
export const cricket = new Emoji("\u{1F997}\uDD97", "Cricket");
export const kangaroo = new Emoji("\u{1F998}\uDD98", "Kangaroo");
export const llama = new Emoji("\u{1F999}\uDD99", "Llama");
export const peacock = new Emoji("\u{1F99A}\uDD9A", "Peacock");
export const hippopotamus = new Emoji("\u{1F99B}\uDD9B", "Hippopotamus");
export const parrot = new Emoji("\u{1F99C}\uDD9C", "Parrot");
export const raccoon = new Emoji("\u{1F99D}\uDD9D", "Raccoon");
export const mosquito = new Emoji("\u{1F99F}\uDD9F", "Mosquito");
export const microbe = new Emoji("\u{1F9A0}\uDDA0", "Microbe");
export const badger = new Emoji("\u{1F9A1}\uDDA1", "Badger");
export const swan = new Emoji("\u{1F9A2}\uDDA2", "Swan");
export const mammoth = new Emoji("\u{1F9A3}\uDDA3", "Mammoth");
export const dodo = new Emoji("\u{1F9A4}\uDDA4", "Dodo");
export const sloth = new Emoji("\u{1F9A5}\uDDA5", "Sloth");
export const otter = new Emoji("\u{1F9A6}\uDDA6", "Otter");
export const orangutan = new Emoji("\u{1F9A7}\uDDA7", "Orangutan");
export const skunk = new Emoji("\u{1F9A8}\uDDA8", "Skunk");
export const flamingo = new Emoji("\u{1F9A9}\uDDA9", "Flamingo");
export const beaver = new Emoji("\u{1F9AB}\uDDAB", "Beaver");
export const bison = new Emoji("\u{1F9AC}\uDDAC", "Bison");
export const seal = new Emoji("\u{1F9AD}\uDDAD", "Seal");
export const fly = new Emoji("\u{1FAB0}\uDEB0", "Fly");
export const worm = new Emoji("\u{1FAB1}\uDEB1", "Worm");
export const beetle = new Emoji("\u{1FAB2}\uDEB2", "Beetle");
export const cockroach = new Emoji("\u{1FAB3}\uDEB3", "Cockroach");
export const feather = new Emoji("\u{1FAB6}\uDEB6", "Feather");
export const guideDog = new Emoji("\u{1F9AE}\uDDAE", "Guide Dog");
export const whiteFlower = new Emoji("\u{1F4AE}\uDCAE", "White Flower");
export const seedling = new Emoji("\u{1F331}\uDF31", "Seedling");
export const evergreenTree = new Emoji("\u{1F332}\uDF32", "Evergreen Tree");
export const deciduousTree = new Emoji("\u{1F333}\uDF33", "Deciduous Tree");
export const palmTree = new Emoji("\u{1F334}\uDF34", "Palm Tree");
export const cactus = new Emoji("\u{1F335}\uDF35", "Cactus");
export const tulip = new Emoji("\u{1F337}\uDF37", "Tulip");
export const cherryBlossom = new Emoji("\u{1F338}\uDF38", "Cherry Blossom");
export const rose = new Emoji("\u{1F339}\uDF39", "Rose");
export const hibiscus = new Emoji("\u{1F33A}\uDF3A", "Hibiscus");
export const sunflower = new Emoji("\u{1F33B}\uDF3B", "Sunflower");
export const blossom = new Emoji("\u{1F33C}\uDF3C", "Blossom");
export const herb = new Emoji("\u{1F33F}\uDF3F", "Herb");
export const fourLeafClover = new Emoji("\u{1F340}\uDF40", "Four Leaf Clover");
export const mapleLeaf = new Emoji("\u{1F341}\uDF41", "Maple Leaf");
export const fallenLeaf = new Emoji("\u{1F342}\uDF42", "Fallen Leaf");
export const leafFlutteringInWind = new Emoji("\u{1F343}\uDF43", "Leaf Fluttering in Wind");
export const rosette = new Emoji("\u{1F3F5}\uDFF5\uFE0F", "Rosette");
export const bouquet = new Emoji("\u{1F490}\uDC90", "Bouquet");
export const wiltedFlower = new Emoji("\u{1F940}\uDD40", "Wilted Flower");
export const pottedPlant = new Emoji("\u{1FAB4}\uDEB4", "Potted Plant");
export const shamrock = new Emoji("\u2618\uFE0F", "Shamrock");
export const banana = new Emoji("\u{1F34C}\uDF4C", "Banana");
export const hotDog = new Emoji("\u{1F32D}\uDF2D", "Hot Dog");
export const taco = new Emoji("\u{1F32E}\uDF2E", "Taco");
export const burrito = new Emoji("\u{1F32F}\uDF2F", "Burrito");
export const chestnut = new Emoji("\u{1F330}\uDF30", "Chestnut");
export const hotPepper = new Emoji("\u{1F336}\uDF36\uFE0F", "Hot Pepper");
export const earOfCorn = new Emoji("\u{1F33D}\uDF3D", "Ear of Corn");
export const mushroom = new Emoji("\u{1F344}\uDF44", "Mushroom");
export const tomato = new Emoji("\u{1F345}\uDF45", "Tomato");
export const eggplant = new Emoji("\u{1F346}\uDF46", "Eggplant");
export const grapes = new Emoji("\u{1F347}\uDF47", "Grapes");
export const melon = new Emoji("\u{1F348}\uDF48", "Melon");
export const watermelon = new Emoji("\u{1F349}\uDF49", "Watermelon");
export const tangerine = new Emoji("\u{1F34A}\uDF4A", "Tangerine");
export const lemon = new Emoji("\u{1F34B}\uDF4B", "Lemon");
export const pineapple = new Emoji("\u{1F34D}\uDF4D", "Pineapple");
export const redApple = new Emoji("\u{1F34E}\uDF4E", "Red Apple");
export const greenApple = new Emoji("\u{1F34F}\uDF4F", "Green Apple");
export const pear = new Emoji("\u{1F350}\uDF50", "Pear");
export const peach = new Emoji("\u{1F351}\uDF51", "Peach");
export const cherries = new Emoji("\u{1F352}\uDF52", "Cherries");
export const strawberry = new Emoji("\u{1F353}\uDF53", "Strawberry");
export const hamburger = new Emoji("\u{1F354}\uDF54", "Hamburger");
export const pizza = new Emoji("\u{1F355}\uDF55", "Pizza");
export const meatOnBone = new Emoji("\u{1F356}\uDF56", "Meat on Bone");
export const poultryLeg = new Emoji("\u{1F357}\uDF57", "Poultry Leg");
export const riceCracker = new Emoji("\u{1F358}\uDF58", "Rice Cracker");
export const riceBall = new Emoji("\u{1F359}\uDF59", "Rice Ball");
export const cookedRice = new Emoji("\u{1F35A}\uDF5A", "Cooked Rice");
export const curryRice = new Emoji("\u{1F35B}\uDF5B", "Curry Rice");
export const steamingBowl = new Emoji("\u{1F35C}\uDF5C", "Steaming Bowl");
export const spaghetti = new Emoji("\u{1F35D}\uDF5D", "Spaghetti");
export const bread = new Emoji("\u{1F35E}\uDF5E", "Bread");
export const frenchFries = new Emoji("\u{1F35F}\uDF5F", "French Fries");
export const roastedSweetPotato = new Emoji("\u{1F360}\uDF60", "Roasted Sweet Potato");
export const dango = new Emoji("\u{1F361}\uDF61", "Dango");
export const oden = new Emoji("\u{1F362}\uDF62", "Oden");
export const sushi = new Emoji("\u{1F363}\uDF63", "Sushi");
export const friedShrimp = new Emoji("\u{1F364}\uDF64", "Fried Shrimp");
export const fishCakeWithSwirl = new Emoji("\u{1F365}\uDF65", "Fish Cake with Swirl");
export const bentoBox = new Emoji("\u{1F371}\uDF71", "Bento Box");
export const potOfFood = new Emoji("\u{1F372}\uDF72", "Pot of Food");
export const popcorn = new Emoji("\u{1F37F}\uDF7F", "Popcorn");
export const croissant = new Emoji("\u{1F950}\uDD50", "Croissant");
export const avocado = new Emoji("\u{1F951}\uDD51", "Avocado");
export const cucumber = new Emoji("\u{1F952}\uDD52", "Cucumber");
export const bacon = new Emoji("\u{1F953}\uDD53", "Bacon");
export const potato = new Emoji("\u{1F954}\uDD54", "Potato");
export const carrot = new Emoji("\u{1F955}\uDD55", "Carrot");
export const baguetteBread = new Emoji("\u{1F956}\uDD56", "Baguette Bread");
export const greenSalad = new Emoji("\u{1F957}\uDD57", "Green Salad");
export const shallowPanOfFood = new Emoji("\u{1F958}\uDD58", "Shallow Pan of Food");
export const stuffedFlatbread = new Emoji("\u{1F959}\uDD59", "Stuffed Flatbread");
export const egg = new Emoji("\u{1F95A}\uDD5A", "Egg");
export const peanuts = new Emoji("\u{1F95C}\uDD5C", "Peanuts");
export const kiwiFruit = new Emoji("\u{1F95D}\uDD5D", "Kiwi Fruit");
export const pancakes = new Emoji("\u{1F95E}\uDD5E", "Pancakes");
export const dumpling = new Emoji("\u{1F95F}\uDD5F", "Dumpling");
export const fortuneCookie = new Emoji("\u{1F960}\uDD60", "Fortune Cookie");
export const takeoutBox = new Emoji("\u{1F961}\uDD61", "Takeout Box");
export const bowlWithSpoon = new Emoji("\u{1F963}\uDD63", "Bowl with Spoon");
export const coconut = new Emoji("\u{1F965}\uDD65", "Coconut");
export const broccoli = new Emoji("\u{1F966}\uDD66", "Broccoli");
export const pretzel = new Emoji("\u{1F968}\uDD68", "Pretzel");
export const cutOfMeat = new Emoji("\u{1F969}\uDD69", "Cut of Meat");
export const sandwich = new Emoji("\u{1F96A}\uDD6A", "Sandwich");
export const cannedFood = new Emoji("\u{1F96B}\uDD6B", "Canned Food");
export const leafyGreen = new Emoji("\u{1F96C}\uDD6C", "Leafy Green");
export const mango = new Emoji("\u{1F96D}\uDD6D", "Mango");
export const moonCake = new Emoji("\u{1F96E}\uDD6E", "Moon Cake");
export const bagel = new Emoji("\u{1F96F}\uDD6F", "Bagel");
export const crab = new Emoji("\u{1F980}\uDD80", "Crab");
export const shrimp = new Emoji("\u{1F990}\uDD90", "Shrimp");
export const squid = new Emoji("\u{1F991}\uDD91", "Squid");
export const lobster = new Emoji("\u{1F99E}\uDD9E", "Lobster");
export const oyster = new Emoji("\u{1F9AA}\uDDAA", "Oyster");
export const cheeseWedge = new Emoji("\u{1F9C0}\uDDC0", "Cheese Wedge");
export const salt = new Emoji("\u{1F9C2}\uDDC2", "Salt");
export const garlic = new Emoji("\u{1F9C4}\uDDC4", "Garlic");
export const onion = new Emoji("\u{1F9C5}\uDDC5", "Onion");
export const falafel = new Emoji("\u{1F9C6}\uDDC6", "Falafel");
export const waffle = new Emoji("\u{1F9C7}\uDDC7", "Waffle");
export const butter = new Emoji("\u{1F9C8}\uDDC8", "Butter");
export const blueberries = new Emoji("\u{1FAD0}\uDED0", "Blueberries");
export const bellPepper = new Emoji("\u{1FAD1}\uDED1", "Bell Pepper");
export const olive = new Emoji("\u{1FAD2}\uDED2", "Olive");
export const flatbread = new Emoji("\u{1FAD3}\uDED3", "Flatbread");
export const tamale = new Emoji("\u{1FAD4}\uDED4", "Tamale");
export const fondue = new Emoji("\u{1FAD5}\uDED5", "Fondue");
export const softIceCream = new Emoji("\u{1F366}\uDF66", "Soft Ice Cream");
export const shavedIce = new Emoji("\u{1F367}\uDF67", "Shaved Ice");
export const iceCream = new Emoji("\u{1F368}\uDF68", "Ice Cream");
export const doughnut = new Emoji("\u{1F369}\uDF69", "Doughnut");
export const cookie = new Emoji("\u{1F36A}\uDF6A", "Cookie");
export const chocolateBar = new Emoji("\u{1F36B}\uDF6B", "Chocolate Bar");
export const candy = new Emoji("\u{1F36C}\uDF6C", "Candy");
export const lollipop = new Emoji("\u{1F36D}\uDF6D", "Lollipop");
export const custard = new Emoji("\u{1F36E}\uDF6E", "Custard");
export const honeyPot = new Emoji("\u{1F36F}\uDF6F", "Honey Pot");
export const shortcake = new Emoji("\u{1F370}\uDF70", "Shortcake");
export const birthdayCake = new Emoji("\u{1F382}\uDF82", "Birthday Cake");
export const pie = new Emoji("\u{1F967}\uDD67", "Pie");
export const cupcake = new Emoji("\u{1F9C1}\uDDC1", "Cupcake");
export const teacupWithoutHandle = new Emoji("\u{1F375}\uDF75", "Teacup Without Handle");
export const sake = new Emoji("\u{1F376}\uDF76", "Sake");
export const wineGlass = new Emoji("\u{1F377}\uDF77", "Wine Glass");
export const cocktailGlass = new Emoji("\u{1F378}\uDF78", "Cocktail Glass");
export const tropicalDrink = new Emoji("\u{1F379}\uDF79", "Tropical Drink");
export const beerMug = new Emoji("\u{1F37A}\uDF7A", "Beer Mug");
export const clinkingBeerMugs = new Emoji("\u{1F37B}\uDF7B", "Clinking Beer Mugs");
export const babyBottle = new Emoji("\u{1F37C}\uDF7C", "Baby Bottle");
export const bottleWithPoppingCork = new Emoji("\u{1F37E}\uDF7E", "Bottle with Popping Cork");
export const clinkingGlasses = new Emoji("\u{1F942}\uDD42", "Clinking Glasses");
export const tumblerGlass = new Emoji("\u{1F943}\uDD43", "Tumbler Glass");
export const glassOfMilk = new Emoji("\u{1F95B}\uDD5B", "Glass of Milk");
export const cupWithStraw = new Emoji("\u{1F964}\uDD64", "Cup with Straw");
export const beverageBox = new Emoji("\u{1F9C3}\uDDC3", "Beverage Box");
export const mate = new Emoji("\u{1F9C9}\uDDC9", "Mate");
export const ice = new Emoji("\u{1F9CA}\uDDCA", "Ice");
export const bubbleTea = new Emoji("\u{1F9CB}\uDDCB", "Bubble Tea");
export const teapot = new Emoji("\u{1FAD6}\uDED6", "Teapot");
export const hotBeverage = new Emoji("\u2615", "Hot Beverage");
export const forkAndKnife = new Emoji("\u{1F374}\uDF74", "Fork and Knife");
export const forkAndKnifeWithPlate = new Emoji("\u{1F37D}\uDF7D\uFE0F", "Fork and Knife with Plate");
export const amphora = new Emoji("\u{1F3FA}\uDFFA", "Amphora");
export const kitchenKnife = new Emoji("\u{1F52A}\uDD2A", "Kitchen Knife");
export const spoon = new Emoji("\u{1F944}\uDD44", "Spoon");
export const chopsticks = new Emoji("\u{1F962}\uDD62", "Chopsticks");
export const flagAscensionIsland = new Emoji("\u{1F1E6}\uDDE6\u{1F1E8}\uDDE8", "Flag: Ascension Island");
export const flagAndorra = new Emoji("\u{1F1E6}\uDDE6\u{1F1E9}\uDDE9", "Flag: Andorra");
export const flagUnitedArabEmirates = new Emoji("\u{1F1E6}\uDDE6\u{1F1EA}\uDDEA", "Flag: United Arab Emirates");
export const flagAfghanistan = new Emoji("\u{1F1E6}\uDDE6\u{1F1EB}\uDDEB", "Flag: Afghanistan");
export const flagAntiguaBarbuda = new Emoji("\u{1F1E6}\uDDE6\u{1F1EC}\uDDEC", "Flag: Antigua & Barbuda");
export const flagAnguilla = new Emoji("\u{1F1E6}\uDDE6\u{1F1EE}\uDDEE", "Flag: Anguilla");
export const flagAlbania = new Emoji("\u{1F1E6}\uDDE6\u{1F1F1}\uDDF1", "Flag: Albania");
export const flagArmenia = new Emoji("\u{1F1E6}\uDDE6\u{1F1F2}\uDDF2", "Flag: Armenia");
export const flagAngola = new Emoji("\u{1F1E6}\uDDE6\u{1F1F4}\uDDF4", "Flag: Angola");
export const flagAntarctica = new Emoji("\u{1F1E6}\uDDE6\u{1F1F6}\uDDF6", "Flag: Antarctica");
export const flagArgentina = new Emoji("\u{1F1E6}\uDDE6\u{1F1F7}\uDDF7", "Flag: Argentina");
export const flagAmericanSamoa = new Emoji("\u{1F1E6}\uDDE6\u{1F1F8}\uDDF8", "Flag: American Samoa");
export const flagAustria = new Emoji("\u{1F1E6}\uDDE6\u{1F1F9}\uDDF9", "Flag: Austria");
export const flagAustralia = new Emoji("\u{1F1E6}\uDDE6\u{1F1FA}\uDDFA", "Flag: Australia");
export const flagAruba = new Emoji("\u{1F1E6}\uDDE6\u{1F1FC}\uDDFC", "Flag: Aruba");
export const flagLandIslands = new Emoji("\u{1F1E6}\uDDE6\u{1F1FD}\uDDFD", "Flag: Åland Islands");
export const flagAzerbaijan = new Emoji("\u{1F1E6}\uDDE6\u{1F1FF}\uDDFF", "Flag: Azerbaijan");
export const flagBosniaHerzegovina = new Emoji("\u{1F1E7}\uDDE7\u{1F1E6}\uDDE6", "Flag: Bosnia & Herzegovina");
export const flagBarbados = new Emoji("\u{1F1E7}\uDDE7\u{1F1E7}\uDDE7", "Flag: Barbados");
export const flagBangladesh = new Emoji("\u{1F1E7}\uDDE7\u{1F1E9}\uDDE9", "Flag: Bangladesh");
export const flagBelgium = new Emoji("\u{1F1E7}\uDDE7\u{1F1EA}\uDDEA", "Flag: Belgium");
export const flagBurkinaFaso = new Emoji("\u{1F1E7}\uDDE7\u{1F1EB}\uDDEB", "Flag: Burkina Faso");
export const flagBulgaria = new Emoji("\u{1F1E7}\uDDE7\u{1F1EC}\uDDEC", "Flag: Bulgaria");
export const flagBahrain = new Emoji("\u{1F1E7}\uDDE7\u{1F1ED}\uDDED", "Flag: Bahrain");
export const flagBurundi = new Emoji("\u{1F1E7}\uDDE7\u{1F1EE}\uDDEE", "Flag: Burundi");
export const flagBenin = new Emoji("\u{1F1E7}\uDDE7\u{1F1EF}\uDDEF", "Flag: Benin");
export const flagStBarthLemy = new Emoji("\u{1F1E7}\uDDE7\u{1F1F1}\uDDF1", "Flag: St. Barthélemy");
export const flagBermuda = new Emoji("\u{1F1E7}\uDDE7\u{1F1F2}\uDDF2", "Flag: Bermuda");
export const flagBrunei = new Emoji("\u{1F1E7}\uDDE7\u{1F1F3}\uDDF3", "Flag: Brunei");
export const flagBolivia = new Emoji("\u{1F1E7}\uDDE7\u{1F1F4}\uDDF4", "Flag: Bolivia");
export const flagCaribbeanNetherlands = new Emoji("\u{1F1E7}\uDDE7\u{1F1F6}\uDDF6", "Flag: Caribbean Netherlands");
export const flagBrazil = new Emoji("\u{1F1E7}\uDDE7\u{1F1F7}\uDDF7", "Flag: Brazil");
export const flagBahamas = new Emoji("\u{1F1E7}\uDDE7\u{1F1F8}\uDDF8", "Flag: Bahamas");
export const flagBhutan = new Emoji("\u{1F1E7}\uDDE7\u{1F1F9}\uDDF9", "Flag: Bhutan");
export const flagBouvetIsland = new Emoji("\u{1F1E7}\uDDE7\u{1F1FB}\uDDFB", "Flag: Bouvet Island");
export const flagBotswana = new Emoji("\u{1F1E7}\uDDE7\u{1F1FC}\uDDFC", "Flag: Botswana");
export const flagBelarus = new Emoji("\u{1F1E7}\uDDE7\u{1F1FE}\uDDFE", "Flag: Belarus");
export const flagBelize = new Emoji("\u{1F1E7}\uDDE7\u{1F1FF}\uDDFF", "Flag: Belize");
export const flagCanada = new Emoji("\u{1F1E8}\uDDE8\u{1F1E6}\uDDE6", "Flag: Canada");
export const flagCocosKeelingIslands = new Emoji("\u{1F1E8}\uDDE8\u{1F1E8}\uDDE8", "Flag: Cocos (Keeling) Islands");
export const flagCongoKinshasa = new Emoji("\u{1F1E8}\uDDE8\u{1F1E9}\uDDE9", "Flag: Congo - Kinshasa");
export const flagCentralAfricanRepublic = new Emoji("\u{1F1E8}\uDDE8\u{1F1EB}\uDDEB", "Flag: Central African Republic");
export const flagCongoBrazzaville = new Emoji("\u{1F1E8}\uDDE8\u{1F1EC}\uDDEC", "Flag: Congo - Brazzaville");
export const flagSwitzerland = new Emoji("\u{1F1E8}\uDDE8\u{1F1ED}\uDDED", "Flag: Switzerland");
export const flagCTeDIvoire = new Emoji("\u{1F1E8}\uDDE8\u{1F1EE}\uDDEE", "Flag: Côte d’Ivoire");
export const flagCookIslands = new Emoji("\u{1F1E8}\uDDE8\u{1F1F0}\uDDF0", "Flag: Cook Islands");
export const flagChile = new Emoji("\u{1F1E8}\uDDE8\u{1F1F1}\uDDF1", "Flag: Chile");
export const flagCameroon = new Emoji("\u{1F1E8}\uDDE8\u{1F1F2}\uDDF2", "Flag: Cameroon");
export const flagChina = new Emoji("\u{1F1E8}\uDDE8\u{1F1F3}\uDDF3", "Flag: China");
export const flagColombia = new Emoji("\u{1F1E8}\uDDE8\u{1F1F4}\uDDF4", "Flag: Colombia");
export const flagClippertonIsland = new Emoji("\u{1F1E8}\uDDE8\u{1F1F5}\uDDF5", "Flag: Clipperton Island");
export const flagCostaRica = new Emoji("\u{1F1E8}\uDDE8\u{1F1F7}\uDDF7", "Flag: Costa Rica");
export const flagCuba = new Emoji("\u{1F1E8}\uDDE8\u{1F1FA}\uDDFA", "Flag: Cuba");
export const flagCapeVerde = new Emoji("\u{1F1E8}\uDDE8\u{1F1FB}\uDDFB", "Flag: Cape Verde");
export const flagCuraAo = new Emoji("\u{1F1E8}\uDDE8\u{1F1FC}\uDDFC", "Flag: Curaçao");
export const flagChristmasIsland = new Emoji("\u{1F1E8}\uDDE8\u{1F1FD}\uDDFD", "Flag: Christmas Island");
export const flagCyprus = new Emoji("\u{1F1E8}\uDDE8\u{1F1FE}\uDDFE", "Flag: Cyprus");
export const flagCzechia = new Emoji("\u{1F1E8}\uDDE8\u{1F1FF}\uDDFF", "Flag: Czechia");
export const flagGermany = new Emoji("\u{1F1E9}\uDDE9\u{1F1EA}\uDDEA", "Flag: Germany");
export const flagDiegoGarcia = new Emoji("\u{1F1E9}\uDDE9\u{1F1EC}\uDDEC", "Flag: Diego Garcia");
export const flagDjibouti = new Emoji("\u{1F1E9}\uDDE9\u{1F1EF}\uDDEF", "Flag: Djibouti");
export const flagDenmark = new Emoji("\u{1F1E9}\uDDE9\u{1F1F0}\uDDF0", "Flag: Denmark");
export const flagDominica = new Emoji("\u{1F1E9}\uDDE9\u{1F1F2}\uDDF2", "Flag: Dominica");
export const flagDominicanRepublic = new Emoji("\u{1F1E9}\uDDE9\u{1F1F4}\uDDF4", "Flag: Dominican Republic");
export const flagAlgeria = new Emoji("\u{1F1E9}\uDDE9\u{1F1FF}\uDDFF", "Flag: Algeria");
export const flagCeutaMelilla = new Emoji("\u{1F1EA}\uDDEA\u{1F1E6}\uDDE6", "Flag: Ceuta & Melilla");
export const flagEcuador = new Emoji("\u{1F1EA}\uDDEA\u{1F1E8}\uDDE8", "Flag: Ecuador");
export const flagEstonia = new Emoji("\u{1F1EA}\uDDEA\u{1F1EA}\uDDEA", "Flag: Estonia");
export const flagEgypt = new Emoji("\u{1F1EA}\uDDEA\u{1F1EC}\uDDEC", "Flag: Egypt");
export const flagWesternSahara = new Emoji("\u{1F1EA}\uDDEA\u{1F1ED}\uDDED", "Flag: Western Sahara");
export const flagEritrea = new Emoji("\u{1F1EA}\uDDEA\u{1F1F7}\uDDF7", "Flag: Eritrea");
export const flagSpain = new Emoji("\u{1F1EA}\uDDEA\u{1F1F8}\uDDF8", "Flag: Spain");
export const flagEthiopia = new Emoji("\u{1F1EA}\uDDEA\u{1F1F9}\uDDF9", "Flag: Ethiopia");
export const flagEuropeanUnion = new Emoji("\u{1F1EA}\uDDEA\u{1F1FA}\uDDFA", "Flag: European Union");
export const flagFinland = new Emoji("\u{1F1EB}\uDDEB\u{1F1EE}\uDDEE", "Flag: Finland");
export const flagFiji = new Emoji("\u{1F1EB}\uDDEB\u{1F1EF}\uDDEF", "Flag: Fiji");
export const flagFalklandIslands = new Emoji("\u{1F1EB}\uDDEB\u{1F1F0}\uDDF0", "Flag: Falkland Islands");
export const flagMicronesia = new Emoji("\u{1F1EB}\uDDEB\u{1F1F2}\uDDF2", "Flag: Micronesia");
export const flagFaroeIslands = new Emoji("\u{1F1EB}\uDDEB\u{1F1F4}\uDDF4", "Flag: Faroe Islands");
export const flagFrance = new Emoji("\u{1F1EB}\uDDEB\u{1F1F7}\uDDF7", "Flag: France");
export const flagGabon = new Emoji("\u{1F1EC}\uDDEC\u{1F1E6}\uDDE6", "Flag: Gabon");
export const flagUnitedKingdom = new Emoji("\u{1F1EC}\uDDEC\u{1F1E7}\uDDE7", "Flag: United Kingdom");
export const flagGrenada = new Emoji("\u{1F1EC}\uDDEC\u{1F1E9}\uDDE9", "Flag: Grenada");
export const flagGeorgia = new Emoji("\u{1F1EC}\uDDEC\u{1F1EA}\uDDEA", "Flag: Georgia");
export const flagFrenchGuiana = new Emoji("\u{1F1EC}\uDDEC\u{1F1EB}\uDDEB", "Flag: French Guiana");
export const flagGuernsey = new Emoji("\u{1F1EC}\uDDEC\u{1F1EC}\uDDEC", "Flag: Guernsey");
export const flagGhana = new Emoji("\u{1F1EC}\uDDEC\u{1F1ED}\uDDED", "Flag: Ghana");
export const flagGibraltar = new Emoji("\u{1F1EC}\uDDEC\u{1F1EE}\uDDEE", "Flag: Gibraltar");
export const flagGreenland = new Emoji("\u{1F1EC}\uDDEC\u{1F1F1}\uDDF1", "Flag: Greenland");
export const flagGambia = new Emoji("\u{1F1EC}\uDDEC\u{1F1F2}\uDDF2", "Flag: Gambia");
export const flagGuinea = new Emoji("\u{1F1EC}\uDDEC\u{1F1F3}\uDDF3", "Flag: Guinea");
export const flagGuadeloupe = new Emoji("\u{1F1EC}\uDDEC\u{1F1F5}\uDDF5", "Flag: Guadeloupe");
export const flagEquatorialGuinea = new Emoji("\u{1F1EC}\uDDEC\u{1F1F6}\uDDF6", "Flag: Equatorial Guinea");
export const flagGreece = new Emoji("\u{1F1EC}\uDDEC\u{1F1F7}\uDDF7", "Flag: Greece");
export const flagSouthGeorgiaSouthSandwichIslands = new Emoji("\u{1F1EC}\uDDEC\u{1F1F8}\uDDF8", "Flag: South Georgia & South Sandwich Islands");
export const flagGuatemala = new Emoji("\u{1F1EC}\uDDEC\u{1F1F9}\uDDF9", "Flag: Guatemala");
export const flagGuam = new Emoji("\u{1F1EC}\uDDEC\u{1F1FA}\uDDFA", "Flag: Guam");
export const flagGuineaBissau = new Emoji("\u{1F1EC}\uDDEC\u{1F1FC}\uDDFC", "Flag: Guinea-Bissau");
export const flagGuyana = new Emoji("\u{1F1EC}\uDDEC\u{1F1FE}\uDDFE", "Flag: Guyana");
export const flagHongKongSARChina = new Emoji("\u{1F1ED}\uDDED\u{1F1F0}\uDDF0", "Flag: Hong Kong SAR China");
export const flagHeardMcDonaldIslands = new Emoji("\u{1F1ED}\uDDED\u{1F1F2}\uDDF2", "Flag: Heard & McDonald Islands");
export const flagHonduras = new Emoji("\u{1F1ED}\uDDED\u{1F1F3}\uDDF3", "Flag: Honduras");
export const flagCroatia = new Emoji("\u{1F1ED}\uDDED\u{1F1F7}\uDDF7", "Flag: Croatia");
export const flagHaiti = new Emoji("\u{1F1ED}\uDDED\u{1F1F9}\uDDF9", "Flag: Haiti");
export const flagHungary = new Emoji("\u{1F1ED}\uDDED\u{1F1FA}\uDDFA", "Flag: Hungary");
export const flagCanaryIslands = new Emoji("\u{1F1EE}\uDDEE\u{1F1E8}\uDDE8", "Flag: Canary Islands");
export const flagIndonesia = new Emoji("\u{1F1EE}\uDDEE\u{1F1E9}\uDDE9", "Flag: Indonesia");
export const flagIreland = new Emoji("\u{1F1EE}\uDDEE\u{1F1EA}\uDDEA", "Flag: Ireland");
export const flagIsrael = new Emoji("\u{1F1EE}\uDDEE\u{1F1F1}\uDDF1", "Flag: Israel");
export const flagIsleOfMan = new Emoji("\u{1F1EE}\uDDEE\u{1F1F2}\uDDF2", "Flag: Isle of Man");
export const flagIndia = new Emoji("\u{1F1EE}\uDDEE\u{1F1F3}\uDDF3", "Flag: India");
export const flagBritishIndianOceanTerritory = new Emoji("\u{1F1EE}\uDDEE\u{1F1F4}\uDDF4", "Flag: British Indian Ocean Territory");
export const flagIraq = new Emoji("\u{1F1EE}\uDDEE\u{1F1F6}\uDDF6", "Flag: Iraq");
export const flagIran = new Emoji("\u{1F1EE}\uDDEE\u{1F1F7}\uDDF7", "Flag: Iran");
export const flagIceland = new Emoji("\u{1F1EE}\uDDEE\u{1F1F8}\uDDF8", "Flag: Iceland");
export const flagItaly = new Emoji("\u{1F1EE}\uDDEE\u{1F1F9}\uDDF9", "Flag: Italy");
export const flagJersey = new Emoji("\u{1F1EF}\uDDEF\u{1F1EA}\uDDEA", "Flag: Jersey");
export const flagJamaica = new Emoji("\u{1F1EF}\uDDEF\u{1F1F2}\uDDF2", "Flag: Jamaica");
export const flagJordan = new Emoji("\u{1F1EF}\uDDEF\u{1F1F4}\uDDF4", "Flag: Jordan");
export const flagJapan = new Emoji("\u{1F1EF}\uDDEF\u{1F1F5}\uDDF5", "Flag: Japan");
export const flagKenya = new Emoji("\u{1F1F0}\uDDF0\u{1F1EA}\uDDEA", "Flag: Kenya");
export const flagKyrgyzstan = new Emoji("\u{1F1F0}\uDDF0\u{1F1EC}\uDDEC", "Flag: Kyrgyzstan");
export const flagCambodia = new Emoji("\u{1F1F0}\uDDF0\u{1F1ED}\uDDED", "Flag: Cambodia");
export const flagKiribati = new Emoji("\u{1F1F0}\uDDF0\u{1F1EE}\uDDEE", "Flag: Kiribati");
export const flagComoros = new Emoji("\u{1F1F0}\uDDF0\u{1F1F2}\uDDF2", "Flag: Comoros");
export const flagStKittsNevis = new Emoji("\u{1F1F0}\uDDF0\u{1F1F3}\uDDF3", "Flag: St. Kitts & Nevis");
export const flagNorthKorea = new Emoji("\u{1F1F0}\uDDF0\u{1F1F5}\uDDF5", "Flag: North Korea");
export const flagSouthKorea = new Emoji("\u{1F1F0}\uDDF0\u{1F1F7}\uDDF7", "Flag: South Korea");
export const flagKuwait = new Emoji("\u{1F1F0}\uDDF0\u{1F1FC}\uDDFC", "Flag: Kuwait");
export const flagCaymanIslands = new Emoji("\u{1F1F0}\uDDF0\u{1F1FE}\uDDFE", "Flag: Cayman Islands");
export const flagKazakhstan = new Emoji("\u{1F1F0}\uDDF0\u{1F1FF}\uDDFF", "Flag: Kazakhstan");
export const flagLaos = new Emoji("\u{1F1F1}\uDDF1\u{1F1E6}\uDDE6", "Flag: Laos");
export const flagLebanon = new Emoji("\u{1F1F1}\uDDF1\u{1F1E7}\uDDE7", "Flag: Lebanon");
export const flagStLucia = new Emoji("\u{1F1F1}\uDDF1\u{1F1E8}\uDDE8", "Flag: St. Lucia");
export const flagLiechtenstein = new Emoji("\u{1F1F1}\uDDF1\u{1F1EE}\uDDEE", "Flag: Liechtenstein");
export const flagSriLanka = new Emoji("\u{1F1F1}\uDDF1\u{1F1F0}\uDDF0", "Flag: Sri Lanka");
export const flagLiberia = new Emoji("\u{1F1F1}\uDDF1\u{1F1F7}\uDDF7", "Flag: Liberia");
export const flagLesotho = new Emoji("\u{1F1F1}\uDDF1\u{1F1F8}\uDDF8", "Flag: Lesotho");
export const flagLithuania = new Emoji("\u{1F1F1}\uDDF1\u{1F1F9}\uDDF9", "Flag: Lithuania");
export const flagLuxembourg = new Emoji("\u{1F1F1}\uDDF1\u{1F1FA}\uDDFA", "Flag: Luxembourg");
export const flagLatvia = new Emoji("\u{1F1F1}\uDDF1\u{1F1FB}\uDDFB", "Flag: Latvia");
export const flagLibya = new Emoji("\u{1F1F1}\uDDF1\u{1F1FE}\uDDFE", "Flag: Libya");
export const flagMorocco = new Emoji("\u{1F1F2}\uDDF2\u{1F1E6}\uDDE6", "Flag: Morocco");
export const flagMonaco = new Emoji("\u{1F1F2}\uDDF2\u{1F1E8}\uDDE8", "Flag: Monaco");
export const flagMoldova = new Emoji("\u{1F1F2}\uDDF2\u{1F1E9}\uDDE9", "Flag: Moldova");
export const flagMontenegro = new Emoji("\u{1F1F2}\uDDF2\u{1F1EA}\uDDEA", "Flag: Montenegro");
export const flagStMartin = new Emoji("\u{1F1F2}\uDDF2\u{1F1EB}\uDDEB", "Flag: St. Martin");
export const flagMadagascar = new Emoji("\u{1F1F2}\uDDF2\u{1F1EC}\uDDEC", "Flag: Madagascar");
export const flagMarshallIslands = new Emoji("\u{1F1F2}\uDDF2\u{1F1ED}\uDDED", "Flag: Marshall Islands");
export const flagNorthMacedonia = new Emoji("\u{1F1F2}\uDDF2\u{1F1F0}\uDDF0", "Flag: North Macedonia");
export const flagMali = new Emoji("\u{1F1F2}\uDDF2\u{1F1F1}\uDDF1", "Flag: Mali");
export const flagMyanmarBurma = new Emoji("\u{1F1F2}\uDDF2\u{1F1F2}\uDDF2", "Flag: Myanmar (Burma)");
export const flagMongolia = new Emoji("\u{1F1F2}\uDDF2\u{1F1F3}\uDDF3", "Flag: Mongolia");
export const flagMacaoSarChina = new Emoji("\u{1F1F2}\uDDF2\u{1F1F4}\uDDF4", "Flag: Macao Sar China");
export const flagNorthernMarianaIslands = new Emoji("\u{1F1F2}\uDDF2\u{1F1F5}\uDDF5", "Flag: Northern Mariana Islands");
export const flagMartinique = new Emoji("\u{1F1F2}\uDDF2\u{1F1F6}\uDDF6", "Flag: Martinique");
export const flagMauritania = new Emoji("\u{1F1F2}\uDDF2\u{1F1F7}\uDDF7", "Flag: Mauritania");
export const flagMontserrat = new Emoji("\u{1F1F2}\uDDF2\u{1F1F8}\uDDF8", "Flag: Montserrat");
export const flagMalta = new Emoji("\u{1F1F2}\uDDF2\u{1F1F9}\uDDF9", "Flag: Malta");
export const flagMauritius = new Emoji("\u{1F1F2}\uDDF2\u{1F1FA}\uDDFA", "Flag: Mauritius");
export const flagMaldives = new Emoji("\u{1F1F2}\uDDF2\u{1F1FB}\uDDFB", "Flag: Maldives");
export const flagMalawi = new Emoji("\u{1F1F2}\uDDF2\u{1F1FC}\uDDFC", "Flag: Malawi");
export const flagMexico = new Emoji("\u{1F1F2}\uDDF2\u{1F1FD}\uDDFD", "Flag: Mexico");
export const flagMalaysia = new Emoji("\u{1F1F2}\uDDF2\u{1F1FE}\uDDFE", "Flag: Malaysia");
export const flagMozambique = new Emoji("\u{1F1F2}\uDDF2\u{1F1FF}\uDDFF", "Flag: Mozambique");
export const flagNamibia = new Emoji("\u{1F1F3}\uDDF3\u{1F1E6}\uDDE6", "Flag: Namibia");
export const flagNewCaledonia = new Emoji("\u{1F1F3}\uDDF3\u{1F1E8}\uDDE8", "Flag: New Caledonia");
export const flagNiger = new Emoji("\u{1F1F3}\uDDF3\u{1F1EA}\uDDEA", "Flag: Niger");
export const flagNorfolkIsland = new Emoji("\u{1F1F3}\uDDF3\u{1F1EB}\uDDEB", "Flag: Norfolk Island");
export const flagNigeria = new Emoji("\u{1F1F3}\uDDF3\u{1F1EC}\uDDEC", "Flag: Nigeria");
export const flagNicaragua = new Emoji("\u{1F1F3}\uDDF3\u{1F1EE}\uDDEE", "Flag: Nicaragua");
export const flagNetherlands = new Emoji("\u{1F1F3}\uDDF3\u{1F1F1}\uDDF1", "Flag: Netherlands");
export const flagNorway = new Emoji("\u{1F1F3}\uDDF3\u{1F1F4}\uDDF4", "Flag: Norway");
export const flagNepal = new Emoji("\u{1F1F3}\uDDF3\u{1F1F5}\uDDF5", "Flag: Nepal");
export const flagNauru = new Emoji("\u{1F1F3}\uDDF3\u{1F1F7}\uDDF7", "Flag: Nauru");
export const flagNiue = new Emoji("\u{1F1F3}\uDDF3\u{1F1FA}\uDDFA", "Flag: Niue");
export const flagNewZealand = new Emoji("\u{1F1F3}\uDDF3\u{1F1FF}\uDDFF", "Flag: New Zealand");
export const flagOman = new Emoji("\u{1F1F4}\uDDF4\u{1F1F2}\uDDF2", "Flag: Oman");
export const flagPanama = new Emoji("\u{1F1F5}\uDDF5\u{1F1E6}\uDDE6", "Flag: Panama");
export const flagPeru = new Emoji("\u{1F1F5}\uDDF5\u{1F1EA}\uDDEA", "Flag: Peru");
export const flagFrenchPolynesia = new Emoji("\u{1F1F5}\uDDF5\u{1F1EB}\uDDEB", "Flag: French Polynesia");
export const flagPapuaNewGuinea = new Emoji("\u{1F1F5}\uDDF5\u{1F1EC}\uDDEC", "Flag: Papua New Guinea");
export const flagPhilippines = new Emoji("\u{1F1F5}\uDDF5\u{1F1ED}\uDDED", "Flag: Philippines");
export const flagPakistan = new Emoji("\u{1F1F5}\uDDF5\u{1F1F0}\uDDF0", "Flag: Pakistan");
export const flagPoland = new Emoji("\u{1F1F5}\uDDF5\u{1F1F1}\uDDF1", "Flag: Poland");
export const flagStPierreMiquelon = new Emoji("\u{1F1F5}\uDDF5\u{1F1F2}\uDDF2", "Flag: St. Pierre & Miquelon");
export const flagPitcairnIslands = new Emoji("\u{1F1F5}\uDDF5\u{1F1F3}\uDDF3", "Flag: Pitcairn Islands");
export const flagPuertoRico = new Emoji("\u{1F1F5}\uDDF5\u{1F1F7}\uDDF7", "Flag: Puerto Rico");
export const flagPalestinianTerritories = new Emoji("\u{1F1F5}\uDDF5\u{1F1F8}\uDDF8", "Flag: Palestinian Territories");
export const flagPortugal = new Emoji("\u{1F1F5}\uDDF5\u{1F1F9}\uDDF9", "Flag: Portugal");
export const flagPalau = new Emoji("\u{1F1F5}\uDDF5\u{1F1FC}\uDDFC", "Flag: Palau");
export const flagParaguay = new Emoji("\u{1F1F5}\uDDF5\u{1F1FE}\uDDFE", "Flag: Paraguay");
export const flagQatar = new Emoji("\u{1F1F6}\uDDF6\u{1F1E6}\uDDE6", "Flag: Qatar");
export const flagRUnion = new Emoji("\u{1F1F7}\uDDF7\u{1F1EA}\uDDEA", "Flag: Réunion");
export const flagRomania = new Emoji("\u{1F1F7}\uDDF7\u{1F1F4}\uDDF4", "Flag: Romania");
export const flagSerbia = new Emoji("\u{1F1F7}\uDDF7\u{1F1F8}\uDDF8", "Flag: Serbia");
export const flagRussia = new Emoji("\u{1F1F7}\uDDF7\u{1F1FA}\uDDFA", "Flag: Russia");
export const flagRwanda = new Emoji("\u{1F1F7}\uDDF7\u{1F1FC}\uDDFC", "Flag: Rwanda");
export const flagSaudiArabia = new Emoji("\u{1F1F8}\uDDF8\u{1F1E6}\uDDE6", "Flag: Saudi Arabia");
export const flagSolomonIslands = new Emoji("\u{1F1F8}\uDDF8\u{1F1E7}\uDDE7", "Flag: Solomon Islands");
export const flagSeychelles = new Emoji("\u{1F1F8}\uDDF8\u{1F1E8}\uDDE8", "Flag: Seychelles");
export const flagSudan = new Emoji("\u{1F1F8}\uDDF8\u{1F1E9}\uDDE9", "Flag: Sudan");
export const flagSweden = new Emoji("\u{1F1F8}\uDDF8\u{1F1EA}\uDDEA", "Flag: Sweden");
export const flagSingapore = new Emoji("\u{1F1F8}\uDDF8\u{1F1EC}\uDDEC", "Flag: Singapore");
export const flagStHelena = new Emoji("\u{1F1F8}\uDDF8\u{1F1ED}\uDDED", "Flag: St. Helena");
export const flagSlovenia = new Emoji("\u{1F1F8}\uDDF8\u{1F1EE}\uDDEE", "Flag: Slovenia");
export const flagSvalbardJanMayen = new Emoji("\u{1F1F8}\uDDF8\u{1F1EF}\uDDEF", "Flag: Svalbard & Jan Mayen");
export const flagSlovakia = new Emoji("\u{1F1F8}\uDDF8\u{1F1F0}\uDDF0", "Flag: Slovakia");
export const flagSierraLeone = new Emoji("\u{1F1F8}\uDDF8\u{1F1F1}\uDDF1", "Flag: Sierra Leone");
export const flagSanMarino = new Emoji("\u{1F1F8}\uDDF8\u{1F1F2}\uDDF2", "Flag: San Marino");
export const flagSenegal = new Emoji("\u{1F1F8}\uDDF8\u{1F1F3}\uDDF3", "Flag: Senegal");
export const flagSomalia = new Emoji("\u{1F1F8}\uDDF8\u{1F1F4}\uDDF4", "Flag: Somalia");
export const flagSuriname = new Emoji("\u{1F1F8}\uDDF8\u{1F1F7}\uDDF7", "Flag: Suriname");
export const flagSouthSudan = new Emoji("\u{1F1F8}\uDDF8\u{1F1F8}\uDDF8", "Flag: South Sudan");
export const flagSOTomPrNcipe = new Emoji("\u{1F1F8}\uDDF8\u{1F1F9}\uDDF9", "Flag: São Tomé & Príncipe");
export const flagElSalvador = new Emoji("\u{1F1F8}\uDDF8\u{1F1FB}\uDDFB", "Flag: El Salvador");
export const flagSintMaarten = new Emoji("\u{1F1F8}\uDDF8\u{1F1FD}\uDDFD", "Flag: Sint Maarten");
export const flagSyria = new Emoji("\u{1F1F8}\uDDF8\u{1F1FE}\uDDFE", "Flag: Syria");
export const flagEswatini = new Emoji("\u{1F1F8}\uDDF8\u{1F1FF}\uDDFF", "Flag: Eswatini");
export const flagTristanDaCunha = new Emoji("\u{1F1F9}\uDDF9\u{1F1E6}\uDDE6", "Flag: Tristan Da Cunha");
export const flagTurksCaicosIslands = new Emoji("\u{1F1F9}\uDDF9\u{1F1E8}\uDDE8", "Flag: Turks & Caicos Islands");
export const flagChad = new Emoji("\u{1F1F9}\uDDF9\u{1F1E9}\uDDE9", "Flag: Chad");
export const flagFrenchSouthernTerritories = new Emoji("\u{1F1F9}\uDDF9\u{1F1EB}\uDDEB", "Flag: French Southern Territories");
export const flagTogo = new Emoji("\u{1F1F9}\uDDF9\u{1F1EC}\uDDEC", "Flag: Togo");
export const flagThailand = new Emoji("\u{1F1F9}\uDDF9\u{1F1ED}\uDDED", "Flag: Thailand");
export const flagTajikistan = new Emoji("\u{1F1F9}\uDDF9\u{1F1EF}\uDDEF", "Flag: Tajikistan");
export const flagTokelau = new Emoji("\u{1F1F9}\uDDF9\u{1F1F0}\uDDF0", "Flag: Tokelau");
export const flagTimorLeste = new Emoji("\u{1F1F9}\uDDF9\u{1F1F1}\uDDF1", "Flag: Timor-Leste");
export const flagTurkmenistan = new Emoji("\u{1F1F9}\uDDF9\u{1F1F2}\uDDF2", "Flag: Turkmenistan");
export const flagTunisia = new Emoji("\u{1F1F9}\uDDF9\u{1F1F3}\uDDF3", "Flag: Tunisia");
export const flagTonga = new Emoji("\u{1F1F9}\uDDF9\u{1F1F4}\uDDF4", "Flag: Tonga");
export const flagTurkey = new Emoji("\u{1F1F9}\uDDF9\u{1F1F7}\uDDF7", "Flag: Turkey");
export const flagTrinidadTobago = new Emoji("\u{1F1F9}\uDDF9\u{1F1F9}\uDDF9", "Flag: Trinidad & Tobago");
export const flagTuvalu = new Emoji("\u{1F1F9}\uDDF9\u{1F1FB}\uDDFB", "Flag: Tuvalu");
export const flagTaiwan = new Emoji("\u{1F1F9}\uDDF9\u{1F1FC}\uDDFC", "Flag: Taiwan");
export const flagTanzania = new Emoji("\u{1F1F9}\uDDF9\u{1F1FF}\uDDFF", "Flag: Tanzania");
export const flagUkraine = new Emoji("\u{1F1FA}\uDDFA\u{1F1E6}\uDDE6", "Flag: Ukraine");
export const flagUganda = new Emoji("\u{1F1FA}\uDDFA\u{1F1EC}\uDDEC", "Flag: Uganda");
export const flagUSOutlyingIslands = new Emoji("\u{1F1FA}\uDDFA\u{1F1F2}\uDDF2", "Flag: U.S. Outlying Islands");
export const flagUnitedNations = new Emoji("\u{1F1FA}\uDDFA\u{1F1F3}\uDDF3", "Flag: United Nations");
export const flagUnitedStates = new Emoji("\u{1F1FA}\uDDFA\u{1F1F8}\uDDF8", "Flag: United States");
export const flagUruguay = new Emoji("\u{1F1FA}\uDDFA\u{1F1FE}\uDDFE", "Flag: Uruguay");
export const flagUzbekistan = new Emoji("\u{1F1FA}\uDDFA\u{1F1FF}\uDDFF", "Flag: Uzbekistan");
export const flagVaticanCity = new Emoji("\u{1F1FB}\uDDFB\u{1F1E6}\uDDE6", "Flag: Vatican City");
export const flagStVincentGrenadines = new Emoji("\u{1F1FB}\uDDFB\u{1F1E8}\uDDE8", "Flag: St. Vincent & Grenadines");
export const flagVenezuela = new Emoji("\u{1F1FB}\uDDFB\u{1F1EA}\uDDEA", "Flag: Venezuela");
export const flagBritishVirginIslands = new Emoji("\u{1F1FB}\uDDFB\u{1F1EC}\uDDEC", "Flag: British Virgin Islands");
export const flagUSVirginIslands = new Emoji("\u{1F1FB}\uDDFB\u{1F1EE}\uDDEE", "Flag: U.S. Virgin Islands");
export const flagVietnam = new Emoji("\u{1F1FB}\uDDFB\u{1F1F3}\uDDF3", "Flag: Vietnam");
export const flagVanuatu = new Emoji("\u{1F1FB}\uDDFB\u{1F1FA}\uDDFA", "Flag: Vanuatu");
export const flagWallisFutuna = new Emoji("\u{1F1FC}\uDDFC\u{1F1EB}\uDDEB", "Flag: Wallis & Futuna");
export const flagSamoa = new Emoji("\u{1F1FC}\uDDFC\u{1F1F8}\uDDF8", "Flag: Samoa");
export const flagKosovo = new Emoji("\u{1F1FD}\uDDFD\u{1F1F0}\uDDF0", "Flag: Kosovo");
export const flagYemen = new Emoji("\u{1F1FE}\uDDFE\u{1F1EA}\uDDEA", "Flag: Yemen");
export const flagMayotte = new Emoji("\u{1F1FE}\uDDFE\u{1F1F9}\uDDF9", "Flag: Mayotte");
export const flagSouthAfrica = new Emoji("\u{1F1FF}\uDDFF\u{1F1E6}\uDDE6", "Flag: South Africa");
export const flagZambia = new Emoji("\u{1F1FF}\uDDFF\u{1F1F2}\uDDF2", "Flag: Zambia");
export const flagZimbabwe = new Emoji("\u{1F1FF}\uDDFF\u{1F1FC}\uDDFC", "Flag: Zimbabwe");
export const whiteFlag = new Emoji("\u{1F3F3}\uDFF3\uFE0F", "White Flag");
export const rainbowFlag = new Emoji("\u{1F3F3}\uDFF3\uFE0F\u200D\u{1F308}\uDF08", "Rainbow Flag");
export const transgenderFlag = new Emoji("\u{1F3F3}\uDFF3\uFE0F\u200D\u26A7\uFE0F", "Transgender Flag");
export const blackFlag = new Emoji("\u{1F3F4}\uDFF4", "Black Flag");
export const pirateFlag = new Emoji("\u{1F3F4}\uDFF4\u200D\u2620\uFE0F", "Pirate Flag");
export const crossedFlags = new Emoji("\u{1F38C}\uDF8C", "Crossed Flags");
export const chequeredFlag = new Emoji("\u{1F3C1}\uDFC1", "Chequered Flag");
export const flagEngland = new Emoji("\u{1F3F4}\uDFF4\u{E0067}\uDC67\u{E0062}\uDC62\u{E0065}\uDC65\u{E006E}\uDC6E\u{E0067}\uDC67\u{E007F}\uDC7F", "Flag: England");
export const flagScotland = new Emoji("\u{1F3F4}\uDFF4\u{E0067}\uDC67\u{E0062}\uDC62\u{E0073}\uDC73\u{E0063}\uDC63\u{E0074}\uDC74\u{E007F}\uDC7F", "Flag: Scotland");
export const flagWales = new Emoji("\u{1F3F4}\uDFF4\u{E0067}\uDC67\u{E0062}\uDC62\u{E0077}\uDC77\u{E006C}\uDC6C\u{E0073}\uDC73\u{E007F}\uDC7F", "Flag: Wales");
export const triangularFlag = new Emoji("\u{1F6A9}\uDEA9", "Triangular Flag");
export const motorcycle = new Emoji("\u{1F3CD}\uDFCD\uFE0F", "Motorcycle");
export const racingCar = new Emoji("\u{1F3CE}\uDFCE\uFE0F", "Racing Car");
export const seat = new Emoji("\u{1F4BA}\uDCBA", "Seat");
export const helicopter = new Emoji("\u{1F681}\uDE81", "Helicopter");
export const locomotive = new Emoji("\u{1F682}\uDE82", "Locomotive");
export const railwayCar = new Emoji("\u{1F683}\uDE83", "Railway Car");
export const highSpeedTrain = new Emoji("\u{1F684}\uDE84", "High-Speed Train");
export const bulletTrain = new Emoji("\u{1F685}\uDE85", "Bullet Train");
export const train = new Emoji("\u{1F686}\uDE86", "Train");
export const metro = new Emoji("\u{1F687}\uDE87", "Metro");
export const lightRail = new Emoji("\u{1F688}\uDE88", "Light Rail");
export const station = new Emoji("\u{1F689}\uDE89", "Station");
export const tram = new Emoji("\u{1F68A}\uDE8A", "Tram");
export const tramCar = new Emoji("\u{1F68B}\uDE8B", "Tram Car");
export const bus = new Emoji("\u{1F68C}\uDE8C", "Bus");
export const oncomingBus = new Emoji("\u{1F68D}\uDE8D", "Oncoming Bus");
export const trolleybus = new Emoji("\u{1F68E}\uDE8E", "Trolleybus");
export const busStop = new Emoji("\u{1F68F}\uDE8F", "Bus Stop");
export const minibus = new Emoji("\u{1F690}\uDE90", "Minibus");
export const ambulance = new Emoji("\u{1F691}\uDE91", "Ambulance");
export const policeCar = new Emoji("\u{1F693}\uDE93", "Police Car");
export const oncomingPoliceCar = new Emoji("\u{1F694}\uDE94", "Oncoming Police Car");
export const taxi = new Emoji("\u{1F695}\uDE95", "Taxi");
export const oncomingTaxi = new Emoji("\u{1F696}\uDE96", "Oncoming Taxi");
export const automobile = new Emoji("\u{1F697}\uDE97", "Automobile");
export const oncomingAutomobile = new Emoji("\u{1F698}\uDE98", "Oncoming Automobile");
export const sportUtilityVehicle = new Emoji("\u{1F699}\uDE99", "Sport Utility Vehicle");
export const deliveryTruck = new Emoji("\u{1F69A}\uDE9A", "Delivery Truck");
export const articulatedLorry = new Emoji("\u{1F69B}\uDE9B", "Articulated Lorry");
export const tractor = new Emoji("\u{1F69C}\uDE9C", "Tractor");
export const monorail = new Emoji("\u{1F69D}\uDE9D", "Monorail");
export const mountainRailway = new Emoji("\u{1F69E}\uDE9E", "Mountain Railway");
export const suspensionRailway = new Emoji("\u{1F69F}\uDE9F", "Suspension Railway");
export const mountainCableway = new Emoji("\u{1F6A0}\uDEA0", "Mountain Cableway");
export const aerialTramway = new Emoji("\u{1F6A1}\uDEA1", "Aerial Tramway");
export const ship = new Emoji("\u{1F6A2}\uDEA2", "Ship");
export const speedboat = new Emoji("\u{1F6A4}\uDEA4", "Speedboat");
export const horizontalTrafficLight = new Emoji("\u{1F6A5}\uDEA5", "Horizontal Traffic Light");
export const verticalTrafficLight = new Emoji("\u{1F6A6}\uDEA6", "Vertical Traffic Light");
export const construction = new Emoji("\u{1F6A7}\uDEA7", "Construction");
export const policeCarLight = new Emoji("\u{1F6A8}\uDEA8", "Police Car Light");
export const bicycle = new Emoji("\u{1F6B2}\uDEB2", "Bicycle");
export const stopSign = new Emoji("\u{1F6D1}\uDED1", "Stop Sign");
export const oilDrum = new Emoji("\u{1F6E2}\uDEE2\uFE0F", "Oil Drum");
export const motorway = new Emoji("\u{1F6E3}\uDEE3\uFE0F", "Motorway");
export const railwayTrack = new Emoji("\u{1F6E4}\uDEE4\uFE0F", "Railway Track");
export const motorBoat = new Emoji("\u{1F6E5}\uDEE5\uFE0F", "Motor Boat");
export const smallAirplane = new Emoji("\u{1F6E9}\uDEE9\uFE0F", "Small Airplane");
export const airplaneDeparture = new Emoji("\u{1F6EB}\uDEEB", "Airplane Departure");
export const airplaneArrival = new Emoji("\u{1F6EC}\uDEEC", "Airplane Arrival");
export const satellite = new Emoji("\u{1F6F0}\uDEF0\uFE0F", "Satellite");
export const passengerShip = new Emoji("\u{1F6F3}\uDEF3\uFE0F", "Passenger Ship");
export const kickScooter = new Emoji("\u{1F6F4}\uDEF4", "Kick Scooter");
export const motorScooter = new Emoji("\u{1F6F5}\uDEF5", "Motor Scooter");
export const canoe = new Emoji("\u{1F6F6}\uDEF6", "Canoe");
export const flyingSaucer = new Emoji("\u{1F6F8}\uDEF8", "Flying Saucer");
export const skateboard = new Emoji("\u{1F6F9}\uDEF9", "Skateboard");
export const autoRickshaw = new Emoji("\u{1F6FA}\uDEFA", "Auto Rickshaw");
export const pickupTruck = new Emoji("\u{1F6FB}\uDEFB", "Pickup Truck");
export const rollerSkate = new Emoji("\u{1F6FC}\uDEFC", "Roller Skate");
export const parachute = new Emoji("\u{1FA82}\uDE82", "Parachute");
export const anchor = new Emoji("\u2693", "Anchor");
export const ferry = new Emoji("\u26F4\uFE0F", "Ferry");
export const sailboat = new Emoji("\u26F5", "Sailboat");
export const fuelPump = new Emoji("\u26FD", "Fuel Pump");
export const aButtonBloodType = new Emoji("\u{1F170}\uDD70", "A Button (Blood Type)");
export const bButtonBloodType = new Emoji("\u{1F171}\uDD71", "B Button (Blood Type)");
export const oButtonBloodType = new Emoji("\u{1F17E}\uDD7E", "O Button (Blood Type)");
export const aBButtonBloodType = new Emoji("\u{1F18E}\uDD8E", "AB Button (Blood Type)");
export const regionalIndicatorSymbolLetterA = new Emoji("\u{1F1E6}\uDDE6", "Regional Indicator Symbol Letter A");
export const regionalIndicatorSymbolLetterB = new Emoji("\u{1F1E7}\uDDE7", "Regional Indicator Symbol Letter B");
export const regionalIndicatorSymbolLetterC = new Emoji("\u{1F1E8}\uDDE8", "Regional Indicator Symbol Letter C");
export const regionalIndicatorSymbolLetterD = new Emoji("\u{1F1E9}\uDDE9", "Regional Indicator Symbol Letter D");
export const regionalIndicatorSymbolLetterE = new Emoji("\u{1F1EA}\uDDEA", "Regional Indicator Symbol Letter E");
export const regionalIndicatorSymbolLetterF = new Emoji("\u{1F1EB}\uDDEB", "Regional Indicator Symbol Letter F");
export const regionalIndicatorSymbolLetterG = new Emoji("\u{1F1EC}\uDDEC", "Regional Indicator Symbol Letter G");
export const regionalIndicatorSymbolLetterH = new Emoji("\u{1F1ED}\uDDED", "Regional Indicator Symbol Letter H");
export const regionalIndicatorSymbolLetterI = new Emoji("\u{1F1EE}\uDDEE", "Regional Indicator Symbol Letter I");
export const regionalIndicatorSymbolLetterJ = new Emoji("\u{1F1EF}\uDDEF", "Regional Indicator Symbol Letter J");
export const regionalIndicatorSymbolLetterK = new Emoji("\u{1F1F0}\uDDF0", "Regional Indicator Symbol Letter K");
export const regionalIndicatorSymbolLetterL = new Emoji("\u{1F1F1}\uDDF1", "Regional Indicator Symbol Letter L");
export const regionalIndicatorSymbolLetterM = new Emoji("\u{1F1F2}\uDDF2", "Regional Indicator Symbol Letter M");
export const regionalIndicatorSymbolLetterN = new Emoji("\u{1F1F3}\uDDF3", "Regional Indicator Symbol Letter N");
export const regionalIndicatorSymbolLetterO = new Emoji("\u{1F1F4}\uDDF4", "Regional Indicator Symbol Letter O");
export const regionalIndicatorSymbolLetterP = new Emoji("\u{1F1F5}\uDDF5", "Regional Indicator Symbol Letter P");
export const regionalIndicatorSymbolLetterQ = new Emoji("\u{1F1F6}\uDDF6", "Regional Indicator Symbol Letter Q");
export const regionalIndicatorSymbolLetterR = new Emoji("\u{1F1F7}\uDDF7", "Regional Indicator Symbol Letter R");
export const regionalIndicatorSymbolLetterS = new Emoji("\u{1F1F8}\uDDF8", "Regional Indicator Symbol Letter S");
export const regionalIndicatorSymbolLetterT = new Emoji("\u{1F1F9}\uDDF9", "Regional Indicator Symbol Letter T");
export const regionalIndicatorSymbolLetterU = new Emoji("\u{1F1FA}\uDDFA", "Regional Indicator Symbol Letter U");
export const regionalIndicatorSymbolLetterV = new Emoji("\u{1F1FB}\uDDFB", "Regional Indicator Symbol Letter V");
export const regionalIndicatorSymbolLetterW = new Emoji("\u{1F1FC}\uDDFC", "Regional Indicator Symbol Letter W");
export const regionalIndicatorSymbolLetterX = new Emoji("\u{1F1FD}\uDDFD", "Regional Indicator Symbol Letter X");
export const regionalIndicatorSymbolLetterY = new Emoji("\u{1F1FE}\uDDFE", "Regional Indicator Symbol Letter Y");
export const regionalIndicatorSymbolLetterZ = new Emoji("\u{1F1FF}\uDDFF", "Regional Indicator Symbol Letter Z");
export const japaneseSymbolForBeginner = new Emoji("\u{1F530}\uDD30", "Japanese Symbol for Beginner");
export const japaneseHereButton = new Emoji("\u{1F201}\uDE01", "Japanese “Here” Button");
export const japaneseServiceChargeButton = new Emoji("\u{1F202}\uDE02\uFE0F", "Japanese “Service Charge” Button");
export const japaneseFreeOfChargeButton = new Emoji("\u{1F21A}\uDE1A", "Japanese “Free of Charge” Button");
export const japaneseReservedButton = new Emoji("\u{1F22F}\uDE2F", "Japanese “Reserved” Button");
export const japaneseProhibitedButton = new Emoji("\u{1F232}\uDE32", "Japanese “Prohibited” Button");
export const japaneseVacancyButton = new Emoji("\u{1F233}\uDE33", "Japanese “Vacancy” Button");
export const japanesePassingGradeButton = new Emoji("\u{1F234}\uDE34", "Japanese “Passing Grade” Button");
export const japaneseNoVacancyButton = new Emoji("\u{1F235}\uDE35", "Japanese “No Vacancy” Button");
export const japaneseNotFreeOfChargeButton = new Emoji("\u{1F236}\uDE36", "Japanese “Not Free of Charge” Button");
export const japaneseMonthlyAmountButton = new Emoji("\u{1F237}\uDE37\uFE0F", "Japanese “Monthly Amount” Button");
export const japaneseApplicationButton = new Emoji("\u{1F238}\uDE38", "Japanese “Application” Button");
export const japaneseDiscountButton = new Emoji("\u{1F239}\uDE39", "Japanese “Discount” Button");
export const japaneseOpenForBusinessButton = new Emoji("\u{1F23A}\uDE3A", "Japanese “Open for Business” Button");
export const japaneseBargainButton = new Emoji("\u{1F250}\uDE50", "Japanese “Bargain” Button");
export const japaneseAcceptableButton = new Emoji("\u{1F251}\uDE51", "Japanese “Acceptable” Button");
export const japaneseCongratulationsButton = new Emoji("\u3297\uFE0F", "Japanese “Congratulations” Button");
export const japaneseSecretButton = new Emoji("\u3299\uFE0F", "Japanese “Secret” Button");
export const oneOClock = new Emoji("\u{1F550}\uDD50", "One O’Clock");
export const twoOClock = new Emoji("\u{1F551}\uDD51", "Two O’Clock");
export const threeOClock = new Emoji("\u{1F552}\uDD52", "Three O’Clock");
export const fourOClock = new Emoji("\u{1F553}\uDD53", "Four O’Clock");
export const fiveOClock = new Emoji("\u{1F554}\uDD54", "Five O’Clock");
export const sixOClock = new Emoji("\u{1F555}\uDD55", "Six O’Clock");
export const sevenOClock = new Emoji("\u{1F556}\uDD56", "Seven O’Clock");
export const eightOClock = new Emoji("\u{1F557}\uDD57", "Eight O’Clock");
export const nineOClock = new Emoji("\u{1F558}\uDD58", "Nine O’Clock");
export const tenOClock = new Emoji("\u{1F559}\uDD59", "Ten O’Clock");
export const elevenOClock = new Emoji("\u{1F55A}\uDD5A", "Eleven O’Clock");
export const twelveOClock = new Emoji("\u{1F55B}\uDD5B", "Twelve O’Clock");
export const oneThirty = new Emoji("\u{1F55C}\uDD5C", "One-Thirty");
export const twoThirty = new Emoji("\u{1F55D}\uDD5D", "Two-Thirty");
export const threeThirty = new Emoji("\u{1F55E}\uDD5E", "Three-Thirty");
export const fourThirty = new Emoji("\u{1F55F}\uDD5F", "Four-Thirty");
export const fiveThirty = new Emoji("\u{1F560}\uDD60", "Five-Thirty");
export const sixThirty = new Emoji("\u{1F561}\uDD61", "Six-Thirty");
export const sevenThirty = new Emoji("\u{1F562}\uDD62", "Seven-Thirty");
export const eightThirty = new Emoji("\u{1F563}\uDD63", "Eight-Thirty");
export const nineThirty = new Emoji("\u{1F564}\uDD64", "Nine-Thirty");
export const tenThirty = new Emoji("\u{1F565}\uDD65", "Ten-Thirty");
export const elevenThirty = new Emoji("\u{1F566}\uDD66", "Eleven-Thirty");
export const twelveThirty = new Emoji("\u{1F567}\uDD67", "Twelve-Thirty");
export const mantelpieceClock = new Emoji("\u{1F570}\uDD70\uFE0F", "Mantelpiece Clock");
export const watch = new Emoji("\u231A", "Watch");
export const alarmClock = new Emoji("\u23F0", "Alarm Clock");
export const stopwatch = new Emoji("\u23F1\uFE0F", "Stopwatch");
export const timerClock = new Emoji("\u23F2\uFE0F", "Timer Clock");
export const hourglassDone = new Emoji("\u231B", "Hourglass Done");
export const hourglassNotDone = new Emoji("\u23F3", "Hourglass Not Done");
export const clockwiseVerticalArrows = new Emoji("\u{1F503}\uDD03\uFE0F", "Clockwise Vertical Arrows");
export const counterclockwiseArrowsButton = new Emoji("\u{1F504}\uDD04\uFE0F", "Counterclockwise Arrows Button");
export const leftRightArrow = new Emoji("\u2194\uFE0F", "Left-Right Arrow");
export const upDownArrow = new Emoji("\u2195\uFE0F", "Up-Down Arrow");
export const upLeftArrow = new Emoji("\u2196\uFE0F", "Up-Left Arrow");
export const upRightArrow = new Emoji("\u2197\uFE0F", "Up-Right Arrow");
export const downRightArrow = new Emoji("\u2198\uFE0F", "Down-Right Arrow");
export const downLeftArrow = new Emoji("\u2199\uFE0F", "Down-Left Arrow");
export const rightArrowCurvingLeft = new Emoji("\u21A9\uFE0F", "Right Arrow Curving Left");
export const leftArrowCurvingRight = new Emoji("\u21AA\uFE0F", "Left Arrow Curving Right");
export const rightArrow = new Emoji("\u27A1\uFE0F", "Right Arrow");
export const rightArrowCurvingUp = new Emoji("\u2934\uFE0F", "Right Arrow Curving Up");
export const rightArrowCurvingDown = new Emoji("\u2935\uFE0F", "Right Arrow Curving Down");
export const leftArrow = new Emoji("\u2B05\uFE0F", "Left Arrow");
export const upArrow = new Emoji("\u2B06\uFE0F", "Up Arrow");
export const downArrow = new Emoji("\u2B07\uFE0F", "Down Arrow");
export const cLButton = new Emoji("\u{1F191}\uDD91", "CL Button");
export const coolButton = new Emoji("\u{1F192}\uDD92", "Cool Button");
export const freeButton = new Emoji("\u{1F193}\uDD93", "Free Button");
export const iDButton = new Emoji("\u{1F194}\uDD94", "ID Button");
export const newButton = new Emoji("\u{1F195}\uDD95", "New Button");
export const nGButton = new Emoji("\u{1F196}\uDD96", "NG Button");
export const oKButton = new Emoji("\u{1F197}\uDD97", "OK Button");
export const sOSButton = new Emoji("\u{1F198}\uDD98", "SOS Button");
export const upButton = new Emoji("\u{1F199}\uDD99", "Up! Button");
export const vsButton = new Emoji("\u{1F19A}\uDD9A", "Vs Button");
export const radioButton = new Emoji("\u{1F518}\uDD18", "Radio Button");
export const backArrow = new Emoji("\u{1F519}\uDD19", "Back Arrow");
export const endArrow = new Emoji("\u{1F51A}\uDD1A", "End Arrow");
export const onArrow = new Emoji("\u{1F51B}\uDD1B", "On! Arrow");
export const soonArrow = new Emoji("\u{1F51C}\uDD1C", "Soon Arrow");
export const topArrow = new Emoji("\u{1F51D}\uDD1D", "Top Arrow");
export const checkBoxWithCheck = new Emoji("\u2611\uFE0F", "Check Box with Check");
export const inputLatinUppercase = new Emoji("\u{1F520}\uDD20", "Input Latin Uppercase");
export const inputLatinLowercase = new Emoji("\u{1F521}\uDD21", "Input Latin Lowercase");
export const inputNumbers = new Emoji("\u{1F522}\uDD22", "Input Numbers");
export const inputSymbols = new Emoji("\u{1F523}\uDD23", "Input Symbols");
export const inputLatinLetters = new Emoji("\u{1F524}\uDD24", "Input Latin Letters");
export const shuffleTracksButton = new Emoji("\u{1F500}\uDD00", "Shuffle Tracks Button");
export const repeatButton = new Emoji("\u{1F501}\uDD01", "Repeat Button");
export const repeatSingleButton = new Emoji("\u{1F502}\uDD02", "Repeat Single Button");
export const upwardsButton = new Emoji("\u{1F53C}\uDD3C", "Upwards Button");
export const downwardsButton = new Emoji("\u{1F53D}\uDD3D", "Downwards Button");
export const playButton = new Emoji("\u25B6\uFE0F", "Play Button");
export const reverseButton = new Emoji("\u25C0\uFE0F", "Reverse Button");
export const ejectButton = new Emoji("\u23CF\uFE0F", "Eject Button");
export const fastForwardButton = new Emoji("\u23E9", "Fast-Forward Button");
export const fastReverseButton = new Emoji("\u23EA", "Fast Reverse Button");
export const fastUpButton = new Emoji("\u23EB", "Fast Up Button");
export const fastDownButton = new Emoji("\u23EC", "Fast Down Button");
export const nextTrackButton = new Emoji("\u23ED\uFE0F", "Next Track Button");
export const lastTrackButton = new Emoji("\u23EE\uFE0F", "Last Track Button");
export const playOrPauseButton = new Emoji("\u23EF\uFE0F", "Play or Pause Button");
export const pauseButton = new Emoji("\u23F8\uFE0F", "Pause Button");
export const stopButton = new Emoji("\u23F9\uFE0F", "Stop Button");
export const recordButton = new Emoji("\u23FA\uFE0F", "Record Button");
export const aries = new Emoji("\u2648", "Aries");
export const taurus = new Emoji("\u2649", "Taurus");
export const gemini = new Emoji("\u264A", "Gemini");
export const cancer = new Emoji("\u264B", "Cancer");
export const leo = new Emoji("\u264C", "Leo");
export const virgo = new Emoji("\u264D", "Virgo");
export const libra = new Emoji("\u264E", "Libra");
export const scorpio = new Emoji("\u264F", "Scorpio");
export const sagittarius = new Emoji("\u2650", "Sagittarius");
export const capricorn = new Emoji("\u2651", "Capricorn");
export const aquarius = new Emoji("\u2652", "Aquarius");
export const pisces = new Emoji("\u2653", "Pisces");
export const ophiuchus = new Emoji("\u26CE", "Ophiuchus");
export const digitZero = new Emoji("\u0030\uFE0F", "Digit Zero");
export const digitOne = new Emoji("\u0031\uFE0F", "Digit One");
export const digitTwo = new Emoji("\u0032\uFE0F", "Digit Two");
export const digitThree = new Emoji("\u0033\uFE0F", "Digit Three");
export const digitFour = new Emoji("\u0034\uFE0F", "Digit Four");
export const digitFive = new Emoji("\u0035\uFE0F", "Digit Five");
export const digitSix = new Emoji("\u0036\uFE0F", "Digit Six");
export const digitSeven = new Emoji("\u0037\uFE0F", "Digit Seven");
export const digitEight = new Emoji("\u0038\uFE0F", "Digit Eight");
export const digitNine = new Emoji("\u0039\uFE0F", "Digit Nine");
export const asterisk = new Emoji("\u002A\uFE0F", "Asterisk");
export const numberSign = new Emoji("\u0023\uFE0F", "Number Sign");
export const keycapDigitZero = new Emoji("\u0030\uFE0F\u20E3", "Keycap Digit Zero");
export const keycapDigitOne = new Emoji("\u0031\uFE0F\u20E3", "Keycap Digit One");
export const keycapDigitTwo = new Emoji("\u0032\uFE0F\u20E3", "Keycap Digit Two");
export const keycapDigitThree = new Emoji("\u0033\uFE0F\u20E3", "Keycap Digit Three");
export const keycapDigitFour = new Emoji("\u0034\uFE0F\u20E3", "Keycap Digit Four");
export const keycapDigitFive = new Emoji("\u0035\uFE0F\u20E3", "Keycap Digit Five");
export const keycapDigitSix = new Emoji("\u0036\uFE0F\u20E3", "Keycap Digit Six");
export const keycapDigitSeven = new Emoji("\u0037\uFE0F\u20E3", "Keycap Digit Seven");
export const keycapDigitEight = new Emoji("\u0038\uFE0F\u20E3", "Keycap Digit Eight");
export const keycapDigitNine = new Emoji("\u0039\uFE0F\u20E3", "Keycap Digit Nine");
export const keycapAsterisk = new Emoji("\u002A\uFE0F\u20E3", "Keycap Asterisk");
export const keycapNumberSign = new Emoji("\u0023\uFE0F\u20E3", "Keycap Number Sign");
export const keycap10 = new Emoji("\u{1F51F}\uDD1F", "Keycap: 10");
export const tagPlusSign = new Emoji("\u{E002B}\uDC2B", "Tag Plus Sign");
export const tagHyphenMinus = new Emoji("\u{E002D}\uDC2D", "Tag Hyphen-Minus");
export const tagSpace = new Emoji("\u{E0020}\uDC20", "Tag Space");
export const tagExclamationMark = new Emoji("\u{E0021}\uDC21", "Tag Exclamation Mark");
export const tagQuotationMark = new Emoji("\u{E0022}\uDC22", "Tag Quotation Mark");
export const tagNumberSign = new Emoji("\u{E0023}\uDC23", "Tag Number Sign");
export const tagDollarSign = new Emoji("\u{E0024}\uDC24", "Tag Dollar Sign");
export const tagPercentSign = new Emoji("\u{E0025}\uDC25", "Tag Percent Sign");
export const tagAmpersand = new Emoji("\u{E0026}\uDC26", "Tag Ampersand");
export const tagApostrophe = new Emoji("\u{E0027}\uDC27", "Tag Apostrophe");
export const tagLeftParenthesis = new Emoji("\u{E0028}\uDC28", "Tag Left Parenthesis");
export const tagRightParenthesis = new Emoji("\u{E0029}\uDC29", "Tag Right Parenthesis");
export const tagAsterisk = new Emoji("\u{E002A}\uDC2A", "Tag Asterisk");
export const tagComma = new Emoji("\u{E002C}\uDC2C", "Tag Comma");
export const tagFullStop = new Emoji("\u{E002E}\uDC2E", "Tag Full Stop");
export const tagSolidus = new Emoji("\u{E002F}\uDC2F", "Tag Solidus");
export const tagDigitZero = new Emoji("\u{E0030}\uDC30", "Tag Digit Zero");
export const tagDigitOne = new Emoji("\u{E0031}\uDC31", "Tag Digit One");
export const tagDigitTwo = new Emoji("\u{E0032}\uDC32", "Tag Digit Two");
export const tagDigitThree = new Emoji("\u{E0033}\uDC33", "Tag Digit Three");
export const tagDigitFour = new Emoji("\u{E0034}\uDC34", "Tag Digit Four");
export const tagDigitFive = new Emoji("\u{E0035}\uDC35", "Tag Digit Five");
export const tagDigitSix = new Emoji("\u{E0036}\uDC36", "Tag Digit Six");
export const tagDigitSeven = new Emoji("\u{E0037}\uDC37", "Tag Digit Seven");
export const tagDigitEight = new Emoji("\u{E0038}\uDC38", "Tag Digit Eight");
export const tagDigitNine = new Emoji("\u{E0039}\uDC39", "Tag Digit Nine");
export const tagColon = new Emoji("\u{E003A}\uDC3A", "Tag Colon");
export const tagSemicolon = new Emoji("\u{E003B}\uDC3B", "Tag Semicolon");
export const tagLessThanSign = new Emoji("\u{E003C}\uDC3C", "Tag Less-Than Sign");
export const tagEqualsSign = new Emoji("\u{E003D}\uDC3D", "Tag Equals Sign");
export const tagGreaterThanSign = new Emoji("\u{E003E}\uDC3E", "Tag Greater-Than Sign");
export const tagQuestionMark = new Emoji("\u{E003F}\uDC3F", "Tag Question Mark");
export const tagCommercialAt = new Emoji("\u{E0040}\uDC40", "Tag Commercial at");
export const tagLatinCapitalLetterA = new Emoji("\u{E0041}\uDC41", "Tag Latin Capital Letter a");
export const tagLatinCapitalLetterB = new Emoji("\u{E0042}\uDC42", "Tag Latin Capital Letter B");
export const tagLatinCapitalLetterC = new Emoji("\u{E0043}\uDC43", "Tag Latin Capital Letter C");
export const tagLatinCapitalLetterD = new Emoji("\u{E0044}\uDC44", "Tag Latin Capital Letter D");
export const tagLatinCapitalLetterE = new Emoji("\u{E0045}\uDC45", "Tag Latin Capital Letter E");
export const tagLatinCapitalLetterF = new Emoji("\u{E0046}\uDC46", "Tag Latin Capital Letter F");
export const tagLatinCapitalLetterG = new Emoji("\u{E0047}\uDC47", "Tag Latin Capital Letter G");
export const tagLatinCapitalLetterH = new Emoji("\u{E0048}\uDC48", "Tag Latin Capital Letter H");
export const tagLatinCapitalLetterI = new Emoji("\u{E0049}\uDC49", "Tag Latin Capital Letter I");
export const tagLatinCapitalLetterJ = new Emoji("\u{E004A}\uDC4A", "Tag Latin Capital Letter J");
export const tagLatinCapitalLetterK = new Emoji("\u{E004B}\uDC4B", "Tag Latin Capital Letter K");
export const tagLatinCapitalLetterL = new Emoji("\u{E004C}\uDC4C", "Tag Latin Capital Letter L");
export const tagLatinCapitalLetterM = new Emoji("\u{E004D}\uDC4D", "Tag Latin Capital Letter M");
export const tagLatinCapitalLetterN = new Emoji("\u{E004E}\uDC4E", "Tag Latin Capital Letter N");
export const tagLatinCapitalLetterO = new Emoji("\u{E004F}\uDC4F", "Tag Latin Capital Letter O");
export const tagLatinCapitalLetterP = new Emoji("\u{E0050}\uDC50", "Tag Latin Capital Letter P");
export const tagLatinCapitalLetterQ = new Emoji("\u{E0051}\uDC51", "Tag Latin Capital Letter Q");
export const tagLatinCapitalLetterR = new Emoji("\u{E0052}\uDC52", "Tag Latin Capital Letter R");
export const tagLatinCapitalLetterS = new Emoji("\u{E0053}\uDC53", "Tag Latin Capital Letter S");
export const tagLatinCapitalLetterT = new Emoji("\u{E0054}\uDC54", "Tag Latin Capital Letter T");
export const tagLatinCapitalLetterU = new Emoji("\u{E0055}\uDC55", "Tag Latin Capital Letter U");
export const tagLatinCapitalLetterV = new Emoji("\u{E0056}\uDC56", "Tag Latin Capital Letter V");
export const tagLatinCapitalLetterW = new Emoji("\u{E0057}\uDC57", "Tag Latin Capital Letter W");
export const tagLatinCapitalLetterX = new Emoji("\u{E0058}\uDC58", "Tag Latin Capital Letter X");
export const tagLatinCapitalLetterY = new Emoji("\u{E0059}\uDC59", "Tag Latin Capital Letter Y");
export const tagLatinCapitalLetterZ = new Emoji("\u{E005A}\uDC5A", "Tag Latin Capital Letter Z");
export const tagLeftSquareBracket = new Emoji("\u{E005B}\uDC5B", "Tag Left Square Bracket");
export const tagReverseSolidus = new Emoji("\u{E005C}\uDC5C", "Tag Reverse Solidus");
export const tagRightSquareBracket = new Emoji("\u{E005D}\uDC5D", "Tag Right Square Bracket");
export const tagCircumflexAccent = new Emoji("\u{E005E}\uDC5E", "Tag Circumflex Accent");
export const tagLowLine = new Emoji("\u{E005F}\uDC5F", "Tag Low Line");
export const tagGraveAccent = new Emoji("\u{E0060}\uDC60", "Tag Grave Accent");
export const tagLatinSmallLetterA = new Emoji("\u{E0061}\uDC61", "Tag Latin Small Letter a");
export const tagLatinSmallLetterB = new Emoji("\u{E0062}\uDC62", "Tag Latin Small Letter B");
export const tagLatinSmallLetterC = new Emoji("\u{E0063}\uDC63", "Tag Latin Small Letter C");
export const tagLatinSmallLetterD = new Emoji("\u{E0064}\uDC64", "Tag Latin Small Letter D");
export const tagLatinSmallLetterE = new Emoji("\u{E0065}\uDC65", "Tag Latin Small Letter E");
export const tagLatinSmallLetterF = new Emoji("\u{E0066}\uDC66", "Tag Latin Small Letter F");
export const tagLatinSmallLetterG = new Emoji("\u{E0067}\uDC67", "Tag Latin Small Letter G");
export const tagLatinSmallLetterH = new Emoji("\u{E0068}\uDC68", "Tag Latin Small Letter H");
export const tagLatinSmallLetterI = new Emoji("\u{E0069}\uDC69", "Tag Latin Small Letter I");
export const tagLatinSmallLetterJ = new Emoji("\u{E006A}\uDC6A", "Tag Latin Small Letter J");
export const tagLatinSmallLetterK = new Emoji("\u{E006B}\uDC6B", "Tag Latin Small Letter K");
export const tagLatinSmallLetterL = new Emoji("\u{E006C}\uDC6C", "Tag Latin Small Letter L");
export const tagLatinSmallLetterM = new Emoji("\u{E006D}\uDC6D", "Tag Latin Small Letter M");
export const tagLatinSmallLetterN = new Emoji("\u{E006E}\uDC6E", "Tag Latin Small Letter N");
export const tagLatinSmallLetterO = new Emoji("\u{E006F}\uDC6F", "Tag Latin Small Letter O");
export const tagLatinSmallLetterP = new Emoji("\u{E0070}\uDC70", "Tag Latin Small Letter P");
export const tagLatinSmallLetterQ = new Emoji("\u{E0071}\uDC71", "Tag Latin Small Letter Q");
export const tagLatinSmallLetterR = new Emoji("\u{E0072}\uDC72", "Tag Latin Small Letter R");
export const tagLatinSmallLetterS = new Emoji("\u{E0073}\uDC73", "Tag Latin Small Letter S");
export const tagLatinSmallLetterT = new Emoji("\u{E0074}\uDC74", "Tag Latin Small Letter T");
export const tagLatinSmallLetterU = new Emoji("\u{E0075}\uDC75", "Tag Latin Small Letter U");
export const tagLatinSmallLetterV = new Emoji("\u{E0076}\uDC76", "Tag Latin Small Letter V");
export const tagLatinSmallLetterW = new Emoji("\u{E0077}\uDC77", "Tag Latin Small Letter W");
export const tagLatinSmallLetterX = new Emoji("\u{E0078}\uDC78", "Tag Latin Small Letter X");
export const tagLatinSmallLetterY = new Emoji("\u{E0079}\uDC79", "Tag Latin Small Letter Y");
export const tagLatinSmallLetterZ = new Emoji("\u{E007A}\uDC7A", "Tag Latin Small Letter Z");
export const tagLeftCurlyBracket = new Emoji("\u{E007B}\uDC7B", "Tag Left Curly Bracket");
export const tagVerticalLine = new Emoji("\u{E007C}\uDC7C", "Tag Vertical Line");
export const tagRightCurlyBracket = new Emoji("\u{E007D}\uDC7D", "Tag Right Curly Bracket");
export const tagTilde = new Emoji("\u{E007E}\uDC7E", "Tag Tilde");
export const cancelTag = new Emoji("\u{E007F}\uDC7F", "Cancel Tag");
export const multiply = new Emoji("\u2716\uFE0F", "Multiply");
export const plus = new Emoji("\u2795", "Plus");
export const minus = new Emoji("\u2796", "Minus");
export const divide = new Emoji("\u2797", "Divide");
export const spadeSuit = new Emoji("\u2660\uFE0F", "Spade Suit");
export const clubSuit = new Emoji("\u2663\uFE0F", "Club Suit");
export const heartSuit = new Emoji("\u2665\uFE0F", "Heart Suit");
export const diamondSuit = new Emoji("\u2666\uFE0F", "Diamond Suit");
export const mahjongRedDragon = new Emoji("\u{1F004}\uDC04", "Mahjong Red Dragon");
export const joker = new Emoji("\u{1F0CF}\uDCCF", "Joker");
export const directHit = new Emoji("\u{1F3AF}\uDFAF", "Direct Hit");
export const slotMachine = new Emoji("\u{1F3B0}\uDFB0", "Slot Machine");
export const pool8Ball = new Emoji("\u{1F3B1}\uDFB1", "Pool 8 Ball");
export const gameDie = new Emoji("\u{1F3B2}\uDFB2", "Game Die");
export const bowling = new Emoji("\u{1F3B3}\uDFB3", "Bowling");
export const flowerPlayingCards = new Emoji("\u{1F3B4}\uDFB4", "Flower Playing Cards");
export const puzzlePiece = new Emoji("\u{1F9E9}\uDDE9", "Puzzle Piece");
export const chessPawn = new Emoji("\u265F\uFE0F", "Chess Pawn");
export const yoYo = new Emoji("\u{1FA80}\uDE80", "Yo-Yo");
export const boomerang = new Emoji("\u{1FA83}\uDE83", "Boomerang");
export const nestingDolls = new Emoji("\u{1FA86}\uDE86", "Nesting Dolls");
export const kite = new Emoji("\u{1FA81}\uDE81", "Kite");
export const runningShirt = new Emoji("\u{1F3BD}\uDFBD", "Running Shirt");
export const tennis = new Emoji("\u{1F3BE}\uDFBE", "Tennis");
export const skis = new Emoji("\u{1F3BF}\uDFBF", "Skis");
export const basketball = new Emoji("\u{1F3C0}\uDFC0", "Basketball");
export const sportsMedal = new Emoji("\u{1F3C5}\uDFC5", "Sports Medal");
export const trophy = new Emoji("\u{1F3C6}\uDFC6", "Trophy");
export const americanFootball = new Emoji("\u{1F3C8}\uDFC8", "American Football");
export const rugbyFootball = new Emoji("\u{1F3C9}\uDFC9", "Rugby Football");
export const cricketGame = new Emoji("\u{1F3CF}\uDFCF", "Cricket Game");
export const volleyball = new Emoji("\u{1F3D0}\uDFD0", "Volleyball");
export const fieldHockey = new Emoji("\u{1F3D1}\uDFD1", "Field Hockey");
export const iceHockey = new Emoji("\u{1F3D2}\uDFD2", "Ice Hockey");
export const pingPong = new Emoji("\u{1F3D3}\uDFD3", "Ping Pong");
export const badminton = new Emoji("\u{1F3F8}\uDFF8", "Badminton");
export const sled = new Emoji("\u{1F6F7}\uDEF7", "Sled");
export const goalNet = new Emoji("\u{1F945}\uDD45", "Goal Net");
export const medal1stPlace = new Emoji("\u{1F947}\uDD47", "Medal: 1st Place");
export const medal2ndPlace = new Emoji("\u{1F948}\uDD48", "Medal: 2nd Place");
export const medal3rdPlace = new Emoji("\u{1F949}\uDD49", "Medal: 3rd Place");
export const boxingGlove = new Emoji("\u{1F94A}\uDD4A", "Boxing Glove");
export const curlingStone = new Emoji("\u{1F94C}\uDD4C", "Curling Stone");
export const lacrosse = new Emoji("\u{1F94D}\uDD4D", "Lacrosse");
export const softball = new Emoji("\u{1F94E}\uDD4E", "Softball");
export const flyingDisc = new Emoji("\u{1F94F}\uDD4F", "Flying Disc");
export const soccerBall = new Emoji("\u26BD", "Soccer Ball");
export const baseball = new Emoji("\u26BE", "Baseball");
export const iceSkate = new Emoji("\u26F8\uFE0F", "Ice Skate");
export const topHat = new Emoji("\u{1F3A9}\uDFA9", "Top Hat");
export const divingMask = new Emoji("\u{1F93F}\uDD3F", "Diving Mask");
export const womanSHat = new Emoji("\u{1F452}\uDC52", "Woman’s Hat");
export const glasses = new Emoji("\u{1F453}\uDC53", "Glasses");
export const sunglasses = new Emoji("\u{1F576}\uDD76\uFE0F", "Sunglasses");
export const necktie = new Emoji("\u{1F454}\uDC54", "Necktie");
export const tShirt = new Emoji("\u{1F455}\uDC55", "T-Shirt");
export const jeans = new Emoji("\u{1F456}\uDC56", "Jeans");
export const dress = new Emoji("\u{1F457}\uDC57", "Dress");
export const kimono = new Emoji("\u{1F458}\uDC58", "Kimono");
export const bikini = new Emoji("\u{1F459}\uDC59", "Bikini");
export const womanSClothes = new Emoji("\u{1F45A}\uDC5A", "Woman’s Clothes");
export const purse = new Emoji("\u{1F45B}\uDC5B", "Purse");
export const handbag = new Emoji("\u{1F45C}\uDC5C", "Handbag");
export const clutchBag = new Emoji("\u{1F45D}\uDC5D", "Clutch Bag");
export const manSShoe = new Emoji("\u{1F45E}\uDC5E", "Man’s Shoe");
export const runningShoe = new Emoji("\u{1F45F}\uDC5F", "Running Shoe");
export const highHeeledShoe = new Emoji("\u{1F460}\uDC60", "High-Heeled Shoe");
export const womanSSandal = new Emoji("\u{1F461}\uDC61", "Woman’s Sandal");
export const womanSBoot = new Emoji("\u{1F462}\uDC62", "Woman’s Boot");
export const martialArtsUniform = new Emoji("\u{1F94B}\uDD4B", "Martial Arts Uniform");
export const sari = new Emoji("\u{1F97B}\uDD7B", "Sari");
export const labCoat = new Emoji("\u{1F97C}\uDD7C", "Lab Coat");
export const goggles = new Emoji("\u{1F97D}\uDD7D", "Goggles");
export const hikingBoot = new Emoji("\u{1F97E}\uDD7E", "Hiking Boot");
export const flatShoe = new Emoji("\u{1F97F}\uDD7F", "Flat Shoe");
export const billedCap = new Emoji("\u{1F9E2}\uDDE2", "Billed Cap");
export const scarf = new Emoji("\u{1F9E3}\uDDE3", "Scarf");
export const gloves = new Emoji("\u{1F9E4}\uDDE4", "Gloves");
export const coat = new Emoji("\u{1F9E5}\uDDE5", "Coat");
export const socks = new Emoji("\u{1F9E6}\uDDE6", "Socks");
export const nazarAmulet = new Emoji("\u{1F9FF}\uDDFF", "Nazar Amulet");
export const balletShoes = new Emoji("\u{1FA70}\uDE70", "Ballet Shoes");
export const onePieceSwimsuit = new Emoji("\u{1FA71}\uDE71", "One-Piece Swimsuit");
export const briefs = new Emoji("\u{1FA72}\uDE72", "Briefs");
export const shorts = new Emoji("\u{1FA73}\uDE73", "Shorts");
export const buildingConstruction = new Emoji("\u{1F3D7}\uDFD7\uFE0F", "Building Construction");
export const houses = new Emoji("\u{1F3D8}\uDFD8\uFE0F", "Houses");
export const cityscape = new Emoji("\u{1F3D9}\uDFD9\uFE0F", "Cityscape");
export const derelictHouse = new Emoji("\u{1F3DA}\uDFDA\uFE0F", "Derelict House");
export const classicalBuilding = new Emoji("\u{1F3DB}\uDFDB\uFE0F", "Classical Building");
export const desert = new Emoji("\u{1F3DC}\uDFDC\uFE0F", "Desert");
export const desertIsland = new Emoji("\u{1F3DD}\uDFDD\uFE0F", "Desert Island");
export const nationalPark = new Emoji("\u{1F3DE}\uDFDE\uFE0F", "National Park");
export const stadium = new Emoji("\u{1F3DF}\uDFDF\uFE0F", "Stadium");
export const house = new Emoji("\u{1F3E0}\uDFE0", "House");
export const houseWithGarden = new Emoji("\u{1F3E1}\uDFE1", "House with Garden");
export const officeBuilding = new Emoji("\u{1F3E2}\uDFE2", "Office Building");
export const japanesePostOffice = new Emoji("\u{1F3E3}\uDFE3", "Japanese Post Office");
export const postOffice = new Emoji("\u{1F3E4}\uDFE4", "Post Office");
export const hospital = new Emoji("\u{1F3E5}\uDFE5", "Hospital");
export const bank = new Emoji("\u{1F3E6}\uDFE6", "Bank");
export const aTMSign = new Emoji("\u{1F3E7}\uDFE7", "ATM Sign");
export const hotel = new Emoji("\u{1F3E8}\uDFE8", "Hotel");
export const loveHotel = new Emoji("\u{1F3E9}\uDFE9", "Love Hotel");
export const convenienceStore = new Emoji("\u{1F3EA}\uDFEA", "Convenience Store");
export const departmentStore = new Emoji("\u{1F3EC}\uDFEC", "Department Store");
export const bridgeAtNight = new Emoji("\u{1F309}\uDF09", "Bridge at Night");
export const fountain = new Emoji("\u26F2", "Fountain");
export const shoppingBags = new Emoji("\u{1F6CD}\uDECD\uFE0F", "Shopping Bags");
export const receipt = new Emoji("\u{1F9FE}\uDDFE", "Receipt");
export const shoppingCart = new Emoji("\u{1F6D2}\uDED2", "Shopping Cart");
export const barberPole = new Emoji("\u{1F488}\uDC88", "Barber Pole");
export const wedding = new Emoji("\u{1F492}\uDC92", "Wedding");
export const ballotBoxWithBallot = new Emoji("\u{1F5F3}\uDDF3\uFE0F", "Ballot Box with Ballot");
export const musicalScore = new Emoji("\u{1F3BC}\uDFBC", "Musical Score");
export const musicalNotes = new Emoji("\u{1F3B6}\uDFB6", "Musical Notes");
export const musicalNote = new Emoji("\u{1F3B5}\uDFB5", "Musical Note");
export const saxophone = new Emoji("\u{1F3B7}\uDFB7", "Saxophone");
export const guitar = new Emoji("\u{1F3B8}\uDFB8", "Guitar");
export const musicalKeyboard = new Emoji("\u{1F3B9}\uDFB9", "Musical Keyboard");
export const trumpet = new Emoji("\u{1F3BA}\uDFBA", "Trumpet");
export const violin = new Emoji("\u{1F3BB}\uDFBB", "Violin");
export const drum = new Emoji("\u{1F941}\uDD41", "Drum");
export const accordion = new Emoji("\u{1FA97}\uDE97", "Accordion");
export const longDrum = new Emoji("\u{1FA98}\uDE98", "Long Drum");
export const banjo = new Emoji("\u{1FA95}\uDE95", "Banjo");
export const globeShowingAmericas = new Emoji("\u{1F30E}\uDF0E", "Globe Showing Americas");
export const milkyWay = new Emoji("\u{1F30C}\uDF0C", "Milky Way");
export const globeShowingEuropeAfrica = new Emoji("\u{1F30D}\uDF0D", "Globe Showing Europe-Africa");
export const globeShowingAsiaAustralia = new Emoji("\u{1F30F}\uDF0F", "Globe Showing Asia-Australia");
export const globeWithMeridians = new Emoji("\u{1F310}\uDF10", "Globe with Meridians");
export const newMoon = new Emoji("\u{1F311}\uDF11", "New Moon");
export const waxingCrescentMoon = new Emoji("\u{1F312}\uDF12", "Waxing Crescent Moon");
export const firstQuarterMoon = new Emoji("\u{1F313}\uDF13", "First Quarter Moon");
export const waxingGibbousMoon = new Emoji("\u{1F314}\uDF14", "Waxing Gibbous Moon");
export const fullMoon = new Emoji("\u{1F315}\uDF15", "Full Moon");
export const waningGibbousMoon = new Emoji("\u{1F316}\uDF16", "Waning Gibbous Moon");
export const lastQuarterMoon = new Emoji("\u{1F317}\uDF17", "Last Quarter Moon");
export const waningCrescentMoon = new Emoji("\u{1F318}\uDF18", "Waning Crescent Moon");
export const crescentMoon = new Emoji("\u{1F319}\uDF19", "Crescent Moon");
export const newMoonFace = new Emoji("\u{1F31A}\uDF1A", "New Moon Face");
export const firstQuarterMoonFace = new Emoji("\u{1F31B}\uDF1B", "First Quarter Moon Face");
export const lastQuarterMoonFace = new Emoji("\u{1F31C}\uDF1C", "Last Quarter Moon Face");
export const fullMoonFace = new Emoji("\u{1F31D}\uDF1D", "Full Moon Face");
export const sunWithFace = new Emoji("\u{1F31E}\uDF1E", "Sun with Face");
export const glowingStar = new Emoji("\u{1F31F}\uDF1F", "Glowing Star");
export const shootingStar = new Emoji("\u{1F320}\uDF20", "Shooting Star");
export const comet = new Emoji("\u2604\uFE0F", "Comet");
export const ringedPlanet = new Emoji("\u{1FA90}\uDE90", "Ringed Planet");
export const moneyBag = new Emoji("\u{1F4B0}\uDCB0", "Money Bag");
export const currencyExchange = new Emoji("\u{1F4B1}\uDCB1", "Currency Exchange");
export const heavyDollarSign = new Emoji("\u{1F4B2}\uDCB2", "Heavy Dollar Sign");
export const creditCard = new Emoji("\u{1F4B3}\uDCB3", "Credit Card");
export const yenBanknote = new Emoji("\u{1F4B4}\uDCB4", "Yen Banknote");
export const dollarBanknote = new Emoji("\u{1F4B5}\uDCB5", "Dollar Banknote");
export const euroBanknote = new Emoji("\u{1F4B6}\uDCB6", "Euro Banknote");
export const poundBanknote = new Emoji("\u{1F4B7}\uDCB7", "Pound Banknote");
export const moneyWithWings = new Emoji("\u{1F4B8}\uDCB8", "Money with Wings");
export const coin = new Emoji("\u{1FA99}\uDE99", "Coin");
export const chartIncreasingWithYen = new Emoji("\u{1F4B9}\uDCB9", "Chart Increasing with Yen");
export const pen = new Emoji("\u{1F58A}\uDD8A\uFE0F", "Pen");
export const fountainPen = new Emoji("\u{1F58B}\uDD8B\uFE0F", "Fountain Pen");
export const paintbrush = new Emoji("\u{1F58C}\uDD8C\uFE0F", "Paintbrush");
export const crayon = new Emoji("\u{1F58D}\uDD8D\uFE0F", "Crayon");
export const pencil = new Emoji("\u270F\uFE0F", "Pencil");
export const blackNib = new Emoji("\u2712\uFE0F", "Black Nib");
export const alembic = new Emoji("\u2697\uFE0F", "Alembic");
export const gear = new Emoji("\u2699\uFE0F", "Gear");
export const atomSymbol = new Emoji("\u269B\uFE0F", "Atom Symbol");
export const keyboard = new Emoji("\u2328\uFE0F", "Keyboard");
export const telephone = new Emoji("\u260E\uFE0F", "Telephone");
export const studioMicrophone = new Emoji("\u{1F399}\uDF99\uFE0F", "Studio Microphone");
export const levelSlider = new Emoji("\u{1F39A}\uDF9A\uFE0F", "Level Slider");
export const controlKnobs = new Emoji("\u{1F39B}\uDF9B\uFE0F", "Control Knobs");
export const movieCamera = new Emoji("\u{1F3A5}\uDFA5", "Movie Camera");
export const headphone = new Emoji("\u{1F3A7}\uDFA7", "Headphone");
export const videoGame = new Emoji("\u{1F3AE}\uDFAE", "Video Game");
export const lightBulb = new Emoji("\u{1F4A1}\uDCA1", "Light Bulb");
export const computerDisk = new Emoji("\u{1F4BD}\uDCBD", "Computer Disk");
export const floppyDisk = new Emoji("\u{1F4BE}\uDCBE", "Floppy Disk");
export const opticalDisk = new Emoji("\u{1F4BF}\uDCBF", "Optical Disk");
export const dVD = new Emoji("\u{1F4C0}\uDCC0", "DVD");
export const telephoneReceiver = new Emoji("\u{1F4DE}\uDCDE", "Telephone Receiver");
export const pager = new Emoji("\u{1F4DF}\uDCDF", "Pager");
export const faxMachine = new Emoji("\u{1F4E0}\uDCE0", "Fax Machine");
export const satelliteAntenna = new Emoji("\u{1F4E1}\uDCE1", "Satellite Antenna");
export const loudspeaker = new Emoji("\u{1F4E2}\uDCE2", "Loudspeaker");
export const megaphone = new Emoji("\u{1F4E3}\uDCE3", "Megaphone");
export const mobilePhone = new Emoji("\u{1F4F1}\uDCF1", "Mobile Phone");
export const mobilePhoneWithArrow = new Emoji("\u{1F4F2}\uDCF2", "Mobile Phone with Arrow");
export const mobilePhoneVibrating = new Emoji("\u{1F4F3}\uDCF3", "Mobile Phone Vibrating");
export const mobilePhoneOff = new Emoji("\u{1F4F4}\uDCF4", "Mobile Phone Off");
export const noMobilePhone = new Emoji("\u{1F4F5}\uDCF5", "No Mobile Phone");
export const antennaBars = new Emoji("\u{1F4F6}\uDCF6", "Antenna Bars");
export const camera = new Emoji("\u{1F4F7}\uDCF7", "Camera");
export const cameraWithFlash = new Emoji("\u{1F4F8}\uDCF8", "Camera with Flash");
export const videoCamera = new Emoji("\u{1F4F9}\uDCF9", "Video Camera");
export const television = new Emoji("\u{1F4FA}\uDCFA", "Television");
export const radio = new Emoji("\u{1F4FB}\uDCFB", "Radio");
export const videocassette = new Emoji("\u{1F4FC}\uDCFC", "Videocassette");
export const filmProjector = new Emoji("\u{1F4FD}\uDCFD\uFE0F", "Film Projector");
export const portableStereo = new Emoji("\u{1F4FE}\uDCFE\uFE0F", "Portable Stereo");
export const dimButton = new Emoji("\u{1F505}\uDD05", "Dim Button");
export const brightButton = new Emoji("\u{1F506}\uDD06", "Bright Button");
export const mutedSpeaker = new Emoji("\u{1F507}\uDD07", "Muted Speaker");
export const speakerLowVolume = new Emoji("\u{1F508}\uDD08", "Speaker Low Volume");
export const speakerMediumVolume = new Emoji("\u{1F509}\uDD09", "Speaker Medium Volume");
export const speakerHighVolume = new Emoji("\u{1F50A}\uDD0A", "Speaker High Volume");
export const battery = new Emoji("\u{1F50B}\uDD0B", "Battery");
export const electricPlug = new Emoji("\u{1F50C}\uDD0C", "Electric Plug");
export const magnifyingGlassTiltedLeft = new Emoji("\u{1F50D}\uDD0D", "Magnifying Glass Tilted Left");
export const magnifyingGlassTiltedRight = new Emoji("\u{1F50E}\uDD0E", "Magnifying Glass Tilted Right");
export const lockedWithPen = new Emoji("\u{1F50F}\uDD0F", "Locked with Pen");
export const lockedWithKey = new Emoji("\u{1F510}\uDD10", "Locked with Key");
export const key = new Emoji("\u{1F511}\uDD11", "Key");
export const locked = new Emoji("\u{1F512}\uDD12", "Locked");
export const unlocked = new Emoji("\u{1F513}\uDD13", "Unlocked");
export const bell = new Emoji("\u{1F514}\uDD14", "Bell");
export const bellWithSlash = new Emoji("\u{1F515}\uDD15", "Bell with Slash");
export const bookmark = new Emoji("\u{1F516}\uDD16", "Bookmark");
export const link = new Emoji("\u{1F517}\uDD17", "Link");
export const joystick = new Emoji("\u{1F579}\uDD79\uFE0F", "Joystick");
export const desktopComputer = new Emoji("\u{1F5A5}\uDDA5\uFE0F", "Desktop Computer");
export const printer = new Emoji("\u{1F5A8}\uDDA8\uFE0F", "Printer");
export const computerMouse = new Emoji("\u{1F5B1}\uDDB1\uFE0F", "Computer Mouse");
export const trackball = new Emoji("\u{1F5B2}\uDDB2\uFE0F", "Trackball");
export const blackFolder = new Emoji("\u{1F5BF}\uDDBF", "Black Folder");
export const folder = new Emoji("\u{1F5C0}\uDDC0", "Folder");
export const openFolder = new Emoji("\u{1F5C1}\uDDC1", "Open Folder");
export const cardIndexDividers = new Emoji("\u{1F5C2}\uDDC2", "Card Index Dividers");
export const cardFileBox = new Emoji("\u{1F5C3}\uDDC3", "Card File Box");
export const fileCabinet = new Emoji("\u{1F5C4}\uDDC4", "File Cabinet");
export const emptyNote = new Emoji("\u{1F5C5}\uDDC5", "Empty Note");
export const emptyNotePage = new Emoji("\u{1F5C6}\uDDC6", "Empty Note Page");
export const emptyNotePad = new Emoji("\u{1F5C7}\uDDC7", "Empty Note Pad");
export const note = new Emoji("\u{1F5C8}\uDDC8", "Note");
export const notePage = new Emoji("\u{1F5C9}\uDDC9", "Note Page");
export const notePad = new Emoji("\u{1F5CA}\uDDCA", "Note Pad");
export const emptyDocument = new Emoji("\u{1F5CB}\uDDCB", "Empty Document");
export const emptyPage = new Emoji("\u{1F5CC}\uDDCC", "Empty Page");
export const emptyPages = new Emoji("\u{1F5CD}\uDDCD", "Empty Pages");
export const document = new Emoji("\u{1F5CE}\uDDCE", "Document");
export const page = new Emoji("\u{1F5CF}\uDDCF", "Page");
export const pages = new Emoji("\u{1F5D0}\uDDD0", "Pages");
export const wastebasket = new Emoji("\u{1F5D1}\uDDD1", "Wastebasket");
export const spiralNotePad = new Emoji("\u{1F5D2}\uDDD2", "Spiral Note Pad");
export const spiralCalendar = new Emoji("\u{1F5D3}\uDDD3", "Spiral Calendar");
export const desktopWindow = new Emoji("\u{1F5D4}\uDDD4", "Desktop Window");
export const minimize = new Emoji("\u{1F5D5}\uDDD5", "Minimize");
export const maximize = new Emoji("\u{1F5D6}\uDDD6", "Maximize");
export const overlap = new Emoji("\u{1F5D7}\uDDD7", "Overlap");
export const reload = new Emoji("\u{1F5D8}\uDDD8", "Reload");
export const close = new Emoji("\u{1F5D9}\uDDD9", "Close");
export const increaseFontSize = new Emoji("\u{1F5DA}\uDDDA", "Increase Font Size");
export const decreaseFontSize = new Emoji("\u{1F5DB}\uDDDB", "Decrease Font Size");
export const compression = new Emoji("\u{1F5DC}\uDDDC", "Compression");
export const oldKey = new Emoji("\u{1F5DD}\uDDDD", "Old Key");
export const outboxTray = new Emoji("\u{1F4E4}\uDCE4", "Outbox Tray");
export const inboxTray = new Emoji("\u{1F4E5}\uDCE5", "Inbox Tray");
export const packageBox = new Emoji("\u{1F4E6}\uDCE6", "Package Box");
export const eMail = new Emoji("\u{1F4E7}\uDCE7", "E-Mail");
export const incomingEnvelope = new Emoji("\u{1F4E8}\uDCE8", "Incoming Envelope");
export const envelopeWithArrow = new Emoji("\u{1F4E9}\uDCE9", "Envelope with Arrow");
export const closedMailboxWithLoweredFlag = new Emoji("\u{1F4EA}\uDCEA", "Closed Mailbox with Lowered Flag");
export const closedMailboxWithRaisedFlag = new Emoji("\u{1F4EB}\uDCEB", "Closed Mailbox with Raised Flag");
export const openMailboxWithRaisedFlag = new Emoji("\u{1F4EC}\uDCEC", "Open Mailbox with Raised Flag");
export const openMailboxWithLoweredFlag = new Emoji("\u{1F4ED}\uDCED", "Open Mailbox with Lowered Flag");
export const postbox = new Emoji("\u{1F4EE}\uDCEE", "Postbox");
export const postalHorn = new Emoji("\u{1F4EF}\uDCEF", "Postal Horn");
export const ribbon = new Emoji("\u{1F380}\uDF80", "Ribbon");
export const wrappedGift = new Emoji("\u{1F381}\uDF81", "Wrapped Gift");
export const jackOLantern = new Emoji("\u{1F383}\uDF83", "Jack-O-Lantern");
export const christmasTree = new Emoji("\u{1F384}\uDF84", "Christmas Tree");
export const firecracker = new Emoji("\u{1F9E8}\uDDE8", "Firecracker");
export const fireworks = new Emoji("\u{1F386}\uDF86", "Fireworks");
export const sparkler = new Emoji("\u{1F387}\uDF87", "Sparkler");
export const sparkles = new Emoji("\u2728", "Sparkles");
export const sparkle = new Emoji("\u2747\uFE0F", "Sparkle");
export const balloon = new Emoji("\u{1F388}\uDF88", "Balloon");
export const partyPopper = new Emoji("\u{1F389}\uDF89", "Party Popper");
export const confettiBall = new Emoji("\u{1F38A}\uDF8A", "Confetti Ball");
export const tanabataTree = new Emoji("\u{1F38B}\uDF8B", "Tanabata Tree");
export const pineDecoration = new Emoji("\u{1F38D}\uDF8D", "Pine Decoration");
export const japaneseDolls = new Emoji("\u{1F38E}\uDF8E", "Japanese Dolls");
export const carpStreamer = new Emoji("\u{1F38F}\uDF8F", "Carp Streamer");
export const windChime = new Emoji("\u{1F390}\uDF90", "Wind Chime");
export const moonViewingCeremony = new Emoji("\u{1F391}\uDF91", "Moon Viewing Ceremony");
export const backpack = new Emoji("\u{1F392}\uDF92", "Backpack");
export const redEnvelope = new Emoji("\u{1F9E7}\uDDE7", "Red Envelope");
export const redPaperLantern = new Emoji("\u{1F3EE}\uDFEE", "Red Paper Lantern");
export const militaryMedal = new Emoji("\u{1F396}\uDF96\uFE0F", "Military Medal");
export const fishingPole = new Emoji("\u{1F3A3}\uDFA3", "Fishing Pole");
export const flashlight = new Emoji("\u{1F526}\uDD26", "Flashlight");
export const hammer = new Emoji("\u{1F528}\uDD28", "Hammer");
export const nutAndBolt = new Emoji("\u{1F529}\uDD29", "Nut and Bolt");
export const hammerAndWrench = new Emoji("\u{1F6E0}\uDEE0\uFE0F", "Hammer and Wrench");
export const compass = new Emoji("\u{1F9ED}\uDDED", "Compass");
export const fireExtinguisher = new Emoji("\u{1F9EF}\uDDEF", "Fire Extinguisher");
export const toolbox = new Emoji("\u{1F9F0}\uDDF0", "Toolbox");
export const brick = new Emoji("\u{1F9F1}\uDDF1", "Brick");
export const axe = new Emoji("\u{1FA93}\uDE93", "Axe");
export const hammerAndPick = new Emoji("\u2692\uFE0F", "Hammer and Pick");
export const pick = new Emoji("\u26CF\uFE0F", "Pick");
export const rescueWorkerSHelmet = new Emoji("\u26D1\uFE0F", "Rescue Worker’s Helmet");
export const chains = new Emoji("\u26D3\uFE0F", "Chains");
export const fileFolder = new Emoji("\u{1F4C1}\uDCC1", "File Folder");
export const openFileFolder = new Emoji("\u{1F4C2}\uDCC2", "Open File Folder");
export const pageWithCurl = new Emoji("\u{1F4C3}\uDCC3", "Page with Curl");
export const pageFacingUp = new Emoji("\u{1F4C4}\uDCC4", "Page Facing Up");
export const calendar = new Emoji("\u{1F4C5}\uDCC5", "Calendar");
export const tearOffCalendar = new Emoji("\u{1F4C6}\uDCC6", "Tear-Off Calendar");
export const cardIndex = new Emoji("\u{1F4C7}\uDCC7", "Card Index");
export const chartIncreasing = new Emoji("\u{1F4C8}\uDCC8", "Chart Increasing");
export const chartDecreasing = new Emoji("\u{1F4C9}\uDCC9", "Chart Decreasing");
export const barChart = new Emoji("\u{1F4CA}\uDCCA", "Bar Chart");
export const clipboard = new Emoji("\u{1F4CB}\uDCCB", "Clipboard");
export const pushpin = new Emoji("\u{1F4CC}\uDCCC", "Pushpin");
export const roundPushpin = new Emoji("\u{1F4CD}\uDCCD", "Round Pushpin");
export const paperclip = new Emoji("\u{1F4CE}\uDCCE", "Paperclip");
export const linkedPaperclips = new Emoji("\u{1F587}\uDD87\uFE0F", "Linked Paperclips");
export const straightRuler = new Emoji("\u{1F4CF}\uDCCF", "Straight Ruler");
export const triangularRuler = new Emoji("\u{1F4D0}\uDCD0", "Triangular Ruler");
export const bookmarkTabs = new Emoji("\u{1F4D1}\uDCD1", "Bookmark Tabs");
export const ledger = new Emoji("\u{1F4D2}\uDCD2", "Ledger");
export const notebook = new Emoji("\u{1F4D3}\uDCD3", "Notebook");
export const notebookWithDecorativeCover = new Emoji("\u{1F4D4}\uDCD4", "Notebook with Decorative Cover");
export const closedBook = new Emoji("\u{1F4D5}\uDCD5", "Closed Book");
export const openBook = new Emoji("\u{1F4D6}\uDCD6", "Open Book");
export const greenBook = new Emoji("\u{1F4D7}\uDCD7", "Green Book");
export const blueBook = new Emoji("\u{1F4D8}\uDCD8", "Blue Book");
export const orangeBook = new Emoji("\u{1F4D9}\uDCD9", "Orange Book");
export const books = new Emoji("\u{1F4DA}\uDCDA", "Books");
export const nameBadge = new Emoji("\u{1F4DB}\uDCDB", "Name Badge");
export const scroll = new Emoji("\u{1F4DC}\uDCDC", "Scroll");
export const memo = new Emoji("\u{1F4DD}\uDCDD", "Memo");
export const scissors = new Emoji("\u2702\uFE0F", "Scissors");
export const envelope = new Emoji("\u2709\uFE0F", "Envelope");
export const cinema = new Emoji("\u{1F3A6}\uDFA6", "Cinema");
export const noOneUnderEighteen = new Emoji("\u{1F51E}\uDD1E", "No One Under Eighteen");
export const prohibited = new Emoji("\u{1F6AB}\uDEAB", "Prohibited");
export const cigarette = new Emoji("\u{1F6AC}\uDEAC", "Cigarette");
export const noSmoking = new Emoji("\u{1F6AD}\uDEAD", "No Smoking");
export const litterInBinSign = new Emoji("\u{1F6AE}\uDEAE", "Litter in Bin Sign");
export const noLittering = new Emoji("\u{1F6AF}\uDEAF", "No Littering");
export const potableWater = new Emoji("\u{1F6B0}\uDEB0", "Potable Water");
export const nonPotableWater = new Emoji("\u{1F6B1}\uDEB1", "Non-Potable Water");
export const noBicycles = new Emoji("\u{1F6B3}\uDEB3", "No Bicycles");
export const noPedestrians = new Emoji("\u{1F6B7}\uDEB7", "No Pedestrians");
export const childrenCrossing = new Emoji("\u{1F6B8}\uDEB8", "Children Crossing");
export const menSRoom = new Emoji("\u{1F6B9}\uDEB9", "Men’s Room");
export const womenSRoom = new Emoji("\u{1F6BA}\uDEBA", "Women’s Room");
export const restroom = new Emoji("\u{1F6BB}\uDEBB", "Restroom");
export const babySymbol = new Emoji("\u{1F6BC}\uDEBC", "Baby Symbol");
export const waterCloset = new Emoji("\u{1F6BE}\uDEBE", "Water Closet");
export const passportControl = new Emoji("\u{1F6C2}\uDEC2", "Passport Control");
export const customs = new Emoji("\u{1F6C3}\uDEC3", "Customs");
export const baggageClaim = new Emoji("\u{1F6C4}\uDEC4", "Baggage Claim");
export const leftLuggage = new Emoji("\u{1F6C5}\uDEC5", "Left Luggage");
export const parkingButton = new Emoji("\u{1F17F}\uDD7F\uFE0F", "Parking Button");
export const wheelchairSymbol = new Emoji("\u267F", "Wheelchair Symbol");
export const radioactive = new Emoji("\u2622\uFE0F", "Radioactive");
export const biohazard = new Emoji("\u2623\uFE0F", "Biohazard");
export const warning = new Emoji("\u26A0\uFE0F", "Warning");
export const highVoltage = new Emoji("\u26A1", "High Voltage");
export const noEntry = new Emoji("\u26D4", "No Entry");
export const recyclingSymbol = new Emoji("\u267B\uFE0F", "Recycling Symbol");
export const dottedSixPointedStar = new Emoji("\u{1F52F}\uDD2F", "Dotted Six-Pointed Star");
export const starOfDavid = new Emoji("\u2721\uFE0F", "Star of David");
export const om = new Emoji("\u{1F549}\uDD49\uFE0F", "Om");
export const kaaba = new Emoji("\u{1F54B}\uDD4B", "Kaaba");
export const mosque = new Emoji("\u{1F54C}\uDD4C", "Mosque");
export const synagogue = new Emoji("\u{1F54D}\uDD4D", "Synagogue");
export const menorah = new Emoji("\u{1F54E}\uDD4E", "Menorah");
export const placeOfWorship = new Emoji("\u{1F6D0}\uDED0", "Place of Worship");
export const hinduTemple = new Emoji("\u{1F6D5}\uDED5", "Hindu Temple");
export const orthodoxCross = new Emoji("\u2626\uFE0F", "Orthodox Cross");
export const latinCross = new Emoji("\u271D\uFE0F", "Latin Cross");
export const starAndCrescent = new Emoji("\u262A\uFE0F", "Star and Crescent");
export const peaceSymbol = new Emoji("\u262E\uFE0F", "Peace Symbol");
export const yinYang = new Emoji("\u262F\uFE0F", "Yin Yang");
export const wheelOfDharma = new Emoji("\u2638\uFE0F", "Wheel of Dharma");
export const infinity = new Emoji("\u267E\uFE0F", "Infinity");
export const diyaLamp = new Emoji("\u{1FA94}\uDE94", "Diya Lamp");
export const shintoShrine = new Emoji("\u26E9\uFE0F", "Shinto Shrine");
export const church = new Emoji("\u26EA", "Church");
export const eightPointedStar = new Emoji("\u2734\uFE0F", "Eight-Pointed Star");
export const prayerBeads = new Emoji("\u{1F4FF}\uDCFF", "Prayer Beads");
export const door = new Emoji("\u{1F6AA}\uDEAA", "Door");
export const lipstick = new Emoji("\u{1F484}\uDC84", "Lipstick");
export const ring = new Emoji("\u{1F48D}\uDC8D", "Ring");
export const gemStone = new Emoji("\u{1F48E}\uDC8E", "Gem Stone");
export const newspaper = new Emoji("\u{1F4F0}\uDCF0", "Newspaper");
export const fire = new Emoji("\u{1F525}\uDD25", "Fire");
export const pistol = new Emoji("\u{1F52B}\uDD2B", "Pistol");
export const candle = new Emoji("\u{1F56F}\uDD6F\uFE0F", "Candle");
export const framedPicture = new Emoji("\u{1F5BC}\uDDBC\uFE0F", "Framed Picture");
export const rolledUpNewspaper = new Emoji("\u{1F5DE}\uDDDE\uFE0F", "Rolled-Up Newspaper");
export const worldMap = new Emoji("\u{1F5FA}\uDDFA\uFE0F", "World Map");
export const toilet = new Emoji("\u{1F6BD}\uDEBD", "Toilet");
export const shower = new Emoji("\u{1F6BF}\uDEBF", "Shower");
export const bathtub = new Emoji("\u{1F6C1}\uDEC1", "Bathtub");
export const couchAndLamp = new Emoji("\u{1F6CB}\uDECB\uFE0F", "Couch and Lamp");
export const bed = new Emoji("\u{1F6CF}\uDECF\uFE0F", "Bed");
export const lotionBottle = new Emoji("\u{1F9F4}\uDDF4", "Lotion Bottle");
export const thread = new Emoji("\u{1F9F5}\uDDF5", "Thread");
export const yarn = new Emoji("\u{1F9F6}\uDDF6", "Yarn");
export const safetyPin = new Emoji("\u{1F9F7}\uDDF7", "Safety Pin");
export const teddyBear = new Emoji("\u{1F9F8}\uDDF8", "Teddy Bear");
export const broom = new Emoji("\u{1F9F9}\uDDF9", "Broom");
export const basket = new Emoji("\u{1F9FA}\uDDFA", "Basket");
export const rollOfPaper = new Emoji("\u{1F9FB}\uDDFB", "Roll of Paper");
export const soap = new Emoji("\u{1F9FC}\uDDFC", "Soap");
export const sponge = new Emoji("\u{1F9FD}\uDDFD", "Sponge");
export const chair = new Emoji("\u{1FA91}\uDE91", "Chair");
export const razor = new Emoji("\u{1FA92}\uDE92", "Razor");
export const reminderRibbon = new Emoji("\u{1F397}\uDF97\uFE0F", "Reminder Ribbon");
export const filmFrames = new Emoji("\u{1F39E}\uDF9E\uFE0F", "Film Frames");
export const admissionTickets = new Emoji("\u{1F39F}\uDF9F\uFE0F", "Admission Tickets");
export const carouselHorse = new Emoji("\u{1F3A0}\uDFA0", "Carousel Horse");
export const ferrisWheel = new Emoji("\u{1F3A1}\uDFA1", "Ferris Wheel");
export const rollerCoaster = new Emoji("\u{1F3A2}\uDFA2", "Roller Coaster");
export const circusTent = new Emoji("\u{1F3AA}\uDFAA", "Circus Tent");
export const ticket = new Emoji("\u{1F3AB}\uDFAB", "Ticket");
export const clapperBoard = new Emoji("\u{1F3AC}\uDFAC", "Clapper Board");
export const performingArts = new Emoji("\u{1F3AD}\uDFAD", "Performing Arts");
export const label = new Emoji("\u{1F3F7}\uDFF7\uFE0F", "Label");
export const volcano = new Emoji("\u{1F30B}\uDF0B", "Volcano");
export const snowCappedMountain = new Emoji("\u{1F3D4}\uDFD4\uFE0F", "Snow-Capped Mountain");
export const mountain = new Emoji("\u26F0\uFE0F", "Mountain");
export const camping = new Emoji("\u{1F3D5}\uDFD5\uFE0F", "Camping");
export const beachWithUmbrella = new Emoji("\u{1F3D6}\uDFD6\uFE0F", "Beach with Umbrella");
export const umbrellaOnGround = new Emoji("\u26F1\uFE0F", "Umbrella on Ground");
export const japaneseCastle = new Emoji("\u{1F3EF}\uDFEF", "Japanese Castle");
export const footprints = new Emoji("\u{1F463}\uDC63", "Footprints");
export const mountFuji = new Emoji("\u{1F5FB}\uDDFB", "Mount Fuji");
export const tokyoTower = new Emoji("\u{1F5FC}\uDDFC", "Tokyo Tower");
export const statueOfLiberty = new Emoji("\u{1F5FD}\uDDFD", "Statue of Liberty");
export const mapOfJapan = new Emoji("\u{1F5FE}\uDDFE", "Map of Japan");
export const moai = new Emoji("\u{1F5FF}\uDDFF", "Moai");
export const bellhopBell = new Emoji("\u{1F6CE}\uDECE\uFE0F", "Bellhop Bell");
export const luggage = new Emoji("\u{1F9F3}\uDDF3", "Luggage");
export const flagInHole = new Emoji("\u26F3", "Flag in Hole");
export const tent = new Emoji("\u26FA", "Tent");
export const hotSprings = new Emoji("\u2668\uFE0F", "Hot Springs");
export const castle = new Emoji("\u{1F3F0}\uDFF0", "Castle");
export const bowAndArrow = new Emoji("\u{1F3F9}\uDFF9", "Bow and Arrow");
export const tridentEmblem = new Emoji("\u{1F531}\uDD31", "Trident Emblem");
export const dagger = new Emoji("\u{1F5E1}\uDDE1\uFE0F", "Dagger");
export const shield = new Emoji("\u{1F6E1}\uDEE1\uFE0F", "Shield");
export const crystalBall = new Emoji("\u{1F52E}\uDD2E", "Crystal Ball");
export const crossedSwords = new Emoji("\u2694\uFE0F", "Crossed Swords");
export const fleurDeLis = new Emoji("\u269C\uFE0F", "Fleur-de-lis");
export const doubleExclamationMark = new Emoji("\u203C\uFE0F", "Double Exclamation Mark");
export const exclamationQuestionMark = new Emoji("\u2049\uFE0F", "Exclamation Question Mark");
export const information = new Emoji("\u2139\uFE0F", "Information");
export const circledM = new Emoji("\u24C2\uFE0F", "Circled M");
export const checkMarkButton = new Emoji("\u2705", "Check Mark Button");
export const checkMark = new Emoji("\u2714\uFE0F", "Check Mark");
export const eightSpokedAsterisk = new Emoji("\u2733\uFE0F", "Eight-Spoked Asterisk");
export const crossMark = new Emoji("\u274C", "Cross Mark");
export const crossMarkButton = new Emoji("\u274E", "Cross Mark Button");
export const questionMark = new Emoji("\u2753", "Question Mark");
export const whiteQuestionMark = new Emoji("\u2754", "White Question Mark");
export const whiteExclamationMark = new Emoji("\u2755", "White Exclamation Mark");
export const exclamationMark = new Emoji("\u2757", "Exclamation Mark");
export const curlyLoop = new Emoji("\u27B0", "Curly Loop");
export const doubleCurlyLoop = new Emoji("\u27BF", "Double Curly Loop");
export const wavyDash = new Emoji("\u3030\uFE0F", "Wavy Dash");
export const partAlternationMark = new Emoji("\u303D\uFE0F", "Part Alternation Mark");
export const tradeMark = new Emoji("\u2122\uFE0F", "Trade Mark");
export const copyright = new Emoji("\u00A9\uFE0F", "Copyright");
export const registered = new Emoji("\u00AE\uFE0F", "Registered");
export const squareFourCorners = new Emoji("\u26F6\uFE0F", "Square: Four Corners");
export const droplet = new Emoji("\u{1F4A7}\uDCA7", "Droplet");
export const dropOfBlood = new Emoji("\u{1FA78}\uDE78", "Drop of Blood");
export const adhesiveBandage = new Emoji("\u{1FA79}\uDE79", "Adhesive Bandage");
export const stethoscope = new Emoji("\u{1FA7A}\uDE7A", "Stethoscope");
export const syringe = new Emoji("\u{1F489}\uDC89", "Syringe");
export const pill = new Emoji("\u{1F48A}\uDC8A", "Pill");
export const testTube = new Emoji("\u{1F9EA}\uDDEA", "Test Tube");
export const petriDish = new Emoji("\u{1F9EB}\uDDEB", "Petri Dish");
export const dNA = new Emoji("\u{1F9EC}\uDDEC", "DNA");
export const abacus = new Emoji("\u{1F9EE}\uDDEE", "Abacus");
export const magnet = new Emoji("\u{1F9F2}\uDDF2", "Magnet");
export const telescope = new Emoji("\u{1F52D}\uDD2D", "Telescope");
export const whiteChessKing = new Emoji("\u2654", "White Chess King");
export const whiteChessQueen = new Emoji("\u2655", "White Chess Queen");
export const whiteChessRook = new Emoji("\u2656", "White Chess Rook");
export const whiteChessBishop = new Emoji("\u2657", "White Chess Bishop");
export const whiteChessKnight = new Emoji("\u2658", "White Chess Knight");
export const whiteChessPawn = new Emoji("\u2659", "White Chess Pawn");
export const blackChessKing = new Emoji("\u265A", "Black Chess King");
export const blackChessQueen = new Emoji("\u265B", "Black Chess Queen");
export const blackChessRook = new Emoji("\u265C", "Black Chess Rook");
export const blackChessBishop = new Emoji("\u265D", "Black Chess Bishop");
export const blackChessKnight = new Emoji("\u265E", "Black Chess Knight");
export const blackChessPawn = new Emoji("\u265F", "Black Chess Pawn");
