import type { ErsatzEventTarget } from "kudzu/events/ErsatzEventTarget";
import { TypedEventBase } from "kudzu/events/EventBase";
import { IFetcher } from "kudzu/io/IFetcher";
import { AudioManager } from "../audio/AudioManager";
import type { MediaPermissionSet } from "../audio/MediaDevices";
import type { CallaTeleconferenceEvents } from "../CallaEvents";
import { ConnectionState } from "../ConnectionState";
import type { ITeleconferenceClientExt } from "./ITeleconferenceClient";
export declare function addLogger(obj: ErsatzEventTarget, evtName: string): void;
export declare const DEFAULT_LOCAL_USER_ID = "local-user";
export declare abstract class BaseTeleconferenceClient extends TypedEventBase<CallaTeleconferenceEvents> implements ITeleconferenceClientExt {
    needsAudioDevice: boolean;
    needsVideoDevice: boolean;
    toggleLogging(): void;
    localUserID: string;
    localUserName: string;
    roomName: string;
    protected fetcher: IFetcher;
    audio: AudioManager;
    private _connectionState;
    private _conferenceState;
    hasAudioPermission: boolean;
    hasVideoPermission: boolean;
    get connectionState(): ConnectionState;
    private setConnectionState;
    get conferenceState(): ConnectionState;
    private setConferenceState;
    constructor(fetcher: IFetcher, audio: AudioManager, needsAudioDevice?: boolean, needsVideoDevice?: boolean);
    protected onDispatching<T extends Event>(evt: T): void;
    getNext<T extends keyof CallaTeleconferenceEvents>(evtName: T, userID: string): Promise<CallaTeleconferenceEvents[T]>;
    get preferredAudioInputID(): string;
    set preferredAudioInputID(v: string);
    get preferredVideoInputID(): string;
    set preferredVideoInputID(v: string);
    setPreferredDevices(): Promise<void>;
    getPreferredAudioInput(allowAny: boolean): Promise<MediaDeviceInfo>;
    setPreferredAudioInput(allowAny: boolean): Promise<void>;
    getPreferredVideoInput(allowAny: boolean): Promise<MediaDeviceInfo>;
    setPreferredVideoInput(allowAny: boolean): Promise<void>;
    private getDevices;
    getMediaPermissions(): Promise<MediaPermissionSet>;
    private getAvailableDevices;
    getAudioInputDevices(filterDuplicates?: boolean): Promise<MediaDeviceInfo[]>;
    getVideoInputDevices(filterDuplicates?: boolean): Promise<MediaDeviceInfo[]>;
    setAudioOutputDevice(device: MediaDeviceInfo): Promise<void>;
    getAudioOutputDevices(filterDuplicates?: boolean): Promise<MediaDeviceInfo[]>;
    getCurrentAudioOutputDevice(): Promise<MediaDeviceInfo>;
    get preferredAudioOutputID(): string;
    set preferredAudioOutputID(v: string);
    getPreferredAudioOutput(allowAny: boolean): Promise<MediaDeviceInfo>;
    setPreferredAudioOutput(allowAny: boolean): Promise<void>;
    setAudioInputDevice(device: MediaDeviceInfo): Promise<void>;
    setVideoInputDevice(device: MediaDeviceInfo): Promise<void>;
    connect(): Promise<void>;
    join(_roomName: string, _password?: string): Promise<void>;
    leave(): Promise<void>;
    disconnect(): Promise<void>;
    abstract userExists(id: string): boolean;
    abstract getUserNames(): string[][];
    abstract identify(userNameOrID: string): Promise<void>;
    abstract getCurrentAudioInputDevice(): Promise<MediaDeviceInfo>;
    abstract getCurrentVideoInputDevice(): Promise<MediaDeviceInfo>;
    abstract toggleAudioMuted(): Promise<boolean>;
    abstract toggleVideoMuted(): Promise<boolean>;
    abstract getAudioMuted(): Promise<boolean>;
    abstract getVideoMuted(): Promise<boolean>;
}
